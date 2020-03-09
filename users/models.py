from django.db import models

class User(models.Model):
  login = models.CharField(max_length=100, unique=True)
  password = models.CharField(max_length=100)
  name = models.CharField(max_length=100)
  subname = models.CharField(max_length=100)
  adres = models.CharField(max_length=100)
  zip_code = models.CharField(max_length=100)
  city = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  phone = models.CharField(max_length=100)
