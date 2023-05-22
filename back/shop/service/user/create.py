from rest_framework.authtoken.models import Token
from service_objects.services import ServiceWithResult
from django import forms

from shop.models import User


class UserCreateService(ServiceWithResult):
    username = forms.CharField()
    password = forms.CharField()

    def process(self):
        self.result = self._create_user
        return self

    @property
    def _create_user(self):
        user = User.objects.create(
            username=self.cleaned_data['username'],
            password=self.cleaned_data['password']
        )
        user.API_Key = Token.objects.create(user=user).key
        user.save()
        return user
