import json
from email.mime.multipart import MIMEMultipart
from asgiref.sync import sync_to_async
from rest_framework.decorators import api_view
from adrf.decorators import api_view as async_api_view
from rest_framework.response import Response
from .serializers import CurrentOrderSerializer, PastOrderSerializer, CurrentReservationSerializer
from .models import CurrentOrder, CurrentReservation
from email.mime.text import MIMEText
import asyncio, os, smtplib
from dotenv import load_dotenv
from pathlib import Path
from django.conf import settings
from datetime import datetime
from django.middleware.csrf import get_token

load_dotenv()
delivery_wait_time = int(os.getenv("DELIVERY_WAIT_TIME")) * 60
gmail_address = os.getenv("GMAIL_ADDRESS")
gmail_password = os.getenv("GMAIL_PASSWORD")

"""
sends an email to the recipient email with the subject as the subject, and body as the message
it creates an smtp server, sends the message, and closes the server
"""
def send_email(recipient, subject, body):
    smtp = smtplib.SMTP('smtp.gmail.com', 587)
    smtp.starttls()
    smtp.login(gmail_address, gmail_password)

    message = MIMEText(body, 'plain', 'utf-8')
    message['Subject'] = subject
    message['From'] = gmail_address

    smtp.sendmail(gmail_address, recipient, message.as_string())
    smtp.quit()

"""
sets a timer that waits for an order to be finished, then notifies the customer
"""
async def set_timer(order_data):
    order_wait_time = order_data["orderTime"] # order wait time in minutes
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
    await asyncio.sleep(order_wait_time * 60 ) # waits for order to be done, converted to seconds

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

"""
function for retrieving the csrf token
"""
@api_view(['GET'])
def get_csrf_token(request):
    token = get_token(request)
    return Response({"token": token}, status=200)

"""
api endpoint for placing an order for tracking, removes it after the order has been completed
creates a current order and a past order
"""
@async_api_view(["POST"])
async def placeorder(request):
    current_serializer = CurrentOrderSerializer(data=request.data)

    if current_serializer.is_valid():
        queue_position = await sync_to_async(CurrentOrder.objects.count)() + 1
        current_serializer.validated_data["queuePosition"] = queue_position

        await sync_to_async(current_serializer.save)()
        past_serializer = PastOrderSerializer(data=request.data)

        if past_serializer.is_valid():
            await sync_to_async(past_serializer.save)()

        asyncio.create_task(set_timer(current_serializer.data))

        return Response({"data": {"queuePosition": queue_position}}, status=200)
    return Response({"error": f"issue placing order {current_serializer.data['name']}"}, status=400)

"""
api endpoint for making a reservation
notifices the user when the reservation has been made
"""
@api_view(['POST'])
def placereservation(request):
    first_name = request.data['name'].split(" ")[0]
    reservation_datetime = datetime.strptime(request.data["reservationDateTime"], "%Y-%m-%d %H:%M")
    email_address = request.data["email"]
    email_path = Path(settings.BASE_DIR) / "assets/email_templates/reservation_placed.txt"
    current_serializer = CurrentReservationSerializer(data=request.data)

    if current_serializer.is_valid():
        current_serializer.save()

        with email_path.open("r") as email:
            message = email.read()
        message = message.replace("{first_name}", first_name)
        message = message.replace("{date}", str(reservation_datetime.date()))
        message = message.replace("{time}", str(reservation_datetime.time()))

        send_email(email_address, "Reservation Placed", message)

        return Response({"data": "reservation placed successfully"}, status=200)
    return Response({"error": current_serializer.errors}, status=400)



# def check_reservations():
#     reservations = CurrentReservationSerializer(CurrentReservation.objects.all(), many=True).data
#     now = datetime.now()
#     reservation_reminder_path = Path(settings.BASE_DIR) / "assets/email_templates/reservation_reminder.txt"
#
#     for reservation in reservations:
#         if reservation["reservationDateTime"] < now:
#             reservation.delete()
#         if reservation["reservationDateTime"] + timedelta(hours=1) < now:
#             with reservation_reminder_path.open("r") as email:
#                 message = email.read()
#             message.replace("{first_name}", reservation["name"].split(" ")[0])
#
#             send_email(reservation["email"], "Your Reservation", reservation["reservationDateTime"])
