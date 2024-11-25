from rest_framework import serializers
from .models import CurrentOrder, PastOrder

class CurrentOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentOrder
        fields = ["items", "total", "tip", "name", "orderType", "orderTime", "contactType", "contact"]

class PastOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastOrder
        fields = '__all__'
