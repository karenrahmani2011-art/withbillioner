// ==========================================================================
// LIVE PLAYER BATTLE INTELLIGENCE ENGINE (api/live-stats.js)
// Real-time Matchday Event Tracker & Career Total Synthesizer
// ==========================================================================

const BATTLE_DATABASE = {
  "lionel messi": {
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nation": "Argentina",
    "pos": "Forward",
    "ovr": 93,
    "goals": 937,
    "assists": 428,
    "trophies": 46,
    "peakGoals": 91,
    "awards": 8,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://media.api-sports.io/football/players/154.png"
  },
  "cristiano ronaldo": {
    "name": "Cristiano Ronaldo",
    "club": "Al-Nassr",
    "nation": "Portugal",
    "pos": "Forward",
    "ovr": 92,
    "goals": 985,
    "assists": 261,
    "trophies": 35,
    "peakGoals": 69,
    "awards": 5,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://media.api-sports.io/football/players/874.png"
  },
  "mohamed salah": {
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nation": "Egypt",
    "pos": "Forward",
    "ovr": 89,
    "goals": 382,
    "assists": 172,
    "trophies": 11,
    "peakGoals": 44,
    "awards": 2,
    "awardsLabel": "African Player of Year",
    "photo": "https://media.api-sports.io/football/players/306.png"
  },
  "kylian mbappe": {
    "name": "Kylian Mbapp\u00e9",
    "club": "Real Madrid",
    "nation": "France",
    "pos": "Forward",
    "ovr": 92,
    "goals": 373,
    "assists": 178,
    "trophies": 21,
    "peakGoals": 44,
    "awards": 1,
    "awardsLabel": "World Cup Golden Boot",
    "photo": "https://media.api-sports.io/football/players/278.png"
  },
  "erling haaland": {
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nation": "Norway",
    "pos": "Forward",
    "ovr": 91,
    "goals": 368,
    "assists": 62,
    "trophies": 12,
    "peakGoals": 52,
    "awards": 2,
    "awardsLabel": "Golden Boots",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/238714.png&w=350&h=254"
  },
  "neymar": {
    "name": "Neymar Jr",
    "club": "Al-Hilal",
    "nation": "Brazil",
    "pos": "Forward",
    "ovr": 89,
    "goals": 442,
    "assists": 262,
    "trophies": 29,
    "peakGoals": 39,
    "awards": 6,
    "awardsLabel": "Samba Gold",
    "photo": "https://media.api-sports.io/football/players/276.png"
  },
  "neymar jr": {
    "name": "Neymar Jr",
    "club": "Al-Hilal",
    "nation": "Brazil",
    "pos": "Forward",
    "ovr": 89,
    "goals": 442,
    "assists": 262,
    "trophies": 29,
    "peakGoals": 39,
    "awards": 6,
    "awardsLabel": "Samba Gold",
    "photo": "https://media.api-sports.io/football/players/276.png"
  },
  "kevin de bruyne": {
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nation": "Belgium",
    "pos": "Midfielder",
    "ovr": 91,
    "goals": 180,
    "assists": 314,
    "trophies": 22,
    "peakGoals": 19,
    "awards": 3,
    "awardsLabel": "PL Playmaker Award",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/128386.png&w=350&h=254"
  },
  "harry kane": {
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nation": "England",
    "pos": "Forward",
    "ovr": 90,
    "goals": 458,
    "assists": 122,
    "trophies": 3,
    "peakGoals": 44,
    "awards": 1,
    "awardsLabel": "European Golden Shoe",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156557.png&w=350&h=254"
  },
  "jude bellingham": {
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 90,
    "goals": 92,
    "assists": 58,
    "trophies": 8,
    "peakGoals": 23,
    "awards": 1,
    "awardsLabel": "Kopa Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271817.png&w=350&h=254"
  },
  "vinicius junior": {
    "name": "Vinicius Junior",
    "club": "Real Madrid",
    "nation": "Brazil",
    "pos": "Forward",
    "ovr": 91,
    "goals": 161,
    "assists": 98,
    "trophies": 15,
    "peakGoals": 26,
    "awards": 1,
    "awardsLabel": "UCL Player of Season",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/238776.png&w=350&h=254"
  },
  "malo gusto": {
    "name": "Malo Gusto",
    "club": "Chelsea",
    "nation": "France",
    "pos": "Defender",
    "ovr": 82,
    "goals": 2,
    "assists": 18,
    "trophies": 1,
    "peakGoals": 1,
    "awards": 1,
    "awardsLabel": "Major Finalist",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/304033.png&w=350&h=254"
  },
  "cole palmer": {
    "name": "Cole Palmer",
    "club": "Chelsea",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 72,
    "assists": 42,
    "trophies": 5,
    "peakGoals": 27,
    "awards": 1,
    "awardsLabel": "PFA Young Player",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/290886.png&w=350&h=254"
  },
  "zlatan ibrahimovic": {
    "name": "Zlatan Ibrahimovic",
    "club": "Retired",
    "nation": "Sweden",
    "pos": "Forward",
    "ovr": 90,
    "goals": 573,
    "assists": 227,
    "trophies": 34,
    "peakGoals": 50,
    "awards": 12,
    "awardsLabel": "Guldbollen",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11498.png&w=350&h=254"
  },
  "robert lewandowski": {
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nation": "Poland",
    "pos": "Forward",
    "ovr": 91,
    "goals": 688,
    "assists": 186,
    "trophies": 29,
    "peakGoals": 55,
    "awards": 2,
    "awardsLabel": "FIFA Best Player",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114979.png&w=350&h=254"
  },
  "luka modric": {
    "name": "Luka Modric",
    "club": "Real Madrid",
    "nation": "Croatia",
    "pos": "Midfielder",
    "ovr": 89,
    "goals": 128,
    "assists": 168,
    "trophies": 31,
    "peakGoals": 12,
    "awards": 1,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104389.png&w=350&h=254"
  },
  "sergio ramos": {
    "name": "Sergio Ramos",
    "club": "Free Agent",
    "nation": "Spain",
    "pos": "Defender",
    "ovr": 90,
    "goals": 142,
    "assists": 48,
    "trophies": 29,
    "peakGoals": 13,
    "awards": 5,
    "awardsLabel": "La Liga Best Defender",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45844.png&w=350&h=254"
  },
  "antoine griezmann": {
    "name": "Antoine Griezmann",
    "club": "Atletico Madrid",
    "nation": "France",
    "pos": "Forward",
    "ovr": 88,
    "goals": 312,
    "assists": 162,
    "trophies": 9,
    "peakGoals": 32,
    "awards": 1,
    "awardsLabel": "World Cup Bronze Ball",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/140088.png&w=350&h=254"
  },
  "son heung-min": {
    "name": "Son Heung-min",
    "club": "Tottenham Hotspur",
    "nation": "South Korea",
    "pos": "Forward",
    "ovr": 88,
    "goals": 248,
    "assists": 114,
    "trophies": 3,
    "peakGoals": 24,
    "awards": 1,
    "awardsLabel": "Premier League Golden Boot",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/159403.png&w=350&h=254"
  },
  "andres iniesta": {
    "name": "Andres Iniesta",
    "club": "Retired",
    "nation": "Spain",
    "pos": "Midfielder",
    "ovr": 91,
    "goals": 107,
    "assists": 192,
    "trophies": 37,
    "peakGoals": 9,
    "awards": 1,
    "awardsLabel": "UEFA Best Player in Europe",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14849.png&w=350&h=254"
  },
  "gianluigi buffon": {
    "name": "Gianluigi Buffon",
    "club": "Retired",
    "nation": "Italy",
    "pos": "Goalkeeper",
    "ovr": 91,
    "goals": 0,
    "assists": 4,
    "trophies": 29,
    "peakGoals": 0,
    "awards": 13,
    "awardsLabel": "Serie A Goalkeeper of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/1041.png&w=350&h=254"
  },
  "david beckham": {
    "name": "David Beckham",
    "club": "Retired",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 146,
    "assists": 256,
    "trophies": 19,
    "peakGoals": 16,
    "awards": 1,
    "awardsLabel": "PL Hall of Fame",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/390.png&w=350&h=254"
  },
  "luis suarez": {
    "name": "Luis Suarez",
    "club": "Inter Miami",
    "nation": "Uruguay",
    "pos": "Forward",
    "ovr": 92,
    "goals": 583,
    "assists": 312,
    "trophies": 25,
    "peakGoals": 59,
    "awards": 2,
    "awardsLabel": "European Golden Shoe",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99513.png&w=350&h=254"
  },
  "thierry henry": {
    "name": "Thierry Henry",
    "club": "Retired",
    "nation": "France",
    "pos": "Forward",
    "ovr": 91,
    "goals": 411,
    "assists": 236,
    "trophies": 21,
    "peakGoals": 39,
    "awards": 4,
    "awardsLabel": "Premier League Golden Boot",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/116.png&w=350&h=254"
  },
  "ronaldinho": {
    "name": "Ronaldinho Ga\u00facho",
    "club": "Retired",
    "nation": "Brazil",
    "pos": "Forward",
    "ovr": 92,
    "goals": 328,
    "assists": 214,
    "trophies": 17,
    "peakGoals": 26,
    "awards": 1,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11993.png&w=350&h=254"
  },
  "xavi hernandez": {
    "name": "Xavi Hernandez",
    "club": "Retired",
    "nation": "Spain",
    "pos": "Midfielder",
    "ovr": 91,
    "goals": 122,
    "assists": 248,
    "trophies": 33,
    "peakGoals": 10,
    "awards": 4,
    "awardsLabel": "World Best Playmaker",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14838.png&w=350&h=254"
  },
  "andrea pirlo": {
    "name": "Andrea Pirlo",
    "club": "Retired",
    "nation": "Italy",
    "pos": "Midfielder",
    "ovr": 90,
    "goals": 86,
    "assists": 144,
    "trophies": 19,
    "peakGoals": 9,
    "awards": 3,
    "awardsLabel": "Serie A Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11514.png&w=350&h=254"
  },
  "kaka": {
    "name": "Ricardo Kaka",
    "club": "Retired",
    "nation": "Brazil",
    "pos": "Midfielder",
    "ovr": 91,
    "goals": 238,
    "assists": 168,
    "trophies": 15,
    "peakGoals": 19,
    "awards": 1,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/21364.png&w=350&h=254"
  },
  "cesc fabregas": {
    "name": "Cesc Fabregas",
    "club": "Retired",
    "nation": "Spain",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 144,
    "assists": 252,
    "trophies": 17,
    "peakGoals": 19,
    "awards": 1,
    "awardsLabel": "Golden Boy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/37965.png&w=350&h=254"
  },
  "didier drogba": {
    "name": "Didier Drogba",
    "club": "Retired",
    "nation": "Ivory Coast",
    "pos": "Forward",
    "ovr": 90,
    "goals": 368,
    "assists": 142,
    "trophies": 19,
    "peakGoals": 37,
    "awards": 2,
    "awardsLabel": "African Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22646.png&w=350&h=254"
  },
  "sadio mane": {
    "name": "Sadio Mane",
    "club": "Al-Nassr",
    "nation": "Senegal",
    "pos": "Forward",
    "ovr": 88,
    "goals": 254,
    "assists": 118,
    "trophies": 14,
    "peakGoals": 26,
    "awards": 2,
    "awardsLabel": "African Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/170944.png&w=350&h=254"
  },
  "lamine yamal": {
    "name": "Lamine Yamal",
    "club": "Barcelona",
    "nation": "Spain",
    "pos": "Forward",
    "ovr": 89,
    "goals": 72,
    "assists": 48,
    "trophies": 5,
    "peakGoals": 24,
    "awards": 2,
    "awardsLabel": "Kopa Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/328434.png&w=350&h=254"
  },
  "alexander isak": {
    "name": "Alexander Isak",
    "club": "Newcastle United",
    "nation": "Sweden",
    "pos": "Forward",
    "ovr": 86,
    "goals": 126,
    "assists": 32,
    "trophies": 4,
    "peakGoals": 25,
    "awards": 1,
    "awardsLabel": "Swedish Forward of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/235888.png&w=350&h=254"
  },
  "viktor gyokeres": {
    "name": "Viktor Gy\u00f6keres",
    "club": "Sporting CP",
    "nation": "Sweden",
    "pos": "Forward",
    "ovr": 86,
    "goals": 158,
    "assists": 54,
    "trophies": 4,
    "peakGoals": 43,
    "awards": 1,
    "awardsLabel": "Primeira Liga Top Scorer",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/253965.png&w=350&h=254"
  },
  "karim benzema": {
    "name": "Karim Benzema",
    "club": "Al-Ittihad",
    "nation": "France",
    "pos": "Forward",
    "ovr": 89,
    "goals": 486,
    "assists": 224,
    "trophies": 34,
    "peakGoals": 44,
    "awards": 1,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67863.png&w=350&h=254"
  },
  "gareth bale": {
    "name": "Gareth Bale",
    "club": "Retired",
    "nation": "Wales",
    "pos": "Forward",
    "ovr": 90,
    "goals": 226,
    "assists": 162,
    "trophies": 22,
    "peakGoals": 26,
    "awards": 2,
    "awardsLabel": "PFA Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/80383.png&w=350&h=254"
  },
  "eden hazard": {
    "name": "Eden Hazard",
    "club": "Retired",
    "nation": "Belgium",
    "pos": "Forward",
    "ovr": 89,
    "goals": 200,
    "assists": 158,
    "trophies": 16,
    "peakGoals": 22,
    "awards": 1,
    "awardsLabel": "PL Player of Season",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104749.png&w=350&h=254"
  },
  "toni kroos": {
    "name": "Toni Kroos",
    "club": "Retired",
    "nation": "Germany",
    "pos": "Midfielder",
    "ovr": 90,
    "goals": 90,
    "assists": 182,
    "trophies": 34,
    "peakGoals": 9,
    "awards": 1,
    "awardsLabel": "German Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/103565.png&w=350&h=254"
  },
  "mesut ozil": {
    "name": "Mesut Ozil",
    "club": "Retired",
    "nation": "Germany",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 121,
    "assists": 258,
    "trophies": 13,
    "peakGoals": 12,
    "awards": 1,
    "awardsLabel": "Premier League Top Assist",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/84775.png&w=350&h=254"
  },
  "wayne rooney": {
    "name": "Wayne Rooney",
    "club": "Retired",
    "nation": "England",
    "pos": "Forward",
    "ovr": 91,
    "goals": 366,
    "assists": 206,
    "trophies": 20,
    "peakGoals": 34,
    "awards": 1,
    "awardsLabel": "PFA Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13010.png&w=350&h=254"
  },
  "steven gerrard": {
    "name": "Steven Gerrard",
    "club": "Retired",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 90,
    "goals": 212,
    "assists": 174,
    "trophies": 11,
    "peakGoals": 24,
    "awards": 1,
    "awardsLabel": "UEFA Club Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/392.png&w=350&h=254"
  },
  "frank lampard": {
    "name": "Frank Lampard",
    "club": "Retired",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 90,
    "goals": 303,
    "assists": 190,
    "trophies": 14,
    "peakGoals": 27,
    "awards": 1,
    "awardsLabel": "Premier League Hall of Fame",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/400.png&w=350&h=254"
  },
  "sergio aguero": {
    "name": "Sergio Aguero",
    "club": "Retired",
    "nation": "Argentina",
    "pos": "Forward",
    "ovr": 91,
    "goals": 427,
    "assists": 148,
    "trophies": 21,
    "peakGoals": 33,
    "awards": 1,
    "awardsLabel": "Premier League Golden Boot",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/84984.png&w=350&h=254"
  },
  "thomas muller": {
    "name": "Thomas Muller",
    "club": "Bayern Munich",
    "nation": "Germany",
    "pos": "Forward",
    "ovr": 88,
    "goals": 295,
    "assists": 278,
    "trophies": 33,
    "peakGoals": 32,
    "awards": 1,
    "awardsLabel": "World Cup Golden Boot",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/127170.png&w=350&h=254"
  },
  "manuel neuer": {
    "name": "Manuel Neuer",
    "club": "Bayern Munich",
    "nation": "Germany",
    "pos": "Goalkeeper",
    "ovr": 91,
    "goals": 0,
    "assists": 7,
    "trophies": 32,
    "peakGoals": 0,
    "awards": 5,
    "awardsLabel": "World Best Goalkeeper",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/88490.png&w=350&h=254"
  },
  "angel di maria": {
    "name": "Angel Di Maria",
    "club": "Benfica",
    "nation": "Argentina",
    "pos": "Forward",
    "ovr": 88,
    "goals": 215,
    "assists": 292,
    "trophies": 35,
    "peakGoals": 19,
    "awards": 1,
    "awardsLabel": "Olimpia de Plata",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104192.png&w=350&h=254"
  },
  "alexis sanchez": {
    "name": "Alexis Sanchez",
    "club": "Udinese",
    "nation": "Chile",
    "pos": "Forward",
    "ovr": 87,
    "goals": 254,
    "assists": 172,
    "trophies": 20,
    "peakGoals": 30,
    "awards": 1,
    "awardsLabel": "Copa America Best Player",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99343.png&w=350&h=254"
  },
  "romelu lukaku": {
    "name": "Romelu Lukaku",
    "club": "Napoli",
    "nation": "Belgium",
    "pos": "Forward",
    "ovr": 87,
    "goals": 396,
    "assists": 112,
    "trophies": 7,
    "peakGoals": 34,
    "awards": 1,
    "awardsLabel": "Serie A MVP",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/135186.png&w=350&h=254"
  },
  "raheem sterling": {
    "name": "Raheem Sterling",
    "club": "Arsenal",
    "nation": "England",
    "pos": "Forward",
    "ovr": 86,
    "goals": 218,
    "assists": 142,
    "trophies": 14,
    "peakGoals": 31,
    "awards": 1,
    "awardsLabel": "FWA Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156947.png&w=350&h=254"
  },
  "casemiro": {
    "name": "Carlos Casemiro",
    "club": "Manchester United",
    "nation": "Brazil",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 68,
    "assists": 54,
    "trophies": 23,
    "peakGoals": 7,
    "awards": 1,
    "awardsLabel": "Samba Gold",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148677.png&w=350&h=254"
  },
  "paul pogba": {
    "name": "Paul Pogba",
    "club": "Free Agent",
    "nation": "France",
    "pos": "Midfielder",
    "ovr": 86,
    "goals": 102,
    "assists": 126,
    "trophies": 13,
    "peakGoals": 16,
    "awards": 1,
    "awardsLabel": "Golden Boy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/137839.png&w=350&h=254"
  },
  "bukayo saka": {
    "name": "Bukayo Saka",
    "club": "Arsenal",
    "nation": "England",
    "pos": "Forward",
    "ovr": 88,
    "goals": 100,
    "assists": 78,
    "trophies": 4,
    "peakGoals": 21,
    "awards": 1,
    "awardsLabel": "England Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271816.png&w=350&h=254"
  },
  "phil foden": {
    "name": "Phil Foden",
    "club": "Manchester City",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 89,
    "goals": 126,
    "assists": 74,
    "trophies": 18,
    "peakGoals": 27,
    "awards": 1,
    "awardsLabel": "FWA Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/256998.png&w=350&h=254"
  },
  "rodri": {
    "name": "Rodrigo Hernandez (Rodri)",
    "club": "Manchester City",
    "nation": "Spain",
    "pos": "Midfielder",
    "ovr": 91,
    "goals": 38,
    "assists": 44,
    "trophies": 13,
    "peakGoals": 9,
    "awards": 1,
    "awardsLabel": "Ballon d'Or",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/245367.png&w=350&h=254"
  },
  "declan rice": {
    "name": "Declan Rice",
    "club": "Arsenal",
    "nation": "England",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 32,
    "assists": 38,
    "trophies": 3,
    "peakGoals": 7,
    "awards": 1,
    "awardsLabel": "Conference League MVP",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/237672.png&w=350&h=254"
  },
  "virgil van dijk": {
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nation": "Netherlands",
    "pos": "Defender",
    "ovr": 90,
    "goals": 54,
    "assists": 24,
    "trophies": 11,
    "peakGoals": 7,
    "awards": 1,
    "awardsLabel": "UEFA Men's Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/159846.png&w=350&h=254"
  },
  "trent alexander-arnold": {
    "name": "Trent Alexander-Arnold",
    "club": "Liverpool",
    "nation": "England",
    "pos": "Defender",
    "ovr": 88,
    "goals": 26,
    "assists": 108,
    "trophies": 8,
    "peakGoals": 4,
    "awards": 1,
    "awardsLabel": "Premier League Young Player",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/232980.png&w=350&h=254"
  },
  "thibaut courtois": {
    "name": "Thibaut Courtois",
    "club": "Real Madrid",
    "nation": "Belgium",
    "pos": "Goalkeeper",
    "ovr": 90,
    "goals": 0,
    "assists": 2,
    "trophies": 20,
    "peakGoals": 0,
    "awards": 1,
    "awardsLabel": "Yashin Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148405.png&w=350&h=254"
  },
  "alisson becker": {
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nation": "Brazil",
    "pos": "Goalkeeper",
    "ovr": 89,
    "goals": 1,
    "assists": 4,
    "trophies": 8,
    "peakGoals": 1,
    "awards": 1,
    "awardsLabel": "Yashin Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/196144.png&w=350&h=254"
  },
  "bernardo silva": {
    "name": "Bernardo Silva",
    "club": "Manchester City",
    "nation": "Portugal",
    "pos": "Midfielder",
    "ovr": 89,
    "goals": 118,
    "assists": 126,
    "trophies": 20,
    "peakGoals": 13,
    "awards": 1,
    "awardsLabel": "Nations League MVP",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/194723.png&w=350&h=254"
  },
  "bruno fernandes": {
    "name": "Bruno Fernandes",
    "club": "Manchester United",
    "nation": "Portugal",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 188,
    "assists": 172,
    "trophies": 8,
    "peakGoals": 32,
    "awards": 3,
    "awardsLabel": "Sir Matt Busby Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178564.png&w=350&h=254"
  },
  "federico valverde": {
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "nation": "Uruguay",
    "pos": "Midfielder",
    "ovr": 89,
    "goals": 38,
    "assists": 46,
    "trophies": 14,
    "peakGoals": 12,
    "awards": 1,
    "awardsLabel": "Club World Cup Silver Ball",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/239704.png&w=350&h=254"
  },
  "eduardo camavinga": {
    "name": "Eduardo Camavinga",
    "club": "Real Madrid",
    "nation": "France",
    "pos": "Midfielder",
    "ovr": 86,
    "goals": 12,
    "assists": 20,
    "trophies": 10,
    "peakGoals": 3,
    "awards": 1,
    "awardsLabel": "Golden Boy Runner-Up",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/283838.png&w=350&h=254"
  },
  "pedri": {
    "name": "Pedro Gonzalez (Pedri)",
    "club": "Barcelona",
    "nation": "Spain",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 28,
    "assists": 34,
    "trophies": 5,
    "peakGoals": 7,
    "awards": 1,
    "awardsLabel": "Golden Boy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/288448.png&w=350&h=254"
  },
  "gavi": {
    "name": "Pablo Gavira (Gavi)",
    "club": "Barcelona",
    "nation": "Spain",
    "pos": "Midfielder",
    "ovr": 86,
    "goals": 14,
    "assists": 26,
    "trophies": 4,
    "peakGoals": 3,
    "awards": 1,
    "awardsLabel": "Kopa Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/315181.png&w=350&h=254"
  },
  "ilkay gundogan": {
    "name": "Ilkay Gundogan",
    "club": "Manchester City",
    "nation": "Germany",
    "pos": "Midfielder",
    "ovr": 87,
    "goals": 114,
    "assists": 82,
    "trophies": 18,
    "peakGoals": 17,
    "awards": 1,
    "awardsLabel": "German Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/133603.png&w=350&h=254"
  },
  "jamal musiala": {
    "name": "Jamal Musiala",
    "club": "Bayern Munich",
    "nation": "Germany",
    "pos": "Midfielder",
    "ovr": 89,
    "goals": 81,
    "assists": 52,
    "trophies": 12,
    "peakGoals": 18,
    "awards": 1,
    "awardsLabel": "Bayern Player of Season",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/290885.png&w=350&h=254"
  },
  "florian wirtz": {
    "name": "Florian Wirtz",
    "club": "Bayer Leverkusen",
    "nation": "Germany",
    "pos": "Midfielder",
    "ovr": 89,
    "goals": 68,
    "assists": 76,
    "trophies": 4,
    "peakGoals": 18,
    "awards": 1,
    "awardsLabel": "Bundesliga Player of Season",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/296541.png&w=350&h=254"
  },
  "victor osimhen": {
    "name": "Victor Osimhen",
    "club": "Galatasaray",
    "nation": "Nigeria",
    "pos": "Forward",
    "ovr": 88,
    "goals": 164,
    "assists": 42,
    "trophies": 5,
    "peakGoals": 31,
    "awards": 1,
    "awardsLabel": "African Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/229094.png&w=350&h=254"
  },
  "khvicha kvaratskhelia": {
    "name": "Khvicha Kvaratskhelia",
    "club": "Napoli",
    "nation": "Georgia",
    "pos": "Forward",
    "ovr": 87,
    "goals": 68,
    "assists": 62,
    "trophies": 3,
    "peakGoals": 14,
    "awards": 1,
    "awardsLabel": "Serie A MVP",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/264770.png&w=350&h=254"
  },
  "lautaro martinez": {
    "name": "Lautaro Martinez",
    "club": "Inter Milan",
    "nation": "Argentina",
    "pos": "Forward",
    "ovr": 89,
    "goals": 218,
    "assists": 68,
    "trophies": 13,
    "peakGoals": 27,
    "awards": 1,
    "awardsLabel": "Serie A MVP",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231295.png&w=350&h=254"
  },
  "julian alvarez": {
    "name": "Julian Alvarez",
    "club": "Atletico Madrid",
    "nation": "Argentina",
    "pos": "Forward",
    "ovr": 87,
    "goals": 122,
    "assists": 58,
    "trophies": 16,
    "peakGoals": 24,
    "awards": 1,
    "awardsLabel": "World Cup Winner",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271815.png&w=350&h=254"
  },
  "rafael leao": {
    "name": "Rafael Leao",
    "club": "AC Milan",
    "nation": "Portugal",
    "pos": "Forward",
    "ovr": 87,
    "goals": 92,
    "assists": 68,
    "trophies": 4,
    "peakGoals": 16,
    "awards": 1,
    "awardsLabel": "Serie A MVP",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/251785.png&w=350&h=254"
  },
  "ousmane dembele": {
    "name": "Ousmane Dembele",
    "club": "Paris Saint-Germain",
    "nation": "France",
    "pos": "Forward",
    "ovr": 86,
    "goals": 88,
    "assists": 116,
    "trophies": 10,
    "peakGoals": 14,
    "awards": 1,
    "awardsLabel": "Bundesliga Rookie of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/228189.png&w=350&h=254"
  },
  "achraf hakimi": {
    "name": "Achraf Hakimi",
    "club": "Paris Saint-Germain",
    "nation": "Morocco",
    "pos": "Defender",
    "ovr": 88,
    "goals": 46,
    "assists": 68,
    "trophies": 12,
    "peakGoals": 9,
    "awards": 3,
    "awardsLabel": "African Team of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231264.png&w=350&h=254"
  },
  "alphonso davies": {
    "name": "Alphonso Davies",
    "club": "Bayern Munich",
    "nation": "Canada",
    "pos": "Defender",
    "ovr": 86,
    "goals": 28,
    "assists": 48,
    "trophies": 15,
    "peakGoals": 4,
    "awards": 2,
    "awardsLabel": "CONCACAF Player of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/237991.png&w=350&h=254"
  },
  "marcus rashford": {
    "name": "Marcus Rashford",
    "club": "Manchester United",
    "nation": "England",
    "pos": "Forward",
    "ovr": 85,
    "goals": 148,
    "assists": 82,
    "trophies": 6,
    "peakGoals": 30,
    "awards": 1,
    "awardsLabel": "MBE Honour",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/230784.png&w=350&h=254"
  },
  "martin odegaard": {
    "name": "Martin Odegaard",
    "club": "Arsenal",
    "nation": "Norway",
    "pos": "Midfielder",
    "ovr": 88,
    "goals": 68,
    "assists": 78,
    "trophies": 5,
    "peakGoals": 15,
    "awards": 2,
    "awardsLabel": "Arsenal Player of Season",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/210406.png&w=350&h=254"
  },
  "emiliano martinez": {
    "name": "Emiliano Martinez",
    "club": "Aston Villa",
    "nation": "Argentina",
    "pos": "Goalkeeper",
    "ovr": 88,
    "goals": 0,
    "assists": 2,
    "trophies": 6,
    "peakGoals": 0,
    "awards": 2,
    "awardsLabel": "Yashin Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156948.png&w=350&h=254"
  },
  "gianluigi donnarumma": {
    "name": "Gianluigi Donnarumma",
    "club": "Paris Saint-Germain",
    "nation": "Italy",
    "pos": "Goalkeeper",
    "ovr": 89,
    "goals": 0,
    "assists": 1,
    "trophies": 10,
    "peakGoals": 0,
    "awards": 1,
    "awardsLabel": "Yashin Trophy",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/216527.png&w=350&h=254"
  },
  "marquinhos": {
    "name": "Marcos Marquinhos",
    "club": "Paris Saint-Germain",
    "nation": "Brazil",
    "pos": "Defender",
    "ovr": 88,
    "goals": 44,
    "assists": 18,
    "trophies": 32,
    "peakGoals": 6,
    "awards": 6,
    "awardsLabel": "Ligue 1 Team of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/175200.png&w=350&h=254"
  },
  "raphinha": {
    "name": "Raphael Raphinha",
    "club": "Barcelona",
    "nation": "Brazil",
    "pos": "Forward",
    "ovr": 88,
    "goals": 114,
    "assists": 84,
    "trophies": 6,
    "peakGoals": 22,
    "awards": 1,
    "awardsLabel": "Samba Gold",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231267.png&w=350&h=254"
  },
  "darwin nunez": {
    "name": "Darwin Nunez",
    "club": "Liverpool",
    "nation": "Uruguay",
    "pos": "Forward",
    "ovr": 86,
    "goals": 118,
    "assists": 42,
    "trophies": 5,
    "peakGoals": 34,
    "awards": 1,
    "awardsLabel": "Primeira Liga Top Scorer",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/253995.png&w=350&h=254"
  },
  "robin van persie": {
    "name": "Robin van Persie",
    "club": "Retired",
    "nation": "Netherlands",
    "pos": "Forward",
    "ovr": 90,
    "goals": 322,
    "assists": 142,
    "trophies": 7,
    "peakGoals": 37,
    "awards": 2,
    "awardsLabel": "Premier League Golden Boot",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14856.png&w=350&h=254"
  },
  "arjen robben": {
    "name": "Arjen Robben",
    "club": "Retired",
    "nation": "Netherlands",
    "pos": "Forward",
    "ovr": 91,
    "goals": 246,
    "assists": 198,
    "trophies": 32,
    "peakGoals": 23,
    "awards": 1,
    "awardsLabel": "German Footballer of Year",
    "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11497.png&w=350&h=254"
  }
};

