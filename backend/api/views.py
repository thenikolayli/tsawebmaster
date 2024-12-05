from email.mime.multipart import MIMEMultipart

from asgiref.sync import sync_to_async
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CurrentOrderSerializer, PastOrderSerializer
from .models import CurrentOrder
from email.mime.text import MIMEText
import asyncio, os, smtplib
from dotenv import load_dotenv
from pathlib import Path
from django.conf import settings

load_dotenv()
delivery_wait_time = 3 # os.getenv("DELIVERY_WAIT_TIME") * 60
gmail_address = os.getenv("GMAIL_ADDRESS")
gmail_password = os.getenv("GMAIL_PASSWORD")

def send_email(recipient, subject, body):
    smtp = smtplib.SMTP('smtp.gmail.com', 587)
    smtp.starttls()
    smtp.login(gmail_address, gmail_password)

    message = MIMEText(body, 'plain', 'utf-8')
    message['Subject'] = subject
    message['From'] = gmail_address

    smtp.sendmail(gmail_address, recipient, message.as_string())
    smtp.quit()

async def set_timer(order_data):
    order_wait_time = 3 # order_data["orderTime"] * 60 # order wait time in minutes
    recipient_email = order_data['email']
    recipient_name = order_data['name']
    queue_position = order_data['queuePosition']
    order_placed_path = Path(settings.BASE_DIR) / "assets/email_templates/order_placed.txt"
    out_for_delivery_path = Path(settings.BASE_DIR) / "assets/email_templates/out_for_delivery.txt"
    has_been_delivered = Path(settings.BASE_DIR) / "assets/email_templates/has_been_delivered.txt"
    ready_for_pickup = Path(settings.BASE_DIR) / "assets/email_templates/ready_for_pickup.txt"

    with order_placed_path.open("r") as email:
        message = email.read()
    message = message.replace("{name}", str(recipient_name))
    message = message.replace("{orderTime}", str(order_wait_time))
    message = message.replace("{queuePosition}", str(queue_position))

    send_email(recipient_email, "Your Order", message)
    await asyncio.sleep(order_wait_time) # waits for order to be done

    if order_data["orderType"] == "delivery":
        with out_for_delivery_path.open("r") as email:
            message = email.read()
        message = message.replace("{name}", str(recipient_name))
        message = message.replace("{deliveryWaitTime}", str(delivery_wait_time))

        send_email(recipient_email, "Your Order", message)
        await asyncio.sleep(delivery_wait_time) # waits for order to be delivered

        with has_been_delivered.open("r") as email:
            message = email.read()
        message = message.replace("{name}", str(recipient_name))

        send_email(recipient_email, "Your Order", message)
    elif order_data["orderType"] == "pickup":
        with ready_for_pickup.open("r") as email:
            message = email.read()
        message = message.replace("{name}", str(recipient_name))

        send_email(recipient_email, "Your Order", message)

    await sync_to_async(lambda: CurrentOrder.objects.get(id=order_data["id"]).delete())() # deletes CurrentOrder model

@csrf_exempt
@api_view(['POST'])
def placeorder(request):
    current_serializer = CurrentOrderSerializer(data=request.data)

    if current_serializer.is_valid():
        queue_position = CurrentOrder.objects.count() + 1
        current_serializer.validated_data["queuePosition"] = queue_position
        current_serializer.save()
        past_serializer = PastOrderSerializer(data=request.data)

        if past_serializer.is_valid():
            past_serializer.save()

        asyncio.run(set_timer(current_serializer.data))

        return Response({"data": {"queuePosition": queue_position}}, status=200)
    return Response({"error": f"issue placing order {current_serializer.data['name']}"}, status=400)