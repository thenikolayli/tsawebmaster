from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CurrentOrderSerializer, PastOrderSerializer
from .models import CurrentOrder
import asyncio


async def settimer(order_data):
    await asyncio.sleep(order_data.data["time"] * 60)
    print(f"contact {order_data.data['email']} or {order_data.data['phone']} that order {order_data.data['title']} is complete")
#     remove CurrentOrder model

@csrf_exempt
@api_view(['POST'])
def placeorder(request):
    current_serializer = CurrentOrderSerializer(data=request.data)

    return Response("ahh")
    # if current_serializer.is_valid():
    #     current_serializer.data["queuePosition"] = CurrentOrder.objects.count() + 1
    #     current_serializer.save()
    #     past_serializer = PastOrderSerializer(data=request.data)
    #     past_serializer.save()
    #     asyncio.run(settimer(current_serializer.data))
    #
    #     return Response({"data": f"order {current_serializer.data['title']} placed successfully"}, status=200)
    # return Response({"error": f"issue placing order {current_serializer.data['title']}"}, status=400)