# -*- coding: utf8 -*-
from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Category, CategoryAdmin)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Общая информация", {'fields': ['username', 'password', 'email', 'slug', 'profile_pic', 'API_Key']}),
        ('Права доступа', {'fields': ['is_superuser', 'user_permissions', 'groups', 'is_staff', 'is_active']}),
        ('Прочая информация',
         {'fields': ['last_login', 'date_joined', 'first_name', 'last_name', 'created_at', 'updated_at']}),
    ]
    save_on_top = True
    list_filter = ('is_staff', 'is_active', 'is_superuser')
    list_display = [
        "id",
        "username",
    ]
    readonly_fields = ["id", "created_at", "updated_at"]
    list_display_links = (
        "id",
        "username",
    )
    ordering = ("id", "created_at", "updated_at")


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'price', 'stock', 'available', 'created']
    list_filter = ['available', 'created']
    list_editable = ['price', 'stock', 'available']
    prepopulated_fields = {'slug': ('name',)}


class BasketAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'created_at', 'updated_at', ]


admin.site.register(Basket, BasketAdmin)

admin.site.register(Product, ProductAdmin)

# class SchoolAdmin(admin.ModelAdmin):
#     list_display = ['name', 'email', 'password']
#     # prepopulated_fields = {'slug': ('name',)}
admin.site.register(School)
