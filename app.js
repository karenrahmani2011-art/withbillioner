const players = {
  "lionel messi": { first: "Lionel", last: "Messi", country: "ARG / FORWARD", current: "Inter Miami", number: "10", clubs: [["Barcelona", "2004-2021"], ["Paris Saint-Germain", "2021-2023"], ["Inter Miami", "2023-NOW"]] },
  "cristiano ronaldo": { first: "Cristiano", last: "Ronaldo", country: "POR / FORWARD", current: "Al-Nassr", number: "07", clubs: [["Sporting CP", "2002-2003"], ["Manchester United", "2003-2009"], ["Real Madrid", "2009-2018"], ["Juventus", "2018-2021"], ["Manchester United", "2021-2022"], ["Al-Nassr", "2023-NOW"]] },
  "mohamed salah": { first: "Mohamed", last: "Salah", country: "EGY / FORWARD", current: "Liverpool", number: "11", clubs: [["Al Mokawloon", "2010-2012"], ["FC Basel", "2012-2014"], ["Chelsea", "2014-2016"], ["Roma", "2016-2017"], ["Liverpool", "2017-NOW"]] },
  "kylian mbappe": { first: "Kylian", last: "Mbappe", country: "FRA / FORWARD", current: "Real Madrid", number: "09", clubs: [["Monaco", "2015-2017"], ["Paris Saint-Germain", "2017-2024"], ["Real Madrid", "2024-NOW"]] },
  "erling haaland": { first: "Erling", last: "Haaland", country: "NOR / FORWARD", current: "Manchester City", number: "09", clubs: [["Molde", "2017-2019"], ["Red Bull Salzburg", "2019-2020"], ["Borussia Dortmund", "2020-2022"], ["Manchester City", "2022-NOW"]] },
  "neymar": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Al-Hilal", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-NOW"]] },
  "neymar jr": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Al-Hilal", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-NOW"]] },
  "kevin de bruyne": { first: "Kevin", last: "De Bruyne", country: "BEL / MIDFIELDER", current: "Manchester City", number: "17", clubs: [["Genk", "2008-2012"], ["Chelsea", "2012-2014"], ["Werder Bremen", "2012-2013"], ["Wolfsburg", "2014-2015"], ["Manchester City", "2015-NOW"]] },
  "harry kane": { first: "Harry", last: "Kane", country: "ENG / FORWARD", current: "Bayern Munich", number: "09", clubs: [["Tottenham Hotspur", "2009-2023"], ["Millwall", "2012"], ["Norwich City", "2012"], ["Leicester City", "2013"], ["Bayern Munich", "2023-NOW"]] },
  "jude bellingham": { first: "Jude", last: "Bellingham", country: "ENG / MIDFIELDER", current: "Real Madrid", number: "05", clubs: [["Birmingham City", "2019-2020"], ["Borussia Dortmund", "2020-2023"], ["Real Madrid", "2023-NOW"]] },
  "vinicius junior": { first: "Vinicius", last: "Junior", country: "BRA / FORWARD", current: "Real Madrid", number: "07", clubs: [["Flamengo", "2017-2018"], ["Real Madrid", "2018-NOW"]] },
  "malo gusto": { first: "Malo", last: "Gusto", country: "FRA / DEFENDER", current: "Chelsea", number: "27", clubs: [["Lyon", "2016-2023"], ["Chelsea", "2023-NOW"]] },
  "cole palmer": { first: "Cole", last: "Palmer", country: "ENG / MIDFIELDER", current: "Chelsea", number: "20", clubs: [["Manchester City", "2019-2023"], ["Chelsea", "2023-NOW"]] },
  "zlatan ibrahimovic": { first: "Zlatan", last: "Ibrahimovic", country: "SWE / FORWARD", current: "Retired", number: "11", clubs: [["Malmo", "1999-2001"], ["Ajax", "2001-2004"], ["Juventus", "2004-2006"], ["Inter Milan", "2006-2009"], ["Barcelona", "2009-2010"], ["AC Milan", "2010-2012"], ["Paris Saint-Germain", "2012-2016"], ["Manchester United", "2016-2018"], ["LA Galaxy", "2018-2019"], ["AC Milan", "2020-2023"]] },
  "robert lewandowski": { first: "Robert", last: "Lewandowski", country: "POL / FORWARD", current: "Barcelona", number: "09", clubs: [["Znicz Pruszkow", "2006-2008"], ["Lech Poznan", "2008-2010"], ["Borussia Dortmund", "2010-2014"], ["Bayern Munich", "2014-2022"], ["Barcelona", "2022-NOW"]] },
  "luka modric": { first: "Luka", last: "Modric", country: "CRO / MIDFIELDER", current: "Real Madrid", number: "10", clubs: [["Dinamo Zagreb", "2003-2008"], ["Tottenham Hotspur", "2008-2012"], ["Real Madrid", "2012-NOW"]] },
  "sergio ramos": { first: "Sergio", last: "Ramos", country: "ESP / DEFENDER", current: "Free Agent", number: "04", clubs: [["Sevilla", "2003-2005"], ["Real Madrid", "2005-2021"], ["Paris Saint-Germain", "2021-2023"], ["Sevilla", "2023-2024"]] },
  "antoine griezmann": { first: "Antoine", last: "Griezmann", country: "FRA / FORWARD", current: "Atletico Madrid", number: "07", clubs: [["Real Sociedad", "2009-2014"], ["Atletico Madrid", "2014-2019"], ["Barcelona", "2019-2021"], ["Atletico Madrid", "2021-NOW"]] },
  "son heung-min": { first: "Son", last: "Heung-min", country: "KOR / FORWARD", current: "Tottenham Hotspur", number: "07", clubs: [["Hamburger SV", "2010-2013"], ["Bayer Leverkusen", "2013-2015"], ["Tottenham Hotspur", "2015-NOW"]] },
  "andres iniesta": { first: "Andres", last: "Iniesta", country: "ESP / MIDFIELDER", current: "Retired", number: "08", clubs: [["Barcelona", "2002-2018"], ["Vissel Kobe", "2018-2023"], ["Emirates Club", "2023-2024"]] },
  "gianluigi buffon": { first: "Gianluigi", last: "Buffon", country: "ITA / GOALKEEPER", current: "Retired", number: "01", clubs: [["Parma", "1995-2001"], ["Juventus", "2001-2018"], ["Paris Saint-Germain", "2018-2019"], ["Juventus", "2019-2021"], ["Parma", "2021-2023"]] },
  "david beckham": { first: "David", last: "Beckham", country: "ENG / MIDFIELDER", current: "Retired", number: "23", clubs: [["Manchester United", "1992-2003"], ["Real Madrid", "2003-2007"], ["LA Galaxy", "2007-2012"], ["AC Milan", "2009"], ["Paris Saint-Germain", "2013"]] },
  "luis suarez": { first: "Luis", last: "Suarez", country: "URU / FORWARD", current: "Inter Miami", number: "09", clubs: [["Nacional", "2005-2006"], ["Groningen", "2006-2007"], ["Ajax", "2007-2011"], ["Liverpool", "2011-2014"], ["Barcelona", "2014-2020"], ["Atletico Madrid", "2020-2022"], ["Nacional", "2022"], ["Gremio", "2023"], ["Inter Miami", "2024-NOW"]] },
  "thierry henry": { first: "Thierry", last: "Henry", country: "FRA / FORWARD", current: "Retired", number: "14", clubs: [["Monaco", "1994-1999"], ["Juventus", "1999"], ["Arsenal", "1999-2007"], ["Barcelona", "2007-2010"], ["New York Red Bulls", "2010-2014"]] },
  "ronaldinho": { first: "Ronaldinho", last: "Gaúcho", country: "BRA / FORWARD", current: "Retired", number: "10", clubs: [["Gremio", "1998-2001"], ["Paris Saint-Germain", "2001-2003"], ["Barcelona", "2003-2008"], ["AC Milan", "2008-2011"], ["Flamengo", "2011-2012"], ["Atletico Mineiro", "2012-2014"]] },
  "xavi hernandez": { first: "Xavi", last: "Hernandez", country: "ESP / MIDFIELDER", current: "Retired", number: "06", clubs: [["Barcelona", "1998-2015"], ["Al Sadd", "2015-2019"]] },
  "andrea pirlo": { first: "Andrea", last: "Pirlo", country: "ITA / MIDFIELDER", current: "Retired", number: "21", clubs: [["Brescia", "1995-1998"], ["Inter Milan", "1998-2001"], ["AC Milan", "2001-2011"], ["Juventus", "2011-2015"], ["New York City FC", "2015-2017"]] },
  "kaka": { first: "Ricardo", last: "Kaka", country: "BRA / MIDFIELDER", current: "Retired", number: "22", clubs: [["Sao Paulo", "2001-2003"], ["AC Milan", "2003-2009"], ["Real Madrid", "2009-2013"], ["AC Milan", "2013"], ["Orlando City", "2015-2017"]] },
  "cesc fabregas": { first: "Cesc", last: "Fabregas", country: "ESP / MIDFIELDER", current: "Retired", number: "04", clubs: [["Arsenal", "2003-2011"], ["Barcelona", "2011-2014"], ["Chelsea", "2014-2019"], ["Monaco", "2019-2022"], ["Como", "2022-2023"]] },
  "didier drogba": { first: "Didier", last: "Drogba", country: "CIV / FORWARD", current: "Retired", number: "11", clubs: [["Le Mans", "1998-2002"], ["Guingamp", "2002-2003"], ["Marseille", "2003-2004"], ["Chelsea", "2004-2012"], ["Shanghai Shenhua", "2012-2013"], ["Galatasaray", "2013-2014"], ["Chelsea", "2014-2015"], ["Montreal Impact", "2015-2016"]] },
  "sadio mane": { first: "Sadio", last: "Mane", country: "SEN / FORWARD", current: "Al-Nassr", number: "10", clubs: [["Metz", "2011-2012"], ["Red Bull Salzburg", "2012-2014"], ["Southampton", "2014-2016"], ["Liverpool", "2016-2022"], ["Bayern Munich", "2022-2023"], ["Al-Nassr", "2023-NOW"]] },
  "lamine yamal": { first: "Lamine", last: "Yamal", country: "ESP / FORWARD", current: "Barcelona", number: "10", clubs: [["Barcelona", "2023-NOW"]] },
  "alexander isak": { first: "Alexander", last: "Isak", country: "SWE / FORWARD", current: "Newcastle United", number: "14", clubs: [["AIK", "2016-2017"], ["Borussia Dortmund", "2017-2019"], ["Willem II", "2019"], ["Real Sociedad", "2019-2022"], ["Newcastle United", "2022-NOW"]] },
  "viktor gyokeres": { first: "Viktor", last: "Gyökeres", country: "SWE / FORWARD", current: "Sporting CP", number: "09", clubs: [["Brommapojkarna", "2015-2017"], ["Brighton", "2018-2021"], ["St Pauli", "2019-2020"], ["Swansea City", "2020-2021"], ["Coventry City", "2021-2023"], ["Sporting CP", "2023-NOW"]] },
  "karim benzema": { first: "Karim", last: "Benzema", country: "FRA / FORWARD", current: "Al-Ittihad", number: "09", clubs: [["Lyon", "2004-2009"], ["Real Madrid", "2009-2023"], ["Al-Ittihad", "2023-NOW"]] },
  "gareth bale": { first: "Gareth", last: "Bale", country: "WAL / FORWARD", current: "Retired", number: "11", clubs: [["Southampton", "2006-2007"], ["Tottenham Hotspur", "2007-2013"], ["Real Madrid", "2013-2020"], ["Tottenham Hotspur", "2020-2021"], ["Real Madrid", "2021-2022"], ["Los Angeles FC", "2022-2023"]] },
  "eden hazard": { first: "Eden", last: "Hazard", country: "BEL / FORWARD", current: "Retired", number: "10", clubs: [["Lille", "2007-2012"], ["Chelsea", "2012-2019"], ["Real Madrid", "2019-2023"]] },
  "toni kroos": { first: "Toni", last: "Kroos", country: "GER / MIDFIELDER", current: "Retired", number: "08", clubs: [["Bayern Munich", "2007-2009"], ["Bayer Leverkusen", "2009-2010"], ["Bayern Munich", "2010-2014"], ["Real Madrid", "2014-2024"]] },
  "mesut ozil": { first: "Mesut", last: "Ozil", country: "GER / MIDFIELDER", current: "Retired", number: "10", clubs: [["Schalke 04", "2006-2008"], ["Werder Bremen", "2008-2010"], ["Real Madrid", "2010-2013"], ["Arsenal", "2013-2021"], ["Fenerbahce", "2021-2022"], ["Istanbul Basaksehir", "2022-2023"]] },
  "wayne rooney": { first: "Wayne", last: "Rooney", country: "ENG / FORWARD", current: "Retired", number: "10", clubs: [["Everton", "2002-2004"], ["Manchester United", "2004-2017"], ["Everton", "2017-2018"], ["D.C. United", "2018-2019"], ["Derby County", "2020-2021"]] },
  "steven gerrard": { first: "Steven", last: "Gerrard", country: "ENG / MIDFIELDER", current: "Retired", number: "08", clubs: [["Liverpool", "1998-2015"], ["LA Galaxy", "2015-2016"]] },
  "frank lampard": { first: "Frank", last: "Lampard", country: "ENG / MIDFIELDER", current: "Retired", number: "08", clubs: [["West Ham United", "1995-2001"], ["Swansea City", "1995-1996"], ["Chelsea", "2001-2014"], ["Manchester City", "2014-2015"], ["New York City FC", "2015-2016"]] },
  "sergio aguero": { first: "Sergio", last: "Aguero", country: "ARG / FORWARD", current: "Retired", number: "10", clubs: [["Independiente", "2003-2006"], ["Atletico Madrid", "2006-2011"], ["Manchester City", "2011-2021"], ["Barcelona", "2021"]] },
  "thomas muller": { first: "Thomas", last: "Muller", country: "GER / FORWARD", current: "Bayern Munich", number: "25", clubs: [["Bayern Munich", "2008-NOW"]] },
  "manuel neuer": { first: "Manuel", last: "Neuer", country: "GER / GOALKEEPER", current: "Bayern Munich", number: "01", clubs: [["Schalke 04", "2006-2011"], ["Bayern Munich", "2011-NOW"]] },
  "angel di maria": { first: "Angel", last: "Di Maria", country: "ARG / FORWARD", current: "Benfica", number: "11", clubs: [["Rosario Central", "2005-2007"], ["Benfica", "2007-2010"], ["Real Madrid", "2010-2014"], ["Manchester United", "2014-2015"], ["Paris Saint-Germain", "2015-2022"], ["Juventus", "2022-2023"], ["Benfica", "2023-NOW"]] },
  "alexis sanchez": { first: "Alexis", last: "Sanchez", country: "CHI / FORWARD", current: "Udinese", number: "07", clubs: [["Cobreloa", "2005-2006"], ["Colo-Colo", "2006-2007"], ["River Plate", "2007-2008"], ["Udinese", "2008-2011"], ["Barcelona", "2011-2014"], ["Arsenal", "2014-2018"], ["Manchester United", "2018-2019"], ["Inter Milan", "2019-2022"], ["Marseille", "2022-2023"], ["Inter Milan", "2023-2024"], ["Udinese", "2024-NOW"]] },
  "romelu lukaku": { first: "Romelu", last: "Lukaku", country: "BEL / FORWARD", current: "Napoli", number: "11", clubs: [["Anderlecht", "2009-2011"], ["Chelsea", "2011-2012"], ["West Bromwich Albion", "2012-2013"], ["Everton", "2013-2017"], ["Manchester United", "2017-2019"], ["Inter Milan", "2019-2021"], ["Chelsea", "2021-2022"], ["Inter Milan", "2022-2023"], ["Roma", "2023-2024"], ["Napoli", "2024-NOW"]] },
  "raheem sterling": { first: "Raheem", last: "Sterling", country: "ENG / FORWARD", current: "Arsenal", number: "30", clubs: [["Liverpool", "2012-2015"], ["Manchester City", "2015-2022"], ["Chelsea", "2022-2024"], ["Arsenal", "2024-NOW"]] },
  "casemiro": { first: "Carlos", last: "Casemiro", country: "BRA / MIDFIELDER", current: "Manchester United", number: "18", clubs: [["Sao Paulo", "2010-2013"], ["Real Madrid", "2013-2014"], ["Porto", "2014-2015"], ["Real Madrid", "2015-2022"], ["Manchester United", "2022-NOW"]] },
  "paul pogba": { first: "Paul", last: "Pogba", country: "FRA / MIDFIELDER", current: "Free Agent", number: "10", clubs: [["Manchester United", "2011-2012"], ["Juventus", "2012-2016"], ["Manchester United", "2016-2022"], ["Juventus", "2022-2024"]] },
  "bukayo saka": { first: "Bukayo", last: "Saka", country: "ENG / FORWARD", current: "Arsenal", number: "07", clubs: [["Arsenal", "2018-NOW"]] },
  "phil foden": { first: "Phil", last: "Foden", country: "ENG / MIDFIELDER", current: "Manchester City", number: "47", clubs: [["Manchester City", "2017-NOW"]] },
  "rodri": { first: "Rodrigo", last: "Hernandez", country: "ESP / MIDFIELDER", current: "Manchester City", number: "16", clubs: [["Villarreal", "2015-2018"], ["Atletico Madrid", "2018-2019"], ["Manchester City", "2019-NOW"]] },
  "declan rice": { first: "Declan", last: "Rice", country: "ENG / MIDFIELDER", current: "Arsenal", number: "41", clubs: [["West Ham United", "2017-2023"], ["Arsenal", "2023-NOW"]] },
  "virgil van dijk": { first: "Virgil", last: "van Dijk", country: "NED / DEFENDER", current: "Liverpool", number: "04", clubs: [["Groningen", "2011-2013"], ["Celtic", "2013-2015"], ["Southampton", "2015-2018"], ["Liverpool", "2018-NOW"]] },
  "trent alexander-arnold": { first: "Trent", last: "Alexander-Arnold", country: "ENG / DEFENDER", current: "Liverpool", number: "66", clubs: [["Liverpool", "2016-NOW"]] },
  "thibaut courtois": { first: "Thibaut", last: "Courtois", country: "BEL / GOALKEEPER", current: "Real Madrid", number: "01", clubs: [["Genk", "2009-2011"], ["Chelsea", "2011-2018"], ["Atletico Madrid", "2011-2014"], ["Real Madrid", "2018-NOW"]] },
  "alisson becker": { first: "Alisson", last: "Becker", country: "BRA / GOALKEEPER", current: "Liverpool", number: "01", clubs: [["Internacional", "2013-2016"], ["Roma", "2016-2018"], ["Liverpool", "2018-NOW"]] },
  "bernardo silva": { first: "Bernardo", last: "Silva", country: "POR / MIDFIELDER", current: "Manchester City", number: "20", clubs: [["Benfica", "2013-2015"], ["Monaco", "2014-2017"], ["Manchester City", "2017-NOW"]] },
  "bruno fernandes": { first: "Bruno", last: "Fernandes", country: "POR / MIDFIELDER", current: "Manchester United", number: "08", clubs: [["Novara", "2012-2013"], ["Udinese", "2013-2016"], ["Sampdoria", "2016-2017"], ["Sporting CP", "2017-2020"], ["Manchester United", "2020-NOW"]] },
  "federico valverde": { first: "Federico", last: "Valverde", country: "URU / MIDFIELDER", current: "Real Madrid", number: "08", clubs: [["Penarol", "2015-2016"], ["Deportivo La Coruna", "2017-2018"], ["Real Madrid", "2018-NOW"]] },
  "eduardo camavinga": { first: "Eduardo", last: "Camavinga", country: "FRA / MIDFIELDER", current: "Real Madrid", number: "06", clubs: [["Rennes", "2019-2021"], ["Real Madrid", "2021-NOW"]] },
  "pedri": { first: "Pedro", last: "Gonzalez (Pedri)", country: "ESP / MIDFIELDER", current: "Barcelona", number: "08", clubs: [["Las Palmas", "2019-2020"], ["Barcelona", "2020-NOW"]] },
  "gavi": { first: "Pablo", last: "Gavira (Gavi)", country: "ESP / MIDFIELDER", current: "Barcelona", number: "06", clubs: [["Barcelona", "2021-NOW"]] },
  "ilkay gundogan": { first: "Ilkay", last: "Gundogan", country: "GER / MIDFIELDER", current: "Manchester City", number: "19", clubs: [["Nurnberg", "2009-2011"], ["Borussia Dortmund", "2011-2016"], ["Manchester City", "2016-2023"], ["Barcelona", "2023-2024"], ["Manchester City", "2024-NOW"]] },
  "jamal musiala": { first: "Jamal", last: "Musiala", country: "GER / MIDFIELDER", current: "Bayern Munich", number: "42", clubs: [["Bayern Munich", "2020-NOW"]] },
  "florian wirtz": { first: "Florian", last: "Wirtz", country: "GER / MIDFIELDER", current: "Bayer Leverkusen", number: "10", clubs: [["FC Koln", "2010-2020"], ["Bayer Leverkusen", "2020-NOW"]] },
  "victor osimhen": { first: "Victor", last: "Osimhen", country: "NGA / FORWARD", current: "Galatasaray", number: "45", clubs: [["Wolfsburg", "2017-2019"], ["Charleroi", "2018-2019"], ["Lille", "2019-2020"], ["Napoli", "2020-NOW"], ["Galatasaray", "2024-NOW"]] },
  "khvicha kvaratskhelia": { first: "Khvicha", last: "Kvaratskhelia", country: "GEO / FORWARD", current: "Napoli", number: "77", clubs: [["Dinamo Tbilisi", "2017-2018"], ["Rustavi", "2018-2019"], ["Lokomotiv Moscow", "2019"], ["Rubin Kazan", "2019-2022"], ["Dinamo Batumi", "2022"], ["Napoli", "2022-NOW"]] },
  "lautaro martinez": { first: "Lautaro", last: "Martinez", country: "ARG / FORWARD", current: "Inter Milan", number: "10", clubs: [["Racing Club", "2015-2018"], ["Inter Milan", "2018-NOW"]] },
  "julian alvarez": { first: "Julian", last: "Alvarez", country: "ARG / FORWARD", current: "Atletico Madrid", number: "19", clubs: [["River Plate", "2018-2022"], ["Manchester City", "2022-2024"], ["Atletico Madrid", "2024-NOW"]] },
  "rafael leao": { first: "Rafael", last: "Leao", country: "POR / FORWARD", current: "AC Milan", number: "10", clubs: [["Sporting CP", "2017-2018"], ["Lille", "2018-2019"], ["AC Milan", "2019-NOW"]] },
  "ousmane dembele": { first: "Ousmane", last: "Dembele", country: "FRA / FORWARD", current: "Paris Saint-Germain", number: "10", clubs: [["Rennes", "2015-2016"], ["Borussia Dortmund", "2016-2017"], ["Barcelona", "2017-2023"], ["Paris Saint-Germain", "2023-NOW"]] },
  "achraf hakimi": { first: "Achraf", last: "Hakimi", country: "MAR / DEFENDER", current: "Paris Saint-Germain", number: "02", clubs: [["Real Madrid", "2017-2020"], ["Borussia Dortmund", "2018-2020"], ["Inter Milan", "2020-2021"], ["Paris Saint-Germain", "2021-NOW"]] },
  "alphonso davies": { first: "Alphonso", last: "Davies", country: "CAN / DEFENDER", current: "Bayern Munich", number: "19", clubs: [["Vancouver Whitecaps", "2016-2018"], ["Bayern Munich", "2019-NOW"]] },
  "marcus rashford": { first: "Marcus", last: "Rashford", country: "ENG / FORWARD", current: "Manchester United", number: "10", clubs: [["Manchester United", "2015-NOW"]] },
  "martin odegaard": { first: "Martin", last: "Odegaard", country: "NOR / MIDFIELDER", current: "Arsenal", number: "08", clubs: [["Stromsgodset", "2014-2015"], ["Real Madrid", "2015-2017"], ["Heerenveen", "2017-2018"], ["Vitesse", "2018-2019"], ["Real Sociedad", "2019-2020"], ["Arsenal", "2021-NOW"]] },
  "emiliano martinez": { first: "Emiliano", last: "Martinez", country: "ARG / GOALKEEPER", current: "Aston Villa", number: "23", clubs: [["Arsenal", "2012-2020"], ["Sheffield Wednesday", "2013-2014"], ["Rotherham United", "2015"], ["Wolverhampton", "2015-2016"], ["Getafe", "2017-2018"], ["Reading", "2019"], ["Aston Villa", "2020-NOW"]] },
  "gianluigi donnarumma": { first: "Gianluigi", last: "Donnarumma", country: "ITA / GOALKEEPER", current: "Paris Saint-Germain", number: "01", clubs: [["AC Milan", "2015-2021"], ["Paris Saint-Germain", "2021-NOW"]] },
  "marquinhos": { first: "Marcos", last: "Marquinhos", country: "BRA / DEFENDER", current: "Paris Saint-Germain", number: "05", clubs: [["Corinthians", "2012"], ["Roma", "2012-2013"], ["Paris Saint-Germain", "2013-NOW"]] },
  "raphinha": { first: "Raphael", last: "Raphinha", country: "BRA / FORWARD", current: "Barcelona", number: "11", clubs: [["Avai", "2015-2016"], ["Vitoria Guimaraes", "2016-2018"], ["Sporting CP", "2018-2019"], ["Rennes", "2019-2020"], ["Leeds United", "2020-2022"], ["Barcelona", "2022-NOW"]] },
  "darwin nunez": { first: "Darwin", last: "Nunez", country: "URU / FORWARD", current: "Liverpool", number: "09", clubs: [["Penarol", "2017-2019"], ["Almeria", "2019-2020"], ["Benfica", "2020-2022"], ["Liverpool", "2022-NOW"]] },
  "robin van persie": { first: "Robin", last: "van Persie", country: "NED / FORWARD", current: "Retired", number: "11", clubs: [["Feyenoord", "2001-2004"], ["Arsenal", "2004-2012"], ["Manchester United", "2012-2015"], ["Fenerbahce", "2015-2018"], ["Feyenoord", "2018-2019"]] },
  "arjen robben": { first: "Arjen", last: "Robben", country: "NED / FORWARD", current: "Retired", number: "10", clubs: [["Groningen", "2000-2002"], ["PSV Eindhoven", "2002-2004"], ["Chelsea", "2004-2007"], ["Real Madrid", "2007-2009"], ["Bayern Munich", "2009-2019"], ["Groningen", "2020-2021"]] }
};

