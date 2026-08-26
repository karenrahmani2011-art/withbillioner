export default async function handler(request, response) {
  const name = String(request.query?.name || '').trim();
  const key = process.env.API_FOOTBALL_KEY;
  if (!key) return response.status(500).json({ error: 'API key is not configured' });
  if (!name) return response.status(400).json({ error: 'Player name is required' });

  const headers = { 'x-apisports-key': key };
  const leagues = [39, 140, 135, 78, 61, 253, 307, 71];
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

  // The search request is league-scoped. Fetch the player by id afterward so
  // the season response can include every covered competition for that year.
  const seasonDetailResponse = await fetch(`https://v3.football.api-sports.io/players?id=${found.player.id}&season=2024`, { headers });
  const seasonDetailData = await seasonDetailResponse.json();
  if (seasonDetailData.errors && Object.keys(seasonDetailData.errors).length) return response.status(502).json({ error: 'API-Football rejected the player statistics request', details: seasonDetailData.errors });
  const seasonProfile = seasonDetailData.response?.[0];
  const seasonStatistics = seasonProfile?.statistics?.length ? seasonProfile.statistics : found.statistics || [];
  found = { ...found, player: seasonProfile?.player || found.player, statistics: seasonStatistics };

  const transferResponse = await fetch(`https://v3.football.api-sports.io/transfers?player=${found.player.id}`, { headers });
  const transferData = await transferResponse.json();
  if (transferData.errors && Object.keys(transferData.errors).length) return response.status(502).json({ error: 'API-Football rejected the transfer request', details: transferData.errors });
  const transfers = (transferData.response?.[0]?.transfers || [])
    .filter((transfer) => !String(transfer.type || '').toLowerCase().includes('loan'))
    .sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
  const transferTimeline = (transferData.response?.[0]?.transfers || [])
    .filter((transfer) => transfer.teams?.in?.name || transfer.teams?.out?.name)
    .sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0))
    .map((transfer) => ({
      date: transfer.date || null,
      from: transfer.teams?.out?.name || 'Free agent',
      to: transfer.teams?.in?.name || 'Free agent',
      fromLogo: transfer.teams?.out?.logo || null,
      toLogo: transfer.teams?.in?.logo || null,
      type: transfer.type || 'Transfer',
      fee: transfer.fee || 'Fee not listed'
    }));
  const clubs = [];
  transfers.forEach((transfer) => {
    const from = transfer.teams?.out?.name;
    const to = transfer.teams?.in?.name;
    const fromLogo = transfer.teams?.out?.logo || null;
    const toLogo = transfer.teams?.in?.logo || null;
    const date = transfer.date || null;
    if (from) {
      const existing = clubs.find((club) => club.name === from);
      if (existing) { existing.end ||= date; existing.logo ||= fromLogo; }
      else clubs.push({ name: from, start: null, end: date, logo: fromLogo });
    }
    if (to && !clubs.some((club) => club.name === to)) clubs.push({ name: to, start: date, end: null, logo: toLogo });
  });
  const currentStat = found.statistics?.find((stat) => stat.team);
  const currentTeamId = currentStat?.team?.id;
  const current = currentStat?.team?.name || clubs.at(-1)?.name || 'Club not listed';
  if (!clubs.some((club) => club.name === current)) clubs.push({ name: current, start: null, end: null, logo: currentStat?.team?.logo || null });
  const currentClub = clubs.find((club) => club.name === current);
  if (currentClub && !currentClub.logo) currentClub.logo = currentStat?.team?.logo || null;
  const clubJourney = clubs.map((club) => {
    const start = club.start?.slice(0, 4);
    const end = club.end?.slice(0, 4);
    const years = start && end ? `${start}—${end}` : start ? `${start}—NOW` : end ? `BEFORE—${end}` : 'CURRENT';
    return [club.name, years, club.logo || null];
  });
  const competitionStats = (found.statistics || []).map((stat) => ({
    competition: stat.league?.name || 'Competition not listed',
    season: stat.league?.season || null,
    position: stat.games?.position || null,
    appearances: stat.games?.appearences || 0,
    goals: stat.goals?.total || 0,
    assists: stat.goals?.assists || 0,
    cleanSheets: stat.goals?.clean_sheet ?? null
  }));
  const careerStats = competitionStats.reduce((total, stat) => ({
    appearances: total.appearances + stat.appearances,
    goals: total.goals + stat.goals,
    assists: total.assists + stat.assists,
    cleanSheets: total.cleanSheets + (stat.cleanSheets || 0)
  }), { appearances: 0, goals: 0, assists: 0, cleanSheets: 0 });

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

  const transferYears = transfers.map((transfer) => Number(String(transfer.date || '').slice(0, 4))).filter(Boolean);
  const careerStartYear = Math.max(2000, Math.min(...(transferYears.length ? transferYears : [Number(found.player.birth?.date?.slice(0, 4) || 2000) + 16])));
  const yearlyStatsResults = await Promise.allSettled(Array.from({ length: 2025 - careerStartYear + 1 }, (_, index) => careerStartYear + index).map(async (year) => {
    const yearResponse = await fetch(`https://v3.football.api-sports.io/players?id=${found.player.id}&season=${year}`, { headers });
    const yearData = await yearResponse.json();
    if (yearData.errors && Object.keys(yearData.errors).length) return null;
    const yearStats = yearData.response?.[0]?.statistics || [];
    if (!yearStats.length) return null;
    return yearStats.reduce((total, stat) => ({
      year,
      appearances: total.appearances + (stat.games?.appearences || 0),
      goals: total.goals + (stat.goals?.total || 0),
      assists: total.assists + (stat.goals?.assists || 0),
      cleanSheets: total.cleanSheets + (stat.goals?.clean_sheet || 0)
    }), { year, appearances: 0, goals: 0, assists: 0, cleanSheets: 0 });
  }));
  const yearlyStats = yearlyStatsResults.filter((result) => result.status === 'fulfilled' && result.value).map((result) => result.value);
  const careerTotals = yearlyStats.reduce((total, stat) => ({
    appearances: total.appearances + stat.appearances,
    goals: total.goals + stat.goals,
    assists: total.assists + stat.assists,
    cleanSheets: total.cleanSheets + stat.cleanSheets
  }), { appearances: 0, goals: 0, assists: 0, cleanSheets: 0 });

  return response.status(200).json({
    first: found.player.firstname || found.player.name.split(' ')[0],
    last: found.player.lastname || found.player.name.split(' ').slice(1).join(' '),
    country: `${found.player.nationality || 'INT'} / PLAYER`.toUpperCase(),
    nationality: found.player.nationality || 'International',
    position: found.statistics?.find((stat) => stat.games?.position)?.games?.position || 'Player',
    age: found.player.age || null,
    photo: found.player.photo || null,
    shirtNumber,
    current,
    number: shirtNumber || '-',
    clubs: clubJourney.length ? clubJourney : [[current, 'CURRENT', currentStat?.team?.logo || null]],
    transfers: transferTimeline,
    stats: { totals: yearlyStats.length ? careerTotals : careerStats, yearly: yearlyStats, competitions: competitionStats }
  });
}
