# views.py
from django.http import JsonResponse
from rest_framework.views import APIView
from .models import Game
from .serializers import GameSerializer

class ListGames(APIView):
    def get(self, request):
        """
        Return a list of all games.
        """
        games_queryset = Game.objects.all()
        games_serializer = GameSerializer(games_queryset, many=True)
        return JsonResponse({'games': games_serializer.data}, status=200)