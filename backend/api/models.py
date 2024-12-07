from datetime import datetime

from django.db import models
from django.db.models import JSONField, FloatField, CharField, IntegerField, EmailField, DateTimeField


# Create your models here.
class CurrentOrder(models.Model):
    items = JSONField(default=dict)
    total = FloatField(default=0)
    tip = FloatField(default=0)
    name = CharField(max_length=100, blank=False, default="")
    queuePosition = IntegerField(default=0, blank=True)
    orderType = CharField(default="", max_length=24, blank=False)  # delivery or pickup
    orderTime = FloatField(default=0)
    email = EmailField(default="", max_length=100, blank=False)

class PastOrder(models.Model):
    items = JSONField(default=dict)
    total = FloatField(default=0)
    tip = FloatField(default=0)
    orderType = CharField(default="", max_length=24) # delivery of pickup
    orderTime = FloatField(default=0)


class CurrentReservation(models.Model):
    name = CharField(max_length=100, blank=False, default="")
    email = EmailField(default="", max_length=100, blank=False)
    partySize = IntegerField(default=1, blank=False)
    reservationDateTime = DateTimeField(default=datetime.now, blank=False)