from django.urls import path
from . import views
from product_app.views import product_detail

app_name = 'shop_app'

urlpatterns = [
    path('', views.shop, name='shop'),
    path('get_products/<str:component>/', views.get_products, name='get_products'),
    path('product/<slug:slug>.p-<int:product_id>/', product_detail, name='product_detail'),
]
