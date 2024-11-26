from asgiref.sync import sync_to_async
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CurrentOrderSerializer, PastOrderSerializer
from .models import CurrentOrder
import asyncio


async def settimer(order_data):
    # await asyncio.sleep(order_data["orderTime"] * 60) # waits for order to finish
    await asyncio.sleep(3)
    await sync_to_async(lambda: CurrentOrder.objects.get(id=order_data["id"]).delete())() # deletes CurrentOrder model
#     notify person that their order is ready for pickup or delivery

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

        asyncio.run(settimer(current_serializer.data))

        return Response({"data": {"queuePosition": queue_position}}, status=200)
    return Response({"error": f"issue placing order {current_serializer.data['name']}"}, status=400)