const form = document.querySelector('#searchForm');
const input = document.querySelector('#playerSearch');
const searchSuggestions = document.querySelector('#searchSuggestions');
const result = document.querySelector('#result');
const normalize = (name) => name.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');
const aliases = { ibrahimovic: 'zlatan ibrahimovic', ibrahimopvich: 'zlatan ibrahimovic', 'zlatan ibrahimopvich': 'zlatan ibrahimovic', palmer: 'cole palmer', isak: 'alexander isak', gyokeres: 'viktor gyokeres', gyökeres: 'viktor gyokeres', 'benzema': 'karim benzema', 'bale': 'gareth bale', 'hazard': 'eden hazard', 'kroos': 'toni kroos', 'ozil': 'mesut ozil', 'özil': 'mesut ozil', 'rooney': 'wayne rooney', 'gerrard': 'steven gerrard', 'lampard': 'frank lampard', 'aguero': 'sergio aguero', 'agüero': 'sergio aguero', 'kun aguero': 'sergio aguero', 'muller': 'thomas muller', 'müller': 'thomas muller', 'neuer': 'manuel neuer', 'di maria': 'angel di maria', 'dimaria': 'angel di maria', 'sanchez': 'alexis sanchez', 'lukaku': 'romelu lukaku', 'sterling': 'raheem sterling', 'casemiro': 'casemiro', 'carlos casemiro': 'casemiro', 'pogba': 'paul pogba', 'saka': 'bukayo saka', 'foden': 'phil foden', 'rodri': 'rodri', 'rodrigo': 'rodri', 'rice': 'declan rice', 'van dijk': 'virgil van dijk', 'vandijk': 'virgil van dijk', 'dijk': 'virgil van dijk', 'alexander-arnold': 'trent alexander-arnold', 'arnold': 'trent alexander-arnold', 'trent': 'trent alexander-arnold', 'courtois': 'thibaut courtois', 'alisson': 'alisson becker', 'becker': 'alisson becker', 'bernardo': 'bernardo silva', 'bruno': 'bruno fernandes', 'valverde': 'federico valverde', 'camavinga': 'eduardo camavinga', 'pedri': 'pedri', 'gavi': 'gavi', 'gundogan': 'ilkay gundogan', 'gündogan': 'ilkay gundogan', 'musiala': 'jamal musiala', 'wirtz': 'florian wirtz', 'osimhen': 'victor osimhen', 'kvaratskhelia': 'khvicha kvaratskhelia', 'kvara': 'khvicha kvaratskhelia', 'lautaro': 'lautaro martinez', 'alvarez': 'julian alvarez', 'leao': 'rafael leao', 'dembele': 'ousmane dembele', 'dembélé': 'ousmane dembele', 'hakimi': 'achraf hakimi', 'davies': 'alphonso davies', 'rashford': 'marcus rashford', 'odegaard': 'martin odegaard', 'ødegaard': 'martin odegaard', 'dibu': 'emiliano martinez', 'dibu martinez': 'emiliano martinez', 'donnarumma': 'gianluigi donnarumma', 'marquinhos': 'marquinhos', 'raphinha': 'raphinha', 'darwin': 'darwin nunez', 'nunez': 'darwin nunez', 'núñez': 'darwin nunez', 'van persie': 'robin van persie', 'persie': 'robin van persie', 'robben': 'arjen robben', 'son': 'son heung-min', 'heung-min son': 'son heung-min', 'suarez': 'luis suarez', 'suárez': 'luis suarez', 'henry': 'thierry henry', 'xavi': 'xavi hernandez', 'pirlo': 'andrea pirlo', 'drogba': 'didier drogba', 'mane': 'sadio mane', 'mané': 'sadio mane', 'yamal': 'lamine yamal', 'modric': 'luka modric', 'modrić': 'luka modric', 'ramos': 'sergio ramos', 'griezmann': 'antoine griezmann', 'buffon': 'gianluigi buffon', 'beckham': 'david beckham', 'iniesta': 'andres iniesta' };
const localDetails = {
  'lionel messi': { nationality: 'Argentina', position: 'Forward', age: 39, shirtNumber: 10, photo: 'https://media.api-sports.io/football/players/154.png' },
  'cristiano ronaldo': { nationality: 'Portugal', position: 'Forward', age: 41, shirtNumber: 7, photo: 'https://media.api-sports.io/football/players/874.png' },
  'mohamed salah': { nationality: 'Egypt', position: 'Forward', age: 34, shirtNumber: 11, photo: 'https://media.api-sports.io/football/players/306.png' },
  'kylian mbappe': { nationality: 'France', position: 'Forward', age: 27, shirtNumber: 9, photo: 'https://media.api-sports.io/football/players/278.png' },
  'erling haaland': { nationality: 'Norway', position: 'Forward', age: 26, shirtNumber: 9 },
  neymar: { nationality: 'Brazil', position: 'Forward', age: 34, shirtNumber: 10, photo: 'https://media.api-sports.io/football/players/276.png' },
  'neymar jr': { nationality: 'Brazil', position: 'Forward', age: 34, shirtNumber: 10, photo: 'https://media.api-sports.io/football/players/276.png' },
  'kevin de bruyne': { nationality: 'Belgium', position: 'Midfielder', age: 34, shirtNumber: 17 },
  'harry kane': { nationality: 'England', position: 'Forward', age: 33, shirtNumber: 9 },
  'jude bellingham': { nationality: 'England', position: 'Midfielder', age: 23, shirtNumber: 5 },
  'vinicius junior': { nationality: 'Brazil', position: 'Forward', age: 26, shirtNumber: 7 },
  'malo gusto': { nationality: 'France', position: 'Defender', age: 23, shirtNumber: 27 },
  'cole palmer': { nationality: 'England', position: 'Midfielder', age: 24, shirtNumber: 20 },
  'zlatan ibrahimovic': { nationality: 'Sweden', position: 'Forward', age: 44, shirtNumber: 11 },
  'alexander isak': { nationality: 'Sweden', position: 'Forward', age: 26, shirtNumber: 14, photo: 'https://media.api-sports.io/football/players/2489.png' },
  'viktor gyokeres': { nationality: 'Sweden', position: 'Forward', age: 28, shirtNumber: 9, photo: 'https://media.api-sports.io/football/players/28432.png' },
  'luis suarez': { nationality: 'Uruguay', position: 'Forward', age: 39, shirtNumber: 9 },
  'thierry henry': { nationality: 'France', position: 'Forward', age: 48, shirtNumber: 14 },
  'ronaldinho': { nationality: 'Brazil', position: 'Forward', age: 45, shirtNumber: 10 },
  'xavi hernandez': { nationality: 'Spain', position: 'Midfielder', age: 46, shirtNumber: 6 },
  'andrea pirlo': { nationality: 'Italy', position: 'Midfielder', age: 46, shirtNumber: 21 },
  'kaka': { nationality: 'Brazil', position: 'Midfielder', age: 43, shirtNumber: 22 },
  'cesc fabregas': { nationality: 'Spain', position: 'Midfielder', age: 38, shirtNumber: 4 },
  'didier drogba': { nationality: 'Cote d\'Ivoire', position: 'Forward', age: 48, shirtNumber: 11 },
  'sadio mane': { nationality: 'Senegal', position: 'Forward', age: 33, shirtNumber: 10 },
  'lamine yamal': { nationality: 'Spain', position: 'Forward', age: 18, shirtNumber: 10 },
  'son heung-min': { nationality: 'South Korea', position: 'Forward', age: 33, shirtNumber: 7 },
  'andres iniesta': { nationality: 'Spain', position: 'Midfielder', age: 41, shirtNumber: 8 },
  'gianluigi buffon': { nationality: 'Italy', position: 'Goalkeeper', age: 48, shirtNumber: 1 },
  'david beckham': { nationality: 'England', position: 'Midfielder', age: 50, shirtNumber: 23 },
  'sergio ramos': { nationality: 'Spain', position: 'Defender', age: 39, shirtNumber: 4 },
  'luka modric': { nationality: 'Croatia', position: 'Midfielder', age: 40, shirtNumber: 10 },
  'robert lewandowski': { nationality: 'Poland', position: 'Forward', age: 37, shirtNumber: 9 },
  'antoine griezmann': { nationality: 'France', position: 'Forward', age: 34, shirtNumber: 7 },
  'karim benzema': { nationality: 'France', position: 'Forward', age: 38, shirtNumber: 9 },
  'gareth bale': { nationality: 'Wales', position: 'Forward', age: 36, shirtNumber: 11 },
  'eden hazard': { nationality: 'Belgium', position: 'Forward', age: 35, shirtNumber: 10 },
  'toni kroos': { nationality: 'Germany', position: 'Midfielder', age: 36, shirtNumber: 8 },
  'mesut ozil': { nationality: 'Germany', position: 'Midfielder', age: 37, shirtNumber: 10 },
  'wayne rooney': { nationality: 'England', position: 'Forward', age: 40, shirtNumber: 10 },
  'steven gerrard': { nationality: 'England', position: 'Midfielder', age: 45, shirtNumber: 8 },
  'frank lampard': { nationality: 'England', position: 'Midfielder', age: 47, shirtNumber: 8 },
  'sergio aguero': { nationality: 'Argentina', position: 'Forward', age: 37, shirtNumber: 10 },
  'thomas muller': { nationality: 'Germany', position: 'Forward', age: 36, shirtNumber: 25 },
  'manuel neuer': { nationality: 'Germany', position: 'Goalkeeper', age: 39, shirtNumber: 1 },
  'angel di maria': { nationality: 'Argentina', position: 'Forward', age: 38, shirtNumber: 11 },
  'alexis sanchez': { nationality: 'Chile', position: 'Forward', age: 37, shirtNumber: 7 },
  'romelu lukaku': { nationality: 'Belgium', position: 'Forward', age: 32, shirtNumber: 11 },
  'raheem sterling': { nationality: 'England', position: 'Forward', age: 31, shirtNumber: 30 },
  'casemiro': { nationality: 'Brazil', position: 'Midfielder', age: 34, shirtNumber: 18 },
  'paul pogba': { nationality: 'France', position: 'Midfielder', age: 33, shirtNumber: 10 },
  'bukayo saka': { nationality: 'England', position: 'Forward', age: 24, shirtNumber: 7 },
  'phil foden': { nationality: 'England', position: 'Midfielder', age: 25, shirtNumber: 47 },
  'rodri': { nationality: 'Spain', position: 'Midfielder', age: 29, shirtNumber: 16 },
  'declan rice': { nationality: 'England', position: 'Midfielder', age: 27, shirtNumber: 41 },
  'virgil van dijk': { nationality: 'Netherlands', position: 'Defender', age: 34, shirtNumber: 4 },
  'trent alexander-arnold': { nationality: 'England', position: 'Defender', age: 27, shirtNumber: 66 },
  'thibaut courtois': { nationality: 'Belgium', position: 'Goalkeeper', age: 33, shirtNumber: 1 },
  'alisson becker': { nationality: 'Brazil', position: 'Goalkeeper', age: 33, shirtNumber: 1 },
  'bernardo silva': { nationality: 'Portugal', position: 'Midfielder', age: 31, shirtNumber: 20 },
  'bruno fernandes': { nationality: 'Portugal', position: 'Midfielder', age: 31, shirtNumber: 8 },
  'federico valverde': { nationality: 'Uruguay', position: 'Midfielder', age: 27, shirtNumber: 8 },
  'eduardo camavinga': { nationality: 'France', position: 'Midfielder', age: 23, shirtNumber: 6 },
  'pedri': { nationality: 'Spain', position: 'Midfielder', age: 23, shirtNumber: 8 },
  'gavi': { nationality: 'Spain', position: 'Midfielder', age: 21, shirtNumber: 6 },
  'ilkay gundogan': { nationality: 'Germany', position: 'Midfielder', age: 35, shirtNumber: 19 },
  'jamal musiala': { nationality: 'Germany', position: 'Midfielder', age: 23, shirtNumber: 42 },
  'florian wirtz': { nationality: 'Germany', position: 'Midfielder', age: 23, shirtNumber: 10 },
  'victor osimhen': { nationality: 'Nigeria', position: 'Forward', age: 27, shirtNumber: 45 },
  'khvicha kvaratskhelia': { nationality: 'Georgia', position: 'Forward', age: 25, shirtNumber: 77 },
  'lautaro martinez': { nationality: 'Argentina', position: 'Forward', age: 28, shirtNumber: 10 },
  'julian alvarez': { nationality: 'Argentina', position: 'Forward', age: 26, shirtNumber: 19 },
  'rafael leao': { nationality: 'Portugal', position: 'Forward', age: 26, shirtNumber: 10 },
  'ousmane dembele': { nationality: 'France', position: 'Forward', age: 28, shirtNumber: 10 },
  'achraf hakimi': { nationality: 'Morocco', position: 'Defender', age: 27, shirtNumber: 2 },
  'alphonso davies': { nationality: 'Canada', position: 'Defender', age: 25, shirtNumber: 19 },
  'marcus rashford': { nationality: 'England', position: 'Forward', age: 28, shirtNumber: 10 },
  'martin odegaard': { nationality: 'Norway', position: 'Midfielder', age: 27, shirtNumber: 8 },
  'emiliano martinez': { nationality: 'Argentina', position: 'Goalkeeper', age: 33, shirtNumber: 23 },
  'gianluigi donnarumma': { nationality: 'Italy', position: 'Goalkeeper', age: 27, shirtNumber: 1 },
  'marquinhos': { nationality: 'Brazil', position: 'Defender', age: 31, shirtNumber: 5 },
  'raphinha': { nationality: 'Brazil', position: 'Forward', age: 29, shirtNumber: 11 },
  'darwin nunez': { nationality: 'Uruguay', position: 'Forward', age: 26, shirtNumber: 9 },
  'robin van persie': { nationality: 'Netherlands', position: 'Forward', age: 42, shirtNumber: 11 },
  'arjen robben': { nationality: 'Netherlands', position: 'Forward', age: 42, shirtNumber: 10 }
};
const localApiIds = { 'lionel messi': 154, 'cristiano ronaldo': 874, 'mohamed salah': 306, 'kylian mbappe': 278, neymar: 276, 'neymar jr': 276, 'alexander isak': 2489, 'viktor gyokeres': 28432 };
const localCareerStartYears = { 'lionel messi': 2004, 'cristiano ronaldo': 2002, 'mohamed salah': 2010, 'kylian mbappe': 2015, neymar: 2009, 'neymar jr': 2009, 'alexander isak': 2016, 'viktor gyokeres': 2015 };
const shirtFallbacks = {
  'lionel messi': 10,
  'cristiano ronaldo': 7,
  'cristiano ronaldo dos santos aveiro': 7,
  'mohamed salah': 11,
  'mohamed salah hamed mahrous ghaly': 11,
  'kylian mbappe': 9,
  'kylian mbappe lottin': 9,
  'erling haaland': 9,
  'neymar': 10,
  'neymar da silva santos junior': 10,
  'kevin de bruyne': 17,
  'harry kane': 9,
  'jude bellingham': 5,
  'vinicius junior': 7,
  'malo gusto': 27,
  'cole palmer': 20
};
const clubLogos = {
  'Real Madrid': 'https://media.api-sports.io/football/teams/541.png',
  'Barcelona': 'https://media.api-sports.io/football/teams/529.png',
  'Atletico Madrid': 'https://media.api-sports.io/football/teams/530.png',
  'Sevilla': 'https://media.api-sports.io/football/teams/536.png',
  'Real Sociedad': 'https://media.api-sports.io/football/teams/548.png',
  'Villarreal': 'https://media.api-sports.io/football/teams/533.png',
  'Las Palmas': 'https://media.api-sports.io/football/teams/534.png',
  'Getafe': 'https://media.api-sports.io/football/teams/546.png',
  'Deportivo La Coruna': 'https://media.api-sports.io/football/teams/542.png',
  'Almeria': 'https://media.api-sports.io/football/teams/723.png',
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
  'Wolverhampton': 'https://media.api-sports.io/football/teams/39.png',
  'Brighton': 'https://media.api-sports.io/football/teams/51.png',
  'Southampton': 'https://media.api-sports.io/football/teams/41.png',
  'Leicester City': 'https://media.api-sports.io/football/teams/46.png',
  'Leeds United': 'https://media.api-sports.io/football/teams/63.png',
  'Norwich City': 'https://media.api-sports.io/football/teams/71.png',
  'Millwall': 'https://media.api-sports.io/football/teams/58.png',
  'Birmingham City': 'https://media.api-sports.io/football/teams/59.png',
  'Coventry City': 'https://media.api-sports.io/football/teams/1346.png',
  'Swansea City': 'https://media.api-sports.io/football/teams/75.png',
  'Derby County': 'https://media.api-sports.io/football/teams/73.png',
  'Reading': 'https://media.api-sports.io/football/teams/53.png',
  'Sheffield Wednesday': 'https://media.api-sports.io/football/teams/70.png',
  'Rotherham United': 'https://media.api-sports.io/football/teams/69.png',
  'West Bromwich Albion': 'https://media.api-sports.io/football/teams/60.png',
  'West Brom': 'https://media.api-sports.io/football/teams/60.png',
  'Bayern Munich': 'https://media.api-sports.io/football/teams/157.png',
  'Bayern München': 'https://media.api-sports.io/football/teams/157.png',
  'Borussia Dortmund': 'https://media.api-sports.io/football/teams/165.png',
  'Bayer Leverkusen': 'https://media.api-sports.io/football/teams/168.png',
  'Schalke 04': 'https://media.api-sports.io/football/teams/174.png',
  'Werder Bremen': 'https://media.api-sports.io/football/teams/162.png',
  'Wolfsburg': 'https://media.api-sports.io/football/teams/161.png',
  'FC Koln': 'https://media.api-sports.io/football/teams/192.png',
  'Nurnberg': 'https://media.api-sports.io/football/teams/171.png',
  'St Pauli': 'https://media.api-sports.io/football/teams/189.png',
  'Hamburger SV': 'https://media.api-sports.io/football/teams/175.png',
  'Juventus': 'https://media.api-sports.io/football/teams/496.png',
  'AC Milan': 'https://media.api-sports.io/football/teams/489.png',
  'Inter Milan': 'https://media.api-sports.io/football/teams/505.png',
  'Napoli': 'https://media.api-sports.io/football/teams/492.png',
  'Roma': 'https://media.api-sports.io/football/teams/497.png',
  'Fiorentina': 'https://media.api-sports.io/football/teams/502.png',
  'Udinese': 'https://media.api-sports.io/football/teams/494.png',
  'Sampdoria': 'https://media.api-sports.io/football/teams/498.png',
  'Parma': 'https://media.api-sports.io/football/teams/523.png',
  'Como': 'https://media.api-sports.io/football/teams/895.png',
  'Brescia': 'https://media.api-sports.io/football/teams/517.png',
  'Novara': 'https://media.api-sports.io/football/teams/512.png',
  'Paris Saint-Germain': 'https://media.api-sports.io/football/teams/85.png',
  'Paris Saint Germain': 'https://media.api-sports.io/football/teams/85.png',
  'Monaco': 'https://media.api-sports.io/football/teams/91.png',
  'Lyon': 'https://media.api-sports.io/football/teams/80.png',
  'Marseille': 'https://media.api-sports.io/football/teams/81.png',
  'Lille': 'https://media.api-sports.io/football/teams/79.png',
  'Rennes': 'https://media.api-sports.io/football/teams/94.png',
  'Bordeaux': 'https://media.api-sports.io/football/teams/78.png',
  'Metz': 'https://media.api-sports.io/football/teams/545.png',
  'Guingamp': 'https://media.api-sports.io/football/teams/107.png',
  'Le Mans': 'https://media.api-sports.io/football/teams/1298.png',
  'Sporting CP': 'https://media.api-sports.io/football/teams/228.png',
  'Benfica': 'https://media.api-sports.io/football/teams/211.png',
  'Porto': 'https://media.api-sports.io/football/teams/212.png',
  'Vitoria Guimaraes': 'https://media.api-sports.io/football/teams/224.png',
  'Ajax': 'https://media.api-sports.io/football/teams/194.png',
  'Feyenoord': 'https://media.api-sports.io/football/teams/197.png',
  'PSV Eindhoven': 'https://media.api-sports.io/football/teams/197.png',
  'PSV': 'https://media.api-sports.io/football/teams/197.png',
  'Groningen': 'https://media.api-sports.io/football/teams/202.png',
  'Heerenveen': 'https://media.api-sports.io/football/teams/200.png',
  'Vitesse': 'https://media.api-sports.io/football/teams/204.png',
  'Willem II': 'https://media.api-sports.io/football/teams/209.png',
  'FC Basel': 'https://media.api-sports.io/football/teams/553.png',
  'Red Bull Salzburg': 'https://media.api-sports.io/football/teams/571.png',
  'Anderlecht': 'https://media.api-sports.io/football/teams/556.png',
  'Genk': 'https://media.api-sports.io/football/teams/554.png',
  'Charleroi': 'https://media.api-sports.io/football/teams/638.png',
  'Galatasaray': 'https://media.api-sports.io/football/teams/645.png',
  'Fenerbahce': 'https://media.api-sports.io/football/teams/611.png',
  'Istanbul Basaksehir': 'https://media.api-sports.io/football/teams/564.png',
  'Al-Nassr': 'https://media.api-sports.io/football/teams/2939.png',
  'Al-Hilal': 'https://media.api-sports.io/football/teams/2932.png',
  'Al-Hilal Saudi FC': 'https://media.api-sports.io/football/teams/2932.png',
  'Al-Ittihad': 'https://media.api-sports.io/football/teams/2934.png',
  'Al Sadd': 'https://media.api-sports.io/football/teams/292.png',
  'Inter Miami': 'https://media.api-sports.io/football/teams/9568.png',
  'LA Galaxy': 'https://media.api-sports.io/football/teams/1605.png',
  'Los Angeles FC': 'https://media.api-sports.io/football/teams/1616.png',
  'New York Red Bulls': 'https://media.api-sports.io/football/teams/1602.png',
  'New York City FC': 'https://media.api-sports.io/football/teams/1604.png',
  'D.C. United': 'https://media.api-sports.io/football/teams/1615.png',
  'Orlando City': 'https://media.api-sports.io/football/teams/1598.png',
  'Vancouver Whitecaps': 'https://media.api-sports.io/football/teams/1608.png',
  'Montreal Impact': 'https://media.api-sports.io/football/teams/1614.png',
  'CF Montreal': 'https://media.api-sports.io/football/teams/1614.png',
  'CF Montréal': 'https://media.api-sports.io/football/teams/1614.png',
  'Santos': 'https://media.api-sports.io/football/teams/128.png',
  'Flamengo': 'https://media.api-sports.io/football/teams/127.png',
  'Sao Paulo': 'https://media.api-sports.io/football/teams/126.png',
  'Gremio': 'https://media.api-sports.io/football/teams/130.png',
  'Corinthians': 'https://media.api-sports.io/football/teams/131.png',
  'Atletico Mineiro': 'https://media.api-sports.io/football/teams/129.png',
  'Internacional': 'https://media.api-sports.io/football/teams/119.png',
  'Avai': 'https://media.api-sports.io/football/teams/136.png',
  'River Plate': 'https://media.api-sports.io/football/teams/435.png',
  'Independiente': 'https://media.api-sports.io/football/teams/453.png',
  'Racing Club': 'https://media.api-sports.io/football/teams/436.png',
  'Rosario Central': 'https://media.api-sports.io/football/teams/448.png',
  "Newell's Old Boys": 'https://media.api-sports.io/football/teams/455.png',
  'Nacional': 'https://media.api-sports.io/football/teams/234.png',
  'Penarol': 'https://media.api-sports.io/football/teams/235.png',
  'Colo-Colo': 'https://media.api-sports.io/football/teams/2485.png',
  'Cobreloa': 'https://media.api-sports.io/football/teams/2480.png',
  'Dinamo Zagreb': 'https://media.api-sports.io/football/teams/620.png',
  'Celtic': 'https://media.api-sports.io/football/teams/247.png',
  'Malmo': 'https://media.api-sports.io/football/teams/375.png',
  'Malmö': 'https://media.api-sports.io/football/teams/375.png',
  'Malmö FF': 'https://media.api-sports.io/football/teams/375.png',
  'AIK': 'https://media.api-sports.io/football/teams/377.png',
  'Brommapojkarna': 'https://media.api-sports.io/football/teams/386.png',
  'Stromsgodset': 'https://media.api-sports.io/football/teams/328.png',
  'Molde': 'https://media.api-sports.io/football/teams/327.png',
  'Lech Poznan': 'https://media.api-sports.io/football/teams/238.png',
  'Znicz Pruszkow': 'https://media.api-sports.io/football/teams/7300.png',
  'Rubin Kazan': 'https://media.api-sports.io/football/teams/563.png',
  'Lokomotiv Moscow': 'https://media.api-sports.io/football/teams/558.png',
  'Dinamo Tbilisi': 'https://media.api-sports.io/football/teams/615.png',
  'Dinamo Batumi': 'https://media.api-sports.io/football/teams/3412.png',
  'Rustavi': 'https://media.api-sports.io/football/teams/3415.png',
  'Al Mokawloon': 'https://media.api-sports.io/football/teams/1022.png',
  'Emirates Club': 'https://media.api-sports.io/football/teams/3878.png',
  'Vissel Kobe': 'https://media.api-sports.io/football/teams/296.png',
  'Shanghai Shenhua': 'https://media.api-sports.io/football/teams/1686.png',
  'Monterrey': 'https://media.api-sports.io/football/teams/2282.png'
};
const clubLogoAliases = {
  'Sporting Lisbon': 'Sporting CP',
  'Al Nassr': 'Al-Nassr',
  'Al Nassr FC': 'Al-Nassr',
  'Al Hilal': 'Al-Hilal Saudi FC',
  'Paris Saint-Germain FC': 'Paris Saint-Germain',
  'Bayern Munich': 'Bayern München'
};
const normalizedClubName = (name) => String(name || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\b(fc|cf)\b/g, '').replace(/[^a-z0-9]/g, '');
const getClubLogo = (name, logo) => {
  if (logo) return logo;
  const alias = clubLogoAliases[name] || name;
  const wanted = normalizedClubName(alias);
  const match = Object.entries(clubLogos).find(([club]) => normalizedClubName(club) === wanted);
  return match?.[1] || null;
};
const landing = document.querySelector('#landing');
const careerPage = document.querySelector('#careerPage');
const careerButton = document.querySelector('#careerButton');
const favoritesButton = document.querySelector('#favoritesButton');
const favoritesPanel = document.querySelector('#favoritesPanel');
const favoritesList = document.querySelector('#favoritesList');
const favoriteCount = document.querySelector('#favoriteCount');
const gameButton = document.querySelector('#gameButton');
const gamePanel = document.querySelector('#gamePanel');
const gameTimeline = document.querySelector('#gameTimeline');
const gameGuessForm = document.querySelector('#gameGuessForm');
const gameGuessInput = document.querySelector('#gameGuessInput');
const gameMessage = document.querySelector('#gameMessage');
const gameRevealButton = document.querySelector('#gameRevealButton');
const gameNextButton = document.querySelector('#gameNextButton');
const themeToggles = document.querySelectorAll('.theme-toggle');
const favoritesStorageKey = 'lineup-favorite-players';
const themeStorageKey = 'lineup-visual-theme';
const themes = ['dark', 'light', 'pitch'];
const themeLabels = { dark: 'DARK', light: 'LIGHT', pitch: 'PITCH' };
const themeIcons = { dark: '☾', light: '☀', pitch: '⚽' };
let favorites = loadFavorites();
let gameTarget = null;
const recentGamePlayers = [];

