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
    { code: 'uefa.europa', name: 'UEFA Europa League' },
    { code: 'uefa.europa.conf', name: 'UEFA Conference League' },
    { code: 'afc.champions', name: 'AFC Champions League Elite' },
    { code: 'conmebol.libertadores', name: 'CONMEBOL Libertadores' },
    { code: 'eng.1', name: 'Premier League' },
    { code: 'eng.fa', name: 'English FA Cup' },
    { code: 'eng.league_cup', name: 'Carabao Cup' },
    { code: 'eng.2', name: 'Championship' },
    { code: 'esp.1', name: 'La Liga' },
    { code: 'esp.copa_del_rey', name: 'Copa del Rey' },
    { code: 'ita.1', name: 'Serie A' },
    { code: 'ita.coppa_italia', name: 'Coppa Italia' },
    { code: 'ger.1', name: 'Bundesliga' },
    { code: 'ger.dfb_pokal', name: 'DFB-Pokal' },
    { code: 'fra.1', name: 'Ligue 1' },
    { code: 'fra.coupe_de_france', name: 'Coupe de France' },
    { code: 'ksa.1', name: 'Saudi Pro League' },
    { code: 'ksa.kings.cup', name: "Saudi King's Cup" },
    { code: 'usa.1', name: 'Major League Soccer' },
    { code: 'ned.1', name: 'Dutch Eredivisie' },
    { code: 'por.1', name: 'Portuguese Primeira Liga' },
    { code: 'bra.1', name: 'Brazilian Serie A' },
    { code: 'mex.1', name: 'Mexican Liga BBVA MX' }
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

        const EXTRA_LOGOS = {
          'tractor sazi': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
          'tractor sazi fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
          'traktor sazi': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
          'traktor sazi fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
          'al shabab': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
          'al-shabab': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
          'al shabab fc': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
          'pakhtakor': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/78/Pakhtakor_FC_logo.svg/250px-Pakhtakor_FC_logo.svg.png',
          'pakhtakor tashkent': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/78/Pakhtakor_FC_logo.svg/250px-Pakhtakor_FC_logo.svg.png',
          'al shamal': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8f/Al-Shamal_SC_logo.svg/250px-Al-Shamal_SC_logo.svg.png',
          'al-shamal': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8f/Al-Shamal_SC_logo.svg/250px-Al-Shamal_SC_logo.svg.png',
          'esteghlal': 'https://thumb.wikimedia.org/wikipedia/en/thumb/5/54/Esteghlal_F.C._Logo.svg/250px-Esteghlal_F.C._Logo.svg.png',
          'neftchi fergana': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/71/Neftchi-2022-08.png/250px-Neftchi-2022-08.png',
          'al-quwa al-jawiya': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/Al-Quwa_Al-Jawiya_logo.svg/250px-Al-Quwa_Al-Jawiya_logo.svg.png',
          'al gharafa': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/Al-Gharafa_SC_logo.svg/250px-Al-Gharafa_SC_logo.svg.png',
          'sepahan': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Sepahan_New_Logo.svg/250px-Sepahan_New_Logo.svg.png',
          'persepolis': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/FC_Persepolis_Official_Logo.svg/250px-FC_Persepolis_Official_Logo.svg.png',
          'al sadd': '/al-sadd-logo.png',
          'al-sadd': '/al-sadd-logo.png',
          'al sadd sc': '/al-sadd-logo.png',
          'als': '/al-sadd-logo.png'
        };

        const getLogo = (name, raw) => {
          const k = String(name || '').toLowerCase().trim();
          for (const [key, val] of Object.entries(EXTRA_LOGOS)) {
            if (k === key || k.includes(key) || key.includes(k)) return val;
          }
          if (raw && !raw.includes('default.png')) return raw;
          return raw || '';
        };

        return events.map((ev) => {
          const comp = ev.competitions?.[0] || {};
          const home = comp.competitors?.find((c) => c.homeAway === 'home') || {};
          const away = comp.competitors?.find((c) => c.homeAway === 'away') || {};
          const status = comp.status?.type || {};
          const hName = home.team?.displayName || home.team?.name || 'Home';
          const aName = away.team?.displayName || away.team?.name || 'Away';
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
            homeTeam: hName,
            homeShortName: home.team?.shortDisplayName || home.team?.abbreviation || '',
            homeLogo: getLogo(hName, home.team?.logo || home.team?.logos?.[0]?.href),
            homeScore: home.score !== undefined ? String(home.score) : '0',
            awayTeam: aName,
            awayShortName: away.team?.shortDisplayName || away.team?.abbreviation || '',
            awayLogo: getLogo(aName, away.team?.logo || away.team?.logos?.[0]?.href),
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
