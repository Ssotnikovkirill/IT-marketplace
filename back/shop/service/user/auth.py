from django import forms
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from service_objects.errors import NotFound
from service_objects.services import ServiceWithResult

from shop.models import User


class UserAuthService(ServiceWithResult):
    API_Key = forms.CharField()

    def process(self):
        self.result = self._user
        return self

    @property
    def _user(self):
        try:
            return User.objects.get(API_Key=self.cleaned_data["API_Key"])
        except ObjectDoesNotExist:
            raise NotFound(message="User with this token not found", response_status=status.HTTP_404_NOT_FOUND)
