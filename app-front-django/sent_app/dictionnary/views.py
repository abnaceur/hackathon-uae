# django import
from django.shortcuts import render
from django.http import HttpResponse
from django import template
from  dictionnary.models import Word

# stdlib import
import os

# Create your views here.
def debug_dict(request):
	return (HttpResponse("<h1>OK</h1>"))

def home(request):
	path = '/home/ancap/Documents/uae/sent_app/static/images/'
	return (render(request, "dictionnary/index.html", locals()))

def project(request):
	return render(request, "dictionnary/description.html", locals())

def dictionnary(request):
	return (render(request, "dictionnary/project.html", locals()))

def display_dialect(request):
	if request.method == "POST":
		words = Word.objects.all()
	return render(request, "dictionnary/display_dialect.html/", locals())
		

