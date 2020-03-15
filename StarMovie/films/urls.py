from rest_framework import routers
from .api import FilmViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('api/films', FilmViewSet, 'films')
router.register('api/category', CategoryViewSet, 'films')

urlpatterns = router.urls
