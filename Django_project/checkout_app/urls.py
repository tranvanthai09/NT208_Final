from django.urls import path
from . import views

app_name = 'checkout_app'
urlpatterns = [
    path('', views.checkout, name = 'checkout'),
]
