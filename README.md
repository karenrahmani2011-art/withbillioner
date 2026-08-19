# Lineup football archive

Football player career lookup site. The built-in archive covers popular examples, and API-Football can provide live player and transfer history for other names.

## Enable live career history

Deploy this repository to Vercel, then add an environment variable named `API_FOOTBALL_KEY` in the Vercel project settings. The secure `/api/player` function uses the API-Football `players` endpoint to find a player, then the `transfers` endpoint to build the club journey.

Do not put the API key in the public frontend or commit it to GitHub.
