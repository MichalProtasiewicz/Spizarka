from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=45)


class User(models.Model):
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=45)


class Product(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    categoryId = models.ForeignKey(
        Category, on_delete=models.SET_DEFAULT, default=0)
    name = models.CharField(max_length=45)
    quantity = models.IntegerField(default=0)
    minQuantity = models.IntegerField(default=0)
