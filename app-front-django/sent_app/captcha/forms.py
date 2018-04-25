from django import forms

class LoginForm(forms.Form):
	name = forms.CharField(max_length = 100)
	password = forms.CharField(widget = forms.PasswordInput())
	email = forms.CharField(widget = forms.EmailInput())
	adress = forms.CharField(max_length = 100)
	adress2 = forms.CharField(max_length = 100)
	dialect = forms.MultipleChoiceField()
