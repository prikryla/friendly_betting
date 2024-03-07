from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/games/', include('matches.urls')),
    path('api/best_of/', include('best_of.urls'))
]
