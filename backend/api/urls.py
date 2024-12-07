from django.urls import path
from .views import placeorder, placereservation, get_csrf_token

urlpatterns = [
    path("placeorder/", placeorder),
    path("placereservation/", placereservation),
    path("gettoken/", get_csrf_token),
]