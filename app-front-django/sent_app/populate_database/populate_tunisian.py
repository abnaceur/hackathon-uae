import os
import sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sent_app.settings')

import django
django.setup()

from dictionnary.models import Word

def add_word(word, dialect, key, translated):
	new_word = Word.objects.get_or_create(word = word, dialect = dialect, key = key, translated = translated)
	#print(new_word)

def populate(lines):
	key = 0
	for l in lines:
		words = l.split()
		for w in words:
			if ord(w[0]) > 0x0600 and ord(w[0]) < 0x6FF:
				add_word(w, 'Tunisian', key, False)
				key += 1
				#print(w)

def     parser(filename):
    try:
        f = open(filename, 'r', encoding='utf-8')
    except:
        print("file %s does not exists" % filename)
        return 0
    lines = f.readlines()
    f.close()
    return lines

def     main():
    if len(sys.argv) != 2:
        print("bad arguments")
        return
    if sys.argv[1] == "clean":
        clean()
        return
    filename = sys.argv[1]
    lines = parser(filename)
    if (lines == 0):
        return
    populate(lines)

if __name__ == "__main__":
	main()
