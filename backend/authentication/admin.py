from django.contrib import admin
from .models import User
from matches.models import Game, Bet

# Register your models here.
admin.site.register(User)
admin.site.register(Game)
admin.site.register(Bet)