from django import forms
from service_objects.services import ServiceWithResult

from shop.models import Product


class ProductListService(ServiceWithResult):
    id = forms.IntegerField()

    def process(self):
        self.result = self._products
        return self

    @property
    def _products(self):
        return Product.objects.filter(category_id=self.cleaned_data["id"]).select_related("category")
