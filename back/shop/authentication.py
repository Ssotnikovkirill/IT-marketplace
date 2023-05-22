from rest_framework import exceptions, authentication

from shop.models import User


class UserApiTokenAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        api_token = request.META.get('HTTP_TOKEN', None)
        if not api_token:
            raise exceptions.AuthenticationFailed('Please enter access token')
        try:
            return User.objects.get(API_Key=api_token), None
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('Invalid access token')
