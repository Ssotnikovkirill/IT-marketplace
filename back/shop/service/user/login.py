from django import forms
from django.core.exceptions import ObjectDoesNotExist
from service_objects.errors import NotFound
from service_objects.services import ServiceWithResult

from django.contrib.auth import authenticate

from shop.models import User


class UserLoginService(ServiceWithResult):
    username = forms.CharField()
    password = forms.CharField()

    def process(self):
        self.result = self._user
        return self

    @property
    def _user(self):
        try:
            return User.objects.get(username=self.cleaned_data['username'], password=self.cleaned_data['password'])
        except ObjectDoesNotExist:
            raise NotFound("Sorry, this user does not exist")
