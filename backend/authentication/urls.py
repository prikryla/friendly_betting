from django.urls import path
from . import views

urlpatterns = [
    # path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.log_out, name='logout'),
    path('csrf-token/', views.get_csrf_token, name='csrf_token'),
    path('upload-profile-image/', views.user_add_profile_image, name='upload-profile-image')
]
