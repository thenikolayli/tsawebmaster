from django.urls import path
from .views import placeorder

urlpatterns = [
    path("placeorder/", placeorder),
]