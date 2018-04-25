import os

def     find_word(word, dictionnary):
    for w in dictionnary:
        if word == w[0]:
            return w[1]
    return 0

def     analyse(phrase, dictionnary):
    score = 0
    phrase = phrase.split(" ")
    phrase = [w.strip() for w in phrase if w != '']
    for w in phrase:
        if (w in dictionnary.keys()):
            score += float(dictionnary[w])
    if (score <= -1):
        res = "negative, (%s)" % score
    elif (score >= 1):
        res = "positive, (%s)" % score
    else:
        res = "neutral, (%s)" % score
    return res

def     load_dict():
    dic = {}
    path = os.getcwd()
    f = open(path + '/app-front-django/sent_app/analysis/dict/dict_saudi.csv', 'r')
    dictionnary = f.readlines()
    for i in dictionnary:
        string = i.split(";")
        dic[string[0]] = string[1].strip()
    f.close()
    return dic

def     main(phrase):
    dictionnary = load_dict()
    res = analyse(phrase, dictionnary)
    return res

if __name__ == "__main__":
    print("analyser")
