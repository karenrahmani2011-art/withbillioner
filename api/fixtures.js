export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  const { date, league } = request.query || {};
  const targetDate = date ? String(date).replace(/[^0-9]/g, '') : '';

  const LEAGUES = [
    { code: 'uefa.champions', name: 'UEFA Champions League' },
    { code: 'eng.1', name: 'Premier League' },
    { code: 'esp.1', name: 'La Liga' },
    { code: 'ita.1', name: 'Serie A' },
    { code: 'ger.1', name: 'Bundesliga' },
    { code: 'fra.1', name: 'Ligue 1' },
    { code: 'uefa.europa', name: 'UEFA Europa League' },
    { code: 'ksa.1', name: 'Saudi Pro League' },
    { code: 'usa.1', name: 'Major League Soccer' }
  ];

  const leaguesToFetch = league && league !== 'all'
    ? LEAGUES.filter((l) => l.code === league)
    : LEAGUES;

  try {
    const fetchPromises = leaguesToFetch.map(async (l) => {
      try {
        const url = 'https://site.api.espn.com/apis/site/v2/sports/soccer/' + l.code + '/scoreboard' + (targetDate ? '?dates=' + targetDate : '');
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) return [];
        const data = await res.json();
        const events = data.events || [];
        const leagueTitle = data.leagues?.[0]?.name || l.name;

        return events.map((ev) => {
          const comp = ev.competitions?.[0] || {};
          const home = comp.competitors?.find((c) => c.homeAway === 'home') || {};
          const away = comp.competitors?.find((c) => c.homeAway === 'away') || {};
          const status = comp.status?.type || {};
          return {
            id: ev.id,
            name: ev.name,
            date: ev.date,
            league: leagueTitle,
            leagueCode: l.code,
            statusState: status.state || 'pre',
            statusDetail: status.detail || status.description || '',
            statusShort: status.shortDetail || '',
            venue: comp.venue?.fullName || '',
            homeTeam: home.team?.displayName || home.team?.name || 'Home',
            homeShortName: home.team?.shortDisplayName || home.team?.abbreviation || '',
            homeLogo: home.team?.logo || '',
            homeScore: home.score !== undefined ? String(home.score) : '0',
            awayTeam: away.team?.displayName || away.team?.name || 'Away',
            awayShortName: away.team?.shortDisplayName || away.team?.abbreviation || '',
            awayLogo: away.team?.logo || '',
            awayScore: away.score !== undefined ? String(away.score) : '0'
          };
        });
      } catch {
        return [];
      }
    });

    const results = await Promise.allSettled(fetchPromises);
    const allMatches = results
      .filter((r) => r.status === 'fulfilled')
      .flatMap((r) => r.value)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    response.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=180');
    return response.status(200).json({
      date: targetDate,
      count: allMatches.length,
      matches: allMatches
    });
  } catch (error) {
    return response.status(500).json({ error: 'Failed to fetch fixtures', details: error.message });
  }
}
