from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Venue(models.Model):
    name = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    phone = models.BigIntegerField()
    image_link = models.CharField(max_length=30, blank=True, null=True)
    facebook_link = models.CharField(max_length=30, blank=True, null=True)
    genres = ArrayField(models.CharField(max_length=30))
    website = models.CharField(max_length=30, blank=True, null=True)
    seeking_talent = models.BooleanField()
    seeking_description = models.CharField(max_length=30, blank=True, null=True)

    def __str__(self):
        return self.name


class Artist(models.Model):
    name = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    phone = models.BigIntegerField()
    image_link = models.CharField(max_length=30, blank=True, null=True)
    facebook_link = models.CharField(max_length=30, blank=True, null=True)
    genres = ArrayField(models.CharField(max_length=30))
    website = models.CharField(max_length=30, blank=True, null=True)
    seeking_venue = models.BooleanField()
    seeking_description = models.CharField(max_length=30, blank=True, null=True)

    def __str__(self):
        return self.name

class Show(models.Model):
    start_time = models.DateTimeField()
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)