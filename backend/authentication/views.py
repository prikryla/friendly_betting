from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from .models import User
from django.conf import settings
from rest_framework.parsers import MultiPartParser, FormParser

# ---------------------------------
# TODO: Finish this register method 
# ---------------------------------
# class register_user(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)

#         user = User.objects.create_user(
#             username=serializer.validated_data['username'],
#             email=serializer.validated_data['email'],
#             password=serializer.validated_data['password'],
#         )

#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
  
@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    
    if user is not None:
        login(request, user)  # Renamed to avoid conflict
        message = f"User {username} is logged"
        return JsonResponse({'message': message}, status=200)
    else:
        message = 'Invalid login credentials'
        return JsonResponse({'message': message}, status=400)
    
@api_view(['POST'])
def log_out(request):
    if not request.user.is_authenticated:
        return JsonResponse({'message': 'User is already logged out'}, status=400)

    logout(request)
    message = 'User successfully logged out'
    return JsonResponse({'message': message}, status=200)

@ensure_csrf_cookie
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

@api_view(['POST'])
def update_user(request):
    # Ensure the user is authenticated
    if not request.user.is_authenticated:
        return JsonResponse({"error": "User not authenticated"}, status=401)

    # Retrieve the authenticated user
    try:
        user = User.objects.get(id=request.user.id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

    # Update user fields if provided in the request data
    if 'username' in request.data:
        user.username = request.data['username']
    if 'email' in request.data:
        user.email = request.data['email']

    # Save changes to the database
    user.save()
    
    return JsonResponse({
        "message": "User profile updated successfully",
        "username": user.username,
        "email": user.email
    }, status=200)
