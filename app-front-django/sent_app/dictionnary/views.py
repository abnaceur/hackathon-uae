from django.shortcuts import render
from django.http import HttpResponse
from django import template
import os

# Create your views here.
def debug_dict(request):
	return (HttpResponse("<h1>OK</h1>"))

def home(request):
	path = '/home/ancap/Documents/uae/sent_app/static/images/'
	return (render(request, "dictionnary/index.html", locals()))

def translator(request):
	return (render(request, "dictionnary/translator.html", locals()))

