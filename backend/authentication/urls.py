from django.urls import path
from .views import UserRegisterView, LoginView
from . import views
urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', views.log_out, name='logout')
]
