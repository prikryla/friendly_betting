from django.core.management.base import BaseCommand
from django.utils import timezone
from django.conf import settings
from matches.models import Game
import requests
import json

class Command(BaseCommand):
    help = 'Update games from the API'

    def handle(self, *args, **options):
        url = "https://hockey-live-sk-data.p.rapidapi.com/games/WCH/2024"
        querystring = {"key": settings.HOCKEY_API_KEY}
        headers = {
            "X-RapidAPI-Key": "0f730babd8mshe3b9d2000fd2680p18bb7fjsna23fe5abe761",
            "X-RapidAPI-Host": "hockey-live-sk-data.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)
        response.raise_for_status()

        # Try to decode JSON
        data = response.json()

        # Loop through the API games and create or update the corresponding Game model instances
        for api_game in data.get("games", []):
            game_id = api_game.get("id")
            group = api_game.get("group")
            po_type = api_game.get("po_type")
            team1short = api_game.get("team1short")
            team2short = api_game.get("team2short")
            date_str = api_game.get("date")
            score = api_game.get("score")

            # Parse the date string into a DateTime object
            date_time = timezone.datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")

            # Split DateTime into date and time
            date = date_time.date()
            time = date_time.time()

            # Try to get the existing Game instance by ID
            game_instance, created = Game.objects.get_or_create(
                id=game_id,
                defaults={
                    "group": group,
                    "po_type": po_type,
                    "team1short": team1short,
                    "team2short": team2short,
                    "date": date,
                    "time": time,
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
                game_instance.time = time
                game_instance.score = json.dumps(score)  # Store score as JSON string
                game_instance.save()


        self.stdout.write(self.style.SUCCESS('Successfully updated games'))
