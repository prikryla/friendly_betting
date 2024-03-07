from django.urls import path
from . import views

urlpatterns = [
    path('post_best', views.fill_bestof, name='best'),
]