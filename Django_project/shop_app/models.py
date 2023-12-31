from django.db import models
from django.utils.text import slugify

# Create your models here.
class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.IntegerField()
    img_url = models.TextField(null=True)
    Robusta = models.BooleanField()
    Arabica = models.BooleanField()
    Culi = models.BooleanField()
    slug = models.SlugField(max_length=100, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.product_name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return str(self.product_id)
    
