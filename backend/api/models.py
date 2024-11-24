from django.db import models
from rest_framework.fields import JSONField, IntegerField, FloatField, EmailField, CharField


# Create your models here.
class CurrentOrder(models.Model):
    items = JSONField(default=dict)
    total = FloatField(default=0)
    tip = FloatField(default=0)
    name = CharField(max_length=100)
    queuePosition = IntegerField(default=0)
    orderTime = FloatField(default=0)
    orderType = CharField(default="") # delivery or pickup
    contact = CharField(default="")
    contactType = CharField(default="")

class PastOrder(models.Model):
    items = JSONField(default=dict)
    total = FloatField(default=0)
    tip = FloatField(default=0)
    orderTime = FloatField(default=0)
    orderType = CharField(default="") # delivery of pickup