
from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('send/', views.send, name='send'),
]