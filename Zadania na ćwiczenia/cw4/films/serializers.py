from rest_framework import serializers
from .models import Film, Category, User, Comment


class FilmSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    description = serializers.TextField()
    votes = serializers.FloatField(default=0)
    rate = serializers.FloatField(default=0)

    def validate_votes(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "Value lower than 0",
            )
        return value

    def validate_rate(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "Value lower than 0",
            )
        return value

    def create(self, validated_data):
        return Film(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.votes = validated_data.get('votes', instance.votes)
        instance.rate = validated_data.get('rate', instance.rate)
        return instance


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__'
