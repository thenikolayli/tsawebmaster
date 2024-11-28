from django.contrib import admin

from .models import CurrentOrder, PastOrder

# Register your models here.
admin.site.register(CurrentOrder)
admin.site.register(PastOrder)