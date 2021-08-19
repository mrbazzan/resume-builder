
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.urls import reverse
from django import forms


class EmailForm(forms.Form):
    email = forms.EmailField(widget=forms.TextInput(attrs={'autocomplete': 'off'}))

    def __str__(self):
        return self.email


def index(request):

    if request.method == 'POST':
        mail = request.POST.get('mail')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        if subject == '' or message == '':
            pass
            # TODO: find something to do here
            # todo: The database stuff too.
        else:
            send_mail(
                subject,
                message,
                mail,
                ['donbazzan@gmail.com'],
                fail_silently=False,
            )
        return redirect(reverse('index'))

    return render(request, "index.html", {
        'form': EmailForm()
    })
