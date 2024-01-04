from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views import View
from django.http import JsonResponse

class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Use create_user to ensure the password is hashed
        user = User.objects.create_user(
            username=serializer.validated_data['username'],
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password'],
        )

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class LoginView(View):
    template_name = 'login.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful', 'token': 'your_token'})
        else:
            message = 'Invalid login credentials'
            return JsonResponse({'message': message}, status=400)