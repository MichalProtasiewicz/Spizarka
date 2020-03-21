from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=100)


class Film(models.Model):
  categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)
  name = models.CharField(max_length=100)
  description = models.TextField()
  votes = models.FloatField(default = 0)
  rate = models.FloatField(default = 0)


class User(models.Model):
  email = models.EmailField()
  login = models.CharField(max_length=100)
  password = models.CharField(max_length=100)
  permissions = models.FloatField(default = 1)


class Comments(models.Model):
  filmId = models.ForeignKey(Film, on_delete=models.CASCADE)
  userId = models.ForeignKey(User, on_delete=models.CASCADE)
  commentBody = models.TextField()
  createdAt = models.DateField()
  updatedAt = models.DateField()
