#django imports
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django import template
from captcha.forms import LoginForm
from captcha.models import Phrase
from sent_app.settings import BASE_DIR, STATICFILES_DIR, STATIC_URL

#python imports
import random
import os

def set_session(request):
	request.session['inputName'] = request.POST.get("inputName")
	request.session["inputEmail"] = request.POST.get("inputEmail")
	request.session["address1"] = request.POST.get("address1")
	request.session["address2"] = request.POST.get("address2")
	request.session["city"] = request.POST.get("city")
	request.session["dialect"] = request.POST.get("dialect")

# Create your views here.
def index(request):
#amazon_fichiers = os.path.join(BASE_DIR, "templates/captcha/amazon_fichiers/")
	amazon_fichier = os.path.join(STATIC_URL, "amazon_fichiers/")
	return render(request, "captcha/amazon.html", locals())

def login(request):
	return render(request, "captcha/login.html", locals())

def captcha(request):
	if request.method == "POST":
		loginForm = LoginForm(request.POST)
		set_session(request)
	phrases = Phrase.objects.all()
	if request.session.has_key("inputName"):
		name = request.session["inputName"]
	if request.session.has_key("inputName"):
		dialect = request.session["dialect"]
	a  = 42
	while a != 0:
		sentence = random.choice(phrases)
		if sentence.sentiment == "None":
			break
		a -= 1
	return render(request, "captcha/captcha.html", locals())

def success(request):
	""" PLUS QU'A UPDATE LA BDD AVEC LA NOUVELLE VALEUR DU SENTIMENT POUR
		QU'IL NE SOIT PAR REPROPOSE ET ON EST BON"""
	if request.method == "POST":
		answer = request.POST.get("sent")
		if answer == "idk":
			return redirect("/captcha/captcha/")
	return redirect("https://www.amazon.fr/gp/cart/view.html/ref=nav_cart")
