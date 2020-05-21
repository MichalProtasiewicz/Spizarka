from products.models import Product, Category, User
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, CategorySerializer, UserSerializer

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


class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  permission_classes = [
      permissions.AllowAny
  ]
  serializer_class = UserSerializer
