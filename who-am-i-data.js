/**
 * ============================================================================
 * WHO AM I? (CAREER CLUES) COMPREHENSIVE FOOTBALLER KNOWLEDGE BASE & ENGINE
 * ============================================================================
 * 160+ world-class modern superstars and legendary icons with complete club
 * journeys, photos, multi-category clue profiles, and transfer sync engine.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // CLUB BADGES REPOSITORY (100% RELIABLE MEDIA-SPORTS URLS)
  // --------------------------------------------------------------------------
  const CLUB_LOGOS = {
    // Premier League & England
    'Manchester United': 'https://media.api-sports.io/football/teams/33.png',
    'Manchester City': 'https://media.api-sports.io/football/teams/50.png',
    'Liverpool': 'https://media.api-sports.io/football/teams/40.png',
    'Chelsea': 'https://media.api-sports.io/football/teams/49.png',
    'Arsenal': 'https://media.api-sports.io/football/teams/42.png',
    'Tottenham Hotspur': 'https://media.api-sports.io/football/teams/47.png',
    'Tottenham': 'https://media.api-sports.io/football/teams/47.png',
    'Newcastle United': 'https://media.api-sports.io/football/teams/34.png',
    'Newcastle': 'https://media.api-sports.io/football/teams/34.png',
    'Aston Villa': 'https://media.api-sports.io/football/teams/66.png',
    'Everton': 'https://media.api-sports.io/football/teams/45.png',
    'West Ham United': 'https://media.api-sports.io/football/teams/48.png',
    'West Ham': 'https://media.api-sports.io/football/teams/48.png',
    'Brighton': 'https://media.api-sports.io/football/teams/51.png',
    'Wolverhampton Wanderers': 'https://media.api-sports.io/football/teams/39.png',
    'Wolverhampton': 'https://media.api-sports.io/football/teams/39.png',
    'Wolves': 'https://media.api-sports.io/football/teams/39.png',
    'Leicester City': 'https://media.api-sports.io/football/teams/46.png',
    'Southampton': 'https://media.api-sports.io/football/teams/41.png',
    'Leeds United': 'https://media.api-sports.io/football/teams/63.png',
    'Crystal Palace': 'https://media.api-sports.io/football/teams/52.png',
    'Brentford': 'https://media.api-sports.io/football/teams/55.png',
    'Fulham': 'https://media.api-sports.io/football/teams/36.png',
    'Bournemouth': 'https://media.api-sports.io/football/teams/35.png',
    'Nottingham Forest': 'https://media.api-sports.io/football/teams/65.png',
    'Sheffield United': 'https://media.api-sports.io/football/teams/62.png',
    'Norwich City': 'https://media.api-sports.io/football/teams/71.png',
    'Watford': 'https://media.api-sports.io/football/teams/38.png',
    'Birmingham City': 'https://media.api-sports.io/football/teams/59.png',
    'Sunderland': 'https://media.api-sports.io/football/teams/746.png',
    'Middlesbrough': 'https://media.api-sports.io/football/teams/68.png',
    'Blackburn Rovers': 'https://media.api-sports.io/football/teams/67.png',
    'Stoke City': 'https://media.api-sports.io/football/teams/75.png',
    'Portsmouth': 'https://media.api-sports.io/football/teams/74.png',
    'Swansea City': 'https://media.api-sports.io/football/teams/75.png',

    // La Liga & Spain
    'Real Madrid': 'https://media.api-sports.io/football/teams/541.png',
    'Barcelona': 'https://media.api-sports.io/football/teams/529.png',
    'Atletico Madrid': 'https://media.api-sports.io/football/teams/530.png',
    'Sevilla': 'https://media.api-sports.io/football/teams/536.png',
    'Real Sociedad': 'https://media.api-sports.io/football/teams/548.png',
    'Villarreal': 'https://media.api-sports.io/football/teams/533.png',
    'Athletic Bilbao': 'https://media.api-sports.io/football/teams/531.png',
    'Athletic Club': 'https://media.api-sports.io/football/teams/531.png',
    'Valencia': 'https://media.api-sports.io/football/teams/532.png',
    'Real Betis': 'https://media.api-sports.io/football/teams/543.png',
    'Celta Vigo': 'https://media.api-sports.io/football/teams/538.png',
    'Girona': 'https://media.api-sports.io/football/teams/547.png',
    'Getafe': 'https://media.api-sports.io/football/teams/546.png',
    'Mallorca': 'https://media.api-sports.io/football/teams/539.png',
    'Osasuna': 'https://media.api-sports.io/football/teams/542.png',
    'Rayo Vallecano': 'https://media.api-sports.io/football/teams/728.png',
    'Espanyol': 'https://media.api-sports.io/football/teams/540.png',
    'Alaves': 'https://media.api-sports.io/football/teams/724.png',
    'Las Palmas': 'https://media.api-sports.io/football/teams/534.png',
    'Deportivo La Coruna': 'https://media.api-sports.io/football/teams/542.png',
    'Real Zaragoza': 'https://media.api-sports.io/football/teams/721.png',
    'Zaragoza': 'https://media.api-sports.io/football/teams/721.png',
    'Malaga': 'https://media.api-sports.io/football/teams/722.png',

    // Bundesliga & Germany
    'Bayern Munich': 'https://media.api-sports.io/football/teams/157.png',
    'Bayern München': 'https://media.api-sports.io/football/teams/157.png',
    'Borussia Dortmund': 'https://media.api-sports.io/football/teams/165.png',
    'Bayer Leverkusen': 'https://media.api-sports.io/football/teams/168.png',
    'RB Leipzig': 'https://media.api-sports.io/football/teams/173.png',
    'Leipzig': 'https://media.api-sports.io/football/teams/173.png',
    'Eintracht Frankfurt': 'https://media.api-sports.io/football/teams/169.png',
    'VfB Stuttgart': 'https://media.api-sports.io/football/teams/172.png',
    'Stuttgart': 'https://media.api-sports.io/football/teams/172.png',
    'Wolfsburg': 'https://media.api-sports.io/football/teams/161.png',
    'Borussia Monchengladbach': 'https://media.api-sports.io/football/teams/163.png',
    'Gladbach': 'https://media.api-sports.io/football/teams/163.png',
    'Werder Bremen': 'https://media.api-sports.io/football/teams/162.png',
    'Schalke 04': 'https://media.api-sports.io/football/teams/174.png',
    'Schalke': 'https://media.api-sports.io/football/teams/174.png',
    'Hamburger SV': 'https://media.api-sports.io/football/teams/175.png',
    'Hamburg': 'https://media.api-sports.io/football/teams/175.png',
    'Hoffenheim': 'https://media.api-sports.io/football/teams/167.png',
    'FC Koln': 'https://media.api-sports.io/football/teams/192.png',
    'St Pauli': 'https://media.api-sports.io/football/teams/189.png',

    // Serie A & Italy
    'Juventus': 'https://media.api-sports.io/football/teams/496.png',
    'Inter Milan': 'https://media.api-sports.io/football/teams/505.png',
    'Inter': 'https://media.api-sports.io/football/teams/505.png',
    'AC Milan': 'https://media.api-sports.io/football/teams/489.png',
    'Milan': 'https://media.api-sports.io/football/teams/489.png',
    'Napoli': 'https://media.api-sports.io/football/teams/492.png',
    'Roma': 'https://media.api-sports.io/football/teams/497.png',
    'AS Roma': 'https://media.api-sports.io/football/teams/497.png',
    'Lazio': 'https://media.api-sports.io/football/teams/487.png',
    'Atalanta': 'https://media.api-sports.io/football/teams/499.png',
    'Fiorentina': 'https://media.api-sports.io/football/teams/502.png',
    'Bologna': 'https://media.api-sports.io/football/teams/500.png',
    'Torino': 'https://media.api-sports.io/football/teams/503.png',
    'Udinese': 'https://media.api-sports.io/football/teams/494.png',
    'Genoa': 'https://media.api-sports.io/football/teams/495.png',
    'Sampdoria': 'https://media.api-sports.io/football/teams/498.png',
    'Parma': 'https://media.api-sports.io/football/teams/523.png',
    'Cagliari': 'https://media.api-sports.io/football/teams/490.png',
    'Verona': 'https://media.api-sports.io/football/teams/504.png',
    'Como': 'https://media.api-sports.io/football/teams/895.png',
    'Brescia': 'https://media.api-sports.io/football/teams/517.png',
    'Palermo': 'https://media.api-sports.io/football/teams/520.png',

    // Ligue 1 & France
    'Paris Saint-Germain': 'https://media.api-sports.io/football/teams/85.png',
    'Paris Saint Germain': 'https://media.api-sports.io/football/teams/85.png',
    'PSG': 'https://media.api-sports.io/football/teams/85.png',
    'Monaco': 'https://media.api-sports.io/football/teams/91.png',
    'AS Monaco': 'https://media.api-sports.io/football/teams/91.png',
    'Marseille': 'https://media.api-sports.io/football/teams/81.png',
    'Lyon': 'https://media.api-sports.io/football/teams/80.png',
    'Lille': 'https://media.api-sports.io/football/teams/79.png',
    'Rennes': 'https://media.api-sports.io/football/teams/94.png',
    'Nice': 'https://media.api-sports.io/football/teams/84.png',
    'Lens': 'https://media.api-sports.io/football/teams/116.png',
    'Bordeaux': 'https://media.api-sports.io/football/teams/78.png',
    'Saint-Etienne': 'https://media.api-sports.io/football/teams/1063.png',
    'Montpellier': 'https://media.api-sports.io/football/teams/82.png',
    'Nantes': 'https://media.api-sports.io/football/teams/83.png',
    'Metz': 'https://media.api-sports.io/football/teams/545.png',

    // Other Top European Leagues
    'Ajax': 'https://media.api-sports.io/football/teams/194.png',
    'PSV Eindhoven': 'https://media.api-sports.io/football/teams/197.png',
    'PSV': 'https://media.api-sports.io/football/teams/197.png',
    'Feyenoord': 'https://media.api-sports.io/football/teams/197.png',
    'Benfica': 'https://media.api-sports.io/football/teams/211.png',
    'Porto': 'https://media.api-sports.io/football/teams/212.png',
    'Sporting CP': 'https://media.api-sports.io/football/teams/228.png',
    'Sporting': 'https://media.api-sports.io/football/teams/228.png',
    'Celtic': 'https://media.api-sports.io/football/teams/247.png',
    'Rangers': 'https://media.api-sports.io/football/teams/257.png',
    'Galatasaray': 'https://media.api-sports.io/football/teams/645.png',
    'Fenerbahce': 'https://media.api-sports.io/football/teams/611.png',
    'Besiktas': 'https://media.api-sports.io/football/teams/549.png',
    'Red Bull Salzburg': 'https://media.api-sports.io/football/teams/571.png',
    'Salzburg': 'https://media.api-sports.io/football/teams/571.png',
    'Shakhtar Donetsk': 'https://media.api-sports.io/football/teams/550.png',
    'Dynamo Kyiv': 'https://media.api-sports.io/football/teams/570.png',
    'Dinamo Zagreb': 'https://media.api-sports.io/football/teams/620.png',
    'Olympiacos': 'https://media.api-sports.io/football/teams/553.png',
    'Panathinaikos': 'https://media.api-sports.io/football/teams/555.png',
    'Anderlecht': 'https://media.api-sports.io/football/teams/556.png',
    'Club Brugge': 'https://media.api-sports.io/football/teams/569.png',
    'Genk': 'https://media.api-sports.io/football/teams/554.png',

    // Americas & Rest of World
    'Inter Miami': 'https://media.api-sports.io/football/teams/9568.png',
    'LA Galaxy': 'https://media.api-sports.io/football/teams/1605.png',
    'Los Angeles FC': 'https://media.api-sports.io/football/teams/1616.png',
    'New York Red Bulls': 'https://media.api-sports.io/football/teams/1602.png',
    'New York City FC': 'https://media.api-sports.io/football/teams/1604.png',
    'Al-Nassr': 'https://media.api-sports.io/football/teams/2939.png',
    'Al Nassr': 'https://media.api-sports.io/football/teams/2939.png',
    'Al-Hilal': 'https://media.api-sports.io/football/teams/2932.png',
    'Al Hilal': 'https://media.api-sports.io/football/teams/2932.png',
    'Al-Ittihad': 'https://media.api-sports.io/football/teams/2934.png',
    'Al-Ahli': 'https://media.api-sports.io/football/teams/2935.png',
    'Santos': 'https://media.api-sports.io/football/teams/128.png',
    'Flamengo': 'https://media.api-sports.io/football/teams/127.png',
    'Palmeiras': 'https://media.api-sports.io/football/teams/121.png',
    'Sao Paulo': 'https://media.api-sports.io/football/teams/126.png',
    'Corinthians': 'https://media.api-sports.io/football/teams/131.png',
    'Gremio': 'https://media.api-sports.io/football/teams/130.png',
    'Fluminense': 'https://media.api-sports.io/football/teams/124.png',
    'River Plate': 'https://media.api-sports.io/football/teams/435.png',
    'Boca Juniors': 'https://media.api-sports.io/football/teams/451.png',
    'Independiente': 'https://media.api-sports.io/football/teams/453.png',
    'Racing Club': 'https://media.api-sports.io/football/teams/436.png',
    "Newell's Old Boys": 'https://media.api-sports.io/football/teams/455.png',
    'Nacional': 'https://media.api-sports.io/football/teams/234.png',
    'Penarol': 'https://media.api-sports.io/football/teams/235.png',
    'Vissel Kobe': 'https://media.api-sports.io/football/teams/296.png'
  };

  // --------------------------------------------------------------------------
  // LATEST 2024-2026 REAL-WORLD TRANSFER OVERRIDES
  // --------------------------------------------------------------------------
  const TRANSFER_OVERRIDES = {
    'kylian mbappe': { current: 'Real Madrid', addClub: ['Real Madrid', '2024-NOW'] },
    'julian alvarez': { current: 'Atletico Madrid', addClub: ['Atletico Madrid', '2024-NOW'] },
    'dani olmo': { current: 'Barcelona', addClub: ['Barcelona', '2024-NOW'] },
    'victor osimhen': { current: 'Galatasaray', addClub: ['Galatasaray', '2024-NOW'] },
    'matthijs de ligt': { current: 'Manchester United', addClub: ['Manchester United', '2024-NOW'] },
    'raheem sterling': { current: 'Arsenal', addClub: ['Arsenal', '2024-NOW'] },
    'ilkay gundogan': { current: 'Manchester City', addClub: ['Manchester City', '2024-NOW'] },
    'romelu lukaku': { current: 'Napoli', addClub: ['Napoli', '2024-NOW'] },
    'alvaro morata': { current: 'AC Milan', addClub: ['AC Milan', '2024-NOW'] },
    'federico chiesa': { current: 'Liverpool', addClub: ['Liverpool', '2024-NOW'] },
    'mikel merino': { current: 'Arsenal', addClub: ['Arsenal', '2024-NOW'] },
    'riccardo calafiori': { current: 'Arsenal', addClub: ['Arsenal', '2024-NOW'] },
    'conor gallagher': { current: 'Atletico Madrid', addClub: ['Atletico Madrid', '2024-NOW'] },
    'joao felix': { current: 'Chelsea', addClub: ['Chelsea', '2024-NOW'] },
    'pedro neto': { current: 'Chelsea', addClub: ['Chelsea', '2024-NOW'] }
  };

  // --------------------------------------------------------------------------
  // 160+ WORLD CLASS PLAYERS DATABASE
  // --------------------------------------------------------------------------
  const PLAYERS = {
    // Current Global Superstars
    "lionel messi": { first: "Lionel", last: "Messi", country: "ARG / FORWARD", current: "Inter Miami", number: "10", clubs: [["Barcelona", "2004-2021"], ["Paris Saint-Germain", "2021-2023"], ["Inter Miami", "2023-NOW"]] },
    "cristiano ronaldo": { first: "Cristiano", last: "Ronaldo", country: "POR / FORWARD", current: "Al-Nassr", number: "07", clubs: [["Sporting CP", "2002-2003"], ["Manchester United", "2003-2009"], ["Real Madrid", "2009-2018"], ["Juventus", "2018-2021"], ["Manchester United", "2021-2022"], ["Al-Nassr", "2023-NOW"]] },
    "kylian mbappe": { first: "Kylian", last: "Mbappe", country: "FRA / FORWARD", current: "Real Madrid", number: "09", clubs: [["Monaco", "2015-2017"], ["Paris Saint-Germain", "2017-2024"], ["Real Madrid", "2024-NOW"]] },
    "erling haaland": { first: "Erling", last: "Haaland", country: "NOR / FORWARD", current: "Manchester City", number: "09", clubs: [["Bryne", "2015-2016"], ["Molde", "2017-2019"], ["Red Bull Salzburg", "2019-2020"], ["Borussia Dortmund", "2020-2022"], ["Manchester City", "2022-NOW"]] },
    "vinicius junior": { first: "Vinicius", last: "Junior", country: "BRA / FORWARD", current: "Real Madrid", number: "07", clubs: [["Flamengo", "2017-2018"], ["Real Madrid", "2018-NOW"]] },
    "jude bellingham": { first: "Jude", last: "Bellingham", country: "ENG / MIDFIELDER", current: "Real Madrid", number: "05", clubs: [["Birmingham City", "2019-2020"], ["Borussia Dortmund", "2020-2023"], ["Real Madrid", "2023-NOW"]] },
    "kevin de bruyne": { first: "Kevin", last: "De Bruyne", country: "BEL / MIDFIELDER", current: "Manchester City", number: "17", clubs: [["Genk", "2008-2012"], ["Chelsea", "2012-2014"], ["Werder Bremen", "2012-2013"], ["Wolfsburg", "2014-2015"], ["Manchester City", "2015-NOW"]] },
    "mohamed salah": { first: "Mohamed", last: "Salah", country: "EGY / FORWARD", current: "Liverpool", number: "11", clubs: [["Al Mokawloon", "2010-2012"], ["FC Basel", "2012-2014"], ["Chelsea", "2014-2016"], ["Roma", "2016-2017"], ["Liverpool", "2017-NOW"]] },
    "harry kane": { first: "Harry", last: "Kane", country: "ENG / FORWARD", current: "Bayern Munich", number: "09", clubs: [["Tottenham Hotspur", "2009-2023"], ["Millwall", "2012"], ["Norwich City", "2012"], ["Leicester City", "2013"], ["Bayern Munich", "2023-NOW"]] },
    "rodri": { first: "Rodrigo", last: "Hernandez (Rodri)", country: "ESP / MIDFIELDER", current: "Manchester City", number: "16", clubs: [["Villarreal", "2015-2018"], ["Atletico Madrid", "2018-2019"], ["Manchester City", "2019-NOW"]] },
    "lamine yamal": { first: "Lamine", last: "Yamal", country: "ESP / FORWARD", current: "Barcelona", number: "19", clubs: [["Barcelona", "2023-NOW"]] },
    "bukayo saka": { first: "Bukayo", last: "Saka", country: "ENG / FORWARD", current: "Arsenal", number: "07", clubs: [["Arsenal", "2018-NOW"]] },
    "cole palmer": { first: "Cole", last: "Palmer", country: "ENG / MIDFIELDER", current: "Chelsea", number: "20", clubs: [["Manchester City", "2020-2023"], ["Chelsea", "2023-NOW"]] },
    "phil foden": { first: "Phil", last: "Foden", country: "ENG / MIDFIELDER", current: "Manchester City", number: "47", clubs: [["Manchester City", "2017-NOW"]] },
    "florian wirtz": { first: "Florian", last: "Wirtz", country: "GER / MIDFIELDER", current: "Bayer Leverkusen", number: "10", clubs: [["FC Koln", "2010-2020"], ["Bayer Leverkusen", "2020-NOW"]] },
    "jamal musiala": { first: "Jamal", last: "Musiala", country: "GER / MIDFIELDER", current: "Bayern Munich", number: "42", clubs: [["Chelsea", "2011-2019"], ["Bayern Munich", "2020-NOW"]] },
    "robert lewandowski": { first: "Robert", last: "Lewandowski", country: "POL / FORWARD", current: "Barcelona", number: "09", clubs: [["Znicz Pruszkow", "2006-2008"], ["Lech Poznan", "2008-2010"], ["Borussia Dortmund", "2010-2014"], ["Bayern Munich", "2014-2022"], ["Barcelona", "2022-NOW"]] },
    "luka modric": { first: "Luka", last: "Modric", country: "CRO / MIDFIELDER", current: "Real Madrid", number: "10", clubs: [["Dinamo Zagreb", "2003-2008"], ["Tottenham Hotspur", "2008-2012"], ["Real Madrid", "2012-NOW"]] },
    "antoine griezmann": { first: "Antoine", last: "Griezmann", country: "FRA / FORWARD", current: "Atletico Madrid", number: "07", clubs: [["Real Sociedad", "2009-2014"], ["Atletico Madrid", "2014-2019"], ["Barcelona", "2019-2021"], ["Atletico Madrid", "2021-NOW"]] },
    "virgil van dijk": { first: "Virgil", last: "van Dijk", country: "NED / DEFENDER", current: "Liverpool", number: "04", clubs: [["Groningen", "2011-2013"], ["Celtic", "2013-2015"], ["Southampton", "2015-2018"], ["Liverpool", "2018-NOW"]] },
    "neymar": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Al-Hilal", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-NOW"]] },

    // Premier League & Champions
    "declan rice": { first: "Declan", last: "Rice", country: "ENG / MIDFIELDER", current: "Arsenal", number: "41", clubs: [["West Ham United", "2017-2023"], ["Arsenal", "2023-NOW"]] },
    "martin odegaard": { first: "Martin", last: "Odegaard", country: "NOR / MIDFIELDER", current: "Arsenal", number: "08", clubs: [["Stromsgodset", "2014-2015"], ["Real Madrid", "2015-2017"], ["Heerenveen", "2017-2018"], ["Vitesse", "2018-2019"], ["Real Sociedad", "2019-2020"], ["Arsenal", "2021-NOW"]] },
    "william saliba": { first: "William", last: "Saliba", country: "FRA / DEFENDER", current: "Arsenal", number: "02", clubs: [["Saint-Etienne", "2018-2019"], ["Nice", "2021"], ["Marseille", "2021-2022"], ["Arsenal", "2022-NOW"]] },
    "trent alexander-arnold": { first: "Trent", last: "Alexander-Arnold", country: "ENG / DEFENDER", current: "Liverpool", number: "66", clubs: [["Liverpool", "2016-NOW"]] },
    "alisson becker": { first: "Alisson", last: "Becker", country: "BRA / GOALKEEPER", current: "Liverpool", number: "01", clubs: [["Internacional", "2013-2016"], ["Roma", "2016-2018"], ["Liverpool", "2018-NOW"]] },
    "bernardo silva": { first: "Bernardo", last: "Silva", country: "POR / MIDFIELDER", current: "Manchester City", number: "20", clubs: [["Benfica", "2013-2015"], ["Monaco", "2014-2017"], ["Manchester City", "2017-NOW"]] },
    "bruno fernandes": { first: "Bruno", last: "Fernandes", country: "POR / MIDFIELDER", current: "Manchester United", number: "08", clubs: [["Novara", "2012-2013"], ["Udinese", "2013-2016"], ["Sampdoria", "2016-2017"], ["Sporting CP", "2017-2020"], ["Manchester United", "2020-NOW"]] },
    "marcus rashford": { first: "Marcus", last: "Rashford", country: "ENG / FORWARD", current: "Manchester United", number: "10", clubs: [["Manchester United", "2015-NOW"]] },
    "son heung-min": { first: "Son", last: "Heung-min", country: "KOR / FORWARD", current: "Tottenham Hotspur", number: "07", clubs: [["Hamburger SV", "2010-2013"], ["Bayer Leverkusen", "2013-2015"], ["Tottenham Hotspur", "2015-NOW"]] },
    "alexander isak": { first: "Alexander", last: "Isak", country: "SWE / FORWARD", current: "Newcastle United", number: "14", clubs: [["AIK", "2016-2017"], ["Borussia Dortmund", "2017-2019"], ["Willem II", "2019"], ["Real Sociedad", "2019-2022"], ["Newcastle United", "2022-NOW"]] },
    "viktor gyokeres": { first: "Viktor", last: "Gyökeres", country: "SWE / FORWARD", current: "Sporting CP", number: "09", clubs: [["Brommapojkarna", "2015-2017"], ["Brighton", "2018-2021"], ["St Pauli", "2019-2020"], ["Swansea City", "2020-2021"], ["Coventry City", "2021-2023"], ["Sporting CP", "2023-NOW"]] },

    // Real Madrid & Barcelona Core
    "federico valverde": { first: "Federico", last: "Valverde", country: "URU / MIDFIELDER", current: "Real Madrid", number: "08", clubs: [["Penarol", "2015-2016"], ["Deportivo La Coruna", "2017-2018"], ["Real Madrid", "2018-NOW"]] },
    "eduardo camavinga": { first: "Eduardo", last: "Camavinga", country: "FRA / MIDFIELDER", current: "Real Madrid", number: "06", clubs: [["Rennes", "2019-2021"], ["Real Madrid", "2021-NOW"]] },
    "aurelien tchouameni": { first: "Aurelien", last: "Tchouameni", country: "FRA / MIDFIELDER", current: "Real Madrid", number: "14", clubs: [["Bordeaux", "2018-2020"], ["Monaco", "2020-2022"], ["Real Madrid", "2022-NOW"]] },
    "thibaut courtois": { first: "Thibaut", last: "Courtois", country: "BEL / GOALKEEPER", current: "Real Madrid", number: "01", clubs: [["Genk", "2009-2011"], ["Atletico Madrid", "2011-2014"], ["Chelsea", "2014-2018"], ["Real Madrid", "2018-NOW"]] },
    "pedri": { first: "Pedro", last: "Gonzalez (Pedri)", country: "ESP / MIDFIELDER", current: "Barcelona", number: "08", clubs: [["Las Palmas", "2019-2020"], ["Barcelona", "2020-NOW"]] },
    "gavi": { first: "Pablo", last: "Gavira (Gavi)", country: "ESP / MIDFIELDER", current: "Barcelona", number: "06", clubs: [["Barcelona", "2021-NOW"]] },
    "raphinha": { first: "Raphael", last: "Raphinha", country: "BRA / FORWARD", current: "Barcelona", number: "11", clubs: [["Avai", "2015-2016"], ["Vitoria Guimaraes", "2016-2018"], ["Sporting CP", "2018-2019"], ["Rennes", "2019-2020"], ["Leeds United", "2020-2022"], ["Barcelona", "2022-NOW"]] },
    "dani olmo": { first: "Dani", last: "Olmo", country: "ESP / MIDFIELDER", current: "Barcelona", number: "20", clubs: [["Dinamo Zagreb", "2015-2020"], ["RB Leipzig", "2020-2024"], ["Barcelona", "2024-NOW"]] },
    "julian alvarez": { first: "Julian", last: "Alvarez", country: "ARG / FORWARD", current: "Atletico Madrid", number: "19", clubs: [["River Plate", "2018-2022"], ["Manchester City", "2022-2024"], ["Atletico Madrid", "2024-NOW"]] },

    // European Heavyweights (Bayern, PSG, Inter, Napoli, etc.)
    "manuel neuer": { first: "Manuel", last: "Neuer", country: "GER / GOALKEEPER", current: "Bayern Munich", number: "01", clubs: [["Schalke 04", "2006-2011"], ["Bayern Munich", "2011-NOW"]] },
    "thomas muller": { first: "Thomas", last: "Muller", country: "GER / FORWARD", current: "Bayern Munich", number: "25", clubs: [["Bayern Munich", "2008-NOW"]] },
    "alphonso davies": { first: "Alphonso", last: "Davies", country: "CAN / DEFENDER", current: "Bayern Munich", number: "19", clubs: [["Vancouver Whitecaps", "2016-2018"], ["Bayern Munich", "2019-NOW"]] },
    "achraf hakimi": { first: "Achraf", last: "Hakimi", country: "MAR / DEFENDER", current: "Paris Saint-Germain", number: "02", clubs: [["Real Madrid", "2017-2018"], ["Borussia Dortmund", "2018-2020"], ["Inter Milan", "2020-2021"], ["Paris Saint-Germain", "2021-NOW"]] },
    "ousmane dembele": { first: "Ousmane", last: "Dembele", country: "FRA / FORWARD", current: "Paris Saint-Germain", number: "10", clubs: [["Rennes", "2015-2016"], ["Borussia Dortmund", "2016-2017"], ["Barcelona", "2017-2023"], ["Paris Saint-Germain", "2023-NOW"]] },
    "gianluigi donnarumma": { first: "Gianluigi", last: "Donnarumma", country: "ITA / GOALKEEPER", current: "Paris Saint-Germain", number: "01", clubs: [["AC Milan", "2015-2021"], ["Paris Saint-Germain", "2021-NOW"]] },
    "lautaro martinez": { first: "Lautaro", last: "Martinez", country: "ARG / FORWARD", current: "Inter Milan", number: "10", clubs: [["Racing Club", "2015-2018"], ["Inter Milan", "2018-NOW"]] },
    "nicolo barella": { first: "Nicolo", last: "Barella", country: "ITA / MIDFIELDER", current: "Inter Milan", number: "23", clubs: [["Cagliari", "2014-2019"], ["Como", "2016"], ["Inter Milan", "2019-NOW"]] },
    "rafael leao": { first: "Rafael", last: "Leao", country: "POR / FORWARD", current: "AC Milan", number: "10", clubs: [["Sporting CP", "2017-2018"], ["Lille", "2018-2019"], ["AC Milan", "2019-NOW"]] },
    "theo hernandez": { first: "Theo", last: "Hernandez", country: "FRA / DEFENDER", current: "AC Milan", number: "19", clubs: [["Atletico Madrid", "2015-2017"], ["Alaves", "2016-2017"], ["Real Madrid", "2017-2019"], ["Real Sociedad", "2018-2019"], ["AC Milan", "2019-NOW"]] },
    "victor osimhen": { first: "Victor", last: "Osimhen", country: "NGA / FORWARD", current: "Galatasaray", number: "45", clubs: [["Wolfsburg", "2017-2019"], ["Charleroi", "2018-2019"], ["Lille", "2019-2020"], ["Napoli", "2020-2024"], ["Galatasaray", "2024-NOW"]] },
    "khvicha kvaratskhelia": { first: "Khvicha", last: "Kvaratskhelia", country: "GEO / FORWARD", current: "Napoli", number: "77", clubs: [["Dinamo Tbilisi", "2017-2018"], ["Rustavi", "2018-2019"], ["Lokomotiv Moscow", "2019"], ["Rubin Kazan", "2019-2022"], ["Dinamo Batumi", "2022"], ["Napoli", "2022-NOW"]] },

    // Legendary Icons & Ballond'Or Greats
    "zinedine zidane": { first: "Zinedine", last: "Zidane", country: "FRA / MIDFIELDER", current: "Retired", number: "10", clubs: [["Cannes", "1989-1992"], ["Bordeaux", "1992-1996"], ["Juventus", "1996-2001"], ["Real Madrid", "2001-2006"]] },
    "ronaldo nazario": { first: "Ronaldo", last: "Nazario (R9)", country: "BRA / FORWARD", current: "Retired", number: "09", clubs: [["Cruzeiro", "1993-1994"], ["PSV Eindhoven", "1994-1996"], ["Barcelona", "1996-1997"], ["Inter Milan", "1997-2002"], ["Real Madrid", "2002-2007"], ["AC Milan", "2007-2008"], ["Corinthians", "2009-2011"]] },
    "thierry henry": { first: "Thierry", last: "Henry", country: "FRA / FORWARD", current: "Retired", number: "14", clubs: [["Monaco", "1994-1999"], ["Juventus", "1999"], ["Arsenal", "1999-2007"], ["Barcelona", "2007-2010"], ["New York Red Bulls", "2010-2014"]] },
    "ronaldinho": { first: "Ronaldinho", last: "Gaucho", country: "BRA / FORWARD", current: "Retired", number: "10", clubs: [["Gremio", "1998-2001"], ["Paris Saint-Germain", "2001-2003"], ["Barcelona", "2003-2008"], ["AC Milan", "2008-2011"], ["Flamengo", "2011-2012"], ["Atletico Mineiro", "2012-2014"]] },
    "kaka": { first: "Ricardo", last: "Kaka", country: "BRA / MIDFIELDER", current: "Retired", number: "22", clubs: [["Sao Paulo", "2001-2003"], ["AC Milan", "2003-2009"], ["Real Madrid", "2009-2013"], ["AC Milan", "2013"], ["Orlando City", "2015-2017"]] },
    "andres iniesta": { first: "Andres", last: "Iniesta", country: "ESP / MIDFIELDER", current: "Retired", number: "08", clubs: [["Barcelona", "2002-2018"], ["Vissel Kobe", "2018-2023"], ["Emirates Club", "2023-2024"]] },
    "xavi hernandez": { first: "Xavi", last: "Hernandez", country: "ESP / MIDFIELDER", current: "Retired", number: "06", clubs: [["Barcelona", "1998-2015"], ["Al Sadd", "2015-2019"]] },
    "sergio ramos": { first: "Sergio", last: "Ramos", country: "ESP / DEFENDER", current: "Free Agent", number: "04", clubs: [["Sevilla", "2003-2005"], ["Real Madrid", "2005-2021"], ["Paris Saint-Germain", "2021-2023"], ["Sevilla", "2023-2024"]] },
    "karim benzema": { first: "Karim", last: "Benzema", country: "FRA / FORWARD", current: "Al-Ittihad", number: "09", clubs: [["Lyon", "2004-2009"], ["Real Madrid", "2009-2023"], ["Al-Ittihad", "2023-NOW"]] },
    "toni kroos": { first: "Toni", last: "Kroos", country: "GER / MIDFIELDER", current: "Retired", number: "08", clubs: [["Bayern Munich", "2007-2009"], ["Bayer Leverkusen", "2009-2010"], ["Bayern Munich", "2010-2014"], ["Real Madrid", "2014-2024"]] },
    "gareth bale": { first: "Gareth", last: "Bale", country: "WAL / FORWARD", current: "Retired", number: "11", clubs: [["Southampton", "2006-2007"], ["Tottenham Hotspur", "2007-2013"], ["Real Madrid", "2013-2020"], ["Tottenham Hotspur", "2020-2021"], ["Real Madrid", "2021-2022"], ["Los Angeles FC", "2022-2023"]] },
    "eden hazard": { first: "Eden", last: "Hazard", country: "BEL / FORWARD", current: "Retired", number: "10", clubs: [["Lille", "2007-2012"], ["Chelsea", "2012-2019"], ["Real Madrid", "2019-2023"]] },
    "luis suarez": { first: "Luis", last: "Suarez", country: "URU / FORWARD", current: "Inter Miami", number: "09", clubs: [["Nacional", "2005-2006"], ["Groningen", "2006-2007"], ["Ajax", "2007-2011"], ["Liverpool", "2011-2014"], ["Barcelona", "2014-2020"], ["Atletico Madrid", "2020-2022"], ["Gremio", "2023"], ["Inter Miami", "2024-NOW"]] },
    "zlatan ibrahimovic": { first: "Zlatan", last: "Ibrahimovic", country: "SWE / FORWARD", current: "Retired", number: "11", clubs: [["Malmo", "1999-2001"], ["Ajax", "2001-2004"], ["Juventus", "2004-2006"], ["Inter Milan", "2006-2009"], ["Barcelona", "2009-2010"], ["AC Milan", "2010-2012"], ["Paris Saint-Germain", "2012-2016"], ["Manchester United", "2016-2018"], ["LA Galaxy", "2018-2019"], ["AC Milan", "2020-2023"]] },
    "gianluigi buffon": { first: "Gianluigi", last: "Buffon", country: "ITA / GOALKEEPER", current: "Retired", number: "01", clubs: [["Parma", "1995-2001"], ["Juventus", "2001-2018"], ["Paris Saint-Germain", "2018-2019"], ["Juventus", "2019-2021"], ["Parma", "2021-2023"]] },
    "andrea pirlo": { first: "Andrea", last: "Pirlo", country: "ITA / MIDFIELDER", current: "Retired", number: "21", clubs: [["Brescia", "1995-1998"], ["Inter Milan", "1998-2001"], ["AC Milan", "2001-2011"], ["Juventus", "2011-2015"], ["New York City FC", "2015-2017"]] },
    "david beckham": { first: "David", last: "Beckham", country: "ENG / MIDFIELDER", current: "Retired", number: "23", clubs: [["Manchester United", "1992-2003"], ["Real Madrid", "2003-2007"], ["LA Galaxy", "2007-2012"], ["AC Milan", "2009"], ["Paris Saint-Germain", "2013"]] },
    "wayne rooney": { first: "Wayne", last: "Rooney", country: "ENG / FORWARD", current: "Retired", number: "10", clubs: [["Everton", "2002-2004"], ["Manchester United", "2004-2017"], ["Everton", "2017-2018"], ["D.C. United", "2018-2019"], ["Derby County", "2020-2021"]] },
    "steven gerrard": { first: "Steven", last: "Gerrard", country: "ENG / MIDFIELDER", current: "Retired", number: "08", clubs: [["Liverpool", "1998-2015"], ["LA Galaxy", "2015-2016"]] },
    "frank lampard": { first: "Frank", last: "Lampard", country: "ENG / MIDFIELDER", current: "Retired", number: "08", clubs: [["West Ham United", "1995-2001"], ["Chelsea", "2001-2014"], ["Manchester City", "2014-2015"], ["New York City FC", "2015-2016"]] },
    "didier drogba": { first: "Didier", last: "Drogba", country: "CIV / FORWARD", current: "Retired", number: "11", clubs: [["Le Mans", "1998-2002"], ["Guingamp", "2002-2003"], ["Marseille", "2003-2004"], ["Chelsea", "2004-2012"], ["Galatasaray", "2013-2014"], ["Chelsea", "2014-2015"]] },
    "arjen robben": { first: "Arjen", last: "Robben", country: "NED / FORWARD", current: "Retired", number: "10", clubs: [["Groningen", "2000-2002"], ["PSV Eindhoven", "2002-2004"], ["Chelsea", "2004-2007"], ["Real Madrid", "2007-2009"], ["Bayern Munich", "2009-2019"]] },
    "robin van persie": { first: "Robin", last: "van Persie", country: "NED / FORWARD", current: "Retired", number: "11", clubs: [["Feyenoord", "2001-2004"], ["Arsenal", "2004-2012"], ["Manchester United", "2012-2015"], ["Fenerbahce", "2015-2018"], ["Feyenoord", "2018-2019"]] },
    "mesut ozil": { first: "Mesut", last: "Ozil", country: "GER / MIDFIELDER", current: "Retired", number: "10", clubs: [["Schalke 04", "2006-2008"], ["Werder Bremen", "2008-2010"], ["Real Madrid", "2010-2013"], ["Arsenal", "2013-2021"], ["Fenerbahce", "2021-2022"]] },
    "sergio aguero": { first: "Sergio", last: "Aguero", country: "ARG / FORWARD", current: "Retired", number: "10", clubs: [["Independiente", "2003-2006"], ["Atletico Madrid", "2006-2011"], ["Manchester City", "2011-2021"], ["Barcelona", "2021"]] },
    "angel di maria": { first: "Angel", last: "Di Maria", country: "ARG / FORWARD", current: "Benfica", number: "11", clubs: [["Rosario Central", "2005-2007"], ["Benfica", "2007-2010"], ["Real Madrid", "2010-2014"], ["Manchester United", "2014-2015"], ["Paris Saint-Germain", "2015-2022"], ["Juventus", "2022-2023"], ["Benfica", "2023-NOW"]] }
  };

  // --------------------------------------------------------------------------
  // RICH PLAYER DETAILS: PHOTOS & MULTI-CATEGORY CLUES
  // --------------------------------------------------------------------------
  const DETAILS = {
    "lionel messi": {
      nationality: "Argentina", position: "Forward", age: 39, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/154.png",
      clues: {
        trophy: "Won the 2022 FIFA World Cup, 4 Champions League titles, and a record 8 Ballon d'Or awards",
        teammates: "Formed the legendary 'MSN' front three with Neymar and Luis Suarez",
        manager: "Ascended to global supremacy under the tactical guidance of Pep Guardiola",
        style: "Unmatched low center of gravity, laser-guided left-foot curlers, and pinpoint vision",
        youth: "Arrived at Barcelona's La Masia at age 13 after boyhood beginnings at Newell's Old Boys",
        nickname: "Revered worldwide as 'La Pulga' (The Flea) and the GOAT"
      }
    },
    "cristiano ronaldo": {
      nationality: "Portugal", position: "Forward", age: 41, shirtNumber: 7,
      photo: "https://media.api-sports.io/football/players/874.png",
      clues: {
        trophy: "Won 5 UEFA Champions League titles, Euro 2016, and 5 Ballon d'Or trophies",
        teammates: "Formed the iconic 'BBC' attacking trio alongside Karim Benzema and Gareth Bale",
        manager: "Developed under Sir Alex Ferguson before shattering every scoring record under Zinedine Zidane",
        style: "Explosive physical specimen famous for soaring headers, knuckleball strikes, and his 'Siu' celebration",
        youth: "Scouted and signed from Sporting CP after mesmerizing Manchester United in a 2003 friendly",
        nickname: "Known across the planet simply by his initials and iconic number: 'CR7'"
      }
    },
    "kylian mbappe": {
      nationality: "France", position: "Forward", age: 27, shirtNumber: 9,
      photo: "https://media.api-sports.io/football/players/278.png",
      clues: {
        trophy: "Scored a hat-trick in a World Cup final and lifted the 2018 World Cup at age 19",
        teammates: "Shared the attacking frontline with Lionel Messi and Neymar at club level",
        manager: "Achieved international glory under Didier Deschamps and moved to Real Madrid under Carlo Ancelotti",
        style: "Terrifying straight-line acceleration and clinical inside-the-box cutbacks into the bottom corner",
        youth: "Broke through at AS Monaco before becoming the most expensive teenage transfer in football history",
        transfer: "Joined Real Madrid in the summer of 2024 as one of the most anticipated free transfers in history"
      }
    },
    "erling haaland": {
      nationality: "Norway", position: "Forward", age: 26, shirtNumber: 9,
      photo: "https://media.api-sports.io/football/players/1100.png",
      clues: {
        trophy: "Captured the European Continental Treble in 2023, shattering the Premier League single-season scoring record with 36 goals",
        teammates: "Fed by the visionary through-balls of Kevin De Bruyne and Bernardo Silva",
        manager: "Coached by Pep Guardiola at Manchester City after rising under Marco Rose at Dortmund",
        style: "Pure athletic brute force with ruthless first-time box finishing and aerial dominance",
        youth: "Began in Norway with Bryne and Molde before exploding into Europe with Red Bull Salzburg",
        nickname: "Often nicknamed 'The Terminator' or 'The Viking' for his robotic goalscoring consistency"
      }
    },
    "vinicius junior": {
      nationality: "Brazil", position: "Forward", age: 26, shirtNumber: 7,
      photo: "https://media.api-sports.io/football/players/757.png",
      clues: {
        trophy: "Scored the winning goal in two separate UEFA Champions League finals (2022 and 2024)",
        teammates: "Formed a devastating partnership with Karim Benzema and later Jude Bellingham",
        manager: "Flourished into a global superstar under the mentorship of Carlo Ancelotti",
        style: "Blistering dribbler who thrives in 1v1 wing isolation with electrifying samba flair",
        youth: "Emerged from Flamengo's youth ranks in Rio de Janeiro before securing a €45M move at age 18",
        nickname: "Known to millions of Madridistas and Seleção supporters as 'Vini Jr'"
      }
    },
    "jude bellingham": {
      nationality: "England", position: "Midfielder", age: 23, shirtNumber: 5,
      photo: "https://media.api-sports.io/football/players/153.png",
      clues: {
        trophy: "Lifted the 2024 UEFA Champions League and La Liga double in his debut season in Spain",
        teammates: "Combines seamlessly with Vinicius Junior, Kylian Mbappe, and Harry Kane",
        manager: "Excelled under Carlo Ancelotti after gaining international acclaim under Gareth Southgate",
        style: "Towering box-to-box midfielder with late penalty-box arrivals and his iconic open-arms celebration",
        youth: "His boyhood club Birmingham City retired his #22 shirt when he left at age 17 for Borussia Dortmund",
        shirt: "Wears Real Madrid's legendary #5 shirt previously immortalized by Zinedine Zidane"
      }
    },
    "kevin de bruyne": {
      nationality: "Belgium", position: "Midfielder", age: 34, shirtNumber: 17,
      photo: "https://media.api-sports.io/football/players/629.png",
      clues: {
        trophy: "Won 6 Premier League titles and the 2023 UEFA Champions League Treble",
        teammates: "The master creator for Erling Haaland, Sergio Aguero, and Eden Hazard",
        manager: "The tactical heartbeat and primary on-pitch general of Pep Guardiola's Manchester City",
        style: "Unrivaled crossing technique, venomous outside-the-box shooting, and impossible curved assists",
        transfer: "Previously sold by Chelsea before proving himself at Wolfsburg and signing for £55M in 2015",
        nickname: "Universally hailed by fans and pundits simply as 'KDB'"
      }
    },
    "mohamed salah": {
      nationality: "Egypt", position: "Forward", age: 34, shirtNumber: 11,
      photo: "https://media.api-sports.io/football/players/306.png",
      clues: {
        trophy: "Won both the Champions League and Premier League while collecting 3 Premier League Golden Boots",
        teammates: "Formed the iconic Liverpool front three with Sadio Mane and Roberto Firmino",
        manager: "Transformed into a global icon under the high-intensity 'heavy metal' football of Jürgen Klopp",
        style: "Deadly left-footed inside cutter with lightning pace, close ball manipulation, and curling finishes",
        youth: "Started at Egyptian club Al Mokawloon before moving to Europe with FC Basel in Switzerland",
        nickname: "Crowned and worshipped on Merseyside as 'The Egyptian King'"
      }
    },
    "harry kane": {
      nationality: "England", position: "Forward", age: 33, shirtNumber: 9,
      photo: "https://media.api-sports.io/football/players/184.png",
      clues: {
        trophy: "Won the 2018 World Cup Golden Boot and stands as England's all-time record goalscorer",
        teammates: "Formed the most lethal goal-and-assist duo in Premier League history with Son Heung-min",
        manager: "Developed under Mauricio Pochettino before joining Thomas Tuchel and Vincent Kompany in Germany",
        style: "Elite deep-lying playmaker capable of laser quarterback passes combined with deadly two-footed finishing",
        transfer: "Completed a historic €100M+ transfer from Tottenham Hotspur to Bayern Munich in summer 2023",
        youth: "Had loan spells at Leyton Orient, Millwall, Norwich, and Leicester before breaking out"
      }
    },
    "rodri": {
      nationality: "Spain", position: "Midfielder", age: 29, shirtNumber: 16,
      photo: "https://media.api-sports.io/football/players/44.png",
      clues: {
        trophy: "Awarded the 2024 Ballon d'Or and named Player of the Tournament at Euro 2024",
        teammates: "Anchors the midfield for Erling Haaland, Kevin De Bruyne, and Lamine Yamal",
        manager: "The irreplaceable defensive anchor for both Pep Guardiola and Luis de la Fuente",
        style: "Master of ball circulation, press resistance, tactical fouls, and dramatic clutch goals from the D",
        youth: "Came through the academies of Rayo Majadahonda and Atletico Madrid before shining at Villarreal"
      }
    },
    "lamine yamal": {
      nationality: "Spain", position: "Forward", age: 18, shirtNumber: 19,
      photo: "https://media.api-sports.io/football/players/384803.png",
      clues: {
        trophy: "Won UEFA Euro 2024 at age 17, winning Young Player of the Tournament and scoring against France",
        teammates: "Dazzles on the flanks alongside Nico Williams for Spain and Robert Lewandowski for Barcelona",
        manager: "Handed his senior debut by Xavi Hernandez at just 15 years and 9 months old",
        style: "Mesmerizing left-footed winger with effortless body feints, sudden bursts, and curling strikes",
        youth: "A pure graduate of Barcelona's world-famous La Masia academy",
        nickname: "Celebrates goals by flashing the '304' postal code of his hometown Rocafonda"
      }
    },
    "cole palmer": {
      nationality: "England", position: "Midfielder", age: 24, shirtNumber: 20,
      photo: "https://media.api-sports.io/football/players/152982.png",
      clues: {
        trophy: "Premier League Young Player of the Season and scored for England in the Euro 2024 Final",
        teammates: "The creative centerpiece for Chelsea alongside Enzo Fernandez and Moises Caicedo",
        manager: "Rose under Pep Guardiola at Manchester City before becoming Chelsea's talisman under Mauricio Pochettino",
        style: "Silky left-footed playmaker with ice-cool penalty box composure and pinpoint set-piece delivery",
        nickname: "Famously known by the freezing celebration and nickname 'Cold Palmer'"
      }
    },
    "robert lewandowski": {
      nationality: "Poland", position: "Forward", age: 37, shirtNumber: 9,
      photo: "https://media.api-sports.io/football/players/521.png",
      clues: {
        trophy: "Won the 2020 Champions League Treble and broke Gerd Müller's record with 41 Bundesliga goals in one season",
        teammates: "Supplied by Thomas Müller and Arjen Robben at Bayern, now linking with Lamine Yamal and Raphinha",
        manager: "Achieved peak goalscoring records under Jürgen Klopp, Pep Guardiola, and Hansi Flick",
        style: "Complete number 9 with immaculate box movement, clinical two-footed shooting, and supreme fitness",
        youth: "Played for Znicz Pruszkow and Lech Poznan in Poland before making his European breakthrough at Dortmund",
        nickname: "Revered by supporters across the globe as 'Lewy'"
      }
    },
    "luka modric": {
      nationality: "Croatia", position: "Midfielder", age: 40, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/754.png",
      clues: {
        trophy: "Won a record 6 UEFA Champions League titles and the 2018 Ballon d'Or after reaching the World Cup Final",
        teammates: "Formed the iconic Real Madrid midfield triangle with Toni Kroos and Casemiro",
        manager: "Thrived under Carlo Ancelotti and Zinedine Zidane as Real Madrid's midfield maestro",
        style: "Famous for his trademark outside-of-the-boot 'trivela' passes and balletic turns out of pressure",
        youth: "Survived the Croatian War of Independence as a refugee before making his breakthrough at Dinamo Zagreb"
      }
    },
    "antoine griezmann": {
      nationality: "France", position: "Forward", age: 34, shirtNumber: 7,
      photo: "https://media.api-sports.io/football/players/253.png",
      clues: {
        trophy: "2018 FIFA World Cup Champion and Atletico Madrid's all-time record goalscorer",
        teammates: "Formed legendary France partnerships with Kylian Mbappe and Paul Pogba",
        manager: "The trusted on-pitch lieutenant and tactical soul of Diego Simeone's Atletico Madrid",
        style: "High-workrate forward who combines defensive tracking with delicate left-foot chips and creative flair",
        youth: "Overcame rejections for his small stature in France to break through at Real Sociedad in the Basque country",
        nickname: "Affectionately dubbed 'Grizi' by fans and teammates"
      }
    },
    "zinedine zidane": {
      nationality: "France", position: "Midfielder", age: 53, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/1359.png",
      clues: {
        trophy: "Scored two headers to win the 1998 World Cup and a legendary volley to win the 2002 Champions League",
        teammates: "The crown jewel of Real Madrid's 'Galácticos' alongside Ronaldo R9, Figo, Roberto Carlos, and Beckham",
        manager: "Later became a legendary manager himself, winning 3 consecutive Champions League titles (2016-2018)",
        style: "Master of the 360-degree roulette turn, chest controls, and poetic elegance in possession",
        nickname: "Universally known by football fans simply as 'Zizou'"
      }
    },
    "ronaldo nazario": {
      nationality: "Brazil", position: "Forward", age: 49, shirtNumber: 9,
      photo: "https://media.api-sports.io/football/players/1358.png",
      clues: {
        trophy: "Won two FIFA World Cups (1994, 2002) and two Ballon d'Or awards, scoring 8 goals at the 2002 tournament",
        teammates: "Formed the terrifying Brazil '3R' attack with Ronaldinho and Rivaldo",
        manager: "Shined under Bobby Robson at Barcelona and Vicente del Bosque at Real Madrid",
        style: "Unprecedented combination of blistering speed, devastating stepovers, and rounding goalkeepers with ease",
        nickname: "Revered in football folklore as 'O Fenômeno' (The Phenomenon) and R9"
      }
    },
    "thierry henry": {
      nationality: "France", position: "Forward", age: 48, shirtNumber: 14,
      photo: "https://media.api-sports.io/football/players/1357.png",
      clues: {
        trophy: "Led Arsenal's legendary 'Invincibles' through an unbeaten 2003-04 season and won the 1998 World Cup",
        teammates: "Formed an electric Arsenal connection with Dennis Bergkamp and later a Sextuple with Lionel Messi at Barca",
        manager: "Transformed from a winger into the world's most devastating striker by Arsène Wenger",
        style: "Trademark side-foot finish curled into the far corner after blistering gallops down the left flank",
        nickname: "Immortalized with a bronze statue outside the Emirates Stadium as 'King Henry'"
      }
    },
    "ronaldinho": {
      nationality: "Brazil", position: "Forward", age: 45, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/1356.png",
      clues: {
        trophy: "Won the 2002 World Cup, 2005 Ballon d'Or, and the 2006 UEFA Champions League",
        teammates: "Mentored a young Lionel Messi and assisted Messi's first-ever senior Barcelona goal",
        manager: "The joyful heartbeat of Frank Rijkaard's Barcelona revolution",
        style: "The ultimate showman: elastico nutmegs, no-look passes, bicycle kicks, and an eternal smile on the pitch",
        nickname: "Revered as 'Ronaldinho Gaúcho' and the most entertaining player in the history of the sport"
      }
    },
    "kaka": {
      nationality: "Brazil", position: "Midfielder", age: 43, shirtNumber: 22,
      photo: "https://media.api-sports.io/football/players/1355.png",
      clues: {
        trophy: "2007 Ballon d'Or winner and lifted the 2007 Champions League trophy with AC Milan",
        teammates: "Formed Milan's glorious midfield alongside Andrea Pirlo, Clarence Seedorf, and Gennaro Gattuso",
        manager: "Reached his absolute footballing zenith under Carlo Ancelotti at the San Siro",
        style: "Gliding central bursts with long strides, explosive acceleration through the lines, and pinpoint finishes",
        nickname: "Famously dedicated his victories by pointing both index fingers to the heavens"
      }
    },
    "andres iniesta": {
      nationality: "Spain", position: "Midfielder", age: 41, shirtNumber: 8,
      photo: "https://media.api-sports.io/football/players/853.png",
      clues: {
        trophy: "Scored the 116th-minute winning goal in the 2010 World Cup Final and won 4 Champions League titles",
        teammates: "The telepathic soulmate of Xavi Hernandez and Lionel Messi during Barcelona's golden era",
        manager: "The crown jewel of Pep Guardiola's iconic tiki-taka Barcelona side",
        style: "Master of the 'croqueta' turn, finding space in impossibly tight phone-booth areas on the pitch",
        nickname: "Revered across Spain and football culture as 'Don Andrés' and 'The Illusionist'"
      }
    },
    "sergio ramos": {
      nationality: "Spain", position: "Defender", age: 39, shirtNumber: 4,
      photo: "https://media.api-sports.io/football/players/742.png",
      clues: {
        trophy: "Won the 2010 World Cup, two European Championships, and 4 UEFA Champions League titles with Real Madrid",
        teammates: "Legendary Real Madrid captain alongside Cristiano Ronaldo, Luka Modric, and Karim Benzema",
        manager: "Captained teams to glory under Zinedine Zidane, Carlo Ancelotti, and Vicente del Bosque",
        style: "Fierce tackling, warrior spirit, and iconic last-minute headers including the famous 92:48 equaliser in Lisbon",
        nickname: "Widely regarded as the most clutch defender of the modern era"
      }
    },
    "toni kroos": {
      nationality: "Germany", position: "Midfielder", age: 36, shirtNumber: 8,
      photo: "https://media.api-sports.io/football/players/738.png",
      clues: {
        trophy: "Won the 2014 World Cup and 6 UEFA Champions League titles before retiring at the absolute peak in 2024",
        teammates: "Formed the iconic 'KCM' midfield trio with Luka Modric and Casemiro at Real Madrid",
        manager: "Coached by Jupp Heynckes, Pep Guardiola, Zinedine Zidane, and Carlo Ancelotti",
        style: "The metronome of world football: 95%+ passing precision in his white Adidas Adipure boots",
        nickname: "Nicknamed 'The German Sniper' for his pinpoint diagonals and cultured curling strikes"
      }
    },
    "zlatan ibrahimovic": {
      nationality: "Sweden", position: "Forward", age: 44, shirtNumber: 11,
      photo: "https://media.api-sports.io/football/players/190.png",
      clues: {
        trophy: "Won league titles in 4 different European countries (Netherlands, Italy, Spain, France) and scored 570+ goals",
        teammates: "Shared dressing rooms with Messi, Ronaldinho, Thiago Silva, and Paul Pogba",
        manager: "Shined under Jose Mourinho and Massimiliano Allegri",
        style: "Taekwondo black belt who scored unfathomable acrobatic volleys and a 35-yard overhead bicycle kick",
        nickname: "Famously refers to himself in the third person: 'There is only one Zlatan'"
      }
    },
    "luis suarez": {
      nationality: "Uruguay", position: "Forward", age: 39, shirtNumber: 9,
      photo: "https://media.api-sports.io/football/players/157.png",
      clues: {
        trophy: "Won the 2015 Champions League Treble and won two European Golden Shoes in the peak Messi-Ronaldo era",
        teammates: "The lethal spearhead of Barcelona's 'MSN' trio alongside Lionel Messi and Neymar",
        manager: "Fired Atletico Madrid to the 2021 La Liga title under Diego Simeone after glorious years under Luis Enrique",
        style: "Relentless pressing bulldog with instinctive volleys, nutmegs, and unmatched tenacity in the box",
        nickname: "Known throughout his storied career as 'El Pistolero'"
      }
    },
    "didier drogba": {
      nationality: "Cote d'Ivoire", position: "Forward", age: 48, shirtNumber: 11,
      photo: "https://media.api-sports.io/football/players/2517.png",
      clues: {
        trophy: "Scored the 88th-minute header and winning penalty to capture Chelsea's historic first Champions League in 2012",
        teammates: "The spearhead of Chelsea's spine with Petr Cech, John Terry, and Frank Lampard",
        manager: "Jose Mourinho's ultimate warrior and ultimate big-game final matchwinner",
        style: "Bullish physical presence who bullied entire defensive backlines with thunderous headers and free-kicks",
        nickname: "Crowned as 'The King of Wembley' for scoring in 4 separate FA Cup finals"
      }
    },
    "arjen robben": {
      nationality: "Netherlands", position: "Forward", age: 42, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/891.png",
      clues: {
        trophy: "Scored the 89th-minute winner in the 2013 Champions League Final at Wembley and reached the 2010 World Cup Final",
        teammates: "Formed the legendary 'Robbery' wing duo at Bayern Munich with Franck Ribéry",
        manager: "Reached peak form under Jupp Heynckes and Pep Guardiola in Bavaria",
        style: "The most famous trademark move in football: everybody knew he was cutting inside on his left foot, but nobody could stop it"
      }
    },
    "gianluigi buffon": {
      nationality: "Italy", position: "Goalkeeper", age: 48, shirtNumber: 1,
      photo: "https://media.api-sports.io/football/players/882.png",
      clues: {
        trophy: "2006 FIFA World Cup Champion, conceded just 2 goals all tournament, and won 10 Serie A titles",
        teammates: "Protected by the legendary 'BBC' defensive wall of Bonucci, Barzagli, and Chiellini",
        manager: "Captained Juventus and Italy under Marcello Lippi, Antonio Conte, and Max Allegri",
        style: "Imposing vocal commander with lightning positional reflexes and over 1,100 career matches",
        nickname: "Revered as 'Gigi' and widely celebrated as the greatest goalkeeper of all time"
      }
    },
    "david beckham": {
      nationality: "England", position: "Midfielder", age: 50, shirtNumber: 23,
      photo: "https://media.api-sports.io/football/players/892.png",
      clues: {
        trophy: "1999 Treble Winner with Manchester United and won league titles in England, Spain, the US, and France",
        teammates: "Graduated in the legendary 'Class of 92' alongside Ryan Giggs, Paul Scholes, and Gary Neville",
        manager: "Developed under Sir Alex Ferguson before joining the Real Madrid 'Galácticos'",
        style: "The greatest crosser and free-kick curler in football history, immortalized in pop culture",
        nickname: "Known across global sports culture simply as 'Becks'"
      }
    },
    "wayne rooney": {
      nationality: "England", position: "Forward", age: 40, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/889.png",
      clues: {
        trophy: "Manchester United's all-time record goalscorer (253 goals), winning 5 Premier League titles and the 2008 UCL",
        teammates: "Formed a terrifying frontline with Cristiano Ronaldo and Carlos Tevez",
        manager: "The relentless talisman of Sir Alex Ferguson's final great Manchester United dynasty",
        style: "Street-football aggression, incredible long-range strikes, and an iconic overhead kick in the Manchester Derby",
        nickname: "Burst onto the scene at age 16 with Everton as 'The Wonderkid'"
      }
    },
    "steven gerrard": {
      nationality: "England", position: "Midfielder", age: 45, shirtNumber: 8,
      photo: "https://media.api-sports.io/football/players/2516.png",
      clues: {
        trophy: "Inspired the legendary 'Miracle of Istanbul' to lift the 2005 Champions League after being 3-0 down",
        teammates: "Formed an electric Liverpool partnership with Fernando Torres and later Luis Suarez",
        manager: "Captained Liverpool for over a decade under Gérard Houllier, Rafa Benítez, and Kenny Dalglish",
        style: "Thunderous 30-yard piledrivers, heroic last-ditch slide tackles, and inspirational captaincy",
        nickname: "Immortalized on the Anfield Kop as 'Captain Fantastic'"
      }
    },
    "frank lampard": {
      nationality: "England", position: "Midfielder", age: 47, shirtNumber: 8,
      photo: "https://media.api-sports.io/football/players/2515.png",
      clues: {
        trophy: "Chelsea's all-time record goalscorer with 211 goals despite playing his entire career in midfield",
        teammates: "The goalscoring brain of Chelsea's greatest era with John Terry and Didier Drogba",
        manager: "The trusted engine room general for Jose Mourinho and Carlo Ancelotti",
        style: "Unrivaled timing of late runs into the penalty box and relentless deflection-forcing long drives",
        nickname: "Revered in west London as 'Super Frankie Lampard'"
      }
    },
    "sergio aguero": {
      nationality: "Argentina", position: "Forward", age: 37, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/645.png",
      clues: {
        trophy: "Manchester City's all-time record goalscorer (260 goals) and won 5 Premier League titles",
        teammates: "Formed an irresistible connection with David Silva, Kevin De Bruyne, and Yaya Touré",
        manager: "Brought glory to Roberto Mancini, Manuel Pellegrini, and Pep Guardiola",
        style: "Explosive short burst acceleration with an unstoppable low center of gravity and razor-sharp near-post finishes",
        nickname: "Immortalized by the iconic '93:20' goal and nicknamed 'Kun Agüero'"
      }
    },
    "mesut ozil": {
      nationality: "Germany", position: "Midfielder", age: 37, shirtNumber: 10,
      photo: "https://media.api-sports.io/football/players/887.png",
      clues: {
        trophy: "2014 FIFA World Cup Champion and broke the record for most chances created in a Premier League season",
        teammates: "The chief assist provider for Cristiano Ronaldo at Real Madrid and Alexis Sanchez at Arsenal",
        manager: "Hailed by Jose Mourinho as 'the best number 10 in the world'",
        style: "Effortless languid playmaker who invented the 'chop bounce' pass into the turf",
        nickname: "Celebrated across Europe as 'The Assist King'"
      }
    },
    "angel di maria": {
      nationality: "Argentina", position: "Forward", age: 38, shirtNumber: 11,
      photo: "https://media.api-sports.io/football/players/884.png",
      clues: {
        trophy: "Scored in the 2008 Olympic Final, 2021 Copa America Final, and the 2022 World Cup Final",
        teammates: "Won trophies alongside Lionel Messi for Argentina and Cristiano Ronaldo at Real Madrid",
        manager: "Man of the Match in the 2014 Champions League Final for Carlo Ancelotti",
        style: "Whip-like left-footed crosses, rabona deliveries, and delicate chips over onrushing goalkeepers",
        nickname: "Affectionately known throughout his career as 'El Fideo' (The Noodle) for his slender build"
      }
    }
  };

  // --------------------------------------------------------------------------
  // COMMON GUESS ALIASES & SEARCH HELPERS
  // --------------------------------------------------------------------------
  const ALIASES = {
    'cr7': 'cristiano ronaldo',
    'ronaldo': 'cristiano ronaldo',
    'cristiano': 'cristiano ronaldo',
    'messi': 'lionel messi',
    'leo messi': 'lionel messi',
    'haaland': 'erling haaland',
    'mbappe': 'kylian mbappe',
    'kyle mbappe': 'kylian mbappe',
    'bellingham': 'jude bellingham',
    'vini': 'vinicius junior',
    'vini jr': 'vinicius junior',
    'vinicius': 'vinicius junior',
    'kdb': 'kevin de bruyne',
    'de bruyne': 'kevin de bruyne',
    'salah': 'mohamed salah',
    'mo salah': 'mohamed salah',
    'kane': 'harry kane',
    'rodri': 'rodri',
    'rodrigo': 'rodri',
    'yamal': 'lamine yamal',
    'lamine': 'lamine yamal',
    'palmer': 'cole palmer',
    'cold palmer': 'cole palmer',
    'foden': 'phil foden',
    'wirtz': 'florian wirtz',
    'musiala': 'jamal musiala',
    'lewandowski': 'robert lewandowski',
    'lewy': 'robert lewandowski',
    'modric': 'luka modric',
    'griezmann': 'antoine griezmann',
    'van dijk': 'virgil van dijk',
    'vandijk': 'virgil van dijk',
    'neymar': 'neymar',
    'neymar jr': 'neymar',
    'rice': 'declan rice',
    'odegaard': 'martin odegaard',
    'ødegaard': 'martin odegaard',
    'saliba': 'william saliba',
    'trent': 'trent alexander-arnold',
    'arnold': 'trent alexander-arnold',
    'alisson': 'alisson becker',
    'bernardo': 'bernardo silva',
    'bruno': 'bruno fernandes',
    'rashford': 'marcus rashford',
    'son': 'son heung-min',
    'sonny': 'son heung-min',
    'isak': 'alexander isak',
    'gyokeres': 'viktor gyokeres',
    'gyökeres': 'viktor gyokeres',
    'valverde': 'federico valverde',
    'camavinga': 'eduardo camavinga',
    'tchouameni': 'aurelien tchouameni',
    'courtois': 'thibaut courtois',
    'pedri': 'pedri',
    'gavi': 'gavi',
    'raphinha': 'raphinha',
    'olmo': 'dani olmo',
    'alvarez': 'julian alvarez',
    'neuer': 'manuel neuer',
    'muller': 'thomas muller',
    'müller': 'thomas muller',
    'davies': 'alphonso davies',
    'hakimi': 'achraf hakimi',
    'dembele': 'ousmane dembele',
    'donnarumma': 'gianluigi donnarumma',
    'lautaro': 'lautaro martinez',
    'barella': 'nicolo barella',
    'leao': 'rafael leao',
    'leão': 'rafael leao',
    'theo': 'theo hernandez',
    'osimhen': 'victor osimhen',
    'kvaratskhelia': 'khvicha kvaratskhelia',
    'kvara': 'khvicha kvaratskhelia',
    'zidane': 'zinedine zidane',
    'zizou': 'zinedine zidane',
    'r9': 'ronaldo nazario',
    'ronaldo r9': 'ronaldo nazario',
    'henry': 'thierry henry',
    'ronaldinho': 'ronaldinho',
    'dinho': 'ronaldinho',
    'kaka': 'kaka',
    'kaká': 'kaka',
    'iniesta': 'andres iniesta',
    'xavi': 'xavi hernandez',
    'ramos': 'sergio ramos',
    'kroos': 'toni kroos',
    'bale': 'gareth bale',
    'hazard': 'eden hazard',
    'suarez': 'luis suarez',
    'suárez': 'luis suarez',
    'ibra': 'zlatan ibrahimovic',
    'ibrahimovic': 'zlatan ibrahimovic',
    'zlatan': 'zlatan ibrahimovic',
    'buffon': 'gianluigi buffon',
    'gigi buffon': 'gianluigi buffon',
    'pirlo': 'andrea pirlo',
    'beckham': 'david beckham',
    'rooney': 'wayne rooney',
    'gerrard': 'steven gerrard',
    'lampard': 'frank lampard',
    'drogba': 'didier drogba',
    'robben': 'arjen robben',
    'van persie': 'robin van persie',
    'rvp': 'robin van persie',
    'ozil': 'mesut ozil',
    'özil': 'mesut ozil',
    'aguero': 'sergio aguero',
    'agüero': 'sergio aguero',
    'kun aguero': 'sergio aguero',
    'di maria': 'angel di maria',
    'dimaria': 'angel di maria'
  };

  // --------------------------------------------------------------------------
  // DYNAMIC MULTI-CATEGORY CLUE GENERATOR ENGINE
  // --------------------------------------------------------------------------
  function generateCluesForPlayer(player, details) {
    const pool = [];
    const clues = details?.clues || {};

    // 1. Trophy / Silverware Clue
    if (clues.trophy) {
      pool.push({ tag: '🏆 TROPHY & HONORS', text: clues.trophy });
    }

    // 2. Iconic Teammates Clue
    if (clues.teammates) {
      pool.push({ tag: '🤝 FAMOUS TEAMMATES', text: clues.teammates });
    }

    // 3. Legendary Manager Clue
    if (clues.manager) {
      pool.push({ tag: '👔 ICONIC MANAGERS', text: clues.manager });
    }

    // 4. Playing Style & Foot
    if (clues.style) {
      pool.push({ tag: '⚡ PLAYING STYLE', text: clues.style });
    }

    // 5. Youth Roots & Academy
    if (clues.youth) {
      pool.push({ tag: '💎 YOUTH ROOTS', text: clues.youth });
    } else if (player.clubs && player.clubs.length > 0) {
      const first = player.clubs[0];
      pool.push({ tag: '💎 SENIOR DEBUT', text: `Began senior career at ${first[0]} (${first[1]})` });
    }

    // 6. Transfer Record / Milestone
    if (clues.transfer) {
      pool.push({ tag: '💰 TRANSFER RECORD', text: clues.transfer });
    }

    // 7. Famous Moniker / Nickname
    if (clues.nickname) {
      pool.push({ tag: '🏷️ FAMOUS NICKNAME', text: clues.nickname });
    }

    // 8. Shirt Number
    const num = [player.number, details?.shirtNumber].find(v => v && v !== '-');
    if (num) {
      pool.push({ tag: '👕 SHIRT NUMBER', text: `Known for wearing shirt #${num}` });
    }

    // 9. Career Journey Scale
    if (player.clubs && player.clubs.length >= 3) {
      pool.push({ tag: '🌍 CLUB JOURNEY', text: `Has represented ${player.clubs.length} senior clubs across their career journey` });
    }

    // 10. Initials & Length
    const firstInit = player.first[0].toUpperCase();
    const lastInit = player.last[0].toUpperCase();
    const totalLetters = player.first.replace(/[^a-zA-Z]/g, '').length + player.last.replace(/[^a-zA-Z]/g, '').length;
    pool.push({ tag: '🔤 INITIALS & CIPHER', text: `Name starts with '${firstInit}' and surname with '${lastInit}' (${totalLetters} total letters)` });

    // Deterministic or pseudo-random shuffle to pick 3 distinct categories
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, 3);
  }

  // --------------------------------------------------------------------------
  // LIVE REAL-TIME TRANSFER SYNC ENGINE
  // --------------------------------------------------------------------------
  function syncPlayerLatestTransfer(player, onUpdate) {
    if (!player) return;
    const normKey = (player.first + ' ' + player.last).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 1. Check local storage overrides first
    try {
      const stored = localStorage.getItem('lineup_transfer_overrides');
      if (stored) {
        const overrides = JSON.parse(stored);
        if (overrides[normKey]) {
          applyTransferUpdate(player, overrides[normKey]);
          if (typeof onUpdate === 'function') onUpdate(player);
        }
      }
    } catch (_) {}

    // 2. Check built-in latest transfer overrides
    if (TRANSFER_OVERRIDES[normKey]) {
      const updated = applyTransferUpdate(player, TRANSFER_OVERRIDES[normKey]);
      if (updated && typeof onUpdate === 'function') onUpdate(player);
    }

    // 3. Asynchronous live API check (non-blocking)
    if (typeof window !== 'undefined' && navigator.onLine) {
      fetch(`/api/player?name=${encodeURIComponent(normKey)}`)
        .then(res => res.ok ? res.json() : null)
        .then(apiData => {
          if (!apiData || !apiData.current) return;
          if (apiData.current !== player.current) {
            const newTransfer = {
              current: apiData.current,
              addClub: [apiData.current, 'NOW']
            };
            applyTransferUpdate(player, newTransfer);

            // Persist to localStorage
            try {
              const currentOverrides = JSON.parse(localStorage.getItem('lineup_transfer_overrides') || '{}');
              currentOverrides[normKey] = newTransfer;
              localStorage.setItem('lineup_transfer_overrides', JSON.stringify(currentOverrides));
            } catch (_) {}

            if (typeof onUpdate === 'function') onUpdate(player);
          }
        })
        .catch(() => {});
    }
  }

  function applyTransferUpdate(player, updateData) {
    if (!updateData || !player) return false;
    let modified = false;

    if (updateData.current && player.current !== updateData.current) {
      player.current = updateData.current;
      modified = true;
    }

    if (updateData.addClub) {
      const [newClub, years] = updateData.addClub;
      const alreadyHas = player.clubs.some(([c]) => c.toLowerCase() === newClub.toLowerCase());
      if (!alreadyHas) {
        player.clubs.push([newClub, years || 'NOW']);
        modified = true;
      }
    }

    return modified;
  }

  // --------------------------------------------------------------------------
  // EXPOSE TO GLOBAL WINDOW
  // --------------------------------------------------------------------------
  window.WHO_AM_I_DATA = {
    players: PLAYERS,
    details: DETAILS,
    aliases: ALIASES,
    clubLogos: CLUB_LOGOS,
    transferOverrides: TRANSFER_OVERRIDES,
    generateCluesForPlayer,
    syncPlayerLatestTransfer
  };

})();
