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


class Order(models.Model):
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_user = models.ForeignKey(Book, on_delete=models.CASCADE)
    data_order = models.DateField()
    data_receipt = models.DateField()
    data_return = models.DateField()


class Category(models.Model):
    name = models.CharField(max_length=100)


class Book(models.Model):
    id_user = models.ForeignKey(Categoty, on_delete=models.CASCADE)
    isbn = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publishing = models.CharField(max_length=100)
    data_publication = models.DateField()
    description = models.CharField(max_length=100)


class Employee(models.Model):
    login = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)


class Admin(models.Model):
    login = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
