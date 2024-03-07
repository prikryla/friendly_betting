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
team1long_values = []

# Iterate over each JSON object and extract the value of team1long
for item in data['games']:
    team1long_values.append(item["team1long"])

formatted_data = json.dumps(data, indent=4)
print(formatted_data)

unique_team1long_values = list(dict.fromkeys(team1long_values))

print(unique_team1long_values)