const PLAYER_LIVE_CONFIG = {
  "cristiano ronaldo": {
    "name": "Cristiano Ronaldo",
    "playerKeys": [
      "cristiano ronaldo",
      "ronaldo",
      "cr7",
      "c. ronaldo"
    ],
    "teamId": "817",
    "clubName": "Al-Nassr",
    "leagueCode": "ksa.1",
    "altLeagueCodes": [
      "afc.champions",
      "ksa.kings.cup"
    ],
    "verifiedBase": {
      "goals": 982,
      "assists": 261,
      "trophies": 35,
      "ovr": 92,
      "peakGoals": 69,
      "awards": 5,
      "awardsLabel": "Ballon d'Or"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "lionel messi": {
    "name": "Lionel Messi",
    "playerKeys": [
      "lionel messi",
      "messi",
      "leo messi",
      "l. messi"
    ],
    "teamId": "20232",
    "clubName": "Inter Miami",
    "leagueCode": "usa.1",
    "altLeagueCodes": [
      "concacaf.champions"
    ],
    "verifiedBase": {
      "goals": 948,
      "assists": 427,
      "trophies": 46,
      "ovr": 93,
      "peakGoals": 91,
      "awards": 8,
      "awardsLabel": "Ballon d'Or"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "lamine yamal": {
    "name": "Lamine Yamal",
    "playerKeys": [
      "lamine yamal",
      "yamal",
      "l. yamal"
    ],
    "teamId": "83",
    "clubName": "Barcelona",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 70,
      "assists": 47,
      "trophies": 5,
      "ovr": 89,
      "peakGoals": 24,
      "awards": 2,
      "awardsLabel": "Kopa Trophy"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "vinicius junior": {
    "name": "Vinicius Junior",
    "playerKeys": [
      "vinicius junior",
      "vinicius jr",
      "vini jr",
      "vinicius",
      "vini"
    ],
    "teamId": "86",
    "clubName": "Real Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 161,
      "assists": 98,
      "trophies": 15,
      "ovr": 91,
      "peakGoals": 26,
      "awards": 1,
      "awardsLabel": "UCL Player of Season"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "kylian mbappe": {
    "name": "Kylian Mbapp\u00e9",
    "playerKeys": [
      "kylian mbapp\u00e9",
      "kylian mbappe",
      "mbappe",
      "mbapp\u00e9",
      "k. mbappe"
    ],
    "teamId": "86",
    "clubName": "Real Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 373,
      "assists": 178,
      "trophies": 21,
      "ovr": 92,
      "peakGoals": 44,
      "awards": 1,
      "awardsLabel": "World Cup Golden Boot"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "erling haaland": {
    "name": "Erling Haaland",
    "playerKeys": [
      "erling haaland",
      "haaland",
      "e. haaland"
    ],
    "teamId": "382",
    "clubName": "Manchester City",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 368,
      "assists": 62,
      "trophies": 12,
      "ovr": 91,
      "peakGoals": 52,
      "awards": 2,
      "awardsLabel": "Golden Boots"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "jude bellingham": {
    "name": "Jude Bellingham",
    "playerKeys": [
      "jude bellingham",
      "bellingham",
      "j. bellingham"
    ],
    "teamId": "86",
    "clubName": "Real Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 92,
      "assists": 58,
      "trophies": 8,
      "ovr": 90,
      "peakGoals": 23,
      "awards": 1,
      "awardsLabel": "Kopa Trophy"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "harry kane": {
    "name": "Harry Kane",
    "playerKeys": [
      "harry kane",
      "kane",
      "h. kane"
    ],
    "teamId": "132",
    "clubName": "Bayern Munich",
    "leagueCode": "ger.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ger.dfb_pokal"
    ],
    "verifiedBase": {
      "goals": 458,
      "assists": 122,
      "trophies": 3,
      "ovr": 90,
      "peakGoals": 44,
      "awards": 1,
      "awardsLabel": "European Golden Shoe"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "robert lewandowski": {
    "name": "Robert Lewandowski",
    "playerKeys": [
      "robert lewandowski",
      "lewandowski",
      "r. lewandowski",
      "lewy"
    ],
    "teamId": "83",
    "clubName": "Barcelona",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 688,
      "assists": 186,
      "trophies": 29,
      "ovr": 91,
      "peakGoals": 55,
      "awards": 2,
      "awardsLabel": "FIFA Best Player"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "mohamed salah": {
    "name": "Mohamed Salah",
    "playerKeys": [
      "mohamed salah",
      "salah",
      "m. salah",
      "mo salah"
    ],
    "teamId": "364",
    "clubName": "Liverpool",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 382,
      "assists": 172,
      "trophies": 11,
      "ovr": 89,
      "peakGoals": 44,
      "awards": 2,
      "awardsLabel": "African Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "cole palmer": {
    "name": "Cole Palmer",
    "playerKeys": [
      "cole palmer",
      "palmer",
      "c. palmer"
    ],
    "teamId": "363",
    "clubName": "Chelsea",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.europa.conf",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 72,
      "assists": 42,
      "trophies": 5,
      "ovr": 88,
      "peakGoals": 27,
      "awards": 1,
      "awardsLabel": "PFA Young Player"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "bukayo saka": {
    "name": "Bukayo Saka",
    "playerKeys": [
      "bukayo saka",
      "saka",
      "b. saka"
    ],
    "teamId": "359",
    "clubName": "Arsenal",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 100,
      "assists": 78,
      "trophies": 4,
      "ovr": 88,
      "peakGoals": 21,
      "awards": 1,
      "awardsLabel": "England Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "phil foden": {
    "name": "Phil Foden",
    "playerKeys": [
      "phil foden",
      "foden",
      "p. foden"
    ],
    "teamId": "382",
    "clubName": "Manchester City",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 126,
      "assists": 74,
      "trophies": 18,
      "ovr": 89,
      "peakGoals": 27,
      "awards": 1,
      "awardsLabel": "FWA Footballer of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "rodri": {
    "name": "Rodrigo Hernandez (Rodri)",
    "playerKeys": [
      "rodri",
      "rodrigo",
      "rodrigo hernandez"
    ],
    "teamId": "382",
    "clubName": "Manchester City",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 38,
      "assists": 44,
      "trophies": 13,
      "ovr": 91,
      "peakGoals": 9,
      "awards": 1,
      "awardsLabel": "Ballon d'Or"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "jamal musiala": {
    "name": "Jamal Musiala",
    "playerKeys": [
      "jamal musiala",
      "musiala",
      "j. musiala"
    ],
    "teamId": "132",
    "clubName": "Bayern Munich",
    "leagueCode": "ger.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ger.dfb_pokal"
    ],
    "verifiedBase": {
      "goals": 81,
      "assists": 52,
      "trophies": 12,
      "ovr": 89,
      "peakGoals": 18,
      "awards": 1,
      "awardsLabel": "Bayern Player of Season"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "florian wirtz": {
    "name": "Florian Wirtz",
    "playerKeys": [
      "florian wirtz",
      "wirtz",
      "f. wirtz"
    ],
    "teamId": "131",
    "clubName": "Bayer Leverkusen",
    "leagueCode": "ger.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ger.dfb_pokal"
    ],
    "verifiedBase": {
      "goals": 68,
      "assists": 76,
      "trophies": 4,
      "ovr": 89,
      "peakGoals": 18,
      "awards": 1,
      "awardsLabel": "Bundesliga Player of Season"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "son heung-min": {
    "name": "Son Heung-min",
    "playerKeys": [
      "son heung-min",
      "son",
      "heung-min son"
    ],
    "teamId": "367",
    "clubName": "Tottenham Hotspur",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.europa",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 248,
      "assists": 114,
      "trophies": 3,
      "ovr": 88,
      "peakGoals": 24,
      "awards": 1,
      "awardsLabel": "Premier League Golden Boot"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "antoine griezmann": {
    "name": "Antoine Griezmann",
    "playerKeys": [
      "antoine griezmann",
      "griezmann",
      "a. griezmann"
    ],
    "teamId": "1068",
    "clubName": "Atletico Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 312,
      "assists": 162,
      "trophies": 9,
      "ovr": 88,
      "peakGoals": 32,
      "awards": 1,
      "awardsLabel": "World Cup Bronze Ball"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "bruno fernandes": {
    "name": "Bruno Fernandes",
    "playerKeys": [
      "bruno fernandes",
      "bruno",
      "b. fernandes"
    ],
    "teamId": "360",
    "clubName": "Manchester United",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.europa",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 188,
      "assists": 172,
      "trophies": 8,
      "ovr": 88,
      "peakGoals": 32,
      "awards": 3,
      "awardsLabel": "Sir Matt Busby Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "marcus rashford": {
    "name": "Marcus Rashford",
    "playerKeys": [
      "marcus rashford",
      "rashford",
      "m. rashford"
    ],
    "teamId": "360",
    "clubName": "Manchester United",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.europa",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 148,
      "assists": 82,
      "trophies": 6,
      "ovr": 85,
      "peakGoals": 30,
      "awards": 1,
      "awardsLabel": "MBE Honour"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "lautaro martinez": {
    "name": "Lautaro Martinez",
    "playerKeys": [
      "lautaro martinez",
      "lautaro",
      "l. martinez"
    ],
    "teamId": "110",
    "clubName": "Inter Milan",
    "leagueCode": "ita.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ita.coppa_italia"
    ],
    "verifiedBase": {
      "goals": 218,
      "assists": 68,
      "trophies": 13,
      "ovr": 89,
      "peakGoals": 27,
      "awards": 1,
      "awardsLabel": "Serie A MVP"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "julian alvarez": {
    "name": "Julian Alvarez",
    "playerKeys": [
      "julian alvarez",
      "alvarez",
      "j. alvarez"
    ],
    "teamId": "1068",
    "clubName": "Atletico Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 122,
      "assists": 58,
      "trophies": 16,
      "ovr": 87,
      "peakGoals": 24,
      "awards": 1,
      "awardsLabel": "World Cup Winner"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "victor osimhen": {
    "name": "Victor Osimhen",
    "playerKeys": [
      "victor osimhen",
      "osimhen",
      "v. osimhen"
    ],
    "teamId": "436",
    "clubName": "Galatasaray",
    "leagueCode": "tur.1",
    "altLeagueCodes": [
      "uefa.europa"
    ],
    "verifiedBase": {
      "goals": 164,
      "assists": 42,
      "trophies": 5,
      "ovr": 88,
      "peakGoals": 31,
      "awards": 1,
      "awardsLabel": "African Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "khvicha kvaratskhelia": {
    "name": "Khvicha Kvaratskhelia",
    "playerKeys": [
      "khvicha kvaratskhelia",
      "kvaratskhelia",
      "kvara"
    ],
    "teamId": "114",
    "clubName": "Napoli",
    "leagueCode": "ita.1",
    "altLeagueCodes": [
      "ita.coppa_italia"
    ],
    "verifiedBase": {
      "goals": 68,
      "assists": 62,
      "trophies": 3,
      "ovr": 87,
      "peakGoals": 14,
      "awards": 1,
      "awardsLabel": "Serie A MVP"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "rafael leao": {
    "name": "Rafael Leao",
    "playerKeys": [
      "rafael leao",
      "leao",
      "r. leao"
    ],
    "teamId": "103",
    "clubName": "AC Milan",
    "leagueCode": "ita.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ita.coppa_italia"
    ],
    "verifiedBase": {
      "goals": 92,
      "assists": 68,
      "trophies": 4,
      "ovr": 87,
      "peakGoals": 16,
      "awards": 1,
      "awardsLabel": "Serie A MVP"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "pedri": {
    "name": "Pedro Gonzalez (Pedri)",
    "playerKeys": [
      "pedri",
      "pedro gonzalez"
    ],
    "teamId": "83",
    "clubName": "Barcelona",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 28,
      "assists": 34,
      "trophies": 5,
      "ovr": 88,
      "peakGoals": 7,
      "awards": 1,
      "awardsLabel": "Golden Boy"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "raphinha": {
    "name": "Raphael Raphinha",
    "playerKeys": [
      "raphinha",
      "raphael raphinha"
    ],
    "teamId": "83",
    "clubName": "Barcelona",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 114,
      "assists": 84,
      "trophies": 6,
      "ovr": 88,
      "peakGoals": 22,
      "awards": 1,
      "awardsLabel": "Samba Gold"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "darwin nunez": {
    "name": "Darwin Nunez",
    "playerKeys": [
      "darwin nunez",
      "darwin",
      "nunez"
    ],
    "teamId": "364",
    "clubName": "Liverpool",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 118,
      "assists": 42,
      "trophies": 5,
      "ovr": 86,
      "peakGoals": 34,
      "awards": 1,
      "awardsLabel": "Primeira Liga Top Scorer"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "alexander isak": {
    "name": "Alexander Isak",
    "playerKeys": [
      "alexander isak",
      "isak",
      "a. isak"
    ],
    "teamId": "361",
    "clubName": "Newcastle United",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 126,
      "assists": 32,
      "trophies": 4,
      "ovr": 86,
      "peakGoals": 25,
      "awards": 1,
      "awardsLabel": "Swedish Forward of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "federico valverde": {
    "name": "Federico Valverde",
    "playerKeys": [
      "federico valverde",
      "valverde",
      "f. valverde"
    ],
    "teamId": "86",
    "clubName": "Real Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 38,
      "assists": 46,
      "trophies": 14,
      "ovr": 89,
      "peakGoals": 12,
      "awards": 1,
      "awardsLabel": "Club World Cup Silver Ball"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "martin odegaard": {
    "name": "Martin Odegaard",
    "playerKeys": [
      "martin odegaard",
      "odegaard",
      "m. odegaard"
    ],
    "teamId": "359",
    "clubName": "Arsenal",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 68,
      "assists": 78,
      "trophies": 5,
      "ovr": 88,
      "peakGoals": 15,
      "awards": 2,
      "awardsLabel": "Arsenal Player of Season"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "declan rice": {
    "name": "Declan Rice",
    "playerKeys": [
      "declan rice",
      "rice",
      "d. rice"
    ],
    "teamId": "359",
    "clubName": "Arsenal",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 32,
      "assists": 38,
      "trophies": 3,
      "ovr": 88,
      "peakGoals": 7,
      "awards": 1,
      "awardsLabel": "Conference League MVP"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "trent alexander-arnold": {
    "name": "Trent Alexander-Arnold",
    "playerKeys": [
      "trent alexander-arnold",
      "trent",
      "alexander-arnold"
    ],
    "teamId": "364",
    "clubName": "Liverpool",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 26,
      "assists": 108,
      "trophies": 8,
      "ovr": 88,
      "peakGoals": 4,
      "awards": 1,
      "awardsLabel": "Premier League Young Player"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "virgil van dijk": {
    "name": "Virgil van Dijk",
    "playerKeys": [
      "virgil van dijk",
      "van dijk",
      "vvd"
    ],
    "teamId": "364",
    "clubName": "Liverpool",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 54,
      "assists": 24,
      "trophies": 11,
      "ovr": 90,
      "peakGoals": 7,
      "awards": 1,
      "awardsLabel": "UEFA Men's Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "alisson becker": {
    "name": "Alisson Becker",
    "playerKeys": [
      "alisson becker",
      "alisson",
      "becker"
    ],
    "teamId": "364",
    "clubName": "Liverpool",
    "leagueCode": "eng.1",
    "altLeagueCodes": [
      "uefa.champions",
      "eng.fa",
      "eng.league_cup"
    ],
    "verifiedBase": {
      "goals": 1,
      "assists": 4,
      "trophies": 8,
      "ovr": 89,
      "peakGoals": 1,
      "awards": 1,
      "awardsLabel": "Yashin Trophy"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "thibaut courtois": {
    "name": "Thibaut Courtois",
    "playerKeys": [
      "thibaut courtois",
      "courtois",
      "t. courtois"
    ],
    "teamId": "86",
    "clubName": "Real Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 0,
      "assists": 2,
      "trophies": 20,
      "ovr": 90,
      "peakGoals": 0,
      "awards": 1,
      "awardsLabel": "Yashin Trophy"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "gianluigi donnarumma": {
    "name": "Gianluigi Donnarumma",
    "playerKeys": [
      "gianluigi donnarumma",
      "donnarumma"
    ],
    "teamId": "160",
    "clubName": "Paris Saint-Germain",
    "leagueCode": "fra.1",
    "altLeagueCodes": [
      "uefa.champions",
      "fra.coupe_de_france"
    ],
    "verifiedBase": {
      "goals": 0,
      "assists": 1,
      "trophies": 10,
      "ovr": 89,
      "peakGoals": 0,
      "awards": 1,
      "awardsLabel": "Yashin Trophy"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "achraf hakimi": {
    "name": "Achraf Hakimi",
    "playerKeys": [
      "achraf hakimi",
      "hakimi",
      "a. hakimi"
    ],
    "teamId": "160",
    "clubName": "Paris Saint-Germain",
    "leagueCode": "fra.1",
    "altLeagueCodes": [
      "uefa.champions",
      "fra.coupe_de_france"
    ],
    "verifiedBase": {
      "goals": 46,
      "assists": 68,
      "trophies": 12,
      "ovr": 88,
      "peakGoals": 9,
      "awards": 3,
      "awardsLabel": "African Team of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "ousmane dembele": {
    "name": "Ousmane Dembele",
    "playerKeys": [
      "ousmane dembele",
      "dembele",
      "o. dembele"
    ],
    "teamId": "160",
    "clubName": "Paris Saint-Germain",
    "leagueCode": "fra.1",
    "altLeagueCodes": [
      "uefa.champions",
      "fra.coupe_de_france"
    ],
    "verifiedBase": {
      "goals": 88,
      "assists": 116,
      "trophies": 10,
      "ovr": 86,
      "peakGoals": 14,
      "awards": 1,
      "awardsLabel": "Bundesliga Rookie of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "alphonso davies": {
    "name": "Alphonso Davies",
    "playerKeys": [
      "alphonso davies",
      "davies",
      "a. davies"
    ],
    "teamId": "132",
    "clubName": "Bayern Munich",
    "leagueCode": "ger.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ger.dfb_pokal"
    ],
    "verifiedBase": {
      "goals": 28,
      "assists": 48,
      "trophies": 15,
      "ovr": 86,
      "peakGoals": 4,
      "awards": 2,
      "awardsLabel": "CONCACAF Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "thomas muller": {
    "name": "Thomas Muller",
    "playerKeys": [
      "thomas muller",
      "muller",
      "t. muller"
    ],
    "teamId": "132",
    "clubName": "Bayern Munich",
    "leagueCode": "ger.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ger.dfb_pokal"
    ],
    "verifiedBase": {
      "goals": 295,
      "assists": 278,
      "trophies": 33,
      "ovr": 88,
      "peakGoals": 32,
      "awards": 1,
      "awardsLabel": "World Cup Golden Boot"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "manuel neuer": {
    "name": "Manuel Neuer",
    "playerKeys": [
      "manuel neuer",
      "neuer",
      "m. neuer"
    ],
    "teamId": "132",
    "clubName": "Bayern Munich",
    "leagueCode": "ger.1",
    "altLeagueCodes": [
      "uefa.champions",
      "ger.dfb_pokal"
    ],
    "verifiedBase": {
      "goals": 0,
      "assists": 7,
      "trophies": 32,
      "ovr": 91,
      "peakGoals": 0,
      "awards": 5,
      "awardsLabel": "World Best Goalkeeper"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "luka modric": {
    "name": "Luka Modric",
    "playerKeys": [
      "luka modric",
      "modric",
      "l. modric"
    ],
    "teamId": "86",
    "clubName": "Real Madrid",
    "leagueCode": "esp.1",
    "altLeagueCodes": [
      "uefa.champions",
      "esp.copa_del_rey"
    ],
    "verifiedBase": {
      "goals": 128,
      "assists": 168,
      "trophies": 31,
      "ovr": 89,
      "peakGoals": 12,
      "awards": 1,
      "awardsLabel": "Ballon d'Or"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
  },
  "sadio mane": {
    "name": "Sadio Mane",
    "playerKeys": [
      "sadio mane",
      "mane",
      "s. mane"
    ],
    "teamId": "817",
    "clubName": "Al-Nassr",
    "leagueCode": "ksa.1",
    "altLeagueCodes": [
      "afc.champions",
      "ksa.kings.cup"
    ],
    "verifiedBase": {
      "goals": 254,
      "assists": 118,
      "trophies": 14,
      "ovr": 88,
      "peakGoals": 26,
      "awards": 2,
      "awardsLabel": "African Player of Year"
    },
    "baselineDate": "2026-10-25T00:00:00Z"
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

  // 1. Check if in PLAYER_LIVE_CONFIG
  let liveKey = Object.keys(PLAYER_LIVE_CONFIG).find(k => {
    if (k === normQuery) return true;
    const cfg = PLAYER_LIVE_CONFIG[k];
    return cfg.playerKeys.some(pk => normQuery === pk || normQuery.includes(pk) || pk.includes(normQuery));
  });

  // 2. Check in BATTLE_DATABASE
  let dbKey = Object.keys(BATTLE_DATABASE).find(k => {
    if (k === normQuery) return true;
    if (normQuery.includes(k) || k.includes(normQuery)) return true;
    const name = normalizeKey(BATTLE_DATABASE[k].name);
    return normQuery === name || normQuery.includes(name) || name.includes(normQuery);
  });

  const dbPlayer = dbKey ? BATTLE_DATABASE[dbKey] : null;

  // If not configured for live tracking (e.g. retired legend), return verified stats immediately with 200 OK
  if (!liveKey) {
    if (dbPlayer) {
      return response.status(200).json({
        success: true,
        player: dbPlayer.name,
        club: dbPlayer.club,
        ovr: dbPlayer.ovr,
        base: dbPlayer,
        liveDeltas: { goals: 0, assists: 0, trophies: 0 },
        liveTotals: {
          goals: dbPlayer.goals,
          assists: dbPlayer.assists,
          trophies: dbPlayer.trophies,
          peakGoals: dbPlayer.peakGoals,
          awards: dbPlayer.awards,
          awardsLabel: dbPlayer.awardsLabel
        },
        trackedMatches: [],
        isLiveNow: false,
        lastSyncTimestamp: Date.now()
      });
    }

    return response.status(404).json({
      error: `Player not found in battle database: ${queryPlayer}`
    });
  }

  const cfg = PLAYER_LIVE_CONFIG[liveKey];
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

    // Anti-downgrade guarantee: never fall below verified database totals
    const fallbackGoals = dbPlayer?.goals || cfg.verifiedBase.goals;
    const fallbackAssists = dbPlayer?.assists || cfg.verifiedBase.assists;
    const fallbackTrophies = dbPlayer?.trophies || cfg.verifiedBase.trophies;

    const totalGoals = Math.max(fallbackGoals, cfg.verifiedBase.goals + deltaGoals);
    const totalAssists = Math.max(fallbackAssists, cfg.verifiedBase.assists + deltaAssists);
    const totalTrophies = Math.max(fallbackTrophies, cfg.verifiedBase.trophies + deltaTrophies);

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
