from films.models import Film
from films.models import Category
from rest_framework import viewsets, permissions
from .serializers import FilmSerializer, CategorySerializer

class FilmViewSet(viewsets.ModelViewSet):
  queryset = Film.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = FilmSerializer

class CategoryViewSet(viewsets.ModelViewSet):
  queryset = Category.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CategorySerializer
