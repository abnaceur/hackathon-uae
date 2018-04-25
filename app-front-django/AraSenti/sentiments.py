import csv

#https://trends24.in/saudi-arabia/

def find_word(word, dictionnary):
    for w in dictionnary:
        if word == w[0]:
            return w[1]
    return 0

def analyse(phrase, dictionnary):
	score = 0
	phrase = phrase.split(" ")
	phrase = [w.strip() for w in phrase if w != '']
	print(phrase)
	for w in phrase:
		if (w in dictionnary.keys()):
			score += float(dictionnary[w])
	if (score < -1):
		print("negative, (%s)" % score)
		res = "negative, (%s)" % score
	elif (score > 1):
		print ("positive, (%s)" % score)
		res = "positive, (%s)" % score
	else:
	 	print ("neutral, (%s)" % score)
	 	res = "neutral, (%s)" % score


def load_dict():
    dic = {}
    print("load dictionnary...")
    f = open('dict_saudi.csv', 'r')
    dictionnary = f.readlines()
    for i in dictionnary:
        string = i.split(";")
        dic[string[0]] = string[1].strip()
    f.close()
    print("dictionnary loaded")
    return dic

def main():
	dictionnary = load_dict()
	phrase = input("phrase: ")
	res = analyse(phrase, dictionnary)
	print(res)
	return res
    

if __name__ == "__main__":
    main()
