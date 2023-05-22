from django.contrib import admin
from django.urls import *

from shop.views import SchoolListAll, UsersListAll, BasketCreateListView, UserLoginView, UserRegisterView, UserAuthView, \
    CategoryListView, ProductListView

urlpatterns = [
    path("admin/", admin.site.urls),

    path("users/", UsersListAll.as_view()),
    path("users/login/", UserLoginView.as_view()),
    path("users/register/", UserRegisterView.as_view()),
    path("users/auth/", UserAuthView.as_view()),

    path("schools/", SchoolListAll.as_view()),
    path("baskets/", BasketCreateListView.as_view()),

    path("categories/", CategoryListView.as_view()),
    path("categories/<int:id>/", ProductListView.as_view()),
]

