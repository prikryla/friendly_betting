from django.db import models
from authentication.models import User
import requests

def get_unique_team_names():
        url = "https://hockey-live-sk-data.p.rapidapi.com/games/WCH/2024"
        querystring = {"key": "a96b78d76c7bf5ad2697df0335f3ccfd"}
        headers = {
            "X-RapidAPI-Key": "0f730babd8mshe3b9d2000fd2680p18bb7fjsna23fe5abe761",
            "X-RapidAPI-Host": "hockey-live-sk-data.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)
        response.raise_for_status()

        # Try to decode JSON
        data = response.json()
        team1long_values = []

        # Iterate over each JSON object and extract the value of team1long
        for item in data['games']:
            team1long_values.append(item["team1long"])

        # Remove duplicates and return the unique team names
        return list(set(team1long_values))

class BestOf(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    unique_team1long_values = get_unique_team_names()  # Call the function to get unique team names
    
    TOURNAMENT_WINNER_CHOICES = [(value, value) for value in unique_team1long_values]

    tournament_winner = models.CharField(max_length=100, choices=TOURNAMENT_WINNER_CHOICES)
    
    best_scorer = models.CharField(max_length=100)
    best_points = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username}'s BestOf"
    

    