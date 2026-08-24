export default async function handler(request, response) {
  const name = String(request.query?.name || '').trim();
  const key = process.env.API_FOOTBALL_KEY;
  if (!key) return response.status(500).json({ error: 'API key is not configured' });
  if (!name) return response.status(400).json({ error: 'Player name is required' });

  const headers = { 'x-apisports-key': key };
  const leagues = [39, 140, 135, 78, 61];
  const seasons = [2024];
  let found;
  for (const season of seasons) {
    for (const league of leagues) {
      const playerResponse = await fetch(`https://v3.football.api-sports.io/players?league=${league}&season=${season}&search=${encodeURIComponent(name)}`, { headers });
      const playerData = await playerResponse.json();
      if (playerData.errors && Object.keys(playerData.errors).length) return response.status(502).json({ error: 'API-Football rejected the request', details: playerData.errors });
      found = playerData.response?.[0];
      if (found) break;
    }
    if (found) break;
  }
  if (!found) return response.status(404).json({ error: 'Player not found' });

  const transferResponse = await fetch(`https://v3.football.api-sports.io/transfers?player=${found.player.id}`, { headers });
  const transferData = await transferResponse.json();
  if (transferData.errors && Object.keys(transferData.errors).length) return response.status(502).json({ error: 'API-Football rejected the transfer request', details: transferData.errors });
  const transfers = (transferData.response?.[0]?.transfers || [])
    .filter((transfer) => !String(transfer.type || '').toLowerCase().includes('loan'))
    .sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
  const clubs = [];
  transfers.forEach((transfer) => {
    const from = transfer.teams?.out?.name;
    const to = transfer.teams?.in?.name;
    const date = transfer.date || 'CAREER';
    if (from && !clubs.some(([clubName]) => clubName === from)) clubs.push([from, date]);
    if (to && !clubs.some(([clubName]) => clubName === to)) clubs.push([to, date]);
  });
  const current = found.statistics?.find((stat) => stat.team)?.team?.name || clubs.at(-1)?.[0] || 'Club not listed';
  if (!clubs.some(([club]) => club === current)) clubs.push([current, 'CURRENT']);

  return response.status(200).json({
    first: found.player.firstname || found.player.name.split(' ')[0],
    last: found.player.lastname || found.player.name.split(' ').slice(1).join(' '),
    country: `${found.player.nationality || 'INT'} / PLAYER`.toUpperCase(),
    current,
    number: found.statistics?.[0]?.games?.number || '-',
    clubs: clubs.length ? clubs : [[current, 'CURRENT']]
  });
}
