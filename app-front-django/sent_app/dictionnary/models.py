from django.db import models
from django.utils import timezone

# Create your models here.
class Word(models.Model):
	word = models.CharField(max_length = 200)
	dialect = models.CharField(max_length = 50)
	key = models.IntegerField()

	def publish(self):
		self.published_date = timezone.now()
		self.save()

	def __str__(self):
		return self.word
