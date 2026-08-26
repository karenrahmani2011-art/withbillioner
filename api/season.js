export default async function handler(request, response) {
  const player = Number(request.query?.player);
  const season = Number(request.query?.season);
  const key = process.env.API_FOOTBALL_KEY;
  if (!key) return response.status(500).json({ error: 'API key is not configured' });
  if (!player || !season) return response.status(400).json({ error: 'Player and season are required' });

  const apiResponse = await fetch(`https://v3.football.api-sports.io/players?id=${player}&season=${season}`, { headers: { 'x-apisports-key': key } });
  const data = await apiResponse.json();
  if (data.errors && Object.keys(data.errors).length) return response.status(502).json({ error: 'Season statistics are unavailable', details: data.errors });
  const statistics = data.response?.[0]?.statistics || [];
  if (!statistics.length) return response.status(200).json({ year: season, appearances: 0, goals: 0, assists: 0, cleanSheets: 0, position: null });
  const totals = statistics.reduce((total, stat) => ({
    year: season,
    appearances: total.appearances + (stat.games?.appearences || 0),
    goals: total.goals + (stat.goals?.total || 0),
    assists: total.assists + (stat.goals?.assists || 0),
    cleanSheets: total.cleanSheets + (stat.goals?.clean_sheet || 0),
    position: total.position || stat.games?.position || null
  }), { year: season, appearances: 0, goals: 0, assists: 0, cleanSheets: 0, position: null });
  return response.status(200).json(totals);
}
