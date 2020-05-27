from rest_framework import routers
from .views import ProductViewSet, CategoryViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('products', ProductViewSet, 'products')
router.register('category', CategoryViewSet, 'category')
router.register('users', UserViewSet, 'users')

urlpatterns = router.urls
