from products.models import Product
from products.models import Category
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
  queryset = Category.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CategorySerializer
