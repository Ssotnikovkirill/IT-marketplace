from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult
from django import forms

from shop.models import User, Basket, Product


class BasketCreateService(ServiceWithResult):
    id = forms.CharField()
    user = ModelField(User)

    def process(self):
        self.result = self._create
        return self

    @property
    def _create(self):
        return Basket.objects.create(
            product=self._product,
            user=self.cleaned_data["user"]
        )

    @property
    def _product(self):
        return Product.objects.get(id=self.cleaned_data["id"])
