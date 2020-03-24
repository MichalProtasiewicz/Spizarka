from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name = 'filmApp'

urlpatterns = [
    path('films/', views.FilmList.as_view(), name='films'),
    path('films/<int:pk>/', views.FilmDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('category/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)