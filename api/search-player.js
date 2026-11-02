export default async function handler(request, response) {
  const query = String(request.query?.q || request.query?.name || '').trim();
  
  // Set CORS and Edge caching headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (!query || query.length < 2) {
    return response.status(400).json({ error: 'Search query must be at least 2 characters', players: [] });
  }

  // Blacklist obvious random non-player greetings and tests
  const nonPlayerBlacklist = new Set([
    'hello', 'hi', 'hey', 'test', 'testing', 'asdf', 'qwerty', 'player',
    'football', 'soccer', 'random', 'cat', 'dog', 'world', 'game', 'null', 'undefined'
  ]);
  if (nonPlayerBlacklist.has(query.toLowerCase())) {
    return response.status(200).json({ query, players: [], message: `No verified footballer found matching "${query}"` });
  }

  const USER_AGENT = 'LineupDreamTeam/2.0 (https://withbillioner.vercel.app; support@withbillioner.vercel.app)';
  const FOOTBALL_KEYWORDS = [
    'footballer', 'football player', 'soccer player', 'association football',
    'forward', 'midfielder', 'defender', 'goalkeeper', 'winger', 'striker',
    'centre-back', 'full-back', 'national football team', 'fc ', 'f.c.',
    'la liga', 'premier league', 'serie a', 'bundesliga', 'ligue 1', 'mls',
    'persian gulf pro league', 'indian super league', 'uae pro league', 'a lyga'
  ];

  const COMMON_ALIASES = {
    'ghaedi': 'Mehdi Ghayedi',
    'ghayedi': 'Mehdi Ghayedi',
    'taremi': 'Mehdi Taremi',
    'cernych': 'Fedor Černych',
    'chhetri': 'Sunil Chhetri',
    'cr7': 'Cristiano Ronaldo',
    'messi': 'Lionel Messi',
    'neymar': 'Neymar',
    'saliba': 'William Saliba',
    'zidan': 'Zinedine Zidane',
    'zidane': 'Zinedine Zidane',
    'vini': 'Vinícius Júnior',
    'vinicius': 'Vinícius Júnior',
    'bellingham': 'Jude Bellingham',
    'haaland': 'Erling Haaland',
    'mbappe': 'Kylian Mbappé'
  };

  function isFootballer(title = '', desc = '', extract = '') {
    const combined = `${title} ${desc} ${extract}`.toLowerCase();
    
    // Explicit exclusions (stadiums, seasons, films, tournaments, disambiguations, lists, surnames)
    if (
      combined.includes('stadium') ||
      combined.includes('season') ||
      combined.includes('disambiguation') ||
      combined.includes('tournament') ||
      combined.includes('cup final') ||
      combined.includes('surname') ||
      title.toLowerCase().startsWith('list of')
    ) {
      return false;
    }
    return FOOTBALL_KEYWORDS.some(k => combined.includes(k));
  }

  try {
    const titlesSet = new Set();

    // 0. Check instant alias
    if (COMMON_ALIASES[query.toLowerCase()]) {
      titlesSet.add(COMMON_ALIASES[query.toLowerCase()]);
    }

    // 1. Wikipedia OpenSearch with original query
    const openSearchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=10&namespace=0&format=json`;
    const openRes = await fetch(openSearchUrl, { headers: { 'User-Agent': USER_AGENT } });
    if (openRes.ok) {
      const openData = await openRes.json();
      const openTitles = openData[1] || [];
      openTitles.forEach(t => titlesSet.add(t));
    }

    // 2. Transliteration variant (e.g. ghaedi -> ghayedi)
    const altQuery = query.toLowerCase().replace(/ae/g, 'aye');
    if (altQuery !== query.toLowerCase()) {
      const altUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(altQuery)}&limit=6&namespace=0&format=json`;
      const altRes = await fetch(altUrl, { headers: { 'User-Agent': USER_AGENT } });
      if (altRes.ok) {
        const altData = await altRes.json();
        (altData[1] || []).forEach(t => titlesSet.add(t));
      }
    }

    // 3. Wikipedia Full-text Search specifically for footballers
    const fullTextUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' footballer')}&srlimit=8&format=json`;
    const fullRes = await fetch(fullTextUrl, { headers: { 'User-Agent': USER_AGENT } });
    if (fullRes.ok) {
      const fullData = await fullRes.json();
      const fullItems = fullData.query?.search || [];
      fullItems.forEach(item => {
        if (item.title) titlesSet.add(item.title);
      });
    }

    const candidateTitles = Array.from(titlesSet).slice(0, 10);
    if (candidateTitles.length === 0) {
      return response.status(200).json({ query, players: [], message: `No verified footballer found matching "${query}"` });
    }

    // 4. Fetch summaries in parallel for candidates
    const summaryPromises = candidateTitles.map(async (title) => {
      try {
        const sUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/\s+/g, '_'))}`;
        const sRes = await fetch(sUrl, { headers: { 'User-Agent': USER_AGENT } });
        if (!sRes.ok) return null;
        const item = await sRes.json();
        
        const desc = item.description || '';
        const extract = item.extract || '';
        if (!isFootballer(item.title, desc, extract)) return null;

        // Clean display name (strip "(footballer)", "(born 1992)", etc.)
        const displayName = item.title.replace(/\s*\(.*?\)/g, '').trim();
        let photo = item.thumbnail?.source || item.originalimage?.source || '';
        
        // If image URL is unscaled SVG or page icon, handle cleanly
        if (photo.endsWith('.svg')) photo = '';

        return {
          id: `wiki_${item.pageid || title}`,
          name: displayName,
          fullTitle: item.title,
          description: desc || 'Professional Footballer',
          photo: photo || null,
          extract: extract.length > 140 ? extract.slice(0, 140) + '...' : extract
        };
      } catch (e) {
        return null;
      }
    });

    const results = (await Promise.all(summaryPromises)).filter(Boolean);

    // Deduplicate by normalized name
    const uniqueMap = new Map();
    results.forEach(p => {
      const norm = p.name.toLowerCase();
      if (!uniqueMap.has(norm)) {
        uniqueMap.set(norm, p);
      } else if (!uniqueMap.get(norm).photo && p.photo) {
        uniqueMap.set(norm, p);
      }
    });

    const finalPlayers = Array.from(uniqueMap.values());

    return response.status(200).json({
      query,
      count: finalPlayers.length,
      players: finalPlayers,
      message: finalPlayers.length ? 'Success' : `No verified footballer found matching "${query}"`
    });
  } catch (error) {
    return response.status(500).json({ error: 'Failed to search global football database', details: error.message, players: [] });
  }
}
