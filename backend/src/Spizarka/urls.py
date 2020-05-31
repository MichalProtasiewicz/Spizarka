from django.contrib import admin
from django.urls import path, include
from .views import CustomObtainAuthToken


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('authenticate/', CustomObtainAuthToken.as_view()),
    path('api/', include('products.api.urls')),
    path('admin/', admin.site.urls),
]
