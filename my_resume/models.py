
from django.db import models

# Create your models here.


class ContactMe(models.Model):

    email = models.EmailField()
    subject = models.CharField(max_length=230)
    message = models.TextField()

    def __str__(self):
        return self.email
