export default async function handler(request, response) {
  const name = String(request.query?.name || '').trim();
  const key = process.env.API_FOOTBALL_KEY;
  if (!key) return response.status(500).json({ error: 'API key is not configured' });
  if (!name) return response.status(400).json({ error: 'Player name is required' });

  const headers = { 'x-apisports-key': key };
  const leagues = [39, 140, 135, 78, 61];
  const seasons = [2024];
  let found;
  const normalizedSearch = name.toLowerCase().replace(/\s+/g, ' ');
  for (const season of seasons) {
    for (const league of leagues) {
      const playerResponse = await fetch(`https://v3.football.api-sports.io/players?league=${league}&season=${season}&search=${encodeURIComponent(name)}`, { headers });
      const playerData = await playerResponse.json();
      if (playerData.errors && Object.keys(playerData.errors).length) return response.status(502).json({ error: 'API-Football rejected the request', details: playerData.errors });
      const candidates = playerData.response || [];
      found = candidates.find((candidate) => candidate.player?.name?.toLowerCase() === normalizedSearch) || candidates[0];
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
    const date = transfer.date || null;
    if (from) {
      const existing = clubs.find((club) => club.name === from);
      if (existing) existing.end ||= date;
      else clubs.push({ name: from, start: null, end: date });
    }
    if (to && !clubs.some((club) => club.name === to)) clubs.push({ name: to, start: date, end: null });
  });
  const currentStat = found.statistics?.find((stat) => stat.team);
  const currentTeamId = currentStat?.team?.id;
  const current = currentStat?.team?.name || clubs.at(-1)?.name || 'Club not listed';
  if (!clubs.some((club) => club.name === current)) clubs.push({ name: current, start: null, end: null });
  const clubJourney = clubs.map((club) => {
    const start = club.start?.slice(0, 4);
    const end = club.end?.slice(0, 4);
    const years = start && end ? `${start}—${end}` : start ? `${start}—NOW` : end ? `BEFORE—${end}` : 'CURRENT';
    return [club.name, years];
  });

  let shirtNumber = found.statistics?.find((stat) => stat.games?.number !== null && stat.games?.number !== undefined)?.games?.number || null;
  if (!shirtNumber && currentTeamId) {
    try {
      const squadResponse = await fetch(`https://v3.football.api-sports.io/players/squads?team=${currentTeamId}`, { headers });
      const squadData = await squadResponse.json();
      const squadPlayers = squadData.response?.flatMap((squad) => squad.players || []) || [];
      const squadPlayer = squadPlayers.find((player) => player.id === found.player.id || player.name?.toLowerCase() === found.player.name?.toLowerCase());
      shirtNumber = squadPlayer?.number || null;
    } catch {
      shirtNumber = null;
    }
  }

  return response.status(200).json({
    first: found.player.firstname || found.player.name.split(' ')[0],
    last: found.player.lastname || found.player.name.split(' ').slice(1).join(' '),
    country: `${found.player.nationality || 'INT'} / PLAYER`.toUpperCase(),
    nationality: found.player.nationality || 'International',
    position: found.statistics?.find((stat) => stat.games?.position)?.games?.position || 'Player',
    age: found.player.age || null,
    shirtNumber,
    current,
    number: shirtNumber || '-',
    clubs: clubJourney.length ? clubJourney : [[current, 'CURRENT']]
  });
}
