from django.db import models
from django.utils import timezone

# Create your models here.
class	Phrase(models.Model):
	phrase = models.CharField(max_length = 200)
	dialect = models.CharField(max_length = 50)
	sentiment = models.CharField(max_length = 10)

	def publish(self):
		self.published_date = timezone.now()
		self.save()
	
	def __str__(self):
		return self.phrase
