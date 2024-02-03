from django.urls import path
from .views import ListGames

urlpatterns = [
    path('list', ListGames.as_view(), name='game-list'),
]