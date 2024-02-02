from django.db import models
from authentication.models import User

class Game(models.Model):
    class PlayoffType(models.TextChoices):
        NULL = 'null', 'No Play Off (Regular Game)'
        Q = 'Q', 'Qualification Round'
        QF = 'QF', 'Quarterfinals'
        SF = 'SF', 'Semifinals'
        B = 'B', 'Bronze Medal Game'
        F = 'F', 'Finals'

    class ScoreStatus(models.TextChoices):
        GET_READY = 'get_ready', 'Get Ready'
        SCHEDULED = 'scheduled', 'Scheduled'
        FINAL_RESULT = 'final_result', 'Final Result'

    def default_score():
        return {'goals1': None, 'goals2': None, 'status': Game.ScoreStatus.SCHEDULED}

    id = models.CharField(max_length=255, primary_key=True)
    group = models.CharField(max_length=255)
    po_type = models.CharField(max_length=4, choices=PlayoffType.choices)
    team1short = models.CharField(max_length=255)
    team2short = models.CharField(max_length=255)
    date = models.DateTimeField()
    score = models.JSONField(default=default_score)

class Bet(models.Model):
    class TeamStatus(models.TextChoices):
        REGULAR = 'REGULAR', 'Regular'
        OVERTIME = 'OVERTIME', 'Overtime'
        SHOOTOUT = 'SHOOTOUT', 'Shootout'

    class BetStatus(models.TextChoices):
        PLACED = 'placed', 'Placed'
        WIN = 'win', 'Win'
        LOSE = 'lose', 'Lose'
        PUSH = 'push', 'Push'
        NONE = 'none', 'The bet was not placed until the start of the match'

    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    team1bet = models.PositiveIntegerField()
    team2bet = models.PositiveIntegerField()
    team1status = models.CharField(max_length=8, choices=TeamStatus.choices, default=TeamStatus.REGULAR)
    team2status = models.CharField(max_length=8, choices=TeamStatus.choices, default=TeamStatus.REGULAR)
    bet_status = models.CharField(max_length=6, choices=BetStatus.choices, default=BetStatus.PLACED)
