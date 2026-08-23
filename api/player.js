export default async function handler(request, response) {
  const name = String(request.query?.name || '').trim();
  const key = process.env.API_FOOTBALL_KEY;
  if (!key) return response.status(500).json({ error: 'API key is not configured' });
  if (!name) return response.status(400).json({ error: 'Player name is required' });

  const headers = { 'x-apisports-key': key };
  const playerResponse = await fetch(`https://v3.football.api-sports.io/players?search=${encodeURIComponent(name)}`, { headers });
  const playerData = await playerResponse.json();
  if (playerData.errors && Object.keys(playerData.errors).length) return response.status(502).json({ error: 'API-Football rejected the request', details: playerData.errors });
  const found = playerData.response?.[0];
  if (!found) return response.status(404).json({ error: 'Player not found' });

  const transferResponse = await fetch(`https://v3.football.api-sports.io/transfers?player=${found.player.id}`, { headers });
  const transferData = await transferResponse.json();
  if (transferData.errors && Object.keys(transferData.errors).length) return response.status(502).json({ error: 'API-Football rejected the transfer request', details: transferData.errors });
  const transfers = transferData.response?.[0]?.transfers || [];
  const clubs = [];
  transfers.slice().reverse().forEach((transfer) => {
    const club = transfer.teams?.in?.name;
    if (club && !clubs.some(([clubName]) => clubName === club)) clubs.push([club, transfer.date?.slice(0, 4) || 'CAREER']);
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
