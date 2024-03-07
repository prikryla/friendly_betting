from django.urls import path
from . import views

urlpatterns = [
    path('list', views.get_all_games, name='game-list'),
    path('create_bet', views.create_bet, name='create-bet')
]