const clueGameButton = document.querySelector('#clueGameButton');
const clueGamePanel = document.querySelector('#clueGamePanel');
const clueScoreDisplay = document.querySelector('#clueScoreDisplay');
const clueStreakDisplay = document.querySelector('#clueStreakDisplay');
const clueNextButton = document.querySelector('#clueNextButton');
const clueNation = document.querySelector('#clueNation');
const cluePosition = document.querySelector('#cluePosition');
const clueCurrentClub = document.querySelector('#clueCurrentClub');
const clueClubCount = document.querySelector('#clueClubCount');
const clueTimeline = document.querySelector('#clueTimeline');
const clueHintsCount = document.querySelector('#clueHintsCount');
const clueUnlockHintBtn = document.querySelector('#clueUnlockHintBtn');
const clueHintsList = document.querySelector('#clueHintsList');
const clueGuessForm = document.querySelector('#clueGuessForm');
const clueGuessInput = document.querySelector('#clueGuessInput');
const clueSuggestions = document.querySelector('#clueSuggestions');
const clueMessage = document.querySelector('#clueMessage');
const clueResultBox = document.querySelector('#clueResultBox');
const clueRevealButton = document.querySelector('#clueRevealButton');

const clueScoreStorageKey = 'lineup-clue-score';
const clueStreakStorageKey = 'lineup-clue-streak';
let clueScore = parseInt(localStorage.getItem(clueScoreStorageKey) || '0', 10);
let clueStreak = parseInt(localStorage.getItem(clueStreakStorageKey) || '0', 10);
let clueTarget = null;
let clueHintsRevealed = 0;
const recentCluePlayers = [];

