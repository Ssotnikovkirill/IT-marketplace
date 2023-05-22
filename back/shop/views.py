from rest_framework.views import APIView, status
from rest_framework.response import Response
from .serializers import UserSer, SchoolSer, BasketListSerializer, ProductSer, CategorySer
from .models import User, School, Category
from service_objects.services import ServiceOutcome

from .service.basket.create import BasketCreateService
from .service.basket.list import BasketListService
from .service.products.list import ProductListService
from .service.user.auth import UserAuthService
from .service.user.create import UserCreateService
from .service.user.login import UserLoginService
from service_objects.errors import ForbiddenError


class UsersListAll(APIView):
    def get(self, request, *args, **kwargs):
        if request.user.is_staff:
            return Response(UserSer(User.objects.all(), many=True).data, status=status.HTTP_200_OK)
        raise ForbiddenError(message="Sorry you have no rights", response_status=status.HTTP_403_FORBIDDEN)


class SchoolListAll(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        return Response(SchoolSer(School.objects.all(), many=True).data, status=status.HTTP_200_OK)


class BasketCreateListView(APIView):

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(BasketListService, {"user": request.user})
        return Response(BasketListSerializer(outcome.result, many=True).data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(BasketCreateService, request.POST.dict() | {"user": request.user})
        return Response(BasketListSerializer(outcome.result).data, status=status.HTTP_200_OK)


class UserLoginView(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserLoginService, request.query_params.dict())
        return Response(UserSer(outcome.result).data, status=status.HTTP_200_OK)


class UserRegisterView(APIView):
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserCreateService, {**request.data | request.POST.dict()})
        return Response(UserSer(outcome.result).data, status=status.HTTP_200_OK)


class UserAuthView(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserAuthService, request.query_params.dict())
        return Response(UserSer(outcome.result).data, status=status.HTTP_200_OK)


class CategoryListView(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        return Response(CategorySer(Category.objects.all(), many=True).data, status=status.HTTP_200_OK)


class ProductListView(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ProductListService, kwargs)
        return Response(ProductSer(outcome.result, many=True).data, status=status.HTTP_200_OK)
