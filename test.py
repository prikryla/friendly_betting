from django.shortcuts import render
from django.utils import timezone
from backend.matches.models import Game
import requests
import json

url = "https://hockey-live-sk-data.p.rapidapi.com/games/WCH/2024"

querystring = {"key": "a96b78d76c7bf5ad2697df0335f3ccfd"}

headers = {
    "X-RapidAPI-Key": "0f730babd8mshe3b9d2000fd2680p18bb7fjsna23fe5abe761",
    "X-RapidAPI-Host": "hockey-live-sk-data.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)
response.raise_for_status()  # Raise an HTTPError for bad responses (4xx or 5xx)

# Try to decode JSON
data = response.json()
formatted_data = json.dumps(data, indent=4)
print(formatted_data)

# Print the raw response content for debugging
print("Raw Response Content:", response.content)

# Loop through the API games and create or update the corresponding Game model instances
for api_game in data["games"]:  # Use data["games"] instead of response.content
    game_id = api_game["id"]
    group = api_game["group"]
    po_type = api_game["po_type"]
    team1short = api_game["team1short"]
    team2short = api_game["team2short"]
    date_str = api_game["date"]
    score = api_game["score"]

    # Parse the date string into a DateTime object
    date = timezone.datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")

    # Try to get the existing Game instance by ID
    game_instance, created = Game.objects.get_or_create(
        id=game_id,
        defaults={
            "group": group,
            "po_type": po_type,
            "team1short": team1short,
            "team2short": team2short,
            "date": date,
            "score": json.dumps(score),  # Store score as JSON string
        }
    )

    # If the instance already exists, update its fields
    if not created:
        game_instance.group = group
        game_instance.po_type = po_type
        game_instance.team1short = team1short
        game_instance.team2short = team2short
        game_instance.date = date
        game_instance.score = json.dumps(score)  # Store score as JSON string
        game_instance.save()
