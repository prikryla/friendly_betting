from rest_framework.decorators import api_view
from .models import BestOf
from django.http import JsonResponse

# Create your views here.
@api_view(['POST'])
def fill_bestof(request):
    try:
        if request.method == 'POST':
            tournament_winner = request.data.get('tournament_winner')
            best_scorer = request.data.get('best_scorer')
            best_points = request.data.get('best_points')
            
            user = request.user

            # Create a new instance of the BestOf model and save it
            best_of_instance = BestOf.objects.create(
                user=user,
                tournament_winner=tournament_winner,
                best_scorer=best_scorer,
                best_points=best_points
            )
            
            message = 'Values has been saved!'
            return JsonResponse({'message': message}, status=200)
        
    except Exception as e:
        return JsonResponse({'error': e}, status=400)