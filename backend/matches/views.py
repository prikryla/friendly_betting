# views.py
from django.http import JsonResponse
from .models import Game
from .serializers import GameSerializer


def get_all_games(self):

    games_queryset = Game.objects.all()
    games_serializer = GameSerializer(games_queryset, many=True)
    return JsonResponse({'games': games_serializer.data}, status=200)
