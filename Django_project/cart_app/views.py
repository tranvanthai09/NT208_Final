from django.shortcuts import render,redirect
from shop_app.models import Product
# Create your views here.

def cart(request):
    return render(request,'cart.html')  