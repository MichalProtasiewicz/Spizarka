from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=100)

class Product(models.Model):
  categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)
  name = models.CharField(max_length=100)
  description = models.TextField()
  votes = models.FloatField(default = 0)
  rate = models.FloatField(default = 0)


