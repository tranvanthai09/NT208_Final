from django.shortcuts import render
from shop_app.models import Product

# Create your views here.
def home(request):
    object = Product.objects.all()
    context = {
        'products': object
    }
    return render(request,'home.html',context)