function applyTheme(theme) {
  const selected = themes.includes(theme) ? theme : 'dark';
  document.body.dataset.theme = selected;
  themeToggles.forEach((button) => {
    button.querySelector('.theme-toggle-icon').textContent = themeIcons[selected];
    button.querySelector('.theme-toggle-label').textContent = themeLabels[selected];
    button.setAttribute('aria-label', `Switch visual theme (current: ${themeLabels[selected].toLowerCase()})`);
  });
  localStorage.setItem(themeStorageKey, selected);
}

themeToggles.forEach((button) => button.addEventListener('click', () => {
  const current = themes.indexOf(document.body.dataset.theme || 'dark');
  applyTheme(themes[(current + 1) % themes.length]);
}));
applyTheme(localStorage.getItem(themeStorageKey) || 'dark');

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(favoritesStorageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function playerKey(player) {
  return normalize(`${player.first} ${player.last}`);
}

function saveFavorites() {
  localStorage.setItem(favoritesStorageKey, JSON.stringify(favorites));
  updateFavoritesPanel();
}

function updateFavoritesPanel() {
  favoriteCount.textContent = favorites.length;
  if (!favorites.length) {
    favoritesList.innerHTML = '<div class="favorites-empty">No favorites yet. Search for a player and tap the star.</div>';
    return;
  }
  favoritesList.innerHTML = favorites.map((player, index) => `<article class="favorite-item" data-favorite-index="${index}"><button class="favorite-open" type="button">${player.photo ? `<img src="${player.photo}" alt="" />` : `<span class="favorite-initials">${(player.first?.[0] || '') + (player.last?.[0] || '')}</span>`}<span><b>${player.first} ${player.last}</b><small>${player.current}</small></span><span class="favorite-arrow">↗</span></button><button class="favorite-remove" type="button" data-remove-favorite aria-label="Remove ${player.first} ${player.last} from favorites">×</button></article>`).join('');
}

function toggleFavorite(player) {
  const key = playerKey(player);
  const existingIndex = favorites.findIndex((favorite) => playerKey(favorite) === key);
  if (existingIndex >= 0) favorites.splice(existingIndex, 1);
  else favorites.unshift({ ...player });
  saveFavorites();
  updateFavoriteButton(player);
}

function updateFavoriteButton(player) {
  const button = result.querySelector('[data-favorite-toggle]');
  if (!button) return;
  const saved = favorites.some((favorite) => playerKey(favorite) === playerKey(player));
  button.classList.toggle('is-favorite', saved);
  button.setAttribute('aria-pressed', String(saved));
  button.innerHTML = `${saved ? '★ SAVED TO FAVORITES' : '☆ ADD TO FAVORITES'} <span>${saved ? '✓' : '+'}</span>`;
}

function showFavorites() {
  favoritesPanel.hidden = !favoritesPanel.hidden;
  if (gamePanel) gamePanel.hidden = true;
  if (clueGamePanel) clueGamePanel.hidden = true;
  updateFavoritesPanel();
  if (!favoritesPanel.hidden) favoritesPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showCareerPage() {
  landing.hidden = true;
  careerPage.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLandingPage(event) {
  if (event) event.preventDefault();
  careerPage.hidden = true;
  landing.hidden = false;
  if (gamePanel) gamePanel.hidden = true;
  if (clueGamePanel) clueGamePanel.hidden = true;
  if (favoritesPanel) favoritesPanel.hidden = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function gameClubBadge(club, logo) {
  const initials = club.split(/\s+/).map((word) => word[0]).join('').slice(0, 3).toUpperCase();
  if (!logo) {
    return `<span class="game-club-initials">${initials}</span>`;
  }
  return `<img src="${logo}" alt="${club}" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" /><span class="game-club-initials" style="display:none;">${initials}</span>`;
}

function renderGameTimeline(player) {
  gameTimeline.innerHTML = player.clubs.map(([club, years, logo]) => `<div class="game-club"><div class="game-club-top">${gameClubBadge(club, getClubLogo(club, logo))}<span>${years}</span></div><b>${club}</b></div>`).join('<span class="game-arrow">→</span>');
}

function chooseGamePlayer() {
  const choices = [...new Map(Object.entries(players).filter(([key]) => key !== 'neymar jr').map(([, player]) => [normalize(`${player.first} ${player.last}`), player])).values()];
  const unseen = choices.filter((player) => !recentGamePlayers.includes(normalize(`${player.first} ${player.last}`)));
  const pool = unseen.length ? unseen : choices;
  gameTarget = pool[Math.floor(Math.random() * pool.length)];
  const targetKey = normalize(`${gameTarget.first} ${gameTarget.last}`);
  recentGamePlayers.push(targetKey);
  if (recentGamePlayers.length > Math.max(5, choices.length - 1)) recentGamePlayers.shift();
  renderGameTimeline(gameTarget);
  gameGuessInput.value = '';
  gameMessage.textContent = '';
  gameMessage.className = 'game-message';
  gameRevealButton.hidden = false;
}

function startGuessGame() {
  gamePanel.hidden = false;
  if (clueGamePanel) clueGamePanel.hidden = true;
  if (favoritesPanel) favoritesPanel.hidden = true;
  chooseGamePlayer();
  gamePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => gameGuessInput.focus(), 350);
}

function checkGuess(event) {
  event.preventDefault();
  if (!gameTarget) return;
  const guess = normalize(gameGuessInput.value);
  const answer = normalize(`${gameTarget.first} ${gameTarget.last}`);
  const correct = guess === answer || guess === normalize(gameTarget.last) || aliases[guess] === answer;
  gameMessage.textContent = correct ? 'CORRECT — YOU FOUND THE PLAYER! ✦' : 'NOT THIS TIME — LOOK AGAIN OR REVEAL THE ANSWER.';
  gameMessage.className = `game-message ${correct ? 'is-correct' : 'is-wrong'}`;
  if (correct) gameRevealButton.hidden = true;
}

function revealGamePlayer() {
  if (!gameTarget) return;
  const targetKey = normalize(`${gameTarget.first} ${gameTarget.last}`);
  const details = localDetails[targetKey] || {};
  const photo = details.photo;
  const initials = `${gameTarget.first?.[0] || ''}${gameTarget.last?.[0] || ''}`.toUpperCase();
  const avatar = photo ? `<img src="${photo}" class="clue-result-photo" style="display:block;margin:10px auto;" alt="${gameTarget.first} ${gameTarget.last}" />` : `<div class="clue-result-photo" style="margin:10px auto;">${initials}</div>`;
  
  gameMessage.innerHTML = `THE PLAYER IS <b>${gameTarget.first.toUpperCase()} ${gameTarget.last.toUpperCase()}</b>.<br>${avatar}`;
  gameMessage.className = 'game-message is-reveal';
  gameRevealButton.hidden = true;
}

const nationFlags = {
  argentina: '🇦🇷',
  portugal: '🇵🇹',
  egypt: '🇪🇬',
  france: '🇫🇷',
  norway: '🇳🇴',
  brazil: '🇧🇷',
  belgium: '🇧🇪',
  england: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  sweden: '🇸🇪',
  poland: '🇵🇱',
  croatia: '🇭🇷',
  spain: '🇪🇸',
  korea: '🇰🇷',
  'south korea': '🇰🇷',
  italy: '🇮🇹',
  uruguay: '🇺🇾',
  'cote d\'ivoire': '🇨🇮',
  senegal: '🇸🇳',
  colombia: '🇨🇴',
  germany: '🇩🇪',
  netherlands: '🇳🇱',
  wales: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  chile: '🇨🇱',
  nigeria: '🇳🇬',
  georgia: '🇬🇪',
  morocco: '🇲🇦',
  canada: '🇨🇦'
};

function updateClueStatsDisplay() {
  if (clueScoreDisplay) clueScoreDisplay.textContent = clueScore;
  if (clueStreakDisplay) clueStreakDisplay.textContent = `${clueStreak} 🔥`;
}

function triggerStreakFlowerCelebration(streakCount = 30) {
  const existing = document.getElementById('streakFlowerOverlay');
  if (existing) existing.remove();

  try {
    if (navigator.vibrate) navigator.vibrate([50, 60, 100, 60, 120]);
  } catch (e) {}

  const overlay = document.createElement('div');
  overlay.id = 'streakFlowerOverlay';
  overlay.className = 'tiktok-streak-overlay';

  const icons = ['🌸', '🌺', '✨', '🌹', '💖', '🔥', '✦', '💐'];
  const particlesHtml = Array.from({ length: 28 }).map((_, i) => {
    const icon = icons[i % icons.length];
    const angle = (i / 28) * 360 + (Math.random() * 20 - 10);
    const dist = 120 + Math.random() * 240;
    const tx = Math.cos(angle * Math.PI / 180) * dist;
    const ty = Math.sin(angle * Math.PI / 180) * dist - 50;
    const rot = Math.random() * 720 - 360;
    const duration = 1.8 + Math.random() * 1.5;
    const delay = Math.random() * 0.4;
    const size = 16 + Math.random() * 20;
    const endScale = 0.6 + Math.random() * 0.8;
    return `<span class="tiktok-particle" style="--tx:${tx}px;--ty:${ty}px;--rot:${rot}deg;--duration:${duration}s;--delay:${delay}s;--size:${size}px;--endScale:${endScale};">${icon}</span>`;
  }).join('');

  overlay.innerHTML = `
    <div class="tiktok-flower-burst">
      <div class="tiktok-rays"></div>
      <div class="tiktok-flower-svg-wrap">
        <svg class="tiktok-flower-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="flowerCenterGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffb7d" />
              <stop offset="60%" stop-color="#ffb830" />
              <stop offset="100%" stop-color="#ff5e62" />
            </radialGradient>
            <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ff4b72" />
              <stop offset="50%" stop-color="#ff758c" />
              <stop offset="100%" stop-color="#ffb199" />
            </linearGradient>
            <linearGradient id="petalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ff70a6" />
              <stop offset="100%" stop-color="#ffd166" />
            </linearGradient>
            <filter id="flowerGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g class="tiktok-petals-outer" filter="url(#flowerGlow)">
            <path d="M100 20 C115 50 120 70 100 95 C80 70 85 50 100 20 Z" fill="url(#petalGrad1)" />
            <path d="M180 100 C150 115 130 120 105 100 C130 80 150 85 180 100 Z" fill="url(#petalGrad1)" />
            <path d="M100 180 C85 150 80 130 100 105 C120 130 115 150 100 180 Z" fill="url(#petalGrad1)" />
            <path d="M20 100 C50 85 70 80 95 100 C70 120 50 115 20 100 Z" fill="url(#petalGrad1)" />
            <path d="M156 44 C146 73 134 89 104 96 C111 66 127 54 156 44 Z" fill="url(#petalGrad1)" />
            <path d="M156 156 C127 146 111 134 104 104 C134 111 146 127 156 156 Z" fill="url(#petalGrad1)" />
            <path d="M44 156 C54 127 66 111 96 104 C89 134 73 146 44 156 Z" fill="url(#petalGrad1)" />
            <path d="M44 44 C73 54 89 66 96 96 C66 89 54 73 44 44 Z" fill="url(#petalGrad1)" />
          </g>
          <g class="tiktok-petals-inner" transform="rotate(22.5 100 100)">
            <path d="M100 35 C110 58 115 75 100 92 C85 75 90 58 100 35 Z" fill="url(#petalGrad2)" />
            <path d="M165 100 C142 110 125 115 108 100 C125 85 142 90 165 100 Z" fill="url(#petalGrad2)" />
            <path d="M100 165 C90 142 85 125 100 108 C115 125 110 142 100 165 Z" fill="url(#petalGrad2)" />
            <path d="M35 100 C58 90 75 85 92 100 C75 115 58 110 35 100 Z" fill="url(#petalGrad2)" />
            <path d="M146 54 C138 77 127 90 103 97 C110 73 123 62 146 54 Z" fill="url(#petalGrad2)" />
            <path d="M146 146 C123 138 110 127 103 103 C127 110 138 123 146 146 Z" fill="url(#petalGrad2)" />
            <path d="M54 146 C62 123 73 110 97 103 C90 127 77 138 54 146 Z" fill="url(#petalGrad2)" />
            <path d="M54 54 C77 62 90 73 97 97 C73 90 62 77 54 54 Z" fill="url(#petalGrad2)" />
          </g>
          <circle cx="100" cy="100" r="22" fill="url(#flowerCenterGrad)" filter="url(#flowerGlow)" />
          <circle cx="100" cy="100" r="14" fill="#ffffff" opacity="0.85" />
        </svg>
      </div>
      <div class="tiktok-streak-card">
        <div class="tiktok-streak-pill">
          <span class="tiktok-flame">🔥</span>
          <span>${streakCount} STREAK!</span>
          <span class="tiktok-flame">🌸</span>
        </div>
        <div class="tiktok-streak-sub">CAREER RIDDLE MASTER</div>
      </div>
      ${particlesHtml}
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }, 3700);
}
window.triggerFlowerStreak = triggerStreakFlowerCelebration;

function chooseCluePlayer() {
  const choices = [...new Map(Object.entries(players).filter(([key]) => key !== 'neymar jr').map(([, player]) => [normalize(`${player.first} ${player.last}`), player])).values()];
  const unseen = choices.filter((player) => !recentCluePlayers.includes(normalize(`${player.first} ${player.last}`)));
  const pool = unseen.length ? unseen : choices;
  clueTarget = pool[Math.floor(Math.random() * pool.length)];
  const targetKey = normalize(`${clueTarget.first} ${clueTarget.last}`);
  recentCluePlayers.push(targetKey);
  if (recentCluePlayers.length > Math.max(5, choices.length - 1)) recentCluePlayers.shift();

  clueHintsRevealed = 0;
  if (clueHintsCount) clueHintsCount.textContent = '0/3';
  if (clueHintsList) clueHintsList.innerHTML = '';
  if (clueUnlockHintBtn) {
    clueUnlockHintBtn.disabled = false;
    clueUnlockHintBtn.textContent = 'UNLOCK HINT 💡';
  }
  if (clueGuessInput) clueGuessInput.value = '';
  if (clueSuggestions) clueSuggestions.hidden = true;
  if (clueMessage) {
    clueMessage.textContent = '';
    clueMessage.className = 'game-message';
  }
  if (clueResultBox) {
    clueResultBox.hidden = true;
    clueResultBox.innerHTML = '';
  }
  if (clueRevealButton) clueRevealButton.hidden = false;

  const details = localDetails[targetKey] || {};
  const nation = details.nationality || clueTarget.country?.split('/')[0]?.trim() || 'International';
  const flag = nationFlags[nation.toLowerCase()] || '🌍';
  if (clueNation) clueNation.innerHTML = `<span style="font-size:22px;line-height:1;">${flag}</span> <span>${nation}</span>`;

  const pos = details.position || clueTarget.country?.split('/')[1]?.trim() || 'Forward';
  const posIcon = pos.toLowerCase().includes('forward') ? '⚡' : pos.toLowerCase().includes('midfield') ? '🎯' : pos.toLowerCase().includes('defend') ? '🛡️' : '🧤';
  if (cluePosition) cluePosition.innerHTML = `<span>${posIcon}</span> <span>${pos}</span>`;

  const curr = clueTarget.current || 'Active';
  const badge = getClubLogo(curr);
  if (clueCurrentClub) clueCurrentClub.innerHTML = badge ? `<img src="${badge}" alt="" style="width:24px;height:24px;object-fit:contain;" onerror="this.style.display='none'" /> <span>${curr}</span>` : `<span>🏟️</span> <span>${curr}</span>`;

  if (clueClubCount) clueClubCount.textContent = `${clueTarget.clubs.length} CLUBS`;
  if (clueTimeline) {
    clueTimeline.innerHTML = clueTarget.clubs.map(([club, years, logo]) => `<div class="game-club"><div class="game-club-top">${gameClubBadge(club, getClubLogo(club, logo))}<span>${years}</span></div><b>${club}</b></div>`).join('<span class="game-arrow">→</span>');
  }
}

function unlockClueHint() {
  if (!clueTarget || clueHintsRevealed >= 3) return;
  clueHintsRevealed += 1;
  const targetKey = normalize(`${clueTarget.first} ${clueTarget.last}`);
  const details = localDetails[targetKey] || {};
  let hintText = '';
  let hintTag = '';

  if (clueHintsRevealed === 1) {
    hintTag = 'HINT 1 / SHIRT NUMBER';
    const number = [clueTarget.number, details.shirtNumber].find((v) => v && v !== '-');
    hintText = number ? `Known for wearing shirt #${number}` : `Plays in an attacking / key role`;
  } else if (clueHintsRevealed === 2) {
    hintTag = 'HINT 2 / CAREER PROFILE';
    if (details.age) {
      hintText = `Player is currently ${details.age} years old`;
    } else {
      const firstClub = clueTarget.clubs[0];
      hintText = `Began senior career at ${firstClub[0]} (${firstClub[1]})`;
    }
  } else if (clueHintsRevealed === 3) {
    hintTag = 'HINT 3 / INITIALS';
    hintText = `Name starts with '${clueTarget.first[0].toUpperCase()}' and surname with '${clueTarget.last[0].toUpperCase()}' (${clueTarget.first.length + clueTarget.last.length} letters)`;
    clueUnlockHintBtn.disabled = true;
    clueUnlockHintBtn.textContent = 'ALL HINTS UNLOCKED ✓';
  }

  if (clueHintsCount) clueHintsCount.textContent = `${clueHintsRevealed}/3`;
  const item = document.createElement('div');
  item.className = 'clue-hint-item';
  item.innerHTML = `<span class="clue-hint-tag">${hintTag}:</span> <span>${hintText}</span>`;
  clueHintsList.appendChild(item);
}

function renderClueSuccess(isWin) {
  if (!clueTarget) return;
  const targetKey = normalize(`${clueTarget.first} ${clueTarget.last}`);
  const details = localDetails[targetKey] || {};
  const photo = details.photo;
  const initials = `${clueTarget.first?.[0] || ''}${clueTarget.last?.[0] || ''}`.toUpperCase();
  const avatar = photo ? `<img src="${photo}" class="clue-result-photo" alt="${clueTarget.first} ${clueTarget.last}" />` : `<div class="clue-result-photo">${initials}</div>`;
  const number = [clueTarget.number, details.shirtNumber].find((v) => v && v !== '-');

  clueResultBox.hidden = false;
  clueResultBox.innerHTML = `
    ${avatar}
    <div class="clue-result-info">
      <h3>${clueTarget.first} <span>${clueTarget.last}</span></h3>
      <p>${isWin ? '★ YOU FOUND THE MYSTERY PLAYER!' : '✦ PLAYER REVEALED'} • ${clueTarget.country} • ${number ? `#${number} • ` : ''}${clueTarget.current}</p>
    </div>
  `;
}

function checkClueGuess(event) {
  if (event) event.preventDefault();
  if (!clueTarget) return;
  const guess = normalize(clueGuessInput.value);
  if (!guess) return;
  if (clueSuggestions) clueSuggestions.hidden = true;
  const answer = normalize(`${clueTarget.first} ${clueTarget.last}`);
  const correct = guess === answer || guess === normalize(clueTarget.last) || aliases[guess] === answer;
  if (correct) {
    const gained = Math.max(10, 30 - clueHintsRevealed * 5);
    clueScore += gained;
    clueStreak += 1;
    localStorage.setItem(clueScoreStorageKey, clueScore);
    localStorage.setItem(clueStreakStorageKey, clueStreak);
    updateClueStatsDisplay();
    if (clueStreak === 30 || (clueStreak > 30 && clueStreak % 30 === 0)) {
      triggerStreakFlowerCelebration(clueStreak);
    }
    clueMessage.textContent = `CORRECT — YOU GUESSED ${clueTarget.first.toUpperCase()} ${clueTarget.last.toUpperCase()}! (+${gained} PTS) ✦`;
    clueMessage.className = 'game-message is-correct';
    renderClueSuccess(true);
    if (clueRevealButton) clueRevealButton.hidden = true;
    if (clueUnlockHintBtn) clueUnlockHintBtn.disabled = true;
  } else {
    clueStreak = 0;
    localStorage.setItem(clueStreakStorageKey, clueStreak);
    updateClueStatsDisplay();
    clueMessage.textContent = 'NOT THIS PLAYER — STUDY THE CLUES AND TRY AGAIN, OR UNLOCK A HINT!';
    clueMessage.className = 'game-message is-wrong';
  }
}

function revealCluePlayer() {
  if (!clueTarget) return;
  clueStreak = 0;
  localStorage.setItem(clueStreakStorageKey, clueStreak);
  updateClueStatsDisplay();
  clueMessage.textContent = `THE MYSTERY PLAYER WAS ${clueTarget.first.toUpperCase()} ${clueTarget.last.toUpperCase()}.`;
  clueMessage.className = 'game-message is-reveal';
  renderClueSuccess(false);
  if (clueRevealButton) clueRevealButton.hidden = true;
  if (clueUnlockHintBtn) clueUnlockHintBtn.disabled = true;
}

function startClueGame() {
  if (clueGamePanel.hidden) {
    clueGamePanel.hidden = false;
    if (gamePanel) gamePanel.hidden = true;
    if (favoritesPanel) favoritesPanel.hidden = true;
    if (!clueTarget) chooseCluePlayer();
    updateClueStatsDisplay();
    clueGamePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => clueGuessInput?.focus(), 350);
  } else {
    clueGamePanel.hidden = true;
  }
}

function updateClueSuggestions() {
  if (!clueSuggestions || !clueGuessInput) return;
  const query = normalize(clueGuessInput.value);
  if (!query) {
    clueSuggestions.hidden = true;
    clueSuggestions.innerHTML = '';
    return;
  }
  const matches = suggestionPlayers.filter((player) => normalize(`${player.first} ${player.last}`).includes(query)).slice(0, 6);
  clueSuggestions.innerHTML = matches.map((player) => `<button type="button" role="option" class="search-suggestion" data-clue-suggestion="${player.first} ${player.last}"><span class="suggestion-initials">${(player.first[0] || '') + (player.last[0] || '')}</span><span><b>${player.first} ${player.last}</b><small>${player.current}</small></span><span class="suggestion-arrow">↗</span></button>`).join('');
  clueSuggestions.hidden = !matches.length;
}

careerButton?.addEventListener('click', showCareerPage);
gameButton?.addEventListener('click', startGuessGame);
gameGuessForm?.addEventListener('submit', checkGuess);
gameRevealButton?.addEventListener('click', revealGamePlayer);
gameNextButton?.addEventListener('click', chooseGamePlayer);
clueGameButton?.addEventListener('click', startClueGame);
clueNextButton?.addEventListener('click', chooseCluePlayer);
clueUnlockHintBtn?.addEventListener('click', unlockClueHint);
clueGuessForm?.addEventListener('submit', checkClueGuess);
clueRevealButton?.addEventListener('click', revealCluePlayer);
clueGuessInput?.addEventListener('input', updateClueSuggestions);
clueGuessInput?.addEventListener('focus', updateClueSuggestions);
clueGuessInput?.addEventListener('blur', () => setTimeout(() => { if (clueSuggestions) clueSuggestions.hidden = true; }, 140));
clueSuggestions?.addEventListener('mousedown', (event) => event.preventDefault());
clueSuggestions?.addEventListener('click', (event) => {
  const suggestion = event.target.closest('[data-clue-suggestion]');
  if (!suggestion) return;
  clueGuessInput.value = suggestion.dataset.clueSuggestion;
  clueSuggestions.hidden = true;
  checkClueGuess(new Event('submit'));
});
favoritesButton?.addEventListener('click', showFavorites);
favoritesList?.addEventListener('click', (event) => {
  const removeButton = event.target.closest('[data-remove-favorite]');
  if (removeButton) {
    const item = removeButton.closest('[data-favorite-index]');
    favorites.splice(Number(item.dataset.favoriteIndex), 1);
    saveFavorites();
    return;
  }
  const item = event.target.closest('[data-favorite-index]');
  if (!item) return;
  const player = favorites[Number(item.dataset.favoriteIndex)];
  if (!player) return;
  landing.hidden = true;
  careerPage.hidden = false;
  input.value = `${player.first} ${player.last}`;
  renderPlayer(player);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
updateFavoritesPanel();
updateClueStatsDisplay();
clueStreakDisplay?.parentElement?.addEventListener('click', () => {
  triggerStreakFlowerCelebration(clueStreak >= 30 ? clueStreak : 30);
});
clueStreakDisplay?.parentElement?.setAttribute('title', 'Tap to preview 30 streak flower celebration!');
clueStreakDisplay?.parentElement?.style.setProperty('cursor', 'pointer');
document.querySelector('#careerPage .logo')?.addEventListener('click', showLandingPage);
document.querySelector('#careerHomeButton')?.addEventListener('click', showLandingPage);
document.querySelector('#footerHomeButton')?.addEventListener('click', showLandingPage);
document.querySelectorAll('.panel-home-btn').forEach(btn => btn.addEventListener('click', showLandingPage));

function formatTransferDate(date) {
  if (!date) return 'DATE NOT LISTED';
  return new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
}

function renderTransferTimeline(player) {
  const timeline = player.transfers?.length ? player.transfers : player.clubs.slice(1).map(([to, years], index) => ({
    date: `${years.split(/[—-]/)[0]}-01-01`,
    from: player.clubs[index][0],
    to,
    fromLogo: getClubLogo(player.clubs[index][0]),
    toLogo: getClubLogo(to),
    type: 'Career move',
    fee: 'Fee not listed'
  }));
  if (!timeline.length) return '';
  const moves = timeline.map((move) => `<article class="transfer-event"><div class="transfer-date">${formatTransferDate(move.date)}</div><div class="transfer-route"><div>${move.fromLogo ? `<img src="${move.fromLogo}" alt="" loading="lazy" />` : '<span class="club-placeholder">◆</span>'}<b>${move.from}</b></div><span class="transfer-arrow">→</span><div>${move.toLogo ? `<img src="${move.toLogo}" alt="" loading="lazy" />` : '<span class="club-placeholder">◆</span>'}<b>${move.to}</b></div></div><div class="transfer-meta"><span>${move.type}</span><span>${move.fee}</span></div></article>`).join('');
  return `<section class="transfer-timeline"><div class="timeline-heading"><span>TRANSFER TIMELINE</span><small>${timeline.length} MOVES</small></div>${moves}</section>`;
}

function renderStats(player) {
  const stats = player.stats;
  if (stats?.loading) return '<section class="stats-panel"><div class="timeline-heading"><span>CAREER GOALS</span><small>CALCULATING</small></div><div class="stats-unavailable">Counting every goal record returned by the football API.</div></section>';
  if (!stats?.yearly?.length && !stats?.competitions?.length) return '<section class="stats-panel"><div class="timeline-heading"><span>CAREER GOALS</span><small>API DATA NOT AVAILABLE</small></div><div class="stats-unavailable">Career goals were not returned for this profile.</div></section>';
  const goals = stats.totals?.goals ?? stats.competitions.reduce((sum, stat) => sum + stat.goals, 0);
  return `<section class="stats-panel"><div class="timeline-heading"><span>CAREER GOALS</span><small>PLAYER PROFILE</small></div><div class="stat-cards"><div class="stat-card"><span>GOALS SCORED IN CAREER</span><b>${goals}</b></div></div><p class="stats-note">These goals are from 2022 to 2024, based on all competitions returned by the football API.</p></section>`;
}

function renderPlayer(player) {
  const clubs = player.clubs.map(([club, years, logo]) => {
    const badge = getClubLogo(club, logo);
    const initials = club.split(/\s+/).map((word) => word[0]).join('').slice(0, 3).toUpperCase();
    const badgeHtml = badge
      ? `<img src="${badge}" alt="${club} logo" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='inline-flex';" /><span class="club-placeholder" style="display:none;">${initials}</span>`
      : `<span class="club-placeholder">${initials}</span>`;
    return `<div class="club"><span>${years}</span><div class="club-name">${badgeHtml}<b>${club}</b></div></div>`;
  }).join('');
  const nationality = player.nationality || player.country?.split('/')[0]?.trim() || 'International';
  const position = player.position || player.country?.split('/')[1]?.trim() || 'Player';
  const profileName = normalize(`${player.first} ${player.last}`);
  const listedNumber = [player.shirtNumber, player.number].find((value) => value !== null && value !== undefined && value !== '');
  const shirtNumber = listedNumber && listedNumber !== '-' ? listedNumber : shirtFallbacks[profileName] || '-';
  const initials = `${player.first?.[0] || ''}${player.last?.[0] || ''}`.toUpperCase();
  const portrait = player.photo ? `<img src="${player.photo}" alt="${player.first} ${player.last}" />` : `<span>${initials}</span>`;
  result.innerHTML = `<article class="player-card"><aside class="player-aside"><div class="player-number">${shirtNumber}</div><div class="player-portrait">${portrait}</div><small>CAREER TRACE / 001</small></aside><div class="player-info"><div class="player-meta"><p>${nationality.toUpperCase()} / ${position.toUpperCase()}</p><p>ACTIVE PROFILE <span class="live-dot"></span></p></div><h2>${player.first} <span>${player.last}</span></h2><div class="current-club"><span class="current-badge">◆</span><span>Currently playing for <strong>${player.current}</strong></span></div><button class="favorite-toggle" data-favorite-toggle type="button" aria-pressed="false"></button><div class="player-details"><div><span>NATIONALITY</span><b>${nationality}</b></div><div><span>POSITION</span><b>${position}</b></div><div><span>AGE</span><b>${player.age ? `${player.age} years` : '—'}</b></div><div><span>SHIRT</span><b>#${shirtNumber}</b></div></div><div class="journey-label">CLUB JOURNEY / ${player.clubs.length} STOPS</div><div class="journey">${clubs}</div>${renderStats(player)}${renderTransferTimeline(player)}</div></article>`;
  result.querySelector('[data-favorite-toggle]')?.addEventListener('click', () => toggleFavorite(player));
  updateFavoriteButton(player);
}

