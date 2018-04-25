from django.shortcuts import render, redirect
from django.http import HttpResponse
from django import template
from captcha.forms import LoginForm

# Create your views here.
def index(request):
	return render(request, "captcha/index.html", locals())

def login(request):
	return render(request, "captcha/login.html", locals())

def captcha(request):
	if request.method == "POST":
		loginForm = LoginForm(request.POST)
		name = request.POST.get("inputName")
		email = request.POST.get("inputEmail")
		password = request.POST.get("inputPassword")
		address = request.POST.get("adress1")
		adress2 = request.POST.get("adress2")
		city = request.POST.get("city")
		dialect = request.POST.get("dialect")
	return render(request, "captcha/captcha.html", locals())

def success(request):
	return render(request, "captcha/success.html", locals())
