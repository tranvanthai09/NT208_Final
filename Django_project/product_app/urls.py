from django.urls import path
from . import views

app_name = 'product_app'
urlpatterns = [
    path('<slug:slug>.p-<int:product_id>/', views.product_detail, name = 'product_detail'),
]
 