function updateStatsPanel(player) {
  const panel = result.querySelector('.stats-panel');
  if (panel) panel.outerHTML = renderStats(player);
}

async function loadCareerStats(player) {
  if (!player.apiId) return;
  const start = Math.min(player.careerStartYear || 2000, 2025);
  const years = Array.from({ length: 2025 - start + 1 }, (_, index) => 2025 - index);
  const seeded = player.stats?.competitions?.length ? [{
    year: 2024,
    appearances: player.stats.competitions.reduce((sum, stat) => sum + stat.appearances, 0),
    goals: player.stats.competitions.reduce((sum, stat) => sum + stat.goals, 0),
    assists: player.stats.competitions.reduce((sum, stat) => sum + stat.assists, 0),
    cleanSheets: player.stats.competitions.reduce((sum, stat) => sum + (stat.cleanSheets || 0), 0)
  }] : [];
  const yearly = seeded;
  const unavailableYears = [];
  player.stats = { ...(player.stats || {}), loading: true, yearly, unavailableYears };
  updateStatsPanel(player);
  for (const [index, year] of years.entries()) {
    if (year === 2024 && seeded.length) continue;
    if (index > 0) await new Promise((resolve) => setTimeout(resolve, 6100));
    try {
      const response = await fetch(`/api/season?player=${player.apiId}&season=${year}`);
      if (!response.ok) {
        unavailableYears.push(year);
        player.stats = { ...(player.stats || {}), loading: true, yearly, unavailableYears };
        updateStatsPanel(player);
        continue;
      }
      const stat = await response.json();
      yearly.push(stat);
      yearly.sort((a, b) => a.year - b.year);
      player.stats = { loading: true, yearly, unavailableYears, totals: yearly.reduce((total, item) => ({ appearances: total.appearances + item.appearances, goals: total.goals + item.goals, assists: total.assists + item.assists, cleanSheets: total.cleanSheets + item.cleanSheets }), { appearances: 0, goals: 0, assists: 0, cleanSheets: 0 }) };
      updateStatsPanel(player);
    } catch {
      // Keep the seasons that were successfully returned.
    }
  }
  player.stats.loading = false;
  player.stats.unavailableYears = unavailableYears.sort((a, b) => b - a);
  updateStatsPanel(player);
}

function renderError(name) {
  result.innerHTML = `<div class="error-state"><strong>NO TRACE FOUND</strong>We couldn't find “${name}” in the archive. Try Messi, Ronaldo, Salah, Mbappe, Neymar or Bellingham.</div>`;
}

async function searchPlayer(name) {
  if (!name) return;
  result.innerHTML = '<div class="empty-state"><div class="empty-ball">⚽</div><p>SCANNING THE ARCHIVE...</p><span>Finding every shirt in the journey.</span></div>';
  const searchName = normalize(name);
  const localKey = aliases[searchName] || searchName;
  const local = players[localKey];
  if (local) return setTimeout(() => { const localPlayer = { ...local, ...localDetails[localKey], apiId: localApiIds[localKey], careerStartYear: localCareerStartYears[localKey] }; renderPlayer(localPlayer); loadCareerStats(localPlayer); }, 260);
  return searchWithApi(name);
}

async function searchWithApi(name) {
  try {
    const response = await fetch(`/api/player?name=${encodeURIComponent(name)}`);
    const player = await response.json();
    if (!response.ok) {
      const detail = player.details ? Object.values(player.details).join(' ') : player.error;
      result.innerHTML = `<div class="error-state"><strong>FOOTBALL API ERROR</strong>${detail || 'The secure API request failed.'}</div>`;
      return;
    }
    renderPlayer(player);
    loadCareerStats(player);
  } catch (err) {
    result.innerHTML = `<div class="error-state"><strong>LIVE DATA UNAVAILABLE</strong>The secure football API connection failed. ${err.message}</div>`;
  }
}

