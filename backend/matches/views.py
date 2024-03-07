# views.py
from django.http import JsonResponse
from .models import Game, Bet
from .serializers import GameSerializer
from rest_framework.decorators import api_view

def get_all_games():
    games_queryset = Game.objects.all()
    games_serializer = GameSerializer(games_queryset, many=True)
    return JsonResponse({'games': games_serializer.data}, status=200)

@api_view(['POST'])
def create_bet(request):
    try:
        if request.method == 'POST':
            game_id = request.data.get('game_id')
            user = request.user
            team1bet = request.data.get('team1bet')
            team2bet = request.data.get('team2bet')
            team1status = request.data.get('team1status', Bet.TeamStatus.REGULAR)
            team2status = request.data.get('team2status', Bet.TeamStatus.REGULAR)
            bet_status = request.data.get('bet_status', Bet.BetStatus.PLACED)
            
            # Retrieve the Game object based on its ID
            game = Game.objects.get(id=game_id)
            
            # Create a new instance of the Bet model and save it
            Bet.objects.create(
                game=game,
                user=user,
                team1bet=team1bet,
                team2bet=team2bet,
                team1status=team1status,
                team2status=team2status,
                bet_status=bet_status
            )

            message = 'Bet has been saved!'
            return JsonResponse({'message': message}, status=200)
        
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)