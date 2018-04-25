from django.shortcuts import render
from django.http import HttpResponse

import os
import sys
#sys.path.append("/home/ancap/Documents/uae/AraSenti/")
sys.path.append(os.getcwd() + "../analysis/scripts/")
import analysis.scripts.analyser as sent

# Les vues retournent obligatoirement une instance de HttpResponse
# Par la suite, toujours retourner des template, pas du html
def debug(request):
	return HttpResponse("<h1>%s</h1>" % os.getcwd())

def analysis(request):
	if request.method == 'GET':
		string = request.GET['string']
	else:
		return
	string = sent.main(string)
	return (HttpResponse("<h1>%s</h1>" % string))

# Create your views here.
