#django imports
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django import template
from captcha.forms import LoginForm
from captcha.models import Phrase

#python imports
import random

# Create your views here.
def index(request):
	return render(request, "captcha/amazon.html", locals())

def login(request):
	return render(request, "captcha/login.html", locals())

def captcha(request):
	if request.method == "POST":
		loginForm = LoginForm(request.POST)
		name = request.POST.get("inputName")
		email = request.POST.get("inputEmail")
		password = request.POST.get("inputPassword")
		address = request.POST.get("address1")
		adress2 = request.POST.get("address2")
		city = request.POST.get("city")
		dialect = request.POST.get("dialect")
		phrases = Phrase.objects.all()
		a  = 42
		while a != 0:
			sentence= random.choice(phrases)
			if sentence.sentiment == "None":
				break
			a -= 1
	return render(request, "captcha/captcha.html", locals())

def success(request):
	""" PLUS QU'A UPDATE LA BDD AVEC LA NOUVELLE VALEUR DU SENTIMENT POUR
		QU'IL NE SOIT PAR REPROPOSE ET ON EST BON"""
	if request.method == "POST":
		answer = request.POST.get("sent")
	return redirect("https://www.amazon.fr/gp/cart/view.html/ref=nav_cart")
#return redirect("https://www.amazon.fr/")
#return render(request, "captcha/success.html", locals())
