from rest_framework import serializers
from films.models import Film, Category

class FilmSerializer(serializers.ModelSerializer):
  class Meta:
    model = Film
    fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'
