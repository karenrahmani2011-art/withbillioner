# Lineup football archive

Football player career lookup site. The built-in archive covers popular examples, and API-Football can provide live player and transfer history for other names.

## Enable live career history

1. Create a free API-Football account and copy your API key.
2. Open `config.js`.
3. Set `window.LINEUP_API_KEY` to your key.
4. Reload the website.

The site uses the API-Football `players` endpoint to find a player, then the `transfers` endpoint to build the club journey.

For a public production site, use a serverless backend to keep the API key private instead of exposing it in `config.js`.
