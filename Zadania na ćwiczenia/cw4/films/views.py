from .models import Film, User, Category
from .serializers import FilmSerializer, UserSerializer, CategorySerializer
from rest_framework import generics


class FilmList(generics.ListCreateAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


class FilmDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

