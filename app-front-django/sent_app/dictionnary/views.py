# django import
from django.shortcuts import render
from django.http import HttpResponse
from django import template
from  dictionnary.models import Word

# stdlib import
import os

def set_session(request):
	if request.POST.get("fromDialect"):
		request.session['fromDialect'] = request.POST.get("fromDialect")

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
		post = True
		set_session(request)
		dialect = request.session["fromDialect"]
		words = Word.objects.filter(dialect=request.session['fromDialect']).all()
		keys = request.POST.keys();
		for w in words:
			if str(w.key) in keys:
				setattr(w, 'translated', True)
#w.translated = False
				w.save()
	return render(request, "dictionnary/display_dialect.html/", locals())
