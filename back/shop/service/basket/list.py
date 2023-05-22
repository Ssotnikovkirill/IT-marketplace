from service_objects.services import ServiceWithResult
from shop.models import Basket, User
from service_objects.fields import ModelField


class BasketListService(ServiceWithResult):
    user = ModelField(User)

    def process(self):
        self.result = self._basket
        return self

    @property
    def _basket(self):
        return Basket.objects.filter(user=self.cleaned_data["user"])
