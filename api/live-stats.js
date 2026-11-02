// ==========================================================================
// LIVE PLAYER BATTLE INTELLIGENCE ENGINE (api/live-stats.js)
// Real-time Matchday Event Tracker & Career Total Synthesizer
// ==========================================================================

const PLAYER_LIVE_CONFIG = {
  "cristiano ronaldo": {
    name: "Cristiano Ronaldo",
    playerKeys: ["cristiano ronaldo", "ronaldo", "c. ronaldo", "cr7"],
    teamId: "817", // Al-Nassr
    clubName: "Al-Nassr",
    leagueCode: "ksa.1",
    altLeagueCodes: ["afc.champions", "ksa.kings.cup"],
    verifiedBase: {
      goals: 982, // Baseline before 29 Oct 2026 hat-trick vs Al Kholood
      assists: 261,
      trophies: 35,
      ovr: 92,
      peakGoals: 69,
      awards: 5,
      awardsLabel: "Ballon d'Or"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "lionel messi": {
    name: "Lionel Messi",
    playerKeys: ["lionel messi", "messi", "l. messi", "leo messi"],
    teamId: "20232", // Inter Miami
    clubName: "Inter Miami",
    leagueCode: "usa.1",
    altLeagueCodes: ["concacaf.champions", "usa.open"],
    verifiedBase: {
      goals: 948, // Official career goals
      assists: 427,
      trophies: 46,
      ovr: 93,
      peakGoals: 91,
      awards: 8,
      awardsLabel: "Ballon d'Or"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "erling haaland": {
    name: "Erling Haaland",
    playerKeys: ["erling haaland", "haaland", "e. haaland"],
    teamId: "382", // Man City
    clubName: "Manchester City",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {
      goals: 368,
      assists: 62,
      trophies: 12,
      ovr: 91,
      peakGoals: 52,
      awards: 2,
      awardsLabel: "Golden Boots"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "kylian mbappe": {
    name: "Kylian Mbappé",
    playerKeys: ["kylian mbappé", "kylian mbappe", "mbappe", "mbappé", "k. mbappe"],
    teamId: "86", // Real Madrid
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {
      goals: 373,
      assists: 178,
      trophies: 21,
      ovr: 92,
      peakGoals: 44,
      awards: 1,
      awardsLabel: "World Cup Golden Boot"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "jude bellingham": {
    name: "Jude Bellingham",
    playerKeys: ["jude bellingham", "bellingham", "j. bellingham"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {
      goals: 92,
      assists: 58,
      trophies: 8,
      ovr: 90,
      peakGoals: 23,
      awards: 1,
      awardsLabel: "Kopa Trophy"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "lamine yamal": {
    name: "Lamine Yamal",
    playerKeys: ["lamine yamal", "yamal", "l. yamal"],
    teamId: "83",
    clubName: "Barcelona",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {
      goals: 70, // Official verified senior career goals before 31 Oct (+2 brace = 72)
      assists: 47, // (+1 assist = 48)
      trophies: 5,
      ovr: 89,
      peakGoals: 24,
      awards: 2,
      awardsLabel: "Kopa Trophy"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "vinicius junior": {
    name: "Vinicius Junior",
    playerKeys: ["vinicius junior", "vinicius jr", "vini jr", "vinicius", "vini"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {
      goals: 161,
      assists: 98,
      trophies: 15,
      ovr: 91,
      peakGoals: 26,
      awards: 1,
      awardsLabel: "UCL Player of Season"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "harry kane": {
    name: "Harry Kane",
    playerKeys: ["harry kane", "kane", "h. kane"],
    teamId: "132",
    clubName: "Bayern Munich",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {
      goals: 458,
      assists: 122,
      trophies: 3,
      ovr: 90,
      peakGoals: 44,
      awards: 1,
      awardsLabel: "European Golden Shoe"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "robert lewandowski": {
    name: "Robert Lewandowski",
    playerKeys: ["robert lewandowski", "lewandowski", "r. lewandowski"],
    teamId: "83",
    clubName: "Barcelona",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {
      goals: 688,
      assists: 186,
      trophies: 29,
      ovr: 91,
      peakGoals: 55,
      awards: 2,
      awardsLabel: "FIFA Best Player"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "mohamed salah": {
    name: "Mohamed Salah",
    playerKeys: ["mohamed salah", "salah", "m. salah"],
    teamId: "364",
    clubName: "Liverpool",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {
      goals: 382,
      assists: 172,
      trophies: 11,
      ovr: 89,
      peakGoals: 44,
      awards: 2,
      awardsLabel: "African Player of Year"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "cole palmer": {
    name: "Cole Palmer",
    playerKeys: ["cole palmer", "palmer", "c. palmer"],
    teamId: "363",
    clubName: "Chelsea",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.europa.conf", "eng.fa", "eng.league_cup"],
    verifiedBase: {
      goals: 72,
      assists: 42,
      trophies: 5,
      ovr: 88,
      peakGoals: 27,
      awards: 1,
      awardsLabel: "PFA Young Player"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "bukayo saka": {
    name: "Bukayo Saka",
    playerKeys: ["bukayo saka", "saka", "b. saka"],
    teamId: "359",
    clubName: "Arsenal",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {
      goals: 100,
      assists: 78,
      trophies: 4,
      ovr: 88,
      peakGoals: 21,
      awards: 1,
      awardsLabel: "England Player of Year"
    },
    baselineDate: "2026-10-25T00:00:00Z"
  }
};

function normalizeKey(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  response.setHeader('Cache-Control', 'public, s-maxage=45, stale-while-revalidate=90');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  const queryPlayer = String(request.query?.player || request.query?.name || '').trim();
  if (!queryPlayer) {
    return response.status(400).json({ error: 'Player name is required' });
  }

  const normQuery = normalizeKey(queryPlayer);

  // Match player in config
  let targetKey = Object.keys(PLAYER_LIVE_CONFIG).find(k => {
    if (k === normQuery) return true;
    const cfg = PLAYER_LIVE_CONFIG[k];
    return cfg.playerKeys.some(pk => normQuery.includes(pk) || pk.includes(normQuery));
  });

  if (!targetKey) {
    return response.status(404).json({
      error: `Live telemetry machine not configured for: ${queryPlayer}. Available players include Cristiano Ronaldo, Lionel Messi, Erling Haaland, Kylian Mbappé, etc.`
    });
  }

  const cfg = PLAYER_LIVE_CONFIG[targetKey];
  const allLeagues = [cfg.leagueCode, ...(cfg.altLeagueCodes || [])];

  let deltaGoals = 0;
  let deltaAssists = 0;
  let deltaTrophies = 0;
  let matchLogs = [];
  let isLiveNow = false;

  try {
    for (const lCode of allLeagues) {
      try {
        const schedRes = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/soccer/${lCode}/teams/${cfg.teamId}/schedule`,
          { headers: { 'User-Agent': 'Mozilla/5.0' } }
        );
        if (!schedRes.ok) continue;

        const schedData = await schedRes.json();
        const events = schedData.events || [];

        // Events on or after baseline date
        const recentEvents = events.filter(ev => {
          const evDate = ev.date || '';
          return evDate >= cfg.baselineDate;
        });

        for (const ev of recentEvents) {
          const comp = ev.competitions?.[0] || {};
          const status = comp.status?.type || {};
          const isOngoing = status.state === 'in';
          if (isOngoing) isLiveNow = true;

          // Fetch match summary
          const sumRes = await fetch(
            `https://site.api.espn.com/apis/site/v2/sports/soccer/${lCode}/summary?event=${ev.id}`,
            { headers: { 'User-Agent': 'Mozilla/5.0' } }
          );
          if (!sumRes.ok) continue;

          const sumData = await sumRes.json();
          const keyEvents = sumData.keyEvents || [];
          let mGoals = 0;
          let mAssists = 0;
          const goalDetails = [];

          for (const k of keyEvents) {
            const text = k.text || '';
            const lowerText = text.toLowerCase();

            // Check if player involved
            const playerInvolved = cfg.playerKeys.some(pk => lowerText.includes(pk));
            if (!playerInvolved) continue;

            // Check goal
            if (lowerText.includes('goal') || lowerText.includes('penalty - scored')) {
              // Check if assist instead of goal
              if (lowerText.includes('assisted by') && cfg.playerKeys.some(pk => lowerText.split('assisted by')[1]?.includes(pk))) {
                mAssists++;
              } else {
                mGoals++;
                const clock = k.clock?.displayValue || text.match(/at\s+(\d+'(?:\+\d+)?)/i)?.[1] || '';
                goalDetails.push(clock);
              }
            } else if (lowerText.includes('assist')) {
              mAssists++;
            }
          }

          // Check trophy/final
          const isFinal = (ev.name || '').toLowerCase().includes('final') || (ev.season?.type === 3);
          if (isFinal && (status.state === 'post' || status.completed)) {
            const myTeam = comp.competitors?.find(c => String(c.id) === String(cfg.teamId));
            if (myTeam && myTeam.winner) {
              deltaTrophies++;
            }
          }

          if (mGoals > 0 || mAssists > 0 || isOngoing) {
            deltaGoals += mGoals;
            deltaAssists += mAssists;

            let desc = '';
            if (mGoals === 1) desc = `Goal scored (${goalDetails.join(', ') || '1x'})`;
            else if (mGoals === 2) desc = `Brace scored (${goalDetails.join(', ')})`;
            else if (mGoals >= 3) desc = `Hat-trick scored! 🎩 (${goalDetails.join(', ')})`;
            if (mAssists > 0) desc += `${desc ? ' • ' : ''}+${mAssists} Assist`;

            matchLogs.push({
              eventId: ev.id,
              eventName: ev.name,
              competition: lCode,
              date: ev.date,
              status: status.detail || status.state,
              isLive: isOngoing,
              goals: mGoals,
              assists: mAssists,
              description: desc || 'Match in progress'
            });
          }
        }
      } catch (err) {
        console.error(`Error scanning league ${lCode}:`, err);
      }
    }

    const totalGoals = cfg.verifiedBase.goals + deltaGoals;
    const totalAssists = cfg.verifiedBase.assists + deltaAssists;
    const totalTrophies = cfg.verifiedBase.trophies + deltaTrophies;

    return response.status(200).json({
      success: true,
      player: cfg.name,
      club: cfg.clubName,
      ovr: cfg.verifiedBase.ovr,
      base: cfg.verifiedBase,
      liveDeltas: {
        goals: deltaGoals,
        assists: deltaAssists,
        trophies: deltaTrophies
      },
      liveTotals: {
        goals: totalGoals,
        assists: totalAssists,
        trophies: totalTrophies,
        peakGoals: cfg.verifiedBase.peakGoals,
        awards: cfg.verifiedBase.awards,
        awardsLabel: cfg.verifiedBase.awardsLabel
      },
      trackedMatches: matchLogs,
      isLiveNow: isLiveNow,
      lastSyncTimestamp: Date.now()
    });

  } catch (error) {
    return response.status(500).json({
      error: 'Failed to process live telemetry data',
      details: error.message
    });
  }
}
