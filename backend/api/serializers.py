import json
from datetime import datetime, timedelta, time

import pytz, os
from dotenv import load_dotenv
from rest_framework import serializers
from .models import CurrentOrder, PastOrder, CurrentReservation

load_dotenv()

max_occupancy = int(os.getenv("MAX_OCCUPANCY"))
working_times = json.loads(os.getenv("WORKING_TIMES"))
open_time, close_time = datetime.strptime(working_times["open_time"], "%H:%M:%S").time(), datetime.strptime(working_times["close_time"], "%H:%M:%S").time()

class CurrentOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentOrder
        fields = "__all__"

class PastOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastOrder
        fields = '__all__'

class CurrentReservationSerializer(serializers.ModelSerializer):
    def validate(self, data):
        party_size = data["partySize"]
        now = datetime.now().replace(tzinfo=pytz.UTC)
        reservation_datetime = data["reservationDateTime"].replace(tzinfo=pytz.UTC)
        reservation_endtime = reservation_datetime + timedelta(hours=1)
        reservations_for_hour = CurrentReservation.objects.filter(reservationDateTime__range=(reservation_datetime, reservation_endtime))
        reservations_for_hour_serialized = CurrentReservationSerializer(reservations_for_hour, many=True).data

        occupancy_count = party_size
        for reservation in reservations_for_hour_serialized:
            occupancy_count += reservation["partySize"]

        if not party_size >= 1:
            raise serializers.ValidationError("Party size must be greater than 0")
        elif occupancy_count > max_occupancy:
            print("assa")
            raise serializers.ValidationError("Party size is too large for that hour that day")

        if reservation_datetime < now:
            raise serializers.ValidationError("Reservation cannot be in the past")
        elif reservation_datetime.time() < open_time or reservation_datetime.time() > close_time:
            raise serializers.ValidationError("Reservation is outside working times")

        return data

    class Meta:
        model = CurrentReservation
        fields = '__all__'