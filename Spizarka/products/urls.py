from rest_framework import routers
from .api import ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/category', CategoryViewSet, 'products')

urlpatterns = router.urls
