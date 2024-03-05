from django.db import models
from authentication.models import User

class BestOf(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    tournament_winner = models.CharField(max_length=100)
    best_scorer = models.CharField(max_length=100)
    best_points = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username}'s BestOf"