from rest_framework import routers
from .api import ProductViewSet, CategoryViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/category', CategoryViewSet, 'category')
router.register('api/users', UserViewSet, 'users')

urlpatterns = router.urls
