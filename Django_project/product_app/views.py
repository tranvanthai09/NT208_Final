from django.shortcuts import render, get_object_or_404,redirect
from django.urls import reverse
from shop_app.models import Product
    
def product_detail(request, slug, product_id):
    product = get_object_or_404(Product, pk=product_id)
    
    context = {
        'product': product
    }
    return render(request, 'product.html', context)