from rest_framework import routers
from .views import ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('products', ProductViewSet, 'products')
router.register('category', CategoryViewSet, 'category')

urlpatterns = router.urls