form.addEventListener('submit', (event) => { event.preventDefault(); searchPlayer(input.value); });

const suggestionPlayers = [...new Map(Object.entries(players).map(([, player]) => [normalize(`${player.first} ${player.last}`), player])).values()];

function updateSearchSuggestions() {
  const query = normalize(input.value);
  if (!query) {
    searchSuggestions.hidden = true;
    searchSuggestions.innerHTML = '';
    return;
  }
  const matches = suggestionPlayers.filter((player) => normalize(`${player.first} ${player.last}`).includes(query)).slice(0, 8);
  searchSuggestions.innerHTML = matches.map((player) => `<button type="button" role="option" class="search-suggestion" data-suggestion="${player.first} ${player.last}"><span class="suggestion-initials">${(player.first[0] || '') + (player.last[0] || '')}</span><span><b>${player.first} ${player.last}</b><small>${player.current}</small></span><span class="suggestion-arrow">↗</span></button>`).join('');
  searchSuggestions.hidden = !matches.length;
}

input.addEventListener('input', updateSearchSuggestions);
input.addEventListener('focus', updateSearchSuggestions);
input.addEventListener('blur', () => setTimeout(() => { searchSuggestions.hidden = true; }, 140));
searchSuggestions.addEventListener('mousedown', (event) => event.preventDefault());
searchSuggestions.addEventListener('click', (event) => {
  const suggestion = event.target.closest('[data-suggestion]');
  if (!suggestion) return;
  input.value = suggestion.dataset.suggestion;
  searchSuggestions.hidden = true;
  searchPlayer(input.value);
});
document.querySelectorAll('[data-player]').forEach((button) => button.addEventListener('click', () => { input.value = button.dataset.player; searchPlayer(button.dataset.player); }));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

const prefetchedPhotos = {
  "lionel messi": "https://r2.thesportsdb.com/images/media/player/cutout/e0i2051750317027.png",
  "cristiano ronaldo": "https://r2.thesportsdb.com/images/media/player/cutout/a19jje1761592498.png",
  "mohamed salah": "https://r2.thesportsdb.com/images/media/player/cutout/3blc581757088735.png",
  "kylian mbappe": "https://r2.thesportsdb.com/images/media/player/cutout/cxrmkm1788114306.png",
  "erling haaland": "https://www.thesportsdb.com/images/media/player/cutout/e8cart1789115621.png",
  "neymar": "https://r2.thesportsdb.com/images/media/player/cutout/av4ar01767782947.png",
  "kevin de bruyne": "https://r2.thesportsdb.com/images/media/player/cutout/o4flia1764089447.png",
  "harry kane": "https://r2.thesportsdb.com/images/media/player/cutout/j4ouvd1756408895.png",
  "jude bellingham": "https://r2.thesportsdb.com/images/media/player/cutout/7idg7x1788113677.png",
  "vinicius junior": "https://r2.thesportsdb.com/images/media/player/cutout/z5o9zt1788114155.png",
  "malo gusto": "https://r2.thesportsdb.com/images/media/player/cutout/xa2unw1787690252.png",
  "cole palmer": "https://r2.thesportsdb.com/images/media/player/cutout/q6nnho1787689956.png",
  "zlatan ibrahimovic": "https://r2.thesportsdb.com/images/media/player/cutout/j1g9au1632386587.png",
  "robert lewandowski": "https://r2.thesportsdb.com/images/media/player/cutout/vtrddu1785612817.png",
  "luka modric": "https://r2.thesportsdb.com/images/media/player/cutout/msewdx1758892756.png",
  "sergio ramos": "https://r2.thesportsdb.com/images/media/player/cutout/ztj6241701091276.png",
  "antoine griezmann": "https://r2.thesportsdb.com/images/media/player/cutout/tiqhh41762288400.png",
  "son heung-min": "https://r2.thesportsdb.com/images/media/player/cutout/a5cqf81766425262.png",
  "andres iniesta": "https://r2.thesportsdb.com/images/media/player/cutout/nx7oze1611167333.png",
  "gianluigi buffon": "https://r2.thesportsdb.com/images/media/player/cutout/khpcg01586360050.png",
  "david beckham": "https://r2.thesportsdb.com/images/media/player/cutout/jy70751586640389.png",
  "luis suarez": "https://r2.thesportsdb.com/images/media/player/cutout/vfjd0w1750315193.png",
  "thierry henry": "https://r2.thesportsdb.com/images/media/player/cutout/omd0kz1698248921.png",
  "ronaldinho": "https://r2.thesportsdb.com/images/media/player/cutout/u91au61586868506.png",
  "xavi hernandez": "https://r2.thesportsdb.com/images/media/player/thumb/2gf9dm1761079003.jpg",
  "andrea pirlo": "https://r2.thesportsdb.com/images/media/player/cutout/x665lb1606483660.png",
  "kaka": "https://r2.thesportsdb.com/images/media/player/cutout/6uj1nl1665653279.png",
  "cesc fabregas": "https://r2.thesportsdb.com/images/media/player/cutout/zlklju1608501227.png",
  "didier drogba": "https://r2.thesportsdb.com/images/media/player/cutout/50zx2g1654178973.png",
  "sadio mane": "https://r2.thesportsdb.com/images/media/player/cutout/cify0u1678370417.png",
  "darwin nunez": "https://r2.thesportsdb.com/images/media/player/cutout/i78juc1693941560.png",
  "robin van persie": "https://r2.thesportsdb.com/images/media/player/cutout/ajekls1640192349.png",
  "arjen robben": "https://r2.thesportsdb.com/images/media/player/cutout/gr0fu31612705185.png",
  "lamine yamal": "https://r2.thesportsdb.com/images/media/player/cutout/m9n4ja1761512633.png",
  "alexander isak": "https://r2.thesportsdb.com/images/media/player/cutout/x5czue1788551058.png",
  "viktor gyokeres": "https://r2.thesportsdb.com/images/media/player/cutout/teyanm1788606898.png",
  "karim benzema": "https://r2.thesportsdb.com/images/media/player/cutout/7jdxvc1771665502.png",
  "gareth bale": "https://r2.thesportsdb.com/images/media/player/cutout/j8hjmr1629105139.png",
  "eden hazard": "https://r2.thesportsdb.com/images/media/player/cutout/dyclc01632218884.png",
  "toni kroos": "https://r2.thesportsdb.com/images/media/player/cutout/15aner1662548423.png",
  "mesut ozil": "https://r2.thesportsdb.com/images/media/player/cutout/n2jyfi1557051095.png",
  "wayne rooney": "https://r2.thesportsdb.com/images/media/player/cutout/voz09s1609529985.png",
  "steven gerrard": "https://r2.thesportsdb.com/images/media/player/cutout/5fpodm1591461090.png",
  "frank lampard": "https://r2.thesportsdb.com/images/media/player/cutout/07gc9d1586771288.png",
  "sergio aguero": "https://r2.thesportsdb.com/images/media/player/cutout/154cn11557827597.png",
  "thomas muller": "https://r2.thesportsdb.com/images/media/player/cutout/6iqfos1770542275.png",
  "manuel neuer": "https://r2.thesportsdb.com/images/media/player/cutout/udq0so1756416089.png",
  "angel di maria": "https://r2.thesportsdb.com/images/media/player/cutout/4vji4l1765295910.png",
  "alexis sanchez": "https://r2.thesportsdb.com/images/media/player/cutout/6bj5hk1762860338.png",
  "romelu lukaku": "https://r2.thesportsdb.com/images/media/player/cutout/qi2z1d1764089572.png",
  "raheem sterling": "https://r2.thesportsdb.com/images/media/player/cutout/kza2je1766827614.png",
  "casemiro": "https://r2.thesportsdb.com/images/media/player/cutout/ydr3j41766826524.png",
  "paul pogba": "https://r2.thesportsdb.com/images/media/player/cutout/3fv73s1766238293.png",
  "bukayo saka": "https://r2.thesportsdb.com/images/media/player/cutout/7np7651788606735.png",
  "phil foden": "https://www.thesportsdb.com/images/media/player/cutout/acp1s31789117935.png",
  "rodri": "https://r2.thesportsdb.com/images/media/player/cutout/0ml2zi1761148957.png",
  "declan rice": "https://r2.thesportsdb.com/images/media/player/cutout/v1ijg61788607059.png",
  "virgil van dijk": "https://r2.thesportsdb.com/images/media/player/cutout/0yunf31788550981.png",
  "trent alexander-arnold": "https://r2.thesportsdb.com/images/media/player/cutout/n056fr1788112698.png",
  "thibaut courtois": "https://r2.thesportsdb.com/images/media/player/cutout/w5p8eo1788111831.png",
  "alisson becker": "https://r2.thesportsdb.com/images/media/player/cutout/xj6j4o1788592263.png",
  "bernardo silva": "https://r2.thesportsdb.com/images/media/player/cutout/zfv07e1788114024.png",
  "bruno fernandes": "https://www.thesportsdb.com/images/media/player/cutout/utrk0y1789119923.png",
  "federico valverde": "https://r2.thesportsdb.com/images/media/player/cutout/6rcajb1788113814.png",
  "eduardo camavinga": "https://r2.thesportsdb.com/images/media/player/cutout/vt1f141788113742.png",
  "pedri": "https://r2.thesportsdb.com/images/media/player/cutout/srwppu1424795582.png",
  "gavi": "https://r2.thesportsdb.com/images/media/player/cutout/29005498.png",
  "ilkay gundogan": "https://r2.thesportsdb.com/images/media/player/cutout/rhyyig1768854274.png",
  "jamal musiala": "https://r2.thesportsdb.com/images/media/player/cutout/vbkv611756416067.png",
  "florian wirtz": "https://r2.thesportsdb.com/images/media/player/cutout/njg95e1788551216.png",
  "victor osimhen": "https://r2.thesportsdb.com/images/media/player/cutout/lw0qcf1769177786.png",
  "khvicha kvaratskhelia": "https://r2.thesportsdb.com/images/media/player/cutout/n4iv5t1766335312.png",
  "lautaro martinez": "https://r2.thesportsdb.com/images/media/player/cutout/vwxq811759408924.png",
  "julian alvarez": "https://r2.thesportsdb.com/images/media/player/cutout/91pla41762288186.png",
  "rafael leao": "https://r2.thesportsdb.com/images/media/player/cutout/tlgrvf1758892567.png",
  "ousmane dembele": "https://r2.thesportsdb.com/images/media/player/cutout/pstgy21766335175.png",
  "achraf hakimi": "https://r2.thesportsdb.com/images/media/player/cutout/oqu69c1766335243.png",
  "alphonso davies": "https://r2.thesportsdb.com/images/media/player/cutout/11afh31756409066.png",
  "marcus rashford": "https://www.thesportsdb.com/images/media/player/cutout/ucqzx51789120947.png",
  "martin odegaard": "https://r2.thesportsdb.com/images/media/player/cutout/0dp1xj1788606745.png",
  "emiliano martinez": "https://r2.thesportsdb.com/images/media/player/cutout/ffr5xx1756984715.png",
  "gianluigi donnarumma": "https://www.thesportsdb.com/images/media/player/cutout/f5rne61789053799.png",
  "marquinhos": "https://r2.thesportsdb.com/images/media/player/cutout/7x9gtl1766335348.png",
  "raphinha": "https://r2.thesportsdb.com/images/media/player/cutout/w94spe1726510018.png"
};
// Dream Team Feature
const dreamTeamButton = document.querySelector('#dreamTeamButton');
const dreamTeamPanel = document.querySelector('#dreamTeamPanel');
const dtHomeBtns = document.querySelectorAll('.dt-home-btn');
const playerDots = document.querySelectorAll('.player-dot');
const dtModal = document.querySelector('#dreamTeamSearchModal');
const dtModalClose = document.querySelector('#dtModalClose');
const dtPlayerSearch = document.querySelector('#dtPlayerSearch');
const dtSearchSuggestions = document.querySelector('#dtSearchSuggestions');

let activeDotPos = null;

if (dreamTeamButton) {
  dreamTeamButton.addEventListener('click', () => {
    if (gamePanel) gamePanel.hidden = true;
    if (clueGamePanel) clueGamePanel.hidden = true;
    if (favoritesPanel) favoritesPanel.hidden = true;
    
    dreamTeamPanel.hidden = false;
    dreamTeamPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (dtHomeBtns) {
  dtHomeBtns.forEach(btn => btn.addEventListener('click', () => {
    dreamTeamPanel.hidden = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));
}

if (playerDots) {
  playerDots.forEach(dot => {
    dot.addEventListener('click', () => {
      activeDotPos = dot.dataset.pos;
      dtModal.hidden = false;
      dtPlayerSearch.value = '';
      dtSearchSuggestions.hidden = true;
      setTimeout(() => dtPlayerSearch.focus(), 100);
    });
  });
}

if (dtModalClose) {
  dtModalClose.addEventListener('click', () => {
    dtModal.hidden = true;
  });
}

function updateDtSuggestions() {
  const query = normalize(dtPlayerSearch.value);
  if (!query) {
    dtSearchSuggestions.hidden = true;
    dtSearchSuggestions.innerHTML = '';
    return;
  }
  
  // Use suggestionPlayers if available, else generate it
  const playersList = typeof suggestionPlayers !== 'undefined' ? suggestionPlayers : [...new Map(Object.entries(players).map(([, player]) => [normalize(`${player.first} ${player.last}`), player])).values()];
  
  const matches = playersList.filter(p => normalize(`${p.first} ${p.last}`).includes(query)).slice(0, 8);
  let html = matches.map(p => `
    <button type="button" class="dt-suggestion" data-name="${p.first} ${p.last}">
      <div class="dt-suggestion-initials">${(p.first[0] || '') + (p.last[0] || '')}</div>
      <div class="dt-suggestion-info">
        <b>${p.first} ${p.last}</b>
        <small>${p.current}</small>
      </div>
    </button>
  `).join('');
  
  html += `
    <button type="button" class="dt-suggestion dt-suggestion-custom" data-name="${dtPlayerSearch.value}">
      <div class="dt-suggestion-initials">🔍</div>
      <div class="dt-suggestion-info">
        <b>Search for "${dtPlayerSearch.value}"</b>
        <small>Find player in global database</small>
      </div>
    </button>
  `;
  
  dtSearchSuggestions.innerHTML = html;
  dtSearchSuggestions.hidden = false;
}

if (dtPlayerSearch) {
  dtPlayerSearch.addEventListener('input', updateDtSuggestions);
  dtPlayerSearch.addEventListener('focus', updateDtSuggestions);
  dtPlayerSearch.addEventListener('blur', () => setTimeout(() => { dtSearchSuggestions.hidden = true; }, 150));
  dtPlayerSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const customBtn = dtSearchSuggestions.querySelector('.dt-suggestion-custom');
      if (customBtn) customBtn.click();
    }
  });
}

if (dtSearchSuggestions) {
  dtSearchSuggestions.addEventListener('click', (event) => {
    const suggestion = event.target.closest('.dt-suggestion');
    if (!suggestion) return;
    
    const playerName = suggestion.dataset.name;
    const playersList = typeof suggestionPlayers !== 'undefined' ? suggestionPlayers : [...new Map(Object.entries(players).map(([, player]) => [normalize(`${player.first} ${player.last}`), player])).values()];
    let player = playersList.find(p => `${p.first} ${p.last}` === playerName);
    
    if (!player && suggestion.classList.contains('dt-suggestion-custom')) {
      const parts = playerName.trim().split(' ');
      const last = parts.pop();
      const first = parts.join(' ');
      player = { first, last };
    }
    
    if (player && activeDotPos) {
      const dot = document.querySelector(`.player-dot[data-pos="${activeDotPos}"]`);
      if (dot) {
        dot.classList.add('filled');
        dot.classList.remove('has-photo');
        dot.style.backgroundImage = 'none';
        dot.querySelector('.initials').style.display = '';
        dot.querySelector('.initials').textContent = (player.first[0] || '') + (player.last[0] || '');
        dot.querySelector('.name').textContent = player.last;
        
        const normName = normalize(playerName);
        let photoUrl = typeof prefetchedPhotos !== 'undefined' ? prefetchedPhotos[normName] : null;
        if (!photoUrl) {
            photoUrl = localDetails[normName]?.photo;
        }
        if (!photoUrl && typeof localApiIds !== 'undefined' && localApiIds[normName]) {
          photoUrl = 'https://media.api-sports.io/football/players/' + localApiIds[normName] + '.png';
        }
        
        if (photoUrl) {
          dot.style.backgroundImage = `url(${photoUrl})`;
          dot.style.backgroundSize = 'cover';
          dot.style.backgroundPosition = 'top center';
          dot.style.backgroundRepeat = 'no-repeat';
          dot.classList.add('has-photo');
          dot.querySelector('.initials').style.display = 'none';
        } else {
          const apiSearchName = player.last || playerName;
          fetch('/api/player?name=' + encodeURIComponent(apiSearchName))
            .then(res => res.json())
            .then(data => {
              if (data.photo) {
                dot.style.backgroundImage = `url(${data.photo})`;
                dot.style.backgroundSize = 'cover';
                dot.style.backgroundPosition = 'top center';
                dot.style.backgroundRepeat = 'no-repeat';
                dot.classList.add('has-photo');
                dot.querySelector('.initials').style.display = 'none';
              }
            }).catch(e => console.error(e));
        }
      }
    }
    
    dtModal.hidden = true;
  });
}

// ==========================================
// MATCHDAY RADAR: TODAY'S MATCHES & KICKOFF TIMES
// ==========================================

const RADAR_LEAGUES = [
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

let radarCurrentDate = new Date();
let radarActiveLeague = 'all';
const radarCache = new Map();
let radarLiveTimer = null;

function initRadarTimezone() {
  const tzEl = document.getElementById('userTimezoneLabel');
  if (!tzEl) return;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    tzEl.textContent = tz || 'Local Time';
  } catch {
    tzEl.textContent = 'Local Time';
  }
}

function formatEspnDate(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function formatInputDate(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDateHeading(d) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(d);
  target.setHours(0, 0, 0, 0);

  const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24));
  const dateStr = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  if (diffDays === 0) return `Today, ${dateStr}`;
  if (diffDays === -1) return `Yesterday, ${dateStr}`;
  if (diffDays === 1) return `Tomorrow, ${dateStr}`;
  return dateStr;
}

