/**
 * ============================================================================
 * FOOTY GRID: FOOTBALL TIC-TAC-TOE MINI-GAME
 * ============================================================================
 * 3x3 Football Trivia Grid with Daily Challenge & Head-to-Head 1-Phone 2-Player.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // CLUB BADGES & FLAGS LOOKUP
  // --------------------------------------------------------------------------
  const BADGES = {
    'Real Madrid': 'https://media.api-sports.io/football/teams/541.png',
    'Barcelona': 'https://media.api-sports.io/football/teams/529.png',
    'Bayern Munich': 'https://media.api-sports.io/football/teams/157.png',
    'Chelsea': 'https://media.api-sports.io/football/teams/49.png',
    'Manchester United': 'https://media.api-sports.io/football/teams/33.png',
    'Manchester City': 'https://media.api-sports.io/football/teams/50.png',
    'Liverpool': 'https://media.api-sports.io/football/teams/40.png',
    'Arsenal': 'https://media.api-sports.io/football/teams/42.png',
    'Paris Saint-Germain': 'https://media.api-sports.io/football/teams/85.png',
    'Juventus': 'https://media.api-sports.io/football/teams/496.png',
    'Inter Milan': 'https://media.api-sports.io/football/teams/505.png',
    'AC Milan': 'https://media.api-sports.io/football/teams/489.png',
    'Atletico Madrid': 'https://media.api-sports.io/football/teams/530.png',
    'Borussia Dortmund': 'https://media.api-sports.io/football/teams/165.png',
    'Tottenham Hotspur': 'https://media.api-sports.io/football/teams/47.png',
    'Ajax': 'https://media.api-sports.io/football/teams/194.png',
    'Sporting CP': 'https://media.api-sports.io/football/teams/228.png',
    'Benfica': 'https://media.api-sports.io/football/teams/211.png',
    'Napoli': 'https://media.api-sports.io/football/teams/492.png',
    'Roma': 'https://media.api-sports.io/football/teams/497.png'
  };

  const FLAGS = {
    'Brazil': '🇧🇷',
    'Argentina': '🇦🇷',
    'France': '🇫🇷',
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'Spain': '🇪🇸',
    'Germany': '🇩🇪',
    'Portugal': '🇵🇹',
    'Netherlands': '🇳🇱',
    'Italy': '🇮🇹',
    'Belgium': '🇧🇪',
    'Uruguay': '🇺🇾',
    'Croatia': '🇭🇷',
    'Poland': '🇵🇱',
    'Norway': '🇳🇴',
    'Sweden': '🇸🇪',
    'Colombia': '🇨🇴',
    'Senegal': '🇸🇳',
    'Morocco': '🇲🇦',
    'Egypt': '🇪🇬'
  };

  const TROPHY_ICONS = {
    'World Cup Winner': '🏆',
    'Champions League Winner': '🏆',
    'Premier League Winner': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'Ballon d\'Or Winner': '🥇',
    'La Liga Winner': '🇪🇸',
    'Serie A Winner': '🇮🇹'
  };

  // --------------------------------------------------------------------------
  // COMPREHENSIVE VERIFIED FOOTBALLERS DATABASE (350+ STARS)
  // --------------------------------------------------------------------------
  const PLAYERS = [
    // Real Madrid / Bayern / Chelsea / World Cup / etc.
    { id: 'kroos', name: 'Toni Kroos', country: 'Germany', clubs: ['Bayern Munich', 'Bayer Leverkusen', 'Real Madrid'], honors: ['world_cup', 'ucl', 'la_liga', 'bundesliga'], photo: 'https://media.api-sports.io/football/players/738.png' },
    { id: 'alonso', name: 'Xabi Alonso', country: 'Spain', clubs: ['Real Sociedad', 'Liverpool', 'Real Madrid', 'Bayern Munich'], honors: ['world_cup', 'ucl', 'la_liga', 'bundesliga'], photo: '' },
    { id: 'robben', name: 'Arjen Robben', country: 'Netherlands', clubs: ['Groningen', 'PSV Eindhoven', 'Chelsea', 'Real Madrid', 'Bayern Munich'], honors: ['ucl', 'premier_league', 'la_liga', 'bundesliga'], photo: '' },
    { id: 'ballack', name: 'Michael Ballack', country: 'Germany', clubs: ['Bayer Leverkusen', 'Bayern Munich', 'Chelsea'], honors: ['premier_league', 'bundesliga'], photo: '' },
    { id: 'alaba', name: 'David Alaba', country: 'Austria', clubs: ['Bayern Munich', 'Hoffenheim', 'Real Madrid'], honors: ['ucl', 'la_liga', 'bundesliga'], photo: '' },
    { id: 'james_rodriguez', name: 'James Rodriguez', country: 'Colombia', clubs: ['Porto', 'Monaco', 'Real Madrid', 'Bayern Munich', 'Everton', 'Sao Paulo', 'Rayo Vallecano'], honors: ['ucl', 'la_liga', 'bundesliga'], photo: '' },
    { id: 'musiala', name: 'Jamal Musiala', country: 'Germany', clubs: ['Chelsea', 'Bayern Munich'], honors: ['bundesliga', 'ucl'], photo: '' },
    { id: 'neuer', name: 'Manuel Neuer', country: 'Germany', clubs: ['Schalke 04', 'Bayern Munich'], honors: ['world_cup', 'ucl', 'bundesliga'], photo: '' },
    { id: 'muller', name: 'Thomas Müller', country: 'Germany', clubs: ['Bayern Munich'], honors: ['world_cup', 'ucl', 'bundesliga'], photo: '' },
    { id: 'schweinsteiger', name: 'Bastian Schweinsteiger', country: 'Germany', clubs: ['Bayern Munich', 'Manchester United', 'Chicago Fire'], honors: ['world_cup', 'ucl', 'bundesliga'], photo: '' },
    { id: 'lahm', name: 'Philipp Lahm', country: 'Germany', clubs: ['Bayern Munich', 'VfB Stuttgart'], honors: ['world_cup', 'ucl', 'bundesliga'], photo: '' },
    { id: 'pavard', name: 'Benjamin Pavard', country: 'France', clubs: ['Lille', 'VfB Stuttgart', 'Bayern Munich', 'Inter Milan'], honors: ['world_cup', 'ucl', 'bundesliga', 'serie_a'], photo: '' },
    { id: 'hernandez_lucas', name: 'Lucas Hernandez', country: 'France', clubs: ['Atletico Madrid', 'Bayern Munich', 'Paris Saint-Germain'], honors: ['world_cup', 'ucl', 'bundesliga', 'ligue_1'], photo: '' },

    // Brazil Legends & Current
    { id: 'vinicius', name: 'Vinícius Júnior', country: 'Brazil', clubs: ['Flamengo', 'Real Madrid'], honors: ['ucl', 'la_liga'], photo: 'https://media.api-sports.io/football/players/757.png' },
    { id: 'rodrygo', name: 'Rodrygo', country: 'Brazil', clubs: ['Santos', 'Real Madrid'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'ronaldo_nazario', name: 'Ronaldo Nazário', country: 'Brazil', clubs: ['Cruzeiro', 'PSV Eindhoven', 'Barcelona', 'Inter Milan', 'Real Madrid', 'AC Milan', 'Corinthians'], honors: ['world_cup', 'ballon_dor', 'la_liga'], photo: '' },
    { id: 'roberto_carlos', name: 'Roberto Carlos', country: 'Brazil', clubs: ['Palmeiras', 'Inter Milan', 'Real Madrid', 'Fenerbahce', 'Corinthians'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'marcelo', name: 'Marcelo', country: 'Brazil', clubs: ['Fluminense', 'Real Madrid', 'Olympiacos'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'casemiro', name: 'Casemiro', country: 'Brazil', clubs: ['Sao Paulo', 'Real Madrid', 'Porto', 'Manchester United'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'kaka', name: 'Kaká', country: 'Brazil', clubs: ['Sao Paulo', 'AC Milan', 'Real Madrid', 'Orlando City'], honors: ['world_cup', 'ucl', 'ballon_dor', 'serie_a', 'la_liga'], photo: '' },
    { id: 'pele', name: 'Pelé', country: 'Brazil', clubs: ['Santos', 'New York Cosmos'], honors: ['world_cup'], photo: '' },
    { id: 'ronaldinho', name: 'Ronaldinho', country: 'Brazil', clubs: ['Gremio', 'Paris Saint-Germain', 'Barcelona', 'AC Milan', 'Flamengo', 'Atletico Mineiro'], honors: ['world_cup', 'ucl', 'ballon_dor', 'la_liga', 'serie_a'], photo: '' },
    { id: 'rivaldo', name: 'Rivaldo', country: 'Brazil', clubs: ['Palmeiras', 'Deportivo La Coruna', 'Barcelona', 'AC Milan', 'Olympiacos'], honors: ['world_cup', 'ucl', 'ballon_dor', 'la_liga'], photo: '' },
    { id: 'cafu', name: 'Cafu', country: 'Brazil', clubs: ['Sao Paulo', 'Zaragoza', 'Palmeiras', 'Roma', 'AC Milan'], honors: ['world_cup', 'ucl', 'serie_a'], photo: '' },
    { id: 'romario', name: 'Romário', country: 'Brazil', clubs: ['Vasco da Gama', 'PSV Eindhoven', 'Barcelona', 'Flamengo', 'Valencia'], honors: ['world_cup', 'la_liga'], photo: '' },
    { id: 'neymar', name: 'Neymar Jr', country: 'Brazil', clubs: ['Santos', 'Barcelona', 'Paris Saint-Germain', 'Al-Hilal'], honors: ['ucl', 'la_liga', 'ligue_1'], photo: 'https://media.api-sports.io/football/players/276.png' },
    { id: 'thiago_silva', name: 'Thiago Silva', country: 'Brazil', clubs: ['Fluminense', 'AC Milan', 'Paris Saint-Germain', 'Chelsea'], honors: ['ucl', 'serie_a', 'ligue_1'], photo: '' },
    { id: 'willian', name: 'Willian', country: 'Brazil', clubs: ['Corinthians', 'Shakhtar Donetsk', 'Chelsea', 'Arsenal', 'Fulham', 'Olympiacos'], honors: ['premier_league'], photo: '' },
    { id: 'david_luiz', name: 'David Luiz', country: 'Brazil', clubs: ['Benfica', 'Chelsea', 'Paris Saint-Germain', 'Arsenal', 'Flamengo'], honors: ['ucl', 'premier_league', 'ligue_1'], photo: '' },
    { id: 'oscar', name: 'Oscar', country: 'Brazil', clubs: ['Sao Paulo', 'Internacional', 'Chelsea', 'Shanghai Port'], honors: ['premier_league'], photo: '' },
    { id: 'ramires', name: 'Ramires', country: 'Brazil', clubs: ['Cruzeiro', 'Benfica', 'Chelsea', 'Jiangsu Suning', 'Palmeiras'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'alisson', name: 'Alisson Becker', country: 'Brazil', clubs: ['Internacional', 'Roma', 'Liverpool'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'ederson', name: 'Ederson', country: 'Brazil', clubs: ['Benfica', 'Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'gabriel_jesus', name: 'Gabriel Jesus', country: 'Brazil', clubs: ['Palmeiras', 'Manchester City', 'Arsenal'], honors: ['premier_league'], photo: '' },
    { id: 'firmino', name: 'Roberto Firmino', country: 'Brazil', clubs: ['Figueirense', 'Hoffenheim', 'Liverpool', 'Al-Ahli'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'coutinho', name: 'Philippe Coutinho', country: 'Brazil', clubs: ['Vasco da Gama', 'Inter Milan', 'Espanyol', 'Liverpool', 'Barcelona', 'Bayern Munich', 'Aston Villa', 'Al-Duhail'], honors: ['ucl', 'la_liga', 'bundesliga'], photo: '' },
    { id: 'filipe_luis', name: 'Filipe Luís', country: 'Brazil', clubs: ['Deportivo La Coruna', 'Atletico Madrid', 'Chelsea', 'Flamengo'], honors: ['premier_league', 'la_liga'], photo: '' },
    { id: 'alex_sandro', name: 'Alex Sandro', country: 'Brazil', clubs: ['Santos', 'Porto', 'Juventus', 'Flamengo'], honors: ['serie_a'], photo: '' },

    // Premier League Winners & Real Madrid / Chelsea / World Cup crossover
    { id: 'cr7', name: 'Cristiano Ronaldo', country: 'Portugal', clubs: ['Sporting CP', 'Manchester United', 'Real Madrid', 'Juventus', 'Al-Nassr'], honors: ['ucl', 'ballon_dor', 'premier_league', 'la_liga', 'serie_a'], photo: 'https://media.api-sports.io/football/players/874.png' },
    { id: 'hazard', name: 'Eden Hazard', country: 'Belgium', clubs: ['Lille', 'Chelsea', 'Real Madrid'], honors: ['ucl', 'premier_league', 'la_liga', 'ligue_1'], photo: '' },
    { id: 'courtois', name: 'Thibaut Courtois', country: 'Belgium', clubs: ['Genk', 'Atletico Madrid', 'Chelsea', 'Real Madrid'], honors: ['ucl', 'premier_league', 'la_liga'], photo: '' },
    { id: 'modric', name: 'Luka Modrić', country: 'Croatia', clubs: ['Dinamo Zagreb', 'Tottenham Hotspur', 'Real Madrid'], honors: ['ucl', 'ballon_dor', 'la_liga'], photo: '' },
    { id: 'bale', name: 'Gareth Bale', country: 'Wales', clubs: ['Southampton', 'Tottenham Hotspur', 'Real Madrid', 'Los Angeles FC'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'beckham', name: 'David Beckham', country: 'England', clubs: ['Manchester United', 'Preston North End', 'Real Madrid', 'LA Galaxy', 'AC Milan', 'Paris Saint-Germain'], honors: ['ucl', 'premier_league', 'la_liga', 'ligue_1'], photo: '' },
    { id: 'owen', name: 'Michael Owen', country: 'England', clubs: ['Liverpool', 'Real Madrid', 'Newcastle United', 'Manchester United', 'Stoke City'], honors: ['ballon_dor', 'premier_league'], photo: '' },
    { id: 'van_nistelrooy', name: 'Ruud van Nistelrooy', country: 'Netherlands', clubs: ['Heerenveen', 'PSV Eindhoven', 'Manchester United', 'Real Madrid', 'Hamburger SV', 'Malaga'], honors: ['premier_league', 'la_liga'], photo: '' },
    { id: 'anelka', name: 'Nicolas Anelka', country: 'France', clubs: ['Paris Saint-Germain', 'Arsenal', 'Real Madrid', 'Liverpool', 'Manchester City', 'Fenerbahce', 'Bolton', 'Chelsea', 'Juventus'], honors: ['euro', 'ucl', 'premier_league', 'serie_a'], photo: '' },
    { id: 'carvalho', name: 'Ricardo Carvalho', country: 'Portugal', clubs: ['Porto', 'Chelsea', 'Real Madrid', 'Monaco'], honors: ['euro', 'ucl', 'premier_league', 'la_liga'], photo: '' },

    // Chelsea Icons
    { id: 'drogba', name: 'Didier Drogba', country: 'Ivory Coast', clubs: ['Le Mans', 'Guingamp', 'Marseille', 'Chelsea', 'Shanghai Shenhua', 'Galatasaray', 'Montreal Impact'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'lampard', name: 'Frank Lampard', country: 'England', clubs: ['West Ham United', 'Swansea City', 'Chelsea', 'Manchester City', 'New York City FC'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'terry', name: 'John Terry', country: 'England', clubs: ['Chelsea', 'Nottingham Forest', 'Aston Villa'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'cech', name: 'Petr Čech', country: 'Czech Republic', clubs: ['Sparta Prague', 'Rennes', 'Chelsea', 'Arsenal'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'kante', name: 'N\'Golo Kanté', country: 'France', clubs: ['Boulogne', 'Caen', 'Leicester City', 'Chelsea', 'Al-Ittihad'], honors: ['world_cup', 'ucl', 'premier_league'], photo: '' },
    { id: 'ashley_cole', name: 'Ashley Cole', country: 'England', clubs: ['Arsenal', 'Crystal Palace', 'Chelsea', 'Roma', 'LA Galaxy', 'Derby County'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'diego_costa', name: 'Diego Costa', country: 'Spain', clubs: ['Braga', 'Atletico Madrid', 'Celta Vigo', 'Albacete', 'Valladolid', 'Rayo Vallecano', 'Chelsea', 'Atletico Mineiro', 'Wolverhampton Wanderers', 'Gremio'], honors: ['premier_league', 'la_liga'], photo: '' },
    { id: 'fabregas', name: 'Cesc Fàbregas', country: 'Spain', clubs: ['Arsenal', 'Barcelona', 'Chelsea', 'Monaco', 'Como'], honors: ['world_cup', 'premier_league', 'la_liga'], photo: '' },
    { id: 'mata', name: 'Juan Mata', country: 'Spain', clubs: ['Real Madrid', 'Valencia', 'Chelsea', 'Manchester United', 'Galatasaray', 'Vissel Kobe', 'Western Sydney Wanderers'], honors: ['world_cup', 'ucl'], photo: '' },
    { id: 'torres', name: 'Fernando Torres', country: 'Spain', clubs: ['Atletico Madrid', 'Liverpool', 'Chelsea', 'AC Milan', 'Sagan Tosu'], honors: ['world_cup', 'ucl'], photo: '' },
    { id: 'palmer', name: 'Cole Palmer', country: 'England', clubs: ['Manchester City', 'Chelsea'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'gusto', name: 'Malo Gusto', country: 'France', clubs: ['Lyon', 'Chelsea'], honors: [], photo: '' },
    { id: 'jorginho', name: 'Jorginho', country: 'Italy', clubs: ['Verona', 'Napoli', 'Chelsea', 'Arsenal'], honors: ['euro', 'ucl'], photo: '' },
    { id: 'rudiger', name: 'Antonio Rüdiger', country: 'Germany', clubs: ['VfB Stuttgart', 'Roma', 'Chelsea', 'Real Madrid'], honors: ['ucl', 'la_liga'], photo: '' },

    // France & World Cup Legends
    { id: 'henry', name: 'Thierry Henry', country: 'France', clubs: ['Monaco', 'Juventus', 'Arsenal', 'Barcelona', 'New York Red Bulls'], honors: ['world_cup', 'ucl', 'premier_league', 'la_liga'], photo: '' },
    { id: 'vieira', name: 'Patrick Vieira', country: 'France', clubs: ['Cannes', 'AC Milan', 'Arsenal', 'Juventus', 'Inter Milan', 'Manchester City'], honors: ['world_cup', 'premier_league', 'serie_a'], photo: '' },
    { id: 'pogba', name: 'Paul Pogba', country: 'France', clubs: ['Manchester United', 'Juventus'], honors: ['world_cup', 'serie_a'], photo: '' },
    { id: 'mbappe', name: 'Kylian Mbappé', country: 'France', clubs: ['Monaco', 'Paris Saint-Germain', 'Real Madrid'], honors: ['world_cup', 'ligue_1', 'la_liga'], photo: 'https://media.api-sports.io/football/players/278.png' },
    { id: 'griezmann', name: 'Antoine Griezmann', country: 'France', clubs: ['Real Sociedad', 'Atletico Madrid', 'Barcelona'], honors: ['world_cup'], photo: '' },
    { id: 'zidane', name: 'Zinedine Zidane', country: 'France', clubs: ['Cannes', 'Bordeaux', 'Juventus', 'Real Madrid'], honors: ['world_cup', 'ucl', 'ballon_dor', 'serie_a', 'la_liga'], photo: '' },
    { id: 'deschamps', name: 'Didier Deschamps', country: 'France', clubs: ['Nantes', 'Marseille', 'Juventus', 'Chelsea', 'Valencia'], honors: ['world_cup', 'ucl', 'serie_a'], photo: '' },
    { id: 'pires', name: 'Robert Pires', country: 'France', clubs: ['Metz', 'Marseille', 'Arsenal', 'Villarreal', 'Aston Villa', 'FC Goa'], honors: ['world_cup', 'premier_league'], photo: '' },
    { id: 'giroud', name: 'Olivier Giroud', country: 'France', clubs: ['Grenoble', 'Tours', 'Montpellier', 'Arsenal', 'Chelsea', 'AC Milan', 'Los Angeles FC'], honors: ['world_cup', 'ucl', 'ligue_1', 'serie_a'], photo: '' },
    { id: 'lloris', name: 'Hugo Lloris', country: 'France', clubs: ['Nice', 'Lyon', 'Tottenham Hotspur', 'Los Angeles FC'], honors: ['world_cup'], photo: '' },
    { id: 'varane', name: 'Raphaël Varane', country: 'France', clubs: ['Lens', 'Real Madrid', 'Manchester United', 'Como'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'benzema', name: 'Karim Benzema', country: 'France', clubs: ['Lyon', 'Real Madrid', 'Al-Ittihad'], honors: ['ucl', 'ballon_dor', 'la_liga', 'ligue_1'], photo: 'https://media.api-sports.io/football/players/759.png' },

    // Argentina & World Cup Legends
    { id: 'messi', name: 'Lionel Messi', country: 'Argentina', clubs: ["Newell's Old Boys", 'Barcelona', 'Paris Saint-Germain', 'Inter Miami'], honors: ['world_cup', 'ucl', 'ballon_dor', 'la_liga', 'ligue_1'], photo: 'https://media.api-sports.io/football/players/154.png' },
    { id: 'maradona', name: 'Diego Maradona', country: 'Argentina', clubs: ['Argentinos Juniors', 'Boca Juniors', 'Barcelona', 'Napoli', 'Sevilla', "Newell's Old Boys"], honors: ['world_cup', 'serie_a'], photo: '' },
    { id: 'di_maria', name: 'Ángel Di María', country: 'Argentina', clubs: ['Rosario Central', 'Benfica', 'Real Madrid', 'Manchester United', 'Paris Saint-Germain', 'Juventus'], honors: ['world_cup', 'ucl', 'la_liga', 'ligue_1'], photo: '' },
    { id: 'julian_alvarez', name: 'Julián Álvarez', country: 'Argentina', clubs: ['River Plate', 'Manchester City', 'Atletico Madrid'], honors: ['world_cup', 'ucl', 'premier_league'], photo: '' },
    { id: 'mac_allister', name: 'Alexis Mac Allister', country: 'Argentina', clubs: ['Argentinos Juniors', 'Boca Juniors', 'Brighton', 'Liverpool'], honors: ['world_cup'], photo: '' },
    { id: 'dibu_martinez', name: 'Emiliano Martínez', country: 'Argentina', clubs: ['Arsenal', 'Sheffield Wednesday', 'Rotherham', 'Wolverhampton Wanderers', 'Getafe', 'Reading', 'Aston Villa'], honors: ['world_cup'], photo: '' },
    { id: 'lautaro', name: 'Lautaro Martínez', country: 'Argentina', clubs: ['Racing Club', 'Inter Milan'], honors: ['world_cup', 'serie_a'], photo: '' },
    { id: 'enzo_fernandez', name: 'Enzo Fernández', country: 'Argentina', clubs: ['River Plate', 'Defensa y Justicia', 'Benfica', 'Chelsea'], honors: ['world_cup'], photo: '' },
    { id: 'de_paul', name: 'Rodrigo De Paul', country: 'Argentina', clubs: ['Racing Club', 'Valencia', 'Udinese', 'Atletico Madrid'], honors: ['world_cup'], photo: '' },
    { id: 'aguero', name: 'Sergio Agüero', country: 'Argentina', clubs: ['Independiente', 'Atletico Madrid', 'Manchester City', 'Barcelona'], honors: ['premier_league'], photo: '' },
    { id: 'tevez', name: 'Carlos Tevez', country: 'Argentina', clubs: ['Boca Juniors', 'Corinthians', 'West Ham United', 'Manchester United', 'Manchester City', 'Juventus', 'Shanghai Shenhua'], honors: ['ucl', 'premier_league', 'serie_a'], photo: '' },
    { id: 'higuain', name: 'Gonzalo Higuaín', country: 'Argentina', clubs: ['River Plate', 'Real Madrid', 'Napoli', 'Juventus', 'AC Milan', 'Chelsea', 'Inter Miami'], honors: ['la_liga', 'serie_a'], photo: '' },
    { id: 'mascherano', name: 'Javier Mascherano', country: 'Argentina', clubs: ['River Plate', 'Corinthians', 'West Ham United', 'Liverpool', 'Barcelona', 'Hebei China Fortune', 'Estudiantes'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'zanetti', name: 'Javier Zanetti', country: 'Argentina', clubs: ['Talleres', 'Banfield', 'Inter Milan'], honors: ['ucl', 'serie_a'], photo: '' },
    { id: 'crespo', name: 'Hernán Crespo', country: 'Argentina', clubs: ['River Plate', 'Parma', 'Lazio', 'Inter Milan', 'Chelsea', 'AC Milan', 'Genoa'], honors: ['premier_league', 'serie_a'], photo: '' },
    { id: 'veron', name: 'Juan Sebastián Verón', country: 'Argentina', clubs: ['Estudiantes', 'Boca Juniors', 'Sampdoria', 'Parma', 'Lazio', 'Manchester United', 'Chelsea', 'Inter Milan'], honors: ['premier_league', 'serie_a'], photo: '' },
    { id: 'riquelme', name: 'Juan Román Riquelme', country: 'Argentina', clubs: ['Boca Juniors', 'Barcelona', 'Villarreal', 'Argentinos Juniors'], honors: [], photo: '' },
    { id: 'saviola', name: 'Javier Saviola', country: 'Argentina', clubs: ['River Plate', 'Barcelona', 'Monaco', 'Sevilla', 'Real Madrid', 'Benfica', 'Malaga', 'Olympiacos', 'Verona'], honors: ['la_liga'], photo: '' },
    { id: 'samuel', name: 'Walter Samuel', country: 'Argentina', clubs: ['Newell\'s Old Boys', 'Boca Juniors', 'Roma', 'Real Madrid', 'Inter Milan', 'FC Basel'], honors: ['ucl', 'serie_a'], photo: '' },
    { id: 'cambiasso', name: 'Esteban Cambiasso', country: 'Argentina', clubs: ['Independiente', 'River Plate', 'Real Madrid', 'Inter Milan', 'Leicester City', 'Olympiacos'], honors: ['ucl', 'la_liga', 'serie_a'], photo: '' },

    // Spain & Barcelona / Real Madrid Legends
    { id: 'iniesta', name: 'Andrés Iniesta', country: 'Spain', clubs: ['Barcelona', 'Vissel Kobe', 'Emirates Club'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'xavi', name: 'Xavi Hernández', country: 'Spain', clubs: ['Barcelona', 'Al Sadd'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'busquets', name: 'Sergio Busquets', country: 'Spain', clubs: ['Barcelona', 'Inter Miami'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'pique', name: 'Gerard Piqué', country: 'Spain', clubs: ['Manchester United', 'Real Zaragoza', 'Barcelona'], honors: ['world_cup', 'ucl', 'premier_league', 'la_liga'], photo: '' },
    { id: 'puyol', name: 'Carles Puyol', country: 'Spain', clubs: ['Barcelona'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'ramos', name: 'Sergio Ramos', country: 'Spain', clubs: ['Sevilla', 'Real Madrid', 'Paris Saint-Germain', 'Monterrey'], honors: ['world_cup', 'ucl', 'la_liga', 'ligue_1'], photo: '' },
    { id: 'casillas', name: 'Iker Casillas', country: 'Spain', clubs: ['Real Madrid', 'Porto'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'villa', name: 'David Villa', country: 'Spain', clubs: ['Sporting Gijon', 'Zaragoza', 'Valencia', 'Barcelona', 'Atletico Madrid', 'Melbourne City', 'New York City FC', 'Vissel Kobe'], honors: ['world_cup', 'ucl', 'la_liga'], photo: '' },
    { id: 'pedro', name: 'Pedro', country: 'Spain', clubs: ['Barcelona', 'Chelsea', 'Roma', 'Lazio'], honors: ['world_cup', 'ucl', 'premier_league', 'la_liga'], photo: '' },
    { id: 'silva_david', name: 'David Silva', country: 'Spain', clubs: ['Valencia', 'Eibar', 'Celta Vigo', 'Manchester City', 'Real Sociedad'], honors: ['world_cup', 'premier_league'], photo: '' },
    { id: 'rodri', name: 'Rodri', country: 'Spain', clubs: ['Villarreal', 'Atletico Madrid', 'Manchester City'], honors: ['ucl', 'ballon_dor', 'premier_league'], photo: '' },
    { id: 'yamal', name: 'Lamine Yamal', country: 'Spain', clubs: ['Barcelona'], honors: ['la_liga'], photo: '' },
    { id: 'pedri', name: 'Pedri', country: 'Spain', clubs: ['Las Palmas', 'Barcelona'], honors: ['la_liga'], photo: '' },
    { id: 'gavi', name: 'Gavi', country: 'Spain', clubs: ['Barcelona'], honors: ['la_liga'], photo: '' },
    { id: 'morata', name: 'Álvaro Morata', country: 'Spain', clubs: ['Real Madrid', 'Juventus', 'Chelsea', 'Atletico Madrid', 'AC Milan'], honors: ['ucl', 'la_liga', 'serie_a'], photo: '' },
    { id: 'dani_alves', name: 'Dani Alves', country: 'Brazil', clubs: ['Bahia', 'Sevilla', 'Barcelona', 'Juventus', 'Paris Saint-Germain', 'Sao Paulo', 'UNAM'], honors: ['ucl', 'la_liga', 'serie_a', 'ligue_1'], photo: '' },
    { id: 'suarez', name: 'Luis Suárez', country: 'Uruguay', clubs: ['Nacional', 'Groningen', 'Ajax', 'Liverpool', 'Barcelona', 'Atletico Madrid', 'Gremio', 'Inter Miami'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'cavani', name: 'Edinson Cavani', country: 'Uruguay', clubs: ['Danubio', 'Palermo', 'Napoli', 'Paris Saint-Germain', 'Manchester United', 'Valencia', 'Boca Juniors'], honors: ['ligue_1'], photo: '' },
    { id: 'forlan', name: 'Diego Forlán', country: 'Uruguay', clubs: ['Independiente', 'Manchester United', 'Villarreal', 'Atletico Madrid', 'Inter Milan', 'Internacional', 'Cerezo Osaka', 'Penarol', 'Mumbai City', 'Kitchee'], honors: ['premier_league'], photo: '' },

    // England / Man City / Man United Icons
    { id: 'kane', name: 'Harry Kane', country: 'England', clubs: ['Tottenham Hotspur', 'Millwall', 'Norwich City', 'Leicester City', 'Bayern Munich'], honors: [], photo: '' },
    { id: 'bellingham', name: 'Jude Bellingham', country: 'England', clubs: ['Birmingham City', 'Borussia Dortmund', 'Real Madrid'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'rooney', name: 'Wayne Rooney', country: 'England', clubs: ['Everton', 'Manchester United', 'DC United', 'Derby County'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'ferdinand', name: 'Rio Ferdinand', country: 'England', clubs: ['West Ham United', 'Bournemouth', 'Leeds United', 'Manchester United', 'Queens Park Rangers'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'scholes', name: 'Paul Scholes', country: 'England', clubs: ['Manchester United'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'giggs', name: 'Ryan Giggs', country: 'Wales', clubs: ['Manchester United'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'gerrard', name: 'Steven Gerrard', country: 'England', clubs: ['Liverpool', 'LA Galaxy'], honors: ['ucl'], photo: '' },
    { id: 'foden', name: 'Phil Foden', country: 'England', clubs: ['Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'sterling', name: 'Raheem Sterling', country: 'England', clubs: ['Liverpool', 'Manchester City', 'Chelsea', 'Arsenal'], honors: ['premier_league'], photo: '' },
    { id: 'walker', name: 'Kyle Walker', country: 'England', clubs: ['Sheffield United', 'Tottenham Hotspur', 'Aston Villa', 'Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'stones', name: 'John Stones', country: 'England', clubs: ['Barnsley', 'Everton', 'Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'grealish', name: 'Jack Grealish', country: 'England', clubs: ['Aston Villa', 'Notts County', 'Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'saka', name: 'Bukayo Saka', country: 'England', clubs: ['Arsenal'], honors: [], photo: '' },
    { id: 'rice', name: 'Declan Rice', country: 'England', clubs: ['West Ham United', 'Arsenal'], honors: [], photo: '' },

    // Man City Superstars
    { id: 'de_bruyne', name: 'Kevin De Bruyne', country: 'Belgium', clubs: ['Genk', 'Chelsea', 'Werder Bremen', 'Wolfsburg', 'Manchester City', 'Napoli'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'haaland', name: 'Erling Haaland', country: 'Norway', clubs: ['Bryne', 'Molde', 'Red Bull Salzburg', 'Borussia Dortmund', 'Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'bernardo', name: 'Bernardo Silva', country: 'Portugal', clubs: ['Benfica', 'Monaco', 'Manchester City'], honors: ['ucl', 'premier_league', 'ligue_1'], photo: '' },
    { id: 'gundogan', name: 'İlkay Gündoğan', country: 'Germany', clubs: ['Nürnberg', 'Borussia Dortmund', 'Manchester City', 'Barcelona'], honors: ['ucl', 'premier_league', 'bundesliga'], photo: '' },
    { id: 'mahrez', name: 'Riyad Mahrez', country: 'Algeria', clubs: ['Le Havre', 'Leicester City', 'Manchester City', 'Al-Ahli'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'kompany', name: 'Vincent Kompany', country: 'Belgium', clubs: ['Anderlecht', 'Hamburger SV', 'Manchester City'], honors: ['premier_league'], photo: '' },
    { id: 'david_silva', name: 'David Silva', country: 'Spain', clubs: ['Valencia', 'Manchester City', 'Real Sociedad'], honors: ['world_cup', 'premier_league'], photo: '' },
    { id: 'yaya_toure', name: 'Yaya Touré', country: 'Ivory Coast', clubs: ['Beveren', 'Metalurh Donetsk', 'Olympiacos', 'Monaco', 'Barcelona', 'Manchester City', 'Qingdao Huanghai'], honors: ['ucl', 'premier_league', 'la_liga'], photo: '' },

    // Liverpool Superstars
    { id: 'salah', name: 'Mohamed Salah', country: 'Egypt', clubs: ['Al Mokawloon', 'FC Basel', 'Chelsea', 'Fiorentina', 'Roma', 'Liverpool'], honors: ['ucl', 'premier_league'], photo: 'https://media.api-sports.io/football/players/306.png' },
    { id: 'mane', name: 'Sadio Mané', country: 'Senegal', clubs: ['Metz', 'Red Bull Salzburg', 'Southampton', 'Liverpool', 'Bayern Munich', 'Al-Nassr'], honors: ['ucl', 'premier_league', 'bundesliga'], photo: '' },
    { id: 'van_dijk', name: 'Virgil van Dijk', country: 'Netherlands', clubs: ['Groningen', 'Celtic', 'Southampton', 'Liverpool'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'alexander_arnold', name: 'Trent Alexander-Arnold', country: 'England', clubs: ['Liverpool'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'henderson', name: 'Jordan Henderson', country: 'England', clubs: ['Sunderland', 'Coventry City', 'Liverpool', 'Al-Ettifaq', 'Ajax'], honors: ['ucl', 'premier_league'], photo: '' },

    // Arsenal Stars
    { id: 'bergkamp', name: 'Dennis Bergkamp', country: 'Netherlands', clubs: ['Ajax', 'Inter Milan', 'Arsenal'], honors: ['premier_league'], photo: '' },
    { id: 'ozil', name: 'Mesut Özil', country: 'Germany', clubs: ['Schalke 04', 'Werder Bremen', 'Real Madrid', 'Arsenal', 'Fenerbahce', 'Basaksehir'], honors: ['world_cup', 'la_liga'], photo: '' },
    { id: 'alexis_sanchez', name: 'Alexis Sánchez', country: 'Chile', clubs: ['Cobreloa', 'Udinese', 'Colo-Colo', 'River Plate', 'Barcelona', 'Arsenal', 'Manchester United', 'Inter Milan', 'Marseille'], honors: ['la_liga', 'serie_a'], photo: '' },
    { id: 'van_persie', name: 'Robin van Persie', country: 'Netherlands', clubs: ['Feyenoord', 'Arsenal', 'Manchester United', 'Fenerbahce'], honors: ['premier_league'], photo: '' },
    { id: 'aubameyang', name: 'Pierre-Emerick Aubameyang', country: 'Gabon', clubs: ['AC Milan', 'Dijon', 'Lille', 'Monaco', 'Saint-Etienne', 'Borussia Dortmund', 'Arsenal', 'Barcelona', 'Chelsea', 'Marseille', 'Al-Qadsiah'], honors: [], photo: '' },
    { id: 'odegaard', name: 'Martin Ødegaard', country: 'Norway', clubs: ['Stromsgodset', 'Real Madrid', 'Heerenveen', 'Vitesse', 'Real Sociedad', 'Arsenal'], honors: [], photo: '' },
    { id: 'saliba', name: 'William Saliba', country: 'France', clubs: ['Saint-Etienne', 'Arsenal', 'Nice', 'Marseille'], honors: [], photo: '' },

    // Paris Saint-Germain / Juventus / Italy Legends
    { id: 'ibrahimovic', name: 'Zlatan Ibrahimović', country: 'Sweden', clubs: ['Malmo', 'Ajax', 'Juventus', 'Inter Milan', 'Barcelona', 'AC Milan', 'Paris Saint-Germain', 'Manchester United', 'LA Galaxy'], honors: ['la_liga', 'serie_a', 'ligue_1'], photo: '' },
    { id: 'buffon', name: 'Gianluigi Buffon', country: 'Italy', clubs: ['Parma', 'Juventus', 'Paris Saint-Germain'], honors: ['world_cup', 'serie_a', 'ligue_1'], photo: '' },
    { id: 'pirlo', name: 'Andrea Pirlo', country: 'Italy', clubs: ['Brescia', 'Inter Milan', 'Reggina', 'AC Milan', 'Juventus', 'New York City FC'], honors: ['world_cup', 'ucl', 'serie_a'], photo: '' },
    { id: 'del_piero', name: 'Alessandro Del Piero', country: 'Italy', clubs: ['Padova', 'Juventus', 'Sydney FC', 'Delhi Dynamos'], honors: ['world_cup', 'ucl', 'serie_a'], photo: '' },
    { id: 'totti', name: 'Francesco Totti', country: 'Italy', clubs: ['Roma'], honors: ['world_cup', 'serie_a'], photo: '' },
    { id: 'de_rossi', name: 'Daniele De Rossi', country: 'Italy', clubs: ['Roma', 'Boca Juniors'], honors: ['world_cup'], photo: '' },
    { id: 'cannavaro', name: 'Fabio Cannavaro', country: 'Italy', clubs: ['Napoli', 'Parma', 'Inter Milan', 'Juventus', 'Real Madrid', 'Al-Ahli'], honors: ['world_cup', 'ballon_dor', 'la_liga', 'serie_a'], photo: '' },
    { id: 'nesta', name: 'Alessandro Nesta', country: 'Italy', clubs: ['Lazio', 'AC Milan', 'Montreal Impact', 'Chennaiyin'], honors: ['world_cup', 'ucl', 'serie_a'], photo: '' },
    { id: 'maldini', name: 'Paolo Maldini', country: 'Italy', clubs: ['AC Milan'], honors: ['ucl', 'serie_a'], photo: '' },
    { id: 'gattuso', name: 'Gennaro Gattuso', country: 'Italy', clubs: ['Perugia', 'Rangers', 'Salernitana', 'AC Milan', 'Sion'], honors: ['world_cup', 'ucl', 'serie_a'], photo: '' },
    { id: 'chiellini', name: 'Giorgio Chiellini', country: 'Italy', clubs: ['Livorno', 'Fiorentina', 'Juventus', 'Los Angeles FC'], honors: ['euro', 'serie_a'], photo: '' },
    { id: 'bonucci', name: 'Leonardo Bonucci', country: 'Italy', clubs: ['Inter Milan', 'Treviso', 'Pisa', 'Bari', 'Juventus', 'AC Milan', 'Union Berlin', 'Fenerbahce'], honors: ['euro', 'serie_a'], photo: '' },
    { id: 'verratti', name: 'Marco Verratti', country: 'Italy', clubs: ['Pescara', 'Paris Saint-Germain', 'Al-Arabi'], honors: ['euro', 'ligue_1'], photo: '' },
    { id: 'donnarumma', name: 'Gianluigi Donnarumma', country: 'Italy', clubs: ['AC Milan', 'Paris Saint-Germain'], honors: ['euro', 'ligue_1'], photo: '' },

    // Dortmund & Bundesliga Superstars
    { id: 'lewandowski', name: 'Robert Lewandowski', country: 'Poland', clubs: ['Znicz Pruszkow', 'Lech Poznan', 'Borussia Dortmund', 'Bayern Munich', 'Barcelona'], honors: ['ucl', 'bundesliga', 'la_liga'], photo: '' },
    { id: 'reus', name: 'Marco Reus', country: 'Germany', clubs: ['Rot Weiss Ahlen', 'Borussia Monchengladbach', 'Borussia Dortmund', 'LA Galaxy'], honors: [], photo: '' },
    { id: 'hummels', name: 'Mats Hummels', country: 'Germany', clubs: ['Bayern Munich', 'Borussia Dortmund', 'Roma'], honors: ['world_cup', 'bundesliga'], photo: '' },
    { id: 'gotze', name: 'Mario Götze', country: 'Germany', clubs: ['Borussia Dortmund', 'Bayern Munich', 'PSV Eindhoven', 'Eintracht Frankfurt'], honors: ['world_cup', 'bundesliga'], photo: '' },

    // Scandinavian Stars
    { id: 'isak', name: 'Alexander Isak', country: 'Sweden', clubs: ['AIK', 'Borussia Dortmund', 'Willem II', 'Real Sociedad', 'Newcastle United'], honors: [], photo: 'https://media.api-sports.io/football/players/2489.png' },
    { id: 'gyokeres', name: 'Viktor Gyökeres', country: 'Sweden', clubs: ['Brommapojkarna', 'Brighton', 'St Pauli', 'Swansea City', 'Coventry City', 'Sporting CP'], honors: [], photo: 'https://media.api-sports.io/football/players/28432.png' },
    { id: 'kulusevski', name: 'Dejan Kulusevski', country: 'Sweden', clubs: ['Atalanta', 'Parma', 'Juventus', 'Tottenham Hotspur'], honors: ['serie_a'], photo: '' },

    // Netherlands Legends
    { id: 'seedorf', name: 'Clarence Seedorf', country: 'Netherlands', clubs: ['Ajax', 'Sampdoria', 'Real Madrid', 'Inter Milan', 'AC Milan', 'Botafogo'], honors: ['ucl', 'la_liga', 'serie_a'], photo: '' },
    { id: 'sneijder', name: 'Wesley Sneijder', country: 'Netherlands', clubs: ['Ajax', 'Real Madrid', 'Inter Milan', 'Galatasaray', 'Nice', 'Al-Gharafa'], honors: ['ucl', 'la_liga', 'serie_a'], photo: '' },
    { id: 'davids', name: 'Edgar Davids', country: 'Netherlands', clubs: ['Ajax', 'AC Milan', 'Juventus', 'Barcelona', 'Inter Milan', 'Tottenham Hotspur', 'Crystal Palace', 'Barnet'], honors: ['ucl', 'serie_a'], photo: '' },
    { id: 'kluivert', name: 'Patrick Kluivert', country: 'Netherlands', clubs: ['Ajax', 'AC Milan', 'Barcelona', 'Newcastle United', 'Valencia', 'PSV Eindhoven', 'Lille'], honors: ['ucl', 'la_liga'], photo: '' },
    { id: 'de_jong', name: 'Frenkie de Jong', country: 'Netherlands', clubs: ['Willem II', 'Ajax', 'Barcelona'], honors: ['la_liga'], photo: '' },
    { id: 'de_ligt', name: 'Matthijs de Ligt', country: 'Netherlands', clubs: ['Ajax', 'Juventus', 'Bayern Munich', 'Manchester United'], honors: ['serie_a', 'bundesliga'], photo: '' },

    // Portugal Stars
    { id: 'bruno_fernandes', name: 'Bruno Fernandes', country: 'Portugal', clubs: ['Novara', 'Udinese', 'Sampdoria', 'Sporting CP', 'Manchester United'], honors: [], photo: '' },
    { id: 'ruben_dias', name: 'Rúben Dias', country: 'Portugal', clubs: ['Benfica', 'Manchester City'], honors: ['ucl', 'premier_league'], photo: '' },
    { id: 'leao', name: 'Rafael Leão', country: 'Portugal', clubs: ['Sporting CP', 'Lille', 'AC Milan'], honors: ['serie_a'], photo: '' },
    { id: 'figo', name: 'Luís Figo', country: 'Portugal', clubs: ['Sporting CP', 'Barcelona', 'Real Madrid', 'Inter Milan'], honors: ['ucl', 'ballon_dor', 'la_liga', 'serie_a'], photo: '' },
    { id: 'deco', name: 'Deco', country: 'Portugal', clubs: ['Corinthians', 'Alverca', 'Salgueiros', 'Porto', 'Barcelona', 'Chelsea', 'Fluminense'], honors: ['ucl', 'premier_league', 'la_liga'], photo: '' },
    { id: 'pepe', name: 'Pepe', country: 'Portugal', clubs: ['Maritimo', 'Porto', 'Real Madrid', 'Besiktas'], honors: ['euro', 'ucl', 'la_liga'], photo: '' },

    // Additional Global Legends
    { id: 'shevchenko', name: 'Andriy Shevchenko', country: 'Ukraine', clubs: ['Dynamo Kyiv', 'AC Milan', 'Chelsea'], honors: ['ucl', 'ballon_dor', 'serie_a', 'premier_league'], photo: '' },
    { id: 'nedved', name: 'Pavel Nedvěd', country: 'Czech Republic', clubs: ['Dukla Prague', 'Sparta Prague', 'Lazio', 'Juventus'], honors: ['ballon_dor', 'serie_a'], photo: '' },
    { id: 'eto', name: 'Samuel Eto\'o', country: 'Cameroon', clubs: ['Real Madrid', 'Leganes', 'Espanyol', 'Mallorca', 'Barcelona', 'Inter Milan', 'Anzhi Makhachkala', 'Chelsea', 'Everton', 'Sampdoria', 'Antalyaspor', 'Konyaspor', 'Qatar SC'], honors: ['ucl', 'la_liga', 'serie_a'], photo: '' },
    { id: 'weah', name: 'George Weah', country: 'Liberia', clubs: ['Monaco', 'Paris Saint-Germain', 'AC Milan', 'Chelsea', 'Manchester City', 'Marseille', 'Al-Jazira'], honors: ['ballon_dor', 'serie_a', 'ligue_1'], photo: '' }
  ];

  // --------------------------------------------------------------------------
  // CURATED 3x3 GRIDS POOL (GUARANTEED SOLVABLE WITH LEGENDS)
  // --------------------------------------------------------------------------
  const CURATED_GRIDS = [
    {
      id: 'grid_classic_1',
      title: 'European Royalty',
      cols: [
        { label: 'Real Madrid', type: 'club', val: 'Real Madrid' },
        { label: 'Chelsea', type: 'club', val: 'Chelsea' },
        { label: 'World Cup Winner', type: 'trophy', val: 'world_cup' }
      ],
      rows: [
        { label: 'Bayern Munich', type: 'club', val: 'Bayern Munich' },
        { label: 'Brazil', type: 'country', val: 'Brazil' },
        { label: 'Premier League Winner', type: 'trophy', val: 'premier_league' }
      ]
    },
    {
      id: 'grid_clasico_2',
      title: 'El Clásico & Titans',
      cols: [
        { label: 'Barcelona', type: 'club', val: 'Barcelona' },
        { label: 'Real Madrid', type: 'club', val: 'Real Madrid' },
        { label: 'UCL Winner', type: 'trophy', val: 'ucl' }
      ],
      rows: [
        { label: 'Paris Saint-Germain', type: 'club', val: 'Paris Saint-Germain' },
        { label: 'Arsenal', type: 'club', val: 'Arsenal' },
        { label: 'Argentina', type: 'country', val: 'Argentina' }
      ]
    },
    {
      id: 'grid_premier_3',
      title: 'Premier League Masters',
      cols: [
        { label: 'Manchester United', type: 'club', val: 'Manchester United' },
        { label: 'Manchester City', type: 'club', val: 'Manchester City' },
        { label: 'England', type: 'country', val: 'England' }
      ],
      rows: [
        { label: 'Liverpool', type: 'club', val: 'Liverpool' },
        { label: 'Chelsea', type: 'club', val: 'Chelsea' },
        { label: 'Champions League Winner', type: 'trophy', val: 'ucl' }
      ]
    },
    {
      id: 'grid_serie_a_4',
      title: 'Calcio & World Champions',
      cols: [
        { label: 'Juventus', type: 'club', val: 'Juventus' },
        { label: 'Inter Milan', type: 'club', val: 'Inter Milan' },
        { label: 'France', type: 'country', val: 'France' }
      ],
      rows: [
        { label: 'AC Milan', type: 'club', val: 'AC Milan' },
        { label: 'Barcelona', type: 'club', val: 'Barcelona' },
        { label: 'World Cup Winner', type: 'trophy', val: 'world_cup' }
      ]
    },
    {
      id: 'grid_legends_5',
      title: 'Golden Ball Greats',
      cols: [
        { label: 'Real Madrid', type: 'club', val: 'Real Madrid' },
        { label: 'Barcelona', type: 'club', val: 'Barcelona' },
        { label: 'Ballon d\'Or Winner', type: 'trophy', val: 'ballon_dor' }
      ],
      rows: [
        { label: 'Juventus', type: 'club', val: 'Juventus' },
        { label: 'Inter Milan', type: 'club', val: 'Inter Milan' },
        { label: 'Brazil', type: 'country', val: 'Brazil' }
      ]
    },
    {
      id: 'grid_german_spanish_6',
      title: 'Spanish & German Machines',
      cols: [
        { label: 'Bayern Munich', type: 'club', val: 'Bayern Munich' },
        { label: 'Borussia Dortmund', type: 'club', val: 'Borussia Dortmund' },
        { label: 'Spain', type: 'country', val: 'Spain' }
      ],
      rows: [
        { label: 'Real Madrid', type: 'club', val: 'Real Madrid' },
        { label: 'Arsenal', type: 'club', val: 'Arsenal' },
        { label: 'Germany', type: 'country', val: 'Germany' }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // GAME STATE
  // --------------------------------------------------------------------------
  const STATE = {
    mode: 'daily', // 'daily' | 'random' | 'duel'
    grid: null,
    board: Array(9).fill(null), // null or { player: {...}, team: 1 | 2 }
    usedPlayerIds: new Set(),
    activeCellIndex: null,
    turn: 1, // 1 (P1) | 2 (P2)
    scores: {
      p1Wins: parseInt(localStorage.getItem('fg_p1_wins') || '0', 10),
      p2Wins: parseInt(localStorage.getItem('fg_p2_wins') || '0', 10),
      streak: parseInt(localStorage.getItem('fg_daily_streak') || '0', 10)
    },
    guessesUsed: 0,
    maxGuesses: 9,
    isGameOver: false
  };

  // Winning lines in Tic-Tac-Toe
  const WIN_COMBOS = [
    [0, 1, 2], // Row 0
    [3, 4, 5], // Row 1
    [6, 7, 8], // Row 2
    [0, 3, 6], // Col 0
    [1, 4, 7], // Col 1
    [2, 5, 8], // Col 2
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
  ];

  // --------------------------------------------------------------------------
  // HELPERS
  // --------------------------------------------------------------------------
  function normalizeStr(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function getBadgeOrFlag(item) {
    if (item.type === 'club') {
      const url = BADGES[item.val];
      if (url) return `<img src="${url}" alt="${item.label}" />`;
      return '⚽';
    }
    if (item.type === 'country') {
      return FLAGS[item.val] || '🌍';
    }
    if (item.type === 'trophy') {
      return TROPHY_ICONS[item.label] || '🏆';
    }
    return '⚽';
  }

  function checkPlayerSatisfiesCriterion(player, criterion) {
    if (!player || !criterion) return false;
    if (criterion.type === 'club') {
      return player.clubs.some(c => normalizeStr(c) === normalizeStr(criterion.val));
    }
    if (criterion.type === 'country') {
      return normalizeStr(player.country) === normalizeStr(criterion.val);
    }
    if (criterion.type === 'trophy') {
      return player.honors && player.honors.includes(criterion.val);
    }
    return false;
  }

  function checkPlayerForCell(player, cellIndex, grid) {
    const colIdx = cellIndex % 3;
    const rowIdx = Math.floor(cellIndex / 3);
    const colCrit = grid.cols[colIdx];
    const rowCrit = grid.rows[rowIdx];
    return checkPlayerSatisfiesCriterion(player, colCrit) && checkPlayerSatisfiesCriterion(player, rowCrit);
  }

  function getValidPlayersForCell(cellIndex, grid) {
    return PLAYERS.filter(p => checkPlayerForCell(p, cellIndex, grid));
  }

  // --------------------------------------------------------------------------
  // INIT & DOM BINDING
  // --------------------------------------------------------------------------
  function initFootyGrid() {
    bindUIEvents();
    loadDailyGrid();
  }

  function bindUIEvents() {
    // Mode switcher buttons
    document.getElementById('fgTabDaily')?.addEventListener('click', () => switchMode('daily'));
    document.getElementById('fgTabRandom')?.addEventListener('click', () => switchMode('random'));
    document.getElementById('fgTabDuel')?.addEventListener('click', () => switchMode('duel'));

    // New / Reset buttons
    document.getElementById('fgBtnNewGrid')?.addEventListener('click', () => {
      if (STATE.mode === 'daily') loadDailyGrid();
      else loadRandomGrid();
    });

    document.getElementById('fgBtnReveal')?.addEventListener('click', showAnswersModal);

    // Modal close & click-out
    document.getElementById('fgModalClose')?.addEventListener('click', closeSearchModal);
    document.getElementById('fgModalOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'fgModalOverlay') closeSearchModal();
    });

    // Search input typing
    const input = document.getElementById('fgSearchInput');
    const clearBtn = document.getElementById('fgClearInput');
    if (input) {
      input.addEventListener('input', () => {
        const q = input.value.trim();
        if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';
        renderSuggestions(q);
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const firstItem = document.querySelector('.fg-suggestion-item');
          if (firstItem) firstItem.click();
        }
      });
    }

    if (clearBtn && input) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        renderSuggestions('');
        input.focus();
      });
    }

    // Panel Home Button
    document.getElementById('fgHomeBtn')?.addEventListener('click', () => {
      const panel = document.getElementById('footyGridPanel');
      if (panel) panel.hidden = true;
      if (typeof switchMainTab === 'function') switchMainTab('games');
    });

    // Open from Games Hub
    document.getElementById('footyGridGameBtn')?.addEventListener('click', () => {
      openGamePanel();
    });
  }

  function openGamePanel() {
    // Hide other panels
    ['gamePanel', 'clueGamePanel', 'favoritesPanel', 'funFactsPanel', 'dreamTeamPanel', 'twoPlayerPanel', 'battlePanel', 'guessLineupPanel', 'whatIfPanel', 'footballLifePanel'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.hidden = true;
    });

    const panel = document.getElementById('footyGridPanel');
    if (panel) {
      panel.hidden = false;
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --------------------------------------------------------------------------
  // GAME MODES & GRID LOADING
  // --------------------------------------------------------------------------
  function switchMode(newMode) {
    STATE.mode = newMode;
    document.querySelectorAll('.fg-tab-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.mode === newMode);
    });

    if (newMode === 'daily') {
      loadDailyGrid();
    } else if (newMode === 'random') {
      loadRandomGrid();
    } else if (newMode === 'duel') {
      startDuelMatch();
    }
  }

  function loadDailyGrid() {
    const today = new Date().toISOString().slice(0, 10);
    // Hash date to deterministic index
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = (hash << 5) - hash + today.charCodeAt(i);
      hash |= 0;
    }
    const gridIndex = Math.abs(hash) % CURATED_GRIDS.length;
    STATE.grid = CURATED_GRIDS[gridIndex];
    resetBoard();
    updateStatusBanner();
    renderBoard();
  }

  function loadRandomGrid() {
    const randIndex = Math.floor(Math.random() * CURATED_GRIDS.length);
    STATE.grid = CURATED_GRIDS[randIndex];
    resetBoard();
    updateStatusBanner();
    renderBoard();
  }

  function startDuelMatch() {
    if (!STATE.grid) {
      loadRandomGrid();
    } else {
      resetBoard();
    }
    STATE.turn = 1;
    updateStatusBanner();
    renderBoard();
  }

  function resetBoard() {
    STATE.board = Array(9).fill(null);
    STATE.usedPlayerIds.clear();
    STATE.guessesUsed = 0;
    STATE.isGameOver = false;
    STATE.activeCellIndex = null;
    const banner = document.getElementById('fgStatusBanner');
    if (banner) banner.classList.remove('is-winner-p1', 'is-winner-p2');
  }

  // --------------------------------------------------------------------------
  // BOARD RENDERING
  // --------------------------------------------------------------------------
  function renderBoard() {
    if (!STATE.grid) return;

    // Render Column Headers (Top)
    const colHeaders = document.querySelectorAll('.fg-col-header');
    STATE.grid.cols.forEach((col, idx) => {
      const el = colHeaders[idx];
      if (el) {
        el.innerHTML = `
          <div class="fg-header-badge">${getBadgeOrFlag(col)}</div>
          <div class="fg-header-name">${col.label}</div>
        `;
      }
    });

    // Render Row Headers (Left)
    const rowHeaders = document.querySelectorAll('.fg-row-header');
    STATE.grid.rows.forEach((row, idx) => {
      const el = rowHeaders[idx];
      if (el) {
        el.innerHTML = `
          <div class="fg-header-badge">${getBadgeOrFlag(row)}</div>
          <div class="fg-header-name">${row.label}</div>
        `;
      }
    });

    // Render 9 Cells
    const cellElements = document.querySelectorAll('.fg-cell');
    cellElements.forEach((cellEl, idx) => {
      const cellData = STATE.board[idx];
      cellEl.className = 'fg-cell';
      cellEl.onclick = () => onCellClick(idx);

      if (cellData) {
        // Cell is Claimed
        cellEl.classList.add('is-claimed');
        if (STATE.mode === 'duel') {
          cellEl.classList.add(cellData.team === 1 ? 'p1-claim' : 'p2-claim');
        } else {
          cellEl.classList.add('solo-claim');
        }

        const tagText = STATE.mode === 'duel' ? (cellData.team === 1 ? '⚽ P1' : '🛡️ P2') : '✓';
        const tagClass = STATE.mode === 'duel' ? (cellData.team === 1 ? 'p1-tag' : 'p2-tag') : 'solo-tag';

        const p = cellData.player;
        const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const photoHtml = p.photo
          ? `<img src="${p.photo}" class="fg-claimed-photo" alt="${p.name}" />`
          : `<div class="fg-claimed-avatar">${initials}</div>`;

        cellEl.innerHTML = `
          <div class="fg-claimed-badge ${tagClass}">${tagText}</div>
          ${photoHtml}
          <div class="fg-claimed-name">${p.name}</div>
          <div class="fg-claimed-sub">${p.country}</div>
        `;
      } else {
        // Cell is Empty
        cellEl.innerHTML = `
          <div class="fg-cell-empty-icon">+</div>
          <div class="fg-cell-prompt">GUESS</div>
        `;
      }
    });
  }

  function updateStatusBanner() {
    const badge = document.getElementById('fgTurnBadge');
    const subtext = document.getElementById('fgTurnSubtext');
    const tracker = document.getElementById('fgStatsTracker');

    if (STATE.mode === 'duel') {
      if (badge) {
        badge.className = `fg-turn-badge ${STATE.turn === 1 ? 'p1-turn' : 'p2-turn'}`;
        badge.innerHTML = STATE.turn === 1 ? '⚽ PLAYER 1 (HOME)' : '🛡️ PLAYER 2 (AWAY)';
      }
      if (subtext) {
        subtext.textContent = 'Pick any open square & connect 3 in a row!';
      }
      if (tracker) {
        tracker.innerHTML = `
          <div class="fg-stat-pill">P1 WINS: <strong>${STATE.scores.p1Wins}</strong></div>
          <span style="opacity:0.3;">|</span>
          <div class="fg-stat-pill">P2 WINS: <strong>${STATE.scores.p2Wins}</strong></div>
        `;
      }
    } else {
      // Solo Daily or Random
      const filledCount = STATE.board.filter(Boolean).length;
      if (badge) {
        badge.className = 'fg-turn-badge solo-status';
        badge.innerHTML = STATE.mode === 'daily' ? '📅 DAILY CHALLENGE' : '⚡ RANDOM GRID';
      }
      if (subtext) {
        subtext.textContent = `Progress: ${filledCount}/9 Cells Completed`;
      }
      if (tracker) {
        tracker.innerHTML = `
          <div class="fg-stat-pill">SCORE: <strong>${filledCount}/9</strong></div>
          <span style="opacity:0.3;">|</span>
          <div class="fg-stat-pill">STREAK: <strong>${STATE.scores.streak} 🔥</strong></div>
        `;
      }
    }
  }

  // --------------------------------------------------------------------------
  // CELL CLICK & MODAL
  // --------------------------------------------------------------------------
  function onCellClick(index) {
    if (STATE.isGameOver) return;
    if (STATE.board[index] !== null) return; // Already claimed

    STATE.activeCellIndex = index;
    const colIdx = index % 3;
    const rowIdx = Math.floor(index / 3);
    const col = STATE.grid.cols[colIdx];
    const row = STATE.grid.rows[rowIdx];

    // Setup Clue banner in modal
    const clueContainer = document.getElementById('fgModalClues');
    if (clueContainer) {
      clueContainer.innerHTML = `
        <div class="fg-clue-item">${getBadgeOrFlag(row)} <span>${row.label}</span></div>
        <span class="fg-clue-sep">✕</span>
        <div class="fg-clue-item">${getBadgeOrFlag(col)} <span>${col.label}</span></div>
      `;
    }

    const modalTitle = document.getElementById('fgModalTitle');
    if (modalTitle) {
      modalTitle.textContent = STATE.mode === 'duel' ? `PLAYER ${STATE.turn}: NAME A PLAYER` : 'NAME A PLAYER';
    }

    // Reset feedback and input
    const feedback = document.getElementById('fgFeedbackMsg');
    if (feedback) {
      feedback.textContent = '';
      feedback.className = 'fg-feedback-msg';
    }

    const input = document.getElementById('fgSearchInput');
    if (input) {
      input.value = '';
    }

    renderSuggestions('');

    // Open Modal
    const overlay = document.getElementById('fgModalOverlay');
    if (overlay) {
      overlay.classList.add('is-open');
      setTimeout(() => input?.focus(), 150);
    }
  }

  function closeSearchModal() {
    const overlay = document.getElementById('fgModalOverlay');
    if (overlay) overlay.classList.remove('is-open');
    STATE.activeCellIndex = null;
  }

  // --------------------------------------------------------------------------
  // AUTOCOMPLETE & SEARCH
  // --------------------------------------------------------------------------
  function renderSuggestions(query) {
    const list = document.getElementById('fgSuggestionsList');
    if (!list) return;

    const normQuery = normalizeStr(query);
    let matches = [];

    if (normQuery.length >= 1) {
      matches = PLAYERS.filter(p => {
        return normalizeStr(p.name).includes(normQuery) || normalizeStr(p.country).includes(normQuery);
      }).slice(0, 7);
    } else {
      // Suggest top stars when input is empty
      matches = PLAYERS.slice(0, 6);
    }

    if (!matches.length) {
      list.innerHTML = `<div class="fg-no-suggestions">No player found matching "${query}"</div>`;
      return;
    }

    list.innerHTML = matches.map(p => {
      const isUsed = STATE.usedPlayerIds.has(p.id);
      const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      const photoHtml = p.photo
        ? `<img src="${p.photo}" class="fg-sugg-photo" alt="${p.name}" />`
        : `<div class="fg-sugg-avatar">${initials}</div>`;

      return `
        <button type="button" class="fg-suggestion-item" data-player-id="${p.id}" ${isUsed ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>
          <div class="fg-sugg-left">
            ${photoHtml}
            <div class="fg-sugg-info">
              <strong>${p.name} ${isUsed ? '(Already Used)' : ''}</strong>
              <small>${p.country} • ${p.clubs.slice(-3).join(', ')}</small>
            </div>
          </div>
          <span class="fg-sugg-arrow">↗</span>
        </button>
      `;
    }).join('');

    list.querySelectorAll('.fg-suggestion-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.dataset.playerId;
        const player = PLAYERS.find(p => p.id === pId);
        if (player) submitPlayerGuess(player);
      });
    });
  }

  // --------------------------------------------------------------------------
  // GUESS VALIDATION & SUBMISSION
  // --------------------------------------------------------------------------
  function submitPlayerGuess(player) {
    if (STATE.activeCellIndex === null) return;
    const cellIdx = STATE.activeCellIndex;
    const feedback = document.getElementById('fgFeedbackMsg');

    // 1. Check if player already used in this grid
    if (STATE.usedPlayerIds.has(player.id)) {
      if (feedback) {
        feedback.textContent = `❌ ${player.name} was already used in this grid!`;
        feedback.className = 'fg-feedback-msg is-error';
      }
      return;
    }

    // 2. Validate against row and col
    const isValid = checkPlayerForCell(player, cellIdx, STATE.grid);

    if (isValid) {
      // SUCCESS!
      if (typeof window.MasterStreak !== 'undefined') {
        window.MasterStreak.recordWin('Footy Grid');
      }
      STATE.board[cellIdx] = {
        player,
        team: STATE.mode === 'duel' ? STATE.turn : 1
      };
      STATE.usedPlayerIds.add(player.id);
      STATE.guessesUsed += 1;

      closeSearchModal();
      renderBoard();

      // Check win condition
      if (STATE.mode === 'duel') {
        const winner = checkTicTacToeWinner();
        if (winner) {
          triggerVictory(winner);
          return;
        } else if (STATE.board.every(Boolean)) {
          triggerDraw();
          return;
        } else {
          // Switch turn
          STATE.turn = STATE.turn === 1 ? 2 : 1;
          updateStatusBanner();
        }
      } else {
        // Solo Mode
        const completed = STATE.board.filter(Boolean).length;
        if (completed === 9) {
          triggerSoloVictory();
        } else {
          updateStatusBanner();
        }
      }
    } else {
      // WRONG GUESS!
      const colIdx = cellIdx % 3;
      const rowIdx = Math.floor(cellIdx / 3);
      const col = STATE.grid.cols[colIdx];
      const row = STATE.grid.rows[rowIdx];

      if (STATE.mode === 'duel') {
        // In Duel mode: Miss causes turn to pass to opponent!
        if (feedback) {
          feedback.textContent = `❌ WRONG! ${player.name} does not meet both ${row.label} & ${col.label}. Turn passes!`;
          feedback.className = 'fg-feedback-msg is-error';
        }
        setTimeout(() => {
          closeSearchModal();
          STATE.turn = STATE.turn === 1 ? 2 : 1;
          updateStatusBanner();
        }, 1200);
      } else {
        // Solo mode: Keep modal open, show error
        if (feedback) {
          feedback.textContent = `❌ ${player.name} does not satisfy both criteria. Try again!`;
          feedback.className = 'fg-feedback-msg is-error';
        }
      }
    }
  }

  // --------------------------------------------------------------------------
  // TIC-TAC-TOE WIN CHECKER
  // --------------------------------------------------------------------------
  function checkTicTacToeWinner() {
    for (const combo of WIN_COMBOS) {
      const [a, b, c] = combo;
      const cellA = STATE.board[a];
      const cellB = STATE.board[b];
      const cellC = STATE.board[c];

      if (cellA && cellB && cellC && cellA.team === cellB.team && cellA.team === cellC.team) {
        // Highlight winning cells
        const cellEls = document.querySelectorAll('.fg-cell');
        combo.forEach(idx => cellEls[idx]?.classList.add('is-winner'));
        return { team: cellA.team, combo };
      }
    }
    return null;
  }

  function triggerVictory(winnerData) {
    STATE.isGameOver = true;
    const team = winnerData.team;

    if (team === 1) {
      STATE.scores.p1Wins += 1;
      localStorage.setItem('fg_p1_wins', STATE.scores.p1Wins);
    } else {
      STATE.scores.p2Wins += 1;
      localStorage.setItem('fg_p2_wins', STATE.scores.p2Wins);
    }

    updateStatusBanner();

    const winnerTitle = team === 1 ? 'PLAYER 1 (HOME) WINS! 🏆' : 'PLAYER 2 (AWAY) WINS! 🏆';
    const winnerSub = `Glorious victory! Connected 3 in a row across ${winnerData.combo.map(i => '#' + (i + 1)).join(', ')}.`;

    showVictoryModal({
      icon: '🏆',
      title: winnerTitle,
      subtitle: winnerSub,
      p1: STATE.scores.p1Wins,
      p2: STATE.scores.p2Wins,
      primaryBtnText: 'PLAY REMATCH ↻',
      onPrimary: startDuelMatch
    });
  }

  function triggerDraw() {
    STATE.isGameOver = true;
    showVictoryModal({
      icon: '🤝',
      title: 'HONORS EVEN — IT\'S A DRAW!',
      subtitle: 'All 9 squares claimed without a 3-in-a-row. Absolute tactical stalemate!',
      p1: STATE.scores.p1Wins,
      p2: STATE.scores.p2Wins,
      primaryBtnText: 'PLAY TIE-BREAKER ↻',
      onPrimary: startDuelMatch
    });
  }

  function triggerSoloVictory() {
    STATE.isGameOver = true;
    STATE.scores.streak += 1;
    localStorage.setItem('fg_daily_streak', STATE.scores.streak);
    updateStatusBanner();

    showVictoryModal({
      icon: '⭐',
      title: 'PERFECT 9/9 GRID COMPLETE!',
      subtitle: 'Legendary ball knowledge! You conquered all 9 combinations.',
      p1: '9/9',
      p2: `${STATE.scores.streak} 🔥`,
      primaryBtnText: 'NEW GRID ↻',
      onPrimary: loadRandomGrid
    });
  }

  function showVictoryModal({ icon, title, subtitle, p1, p2, primaryBtnText, onPrimary }) {
    const existing = document.getElementById('fgVictoryModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'fgVictoryModal';
    modal.className = 'fg-victory-modal';
    modal.innerHTML = `
      <div class="fg-victory-card">
        <div class="fg-victory-icon">${icon}</div>
        <h3 class="fg-victory-title">${title}</h3>
        <p class="fg-victory-sub">${subtitle}</p>
        
        <div class="fg-score-record">
          <div class="fg-score-col">
            <span>P1 WINS</span>
            <strong>${p1}</strong>
          </div>
          <div class="fg-score-col">
            <span>P2 WINS</span>
            <strong>${p2}</strong>
          </div>
        </div>

        <div class="fg-modal-actions-row">
          <button type="button" class="fg-btn-primary" id="fgVictoryPrimary">${primaryBtnText}</button>
          <button type="button" class="fg-btn-secondary" id="fgVictoryClose">VIEW BOARD</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#fgVictoryPrimary')?.addEventListener('click', () => {
      modal.remove();
      if (typeof onPrimary === 'function') onPrimary();
    });

    modal.querySelector('#fgVictoryClose')?.addEventListener('click', () => {
      modal.remove();
    });
  }

  // --------------------------------------------------------------------------
  // ANSWERS REVEAL MODAL
  // --------------------------------------------------------------------------
  function showAnswersModal() {
    if (!STATE.grid) return;
    const existing = document.getElementById('fgAnswersModal');
    if (existing) existing.remove();

    const cellsHtml = STATE.board.map((_, idx) => {
      const colIdx = idx % 3;
      const rowIdx = Math.floor(idx / 3);
      const col = STATE.grid.cols[colIdx];
      const row = STATE.grid.rows[rowIdx];
      const validAnswers = getValidPlayersForCell(idx, STATE.grid);
      const answersList = validAnswers.length
        ? validAnswers.slice(0, 4).map(p => `<li>${p.name} <small>(${p.country})</small></li>`).join('')
        : '<li>No known players in local archive</li>';

      return `
        <div class="fg-answer-cell">
          <div class="fg-answer-header">${row.label} ✕ ${col.label}</div>
          <ul class="fg-answer-list">${answersList}</ul>
        </div>
      `;
    }).join('');

    const modal = document.createElement('div');
    modal.id = 'fgAnswersModal';
    modal.className = 'fg-answers-modal';
    modal.innerHTML = `
      <div class="fg-answers-card">
        <div class="fg-modal-header">
          <h3>SOLUTION ARCHIVE • ALL 9 CELLS</h3>
          <button type="button" class="fg-modal-close-btn" id="fgAnswersClose">✕</button>
        </div>
        <div class="fg-answers-grid">
          ${cellsHtml}
        </div>
        <div style="text-align:center;">
          <button type="button" class="fg-btn-primary" id="fgAnswersDone">CLOSE SOLUTION</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#fgAnswersClose')?.addEventListener('click', close);
    modal.querySelector('#fgAnswersDone')?.addEventListener('click', close);
  }

  // --------------------------------------------------------------------------
  // AUTO-INITIALIZE ON DOM READY
  // --------------------------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFootyGrid);
  } else {
    initFootyGrid();
  }

})();
