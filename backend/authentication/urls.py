from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Friendly Betting API",
        default_version='v1',
        description="API documentation for Friendly Betting app",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

from . import views

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.log_out, name='logout'),
    path('csrf-token/', views.get_csrf_token, name='csrf_token'),
    path('update-user/', views.update_user, name='update_user')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