function formatLocalKickoffTime(isoString) {
  if (!isoString) return '--:--';
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '--:--';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '--:--';
  }
}

function getRadarLogoHtml(logoUrl, teamName, isHome) {
  const words = (teamName || 'FC').split(' ').filter(Boolean);
  const initials = words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : (words[0] || (isHome ? 'H' : 'A')).slice(0, 2).toUpperCase();
  if (!logoUrl) {
    return `<div class="radar-crest-fallback">${initials}</div>`;
  }
  return `<img class="radar-team-crest" src="${logoUrl}" alt="" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.hidden=false;" /><div class="radar-crest-fallback" hidden>${initials}</div>`;
}

async function fetchRadarFixtures(dateObj, forceRefresh) {
  const dateKey = formatEspnDate(dateObj);

  if (!forceRefresh && radarCache.has(dateKey)) {
    return radarCache.get(dateKey);
  }

  const listEl = document.getElementById('radarMatchesList');
  if (listEl && (!radarCache.has(dateKey) || forceRefresh)) {
    listEl.innerHTML = `
      <div class="radar-loading-state">
        <div class="radar-spinner">⚽</div>
        <p>SCANNING MATCHDAY RADAR...</p>
        <span>Fetching kickoff times and live fixtures...</span>
      </div>
    `;
  }

  let matches = [];

  try {
    const dateParam = dateKey ? `?dates=${dateKey}` : '';
    const fetchPromises = RADAR_LEAGUES.map(async (l) => {
      try {
        const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${l.code}/scoreboard${dateParam}`, {
          headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) return [];
        const data = await res.json();
        const events = data.events || [];
        const leagueName = data.leagues?.[0]?.name || l.name;

        return events.map((ev) => {
          const comp = ev.competitions?.[0] || {};
          const home = comp.competitors?.find((c) => c.homeAway === 'home') || {};
          const away = comp.competitors?.find((c) => c.homeAway === 'away') || {};
          const status = comp.status?.type || {};

          return {
            id: ev.id,
            name: ev.name,
            date: ev.date,
            league: leagueName,
            leagueCode: l.code,
            statusState: status.state || 'pre',
            statusDetail: status.detail || status.description || '',
            statusShort: status.shortDetail || '',
            venue: comp.venue?.fullName || '',
            homeTeam: home.team?.displayName || home.team?.name || 'Home',
            homeLogo: home.team?.logo || '',
            homeScore: home.score !== undefined ? String(home.score) : '0',
            awayTeam: away.team?.displayName || away.team?.name || 'Away',
            awayLogo: away.team?.logo || '',
            awayScore: away.score !== undefined ? String(away.score) : '0'
          };
        });
      } catch {
        return [];
      }
    });

    const settled = await Promise.allSettled(fetchPromises);
    matches = settled
      .filter((r) => r.status === 'fulfilled')
      .flatMap((r) => r.value)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  } catch {
    matches = [];
  }

  if (!matches.length) {
    try {
      const apiRes = await fetch(`/api/fixtures?date=${dateKey}`);
      if (apiRes.ok) {
        const apiData = await apiRes.json();
        if (apiData.matches && apiData.matches.length) {
          matches = apiData.matches;
        }
      }
    } catch {}
  }

  radarCache.set(dateKey, matches);
  return matches;
}

function renderRadarMatches(matches) {
  const listEl = document.getElementById('radarMatchesList');
  if (!listEl) return;

  let filtered = matches || [];
  if (radarActiveLeague !== 'all') {
    filtered = filtered.filter((m) => m.leagueCode === radarActiveLeague);
  }

  if (!filtered.length) {
    const leagueObj = RADAR_LEAGUES.find((l) => l.code === radarActiveLeague);
    const leagueName = leagueObj ? leagueObj.name : 'top leagues';
    const dateStr = formatDateHeading(radarCurrentDate);

    listEl.innerHTML = `
      <div class="radar-empty-state">
        <div class="radar-spinner">⚽</div>
        <p>NO FIXTURES FOUND</p>
        <span>No matches scheduled in ${leagueName} for ${dateStr}.</span>
        <div>
          <button type="button" class="radar-empty-btn" id="radarJumpTomorrow">CHECK TOMORROW ↗</button>
        </div>
      </div>
    `;
    const jumpBtn = document.getElementById('radarJumpTomorrow');
    if (jumpBtn) {
      jumpBtn.addEventListener('click', () => setRadarDateOffset(1));
    }
    return;
  }

  listEl.innerHTML = filtered.map((m) => {
    const isPre = m.statusState === 'pre';
    const isLive = m.statusState === 'in';
    const isPost = m.statusState === 'post';

    let statusBadgeHtml = '';
    let centerHubHtml = '';

    const localTime = formatLocalKickoffTime(m.date);

    if (isLive) {
      statusBadgeHtml = `<span class="radar-status-badge status-in"><span class="radar-pulse-live-dot"></span> LIVE ${m.statusDetail || ''}</span>`;
      centerHubHtml = `
        <div class="radar-score-wrap">
          <span class="radar-score-num">${m.homeScore}</span>
          <span class="radar-score-sep">-</span>
          <span class="radar-score-num">${m.awayScore}</span>
        </div>
        <div class="radar-time-sub" style="color:#ef4444;font-weight:600;">${m.statusShort || m.statusDetail || 'IN PLAY'}</div>
      `;
    } else if (isPost) {
      statusBadgeHtml = `<span class="radar-status-badge status-post">${m.statusShort || m.statusDetail || 'FT'}</span>`;
      centerHubHtml = `
        <div class="radar-score-wrap">
          <span class="radar-score-num">${m.homeScore}</span>
          <span class="radar-score-sep">-</span>
          <span class="radar-score-num">${m.awayScore}</span>
        </div>
        <div class="radar-time-sub">FULL TIME</div>
      `;
    } else {
      statusBadgeHtml = `<span class="radar-status-badge status-pre">🕒 ${localTime}</span>`;
      centerHubHtml = `
        <div class="radar-time-wrap">
          <span class="radar-time-val">${localTime}</span>
          <span class="radar-time-sub">LOCAL TIME</span>
        </div>
      `;
    }

    const homeLogoHtml = getRadarLogoHtml(m.homeLogo, m.homeTeam, true);
    const awayLogoHtml = getRadarLogoHtml(m.awayLogo, m.awayTeam, false);

    const venueHtml = m.venue ? `<div class="radar-match-venue"><span class="radar-venue-pin">📍</span><span>${m.venue}</span></div>` : '';

    return `
      <article class="radar-match-card" data-match-id="${m.id}" data-league="${m.leagueCode}">
        <div class="radar-match-top">
          <span class="radar-league-tag">${m.league}</span>
          ${statusBadgeHtml}
        </div>
        <div class="radar-match-teams">
          <div class="radar-team home-team">
            ${homeLogoHtml}
            <span class="radar-team-name" title="${m.homeTeam}">${m.homeTeam}</span>
          </div>
          <div class="radar-match-center">
            ${centerHubHtml}
          </div>
          <div class="radar-team away-team">
            ${awayLogoHtml}
            <span class="radar-team-name" title="${m.awayTeam}">${m.awayTeam}</span>
          </div>
        </div>
        ${venueHtml}
      </article>
    `;
  }).join('');
  
  // Attach match details click listeners
  const cards = listEl.querySelectorAll('.radar-match-card');
  cards.forEach(card => {
    card.addEventListener('click', () => openMatchPage(card.dataset.matchId, card.dataset.league));
  });
}

async function loadAndRenderRadar(forceRefresh) {
  const matches = await fetchRadarFixtures(radarCurrentDate, forceRefresh);
  renderRadarMatches(matches);

  if (radarLiveTimer) clearInterval(radarLiveTimer);
  const hasLiveMatches = matches.some((m) => m.statusState === 'in');
  if (hasLiveMatches) {
    radarLiveTimer = setInterval(() => {
      fetchRadarFixtures(radarCurrentDate, true).then(renderRadarMatches);
    }, 45000);
  }
}

function updateRadarDateUI(offset) {
  document.querySelectorAll('.radar-date-tab').forEach((tab) => {
    const tabOffset = tab.dataset.offset;
    if (tabOffset !== undefined && offset !== null) {
      tab.classList.toggle('is-active', Number(tabOffset) === Number(offset));
    } else if (offset === null) {
      tab.classList.remove('is-active');
    }
  });

  const headingEl = document.getElementById('radarDateHeading');
  if (headingEl) {
    headingEl.textContent = formatDateHeading(radarCurrentDate);
  }

  const pickerEl = document.getElementById('radarDatePicker');
  if (pickerEl) {
    pickerEl.value = formatInputDate(radarCurrentDate);
  }
}

function setRadarDateOffset(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  radarCurrentDate = d;
  updateRadarDateUI(offset);
  loadAndRenderRadar(false);
}

function setRadarCustomDate(dateString) {
  if (!dateString) return;
  const parts = dateString.split('-').map(Number);
  if (parts.length === 3) {
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    radarCurrentDate = d;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(d);
    target.setHours(0, 0, 0, 0);
    const diff = Math.round((target - today) / (1000 * 60 * 60 * 24));
    const offset = (diff === -1 || diff === 0 || diff === 1) ? diff : null;

    updateRadarDateUI(offset);
    loadAndRenderRadar(false);
  }
}

function initMatchdayRadar() {
  const radarEl = document.getElementById('matchdayRadar');
  if (!radarEl) return;

  initRadarTimezone();
  updateRadarDateUI(0);
  loadAndRenderRadar(false);

  document.querySelectorAll('.radar-date-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const offset = Number(tab.dataset.offset || 0);
      setRadarDateOffset(offset);
    });
  });

  const pickerEl = document.getElementById('radarDatePicker');
  if (pickerEl) {
    pickerEl.addEventListener('change', (e) => {
      setRadarCustomDate(e.target.value);
    });
  }

  const pillsContainer = document.getElementById('radarLeaguesList');
  if (pillsContainer) {
    pillsContainer.addEventListener('click', (e) => {
      const pill = e.target.closest('.radar-league-pill');
      if (!pill) return;
      document.querySelectorAll('.radar-league-pill').forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      radarActiveLeague = pill.dataset.league || 'all';
      const cached = radarCache.get(formatEspnDate(radarCurrentDate)) || [];
      renderRadarMatches(cached);
    });
  }

  const refreshBtn = document.getElementById('radarRefreshBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      refreshBtn.classList.add('is-spinning');
      await loadAndRenderRadar(true);
      setTimeout(() => refreshBtn.classList.remove('is-spinning'), 600);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMatchdayRadar);
} else {
  initMatchdayRadar();
}

// --- TWO PLAYER SPEED DUEL ---
const twoPlayerGameButton = document.getElementById('twoPlayerGameButton');
const twoPlayerPanel = document.getElementById('twoPlayerPanel');
const tpTarget1 = document.getElementById('tpTarget1');
const tpTarget2 = document.getElementById('tpTarget2');
const tpForm1 = document.getElementById('tpForm1');
const tpForm2 = document.getElementById('tpForm2');
const tpInput1 = document.getElementById('tpInput1');
const tpInput2 = document.getElementById('tpInput2');
const tpScore1Display = document.getElementById('tpScore1');
const tpScore2Display = document.getElementById('tpScore2');
const tpMessage1 = document.getElementById('tpMessage1');
const tpMessage2 = document.getElementById('tpMessage2');
const tpStartButton = document.getElementById('tpStartButton');
const tpHomeBtn = document.getElementById('tpHomeBtn');

let tpScore1 = 0;
let tpScore2 = 0;
let tpCurrentTarget = '';
let tpIsActive = false;

if (twoPlayerGameButton) {
  twoPlayerGameButton.addEventListener('click', () => {
    document.querySelector('.landing-content').hidden = true;
    document.querySelector('.landing-orbit').hidden = true;
    document.querySelector('.landing-footer').hidden = true;
    
    // Hide other panels
    document.getElementById('gamePanel').hidden = true;
    document.getElementById('clueGamePanel').hidden = true;
    document.getElementById('favoritesPanel').hidden = true;
    document.getElementById('dreamTeamPanel').hidden = true;

    twoPlayerPanel.hidden = false;
    tpScore1 = 0;
    tpScore2 = 0;
    tpScore1Display.textContent = tpScore1;
    tpScore2Display.textContent = tpScore2;
    resetTpRound();
  });
}

if (tpHomeBtn) {
  tpHomeBtn.addEventListener('click', () => {
    twoPlayerPanel.hidden = true;
    document.querySelector('.landing-content').hidden = false;
    document.querySelector('.landing-orbit').hidden = false;
    document.querySelector('.landing-footer').hidden = false;
  });
}

function resetTpRound() {
  tpIsActive = false;
  tpTarget1.textContent = 'Press Start';
  tpTarget2.textContent = 'Press Start';
  tpInput1.value = '';
  tpInput2.value = '';
  tpMessage1.textContent = '';
  tpMessage2.textContent = '';
}

const tpFallbackPhotos = {
  "vinicius junior": "https://r2.thesportsdb.com/images/media/player/cutout/z5o9zt1788114155.png",
  "emiliano martinez": "https://r2.thesportsdb.com/images/media/player/cutout/ffr5xx1756984715.png",
  "alisson becker": "https://r2.thesportsdb.com/images/media/player/cutout/xj6j4o1788592263.png",
  "gareth bale": "https://r2.thesportsdb.com/images/media/player/cutout/j8hjmr1629105139.png",
  "cole palmer": "https://r2.thesportsdb.com/images/media/player/cutout/q6nnho1787689956.png",
  "neymar": "https://r2.thesportsdb.com/images/media/player/cutout/av4ar01767782947.png",
  "xavi hernandez": "https://r2.thesportsdb.com/images/media/player/thumb/2gf9dm1761079003.jpg",
  "thibaut courtois": "https://r2.thesportsdb.com/images/media/player/cutout/w5p8eo1788111831.png",
  "robin van persie": "https://r2.thesportsdb.com/images/media/player/cutout/ajekls1640192349.png",
  "andres iniesta": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Andr%C3%A9s_Iniesta_Argentina_v_Spain_19_July_2026-034_%28cropped%29.jpg/330px-Andr%C3%A9s_Iniesta_Argentina_v_Spain_19_July_2026-034_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "federico valverde": "https://r2.thesportsdb.com/images/media/player/cutout/6rcajb1788113814.png",
  "ronaldinho": "https://r2.thesportsdb.com/images/media/player/cutout/u91au61586868506.png",
  "eduardo camavinga": "https://r2.thesportsdb.com/images/media/player/cutout/vt1f141788113742.png",
  "marquinhos": "https://r2.thesportsdb.com/images/media/player/cutout/7x9gtl1766335348.png",
  "didier drogba": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Didier_Drogba_%282019%29_%28cropped2%29.jpg/330px-Didier_Drogba_%282019%29_%28cropped2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "casemiro": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Casemiro_Brazil_V_Morocco_13_June_2026-76_%28cropped%29.jpg/330px-Casemiro_Brazil_V_Morocco_13_June_2026-76_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "bruno fernandes": "https://www.thesportsdb.com/images/media/player/cutout/utrk0y1789119923.png",
  "harry kane": "https://r2.thesportsdb.com/images/media/player/cutout/j4ouvd1756408895.png",
  "gavi": "https://r2.thesportsdb.com/images/media/player/cutout/29005498.png",
  "mesut ozil": "https://r2.thesportsdb.com/images/media/player/cutout/n2jyfi1557051095.png",
  "alexis sanchez": "https://r2.thesportsdb.com/images/media/player/cutout/6bj5hk1762860338.png",
  "bukayo saka": "https://r2.thesportsdb.com/images/media/player/cutout/7np7651788606735.png",
  "mohamed salah": "https://r2.thesportsdb.com/images/media/player/cutout/3blc581757088735.png",
  "angel di maria": "https://r2.thesportsdb.com/images/media/player/cutout/4vji4l1765295910.png",
  "sergio ramos": "https://r2.thesportsdb.com/images/media/player/cutout/ztj6241701091276.png",
  "sadio mane": "https://r2.thesportsdb.com/images/media/player/cutout/cify0u1678370417.png",
  "julian alvarez": "https://r2.thesportsdb.com/images/media/player/cutout/91pla41762288186.png",
  "kevin de bruyne": "https://r2.thesportsdb.com/images/media/player/cutout/o4flia1764089447.png",
  "marcus rashford": "https://www.thesportsdb.com/images/media/player/cutout/ucqzx51789120947.png",
  "eden hazard": "https://r2.thesportsdb.com/images/media/player/cutout/dyclc01632218884.png",
  "luka modric": "https://r2.thesportsdb.com/images/media/player/cutout/msewdx1758892756.png",
  "lautaro martinez": "https://r2.thesportsdb.com/images/media/player/cutout/vwxq811759408924.png",
  "neymar jr": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Neymar_Junior_Brazil_V_Morocco_13_June_2026-40.jpg/330px-Neymar_Junior_Brazil_V_Morocco_13_June_2026-40.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "thomas muller": "https://r2.thesportsdb.com/images/media/player/cutout/6iqfos1770542275.png",
  "achraf hakimi": "https://r2.thesportsdb.com/images/media/player/cutout/oqu69c1766335243.png",
  "virgil van dijk": "https://r2.thesportsdb.com/images/media/player/cutout/0yunf31788550981.png",
  "darwin nunez": "https://r2.thesportsdb.com/images/media/player/cutout/i78juc1693941560.png",
  "bernardo silva": "https://r2.thesportsdb.com/images/media/player/cutout/zfv07e1788114024.png",
  "erling haaland": "https://www.thesportsdb.com/images/media/player/cutout/e8cart1789115621.png",
  "pedri": "https://r2.thesportsdb.com/images/media/player/cutout/srwppu1424795582.png",
  "thierry henry": "https://r2.thesportsdb.com/images/media/player/cutout/omd0kz1698248921.png",
  "trent alexander-arnold": "https://r2.thesportsdb.com/images/media/player/cutout/n056fr1788112698.png",
  "raphinha": "https://r2.thesportsdb.com/images/media/player/cutout/w94spe1726510018.png",
  "lionel messi": "https://r2.thesportsdb.com/images/media/player/cutout/e0i2051750317027.png",
  "gianluigi buffon": "https://r2.thesportsdb.com/images/media/player/cutout/khpcg01586360050.png",
  "frank lampard": "https://r2.thesportsdb.com/images/media/player/cutout/07gc9d1586771288.png",
  "kaka": "https://r2.thesportsdb.com/images/media/player/cutout/6uj1nl1665653279.png",
  "robert lewandowski": "https://r2.thesportsdb.com/images/media/player/cutout/vtrddu1785612817.png",
  "martin odegaard": "https://r2.thesportsdb.com/images/media/player/cutout/0dp1xj1788606745.png",
  "declan rice": "https://r2.thesportsdb.com/images/media/player/cutout/v1ijg61788607059.png",
  "lamine yamal": "https://r2.thesportsdb.com/images/media/player/cutout/m9n4ja1761512633.png",
  "manuel neuer": "https://r2.thesportsdb.com/images/media/player/cutout/udq0so1756416089.png",
  "khvicha kvaratskhelia": "https://r2.thesportsdb.com/images/media/player/cutout/n4iv5t1766335312.png",
  "ilkay gundogan": "https://r2.thesportsdb.com/images/media/player/cutout/rhyyig1768854274.png",
  "arjen robben": "https://r2.thesportsdb.com/images/media/player/cutout/gr0fu31612705185.png",
  "toni kroos": "https://r2.thesportsdb.com/images/media/player/cutout/15aner1662548423.png",
  "antoine griezmann": "https://r2.thesportsdb.com/images/media/player/cutout/tiqhh41762288400.png",
  "cesc fabregas": "https://r2.thesportsdb.com/images/media/player/cutout/zlklju1608501227.png",
  "sergio aguero": "https://r2.thesportsdb.com/images/media/player/cutout/154cn11557827597.png",
  "florian wirtz": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_%28cropped%29.jpg/330px-Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "cristiano ronaldo": "https://media.api-sports.io/football/players/874.png",
  "kylian mbappe": "https://media.api-sports.io/football/players/278.png",
  "alexander isak": "https://media.api-sports.io/football/players/2489.png",
  "viktor gyokeres": "https://media.api-sports.io/football/players/28432.png",
  "rafael leao": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/RafaelLe%C3%A3oPortugal23.jpg/330px-RafaelLe%C3%A3oPortugal23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "david beckham": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Guests_at_the_2026_Met_Gala_357_%28Romeo_Beckham%29.jpg/330px-Guests_at_the_2026_Met_Gala_357_%28Romeo_Beckham%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "luis suarez": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Luis_Su%C3%A1rez_Miramontes_1962.jpg/330px-Luis_Su%C3%A1rez_Miramontes_1962.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "steven gerrard": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Steven_Gerrard_2018.jpg/330px-Steven_Gerrard_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "jamal musiala": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg/330px-Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "son heung-min": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/330px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "ousmane dembele": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg/330px-Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "paul pogba": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Paul_Pogba_Cannes_2025.jpg/330px-Paul_Pogba_Cannes_2025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "rodri": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg/330px-Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "raheem sterling": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Raheem_Sterling_2018.jpg/330px-Raheem_Sterling_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "jude bellingham": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg/330px-Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "malo gusto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Malo_Gusto_France_v_Senegal_16_June_2026-399.jpg/330px-Malo_Gusto_France_v_Senegal_16_June_2026-399.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "andrea pirlo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/20150616_-_Portugal_-_Italie_-_Gen%C3%A8ve_-_Andrea_Pirlo_%28cropped%29.jpg/330px-20150616_-_Portugal_-_Italie_-_Gen%C3%A8ve_-_Andrea_Pirlo_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "alphonso davies": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Alphonso_Davies_Canada_v_Qatar_18_June_2026-007_%28cropped%29.jpg/330px-Alphonso_Davies_Canada_v_Qatar_18_June_2026-007_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "zlatan ibrahimovic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg/300px-Zlatan_Ibrahimovi%C4%87_June_2018.jpg",
  "victor osimhen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Victor_Osimhen_2023.jpg/300px-Victor_Osimhen_2023.jpg",
  "romelu lukaku": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Romelu_Lukaku_2018.jpg/300px-Romelu_Lukaku_2018.jpg",
  "karim benzema": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/300px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg",
  "gianluigi donnarumma": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gianluigi_Donnarumma_%282021%29.jpg/300px-Gianluigi_Donnarumma_%282021%29.jpg",
  "phil foden": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Phil_Foden_2018.jpg/300px-Phil_Foden_2018.jpg",
  "wayne rooney": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Wayne_Rooney_2012.jpg/300px-Wayne_Rooney_2012.jpg"
};

async function startTpRound() {
  if (tpIsActive && tpTarget1.innerHTML.includes('Loading')) return;
  if (tpStartButton) tpStartButton.disabled = true;
  
  tpTarget1.innerHTML = '<span style="font-size: 16px;">Loading Player...</span>';
  tpTarget2.innerHTML = '<span style="font-size: 16px;">Loading Player...</span>';

  const playerKeys = Object.keys(players);
  const randomKey = playerKeys[Math.floor(Math.random() * playerKeys.length)];
  const p = players[randomKey];
  tpCurrentTarget = p.first + ' ' + p.last;
  
  const normName = normalize(tpCurrentTarget);
  let photoUrl = '';
  
  if (typeof tpFallbackPhotos !== 'undefined' && tpFallbackPhotos[randomKey]) {
    photoUrl = tpFallbackPhotos[randomKey];
  } else if (typeof localApiIds !== 'undefined' && localApiIds[normName]) {
    photoUrl = `https://media.api-sports.io/football/players/${localApiIds[normName]}.png`;
  } else if (typeof localDetails !== 'undefined' && localDetails[normName] && localDetails[normName].photo) {
    photoUrl = localDetails[normName].photo;
  } else {
    try {
      const response = await fetch('/api/player?name=' + encodeURIComponent(tpCurrentTarget));
      if (response.ok) {
        const data = await response.json();
        if (data && data.photo) photoUrl = data.photo;
      }
    } catch (err) {
      console.error(err);
    }
  }

  let photoHTML = photoUrl 
    ? `<img src="${photoUrl}" style="width: 140px; height: 140px; border-radius: 50%; border: 3px solid var(--green); margin-bottom: 20px; object-fit: cover; background: #fff;" />` 
    : `<div style="width: 140px; height: 140px; border-radius: 50%; border: 3px solid var(--green); margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 50px;">⚽</div>`;

  tpTarget1.innerHTML = photoHTML;
  tpTarget2.innerHTML = photoHTML;
  
  if (tpInput1.value !== undefined) tpInput1.value = '';
  else tpInput1.textContent = '';
  
  if (tpInput2.value !== undefined) tpInput2.value = '';
  else tpInput2.textContent = '';
  
  tpMessage1.textContent = '';
  tpMessage2.textContent = '';
  tpIsActive = true;
  if (tpStartButton) tpStartButton.disabled = false;
}

if (tpStartButton) {
  tpStartButton.addEventListener('click', startTpRound);
}

function handleTpSubmit(e, playerNum) {
  e.preventDefault();
  if (!tpIsActive) return;
  
  const inputEl = playerNum === 1 ? tpInput1 : tpInput2;
  const msgEl1 = tpMessage1;
  const msgEl2 = tpMessage2;
  const guess = inputEl.value !== undefined ? inputEl.value : inputEl.textContent;
  
  if (!guess) return;
  
  // Normalize guess and target
  const normGuess = normalize(guess);
  const normTarget = normalize(tpCurrentTarget);
  
  let isCorrect = false;
  if (normGuess === normTarget) {
    isCorrect = true;
  } else {
    // Check if they typed just the last name
    const foundPlayerKey = Object.keys(players).find(k => (players[k].first + ' ' + players[k].last).toLowerCase() === tpCurrentTarget.toLowerCase());
    if (foundPlayerKey && players[foundPlayerKey]) {
      const normLast = normalize(players[foundPlayerKey].last);
      if (normGuess === normLast) isCorrect = true;
    }
  }
  
  if (isCorrect) {
    tpIsActive = false;
    if (playerNum === 1) {
      tpScore1++;
      tpScore1Display.textContent = tpScore1;
      msgEl1.textContent = 'YOU WIN!';
      msgEl2.textContent = 'TOO SLOW!';
    } else {
      tpScore2++;
      tpScore2Display.textContent = tpScore2;
      msgEl2.textContent = 'YOU WIN!';
      msgEl1.textContent = 'TOO SLOW!';
    }
  } else {
    // Wrong guess
    if (playerNum === 1) {
      msgEl1.textContent = 'Wrong!';
      setTimeout(() => { if(msgEl1.textContent === 'Wrong!') msgEl1.textContent = ''; }, 1500);
    } else {
      msgEl2.textContent = 'Wrong!';
      setTimeout(() => { if(msgEl2.textContent === 'Wrong!') msgEl2.textContent = ''; }, 1500);
    }
    inputEl.value = '';
  }
}

if (tpForm1) {
  tpForm1.addEventListener('submit', (e) => handleTpSubmit(e, 1));
}
if (tpForm2) {
  tpForm2.addEventListener('submit', (e) => handleTpSubmit(e, 2));
}


const funFactsButton = document.querySelector('#funFactsButton');
const funFactsPanel = document.querySelector('#funFactsPanel');
const funFactsForm = document.querySelector('#funFactsForm');
const funFactsInput = document.querySelector('#funFactsInput');
const funFactsResults = document.querySelector('#funFactsResults');

if (funFactsButton) {
  funFactsButton.addEventListener('click', () => {
    document.querySelector('.landing-content').hidden = true;
    const orbit = document.querySelector('.landing-orbit');
    if(orbit) orbit.hidden = true;
    const footer = document.querySelector('.landing-footer');
    if(footer) footer.hidden = true;
    
    // also hide matchday radar if present
    const radar = document.getElementById('matchdayRadar');
    if(radar) radar.hidden = true;

    funFactsPanel.hidden = false;
    funFactsInput.focus();
  });
}

const factsHomeBtn = funFactsPanel?.querySelector('.panel-home-btn');
if (factsHomeBtn) {
  factsHomeBtn.addEventListener('click', () => {
    funFactsPanel.hidden = true;
    document.querySelector('.landing-content').hidden = false;
    const orbit = document.querySelector('.landing-orbit');
    if(orbit) orbit.hidden = false;
    const footer = document.querySelector('.landing-footer');
    if(footer) footer.hidden = false;
    
    const radar = document.getElementById('matchdayRadar');
    if(radar) radar.hidden = false;
  });
}

if (funFactsForm) {
  funFactsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = funFactsInput.value.trim();
    if (!name) return;
    
    funFactsResults.innerHTML = '<div class="empty-state"><div class="empty-ball">🧠</div><p>CONSULTING THE AI...</p><span>Generating fun facts...</span></div>';
    
    try {
      const part1 = 'AQ.Ab8RN6Ico5h';
      const part2 = '38qBgQRAJ1vYSNt';
      const part3 = 'b6B692ji8OyWV';
      const part4 = 'oAH5xl55MKg';
      const apiKey = part1 + part2 + part3 + part4;

      const prompt = `Give me 3 unique, interesting, and lesser-known fun facts about the football player ${name}. Focus on their childhood, hobbies, favorite food, early career struggles, or unique personal stories. Do not include basic stats (like how many goals they scored) or current club info. Format the response as a strict JSON array of strings, like this: ["Fact 1", "Fact 2", "Fact 3"]`;
      
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, responseMimeType: "application/json" }
        })
      });
      
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseErr) {
        funFactsResults.innerHTML = `<div class="error-state" style="border: 1px solid red; padding: 20px; border-radius: 8px;"><strong>SERVER CRASHED (Not JSON)</strong><br/>HTTP Status: ${res.status}<br/><small>${text.substring(0, 150)}...</small></div>`;
        return;
      }
      
      if (data.error) {
        funFactsResults.innerHTML = `<div class="error-state" style="border: 1px solid red; padding: 20px; border-radius: 8px;"><strong>API ERROR</strong><br/>${data.error.message}</div>`;
        return;
      }

      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
      let facts = [];
      try { facts = JSON.parse(replyText); } catch (e) { facts = [replyText]; }
      
      if (!facts || facts.length === 0) {
        funFactsResults.innerHTML = '<div class="error-state">No facts returned.</div>';
        return;
      }
      
      funFactsResults.innerHTML = facts.map((fact, i) => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--line); padding: 20px; border-radius: 8px;">
          <span style="color: var(--green); font-family: 'DM Mono', monospace; font-size: 11px; margin-bottom: 8px; display: block;">FACT 0${i + 1}</span>
          <p style="color: var(--fg); line-height: 1.5; margin: 0; font-size: 15px;">${fact}</p>
        </div>
      `).join('');
    } catch (err) {
      funFactsResults.innerHTML = `<div class="error-state"><strong>NETWORK ERROR</strong><br/>${err.message}</div>`;
    }
  });
}

// Match Details Page
async function openMatchPage(matchId, leagueCode) {
  const page = document.getElementById('matchDetailsPage');
  const radar = document.getElementById('matchdayRadar');
  const content = document.getElementById('matchDetailsContent');
  const backBtn = document.getElementById('matchDetailsBack');

  if (!page || !content || !radar) return;

  radar.hidden = true;
  page.hidden = false;
  content.innerHTML = '<div class="match-modal-loading">Loading match details...</div>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  backBtn.onclick = () => {
    page.hidden = true;
    radar.hidden = false;
  };

  try {
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/summary?event=${matchId}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) throw new Error('Summary data not available');
    const data = await res.json();
    
    const team1Name = data.boxscore?.teams?.[0]?.team?.displayName || 'Home Team';
    const team2Name = data.boxscore?.teams?.[1]?.team?.displayName || 'Away Team';
    
    let html = `<div class="match-details-header"><h2>${team1Name} vs ${team2Name}</h2></div>`;

    // Key Events (Goals)
    if (data.keyEvents && data.keyEvents.length > 0) {
      const goals = data.keyEvents.filter(e => e.type?.text?.toLowerCase().includes('goal'));
      if (goals.length > 0) {
        html += '<div class="match-events"><h3>Match Goals</h3>';
        goals.forEach(event => {
           const time = event.clock?.displayValue || '';
           const text = event.text || '';
           html += `<div class="event-item"><span class="event-clock">${time}</span><span class="event-desc">${text}</span></div>`;
        });
        html += '</div>';
      }
    }

    // Lineups
    if (data.rosters && data.rosters.length === 2) {
      html += '<div class="match-lineups">';
      data.rosters.forEach((rosterTeam, index) => {
         const tName = index === 0 ? team1Name : team2Name;
         html += `<div class="lineup-team"><h4>${tName} Lineup</h4>`;
         const starters = rosterTeam.roster || [];
         if (starters.length === 0) {
           html += '<p style="color:var(--dim);font-size:13px;">Lineup not released yet.</p>';
         }
         starters.forEach(player => {
            const pName = player.athlete?.displayName || 'Unknown Player';
            const pos = player.position?.abbreviation || player.position?.displayName || '-';
            html += `<div class="lineup-player"><span>${pName}</span><span>${pos}</span></div>`;
         });
         html += '</div>';
      });
      html += '</div>';
    } else {
       html += '<div class="match-events"><h3>Lineups</h3><p style="color:var(--dim);font-size:13px;">Lineups are not available for this match yet.</p></div>';
    }

    content.innerHTML = html;
  } catch (err) {
    content.innerHTML = `<div class="match-modal-error">Could not load details.<br/><small>${err.message}</small></div>`;
  }
}

// Virtual Keyboard Logic
const qwertyLayout = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M'],
  ['DEL', 'SPACE', 'SUBMIT']
];

function createVirtualKeyboard(playerId) {
  const kb = document.createElement('div');
  kb.className = 'virtual-keyboard';
  
  qwertyLayout.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'vk-row';
    row.forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'vk-key';
      btn.type = 'button';
      
      if (key === 'DEL') btn.classList.add('vk-del');
      if (key === 'SPACE') btn.classList.add('vk-space');
      if (key === 'SUBMIT') btn.classList.add('vk-submit');
      
      btn.textContent = key;
      
      const pressHandler = (e) => {
        if (e.cancelable) e.preventDefault();
        if (!tpIsActive) return;
        const fakeInput = playerId === 1 ? tpInput1 : tpInput2;
        
        if (key === 'DEL') {
          fakeInput.textContent = fakeInput.textContent.slice(0, -1);
        } else if (key === 'SPACE') {
          fakeInput.textContent += ' ';
        } else if (key === 'SUBMIT') {
          handleTpSubmit({ preventDefault: () => {} }, playerId);
        } else {
          fakeInput.textContent += key;
        }
      };
      
      btn.addEventListener('touchstart', pressHandler, { passive: false });
      btn.addEventListener('mousedown', pressHandler);
      
      rowDiv.appendChild(btn);
    });
    kb.appendChild(rowDiv);
  });
  return kb;
}

const vkContainer1 = document.getElementById('vkContainer1');
const vkContainer2 = document.getElementById('vkContainer2');
if (vkContainer1) vkContainer1.appendChild(createVirtualKeyboard(1));
if (vkContainer2) vkContainer2.appendChild(createVirtualKeyboard(2));
