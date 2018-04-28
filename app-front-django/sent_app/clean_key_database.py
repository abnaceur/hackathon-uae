import os
import sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sent_app.settings')

import django
django.setup()

from dictionnary.models import Word

def main():
	key = 0
	words = Word.objects.all()
	for w in words:
		w.key = key
		w.save()
		key += 1

if __name__ == "__main__":
	main()
