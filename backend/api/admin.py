from django.contrib import admin

from .models import CurrentOrder, PastOrder, CurrentReservation

# Register your models here.
admin.site.register(CurrentOrder)
admin.site.register(PastOrder)
admin.site.register(CurrentReservation)