from turtle import title
from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    roll = models.CharField(max_length=20)
    city = models.CharField(max_length=64)

class Movie(models.Model):
    img = models.CharField(max_length=500)
    title = models.CharField(max_length=64)
    studio = models.CharField(max_length=100)
    discription = models.CharField(max_length=500)