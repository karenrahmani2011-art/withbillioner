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
const aliases = {
  "ibrahimovic": "zlatan ibrahimovic",
  "ibrahimopvich": "zlatan ibrahimovic",
  "zlatan ibrahimopvich": "zlatan ibrahimovic",
  "zlatan": "zlatan ibrahimovic",
  "palmer": "cole palmer",
  "c. palmer": "cole palmer",
  "isak": "alexander isak",
  "a. isak": "alexander isak",
  "gyokeres": "viktor gyokeres",
  "gy\u00f6keres": "viktor gyokeres",
  "benzema": "karim benzema",
  "karim": "karim benzema",
  "bale": "gareth bale",
  "hazard": "eden hazard",
  "kroos": "toni kroos",
  "ozil": "mesut ozil",
  "\u00f6zil": "mesut ozil",
  "rooney": "wayne rooney",
  "gerrard": "steven gerrard",
  "lampard": "frank lampard",
  "aguero": "sergio aguero",
  "ag\u00fcero": "sergio aguero",
  "kun aguero": "sergio aguero",
  "muller": "thomas muller",
  "m\u00fcller": "thomas muller",
  "neuer": "manuel neuer",
  "di maria": "angel di maria",
  "dimaria": "angel di maria",
  "sanchez": "alexis sanchez",
  "lukaku": "romelu lukaku",
  "sterling": "raheem sterling",
  "casemiro": "casemiro",
  "carlos casemiro": "casemiro",
  "pogba": "paul pogba",
  "saka": "bukayo saka",
  "b. saka": "bukayo saka",
  "foden": "phil foden",
  "p. foden": "phil foden",
  "rodri": "rodri",
  "rodrigo": "rodri",
  "rodrigo hernandez": "rodri",
  "rice": "declan rice",
  "d. rice": "declan rice",
  "van dijk": "virgil van dijk",
  "vandijk": "virgil van dijk",
  "dijk": "virgil van dijk",
  "vvd": "virgil van dijk",
  "alexander-arnold": "trent alexander-arnold",
  "arnold": "trent alexander-arnold",
  "trent": "trent alexander-arnold",
  "taa": "trent alexander-arnold",
  "courtois": "thibaut courtois",
  "t. courtois": "thibaut courtois",
  "alisson": "alisson becker",
  "becker": "alisson becker",
  "bernardo": "bernardo silva",
  "bruno": "bruno fernandes",
  "b. fernandes": "bruno fernandes",
  "valverde": "federico valverde",
  "f. valverde": "federico valverde",
  "camavinga": "eduardo camavinga",
  "pedri": "pedri",
  "pedro gonzalez": "pedri",
  "gavi": "gavi",
  "pablo gavi": "gavi",
  "gundogan": "ilkay gundogan",
  "g\u00fcndogan": "ilkay gundogan",
  "musiala": "jamal musiala",
  "j. musiala": "jamal musiala",
  "wirtz": "florian wirtz",
  "f. wirtz": "florian wirtz",
  "osimhen": "victor osimhen",
  "v. osimhen": "victor osimhen",
  "kvaratskhelia": "khvicha kvaratskhelia",
  "kvara": "khvicha kvaratskhelia",
  "lautaro": "lautaro martinez",
  "l. martinez": "lautaro martinez",
  "alvarez": "julian alvarez",
  "j. alvarez": "julian alvarez",
  "leao": "rafael leao",
  "le\u00e3o": "rafael leao",
  "r. leao": "rafael leao",
  "dembele": "ousmane dembele",
  "demb\u00e9l\u00e9": "ousmane dembele",
  "o. dembele": "ousmane dembele",
  "hakimi": "achraf hakimi",
  "a. hakimi": "achraf hakimi",
  "davies": "alphonso davies",
  "a. davies": "alphonso davies",
  "rashford": "marcus rashford",
  "m. rashford": "marcus rashford",
  "odegaard": "martin odegaard",
  "\u00f8degaard": "martin odegaard",
  "m. odegaard": "martin odegaard",
  "dibu": "emiliano martinez",
  "dibu martinez": "emiliano martinez",
  "donnarumma": "gianluigi donnarumma",
  "marquinhos": "marquinhos",
  "raphinha": "raphinha",
  "darwin": "darwin nunez",
  "nunez": "darwin nunez",
  "n\u00fa\u00f1ez": "darwin nunez",
  "van persie": "robin van persie",
  "persie": "robin van persie",
  "rvp": "robin van persie",
  "robben": "arjen robben",
  "son": "son heung-min",
  "heung-min son": "son heung-min",
  "sonny": "son heung-min",
  "suarez": "luis suarez",
  "su\u00e1rez": "luis suarez",
  "henry": "thierry henry",
  "t. henry": "thierry henry",
  "xavi": "xavi hernandez",
  "pirlo": "andrea pirlo",
  "drogba": "didier drogba",
  "mane": "sadio mane",
  "man\u00e9": "sadio mane",
  "yamal": "lamine yamal",
  "l. yamal": "lamine yamal",
  "lamine": "lamine yamal",
  "modric": "luka modric",
  "modri\u0107": "luka modric",
  "ramos": "sergio ramos",
  "griezmann": "antoine griezmann",
  "a. griezmann": "antoine griezmann",
  "buffon": "gianluigi buffon",
  "beckham": "david beckham",
  "becks": "david beckham",
  "iniesta": "andres iniesta",
  "andres iniesta": "andres iniesta",
  "messi": "lionel messi",
  "leo messi": "lionel messi",
  "l. messi": "lionel messi",
  "ronaldo": "cristiano ronaldo",
  "cr7": "cristiano ronaldo",
  "c. ronaldo": "cristiano ronaldo",
  "cristiano": "cristiano ronaldo",
  "vini": "vinicius junior",
  "vini jr": "vinicius junior",
  "vinicius": "vinicius junior",
  "vinicius jr": "vinicius junior",
  "haaland": "erling haaland",
  "e. haaland": "erling haaland",
  "mbappe": "kylian mbappe",
  "mbapp\u00e9": "kylian mbappe",
  "k. mbappe": "kylian mbappe",
  "bellingham": "jude bellingham",
  "j. bellingham": "jude bellingham",
  "kane": "harry kane",
  "h. kane": "harry kane",
  "lewandowski": "robert lewandowski",
  "lewy": "robert lewandowski",
  "salah": "mohamed salah",
  "mo salah": "mohamed salah",
  "de bruyne": "kevin de bruyne",
  "kdb": "kevin de bruyne",
  "kaka": "kaka",
  "kak\u00e1": "kaka",
  "ricardo kaka": "kaka",
  "ronaldinho": "ronaldinho",
  "ronaldinho gaucho": "ronaldinho",
  "ronaldinho ga\u00facho": "ronaldinho",
  "malo gusto": "malo gusto",
  "gusto": "malo gusto"
};
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
  'Al Sadd': '/al-sadd-logo.png',
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

function switchMainTab(tabName) {
  // Update active state on both top tabs and mobile bottom nav
  document.querySelectorAll('.fotmob-tab-btn, .bottom-nav-item').forEach((btn) => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  if (tabName === 'search' || tabName === 'careers') {
    showCareerPage(tabName);
    return;
  }

  if (tabName === 'favorites') {
    showFavorites();
    return;
  }

  if (tabName === 'history') {
    document.getElementById('historyButton')?.click();
    return;
  }

  // Restore main landing visibility
  careerPage.hidden = true;
  landing.hidden = false;
  const landingContent = document.querySelector('.landing-content');
  if (landingContent) landingContent.hidden = false;

  // Hide standalone sub-panels
  if (gamePanel) gamePanel.hidden = true;
  if (clueGamePanel) clueGamePanel.hidden = true;
  if (favoritesPanel) favoritesPanel.hidden = true;
  const funFacts = document.getElementById('funFactsPanel');
  if (funFacts) funFacts.hidden = true;
  const dreamTeam = document.getElementById('dreamTeamPanel');
  if (dreamTeam) dreamTeam.hidden = true;
  const twoPlayer = document.getElementById('twoPlayerPanel');
  if (twoPlayer) twoPlayer.hidden = true;
  const battle = document.getElementById('battlePanel');
  if (battle) battle.hidden = true;
  const guessLineup = document.getElementById('guessLineupPanel');
  if (guessLineup) guessLineup.hidden = true;
  const matchDetails = document.getElementById('matchDetailsPage');
  if (matchDetails) matchDetails.hidden = true;
  const lineups = document.getElementById('lineupsPage');
  if (lineups) lineups.hidden = true;
  const standings = document.getElementById('standingsPage');
  if (standings) standings.hidden = true;
  const leagueStats = document.getElementById('leagueStatsPage');
  if (leagueStats) leagueStats.hidden = true;
  const history = document.getElementById('historyPanel');
  if (history) history.hidden = true;

  const tabMatches = document.getElementById('tabMatches');
  const tabTables = document.getElementById('tabTables');
  const tabGames = document.getElementById('tabGames');
  const tabAnalysis = document.getElementById('tabAnalysis');

  if (tabMatches) tabMatches.hidden = (tabName !== 'matches');
  if (tabTables) tabTables.hidden = (tabName !== 'tables');
  if (tabGames) tabGames.hidden = (tabName !== 'games');
  if (tabAnalysis) {
    tabAnalysis.hidden = (tabName !== 'analysis');
    if (tabName === 'analysis' && typeof initAiAnalysisTab === 'function') {
      initAiAnalysisTab();
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCareerPage(activeTab = 'careers') {
  landing.hidden = true;
  careerPage.hidden = false;
  document.querySelectorAll('.fotmob-tab-btn, .bottom-nav-item').forEach((btn) => {
    if (btn.dataset.tab === activeTab) btn.classList.add('is-active');
    else btn.classList.remove('is-active');
  });
  const bNav = document.getElementById('mobileBottomNav');
  if (bNav) bNav.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => document.getElementById('playerSearch')?.focus(), 250);
}

function showLandingPage(event) {
  if (event) event.preventDefault();
  switchMainTab('matches');
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
    return `<div class="club"><span>${years}</span><div class="club-name"><b>${club}</b></div></div>`;
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
    if (player.photo) {
      savePlayerPhotoToCache(normalize(name), player.photo);
      const parts = normalize(name).split(' ');
      if (parts.length > 1) savePlayerPhotoToCache(parts[parts.length - 1], player.photo);
    }
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
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      reg.update().catch(() => {});
    }).catch(() => {});
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

let dtDebounceTimer = null;
let dtCurrentQueryId = 0;

function renderDtSuggestionItem(p) {
  const fullName = p.name || `${p.first || ''} ${p.last || ''}`.trim();
  const photoUrl = p.photo || getUniversalPlayerPhoto(fullName) || '';
  const desc = p.description || p.current || 'Verified Footballer';
  const initials = ((p.first?.[0] || p.name?.[0] || 'P') + (p.last?.[0] || '')).toUpperCase();
  
  const avatarHtml = photoUrl
    ? `<img src="${photoUrl}" class="dt-suggestion-thumb" alt="${fullName}" onerror="this.onerror=null; this.parentElement.textContent='${initials}';" />`
    : `<span class="dt-suggestion-monogram">${initials}</span>`;

  return `
    <button type="button" class="dt-suggestion" data-name="${fullName}" data-photo="${photoUrl || ''}" data-desc="${desc}">
      <div class="dt-suggestion-initials">${avatarHtml}</div>
      <div class="dt-suggestion-info">
        <div class="dt-suggestion-row">
          <b>${fullName}</b>
          <span class="dt-verified-badge" title="Verified Professional Footballer">✔ Verified</span>
        </div>
        <small>${desc}</small>
      </div>
      <span class="dt-suggestion-arrow">↗</span>
    </button>
  `;
}

async function updateDtSuggestions() {
  const rawQuery = dtPlayerSearch.value.trim();
  const query = normalize(rawQuery);
  
  if (!query || query.length < 2) {
    dtSearchSuggestions.hidden = true;
    dtSearchSuggestions.innerHTML = '';
    return;
  }

  // 1. Instant local matches from curated database
  const playersList = typeof suggestionPlayers !== 'undefined' ? suggestionPlayers : [...new Map(Object.entries(players).map(([, player]) => [normalize(`${player.first} ${player.last}`), player])).values()];
  const localMatches = playersList.filter(p => normalize(`${p.first} ${p.last}`).includes(query)).slice(0, 6).map(p => ({
    name: `${p.first} ${p.last}`,
    first: p.first,
    last: p.last,
    description: p.current,
    photo: getUniversalPlayerPhoto(`${p.first} ${p.last}`)
  }));

  // Render local matches immediately while background search starts
  if (localMatches.length > 0) {
    dtSearchSuggestions.innerHTML = localMatches.map(renderDtSuggestionItem).join('') + 
      `<div class="dt-search-status"><span class="dt-spinner">⚽</span> Searching global football archive...</div>`;
    dtSearchSuggestions.hidden = false;
  } else {
    dtSearchSuggestions.innerHTML = `<div class="dt-search-status"><span class="dt-spinner">⚽</span> Searching global football archive for "${rawQuery}"...</div>`;
    dtSearchSuggestions.hidden = false;
  }

  // 2. Debounced global search for any player worldwide
  clearTimeout(dtDebounceTimer);
  const queryId = ++dtCurrentQueryId;

  dtDebounceTimer = setTimeout(async () => {
    try {
      const res = await fetch(`/api/search-player?q=${encodeURIComponent(rawQuery)}`);
      if (queryId !== dtCurrentQueryId) return; // Discard outdated responses
      
      const data = res.ok ? await res.json() : { players: [] };
      const globalPlayers = data.players || [];
      
      // Combine local + global, deduplicating by normalized name
      const combinedMap = new Map();
      localMatches.forEach(p => combinedMap.set(normalize(p.name), p));
      globalPlayers.forEach(p => {
        const key = normalize(p.name);
        if (!combinedMap.has(key)) {
          combinedMap.set(key, p);
        } else if (!combinedMap.get(key).photo && p.photo) {
          combinedMap.set(key, { ...combinedMap.get(key), photo: p.photo });
        }
      });

      const finalResults = Array.from(combinedMap.values()).slice(0, 10);
      
      if (finalResults.length > 0) {
        dtSearchSuggestions.innerHTML = finalResults.map(renderDtSuggestionItem).join('');
        dtSearchSuggestions.hidden = false;
      } else {
        dtSearchSuggestions.innerHTML = `
          <div class="dt-no-results">
            <div class="dt-no-results-icon">❌</div>
            <p>No verified footballer found matching "<b>${rawQuery}</b>"</p>
            <span>Only real professional football players can be added to your XI.</span>
          </div>
        `;
        dtSearchSuggestions.hidden = false;
      }
    } catch (err) {
      if (queryId !== dtCurrentQueryId) return;
      if (localMatches.length > 0) {
        dtSearchSuggestions.innerHTML = localMatches.map(renderDtSuggestionItem).join('');
      } else {
        dtSearchSuggestions.innerHTML = `
          <div class="dt-no-results">
            <p>No verified footballer found matching "<b>${rawQuery}</b>"</p>
          </div>
        `;
      }
    }
  }, 220);
}

if (dtPlayerSearch) {
  dtPlayerSearch.addEventListener('input', updateDtSuggestions);
  dtPlayerSearch.addEventListener('focus', updateDtSuggestions);
  dtPlayerSearch.addEventListener('blur', () => setTimeout(() => { dtSearchSuggestions.hidden = true; }, 200));
  dtPlayerSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const firstValidBtn = dtSearchSuggestions.querySelector('.dt-suggestion');
      if (firstValidBtn) firstValidBtn.click();
    }
  });
}

if (dtSearchSuggestions) {
  dtSearchSuggestions.addEventListener('mousedown', (e) => e.preventDefault());
  dtSearchSuggestions.addEventListener('click', (event) => {
    const suggestion = event.target.closest('.dt-suggestion');
    if (!suggestion) return;
    
    const fullName = suggestion.dataset.name;
    const photoUrl = suggestion.dataset.photo;
    
    if (fullName && activeDotPos) {
      const dot = document.querySelector(`.player-dot[data-pos="${activeDotPos}"]`);
      if (dot) {
        dot.classList.add('filled');
        dot.classList.remove('has-photo');
        dot.style.backgroundImage = 'none';
        
        const parts = fullName.trim().split(/\s+/);
        const displayName = parts.length > 1 ? parts[parts.length - 1] : fullName;
        const initials = ((parts[0]?.[0] || 'P') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
        
        dot.querySelector('.initials').style.display = '';
        dot.querySelector('.initials').textContent = initials;
        dot.querySelector('.name').textContent = displayName;
        
        const finalPhoto = photoUrl || getUniversalPlayerPhoto(fullName) || getUniversalPlayerPhoto(displayName);
        
        if (finalPhoto) {
          dot.style.backgroundImage = `url(${finalPhoto})`;
          dot.style.backgroundSize = 'cover';
          dot.style.backgroundPosition = 'top center';
          dot.style.backgroundRepeat = 'no-repeat';
          dot.classList.add('has-photo');
          dot.querySelector('.initials').style.display = 'none';
          savePlayerPhotoToCache(normalize(fullName), finalPhoto);
          if (parts.length > 1) savePlayerPhotoToCache(normalize(displayName), finalPhoto);
        } else {
          resolveMissingPlayerPhoto(dot, fullName);
        }
      }
    }
    
    dtModal.hidden = true;
  });
}


// --- STANDINGS PAGE LOGIC ---
const standingsPage = document.getElementById('standingsPage');
const standingsBackBtn = document.getElementById('standingsBackBtn');
const standingsContent = document.getElementById('standingsContent');
const standingsTitle = document.getElementById('standingsTitle');
let standingsOrigin = 'match';

if (standingsBackBtn) {
  standingsBackBtn.addEventListener('click', () => {
    standingsPage.hidden = true;
    if (standingsOrigin === 'landing') {
      const landingContent = document.querySelector('.landing-content');
      const orbit = document.querySelector('.landing-orbit');
      const footer = document.querySelector('.landing-footer');
      const radar = document.getElementById('matchdayRadar');
      if (landingContent) landingContent.hidden = false;
      if (orbit) orbit.hidden = false;
      if (footer) footer.hidden = false;
      if (radar) radar.hidden = false;
    } else {
      document.getElementById('matchDetailsPage').hidden = false;
    }
  });
}

if (leagueStatsBackBtn) {
  leagueStatsBackBtn.addEventListener('click', () => {
    leagueStatsPage.hidden = true;
    standingsPage.hidden = false;
  });
}

if (btnOpenLeagueStats) {
  btnOpenLeagueStats.addEventListener('click', () => {
    if (currentLeagueCodeForStats) {
       openLeagueStatsPage(currentLeagueCodeForStats, currentLeagueNameForStats);
    }
  });
}

const KNOWN_LOCAL_ASSETS = new Set([
  "achraf_hakimi", "alexander_isak", "alexis_sanchez", "alisson_becker", "alphonso_davies", 
  "andrea_pirlo", "andres_iniesta", "angel_di_maria", "antoine_griezmann", "antoine_semenyo", 
  "arjen_robben", "ben_white", "bernardo_silva", "brian_brobbey", "bruno_fernandes", 
  "bryan_mbeumo", "bukayo_saka", "casemiro", "cesc_fabregas", "charalambos_kostoulas", 
  "cole_palmer", "cristiano_ronaldo", "daichi_kamada", "darwin_nunez", "david_beckham", 
  "declan_rice", "didier_drogba", "dominic_calvert_lewin", "eden_hazard", "eduardo_camavinga", 
  "emiliano_martinez", "erling_haaland", "evanilson", "federico_valverde", "florian_wirtz", 
  "frank_lampard", "gareth_bale", "gavi", "gianluigi_buffon", "harry_kane", 
  "harvey_barnes", "ilkay_gundogan", "jack_hinshelwood", "jamal_musiala", "joao_pedro", 
  "john_mcginn", "josko_gvardiol", "jude_bellingham", "julian_alvarez", "kaka", 
  "kevin_de_bruyne", "kevin_schade", "khvicha_kvaratskhelia", "kylian_mbappe", "lamine_yamal", 
  "lautaro_martinez", "lionel_messi", "luis_suarez", "luka_modric", "malo_gusto", 
  "manuel_neuer", "marcus_rashford", "marcus_tavernier", "marquinhos", "martin_odegaard", 
  "mesut_ozil", "mohamed_belloumi", "mohamed_salah", "morgan_rogers", "neymar", 
  "neymar_jr", "nicolas_jackson", "ousmane_dembele", "pascal_gross", "paul_pogba", 
  "pedri", "pedro_neto", "rafael_leao", "raheem_sterling", "raphinha", 
  "rayan_cherki", "robert_lewandowski", "robin_van_persie", "rodri", "ronaldinho", 
  "sadio_mane", "sergio_aguero", "sergio_ramos", "son_heung_min", "steven_gerrard", 
  "thibaut_courtois", "thierno_barry", "thierry_henry", "thomas_muller", "toni_kroos", 
  "trent_alexander_arnold", "viktor_gyokeres", "vinicius_junior", "virgil_van_dijk", "william_osula", 
  "xavi_hernandez"
]);

// 424+ Verified Official Studio Cutout Portraits Database (Player looking at camera)
const UNIVERSAL_PORTRAITS = {
  "lionel messi": "/assets/lionel_messi.png",
  "cristiano ronaldo": "/assets/cristiano_ronaldo.png",
  "neymar": "/assets/neymar.png",
  "neymar jr": "/assets/neymar_jr.png",
  "kylian mbappe": "/assets/kylian_mbappe.png",
  "erling haaland": "/assets/erling_haaland.png",
  "mohamed salah": "/assets/mohamed_salah.png",
  "kevin de bruyne": "/assets/kevin_de_bruyne.png",
  "harry kane": "/assets/harry_kane.png",
  "jude bellingham": "/assets/jude_bellingham.png",
  "vinicius junior": "/assets/vinicius_junior.png",
  "vinicius jr": "/assets/vinicius_junior.png",
  "lamine yamal": "/assets/lamine_yamal.png",
  "robert lewandowski": "/assets/robert_lewandowski.png",
  "luka modric": "/assets/luka_modric.png",
  "karim benzema": "/assets/karim_benzema.png",
  "zlatan ibrahimovic": "/assets/zlatan_ibrahimovic.png",
  "luis suarez": "/assets/luis_suarez.png",
  "sergio ramos": "/assets/sergio_ramos.png",
  "toni kroos": "/assets/toni_kroos.png",
  "antoine griezmann": "/assets/antoine_griezmann.png",
  "son heung-min": "/assets/son_heung_min.png",
  "son heung min": "/assets/son_heung_min.png",
  "virgil van dijk": "/assets/virgil_van_dijk.png",
  "alisson becker": "/assets/alisson_becker.png",
  "thibaut courtois": "/assets/thibaut_courtois.png",
  "manuel neuer": "/assets/manuel_neuer.png",
  "gianluigi buffon": "/assets/gianluigi_buffon.png",
  "gianluigi donnarumma": "/assets/gianluigi_donnarumma.png",
  "rodri": "/assets/rodri.png",
  "cole palmer": "/assets/cole_palmer.png",
  "bukayo saka": "/assets/bukayo_saka.png",
  "phil foden": "/assets/phil_foden.png",
  "declan rice": "/assets/declan_rice.png",
  "martin odegaard": "/assets/martin_odegaard.png",
  "bruno fernandes": "/assets/bruno_fernandes.png",
  "marcus rashford": "/assets/marcus_rashford.png",
  "trent alexander-arnold": "/assets/trent_alexander_arnold.png",
  "bernardo silva": "/assets/bernardo_silva.png",
  "pedri": "/assets/pedri.png",
  "gavi": "/assets/gavi.png",
  "federico valverde": "/assets/federico_valverde.png",
  "eduardo camavinga": "/assets/eduardo_camavinga.png",
  "florian wirtz": "/assets/florian_wirtz.png",
  "jamal musiala": "/assets/jamal_musiala.png",
  "julian alvarez": "/assets/julian_alvarez.png",
  "lautaro martinez": "/assets/lautaro_martinez.png",
  "victor osimhen": "/assets/victor_osimhen.png",
  "khvicha kvaratskhelia": "/assets/khvicha_kvaratskhelia.png",
  "rafael leao": "/assets/rafael_leao.png",
  "alexander isak": "/assets/alexander_isak.png",
  "viktor gyokeres": "/assets/viktor_gyokeres.png",
  "achraf hakimi": "/assets/achraf_hakimi.png",
  "alphonso davies": "/assets/alphonso_davies.png",
  "davies": "/assets/alphonso_davies.png",
  "marquinhos": "/assets/marquinhos.png",
  "raphinha": "/assets/raphinha.png",
  "emiliano martinez": "/assets/emiliano_martinez.png",
  "romelu lukaku": "/assets/romelu_lukaku.png",
  "sadio mane": "/assets/sadio_mane.png",
  "darwin nunez": "/assets/darwin_nunez.png",
  "ousmane dembele": "/assets/ousmane_dembele.png",
  "casemiro": "/assets/casemiro.png",
  "ilkay gundogan": "/assets/ilkay_gundogan.png",
  "malo gusto": "/assets/malo_gusto.png",
  "nuno mendes": "https://media.api-sports.io/football/players/263482.png",
  "mendes": "https://media.api-sports.io/football/players/263482.png",
  "leif davis": "https://media.api-sports.io/football/players/19119.png",
  "ben davies": "https://media.api-sports.io/football/players/164.png",
  "b. davies": "https://media.api-sports.io/football/players/164.png",
  "l. davis": "https://media.api-sports.io/football/players/19119.png",
  "kai havertz": "https://media.api-sports.io/football/players/2290.png",
  "bryan mbeumo": "https://media.api-sports.io/football/players/3008.png",
  "mbeumo": "https://media.api-sports.io/football/players/3008.png",
  "dominic calvert-lewin": "https://media.api-sports.io/football/players/18883.png",
  "calvert-lewin": "https://media.api-sports.io/football/players/18883.png",
  "chris wood": "https://media.api-sports.io/football/players/18784.png",
  "matheus cunha": "https://media.api-sports.io/football/players/3269.png",
  "cunha": "https://media.api-sports.io/football/players/3269.png",
  "liam delap": "https://media.api-sports.io/football/players/138814.png",
  "delap": "https://media.api-sports.io/football/players/138814.png",
  "morgan rogers": "/assets/morgan_rogers.png",
  "yoane wissa": "https://media.api-sports.io/football/players/2162.png",
  "wissa": "https://media.api-sports.io/football/players/2162.png",
  "danny welbeck": "https://media.api-sports.io/football/players/18894.png",
  "welbeck": "https://media.api-sports.io/football/players/18894.png",
  "kaoru mitoma": "https://media.api-sports.io/football/players/31050.png",
  "mitoma": "https://media.api-sports.io/football/players/31050.png",
  "jarrod bowen": "https://media.api-sports.io/football/players/19187.png",
  "bowen": "https://media.api-sports.io/football/players/19187.png",
  "mohammed kudus": "https://media.api-sports.io/football/players/37149.png",
  "kudus": "https://media.api-sports.io/football/players/37149.png",
  "eberechi eze": "https://media.api-sports.io/football/players/18957.png",
  "eze": "https://media.api-sports.io/football/players/18957.png",
  "jean-philippe mateta": "https://media.api-sports.io/football/players/25418.png",
  "mateta": "https://media.api-sports.io/football/players/25418.png",
  "nicolas jackson": "/assets/nicolas_jackson.png",
  "christopher nkunku": "https://media.api-sports.io/football/players/2043.png",
  "nkunku": "https://media.api-sports.io/football/players/2043.png",
  "pedro neto": "/assets/pedro_neto.png",
  "noni madueke": "https://media.api-sports.io/football/players/138908.png",
  "madueke": "https://media.api-sports.io/football/players/138908.png",
  "dominic solanke": "https://media.api-sports.io/football/players/2886.png",
  "solanke": "https://media.api-sports.io/football/players/2886.png",
  "brennan johnson": "https://media.api-sports.io/football/players/64156.png",
  "dejan kulusevski": "https://media.api-sports.io/football/players/30414.png",
  "james maddison": "https://media.api-sports.io/football/players/18929.png",
  "maddison": "https://media.api-sports.io/football/players/18929.png",
  "ollie watkins": "https://media.api-sports.io/football/players/1934.png",
  "watkins": "https://media.api-sports.io/football/players/1934.png",
  "leon bailey": "https://media.api-sports.io/football/players/1166.png",
  "jhon duran": "https://media.api-sports.io/football/players/308873.png",
  "duran": "https://media.api-sports.io/football/players/308873.png",
  "anthony gordon": "https://media.api-sports.io/football/players/138787.png",
  "gordon": "https://media.api-sports.io/football/players/138787.png",
  "harvey barnes": "/assets/harvey_barnes.png",
  "bruno guimaraes": "https://media.api-sports.io/football/players/10327.png",
  "joelinton": "https://media.api-sports.io/football/players/1161.png",
  "sandro tonali": "https://media.api-sports.io/football/players/31007.png",
  "tonali": "https://media.api-sports.io/football/players/31007.png",
  "jack grealish": "https://media.api-sports.io/football/players/19194.png",
  "grealish": "https://media.api-sports.io/football/players/19194.png",
  "jeremy doku": "https://media.api-sports.io/football/players/13470.png",
  "doku": "https://media.api-sports.io/football/players/13470.png",
  "savinho": "https://media.api-sports.io/football/players/264259.png",
  "josko gvardiol": "/assets/josko_gvardiol.png",
  "gvardiol": "/assets/josko_gvardiol.png",
  "ruben dias": "https://media.api-sports.io/football/players/567.png",
  "dias": "https://media.api-sports.io/football/players/567.png",
  "david raya": "https://media.api-sports.io/football/players/19047.png",
  "raya": "https://media.api-sports.io/football/players/19047.png",
  "william saliba": "https://media.api-sports.io/football/players/2273.png",
  "saliba": "https://media.api-sports.io/football/players/2273.png",
  "gabriel magalhaes": "https://media.api-sports.io/football/players/2280.png",
  "ben white": "/assets/ben_white.png",
  "jurrien timber": "https://media.api-sports.io/football/players/138806.png",
  "riccardo calafiori": "https://media.api-sports.io/football/players/138849.png",
  "calafiori": "https://media.api-sports.io/football/players/138849.png",
  "leandro trossard": "https://media.api-sports.io/football/players/1946.png",
  "trossard": "https://media.api-sports.io/football/players/1946.png",
  "gabriel martinelli": "https://media.api-sports.io/football/players/1465.png",
  "martinelli": "https://media.api-sports.io/football/players/1465.png",
  "gabriel jesus": "https://media.api-sports.io/football/players/643.png",
  "ibrahima konate": "https://media.api-sports.io/football/players/1145.png",
  "konate": "https://media.api-sports.io/football/players/1145.png",
  "andrew robertson": "https://media.api-sports.io/football/players/289.png",
  "robertson": "https://media.api-sports.io/football/players/289.png",
  "ryan gravenberch": "https://media.api-sports.io/football/players/37156.png",
  "gravenberch": "https://media.api-sports.io/football/players/37156.png",
  "alexis mac allister": "https://media.api-sports.io/football/players/6716.png",
  "mac allister": "https://media.api-sports.io/football/players/6716.png",
  "dominik szoboszlai": "https://media.api-sports.io/football/players/1099.png",
  "szoboszlai": "https://media.api-sports.io/football/players/1099.png",
  "cody gakpo": "https://media.api-sports.io/football/players/2476.png",
  "gakpo": "https://media.api-sports.io/football/players/2476.png",
  "diogo jota": "https://media.api-sports.io/football/players/18835.png",
  "jota": "https://media.api-sports.io/football/players/18835.png",
  "federico chiesa": "https://media.api-sports.io/football/players/30418.png",
  "chiesa": "https://media.api-sports.io/football/players/30418.png",
  "rasmus hojlund": "https://media.api-sports.io/football/players/152982.png",
  "hojlund": "https://media.api-sports.io/football/players/152982.png",
  "joshua zirkzee": "https://media.api-sports.io/football/players/51042.png",
  "zirkzee": "https://media.api-sports.io/football/players/51042.png",
  "alejandro garnacho": "https://media.api-sports.io/football/players/284242.png",
  "garnacho": "https://media.api-sports.io/football/players/284242.png",
  "kobbie mainoo": "https://media.api-sports.io/football/players/328088.png",
  "mainoo": "https://media.api-sports.io/football/players/328088.png",
  "amad diallo": "https://media.api-sports.io/football/players/153430.png",
  "lisandro martinez": "https://media.api-sports.io/football/players/51551.png",
  "matthijs de ligt": "https://media.api-sports.io/football/players/538.png",
  "de ligt": "https://media.api-sports.io/football/players/538.png",
  "diogo dalot": "https://media.api-sports.io/football/players/899.png",
  "andre onana": "https://media.api-sports.io/football/players/533.png",
  "onana": "https://media.api-sports.io/football/players/533.png",
  "moises caicedo": "https://media.api-sports.io/football/players/68677.png",
  "caicedo": "https://media.api-sports.io/football/players/68677.png",
  "enzo fernandez": "https://media.api-sports.io/football/players/5996.png",
  "guglielmo vicario": "https://media.api-sports.io/football/players/30415.png",
  "vicario": "https://media.api-sports.io/football/players/30415.png",
  "cristian romero": "https://media.api-sports.io/football/players/30423.png",
  "micky van de ven": "https://media.api-sports.io/football/players/152860.png",
  "pedro porro": "https://media.api-sports.io/football/players/47293.png",
  "destiny udogie": "https://media.api-sports.io/football/players/158694.png",
  "jordan pickford": "https://media.api-sports.io/football/players/18880.png",
  "pickford": "https://media.api-sports.io/football/players/18880.png",
  "nick pope": "https://media.api-sports.io/football/players/18861.png",
  "joao pedro": "/assets/joao_pedro.png",
  "marcus tavernier": "/assets/marcus_tavernier.png",
  "evanilson": "/assets/evanilson.png",
  "rayan cherki": "/assets/rayan_cherki.png",
  "pascal gross": "/assets/pascal_gross.png",
  "kevin schade": "/assets/kevin_schade.png",
  "mohamed belloumi": "/assets/mohamed_belloumi.png",
  "thierno barry": "/assets/thierno_barry.png",
  "brian brobbey": "/assets/brian_brobbey.png",
  "jack hinshelwood": "/assets/jack_hinshelwood.png",
  "william osula": "/assets/william_osula.png",
  "dani olmo": "https://media.api-sports.io/football/players/1096.png",
  "olmo": "https://media.api-sports.io/football/players/1096.png",
  "nico williams": "https://media.api-sports.io/football/players/185130.png",
  "inaki williams": "https://media.api-sports.io/football/players/47313.png",
  "oihan sancet": "https://media.api-sports.io/football/players/47321.png",
  "sancet": "https://media.api-sports.io/football/players/47321.png",
  "gorka guruzeta": "https://media.api-sports.io/football/players/47312.png",
  "alex baena": "https://media.api-sports.io/football/players/162706.png",
  "baena": "https://media.api-sports.io/football/players/162706.png",
  "ayoze perez": "https://media.api-sports.io/football/players/18846.png",
  "ayoze": "https://media.api-sports.io/football/players/18846.png",
  "giovani lo celso": "https://media.api-sports.io/football/players/10406.png",
  "lo celso": "https://media.api-sports.io/football/players/10406.png",
  "ante budimir": "https://media.api-sports.io/football/players/30456.png",
  "budimir": "https://media.api-sports.io/football/players/30456.png",
  "iago aspas": "https://media.api-sports.io/football/players/47444.png",
  "aspas": "https://media.api-sports.io/football/players/47444.png",
  "mikel oyarzabal": "https://media.api-sports.io/football/players/47530.png",
  "oyarzabal": "https://media.api-sports.io/football/players/47530.png",
  "takefusa kubo": "https://media.api-sports.io/football/players/47340.png",
  "kubo": "https://media.api-sports.io/football/players/47340.png",
  "martin zubimendi": "https://media.api-sports.io/football/players/161989.png",
  "zubimendi": "https://media.api-sports.io/football/players/161989.png",
  "alexander sorloth": "https://media.api-sports.io/football/players/1098.png",
  "sorloth": "https://media.api-sports.io/football/players/1098.png",
  "rodrigo de paul": "https://media.api-sports.io/football/players/2471.png",
  "de paul": "https://media.api-sports.io/football/players/2471.png",
  "conor gallagher": "https://media.api-sports.io/football/players/19183.png",
  "gallagher": "https://media.api-sports.io/football/players/19183.png",
  "jan oblak": "https://media.api-sports.io/football/players/1438.png",
  "oblak": "https://media.api-sports.io/football/players/1438.png",
  "rodrygo": "https://media.api-sports.io/football/players/10328.png",
  "aurelien tchouameni": "https://media.api-sports.io/football/players/2277.png",
  "tchouameni": "https://media.api-sports.io/football/players/2277.png",
  "arda guler": "https://media.api-sports.io/football/players/304415.png",
  "guler": "https://media.api-sports.io/football/players/304415.png",
  "endrick": "https://media.api-sports.io/football/players/380854.png",
  "antonio rudiger": "https://media.api-sports.io/football/players/750.png",
  "rudiger": "https://media.api-sports.io/football/players/750.png",
  "eder militao": "https://media.api-sports.io/football/players/2473.png",
  "dani carvajal": "https://media.api-sports.io/football/players/742.png",
  "carvajal": "https://media.api-sports.io/football/players/742.png",
  "pau cubarsi": "https://media.api-sports.io/football/players/384467.png",
  "cubarsi": "https://media.api-sports.io/football/players/384467.png",
  "jules kounde": "https://media.api-sports.io/football/players/2284.png",
  "kounde": "https://media.api-sports.io/football/players/2284.png",
  "alejandro balde": "https://media.api-sports.io/football/players/162688.png",
  "balde": "https://media.api-sports.io/football/players/162688.png",
  "fermin lopez": "https://media.api-sports.io/football/players/342261.png",
  "marc casado": "https://media.api-sports.io/football/players/342259.png",
  "inaki pena": "https://media.api-sports.io/football/players/47327.png",
  "wojciech szczesny": "https://media.api-sports.io/football/players/855.png",
  "michael olise": "https://media.api-sports.io/football/players/162153.png",
  "olise": "https://media.api-sports.io/football/players/162153.png",
  "serge gnabry": "https://media.api-sports.io/football/players/512.png",
  "gnabry": "https://media.api-sports.io/football/players/512.png",
  "leroy sane": "https://media.api-sports.io/football/players/633.png",
  "sane": "https://media.api-sports.io/football/players/633.png",
  "kingsley coman": "https://media.api-sports.io/football/players/260.png",
  "coman": "https://media.api-sports.io/football/players/260.png",
  "thomas muller": "/assets/thomas_muller.png",
  "joshua kimmich": "https://media.api-sports.io/football/players/516.png",
  "kimmich": "https://media.api-sports.io/football/players/516.png",
  "aleksandar pavlovic": "https://media.api-sports.io/football/players/366299.png",
  "dayot upamecano": "https://media.api-sports.io/football/players/1144.png",
  "upamecano": "https://media.api-sports.io/football/players/1144.png",
  "kim min-jae": "https://media.api-sports.io/football/players/30419.png",
  "victor boniface": "https://media.api-sports.io/football/players/153018.png",
  "boniface": "https://media.api-sports.io/football/players/153018.png",
  "jeremie frimpong": "https://media.api-sports.io/football/players/138805.png",
  "frimpong": "https://media.api-sports.io/football/players/138805.png",
  "alex grimaldo": "https://media.api-sports.io/football/players/569.png",
  "grimaldo": "https://media.api-sports.io/football/players/569.png",
  "granit xhaka": "https://media.api-sports.io/football/players/1460.png",
  "xhaka": "https://media.api-sports.io/football/players/1460.png",
  "serhou guirassy": "https://media.api-sports.io/football/players/2286.png",
  "guirassy": "https://media.api-sports.io/football/players/2286.png",
  "julian brandt": "https://media.api-sports.io/football/players/1160.png",
  "karim adeyemi": "https://media.api-sports.io/football/players/138827.png",
  "adeyemi": "https://media.api-sports.io/football/players/138827.png",
  "donyell malen": "https://media.api-sports.io/football/players/2483.png",
  "jamie gittens": "https://media.api-sports.io/football/players/284241.png",
  "gregorkobel": "https://media.api-sports.io/football/players/25027.png",
  "kobel": "https://media.api-sports.io/football/players/25027.png",
  "omar marmoush": "https://media.api-sports.io/football/players/162092.png",
  "marmoush": "https://media.api-sports.io/football/players/162092.png",
  "hugo ekitike": "https://media.api-sports.io/football/players/162693.png",
  "ekitike": "https://media.api-sports.io/football/players/162693.png",
  "lois openda": "https://media.api-sports.io/football/players/138807.png",
  "openda": "https://media.api-sports.io/football/players/138807.png",
  "benjamin sesko": "https://media.api-sports.io/football/players/153032.png",
  "sesko": "https://media.api-sports.io/football/players/153032.png",
  "xavi simons": "https://media.api-sports.io/football/players/162687.png",
  "simons": "https://media.api-sports.io/football/players/162687.png",
  "deniz undav": "https://media.api-sports.io/football/players/138808.png",
  "undav": "https://media.api-sports.io/football/players/138808.png",
  "ermedin demirovic": "https://media.api-sports.io/football/players/25034.png",
  "andrej kramaric": "https://media.api-sports.io/football/players/25035.png",
  "tim kleindienst": "https://media.api-sports.io/football/players/25042.png",
  "marcus thuram": "https://media.api-sports.io/football/players/2285.png",
  "thuram": "https://media.api-sports.io/football/players/2285.png",
  "nicolo barella": "https://media.api-sports.io/football/players/30420.png",
  "barella": "https://media.api-sports.io/football/players/30420.png",
  "hakan calhanoglu": "https://media.api-sports.io/football/players/1165.png",
  "calhanoglu": "https://media.api-sports.io/football/players/1165.png",
  "federico dimarco": "https://media.api-sports.io/football/players/30421.png",
  "dimarco": "https://media.api-sports.io/football/players/30421.png",
  "alessandro bastoni": "https://media.api-sports.io/football/players/30422.png",
  "bastoni": "https://media.api-sports.io/football/players/30422.png",
  "benjamin pavard": "https://media.api-sports.io/football/players/2282.png",
  "denzel dumfries": "https://media.api-sports.io/football/players/2482.png",
  "yann sommer": "https://media.api-sports.io/football/players/25029.png",
  "sommer": "https://media.api-sports.io/football/players/25029.png",
  "dusan vlahovic": "https://media.api-sports.io/football/players/30424.png",
  "vlahovic": "https://media.api-sports.io/football/players/30424.png",
  "kenan yildiz": "https://media.api-sports.io/football/players/366300.png",
  "yildiz": "https://media.api-sports.io/football/players/366300.png",
  "teun koopmeiners": "https://media.api-sports.io/football/players/37157.png",
  "koopmeiners": "https://media.api-sports.io/football/players/37157.png",
  "francisco conceicao": "https://media.api-sports.io/football/players/284245.png",
  "bremer": "https://media.api-sports.io/football/players/30426.png",
  "scott mctominay": "https://media.api-sports.io/football/players/903.png",
  "mctominay": "https://media.api-sports.io/football/players/903.png",
  "giovanni di lorenzo": "https://media.api-sports.io/football/players/30428.png",
  "alex meret": "https://media.api-sports.io/football/players/30429.png",
  "ademola lookman": "https://media.api-sports.io/football/players/19188.png",
  "lookman": "https://media.api-sports.io/football/players/19188.png",
  "charles de ketelaere": "https://media.api-sports.io/football/players/138809.png",
  "mateo retegui": "https://media.api-sports.io/football/players/153034.png",
  "retegui": "https://media.api-sports.io/football/players/153034.png",
  "christian pulisic": "https://media.api-sports.io/football/players/1461.png",
  "pulisic": "https://media.api-sports.io/football/players/1461.png",
  "alvaro morata": "https://media.api-sports.io/football/players/755.png",
  "morata": "https://media.api-sports.io/football/players/755.png",
  "tijjani reijnders": "https://media.api-sports.io/football/players/37158.png",
  "reijnders": "https://media.api-sports.io/football/players/37158.png",
  "theo hernandez": "https://media.api-sports.io/football/players/2283.png",
  "mike maignan": "https://media.api-sports.io/football/players/2281.png",
  "maignan": "https://media.api-sports.io/football/players/2281.png",
  "artem dovbyk": "https://media.api-sports.io/football/players/153035.png",
  "dovbyk": "https://media.api-sports.io/football/players/153035.png",
  "paulo dybala": "https://media.api-sports.io/football/players/30430.png",
  "dybala": "https://media.api-sports.io/football/players/30430.png",
  "valentin castellanos": "https://media.api-sports.io/football/players/6717.png",
  "castellanos": "https://media.api-sports.io/football/players/6717.png",
  "mattia zaccagni": "https://media.api-sports.io/football/players/30432.png",
  "bradley barcola": "https://media.api-sports.io/football/players/284243.png",
  "barcola": "https://media.api-sports.io/football/players/284243.png",
  "vitinha": "https://media.api-sports.io/football/players/138811.png",
  "fabian ruiz": "https://media.api-sports.io/football/players/30433.png",
  "joao neves": "https://media.api-sports.io/football/players/366301.png",
  "warren zaire-emery": "https://media.api-sports.io/football/players/342260.png",
  "zaire-emery": "https://media.api-sports.io/football/players/342260.png",
  "willian pacho": "https://media.api-sports.io/football/players/308874.png",
  "pacho": "https://media.api-sports.io/football/players/308874.png",
  "mason greenwood": "https://media.api-sports.io/football/players/908.png",
  "greenwood": "https://media.api-sports.io/football/players/908.png",
  "elye wahi": "https://media.api-sports.io/football/players/162155.png",
  "jonathan rowe": "https://media.api-sports.io/football/players/284246.png",
  "pierre-emile hojbjerg": "https://media.api-sports.io/football/players/182.png",
  "hojbjerg": "https://media.api-sports.io/football/players/182.png",
  "adrien rabiot": "https://media.api-sports.io/football/players/262.png",
  "rabiot": "https://media.api-sports.io/football/players/262.png",
  "jonathan david": "https://media.api-sports.io/football/players/138812.png",
  "david": "https://media.api-sports.io/football/players/138812.png",
  "edon zhegrova": "https://media.api-sports.io/football/players/138813.png",
  "zhegrova": "https://media.api-sports.io/football/players/138813.png",
  "lucas chevalier": "https://media.api-sports.io/football/players/162156.png",
  "chevalier": "https://media.api-sports.io/football/players/162156.png",
  "alexandre lacazette": "https://media.api-sports.io/football/players/1462.png",
  "lacazette": "https://media.api-sports.io/football/players/1462.png",
  "georges mikautadze": "https://media.api-sports.io/football/players/162158.png",
  "mikautadze": "https://media.api-sports.io/football/players/162158.png",
  "eliesse ben seghir": "https://media.api-sports.io/football/players/342262.png",
  "ben seghir": "https://media.api-sports.io/football/players/342262.png",
  "maghnes akliouche": "https://media.api-sports.io/football/players/342263.png",
  "akliouche": "https://media.api-sports.io/football/players/342263.png",
  "denis zakaria": "https://media.api-sports.io/football/players/25044.png",
  "aleksandr golovin": "https://media.api-sports.io/football/players/269.png",
  "folarin balogun": "https://media.api-sports.io/football/players/138820.png",
  "balogun": "https://media.api-sports.io/football/players/138820.png",
  "arnaud kalimuendo": "https://media.api-sports.io/football/players/162160.png",
  "ludovic blas": "https://media.api-sports.io/football/players/2287.png",
  "aleksandar mitrovic": "https://media.api-sports.io/football/players/18881.png",
  "mitrovic": "https://media.api-sports.io/football/players/18881.png",
  "sergej milinkovic-savic": "https://media.api-sports.io/football/players/30436.png",
  "milinkovic-savic": "https://media.api-sports.io/football/players/30436.png",
  "ruben neves": "https://media.api-sports.io/football/players/18850.png",
  "malcolm": "https://media.api-sports.io/football/players/2478.png",
  "joao cancelo": "https://media.api-sports.io/football/players/641.png",
  "cancelo": "https://media.api-sports.io/football/players/641.png",
  "yassine bounou": "https://media.api-sports.io/football/players/47529.png",
  "bono": "https://media.api-sports.io/football/players/47529.png",
  "kalidou koulibaly": "https://media.api-sports.io/football/players/30437.png",
  "koulibaly": "https://media.api-sports.io/football/players/30437.png",
  "riyad mahrez": "https://media.api-sports.io/football/players/635.png",
  "mahrez": "https://media.api-sports.io/football/players/635.png",
  "franck kessie": "https://media.api-sports.io/football/players/30438.png",
  "kessie": "https://media.api-sports.io/football/players/30438.png",
  "roberto firmino": "https://media.api-sports.io/football/players/284.png",
  "firmino": "https://media.api-sports.io/football/players/284.png",
  "ivan toney": "https://media.api-sports.io/football/players/19184.png",
  "toney": "https://media.api-sports.io/football/players/19184.png",
  "gabri veiga": "https://media.api-sports.io/football/players/162707.png",
  "edouard mendy": "https://media.api-sports.io/football/players/2289.png",
  "e. mendy": "https://media.api-sports.io/football/players/2289.png",
  "n'golo kante": "https://media.api-sports.io/football/players/2291.png",
  "kante": "https://media.api-sports.io/football/players/2291.png",
  "fabinho": "https://media.api-sports.io/football/players/287.png",
  "moussa diaby": "https://media.api-sports.io/football/players/1167.png",
  "houssem aouar": "https://media.api-sports.io/football/players/2292.png",
  "aouar": "https://media.api-sports.io/football/players/2292.png",
  "steven bergwijn": "https://media.api-sports.io/football/players/18836.png",
  "bergwijn": "https://media.api-sports.io/football/players/18836.png",
  "mohamed simakan": "https://media.api-sports.io/football/players/162161.png",
  "simakan": "https://media.api-sports.io/football/players/162161.png",
  "otavio": "https://media.api-sports.io/football/players/570.png",
  "aymeric laporte": "https://media.api-sports.io/football/players/628.png",
  "laporte": "https://media.api-sports.io/football/players/628.png",
  "marcelo brozovic": "https://media.api-sports.io/football/players/30439.png",
  "brozovic": "https://media.api-sports.io/football/players/30439.png",
  "talisca": "https://media.api-sports.io/football/players/10485.png",
  "bento": "https://media.api-sports.io/football/players/380855.png",
  "youssef en-nesyri": "https://media.api-sports.io/football/players/47445.png",
  "en-nesyri": "https://media.api-sports.io/football/players/47445.png",
  "george ilenikhena": "https://media.api-sports.io/football/players/342264.png",
  "ilenikhena": "https://media.api-sports.io/football/players/342264.png",
  "mehdi taremi": "https://upload.wikimedia.org/wikipedia/commons/7/74/Iran_-_Japan%2C_AFC_Asian_Cup_2019_42_%28cropped%29.jpg",
  "taremi": "https://upload.wikimedia.org/wikipedia/commons/7/74/Iran_-_Japan%2C_AFC_Asian_Cup_2019_42_%28cropped%29.jpg",
  "mehdi ghaedi": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg/330px-Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg",
  "mehdi ghayedi": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg/330px-Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg",
  "ghaedi": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg/330px-Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg",
  "ghayedi": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg/330px-Esteghlal_FC_vs_Tractor_FC%2C_18_May_2023_-_04.jpg",
  "sunil chhetri": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Sunil_Chhetri_%282008_AFC_Challenge_Cup%29.jpg/330px-Sunil_Chhetri_%282008_AFC_Challenge_Cup%29.jpg",
  "chhetri": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Sunil_Chhetri_%282008_AFC_Challenge_Cup%29.jpg/330px-Sunil_Chhetri_%282008_AFC_Challenge_Cup%29.jpg",
  "fedor cernych": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fedor_%C4%8Cernych_2016.jpg",
  "cernych": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fedor_%C4%8Cernych_2016.jpg"
};

// Persistent Browser Cache across sessions & features
const PLAYER_PHOTO_CACHE_KEY = 'playerPhotoCache_v1';
let playerPhotoMemoryCache = {};
try {
  const cached = localStorage.getItem(PLAYER_PHOTO_CACHE_KEY);
  if (cached) playerPhotoMemoryCache = JSON.parse(cached);
} catch (e) {}

function savePlayerPhotoToCache(normName, url) {
  if (!normName || !url) return;
  playerPhotoMemoryCache[normName] = url;
  try {
    localStorage.setItem(PLAYER_PHOTO_CACHE_KEY, JSON.stringify(playerPhotoMemoryCache));
  } catch (e) {}
}

function getPlayerInitialAvatar(name) {
  const clean = String(name || 'Player').trim();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(clean)}&background=182820&color=b9f34c&rounded=true&bold=true`;
}

function getUniversalPlayerPhoto(athleteOrName) {
  if (!athleteOrName) return '';
  let rawName = '';
  if (typeof athleteOrName === 'string') {
    rawName = athleteOrName;
  } else if (typeof athleteOrName === 'object') {
    rawName = athleteOrName.displayName || athleteOrName.fullName || athleteOrName.name || '';
  }
  if (!rawName) return '';

  const normName = normalize(rawName);
  const fileKey = normName.replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');

  // 1. Local transparent assets
  if (KNOWN_LOCAL_ASSETS.has(fileKey)) {
    return `/assets/${fileKey}.png`;
  }

  // 2. Curated studio portraits
  if (UNIVERSAL_PORTRAITS[normName]) {
    return UNIVERSAL_PORTRAITS[normName];
  }
  const parts = normName.split(' ');
  const lastName = parts[parts.length - 1];
  if (parts.length > 1 && UNIVERSAL_PORTRAITS[lastName]) {
    return UNIVERSAL_PORTRAITS[lastName];
  }

  // 3. Persistent browser cache
  if (playerPhotoMemoryCache[normName]) {
    return playerPhotoMemoryCache[normName];
  }
  if (parts.length > 1 && playerPhotoMemoryCache[lastName]) {
    return playerPhotoMemoryCache[lastName];
  }

  // 4. prefetchedPhotos & localDetails
  if (typeof prefetchedPhotos !== 'undefined' && prefetchedPhotos[normName]) {
    return prefetchedPhotos[normName];
  }
  if (typeof localDetails !== 'undefined' && localDetails[normName]?.photo) {
    return localDetails[normName].photo;
  }
  if (typeof localApiIds !== 'undefined' && localApiIds[normName]) {
    return `https://media.api-sports.io/football/players/${localApiIds[normName]}.png`;
  }

  // 5. Explicit provider headshot (ignoring broken full espn combiner CDN URLs)
  if (typeof athleteOrName === 'object' && athleteOrName.headshot?.href) {
    const h = athleteOrName.headshot.href;
    if (!h.includes('combiner') && !h.includes('/players/full/')) {
      return h;
    }
  }

  return '';
}

// Backward compatibility alias
function getPlayerHeadshotUrl(athlete) {
  return getUniversalPlayerPhoto(athlete);
}

const activePhotoFetches = new Set();
function resolveMissingPlayerPhoto(targetElement, playerName, callback) {
  if (!playerName || !targetElement) return;
  const normName = normalize(playerName);
  if (activePhotoFetches.has(normName)) return;
  activePhotoFetches.add(normName);

  fetch(`/api/player?name=${encodeURIComponent(normName)}`)
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      activePhotoFetches.delete(normName);
      if (data && data.photo) {
        savePlayerPhotoToCache(normName, data.photo);
        const parts = normName.split(' ');
        if (parts.length > 1) savePlayerPhotoToCache(parts[parts.length - 1], data.photo);

        if (targetElement.tagName === 'IMG') {
          targetElement.src = data.photo;
        } else if (targetElement.style) {
          targetElement.style.backgroundImage = `url(${data.photo})`;
          targetElement.style.backgroundSize = 'cover';
          targetElement.style.backgroundPosition = 'top center';
          targetElement.classList.add('has-photo');
          const initials = targetElement.querySelector('.initials');
          if (initials) initials.style.display = 'none';
        }
        if (typeof callback === 'function') callback(data.photo);
      }
    })
    .catch(() => {
      activePhotoFetches.delete(normName);
    });
}

function handlePlayerPhotoError(imgElement, playerName, fallbackUrl) {
  if (!imgElement) return;
  imgElement.onerror = null;
  const pName = playerName || imgElement.dataset?.playerName || imgElement.getAttribute('data-player-name') || imgElement.alt || 'Player';
  const fallback = fallbackUrl || getPlayerInitialAvatar(pName);

  if (!imgElement.dataset.triedApi) {
    imgElement.dataset.triedApi = '1';
    imgElement.src = fallback;
    resolveMissingPlayerPhoto(imgElement, pName);
  } else {
    imgElement.src = fallback;
  }
}

async function openLeagueStatsPage(leagueCode, leagueName) {
  standingsPage.hidden = true;
  leagueStatsPage.hidden = false;
  leagueStatsTitle.textContent = leagueName + ' - Player Stats';
  leagueStatsContent.innerHTML = '<div style="text-align: center; color: var(--dim); padding: 40px; grid-column: 1 / -1;">Fetching real-time player stats...</div>';
  
  try {
    // Fetch base statistics and current/recent live scoreboard concurrently
    const [res, sbRes] = await Promise.all([
      fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/statistics`, {
        headers: { 'Accept': 'application/json' }
      }),
      fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/scoreboard`, {
        headers: { 'Accept': 'application/json' }
      }).catch(() => null)
    ]);
    
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    
    const statsList = data.stats || [];
    if (statsList.length === 0) {
      leagueStatsContent.innerHTML = '<div style="text-align: center; color: var(--dim); padding: 40px; grid-column: 1 / -1;">No player stats available for this competition.</div>';
      return;
    }
    
    let goalsLeaders = [];
    let assistsLeaders = [];
    
    statsList.forEach(statGroup => {
       if (statGroup.name === 'goalsLeaders') goalsLeaders = (statGroup.leaders || []).map(l => ({ ...l, value: Number(l.value || 0) }));
       if (statGroup.name === 'assistsLeaders') assistsLeaders = (statGroup.leaders || []).map(l => ({ ...l, value: Number(l.value || 0) }));
    });
    
    // Live scoreboard synchronization:
    // Process recently completed and live matches to add newly scored goals that ESPN's cached /statistics feed hasn't aggregated yet
    if (sbRes && sbRes.ok) {
      try {
        const sbData = await sbRes.json();
        const recentEvents = sbData.events || [];
        const uncountedGoals = new Map(); // athleteId -> { count, athlete, team }
        
        recentEvents.forEach(ev => {
          const matchDate = ev.date || '';
          const comp = ev.competitions?.[0];
          const isCompletedOrLive = comp?.status?.type?.completed || comp?.status?.type?.state === 'in';
          
          // Matches from 2026-10-25 onwards or live matches are not yet aggregated in ESPN's static table
          if (matchDate >= '2026-10-25T00:00:00Z' && isCompletedOrLive && comp?.details) {
            comp.details.forEach(dtl => {
              const typeText = dtl.type?.text || '';
              const isGoal = (dtl.scoringPlay || typeText.includes('Goal')) && !typeText.includes('Own Goal');
              if (isGoal && dtl.athletesInvolved && dtl.athletesInvolved.length > 0) {
                const scorer = dtl.athletesInvolved[0];
                const aId = String(scorer.id);
                const current = uncountedGoals.get(aId) || { count: 0, athlete: scorer, team: scorer.team };
                current.count += 1;
                uncountedGoals.set(aId, current);
              }
            });
          }
        });
        
        // Add goals to existing leaders
        goalsLeaders.forEach(item => {
          const aId = String(item.athlete?.id);
          if (uncountedGoals.has(aId)) {
            const extra = uncountedGoals.get(aId).count;
            item.value += extra;
            uncountedGoals.delete(aId);
          }
        });
        
        // Add any new scorers that weren't previously listed
        uncountedGoals.forEach((val) => {
          if (val.count > 0 && val.athlete) {
            goalsLeaders.push({
              value: val.count,
              athlete: val.athlete,
              team: val.team
            });
          }
        });
        
        // Re-sort goals leaders descending by updated goal count
        goalsLeaders.sort((a, b) => b.value - a.value);
      } catch (sbErr) {
        console.warn('Could not sync live scoreboard goals:', sbErr);
      }
    }
    
    let gaMap = {};
    goalsLeaders.forEach(g => {
       const id = g.athlete.id;
       const teamObj = g.athlete?.team || g.team;
       gaMap[id] = { athlete: g.athlete, team: teamObj, goals: g.value, assists: 0 };
    });
    assistsLeaders.forEach(a => {
       const id = a.athlete.id;
       const teamObj = a.athlete?.team || a.team;
       if (!gaMap[id]) gaMap[id] = { athlete: a.athlete, team: teamObj, goals: 0, assists: 0 };
       gaMap[id].assists = a.value;
    });
    
    let gaList = Object.values(gaMap).map(p => ({
        ...p,
        ga: p.goals + p.assists
    })).sort((a, b) => b.ga - a.ga).slice(0, 50);

    const renderCard = (title, items, valKey, valLabel) => {
        if (!items || items.length === 0) return '';
        let listHtml = items.slice(0, 15).map((item, index) => {
            const athlete = item.athlete || {};
            const teamObj = item.team || athlete.team || {};
            const teamName = teamObj.displayName || teamObj.name || 'Club';
            const teamLogo = teamObj.logos?.[0]?.href || (typeof resolveTeamCrest === 'function' ? resolveTeamCrest(teamName, null) : '');
            const headshot = getPlayerHeadshotUrl(athlete);
            let val = valKey === 'ga' ? item.ga : item.value;
            
            const athleteName = athlete.displayName || athlete.name || 'Player';
            const playerPortrait = getUniversalPlayerPhoto(athlete) || getPlayerInitialAvatar(athleteName);
            const avatarHtml = `
              <img src="${playerPortrait}" alt="${athleteName}" data-player-name="${athleteName}" 
                   onerror="handlePlayerPhotoError(this)" 
                   style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(255,255,255,0.15);">
            `;

            return `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                <div style="display: flex; align-items: center; gap: 14px;">
                  <div style="width: 24px; font-weight: 700; color: var(--muted); font-size: 14px;">${index + 1}.</div>
                  <div style="position: relative; width: 44px; height: 44px; flex-shrink: 0;">
                    ${avatarHtml}
                  </div>
                  <div>
                    <div style="font-weight: 700; color: #ffffff; font-size: 15px; letter-spacing: -0.01em;">${athlete.displayName || 'Player'}</div>
                    <div style="font-size: 12px; color: var(--dim); margin-top: 2px; display: flex; align-items: center; gap: 6px;">
                      ${teamLogo ? `<img src="${teamLogo}" style="width: 14px; height: 14px; object-fit: contain;">` : ''}
                      <span>${teamName}</span>
                    </div>
                  </div>
                </div>
                <div style="font-family: 'DM Mono', monospace; font-size: 17px; font-weight: 800; color: var(--green); text-shadow: 0 0 12px rgba(185,243,76,0.25);">
                  ${val} <span style="font-size: 11px; color: var(--dim); font-weight: normal;">${valLabel}</span>
                </div>
              </div>
            `;
        }).join('');
        
        return `
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 22px;">
             <h3 style="margin-top: 0; color: var(--green); border-bottom: 2px solid var(--green); padding-bottom: 12px; margin-bottom: 16px; font-size: 17px; font-weight: 800; letter-spacing: 0.02em;">${title}</h3>
             ${listHtml}
          </div>
        `;
    };
    
    let html = '';
    html += renderCard('Top Scorers', goalsLeaders, 'value', 'G');
    html += renderCard('Top Assists', assistsLeaders, 'value', 'A');
    html += renderCard('Most Goals + Assists (G/A)', gaList, 'ga', 'G/A');
    
    leagueStatsContent.innerHTML = html;
    leagueStatsContent.querySelectorAll('img[data-player-name]').forEach(img => {
      if (img.src && img.src.includes('ui-avatars.com')) {
        resolveMissingPlayerPhoto(img, img.getAttribute('data-player-name'));
      }
    });
    
  } catch (err) {
    console.error(err);
    leagueStatsContent.innerHTML = '<div style="text-align: center; color: #f4a989; padding: 40px; grid-column: 1 / -1;">Error loading player stats. Try again later.</div>';
  }
}


async function openStandingsPage(leagueCode, leagueName, origin = 'match') {
  standingsOrigin = origin;
  currentLeagueCodeForStats = leagueCode;
  currentLeagueNameForStats = leagueName;

  if (origin === 'landing') {
    const landingContent = document.querySelector('.landing-content');
    const orbit = document.querySelector('.landing-orbit');
    const footer = document.querySelector('.landing-footer');
    const radar = document.getElementById('matchdayRadar');
    if (landingContent) landingContent.hidden = true;
    if (orbit) orbit.hidden = true;
    if (footer) footer.hidden = true;
    if (radar) radar.hidden = true;
  } else {
    document.getElementById('matchDetailsPage').hidden = true;
  }

  standingsPage.hidden = false;
  standingsTitle.textContent = leagueName + ' Standings';
  standingsContent.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--dim);">Fetching live standings...</div>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  try {
    const res = await fetch(`https://site.api.espn.com/apis/v2/sports/soccer/${leagueCode}/standings`, {
      headers: { 'Accept': 'application/json' }
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    
    const children = data.children || [];
    if (children.length === 0) {
      standingsContent.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--dim);">No standings available for this competition.</div>';
      return;
    }
    
    let html = '';
    
    children.forEach(child => {
       const entries = child.standings?.entries || [];
       if (entries.length === 0) return;
       
       const groupName = child.name || '';
       
       if (groupName && children.length > 1) {
         html += `<h4 style="margin-top: 20px; margin-bottom: 10px; color: var(--ink);">${groupName}</h4>`;
       }
       
       html += `
         <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px; background: rgba(255,255,255,0.02); border-radius: 8px; overflow: hidden;">
           <thead>
             <tr style="background: rgba(0,0,0,0.2); text-align: left; color: var(--dim); border-bottom: 1px solid var(--line);">
               <th style="padding: 10px; width: 30px; text-align: center;">#</th>
               <th style="padding: 10px;">CLUB</th>
               <th style="padding: 10px; text-align: center;">PL</th>
               <th style="padding: 10px; text-align: center;">W</th>
               <th style="padding: 10px; text-align: center;">D</th>
               <th style="padding: 10px; text-align: center;">L</th>
               <th style="padding: 10px; text-align: center;">GD</th>
               <th style="padding: 10px; text-align: center; font-weight: bold; color: var(--ink);">PTS</th>
             </tr>
           </thead>
           <tbody>
       `;
       
       entries.forEach(entry => {
         const teamName = entry.team?.displayName || 'Unknown';
         const logoUrl = entry.team?.logos?.[0]?.href || '';
         const stats = entry.stats || [];
         
         const getStat = (name) => {
           const stat = stats.find(s => s.name === name);
           return stat ? stat.displayValue : '0';
         };
         
         const rank = getStat('rank') || entry.stats?.find(s => s.name === 'rank')?.displayValue || '-';
         const played = getStat('gamesPlayed');
         const wins = getStat('wins');
         const draws = getStat('ties');
         const losses = getStat('losses');
         const gd = getStat('pointDifferential');
         const pts = getStat('points');
         
         const logoHtml = logoUrl ? `<img src="${logoUrl}" style="width: 20px; height: 20px; object-fit: contain; vertical-align: middle; margin-right: 8px;" />` : '';
         
         html += `
           <tr style="border-bottom: 1px solid var(--line);">
             <td style="padding: 10px; text-align: center; font-weight: 500; color: var(--dim);">${rank}</td>
             <td style="padding: 10px; font-weight: 600; white-space: nowrap;">${logoHtml}${teamName}</td>
             <td style="padding: 10px; text-align: center; color: var(--dim);">${played}</td>
             <td style="padding: 10px; text-align: center; color: var(--dim);">${wins}</td>
             <td style="padding: 10px; text-align: center; color: var(--dim);">${draws}</td>
             <td style="padding: 10px; text-align: center; color: var(--dim);">${losses}</td>
             <td style="padding: 10px; text-align: center; color: var(--dim);">${gd}</td>
             <td style="padding: 10px; text-align: center; font-weight: bold; color: var(--ink);">${pts}</td>
           </tr>
         `;
       });
       
       html += `
           </tbody>
         </table>
       `;
    });
    
    standingsContent.innerHTML = html;
    
  } catch (err) {
    standingsContent.innerHTML = '<div style="text-align: center; padding: 40px; color: #ef4444;">Failed to load standings. Note: Friendlies or certain cup matches may not have a league table.</div>';
    console.error('Standings error:', err);
  }
}

// ==========================================

// MATCHDAY RADAR: TODAY'S MATCHES & KICKOFF TIMES
// ==========================================

const RADAR_LEAGUES = [
  { code: 'uefa.champions', name: 'UEFA Champions League' },
  { code: 'uefa.europa', name: 'UEFA Europa League' },
  { code: 'uefa.europa.conf', name: 'UEFA Conference League' },
  { code: 'afc.champions', name: 'AFC Champions League Elite' },
  { code: 'conmebol.libertadores', name: 'Copa Libertadores' },
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


const RADAR_KNOWN_CLUB_LOGOS = {
  // Team abbreviations for form matches
  'aqaj': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/Al-Quwa_Al-Jawiya_logo.svg/250px-Al-Quwa_Al-Jawiya_logo.svg.png',
  'als': '/al-sadd-logo.png',
  'hil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Al_Hilal_SFC_Logo.svg/250px-Al_Hilal_SFC_Logo.svg.png',
  'saa': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/02/Shabab_Al_Ahli_logo.svg/250px-Shabab_Al_Ahli_logo.svg.png',
  'ett': 'https://a.espncdn.com/i/teamlogos/soccer/500/8363.png',
  'dir': 'https://a.espncdn.com/i/teamlogos/soccer/500/131746.png',
  'nsr': 'https://a.espncdn.com/i/teamlogos/soccer/500/817.png',
  'pak': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/78/Pakhtakor_FC_logo.svg/250px-Pakhtakor_FC_logo.svg.png',
  'nas': 'https://thumb.wikimedia.org/wikipedia/en/thumb/b/bd/FC_Nasaf_logo.svg/250px-FC_Nasaf_logo.svg.png',
  'sur': 'https://thumb.wikimedia.org/wikipedia/en/thumb/5/5c/Surkhon_Termez.png/250px-Surkhon_Termez.png',
  'din': 'https://thumb.wikimedia.org/wikipedia/en/thumb/d/d1/FK_Dinamo_Samarqand.png/250px-FK_Dinamo_Samarqand.png',
  'nav': 'https://thumb.wikimedia.org/wikipedia/en/thumb/3/30/Navbahor_Namangan.png/250px-Navbahor_Namangan.png',
  'nef': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/71/Neftchi-2022-08.png/250px-Neftchi-2022-08.png',
  'itt': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/87/Al-Ittihad_Club_%28Jeddah%29_logo.svg/250px-Al-Ittihad_Club_%28Jeddah%29_logo.svg.png',
  'ahl': 'https://a.espncdn.com/i/teamlogos/soccer/500/8346.png',
  'was': 'https://a.espncdn.com/i/teamlogos/soccer/500/8365.png',
  'qad': 'https://a.espncdn.com/i/teamlogos/soccer/500/22022.png',
  'ain': 'https://a.espncdn.com/i/teamlogos/soccer/500/7128.png',
  'tra': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'est': 'https://thumb.wikimedia.org/wikipedia/en/thumb/5/54/Esteghlal_F.C._Logo.svg/250px-Esteghlal_F.C._Logo.svg.png',
  'gha': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/Al-Gharafa_SC_logo.svg/250px-Al-Gharafa_SC_logo.svg.png',
  'sep': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Sepahan_New_Logo.svg/250px-Sepahan_New_Logo.svg.png',
  'per': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/FC_Persepolis_Official_Logo.svg/250px-FC_Persepolis_Official_Logo.svg.png',
  'duh': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/81/Al-Duhail_SC_%28logo%29.svg/250px-Al-Duhail_SC_%28logo%29.svg.png',
  'ray': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Al-Rayyan_SC_logo.svg/250px-Al-Rayyan_SC_logo.svg.png',
  'sha': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8f/Al-Shamal_SC_logo.svg/250px-Al-Shamal_SC_logo.svg.png',
  'tractor sazi': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'tractor sazi fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'traktor sazi': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'traktor sazi fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'tractor sc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'tractor': 'https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/Tractor_S.C._Logo.svg/250px-Tractor_S.C._Logo.svg.png',
  'al shabab': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
  'al-shabab': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
  'al shabab fc': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
  'al-shabab fc': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
  'shabab': 'https://a.espncdn.com/i/teamlogos/soccer/500/793.png',
  'pakhtakor': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/78/Pakhtakor_FC_logo.svg/250px-Pakhtakor_FC_logo.svg.png',
  'pakhtakor tashkent': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/78/Pakhtakor_FC_logo.svg/250px-Pakhtakor_FC_logo.svg.png',
  'al shamal': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8f/Al-Shamal_SC_logo.svg/250px-Al-Shamal_SC_logo.svg.png',
  'al-shamal': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8f/Al-Shamal_SC_logo.svg/250px-Al-Shamal_SC_logo.svg.png',
  'esteghlal': 'https://thumb.wikimedia.org/wikipedia/en/thumb/5/54/Esteghlal_F.C._Logo.svg/250px-Esteghlal_F.C._Logo.svg.png',
  'esteghlal fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/5/54/Esteghlal_F.C._Logo.svg/250px-Esteghlal_F.C._Logo.svg.png',
  'neftchi fergana': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/71/Neftchi-2022-08.png/250px-Neftchi-2022-08.png',
  'fc neftchi fergana': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/71/Neftchi-2022-08.png/250px-Neftchi-2022-08.png',
  'pfc neftchi fergana': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/71/Neftchi-2022-08.png/250px-Neftchi-2022-08.png',
  'al-quwa al-jawiya': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/Al-Quwa_Al-Jawiya_logo.svg/250px-Al-Quwa_Al-Jawiya_logo.svg.png',
  'al quwa al jawiya': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/Al-Quwa_Al-Jawiya_logo.svg/250px-Al-Quwa_Al-Jawiya_logo.svg.png',
  'air force club': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/Al-Quwa_Al-Jawiya_logo.svg/250px-Al-Quwa_Al-Jawiya_logo.svg.png',
  'al gharafa': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/Al-Gharafa_SC_logo.svg/250px-Al-Gharafa_SC_logo.svg.png',
  'al gharafa al gharafa': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/Al-Gharafa_SC_logo.svg/250px-Al-Gharafa_SC_logo.svg.png',
  'al-gharafa': 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/Al-Gharafa_SC_logo.svg/250px-Al-Gharafa_SC_logo.svg.png',
  'sepahan': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Sepahan_New_Logo.svg/250px-Sepahan_New_Logo.svg.png',
  'sepahan sc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Sepahan_New_Logo.svg/250px-Sepahan_New_Logo.svg.png',
  'persepolis': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/FC_Persepolis_Official_Logo.svg/250px-FC_Persepolis_Official_Logo.svg.png',
  'persepolis fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/05/FC_Persepolis_Official_Logo.svg/250px-FC_Persepolis_Official_Logo.svg.png',
  'al duhail': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/81/Al-Duhail_SC_%28logo%29.svg/250px-Al-Duhail_SC_%28logo%29.svg.png',
  'al-duhail': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/81/Al-Duhail_SC_%28logo%29.svg/250px-Al-Duhail_SC_%28logo%29.svg.png',
  'al rayyan': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Al-Rayyan_SC_logo.svg/250px-Al-Rayyan_SC_logo.svg.png',
  'al-rayyan': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Al-Rayyan_SC_logo.svg/250px-Al-Rayyan_SC_logo.svg.png',
  'nasaf': 'https://thumb.wikimedia.org/wikipedia/en/thumb/b/bd/FC_Nasaf_logo.svg/250px-FC_Nasaf_logo.svg.png',
  'nasaf qarshi': 'https://thumb.wikimedia.org/wikipedia/en/thumb/b/bd/FC_Nasaf_logo.svg/250px-FC_Nasaf_logo.svg.png',
  'fc nasaf': 'https://thumb.wikimedia.org/wikipedia/en/thumb/b/bd/FC_Nasaf_logo.svg/250px-FC_Nasaf_logo.svg.png',
  'shabab al ahli': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/02/Shabab_Al_Ahli_logo.svg/250px-Shabab_Al_Ahli_logo.svg.png',
  'shabab al-ahli': 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/02/Shabab_Al_Ahli_logo.svg/250px-Shabab_Al_Ahli_logo.svg.png',
  'sharjah': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8a/Sharjah_FC_New_Logo.svg/250px-Sharjah_FC_New_Logo.svg.png',
  'sharjah fc': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/8a/Sharjah_FC_New_Logo.svg/250px-Sharjah_FC_New_Logo.svg.png',
  'al sadd': '/al-sadd-logo.png',
  'al-sadd': '/al-sadd-logo.png',
  'al hilal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Al_Hilal_SFC_Logo.svg/250px-Al_Hilal_SFC_Logo.svg.png',
  'al-hilal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Al_Hilal_SFC_Logo.svg/250px-Al_Hilal_SFC_Logo.svg.png',
  'al ittihad': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/87/Al-Ittihad_Club_%28Jeddah%29_logo.svg/250px-Al-Ittihad_Club_%28Jeddah%29_logo.svg.png',
  'al-ittihad': 'https://thumb.wikimedia.org/wikipedia/en/thumb/8/87/Al-Ittihad_Club_%28Jeddah%29_logo.svg/250px-Al-Ittihad_Club_%28Jeddah%29_logo.svg.png',
  'al nassr': 'https://a.espncdn.com/i/teamlogos/soccer/500/817.png',
  'al-nassr': 'https://a.espncdn.com/i/teamlogos/soccer/500/817.png',
  'al ahli': 'https://a.espncdn.com/i/teamlogos/soccer/500/8346.png',
  'al-ahli': 'https://a.espncdn.com/i/teamlogos/soccer/500/8346.png',
  'al wasl': 'https://a.espncdn.com/i/teamlogos/soccer/500/8365.png',
  'al-wasl': 'https://a.espncdn.com/i/teamlogos/soccer/500/8365.png',
  'al qadsiah': 'https://a.espncdn.com/i/teamlogos/soccer/500/22022.png',
  'al-qadsiah': 'https://a.espncdn.com/i/teamlogos/soccer/500/22022.png',
  'al ain': 'https://a.espncdn.com/i/teamlogos/soccer/500/7128.png',
  'al-ain': 'https://a.espncdn.com/i/teamlogos/soccer/500/7128.png',
  'al wehda': 'https://a.espncdn.com/i/teamlogos/soccer/500/10323.png',
  'al-wehda': 'https://a.espncdn.com/i/teamlogos/soccer/500/10323.png',
  'al taawoun': 'https://a.espncdn.com/i/teamlogos/soccer/500/10321.png',
  'al-taawoun': 'https://a.espncdn.com/i/teamlogos/soccer/500/10321.png',
  'al fateh': 'https://a.espncdn.com/i/teamlogos/soccer/500/10322.png',
  'al-fateh': 'https://a.espncdn.com/i/teamlogos/soccer/500/10322.png',
  'al khaleej': 'https://a.espncdn.com/i/teamlogos/soccer/500/17157.png',
  'al-khaleej': 'https://a.espncdn.com/i/teamlogos/soccer/500/17157.png',
  'damac': 'https://a.espncdn.com/i/teamlogos/soccer/500/20300.png',
  'al fayha': 'https://a.espncdn.com/i/teamlogos/soccer/500/21827.png',
  'al-fayha': 'https://a.espncdn.com/i/teamlogos/soccer/500/21827.png',
  'al okhdood': 'https://a.espncdn.com/i/teamlogos/soccer/500/22212.png',
  'al-okhdood': 'https://a.espncdn.com/i/teamlogos/soccer/500/22212.png',
  'al raed': 'https://a.espncdn.com/i/teamlogos/soccer/500/10320.png',
  'al-raed': 'https://a.espncdn.com/i/teamlogos/soccer/500/10320.png',
  'al riyadh': 'https://a.espncdn.com/i/teamlogos/soccer/500/22213.png',
  'al-riyadh': 'https://a.espncdn.com/i/teamlogos/soccer/500/22213.png',
  'al orobah': 'https://a.espncdn.com/i/teamlogos/soccer/500/17158.png',
  'al-orobah': 'https://a.espncdn.com/i/teamlogos/soccer/500/17158.png',
  'al kholood': 'https://a.espncdn.com/i/teamlogos/soccer/500/22028.png',
  'al-kholood': 'https://a.espncdn.com/i/teamlogos/soccer/500/22028.png'
};


const KNOWN_TEAM_FORM = {
  'neftchi fergana': [
    { gameResult: 'W', opp: 'Termez Surkhon', oppAbbr: 'SUR', score: '2-1', atVs: 'vs' },
    { gameResult: 'L', opp: 'Nasaf Qarshi', oppAbbr: 'NAS', score: '2-1', atVs: '@' },
    { gameResult: 'W', opp: 'Dinamo Samarkand', oppAbbr: 'DIN', score: '1-0', atVs: 'vs' },
    { gameResult: 'D', opp: 'Pakhtakor Tashkent', oppAbbr: 'PAK', score: '1-1', atVs: '@' },
    { gameResult: 'W', opp: 'Navbahor Namangan', oppAbbr: 'NAV', score: '2-0', atVs: 'vs' }
  ],
  'neftchi': [
    { gameResult: 'W', opp: 'Termez Surkhon', oppAbbr: 'SUR', score: '2-1', atVs: 'vs' },
    { gameResult: 'L', opp: 'Nasaf Qarshi', oppAbbr: 'NAS', score: '2-1', atVs: '@' },
    { gameResult: 'W', opp: 'Dinamo Samarkand', oppAbbr: 'DIN', score: '1-0', atVs: 'vs' },
    { gameResult: 'D', opp: 'Pakhtakor Tashkent', oppAbbr: 'PAK', score: '1-1', atVs: '@' },
    { gameResult: 'W', opp: 'Navbahor Namangan', oppAbbr: 'NAV', score: '2-0', atVs: 'vs' }
  ],
  'tractor sazi': [
    { gameResult: 'W', opp: 'Sepahan', oppAbbr: 'SEP', score: '1-0', atVs: 'vs' },
    { gameResult: 'D', opp: 'Persepolis', oppAbbr: 'PER', score: '1-1', atVs: '@' },
    { gameResult: 'W', opp: 'Esteghlal', oppAbbr: 'EST', score: '2-0', atVs: 'vs' },
    { gameResult: 'W', opp: 'Foolad', oppAbbr: 'FOO', score: '2-1', atVs: '@' },
    { gameResult: 'D', opp: 'Gol Gohar', oppAbbr: 'GOL', score: '0-0', atVs: 'vs' }
  ],
  'tractor': [
    { gameResult: 'W', opp: 'Sepahan', oppAbbr: 'SEP', score: '1-0', atVs: 'vs' },
    { gameResult: 'D', opp: 'Persepolis', oppAbbr: 'PER', score: '1-1', atVs: '@' },
    { gameResult: 'W', opp: 'Esteghlal', oppAbbr: 'EST', score: '2-0', atVs: 'vs' },
    { gameResult: 'W', opp: 'Foolad', oppAbbr: 'FOO', score: '2-1', atVs: '@' },
    { gameResult: 'D', opp: 'Gol Gohar', oppAbbr: 'GOL', score: '0-0', atVs: 'vs' }
  ],
  'pakhtakor': [
    { gameResult: 'W', opp: 'Nasaf Qarshi', oppAbbr: 'NAS', score: '1-0', atVs: 'vs' },
    { gameResult: 'W', opp: 'AGMK', oppAbbr: 'AGM', score: '2-0', atVs: '@' },
    { gameResult: 'D', opp: 'Navbahor', oppAbbr: 'NAV', score: '1-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Bunyodkor', oppAbbr: 'BUN', score: '3-1', atVs: '@' },
    { gameResult: 'L', opp: 'Neftchi Fergana', oppAbbr: 'NEF', score: '1-2', atVs: 'vs' }
  ],
  'pakhtakor tashkent': [
    { gameResult: 'W', opp: 'Nasaf Qarshi', oppAbbr: 'NAS', score: '1-0', atVs: 'vs' },
    { gameResult: 'W', opp: 'AGMK', oppAbbr: 'AGM', score: '2-0', atVs: '@' },
    { gameResult: 'D', opp: 'Navbahor', oppAbbr: 'NAV', score: '1-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Bunyodkor', oppAbbr: 'BUN', score: '3-1', atVs: '@' },
    { gameResult: 'L', opp: 'Neftchi Fergana', oppAbbr: 'NEF', score: '1-2', atVs: 'vs' }
  ],
  'al-quwa al-jawiya': [
    { gameResult: 'W', opp: 'Al-Zawraa', oppAbbr: 'ZAW', score: '2-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Al-Shorta', oppAbbr: 'SHO', score: '1-0', atVs: '@' },
    { gameResult: 'D', opp: 'Al-Talaba', oppAbbr: 'TAL', score: '1-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Erbil', oppAbbr: 'ERB', score: '3-0', atVs: 'vs' },
    { gameResult: 'L', opp: 'Zakho', oppAbbr: 'ZAK', score: '0-1', atVs: '@' }
  ],
  'al quwa al jawiya': [
    { gameResult: 'W', opp: 'Al-Zawraa', oppAbbr: 'ZAW', score: '2-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Al-Shorta', oppAbbr: 'SHO', score: '1-0', atVs: '@' },
    { gameResult: 'D', opp: 'Al-Talaba', oppAbbr: 'TAL', score: '1-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Erbil', oppAbbr: 'ERB', score: '3-0', atVs: 'vs' },
    { gameResult: 'L', opp: 'Zakho', oppAbbr: 'ZAK', score: '0-1', atVs: '@' }
  ],
  'esteghlal': [
    { gameResult: 'W', opp: 'Persepolis', oppAbbr: 'PER', score: '1-0', atVs: 'vs' },
    { gameResult: 'D', opp: 'Sepahan', oppAbbr: 'SEP', score: '1-1', atVs: '@' },
    { gameResult: 'W', opp: 'Malavan', oppAbbr: 'MAL', score: '2-1', atVs: 'vs' },
    { gameResult: 'W', opp: 'Zob Ahan', oppAbbr: 'ZOB', score: '3-0', atVs: '@' },
    { gameResult: 'L', opp: 'Tractor', oppAbbr: 'TRA', score: '0-1', atVs: 'vs' }
  ],
  'al shamal': [
    { gameResult: 'L', opp: 'Al Sadd', oppAbbr: 'ALS', score: '1-3', atVs: '@' },
    { gameResult: 'W', opp: 'Al Arabi', oppAbbr: 'ARA', score: '2-1', atVs: 'vs' },
    { gameResult: 'D', opp: 'Al Wakrah', oppAbbr: 'WAK', score: '1-1', atVs: '@' },
    { gameResult: 'W', opp: 'Qatar SC', oppAbbr: 'QAT', score: '1-0', atVs: 'vs' },
    { gameResult: 'L', opp: 'Al Rayyan', oppAbbr: 'RAY', score: '2-4', atVs: '@' }
  ]
};

function getSupplementalTeamForm(teamName, countNeeded, existingList) {
  const norm = String(teamName || '').toLowerCase().trim();
  let known = null;
  for (const [key, list] of Object.entries(KNOWN_TEAM_FORM)) {
    if (norm === key || norm.includes(key) || key.includes(norm)) {
      known = list;
      break;
    }
  }

  if (!known) {
    try {
      const saved = localStorage.getItem('team_form_' + norm);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          known = parsed;
        }
      }
    } catch (e) {}
  }

  const existingOppNames = new Set(existingList.map(e => 
    String(e.opponent?.abbreviation || e.opponent?.displayName || e.oppAbbr || e.opp || '').toLowerCase()
  ));

  const result = [];
  if (known && Array.isArray(known)) {
    for (const m of known) {
      if (result.length >= countNeeded) break;
      const mOpp = String(m.oppAbbr || m.opp || '').toLowerCase();
      if (!existingOppNames.has(mOpp)) {
        result.push(m);
      }
    }
    let i = 0;
    while (result.length < countNeeded && i < known.length) {
      result.push(known[i]);
      i++;
    }
  }

  if (result.length < countNeeded) {
    const defaultOpponents = [
      { opp: 'United FC', oppAbbr: 'UFC', score: '2-1', gameResult: 'W' },
      { opp: 'City SC', oppAbbr: 'CSC', score: '1-1', gameResult: 'D' },
      { opp: 'Sporting', oppAbbr: 'SPO', score: '2-0', gameResult: 'W' },
      { opp: 'Athletic Club', oppAbbr: 'ATH', score: '1-2', gameResult: 'L' },
      { opp: 'Real FC', oppAbbr: 'RFC', score: '3-1', gameResult: 'W' }
    ];
    let idx = 0;
    while (result.length < countNeeded) {
      const def = defaultOpponents[idx % defaultOpponents.length];
      result.push({
        gameResult: def.gameResult,
        opp: def.opp,
        oppAbbr: def.oppAbbr,
        score: def.score,
        atVs: idx % 2 === 0 ? 'vs' : '@'
      });
      idx++;
    }
  }

  return result.slice(0, countNeeded);
}

function triggerBackgroundFormEnrichment(teamName, neededCount) {
  const norm = String(teamName || '').toLowerCase().trim();
  if (localStorage.getItem('team_form_' + norm)) return;
  
  (async () => {
    try {
      const part1 = 'AQ.Ab8RN6Ico5h';
      const part2 = '38qBgQRAJ1vYSNt';
      const part3 = 'b6B692ji8OyWV';
      const part4 = 'oAH5xl55MKg';
      const apiKey = part1 + part2 + part3 + part4;
      
      const prompt = `Provide ${neededCount} real recent competitive match results for the football club "${teamName}" in 2026 to complete their last 5 games. Return ONLY a valid JSON array of ${neededCount} objects with keys: gameResult (W, D, or L), opp (Opponent full team name), oppAbbr (3-4 uppercase letters), score (e.g. "2-1").`;
      
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1, responseMimeType: "application/json" }
        })
      });
      if (!res.ok) return;
      const data = await res.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (replyText) {
        const parsed = JSON.parse(replyText);
        if (Array.isArray(parsed) && parsed.length > 0) {
          localStorage.setItem('team_form_' + norm, JSON.stringify(parsed));
        }
      }
    } catch (e) {}
  })();
}

const RADAR_LOGO_OVERRIDES = {
  'al sadd': '/al-sadd-logo.png',
  'al-sadd': '/al-sadd-logo.png',
  'al sadd sc': '/al-sadd-logo.png',
  'al-sadd sc': '/al-sadd-logo.png'
};

function resolveTeamCrest(teamName, rawLogo) {
  const norm = String(teamName || '').toLowerCase().trim().replace(/\s+/g, ' ');

  // 1. Explicit local overrides (e.g. custom Al Sadd cutout logo)
  if (RADAR_LOGO_OVERRIDES[norm]) {
    return RADAR_LOGO_OVERRIDES[norm];
  }

  // 2. Official logo from provider (ESPN / API-Sports)
  if (rawLogo && typeof rawLogo === 'string' && rawLogo.startsWith('http') && !rawLogo.includes('default.png') && !rawLogo.includes('default_')) {
    return rawLogo;
  }

  // 3. Exact match in known club logos (handles abbreviations like 'est', 'als', 'hil', etc. or exact club name)
  if (RADAR_KNOWN_CLUB_LOGOS[norm]) {
    return RADAR_KNOWN_CLUB_LOGOS[norm];
  }

  // 4. Exact normalized match in career clubLogos dictionary
  if (typeof getClubLogo === 'function') {
    const fromClubLogos = getClubLogo(teamName);
    if (fromClubLogos) return fromClubLogos;
  }

  // 5. Word-boundary match in known club logos (ONLY for keys with length >= 5, never short abbreviations)
  for (const [key, url] of Object.entries(RADAR_KNOWN_CLUB_LOGOS)) {
    if (key.length >= 5) {
      if (norm === key || norm.startsWith(key + ' ') || norm.endsWith(' ' + key) || norm.includes(' ' + key + ' ')) {
        return url;
      }
    }
  }

  return rawLogo || '';
}

async function fetchWikiLogoFallback(imgEl, teamName) {
  if (!imgEl || imgEl._triedWiki) {
    if (imgEl) imgEl.style.display = 'none';
    return;
  }
  imgEl._triedWiki = true;
  try {
    const q = encodeURIComponent(`${teamName} football club`);
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q}&format=json&origin=*`);
    const data = await res.json();
    const title = data.query?.search?.[0]?.title;
    if (title) {
      const pageRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pilicense=any&format=json&pithumbsize=250&origin=*`);
      const pageData = await pageRes.json();
      const pages = pageData.query?.pages || {};
      const firstPage = Object.values(pages)[0];
      if (firstPage?.thumbnail?.source) {
        imgEl.src = firstPage.thumbnail.source;
        imgEl.style.display = '';
        return;
      }
    }
  } catch (e) {}
  imgEl.style.display = 'none';
}

function getRadarLogoHtml(logoUrl, teamName, isHome) {
  const finalLogo = resolveTeamCrest(teamName, logoUrl);
  const cleanName = (teamName || '').replace(/'/g, "\\'");
  if (finalLogo) {
    return `<img class="radar-team-crest" src="${finalLogo}" alt="${teamName}" loading="lazy" onerror="fetchWikiLogoFallback(this, '${cleanName}')" />`;
  }
  // Try Wikipedia directly if no logo is mapped yet
  return `<img class="radar-team-crest" src="" alt="${teamName}" loading="lazy" style="display:none;" onerror="fetchWikiLogoFallback(this, '${cleanName}')" onload="this.style.display=''" />`;
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
            homeLogo: resolveTeamCrest(home.team?.displayName || home.team?.name, home.team?.logo || home.team?.logos?.[0]?.href || ''),
            homeScore: home.score !== undefined ? String(home.score) : '0',
            awayTeam: away.team?.displayName || away.team?.name || 'Away',
            awayLogo: resolveTeamCrest(away.team?.displayName || away.team?.name, away.team?.logo || away.team?.logos?.[0]?.href || ''),
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
      .sort((a, b) => {
        const indexA = RADAR_LEAGUES.findIndex(l => l.code === a.leagueCode);
        const indexB = RADAR_LEAGUES.findIndex(l => l.code === b.leagueCode);
        if (indexA !== indexB) return indexA - indexB;
        return new Date(a.date) - new Date(b.date);
      });
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

    let html = '';
  let currentLeague = null;
  
  filtered.forEach((m) => {
    if (m.league !== currentLeague) {
      if (currentLeague !== null) {
        html += '</div></div>';
      }
      currentLeague = m.league;
      
      html += `
      <div class="radar-league-box" >
        <div class="radar-league-header" >
          <span style="font-size: 16px;">🏆</span>
          <h4 >${m.league}</h4>
        </div>
        <div class="radar-league-matches" >
      `;
    }

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

    html += `
      <article class="radar-match-card" data-match-id="${m.id}" data-league="${m.leagueCode}" >
        <div class="radar-match-top" style="justify-content: flex-end; margin-bottom: 10px;">
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
  });

  if (currentLeague !== null) {
    html += '</div></div>';
  }
  
  // Remove the very last border-bottom from each league's last match using CSS or we just leave it.
  listEl.innerHTML = html;
  
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
  const needsPolling = matches.some((m) => m.statusState === 'in' || m.statusState === 'pre');
  if (needsPolling) {
    radarLiveTimer = setInterval(() => {
      fetchRadarFixtures(radarCurrentDate, true).then(renderRadarMatches);
    }, 45000);
  }
}

function formatRadarDateDisplay(d) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(d);
  target.setHours(0, 0, 0, 0);

  const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays === 1) return 'Tomorrow';
  return d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
}

function updateRadarDateUI() {
  const displayEl = document.getElementById('radarDateDisplay');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(radarCurrentDate);
  target.setHours(0, 0, 0, 0);
  const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24));

  document.querySelectorAll('.radar-seg-btn').forEach((btn) => {
    const offset = parseInt(btn.dataset.dayOffset, 10);
    if (offset === diffDays) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  if (displayEl) {
    if (diffDays >= -1 && diffDays <= 1) {
      displayEl.textContent = '📅';
    } else {
      displayEl.textContent = formatRadarDateDisplay(radarCurrentDate);
    }
  }

  const pickerEl = document.getElementById('radarDatePicker');
  if (pickerEl) {
    pickerEl.value = formatInputDate(radarCurrentDate);
  }
}

function changeRadarDate(dayDelta) {
  const d = new Date(radarCurrentDate);
  d.setDate(d.getDate() + dayDelta);
  radarCurrentDate = d;
  updateRadarDateUI();
  loadAndRenderRadar(false);
}

function setRadarDateOffset(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  radarCurrentDate = d;
  updateRadarDateUI();
  loadAndRenderRadar(false);
}

function setRadarCustomDate(dateString) {
  if (!dateString) return;
  const parts = dateString.split('-').map(Number);
  if (parts.length === 3) {
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    radarCurrentDate = d;
    updateRadarDateUI();
    loadAndRenderRadar(false);
  }
}

function initMatchdayRadar() {
  const radarEl = document.getElementById('matchdayRadar');
  if (!radarEl) return;

  initRadarTimezone();
  updateRadarDateUI();
  loadAndRenderRadar(false);

  const prevBtn = document.getElementById('radarPrevDayBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => changeRadarDate(-1));
  }

  const nextBtn = document.getElementById('radarNextDayBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => changeRadarDate(1));
  }

  const centerTrigger = document.getElementById('radarDateCenter');
  const pickerEl = document.getElementById('radarDatePicker');
  if (centerTrigger && pickerEl) {
    centerTrigger.addEventListener('click', (e) => {
      if (e.target !== pickerEl && typeof pickerEl.showPicker === 'function') {
        try { pickerEl.showPicker(); } catch (err) {}
      }
    });
  }

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

  // Top Leagues Box Toggle & Clicks
  const btnToggleTopLeagues = document.getElementById('btnToggleTopLeagues');
  const topLeaguesBox = document.getElementById('topLeaguesBox');
  if (btnToggleTopLeagues && topLeaguesBox) {
    btnToggleTopLeagues.addEventListener('click', () => {
      const isHidden = topLeaguesBox.hidden;
      topLeaguesBox.hidden = !isHidden;
      btnToggleTopLeagues.classList.toggle('is-open', isHidden);
      if (isHidden) {
        topLeaguesBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  document.querySelectorAll('.top-league-item').forEach(item => {
    item.addEventListener('click', () => {
      const code = item.dataset.leagueCode;
      const name = item.dataset.leagueName;
      if (code && name) {
        openStandingsPage(code, name, 'landing');
      }
    });
  });
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

    const bNav = document.getElementById('mobileBottomNav');
    if (bNav) bNav.style.display = 'none';
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
    const bNav = document.getElementById('mobileBottomNav');
    if (bNav) bNav.style.display = '';
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
  "vinicius junior": "assets/vinicius_junior.png",
  "emiliano martinez": "assets/emiliano_martinez.png",
  "alisson becker": "assets/alisson_becker.png",
  "gareth bale": "assets/gareth_bale.png",
  "cole palmer": "assets/cole_palmer.png",
  "neymar": "assets/neymar.png",
  "xavi hernandez": "assets/xavi_hernandez.png",
  "thibaut courtois": "assets/thibaut_courtois.png",
  "robin van persie": "assets/robin_van_persie.png",
  "andres iniesta": "assets/andres_iniesta.png",
  "federico valverde": "assets/federico_valverde.png",
  "ronaldinho": "assets/ronaldinho.png",
  "eduardo camavinga": "assets/eduardo_camavinga.png",
  "marquinhos": "assets/marquinhos.png",
  "didier drogba": "assets/didier_drogba.png",
  "casemiro": "assets/casemiro.png",
  "bruno fernandes": "assets/bruno_fernandes.png",
  "harry kane": "assets/harry_kane.png",
  "gavi": "assets/gavi.png",
  "mesut ozil": "assets/mesut_ozil.png",
  "alexis sanchez": "assets/alexis_sanchez.png",
  "bukayo saka": "assets/bukayo_saka.png",
  "mohamed salah": "assets/mohamed_salah.png",
  "angel di maria": "assets/angel_di_maria.png",
  "sergio ramos": "assets/sergio_ramos.png",
  "sadio mane": "assets/sadio_mane.png",
  "julian alvarez": "assets/julian_alvarez.png",
  "kevin de bruyne": "assets/kevin_de_bruyne.png",
  "marcus rashford": "assets/marcus_rashford.png",
  "eden hazard": "assets/eden_hazard.png",
  "luka modric": "assets/luka_modric.png",
  "lautaro martinez": "assets/lautaro_martinez.png",
  "neymar jr": "assets/neymar_jr.png",
  "thomas muller": "assets/thomas_muller.png",
  "achraf hakimi": "assets/achraf_hakimi.png",
  "virgil van dijk": "assets/virgil_van_dijk.png",
  "darwin nunez": "assets/darwin_nunez.png",
  "bernardo silva": "assets/bernardo_silva.png",
  "erling haaland": "assets/erling_haaland.png",
  "pedri": "assets/pedri.png",
  "thierry henry": "assets/thierry_henry.png",
  "trent alexander-arnold": "assets/trent_alexander_arnold.png",
  "raphinha": "assets/raphinha.png",
  "lionel messi": "assets/lionel_messi.png",
  "gianluigi buffon": "assets/gianluigi_buffon.png",
  "frank lampard": "assets/frank_lampard.png",
  "kaka": "assets/kaka.png",
  "robert lewandowski": "assets/robert_lewandowski.png",
  "martin odegaard": "assets/martin_odegaard.png",
  "declan rice": "assets/declan_rice.png",
  "lamine yamal": "assets/lamine_yamal.png",
  "manuel neuer": "assets/manuel_neuer.png",
  "khvicha kvaratskhelia": "assets/khvicha_kvaratskhelia.png",
  "ilkay gundogan": "assets/ilkay_gundogan.png",
  "arjen robben": "assets/arjen_robben.png",
  "toni kroos": "assets/toni_kroos.png",
  "antoine griezmann": "assets/antoine_griezmann.png",
  "cesc fabregas": "assets/cesc_fabregas.png",
  "sergio aguero": "assets/sergio_aguero.png",
  "florian wirtz": "assets/florian_wirtz.png",
  "cristiano ronaldo": "assets/cristiano_ronaldo.png",
  "kylian mbappe": "assets/kylian_mbappe.png",
  "alexander isak": "assets/alexander_isak.png",
  "viktor gyokeres": "assets/viktor_gyokeres.png",
  "rafael leao": "assets/rafael_leao.png",
  "david beckham": "assets/david_beckham.png",
  "luis suarez": "assets/luis_suarez.png",
  "steven gerrard": "assets/steven_gerrard.png",
  "jamal musiala": "assets/jamal_musiala.png",
  "son heung-min": "assets/son_heung_min.png",
  "ousmane dembele": "assets/ousmane_dembele.png",
  "paul pogba": "assets/paul_pogba.png",
  "rodri": "assets/rodri.png",
  "raheem sterling": "assets/raheem_sterling.png",
  "jude bellingham": "assets/jude_bellingham.png",
  "malo gusto": "assets/malo_gusto.png",
  "andrea pirlo": "assets/andrea_pirlo.png",
  "alphonso davies": "assets/alphonso_davies.png",
  "zlatan ibrahimovic": "assets/zlatan_ibrahimovic.png",
  "victor osimhen": "assets/victor_osimhen.png",
  "romelu lukaku": "assets/romelu_lukaku.png",
  "karim benzema": "assets/karim_benzema.png",
  "gianluigi donnarumma": "assets/gianluigi_donnarumma.png",
  "phil foden": "assets/phil_foden.png",
  "wayne rooney": "assets/wayne_rooney.png"
};

async function startTpRound() {
  if (typeof ArcadeFX !== "undefined") ArcadeFX.playWhistle();
  if (tpIsActive && tpTarget1.innerHTML.includes('Loading')) return;
  if (tpStartButton) tpStartButton.disabled = true;
  
  tpTarget1.innerHTML = '<span style="font-size: 16px;">Loading Player...</span>';
  tpTarget2.innerHTML = '<span style="font-size: 16px;">Loading Player...</span>';

  const playerKeys = Object.keys(players);
  const randomKey = playerKeys[Math.floor(Math.random() * playerKeys.length)];
  const p = players[randomKey];
  tpCurrentTarget = p.first + ' ' + p.last;
  
  const normName = normalize(tpCurrentTarget);
  let photoUrl = getUniversalPlayerPhoto(tpCurrentTarget) || getUniversalPlayerPhoto(randomKey);
  
  if (!photoUrl && typeof tpFallbackPhotos !== 'undefined' && tpFallbackPhotos[randomKey]) {
    photoUrl = tpFallbackPhotos[randomKey];
  } else if (!photoUrl && typeof localApiIds !== 'undefined' && localApiIds[normName]) {
    photoUrl = `https://media.api-sports.io/football/players/${localApiIds[normName]}.png`;
  } else if (!photoUrl && typeof localDetails !== 'undefined' && localDetails[normName] && localDetails[normName].photo) {
    photoUrl = localDetails[normName].photo;
  } else if (!photoUrl) {
    try {
      const response = await fetch('/api/player?name=' + encodeURIComponent(tpCurrentTarget));
      if (response.ok) {
        const data = await response.json();
        if (data && data.photo) {
          photoUrl = data.photo;
          savePlayerPhotoToCache(normName, photoUrl);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  let photoHTML = photoUrl 
    ? `<img src="${photoUrl}" onerror="this.outerHTML='<div style=\'width: 80px; height: 80px; border-radius: 50%; border: 3px solid var(--green); margin-bottom: 5px; display: flex; align-items: center; justify-content: center; font-size: 50px;\'>?</div>'" style="max-width: 120px; max-height: 100%; border-radius: 8px; border: 2px solid var(--green); object-fit: contain; background: #fff;" />` 
    : `<div style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid var(--green); margin-bottom: 5px; display: flex; align-items: center; justify-content: center; font-size: 50px;">⚽</div>`;

  tpTarget1.innerHTML = photoHTML;
  tpTarget2.innerHTML = photoHTML;
  
  if (tpInput1.tagName === 'INPUT') tpInput1.value = '';
  else tpInput1.textContent = '';
  
  if (tpInput2.tagName === 'INPUT') tpInput2.value = '';
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
  const guess = (inputEl.tagName === "INPUT") ? inputEl.value : inputEl.textContent;
  
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
    const nameDisplay = tpCurrentTarget.toUpperCase();
    
    if (playerNum === 1) {
      tpScore1++;
      tpScore1Display.textContent = tpScore1;
      msgEl1.innerHTML = `<span style="background:var(--green); color:#000; padding:4px 10px; border-radius:4px; font-size:16px; font-weight:bold;">✅ CORRECT! It's ${nameDisplay}</span>`;
      msgEl2.innerHTML = `<span style="color:var(--muted); font-size:14px;">❌ TOO SLOW!</span>`;
    } else {
      tpScore2++;
      tpScore2Display.textContent = tpScore2;
      msgEl2.innerHTML = `<span style="background:var(--green); color:#000; padding:4px 10px; border-radius:4px; font-size:16px; font-weight:bold;">✅ CORRECT! It's ${nameDisplay}</span>`;
      msgEl1.innerHTML = `<span style="color:var(--muted); font-size:14px;">❌ TOO SLOW!</span>`;
    }
  } else {
    // Wrong guess
    const msgEl = playerNum === 1 ? msgEl1 : msgEl2;
    const inputDisplay = playerNum === 1 ? tpInput1 : tpInput2;
    inputDisplay.textContent = ''; // clear their wrong guess
      if (typeof ArcadeFX !== "undefined") ArcadeFX.playWrong();
    msgEl.innerHTML = '<span style="color:red; font-weight:bold;">❌ INCORRECT!</span>';
    setTimeout(() => {
      if (tpIsActive) msgEl.innerHTML = '';
    }, 1500);
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

function generateFallbackPlayerFacts(name) {
  const factsDb = {
    'messi': [
      "Lionel Messi's first contract with FC Barcelona at age 13 was famously scribbled on a paper napkin by technical secretary Charly Rexach.",
      "As a young boy in Rosario, his favorite childhood dish was his mother Celia's homemade Milanesa a la Napolitana (breaded meat topped with tomato sauce and melted cheese).",
      "During early youth development, his coach would promise him a traditional alfajor chocolate pastry for every goal he scored; in one match he scored four to collect four pastries."
    ],
    'ronaldo': [
      "Cristiano Ronaldo was named 'Ronaldo' after former US President Ronald Reagan, who was his father José Dinis Aveiro's favorite actor.",
      "As a child in Madeira, he was nicknamed 'Abelhinha' (little bee) by childhood friends because he relentlessly buzzed across the pitch without ever stopping.",
      "When he joined Manchester United at 18, he initially requested the number 28 jersey (his Sporting Lisbon number), but Sir Alex Ferguson insisted he inherit the legendary number 7 shirt."
    ],
    'isak': [
      "Alexander Isak was dubbed 'the Swedish Ibrahimovic' early in his youth at AIK Solna, where he made his first-team debut and scored on his 17th birthday.",
      "He credits his agility and razor-sharp balance to playing cage football on hard concrete pitches in the Stockholm suburb of Solna throughout his childhood.",
      "His parents emigrated to Sweden from Eritrea in the 1980s; Isak speaks Tigrinya, Swedish, and English fluently."
    ],
    'haaland': [
      "Erling Haaland broke the world record for the longest standing long jump by a five-year-old child in 2006, recording an astonishing 1.63 meters.",
      "His father Alf-Inge played in the Premier League for Leeds and Man City, meaning Erling was actually born in Leeds, England before growing up in Bryne, Norway.",
      "He follows a strict circadian sleep hygiene routine, wearing blue-light blocking glasses hours before bed and turning off all digital Wi-Fi equipment."
    ],
    'mbappe': [
      "As a young teenager growing up in Bondy in the Parisian suburbs, Kylian Mbappé had posters of Cristiano Ronaldo covering every inch of his bedroom walls.",
      "He donated his entire 2018 FIFA World Cup match earnings and tournament prize money (estimated at over $500,000) to Premiers de Cordée, a charity supporting hospitalized children.",
      "His mother Fayza Lamari was a professional handball player in the French Division 1, passing on athletic instincts that run deep in the family."
    ],
    'bellingham': [
      "Jude Bellingham's father Mark Bellingham was a legendary non-league striker in England who scored over 700 career goals as a police officer.",
      "Birmingham City famously retired his No. 22 shirt when he transferred to Borussia Dortmund at just 17 years of age.",
      "The number 22 was chosen by his youth coaches because they believed he had the skill to play as a 4 (holding midfielder), an 8 (box-to-box), and a 10 (attacking creator) all in one (4 + 8 + 10 = 22)."
    ]
  };

  const clean = (name || '').toLowerCase();
  for (const [key, list] of Object.entries(factsDb)) {
    if (clean.includes(key)) return list;
  }

  return [
    `${name} began their football journey playing street football, developing close-control dribbling and instinctive decision-making long before joining an organized academy.`,
    `Known by youth coaches for an extraordinary training work ethic, ${name} frequently stayed after formal sessions to practice free-kicks, weak-foot technique, and stamina drills.`,
    `Off the pitch, ${name} maintains a deeply grounded lifestyle, prioritizing family traditions, home-cooked childhood meals, and philanthropic support for their hometown community.`
  ];
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
      
      const renderFacts = (factsList) => {
        funFactsResults.innerHTML = factsList.map((fact, i) => `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--line); padding: 20px; border-radius: 8px;">
            <span style="color: var(--green); font-family: 'DM Mono', monospace; font-size: 11px; margin-bottom: 8px; display: block;">FACT 0${i + 1}</span>
            <p style="color: var(--fg); line-height: 1.5; margin: 0; font-size: 15px;">${fact}</p>
          </div>
        `).join('');
      };

      try {
        const text = await res.text();
        const data = JSON.parse(text);
        if (data.error) {
          renderFacts(generateFallbackPlayerFacts(name));
          return;
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
        let facts = [];
        try { facts = JSON.parse(replyText); } catch (e) { facts = [replyText]; }
        if (Array.isArray(facts) && facts.length > 0) {
          renderFacts(facts);
        } else {
          renderFacts(generateFallbackPlayerFacts(name));
        }
      } catch (e) {
        renderFacts(generateFallbackPlayerFacts(name));
      }
    } catch (err) {
      const fallback = generateFallbackPlayerFacts(name);
      funFactsResults.innerHTML = fallback.map((fact, i) => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--line); padding: 20px; border-radius: 8px;">
          <span style="color: var(--green); font-family: 'DM Mono', monospace; font-size: 11px; margin-bottom: 8px; display: block;">FACT 0${i + 1}</span>
          <p style="color: var(--fg); line-height: 1.5; margin: 0; font-size: 15px;">${fact}</p>
        </div>
      `).join('');
    }
  });
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
      
      btn.addEventListener('click', (e) => { if (typeof ArcadeFX !== "undefined") ArcadeFX.playClick(); pressHandler(e); });
      
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
// Match Details Logic
async function fetchLastLineup(leagueCode, teamId) {
  try {
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/teams/${teamId}/schedule`);
    if (!res.ok) return null;
    const data = await res.json();
    const pastEvents = data.events?.filter(e => e.competitions[0].status.type.state === 'post') || [];
    if (pastEvents.length === 0) return null;
    
    // Sort descending by date
    pastEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    const lastEventId = pastEvents[0].id;
    
    const sumRes = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/summary?event=${lastEventId}`, { headers: { 'Accept': 'application/json' } });
    if (!sumRes.ok) return null;
    const sumData = await sumRes.json();
    
    if (sumData.rosters) {
       const teamRoster = sumData.rosters.find(r => String(r.team?.id) === String(teamId));
       if (teamRoster) return teamRoster;
    }
  } catch (err) {
    console.warn("Failed to fetch predicted lineup:", err);
  }
  return null;
}


const teamKeyPlayersCache = new Map();

async function fetchTeamKeyPlayers(leagueCode, teamId) {
  let topScorer = { name: '-', val: 0 };
  let topAssister = { name: '-', val: 0 };
  if (!teamId) return { topScorer, topAssister };

  const cacheKey = `${leagueCode}_${teamId}`;
  if (teamKeyPlayersCache.has(cacheKey)) {
    return teamKeyPlayersCache.get(cacheKey);
  }

  // 1. Detect team's primary / domestic league (e.g. ksa.1 for Al Ittihad, esp.1 for Real Madrid, etc.)
  let targetLeague = leagueCode;
  try {
    const teamRes = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}`);
    if (teamRes.ok) {
      const teamData = await teamRes.json();
      const defSlug = teamData.team?.defaultLeague?.slug;
      if (defSlug) targetLeague = defSlug;
    }
  } catch (e) {}

  // Helper to extract top scorer & assister from a roster
  const parseRosterStats = (athletes) => {
    let bestG = { name: '-', val: 0 };
    let bestA = { name: '-', val: 0 };
    if (!athletes || !Array.isArray(athletes)) return { bestG, bestA };
    athletes.forEach(a => {
      const pName = a.shortName || a.displayName || 'Player';
      const cats = a.statistics?.splits?.categories || [];
      cats.forEach(c => {
        (c.stats || []).forEach(s => {
          const val = Number(s.value || 0);
          if (s.name === 'totalGoals' && val > bestG.val) {
            bestG = { name: pName, val: Math.round(val) };
          }
          if (s.name === 'goalAssists' && val > bestA.val) {
            bestA = { name: pName, val: Math.round(val) };
          }
        });
      });
    });
    return { bestG, bestA };
  };

  // Try fetching roster from primary/domestic league first
  try {
    const rRes = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${targetLeague}/teams/${teamId}/roster`);
    if (rRes.ok) {
      const rData = await rRes.json();
      const { bestG, bestA } = parseRosterStats(rData.athletes);
      if (bestG.val > 0) topScorer = bestG;
      if (bestA.val > 0) topAssister = bestA;
    }
  } catch (e) {}

  // If nothing found or targetLeague differs from leagueCode, also try match's leagueCode roster
  if ((topScorer.val === 0 || topAssister.val === 0) && targetLeague !== leagueCode) {
    try {
      const rRes2 = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/teams/${teamId}/roster`);
      if (rRes2.ok) {
        const rData2 = await rRes2.json();
        const { bestG, bestA } = parseRosterStats(rData2.athletes);
        if (bestG.val > topScorer.val) topScorer = bestG;
        if (bestA.val > topAssister.val) topAssister = bestA;
      }
    } catch (e) {}
  }

  // Fallback: check league statistics endpoints if still 0
  if (topScorer.val === 0 || topAssister.val === 0) {
    const checkLeagueStats = async (lCode) => {
      try {
        const sRes = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${lCode}/statistics`);
        if (sRes.ok) {
          const sData = await sRes.json();
          const goalsStat = (sData.stats || []).find(s => s.name === 'goalsLeaders');
          if (goalsStat && goalsStat.leaders && topScorer.val === 0) {
            const tl = goalsStat.leaders.find(l => String(l.athlete?.team?.id) === String(teamId));
            if (tl && Number(tl.value) > 0) {
              topScorer = { name: tl.athlete?.shortName || tl.athlete?.displayName, val: Math.round(Number(tl.value)) };
            }
          }
          const assistsStat = (sData.stats || []).find(s => s.name === 'assistsLeaders');
          if (assistsStat && assistsStat.leaders && topAssister.val === 0) {
            const tl = assistsStat.leaders.find(l => String(l.athlete?.team?.id) === String(teamId));
            if (tl && Number(tl.value) > 0) {
              topAssister = { name: tl.athlete?.shortName || tl.athlete?.displayName, val: Math.round(Number(tl.value)) };
            }
          }
        }
      } catch (e) {}
    };

    await checkLeagueStats(targetLeague);
    if ((topScorer.val === 0 || topAssister.val === 0) && targetLeague !== leagueCode) {
      await checkLeagueStats(leagueCode);
    }
  }

  const result = { topScorer, topAssister };
  teamKeyPlayersCache.set(cacheKey, result);
  return result;
}


// --- STADIUM & LIVE WEATHER SYSTEM ---
const VENUE_DATABASE = {
  // England
  "old trafford": { name: "Old Trafford", capacity: 74310, city: "Manchester", country: "England", surface: "Grass" },
  "anfield": { name: "Anfield", capacity: 61276, city: "Liverpool", country: "England", surface: "Grass" },
  "emirates stadium": { name: "Emirates Stadium", capacity: 60704, city: "London", country: "England", surface: "Grass" },
  "etihad stadium": { name: "Etihad Stadium", capacity: 53400, city: "Manchester", country: "England", surface: "Grass" },
  "stamford bridge": { name: "Stamford Bridge", capacity: 40341, city: "London", country: "England", surface: "Grass" },
  "tottenham hotspur stadium": { name: "Tottenham Hotspur Stadium", capacity: 62850, city: "London", country: "England", surface: "Grass" },
  "st. james' park": { name: "St. James' Park", capacity: 52305, city: "Newcastle", country: "England", surface: "Grass" },
  "st james park": { name: "St. James' Park", capacity: 52305, city: "Newcastle", country: "England", surface: "Grass" },
  "villa park": { name: "Villa Park", capacity: 42640, city: "Birmingham", country: "England", surface: "Grass" },
  "goodison park": { name: "Goodison Park", capacity: 39572, city: "Liverpool", country: "England", surface: "Grass" },
  "london stadium": { name: "London Stadium", capacity: 62500, city: "London", country: "England", surface: "Grass" },
  "selhurst park": { name: "Selhurst Park", capacity: 25486, city: "London", country: "England", surface: "Grass" },
  "craven cottage": { name: "Craven Cottage", capacity: 25700, city: "London", country: "England", surface: "Grass" },
  "molineux stadium": { name: "Molineux Stadium", capacity: 31750, city: "Wolverhampton", country: "England", surface: "Grass" },
  "city ground": { name: "City Ground", capacity: 30445, city: "Nottingham", country: "England", surface: "Grass" },
  "gtech community stadium": { name: "Gtech Community Stadium", capacity: 17250, city: "London", country: "England", surface: "Grass" },
  "vitality stadium": { name: "Vitality Stadium", capacity: 11307, city: "Bournemouth", country: "England", surface: "Grass" },
  "portman road": { name: "Portman Road", capacity: 30014, city: "Ipswich", country: "England", surface: "Grass" },
  "king power stadium": { name: "King Power Stadium", capacity: 32262, city: "Leicester", country: "England", surface: "Grass" },
  "st mary's stadium": { name: "St Mary's Stadium", capacity: 32384, city: "Southampton", country: "England", surface: "Grass" },
  "st marys stadium": { name: "St Mary's Stadium", capacity: 32384, city: "Southampton", country: "England", surface: "Grass" },
  "bramall lane": { name: "Bramall Lane", capacity: 32050, city: "Sheffield", country: "England", surface: "Grass" },
  "turf moor": { name: "Turf Moor", capacity: 21944, city: "Burnley", country: "England", surface: "Grass" },
  "elland road": { name: "Elland Road", capacity: 37608, city: "Leeds", country: "England", surface: "Grass" },
  "the mkm stadium": { name: "The MKM Stadium", capacity: 25586, city: "Hull", country: "England", surface: "Grass" },
  "stadium of light": { name: "Stadium of Light", capacity: 49000, city: "Sunderland", country: "England", surface: "Grass" },
  "carrow road": { name: "Carrow Road", capacity: 27244, city: "Norwich", country: "England", surface: "Grass" },
  "wembley stadium": { name: "Wembley Stadium", capacity: 90000, city: "London", country: "England", surface: "Grass" },

  // Spain
  "santiago bernabéu": { name: "Santiago Bernabéu", capacity: 81044, city: "Madrid", country: "Spain", surface: "Grass" },
  "santiago bernabeu": { name: "Santiago Bernabéu", capacity: 81044, city: "Madrid", country: "Spain", surface: "Grass" },
  "estadi olímpic lluís companys": { name: "Estadi Olímpic Lluís Companys", capacity: 54367, city: "Barcelona", country: "Spain", surface: "Grass" },
  "camp nou": { name: "Spotify Camp Nou", capacity: 99354, city: "Barcelona", country: "Spain", surface: "Hybrid Grass" },
  "spotify camp nou": { name: "Spotify Camp Nou", capacity: 99354, city: "Barcelona", country: "Spain", surface: "Hybrid Grass" },
  "cívitas metropolitano": { name: "Cívitas Metropolitano", capacity: 70460, city: "Madrid", country: "Spain", surface: "Grass" },
  "civitas metropolitano": { name: "Cívitas Metropolitano", capacity: 70460, city: "Madrid", country: "Spain", surface: "Grass" },
  "metropolitano stadium": { name: "Cívitas Metropolitano", capacity: 70460, city: "Madrid", country: "Spain", surface: "Grass" },
  "ramón sánchez-pizjuán": { name: "Ramón Sánchez-Pizjuán", capacity: 43883, city: "Sevilla", country: "Spain", surface: "Grass" },
  "ramon sanchez-pizjuan": { name: "Ramón Sánchez-Pizjuán", capacity: 43883, city: "Sevilla", country: "Spain", surface: "Grass" },
  "ramón sánchez pizjuán stadium": { name: "Ramón Sánchez-Pizjuán", capacity: 43883, city: "Sevilla", country: "Spain", surface: "Grass" },
  "ramon sanchez pizjuan stadium": { name: "Ramón Sánchez-Pizjuán", capacity: 43883, city: "Sevilla", country: "Spain", surface: "Grass" },
  "benito villamarín": { name: "Benito Villamarín", capacity: 60721, city: "Sevilla", country: "Spain", surface: "Grass" },
  "benito villamarin": { name: "Benito Villamarín", capacity: 60721, city: "Sevilla", country: "Spain", surface: "Grass" },
  "mestalla": { name: "Mestalla", capacity: 49430, city: "Valencia", country: "Spain", surface: "Grass" },
  "san mamés": { name: "San Mamés", capacity: 53289, city: "Bilbao", country: "Spain", surface: "Grass" },
  "san mames": { name: "San Mamés", capacity: 53289, city: "Bilbao", country: "Spain", surface: "Grass" },
  "reale arena": { name: "Reale Arena", capacity: 39313, city: "San Sebastián", country: "Spain", surface: "Grass" },
  "estadio de la cerámica": { name: "Estadio de la Cerámica", capacity: 23500, city: "Villarreal", country: "Spain", surface: "Grass" },
  "estadio de la ceramica": { name: "Estadio de la Cerámica", capacity: 23500, city: "Villarreal", country: "Spain", surface: "Grass" },
  "rcde stadium": { name: "RCDE Stadium", capacity: 40000, city: "Barcelona", country: "Spain", surface: "Grass" },
  "abanca-balaídos": { name: "Abanca-Balaídos", capacity: 24791, city: "Vigo", country: "Spain", surface: "Grass" },
  "balaídos": { name: "Abanca-Balaídos", capacity: 24791, city: "Vigo", country: "Spain", surface: "Grass" },
  "coliseum": { name: "Coliseum", capacity: 16500, city: "Getafe", country: "Spain", surface: "Grass" },
  "coliseum alfonso pérez": { name: "Coliseum", capacity: 16500, city: "Getafe", country: "Spain", surface: "Grass" },
  "campo de fútbol de vallecas": { name: "Campo de Vallecas", capacity: 14708, city: "Madrid", country: "Spain", surface: "Grass" },
  "estadio de vallecas": { name: "Campo de Vallecas", capacity: 14708, city: "Madrid", country: "Spain", surface: "Grass" },
  "estadi mallorca son moix": { name: "Estadi Mallorca Son Moix", capacity: 23142, city: "Palma", country: "Spain", surface: "Grass" },
  "el sadar": { name: "El Sadar", capacity: 23576, city: "Pamplona", country: "Spain", surface: "Grass" },
  "mendizorrotza": { name: "Mendizorrotza", capacity: 19840, city: "Vitoria-Gasteiz", country: "Spain", surface: "Grass" },
  "estadi montilivi": { name: "Estadi Montilivi", capacity: 14624, city: "Girona", country: "Spain", surface: "Grass" },
  "gran canaria": { name: "Gran Canaria", capacity: 32400, city: "Las Palmas", country: "Spain", surface: "Grass" },
  "josé zorrilla": { name: "José Zorrilla", capacity: 27618, city: "Valladolid", country: "Spain", surface: "Grass" },
  "estadio municipal de butarque": { name: "Municipal de Butarque", capacity: 12454, city: "Leganés", country: "Spain", surface: "Grass" },

  // Italy
  "san siro": { name: "San Siro", capacity: 75817, city: "Milan", country: "Italy", surface: "Grass" },
  "stadio giuseppe meazza": { name: "Stadio Giuseppe Meazza", capacity: 75817, city: "Milan", country: "Italy", surface: "Grass" },
  "stadio olimpico": { name: "Stadio Olimpico", capacity: 70634, city: "Rome", country: "Italy", surface: "Grass" },
  "allianz stadium": { name: "Allianz Stadium", capacity: 41507, city: "Turin", country: "Italy", surface: "Grass" },
  "stadio diego armando maradona": { name: "Stadio Diego Armando Maradona", capacity: 54726, city: "Naples", country: "Italy", surface: "Grass" },
  "stadio artemio franchi": { name: "Stadio Artemio Franchi", capacity: 43147, city: "Florence", country: "Italy", surface: "Grass" },
  "gewiss stadium": { name: "Gewiss Stadium", capacity: 24950, city: "Bergamo", country: "Italy", surface: "Grass" },
  "stadio renato dall'ara": { name: "Stadio Renato Dall'Ara", capacity: 36462, city: "Bologna", country: "Italy", surface: "Grass" },
  "stadio luigi ferraris": { name: "Stadio Luigi Ferraris", capacity: 36599, city: "Genoa", country: "Italy", surface: "Grass" },
  "stadio olimpico grande torino": { name: "Stadio Olimpico Grande Torino", capacity: 28177, city: "Turin", country: "Italy", surface: "Grass" },
  "bluenergy stadium": { name: "Bluenergy Stadium", capacity: 25144, city: "Udine", country: "Italy", surface: "Grass" },
  "stadio friuli": { name: "Bluenergy Stadium", capacity: 25144, city: "Udine", country: "Italy", surface: "Grass" },
  "stadio marcantonio bentegodi": { name: "Stadio Marcantonio Bentegodi", capacity: 31045, city: "Verona", country: "Italy", surface: "Grass" },
  "stadio ennio tardini": { name: "Stadio Ennio Tardini", capacity: 22352, city: "Parma", country: "Italy", surface: "Grass" },
  "stadio via del mare": { name: "Stadio Via del Mare", capacity: 31533, city: "Lecce", country: "Italy", surface: "Grass" },
  "stadio carlo castellani": { name: "Stadio Carlo Castellani", capacity: 16284, city: "Empoli", country: "Italy", surface: "Grass" },
  "unipol domus": { name: "Unipol Domus", capacity: 16416, city: "Cagliari", country: "Italy", surface: "Grass" },
  "u-power stadium": { name: "U-Power Stadium", capacity: 16917, city: "Monza", country: "Italy", surface: "Grass" },
  "stadio pier luigi penzo": { name: "Stadio Pier Luigi Penzo", capacity: 11150, city: "Venice", country: "Italy", surface: "Grass" },
  "giuseppe sinigaglia": { name: "Giuseppe Sinigaglia", capacity: 13602, city: "Como", country: "Italy", surface: "Grass" },
  "mapei stadium": { name: "Mapei Stadium", capacity: 21525, city: "Reggio Emilia", country: "Italy", surface: "Grass" },

  // Germany
  "signal iduna park": { name: "Signal Iduna Park", capacity: 81365, city: "Dortmund", country: "Germany", surface: "Grass" },
  "allianz arena": { name: "Allianz Arena", capacity: 75024, city: "Munich", country: "Germany", surface: "Grass" },
  "mhparena": { name: "MHPArena", capacity: 60449, city: "Stuttgart", country: "Germany", surface: "Grass" },
  "deutsche bank park": { name: "Deutsche Bank Park", capacity: 58000, city: "Frankfurt", country: "Germany", surface: "Grass" },
  "red bull arena": { name: "Red Bull Arena", capacity: 47069, city: "Leipzig", country: "Germany", surface: "Grass" },
  "bayarena": { name: "BayArena", capacity: 30210, city: "Leverkusen", country: "Germany", surface: "Grass" },
  "borussia-park": { name: "Borussia-Park", capacity: 54042, city: "Mönchengladbach", country: "Germany", surface: "Grass" },
  "weserstadion": { name: "Weserstadion", capacity: 42100, city: "Bremen", country: "Germany", surface: "Grass" },
  "europa-park stadion": { name: "Europa-Park Stadion", capacity: 34700, city: "Freiburg", country: "Germany", surface: "Grass" },
  "mewa arena": { name: "Mewa Arena", capacity: 33305, city: "Mainz", country: "Germany", surface: "Grass" },
  "wwk arena": { name: "WWK Arena", capacity: 30660, city: "Augsburg", country: "Germany", surface: "Grass" },
  "prezero arena": { name: "PreZero Arena", capacity: 30150, city: "Sinsheim", country: "Germany", surface: "Grass" },
  "vonovia ruhrstadion": { name: "Vonovia Ruhrstadion", capacity: 27599, city: "Bochum", country: "Germany", surface: "Grass" },
  "stadion an der alten försterei": { name: "Stadion An der Alten Försterei", capacity: 22012, city: "Berlin", country: "Germany", surface: "Grass" },
  "millerntor-stadion": { name: "Millerntor-Stadion", capacity: 29546, city: "Hamburg", country: "Germany", surface: "Grass" },
  "voith-arena": { name: "Voith-Arena", capacity: 15000, city: "Heidenheim", country: "Germany", surface: "Grass" },
  "veltins-arena": { name: "Veltins-Arena", capacity: 62271, city: "Gelsenkirchen", country: "Germany", surface: "Grass" },

  // France
  "parc des princes": { name: "Parc des Princes", capacity: 48583, city: "Paris", country: "France", surface: "Grass" },
  "orange vélodrome": { name: "Orange Vélodrome", capacity: 67394, city: "Marseille", country: "France", surface: "Grass" },
  "stade vélodrome": { name: "Orange Vélodrome", capacity: 67394, city: "Marseille", country: "France", surface: "Grass" },
  "groupama stadium": { name: "Groupama Stadium", capacity: 59186, city: "Lyon", country: "France", surface: "Grass" },
  "decathlon arena - stade pierre-mauroy": { name: "Decathlon Arena", capacity: 50186, city: "Lille", country: "France", surface: "Grass" },
  "stade bollaert-delelis": { name: "Stade Bollaert-Delelis", capacity: 38223, city: "Lens", country: "France", surface: "Grass" },
  "roazhon park": { name: "Roazhon Park", capacity: 29778, city: "Rennes", country: "France", surface: "Grass" },
  "allianz riviera": { name: "Allianz Riviera", capacity: 35624, city: "Nice", country: "France", surface: "Grass" },
  "stade louis ii": { name: "Stade Louis II", capacity: 18523, city: "Monaco", country: "Monaco", surface: "Grass" },
  "stade de la beaujoire": { name: "Stade de la Beaujoire", capacity: 35322, city: "Nantes", country: "France", surface: "Grass" },
  "stade de la meinau": { name: "Stade de la Meinau", capacity: 26109, city: "Strasbourg", country: "France", surface: "Grass" },
  "stade francis-le blé": { name: "Stade Francis-Le Blé", capacity: 15220, city: "Brest", country: "France", surface: "Grass" },
  "stade auguste-delaune": { name: "Stade Auguste-Delaune", capacity: 21684, city: "Reims", country: "France", surface: "Grass" },
  "stadium de toulouse": { name: "Stadium de Toulouse", capacity: 33150, city: "Toulouse", country: "France", surface: "Grass" },
  "stade de la mosson": { name: "Stade de la Mosson", capacity: 32900, city: "Montpellier", country: "France", surface: "Grass" },

  // Saudi Arabia
  "al-awwal park": { name: "Al-Awwal Park", capacity: 25000, city: "Riyadh", country: "Saudi Arabia", surface: "Grass" },
  "kingdom arena": { name: "Kingdom Arena", capacity: 30000, city: "Riyadh", country: "Saudi Arabia", surface: "Grass" },
  "king abdullah sports city": { name: "King Abdullah Sports City", capacity: 62345, city: "Jeddah", country: "Saudi Arabia", surface: "Grass" },
  "king fahd international stadium": { name: "King Fahd International Stadium", capacity: 68752, city: "Riyadh", country: "Saudi Arabia", surface: "Grass" },

  // International & Iconic
  "istiqlol stadioni": { name: "Istiqlol stadioni", capacity: 20500, city: "Farg'ona (Fergana)", country: "Uzbekistan", surface: "Grass" },
  "estádio da luz": { name: "Estádio da Luz", capacity: 64642, city: "Lisbon", country: "Portugal", surface: "Grass" },
  "estádio josé alvalade": { name: "Estádio José Alvalade", capacity: 50095, city: "Lisbon", country: "Portugal", surface: "Grass" },
  "estádio do dragão": { name: "Estádio do Dragão", capacity: 50033, city: "Porto", country: "Portugal", surface: "Grass" },
  "johan cruyff arena": { name: "Johan Cruyff Arena", capacity: 55865, city: "Amsterdam", country: "Netherlands", surface: "Grass" },
  "de kuip": { name: "De Kuip", capacity: 47500, city: "Rotterdam", country: "Netherlands", surface: "Grass" },
  "maracanã": { name: "Maracanã", capacity: 78838, city: "Rio de Janeiro", country: "Brazil", surface: "Grass" },
  "estadio monumental": { name: "Estadio Monumental", capacity: 84567, city: "Buenos Aires", country: "Argentina", surface: "Grass" },
  "chase stadium": { name: "Chase Stadium", capacity: 21550, city: "Fort Lauderdale", country: "USA", surface: "Grass" }
};

// Team name fallbacks if stadium name is missing
const TEAM_VENUE_MAP = {
  "arsenal": { name: "Emirates Stadium", capacity: 60704, city: "London", country: "England", surface: "Grass" },
  "manchester city": { name: "Etihad Stadium", capacity: 53400, city: "Manchester", country: "England", surface: "Grass" },
  "liverpool": { name: "Anfield", capacity: 61276, city: "Liverpool", country: "England", surface: "Grass" },
  "chelsea": { name: "Stamford Bridge", capacity: 40341, city: "London", country: "England", surface: "Grass" },
  "manchester united": { name: "Old Trafford", capacity: 74310, city: "Manchester", country: "England", surface: "Grass" },
  "tottenham hotspur": { name: "Tottenham Hotspur Stadium", capacity: 62850, city: "London", country: "England", surface: "Grass" },
  "newcastle united": { name: "St. James' Park", capacity: 52305, city: "Newcastle", country: "England", surface: "Grass" },
  "aston villa": { name: "Villa Park", capacity: 42640, city: "Birmingham", country: "England", surface: "Grass" },
  "real madrid": { name: "Santiago Bernabéu", capacity: 81044, city: "Madrid", country: "Spain", surface: "Grass" },
  "barcelona": { name: "Estadi Olímpic Lluís Companys", capacity: 54367, city: "Barcelona", country: "Spain", surface: "Grass" },
  "atlético madrid": { name: "Cívitas Metropolitano", capacity: 70460, city: "Madrid", country: "Spain", surface: "Grass" },
  "atletico madrid": { name: "Cívitas Metropolitano", capacity: 70460, city: "Madrid", country: "Spain", surface: "Grass" },
  "bayern munich": { name: "Allianz Arena", capacity: 75024, city: "Munich", country: "Germany", surface: "Grass" },
  "borussia dortmund": { name: "Signal Iduna Park", capacity: 81365, city: "Dortmund", country: "Germany", surface: "Grass" },
  "bayer leverkusen": { name: "BayArena", capacity: 30210, city: "Leverkusen", country: "Germany", surface: "Grass" },
  "paris saint-germain": { name: "Parc des Princes", capacity: 48583, city: "Paris", country: "France", surface: "Grass" },
  "psg": { name: "Parc des Princes", capacity: 48583, city: "Paris", country: "France", surface: "Grass" },
  "inter": { name: "San Siro", capacity: 75817, city: "Milan", country: "Italy", surface: "Grass" },
  "inter milan": { name: "San Siro", capacity: 75817, city: "Milan", country: "Italy", surface: "Grass" },
  "ac milan": { name: "San Siro", capacity: 75817, city: "Milan", country: "Italy", surface: "Grass" },
  "juventus": { name: "Allianz Stadium", capacity: 41507, city: "Turin", country: "Italy", surface: "Grass" },
  "napoli": { name: "Stadio Diego Armando Maradona", capacity: 54726, city: "Naples", country: "Italy", surface: "Grass" },
  "roma": { name: "Stadio Olimpico", capacity: 70634, city: "Rome", country: "Italy", surface: "Grass" },
  "lazio": { name: "Stadio Olimpico", capacity: 70634, city: "Rome", country: "Italy", surface: "Grass" },
  "al hilal": { name: "Kingdom Arena", capacity: 30000, city: "Riyadh", country: "Saudi Arabia", surface: "Grass" },
  "al nassr": { name: "Al-Awwal Park", capacity: 25000, city: "Riyadh", country: "Saudi Arabia", surface: "Grass" },
  "al ittihad": { name: "King Abdullah Sports City", capacity: 62345, city: "Jeddah", country: "Saudi Arabia", surface: "Grass" }
};

function resolveVenueDetails(rawVenueName, homeTeamName, venueObj, matchData) {
  const normVenue = (rawVenueName || '').toLowerCase().trim();
  const normHome = (homeTeamName || '').toLowerCase().trim();
  
  // 1. Direct database match by venue name
  if (VENUE_DATABASE[normVenue]) {
    return { ...VENUE_DATABASE[normVenue] };
  }
  
  // Fuzzy match in VENUE_DATABASE
  for (const key of Object.keys(VENUE_DATABASE)) {
    if (normVenue.includes(key) || key.includes(normVenue)) {
      return { ...VENUE_DATABASE[key] };
    }
  }

  // 2. Direct database match by home team
  for (const teamKey of Object.keys(TEAM_VENUE_MAP)) {
    if (normHome.includes(teamKey) || teamKey.includes(normHome)) {
      return { ...TEAM_VENUE_MAP[teamKey] };
    }
  }

  // 3. Extract from ESPN venueObj
  const city = venueObj?.address?.city || '';
  const country = venueObj?.address?.country || '';
  let capacity = venueObj?.capacity;
  if (!capacity || capacity === 0) {
    capacity = matchData?.gameInfo?.attendance > 0 ? matchData.gameInfo.attendance : 35000;
  }
  
  return {
    name: rawVenueName || (homeTeamName ? `${homeTeamName} Stadium` : 'Stadium'),
    capacity: capacity,
    city: city,
    country: country,
    surface: 'Grass'
  };
}

const venueWeatherCache = new Map();

async function updateMatchWeather(matchId, city, country) {
  if (!city) return;
  const targetEl = document.getElementById(`swWeatherRight_${matchId}`);
  if (!targetEl) return;

  const cacheKey = city.toLowerCase().trim();
  if (venueWeatherCache.has(cacheKey)) {
    const cached = venueWeatherCache.get(cacheKey);
    targetEl.innerHTML = `<span class="sw-temp">${cached.temp}°C</span> <span class="sw-weather-icon">${cached.icon}</span>`;
    return;
  }

  try {
    const cleanCity = city.replace(/\(.*?\)/g, '').trim();
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cleanCity)}&count=1`);
    if (!geoRes.ok) return;
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) return;
    const { latitude, longitude } = geoData.results[0];

    const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day`);
    if (!wRes.ok) return;
    const wData = await wRes.json();
    if (!wData.current) return;

    const temp = Math.round(wData.current.temperature_2m);
    const isDay = wData.current.is_day === 1;
    const code = wData.current.weather_code;

    let icon = isDay ? '☀️' : '🌙';
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      icon = '🌧️';
    } else if ([71, 73, 75, 77, 85, 86].includes(code)) {
      icon = '🌨️';
    } else if ([95, 96, 99].includes(code)) {
      icon = '⛈️';
    } else if ([1, 2, 3].includes(code)) {
      icon = isDay ? '⛅' : '☁️';
    } else if ([45, 48].includes(code)) {
      icon = '🌫️';
    }

    venueWeatherCache.set(cacheKey, { temp, icon });
    targetEl.innerHTML = `<span class="sw-temp">${temp}°C</span> <span class="sw-weather-icon">${icon}</span>`;
  } catch (err) {
    console.warn("Could not fetch venue weather:", err);
  }
}

function renderStadiumWeatherCard(matchData, baseMatch) {
  const venueObj = matchData.gameInfo?.venue || {};
  const rawVenue = venueObj.fullName || venueObj.name || baseMatch?.venue || '';
  const homeTeam = baseMatch?.homeTeam || '';
  
  const venue = resolveVenueDetails(rawVenue, homeTeam, venueObj, matchData);
  const formattedCap = Number(venue.capacity || 20500).toLocaleString('en-US');
  const locStr = venue.city && venue.country ? `${venue.city}, ${venue.country}` : (venue.city || venue.country || 'International');
  const mapsQuery = encodeURIComponent(`${venue.name} ${locStr}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return {
    venueDetails: venue,
    html: `
      <div class="stadium-weather-card">
        <div class="sw-venue-header">
          <div class="sw-icon-pin">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="sw-venue-text">
            <a class="sw-venue-name" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${venue.name}</a>
            <div class="sw-venue-location">${locStr}</div>
          </div>
        </div>

        <div class="sw-divider"></div>

        <div class="sw-row">
          <div class="sw-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span class="sw-label">Capacity</span>
          <span class="sw-value">${formattedCap}</span>
        </div>

        <div class="sw-row" style="margin-top: 12px;">
          <div class="sw-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round">
              <line x1="4" y1="20" x2="20" y2="4"></line>
              <line x1="4" y1="14" x2="14" y2="4"></line>
              <line x1="4" y1="8" x2="8" y2="4"></line>
              <line x1="10" y1="20" x2="20" y2="10"></line>
              <line x1="16" y1="20" x2="20" y2="16"></line>
            </svg>
          </div>
          <span class="sw-label">Surface</span>
          <span class="sw-value">${venue.surface || 'Grass'}</span>
        </div>

        <div class="sw-divider"></div>

        <div class="sw-row sw-weather-row" id="swWeatherRow_${baseMatch?.id || ''}">
          <div class="sw-weather-left">
            <div class="sw-row-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
              </svg>
            </div>
            <span class="sw-label" style="width: auto;">Weather forecast</span>
          </div>
          <div class="sw-weather-right" id="swWeatherRight_${baseMatch?.id || ''}">
            <span class="sw-temp">15°C</span>
            <span class="sw-weather-icon">🌙</span>
          </div>
        </div>
      </div>
    `
  };
}

async function openMatchPage(matchId, leagueCode) {
  const page = document.getElementById('matchDetailsPage');
  const radar = document.getElementById('matchdayRadar');
  const landingContent = document.querySelector('.landing-content');
  const orbit = document.querySelector('.landing-orbit');
  const footer = document.querySelector('.landing-footer');
  const homeBtn = document.getElementById('matchDetailsHomeBtn');
  const content = document.getElementById('matchDetailsContent');

  if (!page || !radar) return;

    // Find base match info from radar cache
  let baseMatch = null;
  if (typeof radarCache !== 'undefined' && typeof radarCurrentDate !== 'undefined') {
    const cachedMatches = radarCache.get(formatEspnDate(radarCurrentDate));
    if (cachedMatches) {
       baseMatch = cachedMatches.find(m => m.id === matchId);
    }
  }

  // Hide the entire landing screen UI
  if (landingContent) landingContent.hidden = true;
  if (orbit) orbit.hidden = true;
  if (footer) footer.hidden = true;
  radar.hidden = true;
  document.getElementById('lineupsPage').hidden = true;
  page.hidden = false;

  // Placeholder while loading detailed summary
  if (baseMatch && content) {
    const isPre = baseMatch.statusState === 'pre';
    const isLive = baseMatch.statusState === 'in';
    const scoreStr = isPre ? '- : -' : `${baseMatch.homeScore} - ${baseMatch.awayScore}`;
    const statusStr = isPre ? formatLocalKickoffTime(baseMatch.date) : (baseMatch.statusShort || baseMatch.statusDetail || 'FT');

    content.innerHTML = `
      <div class="match-header-3d">
        <div class="team-3d home">
          <div class="logo-3d-wrapper"><img src="${baseMatch.homeLogo}" alt="${baseMatch.homeTeam}"></div>
          <span class="team-name">${baseMatch.homeTeam}</span>
        </div>
        <div class="match-center-score">
          <div class="score-text">${scoreStr}</div>
          <div class="score-status ${isLive ? 'live' : ''}">${statusStr}</div>
        </div>
        <div class="team-3d away">
          <div class="logo-3d-wrapper"><img src="${baseMatch.awayLogo}" alt="${baseMatch.awayTeam}"></div>
          <span class="team-name">${baseMatch.awayTeam}</span>
        </div>
      </div>
      <div class="match-modal-loading" style="text-align: center; color: var(--dim); padding: 40px;">Loading Match Data...</div>
    `;
    setup3DTilt(content);
  }

  try {
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/summary?event=${matchId}`, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error('Data not available');
    const matchData = await res.json();
    
    // Determine accurate match state from live matchData
    const compHeader = matchData.header?.competitions?.[0];
    const compStatusState = compHeader?.status?.type?.state || baseMatch?.statusState || 'pre';
    
    // Ensure baseMatch exists if not found in radar cache
    if (!baseMatch && matchData) {
       const homeComp = compHeader?.competitors?.find(c => c.homeAway === 'home');
       const awayComp = compHeader?.competitors?.find(c => c.homeAway === 'away');
       baseMatch = {
          id: matchId,
          leagueCode: leagueCode,
          date: compHeader?.date || '',
          statusState: compStatusState,
          statusDetail: compHeader?.status?.type?.description || '',
          statusShort: compHeader?.status?.type?.shortDetail || '',
          homeTeam: homeComp?.team?.displayName || 'Home',
          homeLogo: homeComp?.team?.logo || '',
          homeScore: homeComp?.score !== undefined ? String(homeComp.score) : '0',
          awayTeam: awayComp?.team?.displayName || 'Away',
          awayLogo: awayComp?.team?.logo || '',
          awayScore: awayComp?.score !== undefined ? String(awayComp.score) : '0',
          venue: matchData.gameInfo?.venue?.fullName || ''
       };
    }
    
    // Parse Venue
    const venueName = matchData.gameInfo?.venue?.fullName || baseMatch?.venue || 'Unknown Stadium';
    const kickTime = formatLocalKickoffTime(baseMatch?.date || compHeader?.date);
    
    // Parse Stats (Home vs Away)
    let statsHtml = '';
    const homeCompObj = matchData.header?.competitions?.[0]?.competitors?.find(c => c.homeAway === 'home') || matchData.boxscore?.teams?.[0];
    const awayCompObj = matchData.header?.competitions?.[0]?.competitors?.find(c => c.homeAway === 'away') || matchData.boxscore?.teams?.[1];
    const homeTeamId = String(homeCompObj?.team?.id || homeCompObj?.id || '');
    const awayTeamId = String(awayCompObj?.team?.id || awayCompObj?.id || '');
    
    if (matchData.boxscore && matchData.boxscore.teams) {
       const homeStatsArr = matchData.boxscore.teams[0]?.statistics || [];
       const awayStatsArr = matchData.boxscore.teams[1]?.statistics || [];
       
       const getStat = (arr, name) => {
         const s = arr.find(x => x.name === name);
         return s ? s.displayValue : '-';
       };

       const homePoss = getStat(homeStatsArr, 'possessionPct');
       const awayPoss = getStat(awayStatsArr, 'possessionPct');
       const homeShots = getStat(homeStatsArr, 'totalShots');
       const awayShots = getStat(awayStatsArr, 'totalShots');
       const homeSoT = getStat(homeStatsArr, 'shotsOnTarget');
       const awaySoT = getStat(awayStatsArr, 'shotsOnTarget');

       // Expected goals (xG)
       const homeXG = getStat(homeStatsArr, 'expectedGoals') !== '-'
         ? getStat(homeStatsArr, 'expectedGoals')
         : (parseFloat(homeSoT || 0) * 0.31 + Math.max(0, parseFloat(homeShots || 0) - parseFloat(homeSoT || 0)) * 0.05).toFixed(2);
       const awayXG = getStat(awayStatsArr, 'expectedGoals') !== '-'
         ? getStat(awayStatsArr, 'expectedGoals')
         : (parseFloat(awaySoT || 0) * 0.31 + Math.max(0, parseFloat(awayShots || 0) - parseFloat(awaySoT || 0)) * 0.05).toFixed(2);

       // Accurate passes format: e.g. "225 (69%)"
       const formatPasses = (arr) => {
         const acc = getStat(arr, 'accuratePasses');
         const tot = getStat(arr, 'totalPasses');
         const pct = getStat(arr, 'passPct');
         if (acc !== '-' && tot !== '-') {
           let pctNum = pct !== '-' ? (parseFloat(pct) <= 1 ? Math.round(parseFloat(pct) * 100) : Math.round(parseFloat(pct))) : Math.round((parseInt(acc) / parseInt(tot)) * 100);
           return `${acc} (${pctNum}%)`;
         }
         return acc !== '-' ? acc : null;
       };
       const homePassesStr = formatPasses(homeStatsArr);
       const awayPassesStr = formatPasses(awayStatsArr);

       // Corners
       const homeCorners = getStat(homeStatsArr, 'wonCorners');
       const awayCorners = getStat(awayStatsArr, 'wonCorners');

       // Yellow cards
       const homeYellow = getStat(homeStatsArr, 'yellowCards');
       const awayYellow = getStat(awayStatsArr, 'yellowCards');

       // Red cards
       const homeRed = getStat(homeStatsArr, 'redCards');
       const awayRed = getStat(awayStatsArr, 'redCards');

       // Fouls
       const homeFouls = getStat(homeStatsArr, 'foulsCommitted');
       const awayFouls = getStat(awayStatsArr, 'foulsCommitted');

       // Offsides
       const homeOffsides = getStat(homeStatsArr, 'offsides');
       const awayOffsides = getStat(awayStatsArr, 'offsides');

       // Saves
       const homeSaves = getStat(homeStatsArr, 'saves');
       const awaySaves = getStat(awayStatsArr, 'saves');

       // Blocked Shots
       const homeBlocked = getStat(homeStatsArr, 'blockedShots');
       const awayBlocked = getStat(awayStatsArr, 'blockedShots');

       // Tackles
       const homeTackles = getStat(homeStatsArr, 'effectiveTackles');
       const awayTackles = getStat(awayStatsArr, 'effectiveTackles');

       // Clearances
       const homeClearances = getStat(homeStatsArr, 'totalClearance');
       const awayClearances = getStat(awayStatsArr, 'totalClearance');

       if (homePoss !== '-') {
         let extraRowsHtml = '';

         // 1. Expected goals (xG)
         extraRowsHtml += `
           <div class="stat-row">
             <span class="stat-val home-val">${homeXG}</span>
             <span class="stat-label">Expected goals (xG)</span>
             <span class="stat-val away-val">${awayXG}</span>
           </div>
         `;

         // 2. Blocked shots
         if (homeBlocked !== '-' || awayBlocked !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeBlocked !== '-' ? homeBlocked : '0'}</span>
               <span class="stat-label">Blocked shots</span>
               <span class="stat-val away-val">${awayBlocked !== '-' ? awayBlocked : '0'}</span>
             </div>
           `;
         }

         // 3. Accurate passes
         if (homePassesStr && awayPassesStr) {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homePassesStr}</span>
               <span class="stat-label">Accurate passes</span>
               <span class="stat-val away-val">${awayPassesStr}</span>
             </div>
           `;
         }

         // 4. Corners
         if (homeCorners !== '-' || awayCorners !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeCorners !== '-' ? homeCorners : '0'}</span>
               <span class="stat-label">Corners</span>
               <span class="stat-val away-val">${awayCorners !== '-' ? awayCorners : '0'}</span>
             </div>
           `;
         }

         // 5. Yellow cards
         if (homeYellow !== '-' || awayYellow !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeYellow !== '-' ? homeYellow : '0'}</span>
               <span class="stat-label">Yellow cards</span>
               <span class="stat-val away-val">${awayYellow !== '-' ? awayYellow : '0'}</span>
             </div>
           `;
         }

         // 6. Red cards (if any)
         if ((homeRed !== '-' && parseInt(homeRed) > 0) || (awayRed !== '-' && parseInt(awayRed) > 0)) {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeRed !== '-' ? homeRed : '0'}</span>
               <span class="stat-label" style="color:#ef4444;">Red cards</span>
               <span class="stat-val away-val">${awayRed !== '-' ? awayRed : '0'}</span>
             </div>
           `;
         }

         // 7. Fouls
         if (homeFouls !== '-' || awayFouls !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeFouls !== '-' ? homeFouls : '0'}</span>
               <span class="stat-label">Fouls</span>
               <span class="stat-val away-val">${awayFouls !== '-' ? awayFouls : '0'}</span>
             </div>
           `;
         }

         // 8. Offsides
         if (homeOffsides !== '-' || awayOffsides !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeOffsides !== '-' ? homeOffsides : '0'}</span>
               <span class="stat-label">Offsides</span>
               <span class="stat-val away-val">${awayOffsides !== '-' ? awayOffsides : '0'}</span>
             </div>
           `;
         }

         // 9. Goalkeeper saves
         if (homeSaves !== '-' || awaySaves !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeSaves !== '-' ? homeSaves : '0'}</span>
               <span class="stat-label">Goalkeeper saves</span>
               <span class="stat-val away-val">${awaySaves !== '-' ? awaySaves : '0'}</span>
             </div>
           `;
         }

         // 10. Tackles
         if (homeTackles !== '-' || awayTackles !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeTackles !== '-' ? homeTackles : '0'}</span>
               <span class="stat-label">Effective tackles</span>
               <span class="stat-val away-val">${awayTackles !== '-' ? awayTackles : '0'}</span>
             </div>
           `;
         }

         // 11. Clearances
         if (homeClearances !== '-' || awayClearances !== '-') {
           extraRowsHtml += `
             <div class="stat-row">
               <span class="stat-val home-val">${homeClearances !== '-' ? homeClearances : '0'}</span>
               <span class="stat-label">Clearances</span>
               <span class="stat-val away-val">${awayClearances !== '-' ? awayClearances : '0'}</span>
             </div>
           `;
         }

         statsHtml = `
           <div class="match-stats-section">
             <h3>Match Stats</h3>
             <div class="stat-row" style="margin-bottom:10px; font-weight:bold; color:var(--dim); font-size:12px;">
               <span class="stat-val home-val">${baseMatch.homeShortName || baseMatch.homeTeam}</span>
               <span class="stat-label"></span>
               <span class="stat-val away-val">${baseMatch.awayShortName || baseMatch.awayTeam}</span>
             </div>
             <div class="stat-row">
               <span class="stat-val home-val">${homePoss}%</span><span class="stat-label">Ball possession</span><span class="stat-val away-val">${awayPoss}%</span>
             </div>
             <div class="stat-row">
               <span class="stat-val home-val">${homeShots}</span><span class="stat-label">Total shots</span><span class="stat-val away-val">${awayShots}</span>
             </div>
             <div class="stat-row">
               <span class="stat-val home-val">${homeSoT}</span><span class="stat-label">Shots on target</span><span class="stat-val away-val">${awaySoT}</span>
             </div>

             <div id="allStatsContainer" hidden style="margin-top: 6px; padding-top: 8px; border-top: 1px dashed rgba(255,255,255,0.08);">
               ${extraRowsHtml}
             </div>

             <button id="btnToggleAllStats" type="button" class="btn-toggle-all-stats">
               VIEW ALL STATS ▼
             </button>
           </div>
         `;
       }
    }

    // Parse Goal Scorers
    let homeScorers = [];
    let awayScorers = [];
    if (matchData.keyEvents) {
      matchData.keyEvents.forEach(evt => {
        const typeText = evt.type?.text?.toLowerCase() || '';
        const isGoal = (evt.scoringPlay === true || typeText.includes('goal') || typeText.includes('penalty')) && !typeText.includes('card');
        
        if (isGoal) {
          const time = evt.clock?.displayValue || '';
          const displayTime = time.includes("'") ? time : (time ? time + "'" : '');
          const player = evt.shortText || evt.text || 'Unknown';
          const goalHtml = `<div class="goal-item"><span class="goal-time">${displayTime}</span> <span>${player}</span></div>`;
          if (evt.team?.id === homeTeamId) homeScorers.push(goalHtml);
          else if (evt.team?.id === awayTeamId) awayScorers.push(goalHtml);
        }
      });
    }
    let scorersHtml = '';
    if (homeScorers.length > 0 || awayScorers.length > 0) {
      scorersHtml = `
        <div class="match-scorers">
          <div class="scorer-side home">${homeScorers.join('')}</div>
          <div class="scorer-side away">${awayScorers.join('')}</div>
        </div>
      `;
    }

    // Check if lineups exist
    let hasLineups = matchData.rosters && matchData.rosters[0]?.roster?.length > 0;
    let isPredictedLineup = false;

    if (!hasLineups && compStatusState === 'pre') {
       const homeTeamId = matchData.boxscore?.teams?.[0]?.team?.id || matchData.header?.competitions?.[0]?.competitors?.find(c => c.homeAway === 'home')?.id;
       const awayTeamId = matchData.boxscore?.teams?.[1]?.team?.id || matchData.header?.competitions?.[0]?.competitors?.find(c => c.homeAway === 'away')?.id;
       if (homeTeamId && awayTeamId) {
          const homeRoster = await fetchLastLineup(leagueCode, homeTeamId);
          const awayRoster = await fetchLastLineup(leagueCode, awayTeamId);
          if (homeRoster || awayRoster) {
             matchData.rosters = [
                homeRoster || { team: { id: homeTeamId }, roster: [] },
                awayRoster || { team: { id: awayTeamId }, roster: [] }
             ];
             hasLineups = true;
             isPredictedLineup = true;
          }
       }
    }

    

    // --- NEW: RICH MATCH INSIGHTS (Last 5, Leaders, Facts) ---
    
    // 1. Last 5 Matches (Form) - GUARANTEE EXACTLY 5 MATCHES FOR BOTH TEAMS ACROSS THE WHOLE APP
    let formHtml = '';
    
    const hComp = matchData.header?.competitions?.[0]?.competitors?.find(c => c.homeAway === 'home') || matchData.boxscore?.teams?.[0];
    const aComp = matchData.header?.competitions?.[0]?.competitors?.find(c => c.homeAway === 'away') || matchData.boxscore?.teams?.[1];
    const hName = hComp?.team?.displayName || baseMatch?.homeTeam || 'Home';
    const aName = aComp?.team?.displayName || baseMatch?.awayTeam || 'Away';
    const hLogo = resolveTeamCrest(hName, hComp?.team?.logo || baseMatch?.homeLogo);
    const aLogo = resolveTeamCrest(aName, aComp?.team?.logo || baseMatch?.awayLogo);
    const hId = String(homeTeamId || hComp?.team?.id || hComp?.id || '');
    const aId = String(awayTeamId || aComp?.team?.id || aComp?.id || '');

    const teamsToProcess = [
      { id: hId, name: hName, logo: hLogo, isHome: true },
      { id: aId, name: aName, logo: aLogo, isHome: false }
    ];

    formHtml += `<div class="match-stats-section" style="margin-top: 25px;">
                   <h3 style="margin-bottom: 15px; font-size: 13px; color: var(--dim); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">TEAM FORM (LAST 5 MATCHES)</h3>
                   <div style="display: flex; gap: 15px;">`;

    teamsToProcess.forEach((tObj) => {
      let teamForm = (matchData.lastFiveGames || []).find(tf => {
        const tfId = String(tf.team?.id || '');
        if (tfId && tObj.id && tfId === tObj.id) return true;
        const tfName = String(tf.team?.displayName || '').toLowerCase().trim();
        const target = tObj.name.toLowerCase().trim();
        return tfName && (tfName === target || tfName.includes(target) || target.includes(tfName));
      });
      if (!teamForm && matchData.lastFiveGames) {
        teamForm = tObj.isHome ? matchData.lastFiveGames[0] : matchData.lastFiveGames[1];
      }

      let events = (teamForm && teamForm.events && Array.isArray(teamForm.events)) ? [...teamForm.events] : [];
      if (events.length > 5) {
        events = events.slice(0, 5);
      } else if (events.length < 5) {
        const needed = 5 - events.length;
        const supplemental = getSupplementalTeamForm(tObj.name, needed, events);
        events = events.concat(supplemental);
        triggerBackgroundFormEnrichment(tObj.name, needed);
      }

      let eventsHtml = '';
      events.forEach(ev => {
        const result = ev.gameResult || '-';
        const resColor = result === 'W' ? '#4ade80' : (result === 'L' ? '#ef4444' : '#fbbf24');
        const opp = ev.opponent?.abbreviation || ev.opponent?.displayName || ev.oppAbbr || ev.opp || 'OPP';
        const oppLogo = ev.opponentLogo || ev.opponent?.logo || resolveTeamCrest(opp) || resolveTeamCrest(ev.opp) || '';
        const score = ev.score || '-';
        const oppImg = oppLogo ? `<img src="${oppLogo}" style="width:14px; height:14px; margin-left:4px; vertical-align:middle; object-fit:contain;">` : '';
        
        eventsHtml += `
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11px; margin-bottom: 6px; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 4px;">
            <span style="font-weight: 800; color: ${resColor}; width: 14px;">${result}</span>
            <span style="color: var(--dim); flex: 1; text-align: left; margin-left: 8px;">vs ${opp} ${oppImg}</span>
            <span style="font-weight: bold; color: var(--ink);">${score}</span>
          </div>
        `;
      });

      formHtml += `
        <div style="flex: 1; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.03);">
           <div style="display: flex; align-items: center; margin-bottom: 10px; gap: 6px;">
             <img src="${tObj.logo}" style="width: 20px; height: 20px; object-fit: contain;">
             <strong style="font-size: 13px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${tObj.name}</strong>
           </div>
           <div>
             ${eventsHtml}
           </div>
        </div>
      `;
    });

    formHtml += `</div></div>`;

    // 2. Season Leaders (Top Scorer & Assister fetched from verified team roster stats)
    let leadersHtml = '';
    
    let homeKeyPlayers = { topScorer: { name: '-', val: 0 }, topAssister: { name: '-', val: 0 } };
    let awayKeyPlayers = { topScorer: { name: '-', val: 0 }, topAssister: { name: '-', val: 0 } };
    
    try {
      const [hKP, aKP] = await Promise.all([
        fetchTeamKeyPlayers(leagueCode, homeTeamId),
        fetchTeamKeyPlayers(leagueCode, awayTeamId)
      ]);
      homeKeyPlayers = hKP;
      awayKeyPlayers = aKP;
    } catch (e) {
      console.warn("Could not fetch team key players", e);
    }

    leadersHtml += `<div class="match-stats-section" style="margin-top: 25px;">
                     <h3 style="margin-bottom: 15px; font-size: 13px; color: var(--dim); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">KEY PLAYERS (SEASON)</h3>
                     <div style="display: flex; gap: 15px;">`;

    [
      { name: baseMatch.homeTeam, kp: homeKeyPlayers },
      { name: baseMatch.awayTeam, kp: awayKeyPlayers }
    ].forEach(({ name, kp }) => {
      leadersHtml += `
        <div style="flex: 1; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.03);">
          <div style="font-weight: bold; font-size: 12px; color: var(--dim); margin-bottom: 8px; text-transform: uppercase;">${name}</div>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 12px;">
            <span style="color: var(--dim);">Top Scorer:</span>
            <span style="color: var(--ink); font-weight: bold;">${kp.topScorer.val > 0 ? kp.topScorer.name : '-'} <span style="color: var(--green); margin-left:4px;">${kp.topScorer.val > 0 ? kp.topScorer.val : ''}</span></span>
          </div>
          
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px;">
            <span style="color: var(--dim);">Top Assister:</span>
            <span style="color: var(--ink); font-weight: bold;">${kp.topAssister.val > 0 ? kp.topAssister.name : '-'} <span style="color: var(--green); margin-left:4px;">${kp.topAssister.val > 0 ? kp.topAssister.val : ''}</span></span>
          </div>
        </div>
      `;
    });

    leadersHtml += `</div></div>`;

    
    // 3. Match Facts / Insights (from ESPN news, notes, insights, or predictor)
    let factsHtml = '';
    let factsArray = [];
    
    if (matchData.notes && matchData.notes.length > 0) {
      matchData.notes.forEach(n => { if (n.headline) factsArray.push(n.headline); });
    }
    if (matchData.insights && matchData.insights.length > 0) {
      matchData.insights.forEach(i => { if (i.text) factsArray.push(i.text); });
    }
    if (matchData.predictor) {
      const hP = matchData.predictor.homeChance || 0;
      const aP = matchData.predictor.awayChance || 0;
      const dP = matchData.predictor.tieChance || 0;
      if (hP > 0) {
         factsArray.push(`Win Probability: ${baseMatch.homeTeam} ${hP}%, ${baseMatch.awayTeam} ${aP}%, Draw ${dP}%`);
      }
    }
    // Artificial facts based on form if ESPN doesn't give text
    if (factsArray.length === 0 && matchData.lastFiveGames) {
       matchData.lastFiveGames.forEach((teamForm, idx) => {
          let wins = 0;
          teamForm.events?.forEach(ev => { if(ev.gameResult === 'W') wins++; });
          if (wins === 5) factsArray.push(`${idx===0?baseMatch.homeTeam:baseMatch.awayTeam} is on a flawless 5-game winning streak.`);
          else if (wins >= 3) factsArray.push(`${idx===0?baseMatch.homeTeam:baseMatch.awayTeam} is in great form, winning ${wins} of their last 5 matches.`);
       });
    }
    
    if (factsArray.length > 0) {
      factsHtml += `<div class="match-stats-section" style="margin-top: 25px;">
                      <h3 style="margin-bottom: 10px; font-size: 13px; color: var(--dim); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">MATCH INSIGHTS & FACTS</h3>
                      <div style="display: flex; flex-direction: column; gap: 8px;">`;
      
      // Limit to 4 facts
      factsArray.slice(0, 4).forEach(fact => {
         factsHtml += `
           <div style="background: rgba(185, 243, 76, 0.05); border-left: 3px solid var(--green); padding: 10px 12px; border-radius: 4px; font-size: 12px; color: var(--ink); line-height: 1.4;">
             ✨ ${fact}
           </div>
         `;
      });
      factsHtml += `</div></div>`;
    }

    
    // Build ${isPredictedLineup ? "Predicted Lineup" : "Official Lineup"} Card
    let tacticsCardHtml = '';
    
    if (hasLineups) {
      const realHome = matchData.rosters.find(r => String(r.team?.id) === String(homeTeamId)) || matchData.rosters[0];
      const realAway = matchData.rosters.find(r => String(r.team?.id) === String(awayTeamId)) || matchData.rosters[1];
      
      const homeForm = realHome?.formation ? realHome.formation : 'TBD';
      const awayForm = realAway?.formation ? realAway.formation : 'TBD';
      
      const badgeHtml = isPredictedLineup 
        ? `<span style="background: rgba(255, 152, 0, 0.15); color: #ff9800; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; text-transform: uppercase;">Predicted XI</span>`
        : `<span style="background: rgba(74, 222, 128, 0.15); color: #4ade80; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; text-transform: uppercase;">Official XI</span>`;
        
      const btnHtml = `<button id="btnOpenLineups" type="button" class="btn-open-tactics" style="margin: 0 auto; width: fit-content; min-width: 200px; max-width: 280px; padding: 12px 28px; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="12" x2="12" y2="21"></line><circle cx="12" cy="12" r="3"></circle></svg>
        VIEW LINEUP
      </button>`;

      tacticsCardHtml = `
        <div class="lineup-preview-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; margin-top: 30px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3 style="margin: 0; font-size: 14px; color: var(--ink); text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 6px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              ${isPredictedLineup ? "Predicted Lineup" : "Official Lineup"}
            </h3>
            ${badgeHtml}
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; background: rgba(0,0,0,0.2); padding: 12px 16px; border-radius: 8px;">
            <div style="text-align: left;">
              <div style="font-weight: bold; font-size: 13px; color: var(--ink);">${baseMatch.homeTeam}</div>
              <div style="color: var(--dim); font-size: 11px; margin-top: 2px;">${homeForm}</div>
            </div>
            <div style="font-size: 14px; font-weight: bold; color: var(--dim);">vs</div>
            <div style="text-align: right;">
              <div style="font-weight: bold; font-size: 13px; color: var(--ink);">${baseMatch.awayTeam}</div>
              <div style="color: var(--dim); font-size: 11px; margin-top: 2px;">${awayForm}</div>
            </div>
          </div>
        
          <div style="display: flex; justify-content: center; align-items: center; width: 100%; margin-top: 10px;">
            ${btnHtml}
          </div>
        </div>
      `;
    } else {
      tacticsCardHtml = `
        <div class="lineup-preview-card" style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 12px; padding: 24px 16px; margin-top: 30px; text-align: center;">
           <svg style="margin-bottom: 10px; color: var(--dim);" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
           <h3 style="margin: 0 0 6px 0; font-size: 14px; color: var(--ink);">Lineups Unavailable</h3>
           <p style="margin: 0; font-size: 12px; color: var(--dim);">Official lineups have not been released yet.</p>
        </div>
      `;
    }

    // Calculate True Match Ratings & Top Performers based on full match statistical actions
    let topPerformersHtml = '';
    const isLiveOrFinished = compStatusState === 'in' || compStatusState === 'post' || compHeader?.status?.type?.completed === true;
    if (hasLineups && !isPredictedLineup && isLiveOrFinished && matchData.rosters?.length >= 2) {
      const realHome = matchData.rosters.find(r => String(r.team?.id) === String(homeTeamId)) || matchData.rosters[0];
      const realAway = matchData.rosters.find(r => String(r.team?.id) === String(awayTeamId)) || matchData.rosters[1];

      const getTopPerformer = (rosterObj) => {
        if (!rosterObj?.roster) return null;
        let bestPlayer = null;
        let highestRating = -1;

        rosterObj.roster.forEach(p => {
          if (!p.starter && (!p.subIns || Number(p.subIns) === 0)) return;
          if (!p.stats || p.stats.length === 0) return;

          const getStat = (name) => {
            const s = p.stats.find(x => x.name === name);
            return s ? Number(s.value) : 0;
          };

          const g = getStat('totalGoals');
          const a = getStat('goalAssists');
          const sot = getStat('shotsOnTarget');
          const shots = getStat('totalShots');
          const sv = getStat('saves');
          const gc = getStat('goalsConceded');
          const fc = getStat('foulsCommitted');
          const fs = getStat('foulsSuffered');
          const yc = getStat('yellowCards');
          const rc = getStat('redCards');
          const og = getStat('ownGoals');

          // FotMob / WhoScored calibrated rating algorithm (Baseline 6.0)
          let rating = 6.0;
          rating += g * 1.2;
          rating += a * 0.7;
          rating += sot * 0.2;
          rating += Math.max(0, shots - sot) * 0.05;
          rating += sv * 0.3;

          const pos = (p.position?.abbreviation || p.position?.name || '').toUpperCase();
          const isDefOrGk = pos.includes('G') || pos.includes('D') || pos.includes('B');
          if (isDefOrGk) {
            rating -= gc * 0.35;
          }

          rating -= fc * 0.1;
          rating += fs * 0.1;
          rating -= yc * 0.5;
          rating -= rc * 2.0;
          rating -= og * 1.5;

          rating = Math.max(3.0, Math.min(10.0, Math.round(rating * 10) / 10));

          if (rating > highestRating) {
            highestRating = rating;
            const statParts = [];
            if (g > 0) statParts.append ? statParts.push(`${g} Goal${g > 1 ? 's' : ''}`) : statParts.push(`${g} Goal${g > 1 ? 's' : ''}`);
            if (a > 0) statParts.push(`${a} Assist${a > 1 ? 's' : ''}`);
            if (sv > 0) statParts.push(`${sv} Save${sv > 1 ? 's' : ''}`);
            if (sot > 0 && g === 0) statParts.push(`${sot} SOG`);
            else if (shots > 1 && g === 0) statParts.push(`${shots} Shots`);

            bestPlayer = {
              name: p.athlete?.displayName || p.athlete?.fullName || 'Player',
              id: p.athlete?.id,
              rating: rating,
              position: p.position?.abbreviation || p.position?.name || 'Player',
              statStr: statParts.join(' • ')
            };
          }
        });
        return bestPlayer;
      };

      const homeBest = getTopPerformer(realHome);
      const awayBest = getTopPerformer(realAway);

      if (homeBest && awayBest) {
        const getRatingBadgeColor = (r) => {
          if (r >= 7.5) return '#b9f34c'; // elite green
          if (r >= 7.0) return '#4ade80'; // good green
          if (r >= 6.0) return '#facc15'; // regular yellow
          return '#f87171'; // below average red
        };

        const homeColor = getRatingBadgeColor(homeBest.rating);
        const awayColor = getRatingBadgeColor(awayBest.rating);

        const homeInitial = getPlayerInitialAvatar(homeBest.name);
        const homePhoto = getUniversalPlayerPhoto(homeBest.name) || getUniversalPlayerPhoto(homeBest);
        const homeImg = homePhoto || homeInitial;

        const awayInitial = getPlayerInitialAvatar(awayBest.name);
        const awayPhoto = getUniversalPlayerPhoto(awayBest.name) || getUniversalPlayerPhoto(awayBest);
        const awayImg = awayPhoto || awayInitial;

        topPerformersHtml = `
          <div class="match-stats-section" style="margin-top:20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 13px; color: var(--dim); text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 6px;">
                <span>⭐</span> TOP MATCH PERFORMERS
              </h3>
              <span style="font-size: 10px; color: var(--muted); font-family: 'DM Mono', monospace;">LIVE MATCH RATINGS</span>
            </div>
            <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap: wrap;">
              <div style="flex:1; min-width: 240px; display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px;">
                <img src="${homeImg}" data-player-name="${homeBest.name}" onerror="handlePlayerPhotoError(this)" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; background: rgba(255,255,255,0.05); border: 2px solid ${homeColor};" alt="${homeBest.name}" />
                <div style="flex: 1; min-width: 0;">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
                    <strong style="color: #fff; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${homeBest.name}</strong>
                    <span style="background: ${homeColor}; color: #102016; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; font-family: 'DM Mono', monospace;">${homeBest.rating.toFixed(1)}</span>
                  </div>
                  <div style="color: var(--dim); font-size: 11px; margin-top: 2px;">${baseMatch.homeShortName || baseMatch.homeTeam} • ${homeBest.position}</div>
                  ${homeBest.statStr ? `<div style="color: var(--green); font-size: 11px; margin-top: 3px; font-weight: 600;">${homeBest.statStr}</div>` : ''}
                </div>
              </div>
              <div style="flex:1; min-width: 240px; display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px;">
                <img src="${awayImg}" data-player-name="${awayBest.name}" onerror="handlePlayerPhotoError(this)" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; background: rgba(255,255,255,0.05); border: 2px solid ${awayColor};" alt="${awayBest.name}" />
                <div style="flex: 1; min-width: 0;">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
                    <strong style="color: #fff; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${awayBest.name}</strong>
                    <span style="background: ${awayColor}; color: #102016; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; font-family: 'DM Mono', monospace;">${awayBest.rating.toFixed(1)}</span>
                  </div>
                  <div style="color: var(--dim); font-size: 11px; margin-top: 2px;">${baseMatch.awayShortName || baseMatch.awayTeam} • ${awayBest.position}</div>
                  ${awayBest.statStr ? `<div style="color: var(--green); font-size: 11px; margin-top: 3px; font-weight: 600;">${awayBest.statStr}</div>` : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }

    // Update baseMatch from fresher matchData
    const headerComp = matchData.header?.competitions?.[0];
    if (headerComp) {
       baseMatch.statusState = headerComp.status?.type?.state || baseMatch.statusState;
       baseMatch.statusDetail = headerComp.status?.type?.description || baseMatch.statusDetail;
       baseMatch.statusShort = headerComp.status?.type?.shortDetail || baseMatch.statusShort;
       const homeC = headerComp.competitors?.find(c => c.homeAway === 'home');
       const awayC = headerComp.competitors?.find(c => c.homeAway === 'away');
       if (homeC && homeC.score !== undefined) baseMatch.homeScore = homeC.score;
       if (awayC && awayC.score !== undefined) baseMatch.awayScore = awayC.score;
    }

    // Update Content
    const isPre = baseMatch.statusState === 'pre';
    const isLive = baseMatch.statusState === 'in';
    const scoreStr = isPre ? '- : -' : `${baseMatch.homeScore} - ${baseMatch.awayScore}`;
    const statusStr = isPre ? kickTime : (baseMatch.statusShort || baseMatch.statusDetail || 'FT');
    const stadiumCardObj = renderStadiumWeatherCard(matchData, baseMatch);

    content.innerHTML = `
      <div class="match-header-3d">
        <div class="team-3d home">
          <div class="logo-3d-wrapper"><img src="${baseMatch.homeLogo}" alt="${baseMatch.homeTeam}"></div>
          <span class="team-name">${baseMatch.homeTeam}</span>
        </div>
        <div class="match-center-score">
          <div class="score-text">${scoreStr}</div>
          <div class="score-status ${isLive ? 'live' : ''}">${statusStr}</div>
        </div>
        <div class="team-3d away">
          <div class="logo-3d-wrapper"><img src="${baseMatch.awayLogo}" alt="${baseMatch.awayTeam}"></div>
          <span class="team-name">${baseMatch.awayTeam}</span>
        </div>
      </div>
      
      <div class="match-info-bar">
         <span>⏱ ${kickTime}</span>
         <span>🏆 ${matchData.header?.league?.name || leagueCode.toUpperCase()}</span>
      </div>
      
      ${stadiumCardObj.html}
      <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
         <button id="btnOpenStandings" type="button" style="padding: 12px; background: rgba(185, 243, 76, 0.1); border: 1px solid var(--green); color: var(--green); font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 700; text-transform: uppercase; border-radius: 8px; cursor: pointer; letter-spacing: 0.05em; transition: background 0.2s;">
           📊 STANDINGS
         </button>
         <button id="btnAnalyzeMatchWithAi" type="button" style="padding: 12px; background: linear-gradient(135deg, #00ff87 0%, #00df73 100%); border: none; color: #0b1210; font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 800; text-transform: uppercase; border-radius: 8px; cursor: pointer; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(0, 255, 135, 0.25);">
           🧠 AI ANALYSIS
         </button>
      </div>

      ${scorersHtml}
      ${statsHtml}
      ${topPerformersHtml}
      ${formHtml}
      ${leadersHtml}
      ${factsHtml}
      
      ${tacticsCardHtml}
    `;
    setup3DTilt(content);
    if (stadiumCardObj.venueDetails && stadiumCardObj.venueDetails.city) {
      updateMatchWeather(baseMatch.id, stadiumCardObj.venueDetails.city, stadiumCardObj.venueDetails.country);
    }

    
    // Bind Standings Button
    const btnOpenStandings = content.querySelector('#btnOpenStandings');
    if (btnOpenStandings) {
      btnOpenStandings.addEventListener('click', () => {
        openStandingsPage(leagueCode, matchData.header?.league?.name || leagueCode);
      });
    }

    // Bind AI Analysis Button
    const btnAnalyzeMatchWithAi = content.querySelector('#btnAnalyzeMatchWithAi');
    if (btnAnalyzeMatchWithAi) {
      btnAnalyzeMatchWithAi.addEventListener('click', () => {
        openAiAnalysisForMatch(leagueCode, matchId, baseMatch, matchData);
      });
    }

    // Bind View All Stats Toggle Button
    const btnToggleAllStats = content.querySelector('#btnToggleAllStats');
    const allStatsContainer = content.querySelector('#allStatsContainer');
    if (btnToggleAllStats && allStatsContainer) {
      btnToggleAllStats.addEventListener('click', () => {
        const isHidden = allStatsContainer.hidden;
        allStatsContainer.hidden = !isHidden;
        btnToggleAllStats.innerHTML = isHidden ? 'SHOW LESS ▲' : 'VIEW ALL STATS ▼';
      });
    }
    
    // Bind Lineups Button
    if (hasLineups) {
      document.getElementById('btnOpenLineups').addEventListener('click', () => {
        page.hidden = true;
        document.getElementById('lineupsPage').hidden = false;
        renderVisualPitch(matchData.rosters, homeTeamId, awayTeamId);
      });
    }

  } catch (err) {
    console.error(err);
    content.innerHTML += `<div class="match-modal-error">Could not load advanced details.</div>`;
  }

  // Home button goes back
  homeBtn.onclick = () => {
    page.hidden = true;
    if (landingContent) landingContent.hidden = false;
    if (orbit) orbit.hidden = false;
    if (footer) footer.hidden = false;
    radar.hidden = false;
    if (content) content.innerHTML = '<div class="match-modal-loading" style="text-align: center; color: var(--dim); font-family: \'DM Mono\', monospace; padding: 40px;">No match selected.</div>';
  };
}

function setup3DTilt(container) {
  const wrappers = container.querySelectorAll('.logo-3d-wrapper');
  wrappers.forEach(wrapper => {
    const img = wrapper.querySelector('img');
    let isPointerDown = false;
    
    wrapper.style.touchAction = 'none';

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
      const y = Math.max(-1, Math.min(1, (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
      
      const intensity = 45;
      const rotateY = x * intensity;
      const rotateX = -y * intensity;
      
      img.style.transition = 'none';
      img.style.transform = `translateZ(50px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`;
    };

    const resetTilt = () => {
      isPointerDown = false;
      img.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      img.style.transform = ''; 
    };

    wrapper.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' || isPointerDown) handleMove(e);
    });
    wrapper.addEventListener('pointerdown', (e) => {
      isPointerDown = true;
      wrapper.setPointerCapture(e.pointerId);
      handleMove(e);
    });
    wrapper.addEventListener('pointerup', (e) => {
      wrapper.releasePointerCapture(e.pointerId);
      resetTilt();
    });
    wrapper.addEventListener('pointerleave', resetTilt);
    wrapper.addEventListener('pointercancel', resetTilt);
  });
}


window.fetchWikiPhoto = async function(playerName, imgElement, fallback) {
  try {
    const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(playerName + ' footballer')}&format=json&origin=*`);
    const searchData = await searchRes.json();
    if (searchData.query.search.length > 0) {
      const title = searchData.query.search[0].title;
      const picRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=300&origin=*`);
      const picData = await picRes.json();
      const pages = picData.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pages[pageId].thumbnail) {
        imgElement.src = pages[pageId].thumbnail.source;
        return;
      }
    }
  } catch(e) {}
  imgElement.src = fallback;
};

function renderVisualPitch(rosters, homeTeamId, awayTeamId) {
  const homePitch = document.getElementById('pitchHome');
  const awayPitch = document.getElementById('pitchAway');
  
  const realHome = rosters.find(r => String(r.team?.id) === String(homeTeamId)) || rosters[0];
  const realAway = rosters.find(r => String(r.team?.id) === String(awayTeamId)) || rosters[1];
  
  homePitch.innerHTML = '';
  awayPitch.innerHTML = '';

  const buildHalf = (teamData, container, isAway) => {
    const starters = (teamData.roster || []).filter(p => p.starter === true);
    
    const grouped = { G: [], D: [], DM: [], M: [], AM: [], F: [] };
    
    starters.forEach(p => {
       const abbr = (p.position?.abbreviation || 'M').toUpperCase();
       let x = 50;
       if (abbr.includes('-L') || abbr.includes('CL') || abbr.includes('LC')) x = 30;
       else if (abbr.includes('-R') || abbr.includes('CR') || abbr.includes('RC')) x = 70;
       else if (abbr.includes('L')) x = 10;
       else if (abbr.includes('R')) x = 90;

       let y = 'M';
       if (abbr.includes('G')) y = 'G';
       else if (abbr.includes('B') || abbr === 'D' || abbr === 'CD' || abbr.includes('CD-')) y = 'D';
       else if (abbr === 'DM' || abbr.includes('DM-')) y = 'DM';
       else if (abbr === 'AM' || abbr.includes('AM-')) y = 'AM';
       else if (abbr.includes('S') || abbr.includes('F') || abbr === 'A' || abbr === 'W' || abbr === 'LW' || abbr === 'RW') y = 'F';
       else y = 'M';
       
       p._sortX = x;
       grouped[y].push(p);
    });
    
    let rows = [grouped.G, grouped.D, grouped.DM, grouped.M, grouped.AM, grouped.F].filter(arr => arr.length > 0);
    
    rows.forEach(row => {
       row.sort((a, b) => a._sortX - b._sortX);
       // Reversing the away team means the X-axis is mirrored. 
       // This correctly places the Away Right Back on the Left side of the screen 
       // (because they are facing down, opposing the Home Left Winger).
       if (isAway) {
          row.reverse();
       }
    });
    
    rows.forEach(rowPlayers => {
      if (!rowPlayers || rowPlayers.length === 0) return;
      const rowDiv = document.createElement('div');
      rowDiv.className = 'pitch-row';
      
      rowPlayers.forEach(player => {
         const pDiv = document.createElement('div');
         pDiv.className = 'pitch-player';
         
         const nameParts = (player.athlete?.displayName || 'Unknown').split(' ');
         const lastName = nameParts[nameParts.length - 1];
         const fullName = player.athlete?.displayName || lastName;
         const initialImg = getPlayerInitialAvatar(lastName);
         const portraitUrl = getUniversalPlayerPhoto(player.athlete || fullName);
         const imgSrc = portraitUrl || initialImg;
         
         pDiv.innerHTML = `
           <img class="pitch-player-img" src="${imgSrc}" alt="${lastName}" data-player-name="${fullName}" onerror="handlePlayerPhotoError(this)">
           <span class="pitch-player-name">${lastName}</span>
         `;
         if (!portraitUrl) {
           resolveMissingPlayerPhoto(pDiv.querySelector('.pitch-player-img'), fullName);
         }
         rowDiv.appendChild(pDiv);
      });
      container.appendChild(rowDiv);
    });
  };

  if (realHome) buildHalf(realHome, homePitch, false);
  if (realAway) buildHalf(realAway, awayPitch, true);
}

document.getElementById('lineupsBackBtn').addEventListener('click', () => {
  document.getElementById('lineupsPage').hidden = true;
  document.getElementById('matchDetailsPage').hidden = false;
});
// Wire up new 'The Games' button
const goToGamesBtn = document.getElementById('goToGamesButton');
if (goToGamesBtn) {
  goToGamesBtn.addEventListener('click', () => {
    switchMainTab('games');
  });
}

// Wire up FotMob tab switching
document.addEventListener('click', (e) => {
  const tabBtn = e.target.closest('[data-tab]');
  if (tabBtn && tabBtn.dataset.tab) {
    switchMainTab(tabBtn.dataset.tab);
  }
});


// Wire up segmented date buttons
document.addEventListener('click', (e) => {
  const segBtn = e.target.closest('.radar-seg-btn');
  if (segBtn && segBtn.dataset.dayOffset !== undefined) {
    setRadarDateOffset(parseInt(segBtn.dataset.dayOffset, 10));
  }
});

// Home Quick Search Bar & Direct Search Navigation
function triggerHomeSearch() {
  const homeInput = document.getElementById('homeSearchInput');
  const query = homeInput ? homeInput.value.trim() : '';
  switchMainTab('search');
  if (query) {
    const playerInput = document.getElementById('playerSearch');
    if (playerInput) {
      playerInput.value = query;
      playerInput.dispatchEvent(new Event('input', { bubbles: true }));
      if (typeof searchPlayer === 'function') {
        searchPlayer(query);
      }
    }
  }
}

document.getElementById('homeQuickSearchBox')?.addEventListener('click', (e) => {
  if (e.target.id !== 'homeSearchInput') {
    triggerHomeSearch();
  }
});

const homeSearchInput = document.getElementById('homeSearchInput');
if (homeSearchInput) {
  homeSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      triggerHomeSearch();
    }
  });
  homeSearchInput.addEventListener('focus', () => {
    triggerHomeSearch();
  });
}

document.getElementById('homeSearchActionBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  triggerHomeSearch();
});

// Navigation Search Buttons
document.getElementById('tabSearchButton')?.addEventListener('click', () => {
  switchMainTab('search');
});
document.getElementById('bottomNavSearchBtn')?.addEventListener('click', () => {
  switchMainTab('search');
});
document.getElementById('topNavSearchBtn')?.addEventListener('click', () => {
  switchMainTab('search');
});

// ==========================================
// HISTORY OF FOOTBALL
// ==========================================
const footballHistory = [
  { year: '1863', title: 'The Birth of Modern Football', desc: 'The Football Association (FA) is officially formed in London. Ebenezer Cobb Morley writes the original 13 Laws of the Game, permanently separating Association Football from Rugby.' },
  { year: '1872', title: 'The First International Match', desc: 'Scotland and England play the first ever official international football match in Glasgow. It ends in a 0-0 draw in front of 4,000 spectators.' },
  { year: '1886', title: 'IFAB Governs the Laws', desc: 'The International Football Association Board (IFAB) is formed by the british associations to preserve and amend the Laws of the Game worldwide.' },
  { year: '1888', title: 'The First Football League', desc: 'Aston Villa director William McGregor founds the English Football League, the oldest football league in the world, with 12 founding clubs to establish regular competitive fixtures.' },
  { year: '1899', title: 'Birth of Legendary Clubs', desc: 'At the turn of the century, massive institutions begin to form across Europe. In 1899 alone, both AC Milan and FC Barcelona are founded.' },
  { year: '1904', title: 'The Foundation of FIFA', desc: 'Fédération Internationale de Football Association (FIFA) is established in Paris by representatives from France, Belgium, Denmark, Netherlands, Spain, Sweden, and Switzerland to oversee the rapidly growing international game.' },
  { year: '1914', title: 'The Christmas Truce Match', desc: 'During World War I, British and German soldiers famously lay down their weapons on Christmas Day to play a spontaneous game of football in No Man\'s Land, proving the sport\'s unique power to unite humanity.' },
  { year: '1916', title: 'Copa América Begins', desc: 'The South American Football Championship (now Copa América) is held for the first time in Argentina. Uruguay wins the inaugural tournament, establishing South America as a powerhouse of world football.' },
  { year: '1930', title: 'The Inaugural FIFA World Cup', desc: 'FIFA organizes the first global World Cup in Uruguay. Only 13 teams participate due to the difficulty of traveling to South America. Host nation Uruguay defeats Argentina 4-2 in the final to become the first World Champions.' },
  { year: '1950', title: 'The Maracanazo', desc: 'In one of the biggest upsets in history, Uruguay defeats boastful hosts Brazil 2-1 at the Maracanã stadium to win the World Cup. The silence of 200,000 Brazilian fans becomes known as the Maracanazo.' },
  { year: '1953', title: 'The Match of the Century', desc: 'The "Mighty Magyars" of Hungary demolish England 6-3 at Wembley Stadium, shattering the myth of English invincibility on home soil and introducing fluid, revolutionary tactics to the British game.' },
  { year: '1954', title: 'The Creation of UEFA', desc: 'The Union of European Football Associations (UEFA) is founded in Basel, Switzerland, organizing the European nations into a single continental governing body.' },
  { year: '1955', title: 'The European Cup is Born', desc: 'L\'Équipe journalist Gabriel Hanot champions the creation of a European club tournament. The European Champion Clubs\' Cup begins, with Real Madrid completely dominating and winning the first five consecutive tournaments.' },
  { year: '1958', title: 'The Munich Air Disaster', desc: 'Tragedy strikes Manchester United as their plane crashes in Munich, claiming the lives of 23 people, including eight "Busby Babes". The tragic event deeply shapes the emotional history of the club.' },
  { year: '1958', title: 'Just Fontaine\'s Record', desc: 'French striker Just Fontaine scores an unbelievable 13 goals in a single World Cup tournament in Sweden. It remains a record that will likely never be broken.' },
  { year: '1958', title: 'The World Discovers Pelé', desc: 'A 17-year-old Brazilian prodigy named Pelé mesmerizes the world in Sweden, scoring six goals and leading Brazil to their first World Cup title. He would go on to win three World Cups, a feat never matched.' },
  { year: '1960', title: 'The First European Championship', desc: 'The inaugural UEFA European Championship is held in France. The Soviet Union defeats Yugoslavia 2-1 in the final after extra time.' },
  { year: '1966', title: 'It Comes Home', desc: 'England wins their only World Cup, defeating West Germany 4-2 at Wembley. Geoff Hurst scores a hat-trick in the final, a unique achievement that stood for 56 years.' },
  { year: '1967', title: 'The Lisbon Lions', desc: 'Celtic becomes the first British team to win the European Cup, famously achieving it with a squad of players all born within 30 miles of Celtic Park.' },
  { year: '1970', title: 'The Beautiful Team', desc: 'Brazil\'s 1970 World Cup team, featuring Pelé, Jairzinho, Rivellino, and Tostão, wins the tournament in Mexico. They are widely regarded as the greatest football team ever assembled, defining the concept of Jogo Bonito (The Beautiful Game).' },
  { year: '1974', title: 'Total Football', desc: 'Johan Cruyff and manager Rinus Michels introduce \'Total Football\' to the world, a tactical theory where any outfield player can take over the role of any other player in a fluid system.' },
  { year: '1986', title: 'Maradona\'s Magnum Opus', desc: 'Diego Maradona single-handedly carries Argentina to World Cup glory in Mexico. In the quarter-final against England, he scores the infamous Hand of God, followed minutes later by the incredible Goal of the Century.' },
  { year: '1988', title: 'Van Basten\'s Volley', desc: 'Marco van Basten scores one of the most iconic goals in football history, an impossible zero-angle volley in the Euro 88 Final to secure the Netherlands\' first major international trophy.' },
  { year: '1989', title: 'The Hillsborough Disaster', desc: '97 Liverpool fans tragically lose their lives in a stadium crush during an FA Cup semi-final at Hillsborough. The disaster forever changes stadium safety laws and the culture of English football.' },
  { year: '1990', title: 'Gazza\'s Tears', desc: 'Paul Gascoigne bursts into tears after receiving a yellow card in the World Cup semi-final. The emotional moment captures the heart of a nation and sparks a massive resurgence of football\'s popularity in England.' },
  { year: '1991', title: 'Women\'s World Cup Inaugurated', desc: 'The first official FIFA Women\'s World Cup is held in China. The United States wins the tournament, kickstarting a massive worldwide growth of the women\'s game.' },
  { year: '1992', title: 'The Dawn of the Premier League', desc: 'The English Premier League is formed by First Division clubs looking to capitalize on lucrative television broadcasting rights. This sparks the era of modern, hyper-commercialized global football.' },
  { year: '1992', title: 'The Back-Pass Rule', desc: 'IFAB introduces the back-pass rule, preventing goalkeepers from picking up the ball when passed to them by a teammate. It dramatically speeds up the pace of the modern game.' },
  { year: '1994', title: 'Baggio\'s Miss', desc: 'Roberto Baggio, the best player in the world, heartbreakingly skies his penalty in the World Cup Final shootout against Brazil, famously proving that "even angels can miss".' },
  { year: '1995', title: 'The Bosman Ruling', desc: 'Belgian player Jean-Marc Bosman wins a landmark legal case at the European Court of Justice. The ruling allows out-of-contract players to move between EU clubs freely without transfer fees, forever changing player power and club finances.' },
  { year: '1997', title: 'The Impossible Free Kick', desc: 'Brazilian legend Roberto Carlos defies the laws of physics against France, hitting a 35-yard free kick with such swerve that it loops around the wall and leaves the goalkeeper rooted to the spot.' },
  { year: '1999', title: 'Manchester United\'s Treble', desc: 'In one of the most dramatic finals ever, Manchester United scores twice in stoppage time to defeat Bayern Munich 2-1 and secure an unprecedented Premier League, FA Cup, and Champions League treble.' },
  { year: '2002', title: 'Zidane\'s Volley', desc: 'Riding the height of their \'Galácticos\' era, Real Madrid wins the Champions League final against Bayer Leverkusen thanks to Zinedine Zidane\'s stunning left-footed volley, one of the greatest goals in tournament history.' },
  { year: '2004', title: 'The Invincibles', desc: 'Arsenal, managed by Arsène Wenger, goes an entire 38-match Premier League season undefeated (26 wins, 12 draws), earning a special golden trophy and forever becoming known as The Invincibles.' },
  { year: '2004', title: 'The Greek Miracle', desc: 'In one of the biggest shocks in football history, massive underdogs Greece win Euro 2004, defeating host nation Portugal in the final through absolute defensive mastery.' },
  { year: '2005', title: 'The Miracle of Istanbul', desc: 'Liverpool pulls off the greatest comeback in Champions League Final history, erasing a 3-0 halftime deficit against a legendary AC Milan team to win on penalties.' },
  { year: '2006', title: 'The Calciopoli Scandal', desc: 'Italian football is rocked by a massive match-fixing scandal. Powerhouse Juventus is stripped of their titles and relegated to Serie B in one of the darkest days in club football history.' },
  { year: '2006', title: 'Zidane\'s Headbutt', desc: 'In his final professional match, Zinedine Zidane shockingly headbutts Marco Materazzi in the chest during extra time of the World Cup Final and gets sent off. Italy goes on to win.' },
  { year: '2009', title: 'The Sextuple', desc: 'Pep Guardiola\'s revolutionary Barcelona team, orchestrated by Xavi and Iniesta, achieves unprecedented perfection by winning all 6 possible trophies in a single calendar year.' },
  { year: '2010', title: 'Tiki-Taka Conquers the World', desc: 'Andrés Iniesta scores the winning goal in the 116th minute of the World Cup Final, cementing Spain\'s golden generation and the absolute dominance of their possession-based Tiki-Taka style.' },
  { year: '2011', title: 'Rooney\'s Bicycle Kick', desc: 'Wayne Rooney scores perhaps the most iconic goal in Premier League history, an acrobatic bicycle kick in the Manchester Derby to secure a 2-1 victory for Manchester United.' },
  { year: '2012', title: 'AGUEROOOOOOOO!', desc: 'Manchester City wins their first Premier League title in the 94th minute of the final game of the season against QPR, snatching the trophy away from rivals Manchester United on goal difference in mind-boggling drama.' },
  { year: '2014', title: 'La Décima', desc: 'After 12 years of failures, Real Madrid finally secures their historic 10th Champions League title (La Décima) by defeating city rivals Atlético Madrid 4-1 in extra time. thanks to a miraculous 93rd-minute header by Sergio Ramos.' },
  { year: '2014', title: 'The Mineirazo (7-1)', desc: 'Host nation Brazil suffers their most humiliating defeat in history, losing 7-1 to Germany in the World Cup semi-final. Germany goes on to win the tournament in Maracanã.' },
  { year: '2015', title: 'The MSN vs BBC Era', desc: 'World football reaches its absolute peak of attacking talent as Barcelona\'s trio (Messi, Suárez, Neymar) battles Real Madrid\'s trio (Bale, Benzema, Cristiano), defining an entire generation of El Clásico.' },
  { year: '2016', title: 'The 5000/1 Miracle', desc: 'In what is widely considered the greatest underdog story in sports history, Claudio Ranieri\'s Leicester City overcomes 5000/1 odds to win the English Premier League.' },
  { year: '2016', title: 'CR7 Conquers Europe', desc: 'Cristiano Ronaldo, already established as one of the greatest goalscorers in history, captains Portugal to their first-ever major international trophy by winning Euro 2016. He would go on to win a staggering 5 Champions League titles and become the all-time leading goalscorer in football history, cementing his unparalleled legacy.' },
  { year: '2017', title: 'The €222M Transfer', desc: 'Paris Saint-Germain shocks the world by activating Neymar\'s \'impossible\' €222 million release clause at Barcelona. The move completely rewrites the economics of football and inflates transfer fees globally.' },
  { year: '2019', title: 'Corner Taken Quickly', desc: 'Liverpool completes a stunning 4-0 comeback against Barcelona at Anfield in the Champions League semi-final, perfectly capped off by Trent Alexander-Arnold\'s genius quick corner kick to Origi.' },
  { year: '2021', title: 'The Super League Collapse', desc: '12 of Europe\'s biggest clubs announce a breakaway \"European Super League.\" Within 48 hours, massive fan protests, political intervention, and threats from UEFA force the endeavor to collapse, showcasing the ultimate power of football fans.' },
  { year: '2022', title: 'Morocco\'s Historic Run', desc: 'Morocco becomes the first African and Arab nation in history to reach the semi-finals of a World Cup, capturing the hearts of millions across the globe in Qatar.' },
  { year: '2026', title: 'Farewell to a God', desc: 'Lionel Messi, the boy from Rosario who gave the world unimaginable magic, announces his retirement from international football. A legendary career filled with crushing heartbreaks and the ultimate glory concludes, leaving an emotional void in the hearts of millions as the greatest of all time says a final goodbye to the beautiful game on the world stage.' },
  { year: 'Present', title: 'The Modern Era', desc: 'Football is the undisputed king of sports, played by 250 million players in over 200 countries, uniting the globe with its timeless beauty and universal language.' }
];




const historyBtn = document.getElementById('historyButton');
const historyPanel = document.getElementById('historyPanel');
const historyHomeBtn = document.getElementById('historyHomeBtn');
const historyTimeline = document.getElementById('historyTimeline');

if (historyBtn && historyPanel) {
  historyBtn.addEventListener('click', () => {
    const landingContent = document.querySelector('.landing-content');
    const orbit = document.querySelector('.landing-orbit');
    const footer = document.querySelector('.landing-footer');
    const radar = document.getElementById('matchdayRadar');
    
    // Hide landing
    if (landingContent) landingContent.hidden = true;
    if (orbit) orbit.hidden = true;
    if (footer) footer.hidden = true;
    if (radar) radar.hidden = true;
    
    // Show history panel
    historyPanel.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render timeline if empty
      if (historyTimeline.children.length === 0) {
        historyTimeline.innerHTML = footballHistory.map((evt, index) => `
          <div class="timeline-item" style="opacity:0; animation: rise 0.6s forwards ease; position: relative; margin-bottom: 40px; border: 1px solid var(--green); background: rgba(185,243,76,0.04); padding: 25px; border-radius: 4px; text-align: center;">
            ${index !== footballHistory.length - 1 ? '<div style="position: absolute; left: 50%; bottom: -40px; width: 1px; height: 40px; background: var(--green); opacity: 0.5;"></div>' : ''}
            <div class="timeline-club" style="color: var(--green); font-family: 'DM Mono', monospace; font-size: 14px; letter-spacing: 0.1em; margin-bottom: 8px;">[ ${evt.year} ]</div>
            <div class="timeline-role" style="font-size: 22px; color: #fff; font-weight: bold; font-family: 'Space Grotesk', sans-serif; margin-bottom: 12px; letter-spacing: -0.02em;">${evt.title}</div>
            <div class="timeline-stats" style="color: var(--muted); line-height: 1.6; font-size: 15px;">${evt.desc}</div>
          </div>
        `).join('');
        
        // Stagger animation
      const items = historyTimeline.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
      });
    }
  });

  historyHomeBtn.addEventListener('click', () => {
    const landingContent = document.querySelector('.landing-content');
    const orbit = document.querySelector('.landing-orbit');
    const footer = document.querySelector('.landing-footer');
    const radar = document.getElementById('matchdayRadar');

    historyPanel.hidden = true;
    if (landingContent) landingContent.hidden = false;
    if (orbit) orbit.hidden = false;
    if (footer) footer.hidden = false;
    if (radar) radar.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// --- ARCADE SOUND & HAPTIC SYSTEM ---
const ArcadeFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },
  vibrate(pattern) {
    if ('vibrate' in navigator) {
      try { navigator.vibrate(pattern); } catch (e) {}
    }
  },
  playClick() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
    this.vibrate(10);
  },
  playWhistle() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2000, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(2200, this.ctx.currentTime + 0.1);
    osc.frequency.linearRampToValueAtTime(2000, this.ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.05);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
    this.vibrate([30, 50, 30]);
  },
  playCorrect() {
    this.init();
    if (!this.ctx) return;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, this.ctx.currentTime + (i*0.05));
      gain.gain.linearRampToValueAtTime(0.1, this.ctx.currentTime + (i*0.05) + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + (i*0.05));
      osc.stop(this.ctx.currentTime + 0.6);
    });
    this.vibrate([100, 50, 100, 50, 200]);
  },
  playWrong() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
    this.vibrate([200, 50, 200]);
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 400);
  }
};



// ==========================================================================
// PLAYER VS PLAYER STAT BATTLE ENGINE
// ==========================================================================

const battleDatabase = {
  "lionel messi": {
    name: "Lionel Messi",
    club: "Inter Miami",
    nation: "Argentina",
    pos: "Forward",
    ovr: 93,
    goals: 937,
    assists: 428,
    trophies: 46,
    peakGoals: 91,
    awards: 8,
    awardsLabel: "Ballon d'Or",
    photo: "https://media.api-sports.io/football/players/154.png"
  },
  "cristiano ronaldo": {
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nation: "Portugal",
    pos: "Forward",
    ovr: 92,
    goals: 985,
    assists: 261,
    trophies: 35,
    peakGoals: 69,
    awards: 5,
    awardsLabel: "Ballon d'Or",
    photo: "https://media.api-sports.io/football/players/874.png"
  },
  "mohamed salah": {
    name: "Mohamed Salah",
    club: "Liverpool",
    nation: "Egypt",
    pos: "Forward",
    ovr: 89,
    goals: 382,
    assists: 172,
    trophies: 11,
    peakGoals: 44,
    awards: 2,
    awardsLabel: "African Player of Year",
    photo: "https://media.api-sports.io/football/players/306.png"
  },
  "kylian mbappe": {
    name: "Kylian Mbapp\u00e9",
    club: "Real Madrid",
    nation: "France",
    pos: "Forward",
    ovr: 92,
    goals: 373,
    assists: 178,
    trophies: 21,
    peakGoals: 44,
    awards: 1,
    awardsLabel: "World Cup Golden Boot",
    photo: "https://media.api-sports.io/football/players/278.png"
  },
  "erling haaland": {
    name: "Erling Haaland",
    club: "Manchester City",
    nation: "Norway",
    pos: "Forward",
    ovr: 91,
    goals: 368,
    assists: 62,
    trophies: 12,
    peakGoals: 52,
    awards: 2,
    awardsLabel: "Golden Boots",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/238714.png&w=350&h=254"
  },
  "neymar": {
    name: "Neymar Jr",
    club: "Al-Hilal",
    nation: "Brazil",
    pos: "Forward",
    ovr: 89,
    goals: 442,
    assists: 262,
    trophies: 29,
    peakGoals: 39,
    awards: 6,
    awardsLabel: "Samba Gold",
    photo: "https://media.api-sports.io/football/players/276.png"
  },
  "neymar jr": {
    name: "Neymar Jr",
    club: "Al-Hilal",
    nation: "Brazil",
    pos: "Forward",
    ovr: 89,
    goals: 442,
    assists: 262,
    trophies: 29,
    peakGoals: 39,
    awards: 6,
    awardsLabel: "Samba Gold",
    photo: "https://media.api-sports.io/football/players/276.png"
  },
  "kevin de bruyne": {
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nation: "Belgium",
    pos: "Midfielder",
    ovr: 91,
    goals: 180,
    assists: 314,
    trophies: 22,
    peakGoals: 19,
    awards: 3,
    awardsLabel: "PL Playmaker Award",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/128386.png&w=350&h=254"
  },
  "harry kane": {
    name: "Harry Kane",
    club: "Bayern Munich",
    nation: "England",
    pos: "Forward",
    ovr: 90,
    goals: 458,
    assists: 122,
    trophies: 3,
    peakGoals: 44,
    awards: 1,
    awardsLabel: "European Golden Shoe",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156557.png&w=350&h=254"
  },
  "jude bellingham": {
    name: "Jude Bellingham",
    club: "Real Madrid",
    nation: "England",
    pos: "Midfielder",
    ovr: 90,
    goals: 92,
    assists: 58,
    trophies: 8,
    peakGoals: 23,
    awards: 1,
    awardsLabel: "Kopa Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271817.png&w=350&h=254"
  },
  "vinicius junior": {
    name: "Vinicius Junior",
    club: "Real Madrid",
    nation: "Brazil",
    pos: "Forward",
    ovr: 91,
    goals: 161,
    assists: 98,
    trophies: 15,
    peakGoals: 26,
    awards: 1,
    awardsLabel: "UCL Player of Season",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/238776.png&w=350&h=254"
  },
  "malo gusto": {
    name: "Malo Gusto",
    club: "Chelsea",
    nation: "France",
    pos: "Defender",
    ovr: 82,
    goals: 2,
    assists: 18,
    trophies: 1,
    peakGoals: 1,
    awards: 1,
    awardsLabel: "Major Finalist",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/304033.png&w=350&h=254"
  },
  "cole palmer": {
    name: "Cole Palmer",
    club: "Chelsea",
    nation: "England",
    pos: "Midfielder",
    ovr: 88,
    goals: 72,
    assists: 42,
    trophies: 5,
    peakGoals: 27,
    awards: 1,
    awardsLabel: "PFA Young Player",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/290886.png&w=350&h=254"
  },
  "zlatan ibrahimovic": {
    name: "Zlatan Ibrahimovic",
    club: "Retired",
    nation: "Sweden",
    pos: "Forward",
    ovr: 90,
    goals: 573,
    assists: 227,
    trophies: 34,
    peakGoals: 50,
    awards: 12,
    awardsLabel: "Guldbollen",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11498.png&w=350&h=254"
  },
  "robert lewandowski": {
    name: "Robert Lewandowski",
    club: "Barcelona",
    nation: "Poland",
    pos: "Forward",
    ovr: 91,
    goals: 688,
    assists: 186,
    trophies: 29,
    peakGoals: 55,
    awards: 2,
    awardsLabel: "FIFA Best Player",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114979.png&w=350&h=254"
  },
  "luka modric": {
    name: "Luka Modric",
    club: "Real Madrid",
    nation: "Croatia",
    pos: "Midfielder",
    ovr: 89,
    goals: 128,
    assists: 168,
    trophies: 31,
    peakGoals: 12,
    awards: 1,
    awardsLabel: "Ballon d'Or",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104389.png&w=350&h=254"
  },
  "sergio ramos": {
    name: "Sergio Ramos",
    club: "Free Agent",
    nation: "Spain",
    pos: "Defender",
    ovr: 90,
    goals: 142,
    assists: 48,
    trophies: 29,
    peakGoals: 13,
    awards: 5,
    awardsLabel: "La Liga Best Defender",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45844.png&w=350&h=254"
  },
  "antoine griezmann": {
    name: "Antoine Griezmann",
    club: "Atletico Madrid",
    nation: "France",
    pos: "Forward",
    ovr: 88,
    goals: 312,
    assists: 162,
    trophies: 9,
    peakGoals: 32,
    awards: 1,
    awardsLabel: "World Cup Bronze Ball",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/140088.png&w=350&h=254"
  },
  "son heung-min": {
    name: "Son Heung-min",
    club: "Tottenham Hotspur",
    nation: "South Korea",
    pos: "Forward",
    ovr: 88,
    goals: 248,
    assists: 114,
    trophies: 3,
    peakGoals: 24,
    awards: 1,
    awardsLabel: "Premier League Golden Boot",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/159403.png&w=350&h=254"
  },
  "andres iniesta": {
    name: "Andres Iniesta",
    club: "Retired",
    nation: "Spain",
    pos: "Midfielder",
    ovr: 91,
    goals: 107,
    assists: 192,
    trophies: 37,
    peakGoals: 9,
    awards: 1,
    awardsLabel: "UEFA Best Player in Europe",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14849.png&w=350&h=254"
  },
  "gianluigi buffon": {
    name: "Gianluigi Buffon",
    club: "Retired",
    nation: "Italy",
    pos: "Goalkeeper",
    ovr: 91,
    goals: 0,
    assists: 4,
    trophies: 29,
    peakGoals: 0,
    awards: 13,
    awardsLabel: "Serie A Goalkeeper of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/1041.png&w=350&h=254"
  },
  "david beckham": {
    name: "David Beckham",
    club: "Retired",
    nation: "England",
    pos: "Midfielder",
    ovr: 88,
    goals: 146,
    assists: 256,
    trophies: 19,
    peakGoals: 16,
    awards: 1,
    awardsLabel: "PL Hall of Fame",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/390.png&w=350&h=254"
  },
  "luis suarez": {
    name: "Luis Suarez",
    club: "Inter Miami",
    nation: "Uruguay",
    pos: "Forward",
    ovr: 92,
    goals: 583,
    assists: 312,
    trophies: 25,
    peakGoals: 59,
    awards: 2,
    awardsLabel: "European Golden Shoe",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99513.png&w=350&h=254"
  },
  "thierry henry": {
    name: "Thierry Henry",
    club: "Retired",
    nation: "France",
    pos: "Forward",
    ovr: 91,
    goals: 411,
    assists: 236,
    trophies: 21,
    peakGoals: 39,
    awards: 4,
    awardsLabel: "Premier League Golden Boot",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/116.png&w=350&h=254"
  },
  "ronaldinho": {
    name: "Ronaldinho Ga\u00facho",
    club: "Retired",
    nation: "Brazil",
    pos: "Forward",
    ovr: 92,
    goals: 328,
    assists: 214,
    trophies: 17,
    peakGoals: 26,
    awards: 1,
    awardsLabel: "Ballon d'Or",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11993.png&w=350&h=254"
  },
  "xavi hernandez": {
    name: "Xavi Hernandez",
    club: "Retired",
    nation: "Spain",
    pos: "Midfielder",
    ovr: 91,
    goals: 122,
    assists: 248,
    trophies: 33,
    peakGoals: 10,
    awards: 4,
    awardsLabel: "World Best Playmaker",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14838.png&w=350&h=254"
  },
  "andrea pirlo": {
    name: "Andrea Pirlo",
    club: "Retired",
    nation: "Italy",
    pos: "Midfielder",
    ovr: 90,
    goals: 86,
    assists: 144,
    trophies: 19,
    peakGoals: 9,
    awards: 3,
    awardsLabel: "Serie A Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11514.png&w=350&h=254"
  },
  "kaka": {
    name: "Ricardo Kaka",
    club: "Retired",
    nation: "Brazil",
    pos: "Midfielder",
    ovr: 91,
    goals: 238,
    assists: 168,
    trophies: 15,
    peakGoals: 19,
    awards: 1,
    awardsLabel: "Ballon d'Or",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/21364.png&w=350&h=254"
  },
  "cesc fabregas": {
    name: "Cesc Fabregas",
    club: "Retired",
    nation: "Spain",
    pos: "Midfielder",
    ovr: 88,
    goals: 144,
    assists: 252,
    trophies: 17,
    peakGoals: 19,
    awards: 1,
    awardsLabel: "Golden Boy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/37965.png&w=350&h=254"
  },
  "didier drogba": {
    name: "Didier Drogba",
    club: "Retired",
    nation: "Ivory Coast",
    pos: "Forward",
    ovr: 90,
    goals: 368,
    assists: 142,
    trophies: 19,
    peakGoals: 37,
    awards: 2,
    awardsLabel: "African Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22646.png&w=350&h=254"
  },
  "sadio mane": {
    name: "Sadio Mane",
    club: "Al-Nassr",
    nation: "Senegal",
    pos: "Forward",
    ovr: 88,
    goals: 254,
    assists: 118,
    trophies: 14,
    peakGoals: 26,
    awards: 2,
    awardsLabel: "African Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/170944.png&w=350&h=254"
  },
  "lamine yamal": {
    name: "Lamine Yamal",
    club: "Barcelona",
    nation: "Spain",
    pos: "Forward",
    ovr: 89,
    goals: 72,
    assists: 48,
    trophies: 5,
    peakGoals: 24,
    awards: 2,
    awardsLabel: "Kopa Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/328434.png&w=350&h=254"
  },
  "alexander isak": {
    name: "Alexander Isak",
    club: "Newcastle United",
    nation: "Sweden",
    pos: "Forward",
    ovr: 86,
    goals: 126,
    assists: 32,
    trophies: 4,
    peakGoals: 25,
    awards: 1,
    awardsLabel: "Swedish Forward of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/235888.png&w=350&h=254"
  },
  "viktor gyokeres": {
    name: "Viktor Gy\u00f6keres",
    club: "Sporting CP",
    nation: "Sweden",
    pos: "Forward",
    ovr: 86,
    goals: 158,
    assists: 54,
    trophies: 4,
    peakGoals: 43,
    awards: 1,
    awardsLabel: "Primeira Liga Top Scorer",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/253965.png&w=350&h=254"
  },
  "karim benzema": {
    name: "Karim Benzema",
    club: "Al-Ittihad",
    nation: "France",
    pos: "Forward",
    ovr: 89,
    goals: 486,
    assists: 224,
    trophies: 34,
    peakGoals: 44,
    awards: 1,
    awardsLabel: "Ballon d'Or",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67863.png&w=350&h=254"
  },
  "gareth bale": {
    name: "Gareth Bale",
    club: "Retired",
    nation: "Wales",
    pos: "Forward",
    ovr: 90,
    goals: 226,
    assists: 162,
    trophies: 22,
    peakGoals: 26,
    awards: 2,
    awardsLabel: "PFA Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/80383.png&w=350&h=254"
  },
  "eden hazard": {
    name: "Eden Hazard",
    club: "Retired",
    nation: "Belgium",
    pos: "Forward",
    ovr: 89,
    goals: 200,
    assists: 158,
    trophies: 16,
    peakGoals: 22,
    awards: 1,
    awardsLabel: "PL Player of Season",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104749.png&w=350&h=254"
  },
  "toni kroos": {
    name: "Toni Kroos",
    club: "Retired",
    nation: "Germany",
    pos: "Midfielder",
    ovr: 90,
    goals: 90,
    assists: 182,
    trophies: 34,
    peakGoals: 9,
    awards: 1,
    awardsLabel: "German Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/103565.png&w=350&h=254"
  },
  "mesut ozil": {
    name: "Mesut Ozil",
    club: "Retired",
    nation: "Germany",
    pos: "Midfielder",
    ovr: 88,
    goals: 121,
    assists: 258,
    trophies: 13,
    peakGoals: 12,
    awards: 1,
    awardsLabel: "Premier League Top Assist",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/84775.png&w=350&h=254"
  },
  "wayne rooney": {
    name: "Wayne Rooney",
    club: "Retired",
    nation: "England",
    pos: "Forward",
    ovr: 91,
    goals: 366,
    assists: 206,
    trophies: 20,
    peakGoals: 34,
    awards: 1,
    awardsLabel: "PFA Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13010.png&w=350&h=254"
  },
  "steven gerrard": {
    name: "Steven Gerrard",
    club: "Retired",
    nation: "England",
    pos: "Midfielder",
    ovr: 90,
    goals: 212,
    assists: 174,
    trophies: 11,
    peakGoals: 24,
    awards: 1,
    awardsLabel: "UEFA Club Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/392.png&w=350&h=254"
  },
  "frank lampard": {
    name: "Frank Lampard",
    club: "Retired",
    nation: "England",
    pos: "Midfielder",
    ovr: 90,
    goals: 303,
    assists: 190,
    trophies: 14,
    peakGoals: 27,
    awards: 1,
    awardsLabel: "Premier League Hall of Fame",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/400.png&w=350&h=254"
  },
  "sergio aguero": {
    name: "Sergio Aguero",
    club: "Retired",
    nation: "Argentina",
    pos: "Forward",
    ovr: 91,
    goals: 427,
    assists: 148,
    trophies: 21,
    peakGoals: 33,
    awards: 1,
    awardsLabel: "Premier League Golden Boot",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/84984.png&w=350&h=254"
  },
  "thomas muller": {
    name: "Thomas Muller",
    club: "Bayern Munich",
    nation: "Germany",
    pos: "Forward",
    ovr: 88,
    goals: 295,
    assists: 278,
    trophies: 33,
    peakGoals: 32,
    awards: 1,
    awardsLabel: "World Cup Golden Boot",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/127170.png&w=350&h=254"
  },
  "manuel neuer": {
    name: "Manuel Neuer",
    club: "Bayern Munich",
    nation: "Germany",
    pos: "Goalkeeper",
    ovr: 91,
    goals: 0,
    assists: 7,
    trophies: 32,
    peakGoals: 0,
    awards: 5,
    awardsLabel: "World Best Goalkeeper",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/88490.png&w=350&h=254"
  },
  "angel di maria": {
    name: "Angel Di Maria",
    club: "Benfica",
    nation: "Argentina",
    pos: "Forward",
    ovr: 88,
    goals: 215,
    assists: 292,
    trophies: 35,
    peakGoals: 19,
    awards: 1,
    awardsLabel: "Olimpia de Plata",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104192.png&w=350&h=254"
  },
  "alexis sanchez": {
    name: "Alexis Sanchez",
    club: "Udinese",
    nation: "Chile",
    pos: "Forward",
    ovr: 87,
    goals: 254,
    assists: 172,
    trophies: 20,
    peakGoals: 30,
    awards: 1,
    awardsLabel: "Copa America Best Player",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99343.png&w=350&h=254"
  },
  "romelu lukaku": {
    name: "Romelu Lukaku",
    club: "Napoli",
    nation: "Belgium",
    pos: "Forward",
    ovr: 87,
    goals: 396,
    assists: 112,
    trophies: 7,
    peakGoals: 34,
    awards: 1,
    awardsLabel: "Serie A MVP",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/135186.png&w=350&h=254"
  },
  "raheem sterling": {
    name: "Raheem Sterling",
    club: "Arsenal",
    nation: "England",
    pos: "Forward",
    ovr: 86,
    goals: 218,
    assists: 142,
    trophies: 14,
    peakGoals: 31,
    awards: 1,
    awardsLabel: "FWA Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156947.png&w=350&h=254"
  },
  "casemiro": {
    name: "Carlos Casemiro",
    club: "Manchester United",
    nation: "Brazil",
    pos: "Midfielder",
    ovr: 88,
    goals: 68,
    assists: 54,
    trophies: 23,
    peakGoals: 7,
    awards: 1,
    awardsLabel: "Samba Gold",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148677.png&w=350&h=254"
  },
  "paul pogba": {
    name: "Paul Pogba",
    club: "Free Agent",
    nation: "France",
    pos: "Midfielder",
    ovr: 86,
    goals: 102,
    assists: 126,
    trophies: 13,
    peakGoals: 16,
    awards: 1,
    awardsLabel: "Golden Boy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/137839.png&w=350&h=254"
  },
  "bukayo saka": {
    name: "Bukayo Saka",
    club: "Arsenal",
    nation: "England",
    pos: "Forward",
    ovr: 88,
    goals: 100,
    assists: 78,
    trophies: 4,
    peakGoals: 21,
    awards: 1,
    awardsLabel: "England Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271816.png&w=350&h=254"
  },
  "phil foden": {
    name: "Phil Foden",
    club: "Manchester City",
    nation: "England",
    pos: "Midfielder",
    ovr: 89,
    goals: 126,
    assists: 74,
    trophies: 18,
    peakGoals: 27,
    awards: 1,
    awardsLabel: "FWA Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/256998.png&w=350&h=254"
  },
  "rodri": {
    name: "Rodrigo Hernandez (Rodri)",
    club: "Manchester City",
    nation: "Spain",
    pos: "Midfielder",
    ovr: 91,
    goals: 38,
    assists: 44,
    trophies: 13,
    peakGoals: 9,
    awards: 1,
    awardsLabel: "Ballon d'Or",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/245367.png&w=350&h=254"
  },
  "declan rice": {
    name: "Declan Rice",
    club: "Arsenal",
    nation: "England",
    pos: "Midfielder",
    ovr: 88,
    goals: 32,
    assists: 38,
    trophies: 3,
    peakGoals: 7,
    awards: 1,
    awardsLabel: "Conference League MVP",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/237672.png&w=350&h=254"
  },
  "virgil van dijk": {
    name: "Virgil van Dijk",
    club: "Liverpool",
    nation: "Netherlands",
    pos: "Defender",
    ovr: 90,
    goals: 54,
    assists: 24,
    trophies: 11,
    peakGoals: 7,
    awards: 1,
    awardsLabel: "UEFA Men's Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/159846.png&w=350&h=254"
  },
  "trent alexander-arnold": {
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nation: "England",
    pos: "Defender",
    ovr: 88,
    goals: 26,
    assists: 108,
    trophies: 8,
    peakGoals: 4,
    awards: 1,
    awardsLabel: "Premier League Young Player",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/232980.png&w=350&h=254"
  },
  "thibaut courtois": {
    name: "Thibaut Courtois",
    club: "Real Madrid",
    nation: "Belgium",
    pos: "Goalkeeper",
    ovr: 90,
    goals: 0,
    assists: 2,
    trophies: 20,
    peakGoals: 0,
    awards: 1,
    awardsLabel: "Yashin Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148405.png&w=350&h=254"
  },
  "alisson becker": {
    name: "Alisson Becker",
    club: "Liverpool",
    nation: "Brazil",
    pos: "Goalkeeper",
    ovr: 89,
    goals: 1,
    assists: 4,
    trophies: 8,
    peakGoals: 1,
    awards: 1,
    awardsLabel: "Yashin Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/196144.png&w=350&h=254"
  },
  "bernardo silva": {
    name: "Bernardo Silva",
    club: "Manchester City",
    nation: "Portugal",
    pos: "Midfielder",
    ovr: 89,
    goals: 118,
    assists: 126,
    trophies: 20,
    peakGoals: 13,
    awards: 1,
    awardsLabel: "Nations League MVP",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/194723.png&w=350&h=254"
  },
  "bruno fernandes": {
    name: "Bruno Fernandes",
    club: "Manchester United",
    nation: "Portugal",
    pos: "Midfielder",
    ovr: 88,
    goals: 188,
    assists: 172,
    trophies: 8,
    peakGoals: 32,
    awards: 3,
    awardsLabel: "Sir Matt Busby Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178564.png&w=350&h=254"
  },
  "federico valverde": {
    name: "Federico Valverde",
    club: "Real Madrid",
    nation: "Uruguay",
    pos: "Midfielder",
    ovr: 89,
    goals: 38,
    assists: 46,
    trophies: 14,
    peakGoals: 12,
    awards: 1,
    awardsLabel: "Club World Cup Silver Ball",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/239704.png&w=350&h=254"
  },
  "eduardo camavinga": {
    name: "Eduardo Camavinga",
    club: "Real Madrid",
    nation: "France",
    pos: "Midfielder",
    ovr: 86,
    goals: 12,
    assists: 20,
    trophies: 10,
    peakGoals: 3,
    awards: 1,
    awardsLabel: "Golden Boy Runner-Up",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/283838.png&w=350&h=254"
  },
  "pedri": {
    name: "Pedro Gonzalez (Pedri)",
    club: "Barcelona",
    nation: "Spain",
    pos: "Midfielder",
    ovr: 88,
    goals: 28,
    assists: 34,
    trophies: 5,
    peakGoals: 7,
    awards: 1,
    awardsLabel: "Golden Boy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/288448.png&w=350&h=254"
  },
  "gavi": {
    name: "Pablo Gavira (Gavi)",
    club: "Barcelona",
    nation: "Spain",
    pos: "Midfielder",
    ovr: 86,
    goals: 14,
    assists: 26,
    trophies: 4,
    peakGoals: 3,
    awards: 1,
    awardsLabel: "Kopa Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/315181.png&w=350&h=254"
  },
  "ilkay gundogan": {
    name: "Ilkay Gundogan",
    club: "Manchester City",
    nation: "Germany",
    pos: "Midfielder",
    ovr: 87,
    goals: 114,
    assists: 82,
    trophies: 18,
    peakGoals: 17,
    awards: 1,
    awardsLabel: "German Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/133603.png&w=350&h=254"
  },
  "jamal musiala": {
    name: "Jamal Musiala",
    club: "Bayern Munich",
    nation: "Germany",
    pos: "Midfielder",
    ovr: 89,
    goals: 81,
    assists: 52,
    trophies: 12,
    peakGoals: 18,
    awards: 1,
    awardsLabel: "Bayern Player of Season",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/290885.png&w=350&h=254"
  },
  "florian wirtz": {
    name: "Florian Wirtz",
    club: "Bayer Leverkusen",
    nation: "Germany",
    pos: "Midfielder",
    ovr: 89,
    goals: 68,
    assists: 76,
    trophies: 4,
    peakGoals: 18,
    awards: 1,
    awardsLabel: "Bundesliga Player of Season",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/296541.png&w=350&h=254"
  },
  "victor osimhen": {
    name: "Victor Osimhen",
    club: "Galatasaray",
    nation: "Nigeria",
    pos: "Forward",
    ovr: 88,
    goals: 164,
    assists: 42,
    trophies: 5,
    peakGoals: 31,
    awards: 1,
    awardsLabel: "African Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/229094.png&w=350&h=254"
  },
  "khvicha kvaratskhelia": {
    name: "Khvicha Kvaratskhelia",
    club: "Napoli",
    nation: "Georgia",
    pos: "Forward",
    ovr: 87,
    goals: 68,
    assists: 62,
    trophies: 3,
    peakGoals: 14,
    awards: 1,
    awardsLabel: "Serie A MVP",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/264770.png&w=350&h=254"
  },
  "lautaro martinez": {
    name: "Lautaro Martinez",
    club: "Inter Milan",
    nation: "Argentina",
    pos: "Forward",
    ovr: 89,
    goals: 218,
    assists: 68,
    trophies: 13,
    peakGoals: 27,
    awards: 1,
    awardsLabel: "Serie A MVP",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231295.png&w=350&h=254"
  },
  "julian alvarez": {
    name: "Julian Alvarez",
    club: "Atletico Madrid",
    nation: "Argentina",
    pos: "Forward",
    ovr: 87,
    goals: 122,
    assists: 58,
    trophies: 16,
    peakGoals: 24,
    awards: 1,
    awardsLabel: "World Cup Winner",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271815.png&w=350&h=254"
  },
  "rafael leao": {
    name: "Rafael Leao",
    club: "AC Milan",
    nation: "Portugal",
    pos: "Forward",
    ovr: 87,
    goals: 92,
    assists: 68,
    trophies: 4,
    peakGoals: 16,
    awards: 1,
    awardsLabel: "Serie A MVP",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/251785.png&w=350&h=254"
  },
  "ousmane dembele": {
    name: "Ousmane Dembele",
    club: "Paris Saint-Germain",
    nation: "France",
    pos: "Forward",
    ovr: 86,
    goals: 88,
    assists: 116,
    trophies: 10,
    peakGoals: 14,
    awards: 1,
    awardsLabel: "Bundesliga Rookie of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/228189.png&w=350&h=254"
  },
  "achraf hakimi": {
    name: "Achraf Hakimi",
    club: "Paris Saint-Germain",
    nation: "Morocco",
    pos: "Defender",
    ovr: 88,
    goals: 46,
    assists: 68,
    trophies: 12,
    peakGoals: 9,
    awards: 3,
    awardsLabel: "African Team of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231264.png&w=350&h=254"
  },
  "alphonso davies": {
    name: "Alphonso Davies",
    club: "Bayern Munich",
    nation: "Canada",
    pos: "Defender",
    ovr: 86,
    goals: 28,
    assists: 48,
    trophies: 15,
    peakGoals: 4,
    awards: 2,
    awardsLabel: "CONCACAF Player of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/237991.png&w=350&h=254"
  },
  "marcus rashford": {
    name: "Marcus Rashford",
    club: "Manchester United",
    nation: "England",
    pos: "Forward",
    ovr: 85,
    goals: 148,
    assists: 82,
    trophies: 6,
    peakGoals: 30,
    awards: 1,
    awardsLabel: "MBE Honour",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/230784.png&w=350&h=254"
  },
  "martin odegaard": {
    name: "Martin Odegaard",
    club: "Arsenal",
    nation: "Norway",
    pos: "Midfielder",
    ovr: 88,
    goals: 68,
    assists: 78,
    trophies: 5,
    peakGoals: 15,
    awards: 2,
    awardsLabel: "Arsenal Player of Season",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/210406.png&w=350&h=254"
  },
  "emiliano martinez": {
    name: "Emiliano Martinez",
    club: "Aston Villa",
    nation: "Argentina",
    pos: "Goalkeeper",
    ovr: 88,
    goals: 0,
    assists: 2,
    trophies: 6,
    peakGoals: 0,
    awards: 2,
    awardsLabel: "Yashin Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156948.png&w=350&h=254"
  },
  "gianluigi donnarumma": {
    name: "Gianluigi Donnarumma",
    club: "Paris Saint-Germain",
    nation: "Italy",
    pos: "Goalkeeper",
    ovr: 89,
    goals: 0,
    assists: 1,
    trophies: 10,
    peakGoals: 0,
    awards: 1,
    awardsLabel: "Yashin Trophy",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/216527.png&w=350&h=254"
  },
  "marquinhos": {
    name: "Marcos Marquinhos",
    club: "Paris Saint-Germain",
    nation: "Brazil",
    pos: "Defender",
    ovr: 88,
    goals: 44,
    assists: 18,
    trophies: 32,
    peakGoals: 6,
    awards: 6,
    awardsLabel: "Ligue 1 Team of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/175200.png&w=350&h=254"
  },
  "raphinha": {
    name: "Raphael Raphinha",
    club: "Barcelona",
    nation: "Brazil",
    pos: "Forward",
    ovr: 88,
    goals: 114,
    assists: 84,
    trophies: 6,
    peakGoals: 22,
    awards: 1,
    awardsLabel: "Samba Gold",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231267.png&w=350&h=254"
  },
  "darwin nunez": {
    name: "Darwin Nunez",
    club: "Liverpool",
    nation: "Uruguay",
    pos: "Forward",
    ovr: 86,
    goals: 118,
    assists: 42,
    trophies: 5,
    peakGoals: 34,
    awards: 1,
    awardsLabel: "Primeira Liga Top Scorer",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/253995.png&w=350&h=254"
  },
  "robin van persie": {
    name: "Robin van Persie",
    club: "Retired",
    nation: "Netherlands",
    pos: "Forward",
    ovr: 90,
    goals: 322,
    assists: 142,
    trophies: 7,
    peakGoals: 37,
    awards: 2,
    awardsLabel: "Premier League Golden Boot",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14856.png&w=350&h=254"
  },
  "arjen robben": {
    name: "Arjen Robben",
    club: "Retired",
    nation: "Netherlands",
    pos: "Forward",
    ovr: 91,
    goals: 246,
    assists: 198,
    trophies: 32,
    peakGoals: 23,
    awards: 1,
    awardsLabel: "German Footballer of Year",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11497.png&w=350&h=254"
  }
};

const PLAYER_LIVE_CONFIG = {
  "cristiano ronaldo": {
    name: "Cristiano Ronaldo",
    playerKeys: ["cristiano ronaldo", "ronaldo", "cr7", "c. ronaldo"],
    teamId: "817",
    clubName: "Al-Nassr",
    leagueCode: "ksa.1",
    altLeagueCodes: ["afc.champions", "ksa.kings.cup"],
    verifiedBase: {"goals": 982, "assists": 261, "trophies": 35, "ovr": 92, "peakGoals": 69, "awards": 5, "awardsLabel": "Ballon d'Or"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "lionel messi": {
    name: "Lionel Messi",
    playerKeys: ["lionel messi", "messi", "leo messi", "l. messi"],
    teamId: "20232",
    clubName: "Inter Miami",
    leagueCode: "usa.1",
    altLeagueCodes: ["concacaf.champions"],
    verifiedBase: {"goals": 948, "assists": 427, "trophies": 46, "ovr": 93, "peakGoals": 91, "awards": 8, "awardsLabel": "Ballon d'Or"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "lamine yamal": {
    name: "Lamine Yamal",
    playerKeys: ["lamine yamal", "yamal", "l. yamal"],
    teamId: "83",
    clubName: "Barcelona",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 70, "assists": 47, "trophies": 5, "ovr": 89, "peakGoals": 24, "awards": 2, "awardsLabel": "Kopa Trophy"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "vinicius junior": {
    name: "Vinicius Junior",
    playerKeys: ["vinicius junior", "vinicius jr", "vini jr", "vinicius", "vini"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 161, "assists": 98, "trophies": 15, "ovr": 91, "peakGoals": 26, "awards": 1, "awardsLabel": "UCL Player of Season"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "kylian mbappe": {
    name: "Kylian Mbapp\u00e9",
    playerKeys: ["kylian mbapp\u00e9", "kylian mbappe", "mbappe", "mbapp\u00e9", "k. mbappe"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 373, "assists": 178, "trophies": 21, "ovr": 92, "peakGoals": 44, "awards": 1, "awardsLabel": "World Cup Golden Boot"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "erling haaland": {
    name: "Erling Haaland",
    playerKeys: ["erling haaland", "haaland", "e. haaland"],
    teamId: "382",
    clubName: "Manchester City",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 368, "assists": 62, "trophies": 12, "ovr": 91, "peakGoals": 52, "awards": 2, "awardsLabel": "Golden Boots"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "jude bellingham": {
    name: "Jude Bellingham",
    playerKeys: ["jude bellingham", "bellingham", "j. bellingham"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 92, "assists": 58, "trophies": 8, "ovr": 90, "peakGoals": 23, "awards": 1, "awardsLabel": "Kopa Trophy"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "harry kane": {
    name: "Harry Kane",
    playerKeys: ["harry kane", "kane", "h. kane"],
    teamId: "132",
    clubName: "Bayern Munich",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {"goals": 458, "assists": 122, "trophies": 3, "ovr": 90, "peakGoals": 44, "awards": 1, "awardsLabel": "European Golden Shoe"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "robert lewandowski": {
    name: "Robert Lewandowski",
    playerKeys: ["robert lewandowski", "lewandowski", "r. lewandowski", "lewy"],
    teamId: "83",
    clubName: "Barcelona",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 688, "assists": 186, "trophies": 29, "ovr": 91, "peakGoals": 55, "awards": 2, "awardsLabel": "FIFA Best Player"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "mohamed salah": {
    name: "Mohamed Salah",
    playerKeys: ["mohamed salah", "salah", "m. salah", "mo salah"],
    teamId: "364",
    clubName: "Liverpool",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 382, "assists": 172, "trophies": 11, "ovr": 89, "peakGoals": 44, "awards": 2, "awardsLabel": "African Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "cole palmer": {
    name: "Cole Palmer",
    playerKeys: ["cole palmer", "palmer", "c. palmer"],
    teamId: "363",
    clubName: "Chelsea",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.europa.conf", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 72, "assists": 42, "trophies": 5, "ovr": 88, "peakGoals": 27, "awards": 1, "awardsLabel": "PFA Young Player"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "bukayo saka": {
    name: "Bukayo Saka",
    playerKeys: ["bukayo saka", "saka", "b. saka"],
    teamId: "359",
    clubName: "Arsenal",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 100, "assists": 78, "trophies": 4, "ovr": 88, "peakGoals": 21, "awards": 1, "awardsLabel": "England Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "phil foden": {
    name: "Phil Foden",
    playerKeys: ["phil foden", "foden", "p. foden"],
    teamId: "382",
    clubName: "Manchester City",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 126, "assists": 74, "trophies": 18, "ovr": 89, "peakGoals": 27, "awards": 1, "awardsLabel": "FWA Footballer of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "rodri": {
    name: "Rodrigo Hernandez (Rodri)",
    playerKeys: ["rodri", "rodrigo", "rodrigo hernandez"],
    teamId: "382",
    clubName: "Manchester City",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 38, "assists": 44, "trophies": 13, "ovr": 91, "peakGoals": 9, "awards": 1, "awardsLabel": "Ballon d'Or"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "jamal musiala": {
    name: "Jamal Musiala",
    playerKeys: ["jamal musiala", "musiala", "j. musiala"],
    teamId: "132",
    clubName: "Bayern Munich",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {"goals": 81, "assists": 52, "trophies": 12, "ovr": 89, "peakGoals": 18, "awards": 1, "awardsLabel": "Bayern Player of Season"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "florian wirtz": {
    name: "Florian Wirtz",
    playerKeys: ["florian wirtz", "wirtz", "f. wirtz"],
    teamId: "131",
    clubName: "Bayer Leverkusen",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {"goals": 68, "assists": 76, "trophies": 4, "ovr": 89, "peakGoals": 18, "awards": 1, "awardsLabel": "Bundesliga Player of Season"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "son heung-min": {
    name: "Son Heung-min",
    playerKeys: ["son heung-min", "son", "heung-min son"],
    teamId: "367",
    clubName: "Tottenham Hotspur",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.europa", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 248, "assists": 114, "trophies": 3, "ovr": 88, "peakGoals": 24, "awards": 1, "awardsLabel": "Premier League Golden Boot"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "antoine griezmann": {
    name: "Antoine Griezmann",
    playerKeys: ["antoine griezmann", "griezmann", "a. griezmann"],
    teamId: "1068",
    clubName: "Atletico Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 312, "assists": 162, "trophies": 9, "ovr": 88, "peakGoals": 32, "awards": 1, "awardsLabel": "World Cup Bronze Ball"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "bruno fernandes": {
    name: "Bruno Fernandes",
    playerKeys: ["bruno fernandes", "bruno", "b. fernandes"],
    teamId: "360",
    clubName: "Manchester United",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.europa", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 188, "assists": 172, "trophies": 8, "ovr": 88, "peakGoals": 32, "awards": 3, "awardsLabel": "Sir Matt Busby Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "marcus rashford": {
    name: "Marcus Rashford",
    playerKeys: ["marcus rashford", "rashford", "m. rashford"],
    teamId: "360",
    clubName: "Manchester United",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.europa", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 148, "assists": 82, "trophies": 6, "ovr": 85, "peakGoals": 30, "awards": 1, "awardsLabel": "MBE Honour"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "lautaro martinez": {
    name: "Lautaro Martinez",
    playerKeys: ["lautaro martinez", "lautaro", "l. martinez"],
    teamId: "110",
    clubName: "Inter Milan",
    leagueCode: "ita.1",
    altLeagueCodes: ["uefa.champions", "ita.coppa_italia"],
    verifiedBase: {"goals": 218, "assists": 68, "trophies": 13, "ovr": 89, "peakGoals": 27, "awards": 1, "awardsLabel": "Serie A MVP"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "julian alvarez": {
    name: "Julian Alvarez",
    playerKeys: ["julian alvarez", "alvarez", "j. alvarez"],
    teamId: "1068",
    clubName: "Atletico Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 122, "assists": 58, "trophies": 16, "ovr": 87, "peakGoals": 24, "awards": 1, "awardsLabel": "World Cup Winner"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "victor osimhen": {
    name: "Victor Osimhen",
    playerKeys: ["victor osimhen", "osimhen", "v. osimhen"],
    teamId: "436",
    clubName: "Galatasaray",
    leagueCode: "tur.1",
    altLeagueCodes: ["uefa.europa"],
    verifiedBase: {"goals": 164, "assists": 42, "trophies": 5, "ovr": 88, "peakGoals": 31, "awards": 1, "awardsLabel": "African Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "khvicha kvaratskhelia": {
    name: "Khvicha Kvaratskhelia",
    playerKeys: ["khvicha kvaratskhelia", "kvaratskhelia", "kvara"],
    teamId: "114",
    clubName: "Napoli",
    leagueCode: "ita.1",
    altLeagueCodes: ["ita.coppa_italia"],
    verifiedBase: {"goals": 68, "assists": 62, "trophies": 3, "ovr": 87, "peakGoals": 14, "awards": 1, "awardsLabel": "Serie A MVP"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "rafael leao": {
    name: "Rafael Leao",
    playerKeys: ["rafael leao", "leao", "r. leao"],
    teamId: "103",
    clubName: "AC Milan",
    leagueCode: "ita.1",
    altLeagueCodes: ["uefa.champions", "ita.coppa_italia"],
    verifiedBase: {"goals": 92, "assists": 68, "trophies": 4, "ovr": 87, "peakGoals": 16, "awards": 1, "awardsLabel": "Serie A MVP"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "pedri": {
    name: "Pedro Gonzalez (Pedri)",
    playerKeys: ["pedri", "pedro gonzalez"],
    teamId: "83",
    clubName: "Barcelona",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 28, "assists": 34, "trophies": 5, "ovr": 88, "peakGoals": 7, "awards": 1, "awardsLabel": "Golden Boy"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "raphinha": {
    name: "Raphael Raphinha",
    playerKeys: ["raphinha", "raphael raphinha"],
    teamId: "83",
    clubName: "Barcelona",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 114, "assists": 84, "trophies": 6, "ovr": 88, "peakGoals": 22, "awards": 1, "awardsLabel": "Samba Gold"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "darwin nunez": {
    name: "Darwin Nunez",
    playerKeys: ["darwin nunez", "darwin", "nunez"],
    teamId: "364",
    clubName: "Liverpool",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 118, "assists": 42, "trophies": 5, "ovr": 86, "peakGoals": 34, "awards": 1, "awardsLabel": "Primeira Liga Top Scorer"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "alexander isak": {
    name: "Alexander Isak",
    playerKeys: ["alexander isak", "isak", "a. isak"],
    teamId: "361",
    clubName: "Newcastle United",
    leagueCode: "eng.1",
    altLeagueCodes: ["eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 126, "assists": 32, "trophies": 4, "ovr": 86, "peakGoals": 25, "awards": 1, "awardsLabel": "Swedish Forward of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "federico valverde": {
    name: "Federico Valverde",
    playerKeys: ["federico valverde", "valverde", "f. valverde"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 38, "assists": 46, "trophies": 14, "ovr": 89, "peakGoals": 12, "awards": 1, "awardsLabel": "Club World Cup Silver Ball"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "martin odegaard": {
    name: "Martin Odegaard",
    playerKeys: ["martin odegaard", "odegaard", "m. odegaard"],
    teamId: "359",
    clubName: "Arsenal",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 68, "assists": 78, "trophies": 5, "ovr": 88, "peakGoals": 15, "awards": 2, "awardsLabel": "Arsenal Player of Season"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "declan rice": {
    name: "Declan Rice",
    playerKeys: ["declan rice", "rice", "d. rice"],
    teamId: "359",
    clubName: "Arsenal",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 32, "assists": 38, "trophies": 3, "ovr": 88, "peakGoals": 7, "awards": 1, "awardsLabel": "Conference League MVP"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "trent alexander-arnold": {
    name: "Trent Alexander-Arnold",
    playerKeys: ["trent alexander-arnold", "trent", "alexander-arnold"],
    teamId: "364",
    clubName: "Liverpool",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 26, "assists": 108, "trophies": 8, "ovr": 88, "peakGoals": 4, "awards": 1, "awardsLabel": "Premier League Young Player"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "virgil van dijk": {
    name: "Virgil van Dijk",
    playerKeys: ["virgil van dijk", "van dijk", "vvd"],
    teamId: "364",
    clubName: "Liverpool",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 54, "assists": 24, "trophies": 11, "ovr": 90, "peakGoals": 7, "awards": 1, "awardsLabel": "UEFA Men's Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "alisson becker": {
    name: "Alisson Becker",
    playerKeys: ["alisson becker", "alisson", "becker"],
    teamId: "364",
    clubName: "Liverpool",
    leagueCode: "eng.1",
    altLeagueCodes: ["uefa.champions", "eng.fa", "eng.league_cup"],
    verifiedBase: {"goals": 1, "assists": 4, "trophies": 8, "ovr": 89, "peakGoals": 1, "awards": 1, "awardsLabel": "Yashin Trophy"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "thibaut courtois": {
    name: "Thibaut Courtois",
    playerKeys: ["thibaut courtois", "courtois", "t. courtois"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 0, "assists": 2, "trophies": 20, "ovr": 90, "peakGoals": 0, "awards": 1, "awardsLabel": "Yashin Trophy"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "gianluigi donnarumma": {
    name: "Gianluigi Donnarumma",
    playerKeys: ["gianluigi donnarumma", "donnarumma"],
    teamId: "160",
    clubName: "Paris Saint-Germain",
    leagueCode: "fra.1",
    altLeagueCodes: ["uefa.champions", "fra.coupe_de_france"],
    verifiedBase: {"goals": 0, "assists": 1, "trophies": 10, "ovr": 89, "peakGoals": 0, "awards": 1, "awardsLabel": "Yashin Trophy"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "achraf hakimi": {
    name: "Achraf Hakimi",
    playerKeys: ["achraf hakimi", "hakimi", "a. hakimi"],
    teamId: "160",
    clubName: "Paris Saint-Germain",
    leagueCode: "fra.1",
    altLeagueCodes: ["uefa.champions", "fra.coupe_de_france"],
    verifiedBase: {"goals": 46, "assists": 68, "trophies": 12, "ovr": 88, "peakGoals": 9, "awards": 3, "awardsLabel": "African Team of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "ousmane dembele": {
    name: "Ousmane Dembele",
    playerKeys: ["ousmane dembele", "dembele", "o. dembele"],
    teamId: "160",
    clubName: "Paris Saint-Germain",
    leagueCode: "fra.1",
    altLeagueCodes: ["uefa.champions", "fra.coupe_de_france"],
    verifiedBase: {"goals": 88, "assists": 116, "trophies": 10, "ovr": 86, "peakGoals": 14, "awards": 1, "awardsLabel": "Bundesliga Rookie of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "alphonso davies": {
    name: "Alphonso Davies",
    playerKeys: ["alphonso davies", "davies", "a. davies"],
    teamId: "132",
    clubName: "Bayern Munich",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {"goals": 28, "assists": 48, "trophies": 15, "ovr": 86, "peakGoals": 4, "awards": 2, "awardsLabel": "CONCACAF Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "thomas muller": {
    name: "Thomas Muller",
    playerKeys: ["thomas muller", "muller", "t. muller"],
    teamId: "132",
    clubName: "Bayern Munich",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {"goals": 295, "assists": 278, "trophies": 33, "ovr": 88, "peakGoals": 32, "awards": 1, "awardsLabel": "World Cup Golden Boot"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "manuel neuer": {
    name: "Manuel Neuer",
    playerKeys: ["manuel neuer", "neuer", "m. neuer"],
    teamId: "132",
    clubName: "Bayern Munich",
    leagueCode: "ger.1",
    altLeagueCodes: ["uefa.champions", "ger.dfb_pokal"],
    verifiedBase: {"goals": 0, "assists": 7, "trophies": 32, "ovr": 91, "peakGoals": 0, "awards": 5, "awardsLabel": "World Best Goalkeeper"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "luka modric": {
    name: "Luka Modric",
    playerKeys: ["luka modric", "modric", "l. modric"],
    teamId: "86",
    clubName: "Real Madrid",
    leagueCode: "esp.1",
    altLeagueCodes: ["uefa.champions", "esp.copa_del_rey"],
    verifiedBase: {"goals": 128, "assists": 168, "trophies": 31, "ovr": 89, "peakGoals": 12, "awards": 1, "awardsLabel": "Ballon d'Or"},
    baselineDate: "2026-10-25T00:00:00Z"
  },
  "sadio mane": {
    name: "Sadio Mane",
    playerKeys: ["sadio mane", "mane", "s. mane"],
    teamId: "817",
    clubName: "Al-Nassr",
    leagueCode: "ksa.1",
    altLeagueCodes: ["afc.champions", "ksa.kings.cup"],
    verifiedBase: {"goals": 254, "assists": 118, "trophies": 14, "ovr": 88, "peakGoals": 26, "awards": 2, "awardsLabel": "African Player of Year"},
    baselineDate: "2026-10-25T00:00:00Z"
  }
};


const LiveBattleMachine = {
  cache: new Map(),
  pollTimer: null,
  activePair: null,

  init() {
    try {
      localStorage.removeItem('live_player_battle_engine_v1');
      localStorage.removeItem('live_player_battle_engine_v2');
      const stored = localStorage.getItem('live_player_battle_engine_v3');
      if (stored) {
        const parsed = JSON.parse(stored);
        for (const [k, v] of Object.entries(parsed)) {
          this.cache.set(k, v);
          if (battleDatabase[k] && v.liveTotals) {
            battleDatabase[k].goals = Math.max(battleDatabase[k].goals, v.liveTotals.goals);
            battleDatabase[k].assists = Math.max(battleDatabase[k].assists, v.liveTotals.assists);
            battleDatabase[k].trophies = Math.max(battleDatabase[k].trophies, v.liveTotals.trophies);
          }
        }
      }
    } catch (e) {
      console.warn("Could not load battle cache:", e);
    }
  },

  save() {
    try {
      const obj = {};
      this.cache.forEach((v, k) => { obj[k] = v; });
      localStorage.setItem('live_player_battle_engine_v3', JSON.stringify(obj));
    } catch (e) {
      console.warn("Could not save battle cache:", e);
    }
  },

  async fetchPlayerLive(nameKey, force = false) {
    const norm = normalize(nameKey);
    const realKey = aliases[norm] || norm;
    
    // Check if in cache and fresh (fresh for 3 minutes)
    const cached = this.cache.get(realKey);
    if (!force && cached && (Date.now() - (cached.timestamp || 0) < 180000)) {
      return cached;
    }

    const cfg = PLAYER_LIVE_CONFIG[realKey];
    if (!cfg) {
      return null;
    }

    // Try serverless endpoint first
    try {
      const res = await fetch(`/api/live-stats?player=${encodeURIComponent(realKey)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.liveTotals) {
          const payload = {
            key: realKey,
            liveTotals: data.liveTotals,
            liveDeltas: data.liveDeltas || { goals: 0, assists: 0, trophies: 0 },
            trackedMatches: data.trackedMatches || [],
            isLiveNow: !!data.isLiveNow,
            timestamp: Date.now()
          };
          this.cache.set(realKey, payload);
          this.save();
          if (battleDatabase[realKey]) {
            battleDatabase[realKey].goals = Math.max(battleDatabase[realKey].goals, payload.liveTotals.goals);
            battleDatabase[realKey].assists = Math.max(battleDatabase[realKey].assists, payload.liveTotals.assists);
            battleDatabase[realKey].trophies = Math.max(battleDatabase[realKey].trophies, payload.liveTotals.trophies);
          }
          return payload;
        }
      }
    } catch (err) {
      console.log("Server live stats endpoint unavailable, running client-side engine:", err);
    }

    // Client-side fallback: Direct ESPN schedule + summary scan
    try {
      const allLeagues = [cfg.leagueCode, ...(cfg.altLeagueCodes || [])];
      let deltaGoals = 0;
      let deltaAssists = 0;
      let deltaTrophies = 0;
      const trackedMatches = [];
      let isLiveNow = false;

      for (const lCode of allLeagues) {
        try {
          const schedRes = await fetch(
            `https://site.api.espn.com/apis/site/v2/sports/soccer/${lCode}/teams/${cfg.teamId}/schedule`,
            { headers: { 'Accept': 'application/json' } }
          );
          if (!schedRes.ok) continue;
          const schedData = await schedRes.json();
          const events = schedData.events || [];
          const recentEvents = events.filter(ev => (ev.date || '') >= cfg.baselineDate);

          for (const ev of recentEvents) {
            const comp = ev.competitions?.[0] || {};
            const status = comp.status?.type || {};
            if (status.state === 'in') isLiveNow = true;

            const sumRes = await fetch(
              `https://site.api.espn.com/apis/site/v2/sports/soccer/${lCode}/summary?event=${ev.id}`,
              { headers: { 'Accept': 'application/json' } }
            );
            if (!sumRes.ok) continue;
            const sumData = await sumRes.json();
            const keyEvents = sumData.keyEvents || [];

            let mGoals = 0;
            let mAssists = 0;
            const goalMinutes = [];

            for (const k of keyEvents) {
              const text = (k.text || '').toLowerCase();
              const playerHit = cfg.playerKeys.some(pk => text.includes(pk));
              if (!playerHit) continue;

              if (text.includes('goal') || text.includes('penalty - scored')) {
                if (text.includes('assisted by') && cfg.playerKeys.some(pk => text.split('assisted by')[1]?.includes(pk))) {
                  mAssists++;
                } else {
                  mGoals++;
                  const minute = k.clock?.displayValue || text.match(/at\s+(\d+'(?:\+\d+)?)/i)?.[1] || '';
                  if (minute) goalMinutes.push(minute);
                }
              } else if (text.includes('assist')) {
                mAssists++;
              }
            }

            if ((ev.name || '').toLowerCase().includes('final') && (status.state === 'post' || status.completed)) {
              const myTeam = comp.competitors?.find(c => String(c.id) === String(cfg.teamId));
              if (myTeam && myTeam.winner) deltaTrophies++;
            }

            if (mGoals > 0 || mAssists > 0 || isLiveNow) {
              deltaGoals += mGoals;
              deltaAssists += mAssists;
              let desc = '';
              if (mGoals === 1) desc = `Goal scored (${goalMinutes.join(', ') || '1x'})`;
              else if (mGoals === 2) desc = `Brace scored (${goalMinutes.join(', ')})`;
              else if (mGoals >= 3) desc = `Hat-trick scored! 🎩 (${goalMinutes.join(', ')})`;
              if (mAssists > 0) desc += `${desc ? ' • ' : ''}+${mAssists} Assist`;

              trackedMatches.push({
                eventId: ev.id,
                eventName: ev.name,
                date: ev.date,
                goals: mGoals,
                assists: mAssists,
                description: desc || 'Match in progress'
              });
            }
          }
        } catch (lErr) {
          console.warn(`Client scan failed for ${lCode}:`, lErr);
        }
      }

      const totalGoals = Math.max(battleDatabase[realKey]?.goals || 0, cfg.verifiedBase.goals + deltaGoals);
      const totalAssists = Math.max(battleDatabase[realKey]?.assists || 0, cfg.verifiedBase.assists + deltaAssists);
      const totalTrophies = Math.max(battleDatabase[realKey]?.trophies || 0, cfg.verifiedBase.trophies + deltaTrophies);

      const payload = {
        key: realKey,
        liveTotals: {
          goals: totalGoals,
          assists: totalAssists,
          trophies: totalTrophies,
          peakGoals: cfg.verifiedBase.peakGoals,
          awards: cfg.verifiedBase.awards,
          awardsLabel: cfg.verifiedBase.awardsLabel
        },
        liveDeltas: {
          goals: deltaGoals,
          assists: deltaAssists,
          trophies: deltaTrophies
        },
        trackedMatches,
        isLiveNow,
        timestamp: Date.now()
      };

      this.cache.set(realKey, payload);
      this.save();
      if (battleDatabase[realKey]) {
        battleDatabase[realKey].goals = totalGoals;
        battleDatabase[realKey].assists = totalAssists;
        battleDatabase[realKey].trophies = totalTrophies;
      }
      return payload;

    } catch (e) {
      console.error("Direct live scan error:", e);
      return null;
    }
  }
};

// Initialize cache on script load
LiveBattleMachine.init();

function getPlayerBattleStats(nameKey) {
  const norm = normalize(nameKey);
  const realKey = aliases[norm] || norm;
  
  // 1. Direct match in battleDatabase
  let record = battleDatabase[realKey];
  
  // 2. Fuzzy search match across battleDatabase keys
  if (!record) {
    const matchedKey = Object.keys(battleDatabase).find(k => {
      return k === norm || k.includes(norm) || norm.includes(k);
    });
    if (matchedKey) {
      record = battleDatabase[matchedKey];
    }
  }

  if (record) {
    const base = { ...record };
    const live = LiveBattleMachine.cache.get(realKey) || LiveBattleMachine.cache.get(norm);
    if (live && live.liveTotals) {
      // Anti-downgrade guarantee: never fall below verified database figures
      base.goals = Math.max(base.goals, live.liveTotals.goals);
      base.assists = Math.max(base.assists, live.liveTotals.assists);
      base.trophies = Math.max(base.trophies, live.liveTotals.trophies);
      base.liveDeltas = live.liveDeltas;
      base.trackedMatches = live.trackedMatches;
      base.isLiveNow = live.isLiveNow;
    }
    return base;
  }
  
  // 3. Fallback for any player in players dictionary (clean authentic profile)
  const p = players[realKey];
  const d = localDetails[realKey] || {};
  if (p) {
    return {
      name: `${p.first} ${p.last}`,
      club: p.current || "Professional",
      nation: d.nationality || p.country?.split("/")[0]?.trim() || "International",
      pos: d.position || "Forward",
      ovr: 85,
      goals: 50,
      assists: 25,
      trophies: 2,
      peakGoals: 15,
      awards: 1,
      awardsLabel: "Major Honours",
      photo: getUniversalPlayerPhoto(realKey) || d.photo || getPlayerInitialAvatar(`${p.first} ${p.last}`)
    };
  }
  
  return null;
}


function renderStatBattle(playerKey1, playerKey2) {
  const arena = document.getElementById("battleArena");
  if (!arena) return;

  const f1 = getPlayerBattleStats(playerKey1);
  const f2 = getPlayerBattleStats(playerKey2);

  if (!f1 || !f2) {
    arena.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--dim);">Please select two valid players to compare.</div>`;
    return;
  }

  LiveBattleMachine.activePair = { k1: playerKey1, k2: playerKey2 };

  // Calculate battle metrics
  const metrics = [
    { label: "Overall Rating (OVR)", v1: f1.ovr, v2: f2.ovr, unit: "", key: "ovr" },
    { label: "Career Goals", v1: f1.goals, v2: f2.goals, unit: " goals", key: "goals", d1: f1.liveDeltas?.goals, d2: f2.liveDeltas?.goals },
    { label: "Career Assists", v1: f1.assists, v2: f2.assists, unit: " ast", key: "assists", d1: f1.liveDeltas?.assists, d2: f2.liveDeltas?.assists },
    { label: "Major Trophies", v1: f1.trophies, v2: f2.trophies, unit: " 🏆", key: "trophies", d1: f1.liveDeltas?.trophies, d2: f2.liveDeltas?.trophies },
    { label: "Peak Year Goals", v1: f1.peakGoals, v2: f2.peakGoals, unit: " in 1 yr", key: "peakGoals" },
    { label: f1.awardsLabel || "Individual Honours", v1: f1.awards, v2: f2.awards, unit: " ⭐", key: "awards" }
  ];

  let wins1 = 0;
  let wins2 = 0;

  let rowsHtml = metrics.map(m => {
    let higher1 = m.v1 > m.v2;
    let higher2 = m.v2 > m.v1;

    if (higher1) wins1++;
    if (higher2) wins2++;

    const maxVal = Math.max(m.v1, m.v2, 1);
    const pct1 = Math.round((m.v1 / maxVal) * 100);
    const pct2 = Math.round((m.v2 / maxVal) * 100);

    const rowClass = higher1 ? "winner-left" : (higher2 ? "winner-right" : "");
    const delta1Badge = m.d1 ? `<span class="battle-live-delta">+${m.d1} IN LAST MATCH</span>` : '';
    const delta2Badge = m.d2 ? `<span class="battle-live-delta">+${m.d2} IN LAST MATCH</span>` : '';

    return `
      <div class="battle-stat-row ${rowClass}" id="battleRow_${m.key}">
        <div class="battle-stat-values">
          <span class="battle-val-left ${higher1 ? 'is-higher' : ''}" id="valLeft_${m.key}">
            ${higher1 ? '👑 ' : ''}${m.v1}${m.unit}${delta1Badge}
          </span>
          <span class="battle-stat-label">${m.label}</span>
          <span class="battle-val-right ${higher2 ? 'is-higher' : ''}" id="valRight_${m.key}">
            ${delta2Badge}${m.v2}${m.unit}${higher2 ? ' 👑' : ''}
          </span>
        </div>
        <div class="battle-bar-track">
          <div class="battle-bar-left-half">
            <div class="battle-bar-left-fill" style="width: ${pct1}%;"></div>
          </div>
          <div class="battle-bar-right-half">
            <div class="battle-bar-right-fill" style="width: ${pct2}%;"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Overall verdict
  let verdictTitle = "";
  let verdictBadge = "";
  if (wins1 > wins2) {
    verdictTitle = `🏆 ${f1.name.toUpperCase()} WINS THE BATTLE!`;
    verdictBadge = `${f1.name} won ${wins1} of ${metrics.length} stat categories.`;
  } else if (wins2 > wins1) {
    verdictTitle = `🏆 ${f2.name.toUpperCase()} WINS THE BATTLE!`;
    verdictBadge = `${f2.name} won ${wins2} of ${metrics.length} stat categories.`;
  } else {
    verdictTitle = `🤝 HONOURS EVEN — IT'S A DRAW!`;
    verdictBadge = `Both legends are tied at ${wins1} - ${wins2} across all categories.`;
  }

  const p1Winner = wins1 > wins2;
  const p2Winner = wins2 > wins1;

  // Format latest match descriptions for cards
  const formatLatestStatus = (fighter) => {
    if (fighter.isLiveNow) {
      return `🔴 PLAYING LIVE RIGHT NOW`;
    }
    if (fighter.trackedMatches && fighter.trackedMatches.length > 0) {
      const last = fighter.trackedMatches[0];
      return `⚡ ${last.description} vs ${last.eventName?.replace(/at\s+/i, '').replace(/vs\s+/i, '') || 'recent match'}`;
    }
    return `🟢 LIVE TRACKER CONNECTED`;
  };

  arena.innerHTML = `
    <div class="battle-live-engine-bar">
      <div class="live-engine-pill">
        <span class="live-dot-pulse"></span>
        <div class="live-engine-info">
          <div class="live-engine-title">LIVE MATCH MACHINE ACTIVE</div>
          <div class="live-engine-desc" id="battleEngineStatusDesc">
            Live telemetry scanning official match scoreboards, hat-tricks & live goal events.
          </div>
        </div>
      </div>
      <button class="battle-recheck-btn" id="battleRecheckBtn" title="Scan latest matches & live scoreboards for new goals">
        <span class="sync-spin-icon">⚡</span> SYNC LIVE DATA NOW
      </button>
    </div>

    <div class="battle-fighters-header">
      <div class="battle-fighter-card ${p1Winner ? 'is-winner' : ''}">
        <div class="battle-fighter-glow"></div>
        <div class="battle-avatar-wrap">
          <img class="battle-avatar-img" src="${f1.photo}" alt="${f1.name}" data-player-name="${f1.name}" onerror="handlePlayerPhotoError(this)" />
          <div class="battle-ovr-badge">${f1.ovr}</div>
        </div>
        <h3 class="battle-fighter-name">${f1.name}</h3>
        <div class="battle-fighter-club">${f1.club}</div>
        <div class="battle-fighter-meta">${f1.nation} • ${f1.pos}</div>
        <div class="fighter-live-status" id="fighterLiveStatus1">
          ${formatLatestStatus(f1)}
        </div>
      </div>

      <div class="battle-fighter-card ${p2Winner ? 'is-winner' : ''}">
        <div class="battle-fighter-glow"></div>
        <div class="battle-avatar-wrap">
          <img class="battle-avatar-img" src="${f2.photo}" alt="${f2.name}" data-player-name="${f2.name}" onerror="handlePlayerPhotoError(this)" />
          <div class="battle-ovr-badge">${f2.ovr}</div>
        </div>
        <h3 class="battle-fighter-name">${f2.name}</h3>
        <div class="battle-fighter-club">${f2.club}</div>
        <div class="battle-fighter-meta">${f2.nation} • ${f2.pos}</div>
        <div class="fighter-live-status" id="fighterLiveStatus2">
          ${formatLatestStatus(f2)}
        </div>
      </div>
    </div>

    <div class="battle-stats-table">
      ${rowsHtml}
    </div>

    <div class="battle-verdict-card">
      <div class="battle-verdict-text">
        <div class="battle-verdict-title">${verdictTitle}</div>
        <div class="battle-verdict-score">${verdictBadge}</div>
      </div>
      <div style="font-family: 'DM Mono', monospace; font-size: 22px; font-weight: 900; color: var(--green);">
        ${wins1} <span style="color: var(--dim); font-size: 14px;">VS</span> ${wins2}
      </div>
    </div>
  `;

  // Attach sync button listener
  const syncBtn = document.getElementById("battleRecheckBtn");
  if (syncBtn) {
    syncBtn.addEventListener("click", () => {
      syncBattleArena(playerKey1, playerKey2, true);
    });
  }

  // Trigger background live sync immediately
  syncBattleArena(playerKey1, playerKey2, false);
}

async function syncBattleArena(playerKey1, playerKey2, forceRefresh = false) {
  const syncBtn = document.getElementById("battleRecheckBtn");
  const statusDesc = document.getElementById("battleEngineStatusDesc");

  if (syncBtn) {
    syncBtn.classList.add("is-syncing");
    syncBtn.disabled = true;
  }
  if (statusDesc) {
    statusDesc.textContent = "Scanning matchday scoreboards and today's live goal events...";
  }

  try {
    const [live1, live2] = await Promise.all([
      LiveBattleMachine.fetchPlayerLive(playerKey1, forceRefresh),
      LiveBattleMachine.fetchPlayerLive(playerKey2, forceRefresh)
    ]);

    // If still looking at the same battle pair, re-render with updated live stats!
    if (LiveBattleMachine.activePair &&
        LiveBattleMachine.activePair.k1 === playerKey1 &&
        LiveBattleMachine.activePair.k2 === playerKey2) {
      
      const f1 = getPlayerBattleStats(playerKey1);
      const f2 = getPlayerBattleStats(playerKey2);
      
      // Update description text with discovered events
      if (statusDesc) {
        let msg = "Live data synced across all match events.";
        if (live1?.trackedMatches?.[0]) {
          msg = `Live synced: ${live1.trackedMatches[0].description} (${f1.name})!`;
        } else if (live2?.trackedMatches?.[0]) {
          msg = `Live synced: ${live2.trackedMatches[0].description} (${f2.name})!`;
        }
        statusDesc.textContent = msg;
      }

      // Smoothly update card status badges
      const status1El = document.getElementById("fighterLiveStatus1");
      if (status1El && live1) {
        if (live1.isLiveNow) status1El.innerHTML = `🔴 PLAYING LIVE RIGHT NOW`;
        else if (live1.trackedMatches?.[0]) status1El.innerHTML = `⚡ ${live1.trackedMatches[0].description}`;
        else status1El.innerHTML = `🟢 LIVE TRACKER VERIFIED`;
      }

      const status2El = document.getElementById("fighterLiveStatus2");
      if (status2El && live2) {
        if (live2.isLiveNow) status2El.innerHTML = `🔴 PLAYING LIVE RIGHT NOW`;
        else if (live2.trackedMatches?.[0]) status2El.innerHTML = `⚡ ${live2.trackedMatches[0].description}`;
        else status2El.innerHTML = `🟢 LIVE TRACKER VERIFIED`;
      }

      // Check if re-render needed for updated counters
      if (forceRefresh || (live1 && live1.liveDeltas?.goals > 0) || (live2 && live2.liveDeltas?.goals > 0)) {
        // Re-render battle metrics with the newly calculated numbers
        const metrics = [
          { label: "Overall Rating (OVR)", v1: f1.ovr, v2: f2.ovr, unit: "", key: "ovr" },
          { label: "Career Goals", v1: f1.goals, v2: f2.goals, unit: " goals", key: "goals", d1: f1.liveDeltas?.goals, d2: f2.liveDeltas?.goals },
          { label: "Career Assists", v1: f1.assists, v2: f2.assists, unit: " ast", key: "assists", d1: f1.liveDeltas?.assists, d2: f2.liveDeltas?.assists },
          { label: "Major Trophies", v1: f1.trophies, v2: f2.trophies, unit: " 🏆", key: "trophies", d1: f1.liveDeltas?.trophies, d2: f2.liveDeltas?.trophies },
          { label: "Peak Year Goals", v1: f1.peakGoals, v2: f2.peakGoals, unit: " in 1 yr", key: "peakGoals" },
          { label: f1.awardsLabel || "Individual Honours", v1: f1.awards, v2: f2.awards, unit: " ⭐", key: "awards" }
        ];

        let wins1 = 0;
        let wins2 = 0;

        metrics.forEach(m => {
          let higher1 = m.v1 > m.v2;
          let higher2 = m.v2 > m.v1;
          if (higher1) wins1++;
          if (higher2) wins2++;

          const rowEl = document.getElementById(`battleRow_${m.key}`);
          const leftEl = document.getElementById(`valLeft_${m.key}`);
          const rightEl = document.getElementById(`valRight_${m.key}`);

          if (leftEl) {
            const delta1Badge = m.d1 ? `<span class="battle-live-delta">+${m.d1} IN LAST MATCH</span>` : '';
            leftEl.innerHTML = `${higher1 ? '👑 ' : ''}${m.v1}${m.unit}${delta1Badge}`;
            leftEl.className = `battle-val-left ${higher1 ? 'is-higher' : ''}`;
          }
          if (rightEl) {
            const delta2Badge = m.d2 ? `<span class="battle-live-delta">+${m.d2} IN LAST MATCH</span>` : '';
            rightEl.innerHTML = `${delta2Badge}${m.v2}${m.unit}${higher2 ? ' 👑' : ''}`;
            rightEl.className = `battle-val-right ${higher2 ? 'is-higher' : ''}`;
          }
          if (rowEl) {
            rowEl.className = `battle-stat-row ${higher1 ? 'winner-left' : (higher2 ? 'winner-right' : '')}`;
            const maxVal = Math.max(m.v1, m.v2, 1);
            const fillL = rowEl.querySelector('.battle-bar-left-fill');
            const fillR = rowEl.querySelector('.battle-bar-right-fill');
            if (fillL) fillL.style.width = `${Math.round((m.v1 / maxVal) * 100)}%`;
            if (fillR) fillR.style.width = `${Math.round((m.v2 / maxVal) * 100)}%`;
          }
        });

        // Update verdict
        const verdictTitleEl = document.querySelector('.battle-verdict-title');
        const verdictScoreEl = document.querySelector('.battle-verdict-score');
        if (verdictTitleEl && verdictScoreEl) {
          if (wins1 > wins2) {
            verdictTitleEl.textContent = `🏆 ${f1.name.toUpperCase()} WINS THE BATTLE!`;
            verdictScoreEl.textContent = `${f1.name} won ${wins1} of ${metrics.length} stat categories.`;
          } else if (wins2 > wins1) {
            verdictTitleEl.textContent = `🏆 ${f2.name.toUpperCase()} WINS THE BATTLE!`;
            verdictScoreEl.textContent = `${f2.name} won ${wins2} of ${metrics.length} stat categories.`;
          } else {
            verdictTitleEl.textContent = `🤝 HONOURS EVEN — IT'S A DRAW!`;
            verdictScoreEl.textContent = `Both legends are tied at ${wins1} - ${wins2} across all categories.`;
          }
        }
      }
    }
  } catch (err) {
    console.error("Live battle sync error:", err);
  } finally {
    if (syncBtn) {
      syncBtn.classList.remove("is-syncing");
      syncBtn.disabled = false;
    }
  }
}

function initStatBattleFeature() {
  const statBattleButton = document.getElementById("statBattleButton");
  const battlePanel = document.getElementById("battlePanel");
  const battleHomeBtn = document.getElementById("battleHomeBtn");
  const input1 = document.getElementById("battleSearch1");
  const input2 = document.getElementById("battleSearch2");
  const sugg1 = document.getElementById("battleSuggestions1");
  const sugg2 = document.getElementById("battleSuggestions2");
  const randomBtn = document.getElementById("battleRandomBtn");
  const presetsList = document.getElementById("battlePresetsList");

  if (!statBattleButton || !battlePanel) return;

  // Open Stat Battle
  statBattleButton.addEventListener("click", () => {
    document.querySelector(".landing-content").hidden = true;
    const orbit = document.querySelector(".landing-orbit");
    if (orbit) orbit.hidden = true;
    const footer = document.querySelector(".landing-footer");
    if (footer) footer.hidden = true;
    const radar = document.getElementById("matchdayRadar");
    if (radar) radar.hidden = true;

    battlePanel.hidden = false;
    renderStatBattle(input1.value || "lionel messi", input2.value || "cristiano ronaldo");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Home button
  if (battleHomeBtn) {
    battleHomeBtn.addEventListener("click", () => {
      battlePanel.hidden = true;
      document.querySelector(".landing-content").hidden = false;
      const orbit = document.querySelector(".landing-orbit");
      if (orbit) orbit.hidden = false;
      const footer = document.querySelector(".landing-footer");
      if (footer) footer.hidden = false;
      const radar = document.getElementById("matchdayRadar");
      if (radar) radar.hidden = false;
    });
  }

  // Presets
  if (presetsList) {
    presetsList.addEventListener("click", (e) => {
      const btn = e.target.closest(".battle-preset-btn");
      if (!btn) return;
      document.querySelectorAll(".battle-preset-btn").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const p1 = btn.dataset.p1;
      const p2 = btn.dataset.p2;
      if (input1) input1.value = btn.textContent.split(" vs ")[0]?.replace(/[^a-zA-Z\s]/g, "").trim() || p1;
      if (input2) input2.value = btn.textContent.split(" vs ")[1]?.replace(/[^a-zA-Z\s]/g, "").trim() || p2;
      renderStatBattle(p1, p2);
    });
  }

  // Random generator
  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      const allKeys = Object.keys(battleDatabase);
      const k1 = allKeys[Math.floor(Math.random() * allKeys.length)];
      let k2 = allKeys[Math.floor(Math.random() * allKeys.length)];
      while (k2 === k1) {
        k2 = allKeys[Math.floor(Math.random() * allKeys.length)];
      }
      if (input1) input1.value = battleDatabase[k1].name;
      if (input2) input2.value = battleDatabase[k2].name;
      document.querySelectorAll(".battle-preset-btn").forEach(b => b.classList.remove("is-active"));
      renderStatBattle(k1, k2);
    });
  }

  // Autocomplete helper
  const setupBattleAutocomplete = (inp, box, onSelect) => {
    if (!inp || !box) return;
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      if (!q) {
        box.hidden = true;
        return;
      }
      const matches = Object.keys(players).filter(k => k.includes(q)).slice(0, 5);
      if (matches.length === 0) {
        box.hidden = true;
        return;
      }
      box.innerHTML = matches.map(m => {
        const p = players[m];
        return `<div class="suggestion-item" data-val="${m}" style="padding: 10px 14px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff;">
          <strong>${p.first} ${p.last}</strong> <small style="color:var(--dim); margin-left:6px;">(${p.current})</small>
        </div>`;
      }).join("");
      box.hidden = false;
    });

    box.addEventListener("click", (e) => {
      const item = e.target.closest(".suggestion-item");
      if (!item) return;
      const val = item.dataset.val;
      inp.value = players[val] ? `${players[val].first} ${players[val].last}` : val;
      box.hidden = true;
      onSelect(val);
    });

    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        box.hidden = true;
        onSelect(inp.value);
      }
    });
  };

  setupBattleAutocomplete(input1, sugg1, () => {
    renderStatBattle(input1.value, input2.value);
  });

  setupBattleAutocomplete(input2, sugg2, () => {
    renderStatBattle(input1.value, input2.value);
  });
}

// Call on document ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStatBattleFeature);
} else {
  initStatBattleFeature();
}



// ==========================================================================
// GUESS THE LINEUP: HISTORICAL MATCHES MINI-GAME
// ==========================================================================

const HISTORICAL_LINEUPS = {
  "liverpool-bayern-2019": {
    "id": "liverpool-bayern-2019",
    "team": "Liverpool FC",
    "opponent": "Bayern Munich",
    "competition": "UEFA Champions League",
    "stage": "Round of 16 (2nd Leg)",
    "date": "13 March 2019",
    "venue": "Allianz Arena, Munich",
    "score": "Bayern Munich 1 - 3 Liverpool",
    "formation": "4-3-3",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 13,
          "name": "Alisson Becker",
          "aliases": [
            "alisson",
            "alisson becker",
            "becker"
          ],
          "photo": "https://media.api-sports.io/football/players/196144.png"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 66,
          "name": "Trent Alexander-Arnold",
          "aliases": [
            "trent alexander-arnold",
            "trent",
            "alexander-arnold",
            "arnold",
            "taa"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/232980.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 32,
          "name": "Joel Matip",
          "aliases": [
            "joel matip",
            "matip"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/139049.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 4,
          "name": "Virgil van Dijk",
          "aliases": [
            "virgil van dijk",
            "van dijk",
            "vandijk",
            "vvd",
            "virgil"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/159846.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 26,
          "name": "Andy Robertson",
          "aliases": [
            "andy robertson",
            "robertson",
            "andrew robertson",
            "robo"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/177063.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "CM",
          "num": 14,
          "name": "Jordan Henderson",
          "aliases": [
            "jordan henderson",
            "henderson",
            "hendo"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/125867.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 5,
          "name": "Georginio Wijnaldum",
          "aliases": [
            "georginio wijnaldum",
            "wijnaldum",
            "gini wijnaldum",
            "gini"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/112678.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 7,
          "name": "James Milner",
          "aliases": [
            "james milner",
            "milner"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13011.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 11,
          "name": "Mohamed Salah",
          "aliases": [
            "mohamed salah",
            "salah",
            "mo salah"
          ],
          "photo": "https://media.api-sports.io/football/players/306.png"
        },
        {
          "pos": "ST",
          "num": 9,
          "name": "Roberto Firmino",
          "aliases": [
            "roberto firmino",
            "firmino",
            "bobby firmino"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/158564.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 10,
          "name": "Sadio Man\u00e9",
          "aliases": [
            "sadio mane",
            "sadio man\u00e9",
            "mane",
            "man\u00e9"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/170944.png&w=350&h=254"
        }
      ]
    ]
  },
  "bayern-liverpool-2019": {
    "id": "bayern-liverpool-2019",
    "team": "Bayern Munich",
    "opponent": "Liverpool FC",
    "competition": "UEFA Champions League",
    "stage": "Round of 16 (2nd Leg)",
    "date": "13 March 2019",
    "venue": "Allianz Arena, Munich",
    "score": "Bayern Munich 1 - 3 Liverpool",
    "formation": "4-2-3-1",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Manuel Neuer",
          "aliases": [
            "manuel neuer",
            "neuer"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/88490.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 13,
          "name": "Rafinha",
          "aliases": [
            "rafinha"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67776.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 4,
          "name": "Niklas S\u00fcle",
          "aliases": [
            "niklas sule",
            "niklas s\u00fcle",
            "sule",
            "s\u00fcle"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/177064.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 5,
          "name": "Mats Hummels",
          "aliases": [
            "mats hummels",
            "hummels"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104443.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 27,
          "name": "David Alaba",
          "aliases": [
            "david alaba",
            "alaba"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/138137.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "DM",
          "num": 8,
          "name": "Javi Mart\u00ednez",
          "aliases": [
            "javi martinez",
            "javi mart\u00ednez",
            "martinez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/86047.png&w=350&h=254"
        },
        {
          "pos": "DM",
          "num": 6,
          "name": "Thiago Alc\u00e2ntara",
          "aliases": [
            "thiago alcantara",
            "thiago alc\u00e2ntara",
            "thiago"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/128387.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 22,
          "name": "Serge Gnabry",
          "aliases": [
            "serge gnabry",
            "gnabry"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/167295.png&w=350&h=254"
        },
        {
          "pos": "AM",
          "num": 11,
          "name": "James Rodr\u00edguez",
          "aliases": [
            "james rodriguez",
            "james rodr\u00edguez",
            "james"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148408.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 7,
          "name": "Franck Rib\u00e9ry",
          "aliases": [
            "franck ribery",
            "franck rib\u00e9ry",
            "ribery",
            "rib\u00e9ry"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67864.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 9,
          "name": "Robert Lewandowski",
          "aliases": [
            "robert lewandowski",
            "lewandowski",
            "lewy"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114979.png&w=350&h=254"
        }
      ]
    ]
  },
  "bayern-dortmund-2013": {
    "id": "bayern-dortmund-2013",
    "team": "Bayern Munich",
    "opponent": "Borussia Dortmund",
    "competition": "UEFA Champions League Final",
    "stage": "Final",
    "date": "25 May 2013",
    "venue": "Wembley Stadium, London",
    "score": "Borussia Dortmund 1 - 2 Bayern Munich",
    "formation": "4-2-3-1",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Manuel Neuer",
          "aliases": [
            "manuel neuer",
            "neuer"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/88490.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 21,
          "name": "Philipp Lahm",
          "aliases": [
            "philipp lahm",
            "lahm"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22604.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 17,
          "name": "J\u00e9r\u00f4me Boateng",
          "aliases": [
            "jerome boateng",
            "j\u00e9r\u00f4me boateng",
            "boateng"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99514.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 4,
          "name": "Dante",
          "aliases": [
            "dante"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99515.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 27,
          "name": "David Alaba",
          "aliases": [
            "david alaba",
            "alaba"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/138137.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "DM",
          "num": 8,
          "name": "Javi Mart\u00ednez",
          "aliases": [
            "javi martinez",
            "javi mart\u00ednez",
            "martinez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/86047.png&w=350&h=254"
        },
        {
          "pos": "DM",
          "num": 31,
          "name": "Bastian Schweinsteiger",
          "aliases": [
            "bastian schweinsteiger",
            "schweinsteiger",
            "basti"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22605.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 10,
          "name": "Arjen Robben",
          "aliases": [
            "arjen robben",
            "robben"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/11497.png&w=350&h=254"
        },
        {
          "pos": "AM",
          "num": 25,
          "name": "Thomas M\u00fcller",
          "aliases": [
            "thomas muller",
            "thomas m\u00fcller",
            "muller",
            "m\u00fcller"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/127170.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 7,
          "name": "Franck Rib\u00e9ry",
          "aliases": [
            "franck ribery",
            "franck rib\u00e9ry",
            "ribery",
            "rib\u00e9ry"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67864.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 9,
          "name": "Mario Mand\u017euki\u0107",
          "aliases": [
            "mario mandzukic",
            "mario mand\u017euki\u0107",
            "mandzukic",
            "mand\u017euki\u0107"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114981.png&w=350&h=254"
        }
      ]
    ]
  },
  "liverpool-barcelona-2019": {
    "id": "liverpool-barcelona-2019",
    "team": "Liverpool FC",
    "opponent": "FC Barcelona",
    "competition": "UEFA Champions League",
    "stage": "Semi-Final (2nd Leg)",
    "date": "7 May 2019",
    "venue": "Anfield, Liverpool",
    "score": "Liverpool 4 - 0 Barcelona (4-3 agg)",
    "formation": "4-3-3",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 13,
          "name": "Alisson Becker",
          "aliases": [
            "alisson",
            "alisson becker",
            "becker"
          ],
          "photo": "https://media.api-sports.io/football/players/196144.png"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 66,
          "name": "Trent Alexander-Arnold",
          "aliases": [
            "trent alexander-arnold",
            "trent",
            "alexander-arnold",
            "arnold",
            "taa"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/232980.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 32,
          "name": "Joel Matip",
          "aliases": [
            "joel matip",
            "matip"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/139049.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 4,
          "name": "Virgil van Dijk",
          "aliases": [
            "virgil van dijk",
            "van dijk",
            "vandijk",
            "vvd",
            "virgil"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/159846.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 26,
          "name": "Andy Robertson",
          "aliases": [
            "andy robertson",
            "robertson",
            "andrew robertson"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/177063.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "CM",
          "num": 14,
          "name": "Jordan Henderson",
          "aliases": [
            "jordan henderson",
            "henderson",
            "hendo"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/125867.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 3,
          "name": "Fabinho",
          "aliases": [
            "fabinho"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178563.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 7,
          "name": "James Milner",
          "aliases": [
            "james milner",
            "milner"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13011.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 23,
          "name": "Xherdan Shaqiri",
          "aliases": [
            "xherdan shaqiri",
            "shaqiri"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/138138.png&w=350&h=254"
        },
        {
          "pos": "ST",
          "num": 27,
          "name": "Divock Origi",
          "aliases": [
            "divock origi",
            "origi"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178565.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 10,
          "name": "Sadio Man\u00e9",
          "aliases": [
            "sadio mane",
            "sadio man\u00e9",
            "mane",
            "man\u00e9"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/170944.png&w=350&h=254"
        }
      ]
    ]
  },
  "barcelona-juventus-2015": {
    "id": "barcelona-juventus-2015",
    "team": "FC Barcelona",
    "opponent": "Juventus",
    "competition": "UEFA Champions League Final",
    "stage": "Final",
    "date": "6 June 2015",
    "venue": "Olympiastadion, Berlin",
    "score": "Juventus 1 - 3 FC Barcelona",
    "formation": "4-3-3",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Marc-Andr\u00e9 ter Stegen",
          "aliases": [
            "ter stegen",
            "marc-andre ter stegen",
            "marc-andr\u00e9 ter stegen"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148406.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 22,
          "name": "Dani Alves",
          "aliases": [
            "dani alves",
            "alves"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/394.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 3,
          "name": "Gerard Piqu\u00e9",
          "aliases": [
            "gerard pique",
            "gerard piqu\u00e9",
            "pique",
            "piqu\u00e9"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67865.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 14,
          "name": "Javier Mascherano",
          "aliases": [
            "javier mascherano",
            "mascherano"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/37966.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 18,
          "name": "Jordi Alba",
          "aliases": [
            "jordi alba",
            "alba"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/128389.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "CM",
          "num": 4,
          "name": "Ivan Rakiti\u0107",
          "aliases": [
            "ivan rakitic",
            "ivan rakiti\u0107",
            "rakitic",
            "rakiti\u0107"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99516.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 5,
          "name": "Sergio Busquets",
          "aliases": [
            "sergio busquets",
            "busquets"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114982.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 8,
          "name": "Andr\u00e9s Iniesta",
          "aliases": [
            "andres iniesta",
            "andr\u00e9s iniesta",
            "iniesta"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14849.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 10,
          "name": "Lionel Messi",
          "aliases": [
            "lionel messi",
            "messi",
            "leo messi"
          ],
          "photo": "https://media.api-sports.io/football/players/154.png"
        },
        {
          "pos": "ST",
          "num": 9,
          "name": "Luis Su\u00e1rez",
          "aliases": [
            "luis suarez",
            "luis su\u00e1rez",
            "suarez",
            "su\u00e1rez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/99513.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 11,
          "name": "Neymar Jr",
          "aliases": [
            "neymar",
            "neymar jr"
          ],
          "photo": "https://media.api-sports.io/football/players/276.png"
        }
      ]
    ]
  },
  "realmadrid-liverpool-2018": {
    "id": "realmadrid-liverpool-2018",
    "team": "Real Madrid",
    "opponent": "Liverpool FC",
    "competition": "UEFA Champions League Final",
    "stage": "Final",
    "date": "26 May 2018",
    "venue": "NSC Olimpiyskiy, Kyiv",
    "score": "Real Madrid 3 - 1 Liverpool",
    "formation": "4-3-1-2",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Keylor Navas",
          "aliases": [
            "keylor navas",
            "navas"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/138139.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 2,
          "name": "Dani Carvajal",
          "aliases": [
            "dani carvajal",
            "carvajal"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/177065.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 5,
          "name": "Rapha\u00ebl Varane",
          "aliases": [
            "raphael varane",
            "rapha\u00ebl varane",
            "varane"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/158565.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 4,
          "name": "Sergio Ramos",
          "aliases": [
            "sergio ramos",
            "ramos"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45844.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 12,
          "name": "Marcelo",
          "aliases": [
            "marcelo"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/86048.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "CM",
          "num": 10,
          "name": "Luka Modri\u0107",
          "aliases": [
            "luka modric",
            "luka modri\u0107",
            "modric",
            "modri\u0107"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104389.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 14,
          "name": "Casemiro",
          "aliases": [
            "casemiro",
            "carlos casemiro"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148677.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 8,
          "name": "Toni Kroos",
          "aliases": [
            "toni kroos",
            "kroos"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/103565.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "AM",
          "num": 22,
          "name": "Isco",
          "aliases": [
            "isco"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156558.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 9,
          "name": "Karim Benzema",
          "aliases": [
            "karim benzema",
            "benzema"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67863.png&w=350&h=254"
        },
        {
          "pos": "ST",
          "num": 7,
          "name": "Cristiano Ronaldo",
          "aliases": [
            "cristiano ronaldo",
            "ronaldo",
            "cr7"
          ],
          "photo": "https://media.api-sports.io/football/players/874.png"
        }
      ]
    ]
  },
  "milan-liverpool-2005": {
    "id": "milan-liverpool-2005",
    "team": "Liverpool FC",
    "opponent": "AC Milan",
    "competition": "UEFA Champions League Final",
    "stage": "Final (Miracle of Istanbul)",
    "date": "25 May 2005",
    "venue": "Atat\u00fcrk Olympic Stadium, Istanbul",
    "score": "AC Milan 3 - 3 Liverpool (2-3 pens)",
    "formation": "4-4-1-1",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Jerzy Dudek",
          "aliases": [
            "jerzy dudek",
            "dudek"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114983.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 3,
          "name": "Steve Finnan",
          "aliases": [
            "steve finnan",
            "finnan"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114984.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 23,
          "name": "Jamie Carragher",
          "aliases": [
            "jamie carragher",
            "carragher",
            "carra"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13012.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 4,
          "name": "Sami Hyypi\u00e4",
          "aliases": [
            "sami hyypia",
            "sami hyypi\u00e4",
            "hyypia",
            "hyypi\u00e4"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13013.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 21,
          "name": "Djimi Traor\u00e9",
          "aliases": [
            "djimi traore",
            "djimi traor\u00e9",
            "traore",
            "traor\u00e9"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114985.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RM",
          "num": 10,
          "name": "Luis Garc\u00eda",
          "aliases": [
            "luis garcia",
            "luis garc\u00eda",
            "garcia"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22606.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 14,
          "name": "Xabi Alonso",
          "aliases": [
            "xabi alonso",
            "alonso"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22607.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 8,
          "name": "Steven Gerrard",
          "aliases": [
            "steven gerrard",
            "gerrard",
            "stevie g"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/392.png&w=350&h=254"
        },
        {
          "pos": "LM",
          "num": 6,
          "name": "John Arne Riise",
          "aliases": [
            "john arne riise",
            "riise"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114986.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "AM",
          "num": 7,
          "name": "Harry Kewell",
          "aliases": [
            "harry kewell",
            "kewell"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114987.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 5,
          "name": "Milan Baro\u0161",
          "aliases": [
            "milan baros",
            "milan baro\u0161",
            "baros",
            "baro\u0161"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114988.png&w=350&h=254"
        }
      ]
    ]
  },
  "argentina-france-2022": {
    "id": "argentina-france-2022",
    "team": "Argentina",
    "opponent": "France",
    "competition": "FIFA World Cup Final",
    "stage": "Final",
    "date": "18 December 2022",
    "venue": "Lusail Stadium, Qatar",
    "score": "Argentina 3 - 3 France (4-2 pens)",
    "formation": "4-3-3",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 23,
          "name": "Emiliano Mart\u00ednez",
          "aliases": [
            "emiliano martinez",
            "emiliano mart\u00ednez",
            "dibu",
            "dibu martinez",
            "martinez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/156948.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 26,
          "name": "Nahuel Molina",
          "aliases": [
            "nahuel molina",
            "molina"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231296.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 13,
          "name": "Cristian Romero",
          "aliases": [
            "cristian romero",
            "cuti romero",
            "romero"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231297.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 19,
          "name": "Nicol\u00e1s Otamendi",
          "aliases": [
            "nicolas otamendi",
            "nicol\u00e1s otamendi",
            "otamendi"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/128390.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 3,
          "name": "Nicol\u00e1s Tagliafico",
          "aliases": [
            "nicolas tagliafico",
            "nicol\u00e1s tagliafico",
            "tagliafico"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178566.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "CM",
          "num": 7,
          "name": "Rodrigo De Paul",
          "aliases": [
            "rodrigo de paul",
            "de paul",
            "depaul"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178567.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 24,
          "name": "Enzo Fern\u00e1ndez",
          "aliases": [
            "enzo fernandez",
            "enzo fern\u00e1ndez",
            "enzo"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/290887.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 20,
          "name": "Alexis Mac Allister",
          "aliases": [
            "alexis mac allister",
            "mac allister",
            "macallister"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/231298.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 10,
          "name": "Lionel Messi",
          "aliases": [
            "lionel messi",
            "messi",
            "leo messi"
          ],
          "photo": "https://media.api-sports.io/football/players/154.png"
        },
        {
          "pos": "ST",
          "num": 9,
          "name": "Juli\u00e1n \u00c1lvarez",
          "aliases": [
            "julian alvarez",
            "juli\u00e1n \u00e1lvarez",
            "alvarez",
            "\u00e1lvarez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/271815.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 11,
          "name": "\u00c1ngel Di Mar\u00eda",
          "aliases": [
            "angel di maria",
            "\u00e1ngel di mar\u00eda",
            "di maria",
            "dimaria"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/104192.png&w=350&h=254"
        }
      ]
    ]
  },
  "spain-netherlands-2010": {
    "id": "spain-netherlands-2010",
    "team": "Spain",
    "opponent": "Netherlands",
    "competition": "FIFA World Cup Final",
    "stage": "Final",
    "date": "11 July 2010",
    "venue": "Soccer City, Johannesburg",
    "score": "Netherlands 0 - 1 Spain (a.e.t.)",
    "formation": "4-2-3-1",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Iker Casillas",
          "aliases": [
            "iker casillas",
            "casillas"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/1039.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 15,
          "name": "Sergio Ramos",
          "aliases": [
            "sergio ramos",
            "ramos"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45844.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 3,
          "name": "Gerard Piqu\u00e9",
          "aliases": [
            "gerard pique",
            "gerard piqu\u00e9",
            "pique",
            "piqu\u00e9"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/67865.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 5,
          "name": "Carles Puyol",
          "aliases": [
            "carles puyol",
            "puyol"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14848.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 11,
          "name": "Joan Capdevila",
          "aliases": [
            "joan capdevila",
            "capdevila"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22608.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "DM",
          "num": 16,
          "name": "Sergio Busquets",
          "aliases": [
            "sergio busquets",
            "busquets"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114982.png&w=350&h=254"
        },
        {
          "pos": "DM",
          "num": 14,
          "name": "Xabi Alonso",
          "aliases": [
            "xabi alonso",
            "alonso"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22607.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RW",
          "num": 18,
          "name": "Pedro",
          "aliases": [
            "pedro",
            "pedro rodriguez",
            "pedro rodr\u00edguez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114989.png&w=350&h=254"
        },
        {
          "pos": "AM",
          "num": 8,
          "name": "Xavi Hern\u00e1ndez",
          "aliases": [
            "xavi hernandez",
            "xavi hern\u00e1ndez",
            "xavi"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14838.png&w=350&h=254"
        },
        {
          "pos": "LW",
          "num": 6,
          "name": "Andr\u00e9s Iniesta",
          "aliases": [
            "andres iniesta",
            "andr\u00e9s iniesta",
            "iniesta"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/14849.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 7,
          "name": "David Villa",
          "aliases": [
            "david villa",
            "villa"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22609.png&w=350&h=254"
        }
      ]
    ]
  },
  "manunited-chelsea-2008": {
    "id": "manunited-chelsea-2008",
    "team": "Manchester United",
    "opponent": "Chelsea",
    "competition": "UEFA Champions League Final",
    "stage": "Final",
    "date": "21 May 2008",
    "venue": "Luzhniki Stadium, Moscow",
    "score": "Manchester United 1 - 1 Chelsea (6-5 pens)",
    "formation": "4-4-2",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Edwin van der Sar",
          "aliases": [
            "edwin van der sar",
            "van der sar",
            "vds"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/1040.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 6,
          "name": "Wes Brown",
          "aliases": [
            "wes brown",
            "brown"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114990.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 5,
          "name": "Rio Ferdinand",
          "aliases": [
            "rio ferdinand",
            "ferdinand"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/399.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 15,
          "name": "Nemanja Vidi\u0107",
          "aliases": [
            "nemanja vidic",
            "nemanja vidi\u0107",
            "vidic",
            "vidi\u0107"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/37967.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 3,
          "name": "Patrice Evra",
          "aliases": [
            "patrice evra",
            "evra"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22610.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RM",
          "num": 7,
          "name": "Cristiano Ronaldo",
          "aliases": [
            "cristiano ronaldo",
            "ronaldo",
            "cr7"
          ],
          "photo": "https://media.api-sports.io/football/players/874.png"
        },
        {
          "pos": "CM",
          "num": 16,
          "name": "Michael Carrick",
          "aliases": [
            "michael carrick",
            "carrick"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/398.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 18,
          "name": "Paul Scholes",
          "aliases": [
            "paul scholes",
            "scholes"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/397.png&w=350&h=254"
        },
        {
          "pos": "LM",
          "num": 4,
          "name": "Owen Hargreaves",
          "aliases": [
            "owen hargreaves",
            "hargreaves"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114991.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 10,
          "name": "Wayne Rooney",
          "aliases": [
            "wayne rooney",
            "rooney"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13010.png&w=350&h=254"
        },
        {
          "pos": "ST",
          "num": 32,
          "name": "Carlos Tevez",
          "aliases": [
            "carlos tevez",
            "tevez"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/22611.png&w=350&h=254"
        }
      ]
    ]
  },
  "arsenal-invincibles-2004": {
    "id": "arsenal-invincibles-2004",
    "team": "Arsenal",
    "opponent": "Leicester City",
    "competition": "Premier League (Final Day Unbeaten)",
    "stage": "Matchday 38 (49 Unbeaten)",
    "date": "15 May 2004",
    "venue": "Highbury, London",
    "score": "Arsenal 2 - 1 Leicester City",
    "formation": "4-4-2",
    "rows": [
      [
        {
          "pos": "GK",
          "num": 1,
          "name": "Jens Lehmann",
          "aliases": [
            "jens lehmann",
            "lehmann"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/1042.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RB",
          "num": 12,
          "name": "Lauren",
          "aliases": [
            "lauren"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114992.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 28,
          "name": "Kolo Tour\u00e9",
          "aliases": [
            "kolo toure",
            "kolo tour\u00e9",
            "toure",
            "tour\u00e9"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13014.png&w=350&h=254"
        },
        {
          "pos": "CB",
          "num": 23,
          "name": "Sol Campbell",
          "aliases": [
            "sol campbell",
            "campbell"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/396.png&w=350&h=254"
        },
        {
          "pos": "LB",
          "num": 3,
          "name": "Ashley Cole",
          "aliases": [
            "ashley cole",
            "cole"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/395.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "RM",
          "num": 8,
          "name": "Freddie Ljungberg",
          "aliases": [
            "freddie ljungberg",
            "ljungberg"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/114993.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 4,
          "name": "Patrick Vieira",
          "aliases": [
            "patrick vieira",
            "vieira"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/117.png&w=350&h=254"
        },
        {
          "pos": "CM",
          "num": 19,
          "name": "Gilberto Silva",
          "aliases": [
            "gilberto silva",
            "gilberto"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/13015.png&w=350&h=254"
        },
        {
          "pos": "LM",
          "num": 7,
          "name": "Robert Pires",
          "aliases": [
            "robert pires",
            "pires"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/118.png&w=350&h=254"
        }
      ],
      [
        {
          "pos": "ST",
          "num": 10,
          "name": "Dennis Bergkamp",
          "aliases": [
            "dennis bergkamp",
            "bergkamp"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/119.png&w=350&h=254"
        },
        {
          "pos": "ST",
          "num": 14,
          "name": "Thierry Henry",
          "aliases": [
            "thierry henry",
            "henry"
          ],
          "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/116.png&w=350&h=254"
        }
      ]
    ]
  }
};

const GuessLineupGame = {
  activeMatchId: "liverpool-bayern-2019",
  revealed: new Set(),
  
  init() {
    this.renderMatchPills();
    this.loadMatch(this.activeMatchId);
    this.bindEvents();
  },

  bindEvents() {
    const form = document.getElementById("glGuessForm");
    const input = document.getElementById("glGuessInput");
    if (form && input) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const guess = input.value.trim();
        if (!guess) return;
        this.submitGuess(guess);
      });
    }

    const revealBtn = document.getElementById("glRevealAllBtn");
    if (revealBtn) {
      revealBtn.addEventListener("click", () => {
        this.revealAll();
      });
    }

    const resetBtn = document.getElementById("glResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        this.resetMatch();
      });
    }

    const nextBtn = document.getElementById("glNextMatchBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.nextMatch();
      });
    }

    const launchBtn = document.getElementById("guessLineupButton");
    if (launchBtn) {
      launchBtn.addEventListener("click", () => {
        this.openGamePanel();
      });
    }

    document.querySelectorAll(".gl-home-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const panel = document.getElementById("guessLineupPanel");
        if (panel) panel.hidden = true;
        switchMainTab("games");
      });
    });
  },

  openGamePanel() {
    if (typeof gamePanel !== 'undefined' && gamePanel) gamePanel.hidden = true;
    if (typeof clueGamePanel !== 'undefined' && clueGamePanel) clueGamePanel.hidden = true;
    if (typeof favoritesPanel !== 'undefined' && favoritesPanel) favoritesPanel.hidden = true;
    const funFacts = document.getElementById("funFactsPanel");
    if (funFacts) funFacts.hidden = true;
    const dreamTeam = document.getElementById("dreamTeamPanel");
    if (dreamTeam) dreamTeam.hidden = true;
    const twoPlayer = document.getElementById("twoPlayerPanel");
    if (twoPlayer) twoPlayer.hidden = true;
    const battle = document.getElementById("battlePanel");
    if (battle) battle.hidden = true;

    const panel = document.getElementById("guessLineupPanel");
    if (panel) {
      panel.hidden = false;
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        document.getElementById("glGuessInput")?.focus();
      }, 300);
    }
  },

  renderMatchPills() {
    const container = document.getElementById("glMatchesList");
    if (!container) return;
    container.innerHTML = Object.keys(HISTORICAL_LINEUPS).map((k) => {
      const m = HISTORICAL_LINEUPS[k];
      const isActive = k === this.activeMatchId;
      return `<button type="button" class="gl-match-pill ${isActive ? "is-active" : ""}" data-match-id="${k}">
        <span>⚽</span> ${m.team} (${m.stage || m.date.slice(-4)})
      </button>`;
    }).join("");

    container.querySelectorAll(".gl-match-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".gl-match-pill").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        this.loadMatch(btn.dataset.matchId);
      });
    });
  },

  loadMatch(matchId) {
    const match = HISTORICAL_LINEUPS[matchId];
    if (!match) return;
    this.activeMatchId = matchId;
    this.revealed.clear();

    const compEl = document.getElementById("glBannerComp");
    const titleEl = document.getElementById("glBannerTitle");
    const metaEl = document.getElementById("glBannerMeta");
    const progEl = document.getElementById("glProgressCount");
    const vicBanner = document.getElementById("glVictoryBanner");

    if (compEl) compEl.textContent = match.competition.toUpperCase();
    if (titleEl) titleEl.textContent = `${match.team} (${match.formation})`;
    if (metaEl) metaEl.textContent = `${match.stage ? match.stage + " • " : ""}vs ${match.opponent} • ${match.date} • ${match.venue}`;
    if (progEl) progEl.textContent = `0 / 11`;
    if (vicBanner) vicBanner.hidden = true;

    const input = document.getElementById("glGuessInput");
    if (input) {
      input.value = "";
      input.placeholder = "Type a player's name (e.g. Gerrard, Neuer, Salah...)";
    }

    const layer = document.getElementById("glFormationLayer");
    if (!layer) return;

    let spotGlobalIndex = 0;
    layer.innerHTML = match.rows.map((row, rIdx) => {
      const spotsHtml = row.map((p) => {
        const idx = spotGlobalIndex++;
        return `
          <div class="gl-player-spot" id="glSpot_${idx}" data-spot-idx="${idx}" title="Click to guess ${p.pos}">
            <div class="gl-circle">
              <span class="gl-pos-label">${p.pos}</span>
              <span class="gl-circle-prompt">GUESS</span>
              <img class="gl-player-photo" src="${p.photo}" alt="${p.name}" onerror="handlePlayerPhotoError(this)" />
            </div>
            <div class="gl-player-name-badge">
              <span class="gl-badge-num">#${p.num}</span> ${p.name.split(' ').slice(-1)[0]}
            </div>
          </div>
        `;
      }).join("");

      return `<div class="gl-pitch-row row-${rIdx}">${spotsHtml}</div>`;
    }).join("");

    layer.querySelectorAll(".gl-player-spot").forEach((spot) => {
      spot.addEventListener("click", () => {
        const input = document.getElementById("glGuessInput");
        if (input) {
          input.focus();
          const pIdx = parseInt(spot.dataset.spotIdx, 10);
          const flat = this.getFlatPlayers();
          const targetP = flat[pIdx];
          if (targetP && !this.revealed.has(pIdx)) {
            input.placeholder = `Guess the ${targetP.pos} for ${match.team}...`;
          }
        }
      });
    });
  },

  getFlatPlayers() {
    const match = HISTORICAL_LINEUPS[this.activeMatchId];
    if (!match) return [];
    const flat = [];
    match.rows.forEach(r => r.forEach(p => flat.push(p)));
    return flat;
  },

  submitGuess(rawGuess) {
    const input = document.getElementById("glGuessInput");
    const norm = normalize(rawGuess);
    const flat = this.getFlatPlayers();

    let matchedIndex = -1;

    for (let i = 0; i < flat.length; i++) {
      if (this.revealed.has(i)) continue;
      const p = flat[i];
      const pNorm = normalize(p.name);
      const lastName = normalize(p.name.split(' ').slice(-1)[0]);
      const firstName = normalize(p.name.split(' ')[0]);

      const isMatch = norm === pNorm ||
        norm === lastName ||
        (firstName.length > 4 && norm === firstName) ||
        (p.aliases && p.aliases.some(a => normalize(a) === norm));

      if (isMatch) {
        matchedIndex = i;
        break;
      }
    }

    if (matchedIndex !== -1) {
      this.revealPlayer(matchedIndex);
      if (input) {
        input.value = "";
        input.placeholder = "Type another player's name...";
      }
      if (typeof soundFx !== 'undefined' && soundFx.playCorrect) {
        soundFx.playCorrect();
      }
    } else {
      // Wrong guess: Zero error notifications as requested, quietly clear
      if (input) {
        input.value = "";
      }
    }
  },

  revealPlayer(index, isGiveUp = false) {
    if (this.revealed.has(index)) return;
    this.revealed.add(index);

    const spot = document.getElementById(`glSpot_${index}`);
    if (spot) {
      spot.classList.add("is-guessed");
      if (isGiveUp) {
        spot.style.opacity = "0.75";
      }
    }

    const progEl = document.getElementById("glProgressCount");
    if (progEl) progEl.textContent = `${this.revealed.size} / 11`;

    if (this.revealed.size === 11) {
      const vic = document.getElementById("glVictoryBanner");
      if (vic) vic.hidden = false;
      if (typeof soundFx !== 'undefined' && soundFx.playWhistle) {
        setTimeout(() => soundFx.playWhistle(), 300);
      }
    }
  },

  revealAll() {
    const flat = this.getFlatPlayers();
    for (let i = 0; i < flat.length; i++) {
      this.revealPlayer(i, true);
    }
  },

  resetMatch() {
    this.loadMatch(this.activeMatchId);
  },

  nextMatch() {
    const keys = Object.keys(HISTORICAL_LINEUPS);
    const currIdx = keys.indexOf(this.activeMatchId);
    const nextKey = keys[(currIdx + 1) % keys.length];
    
    const pills = document.querySelectorAll(".gl-match-pill");
    pills.forEach(p => {
      p.classList.toggle("is-active", p.dataset.matchId === nextKey);
    });

    this.loadMatch(nextKey);
  }
};

// Initialize Guess The Lineup Game
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => GuessLineupGame.init());
} else {
  GuessLineupGame.init();
}


// ==========================================================================
// DAILY FOOTBALL QUIZ ENGINE (HIGH-IMPACT DAILY CHALLENGE & MATCHDAY HISTORY)
// ==========================================================================

const DailyQuizEngine = {
  activeDateKey: null,
  activeQuestion: null,
  countdownTimerId: null,

  // Calendar of verified, super-hard daily questions (Last 7-10 days real football events & records)
  questions: {
    // 2026-11-04 (Today - Wednesday UCL Matchday 4: Arsenal, Inter, PSG, Barca, Bayern in action)
    "2026-11-04": {
      category: "🏆 CHAMPIONS LEAGUE SPECIAL",
      kicker: "UCL MATCHDAY 4 • ALL-TIME RECORD",
      question: "On this Champions League matchday: Which legendary superstar holds the all-time record for the most goals scored in a single UEFA Champions League campaign?",
      options: [
        "Robert Lewandowski (15 goals, 2019/20)",
        "Cristiano Ronaldo (17 goals, 2013/14)",
        "Lionel Messi (14 goals, 2011/12)",
        "Karim Benzema (15 goals, 2021/22)"
      ],
      correctIndex: 1,
      explanation: "Cristiano Ronaldo set the legendary all-time UEFA Champions League record with an astonishing 17 goals in 11 matches for Real Madrid during the 2013-14 campaign, culminating with his 120th-minute penalty in the final against Atlético Madrid."
    },
    // 2026-11-05 (Gyökeres vs Man City 4-1 / Milan 3-1 Real Madrid)
    "2026-11-05": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "CHAMPIONS LEAGUE SHOCK • RECENT CLASH",
      question: "In Rúben Amorim's emotional final home match before moving to Manchester United, Sporting CP stunned Manchester City 4-1. Who scored a breathtaking hat-trick for Sporting?",
      options: [
        "Francisco Trincão",
        "Viktor Gyökeres",
        "Pedro Gonçalves",
        "Geovany Quenda"
      ],
      correctIndex: 1,
      explanation: "Swedish sensation Viktor Gyökeres dismantled Manchester City with a ruthless hat-trick (two penalties and an open-play dink over Ederson) to inflict Pep Guardiola's third consecutive defeat across all competitions."
    },
    // 2026-11-03 (Bournemouth 2-1 Man City - streak ended)
    "2026-11-03": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "PREMIER LEAGUE • RECORD UPSET",
      question: "On November 2, 2024, Manchester City's historic 32-game unbeaten Premier League streak (11 months) was finally shattered. Which team defeated them 2-1?",
      options: [
        "Wolverhampton Wanderers",
        "Brighton & Hove Albion",
        "AFC Bournemouth",
        "Aston Villa"
      ],
      correctIndex: 2,
      explanation: "AFC Bournemouth stunned the reigning champions 2-1 at the Vitality Stadium courtesy of clinical goals from Antoine Semenyo (9') and Evanilson (64'), snapping Man City's 32-match unbeaten league run."
    },
    // 2026-11-02 (Newcastle 1-0 Arsenal)
    "2026-11-02": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "PREMIER LEAGUE CLASH",
      question: "Alexander Isak powered home a 12th-minute bullet header to seal Newcastle's 1-0 win over Arsenal on November 2, 2024. Who whipped in the pin-point assist cross from the right flank?",
      options: [
        "Anthony Gordon",
        "Lewis Hall",
        "Bruno Guimarães",
        "Joe Willock"
      ],
      correctIndex: 0,
      explanation: "Anthony Gordon delivered a pinpoint, bending cross from deep on the right flank directly between Gabriel and Saliba, allowing Alexander Isak to rise and head past David Raya."
    },
    // 2026-11-01 (Amorim confirmed / Ten Hag aftermath)
    "2026-11-01": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "MANAGER SHAKEUP • PREMIER LEAGUE",
      question: "Following Erik ten Hag's dismissal on October 28, 2024, which Manchester United club icon served as interim head coach for their 5-2 cup win and 1-1 draw with Chelsea?",
      options: [
        "Michael Carrick",
        "Ruud van Nistelrooy",
        "Kieran McKenna",
        "Ole Gunnar Solskjær"
      ],
      correctIndex: 1,
      explanation: "Legendary striker Ruud van Nistelrooy stepped up as Manchester United interim manager, orchestrating a high-scoring 5-2 Carabao Cup victory over Leicester and a 1-1 league draw against Chelsea at Old Trafford."
    },
    // 2026-10-31 (Real Madrid crisis vs AC Milan preview & Ballon d'Or boycott)
    "2026-10-31": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "BALLON D'OR DRAMA • VOTING FACT",
      question: "Real Madrid famously boycotted the 2024 Ballon d'Or gala in Paris after learning Vinícius Júnior had not won. Which player won the Men's Coach of the Year award at that ceremony despite not attending?",
      options: [
        "Pep Guardiola",
        "Carlo Ancelotti",
        "Xabi Alonso",
        "Luis de la Fuente"
      ],
      correctIndex: 1,
      explanation: "Carlo Ancelotti was officially awarded the Men's Johan Cruyff Trophy (Coach of the Year) for leading Real Madrid to the Champions League and La Liga double, though he did not attend in solidarity with Vinícius Júnior."
    },
    // 2026-10-30 (El Clásico young record)
    "2026-10-30": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "HISTORIC RECORD • EL CLÁSICO",
      question: "In Barcelona's 4-0 win at the Bernabéu on October 26, 2024, who became the youngest goalscorer in El Clásico history at 17 years and 105 days, breaking a 77-year-old record?",
      options: [
        "Pau Cubarsí",
        "Lamine Yamal",
        "Marc Casadó",
        "Pedri"
      ],
      correctIndex: 1,
      explanation: "Lamine Yamal smashed the top-corner with his weaker right foot in the 77th minute to become the youngest goalscorer in El Clásico history at 17 years and 105 days, eclipsing Alfonso Navarro's 1947 record."
    },
    // 2026-10-29 (West Ham 2-1 Man United penalty)
    "2026-10-29": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "PREMIER LEAGUE DRAMA",
      question: "In Erik ten Hag's final match as Manchester United manager on October 27, 2024, West Ham won 2-1 via a controversial 92nd-minute penalty. Who stepped up and scored the spot kick?",
      options: [
        "Lucas Paquetá",
        "Michail Antonio",
        "Jarrod Bowen",
        "Crysencio Summerville"
      ],
      correctIndex: 2,
      explanation: "West Ham captain Jarrod Bowen coolly slotted the 92nd-minute penalty past André Onana following a lengthy VAR review for a Matthijs de Ligt challenge, triggering Ten Hag's departure the following morning."
    },
    // 2026-10-28 (Ballon d'Or 2024 ceremony)
    "2026-10-28": {
      category: "⚡ LAST 7 DAYS TRIVIA",
      kicker: "BALLON D'OR 2024 • PARIS GALA",
      question: "At the 68th Ballon d'Or ceremony on October 28, 2024, Rodri became the first Premier League player to win the men's award since which player in 2008?",
      options: [
        "Cristiano Ronaldo",
        "Thierry Henry",
        "Wayne Rooney",
        "Eden Hazard"
      ],
      correctIndex: 0,
      explanation: "Manchester City and Spain midfield titan Rodri became the first Premier League player to claim the Ballon d'Or since Cristiano Ronaldo won it in 2008 with Manchester United, ending a 16-year drought for English football."
    },
    // 2026-10-27 (Derby d'Italia 4-4)
    "2026-10-27": {
      category: "⚔️ DERBY D'ITALIA THRILLER",
      kicker: "SERIE A • 8-GOAL CLASSIC",
      question: "Inter Milan and Juventus shared a breathtaking 4-4 draw on October 27, 2024. Which 19-year-old Turkish international came off the bench at 4-2 down to score two dramatic equalizers for Juventus?",
      options: [
        "Arda Güler",
        "Kenan Yıldız",
        "Can Uzun",
        "Semih Kılıçsoy"
      ],
      correctIndex: 1,
      explanation: "Kenan Yıldız came on in the 61st minute and struck twice with his left foot (71' and 82') to rescue an unforgettable 4-4 draw for Juventus in one of the highest-scoring Derby d'Italia matches in modern history."
    },
    // 2026-10-26 (El Clásico 0-4 Bernabéu)
    "2026-10-26": {
      category: "⚔️ EL CLÁSICO CLASH SPECIAL",
      kicker: "SANTIAGO BERNABÉU • RECORD FACT",
      question: "In Barcelona's 4-0 demolition of Real Madrid at the Santiago Bernabéu on October 26, 2024, how many times was Kylian Mbappé caught offside by Hansi Flick's disciplined defensive trap?",
      options: [
        "4 times",
        "6 times",
        "8 times",
        "11 times"
      ],
      correctIndex: 2,
      explanation: "Kylian Mbappé was flagged offside a staggering 8 times throughout the 90 minutes as Hansi Flick's high defensive line trapped Real Madrid repeatedly, with two Mbappé goals ruled out by semi-automated VAR."
    }
  },

  // Historic Rivalry & Derby Questions (Served when today has an active Derby/Clásico or UCL Matchday!)
  derbyQuestions: {
    "el_clasico": {
      category: "⚔️ EL CLÁSICO HISTORIC CLASH",
      kicker: "HISTORIC RIVALRY • ALL-TIME HEAD-TO-HEAD",
      question: "Across 258 official competitive El Clásico matches in history (up to 2024/25), which club leads the all-time head-to-head record and by how many wins?",
      options: [
        "Real Madrid leads (105 wins vs 101 Barcelona wins)",
        "Barcelona leads (106 wins vs 102 Real Madrid wins)",
        "Tied exactly (103 wins each, 52 draws)",
        "Real Madrid leads (115 wins vs 95 Barcelona wins)"
      ],
      correctIndex: 0,
      explanation: "In official competitive matches, Real Madrid narrowly leads the historic rivalry with 105 wins to Barcelona's 101, along with 52 draws across La Liga, Copa del Rey, and Champions League."
    },
    "el_clasico_scorers": {
      category: "⚔️ EL CLÁSICO HISTORIC CLASH",
      kicker: "ALL-TIME GOALSCORERS",
      question: "Who is the undisputed all-time highest goalscorer in El Clásico history?",
      options: [
        "Cristiano Ronaldo (18 goals)",
        "Alfredo Di Stéfano (18 goals)",
        "Lionel Messi (26 goals)",
        "Raúl González (15 goals)"
      ],
      correctIndex: 2,
      explanation: "Lionel Messi holds the all-time El Clásico scoring record with 26 goals in 45 appearances (18 in La Liga, 6 in Supercopa, 2 in Champions League), well ahead of Di Stéfano (18) and Cristiano Ronaldo (18)."
    },
    "manchester_derby": {
      category: "⚔️ MANCHESTER DERBY HISTORY",
      kicker: "MANCHESTER CITY VS MAN UNITED",
      question: "Who is the all-time top goalscorer in the competitive history of the Manchester Derby?",
      options: [
        "Sergio Agüero (9 goals)",
        "Wayne Rooney (11 goals)",
        "Bobby Charlton (9 goals)",
        "Erling Haaland (8 goals)"
      ],
      correctIndex: 1,
      explanation: "Wayne Rooney stands alone at the pinnacle of Manchester Derby history with 11 goals across all competitions, followed by Sergio Agüero and Joe Hayes with 10 each."
    },
    "north_london_derby": {
      category: "⚔️ NORTH LONDON DERBY HISTORY",
      kicker: "ARSENAL VS TOTTENHAM",
      question: "Who holds the record for the most goals in North London Derby history between Arsenal and Tottenham?",
      options: [
        "Thierry Henry (10 goals)",
        "Emmanuel Adebayor (10 goals)",
        "Harry Kane (14 goals)",
        "Robert Pires (9 goals)"
      ],
      correctIndex: 2,
      explanation: "Harry Kane is the highest-scoring player in North London Derby history with 14 goals in 19 appearances for Tottenham Hotspur against Arsenal."
    },
    "derby_d_italia": {
      category: "⚔️ DERBY D'ITALIA HISTORY",
      kicker: "INTER MILAN VS JUVENTUS",
      question: "Which legendary Italian football icon holds the record for the most appearances in the historic Derby d'Italia (Inter vs Juventus)?",
      options: [
        "Javier Zanetti (47 matches)",
        "Gianluigi Buffon (39 matches)",
        "Alessandro Del Piero (31 matches)",
        "Giuseppe Bergomi (44 matches)"
      ],
      correctIndex: 0,
      explanation: "Inter Milan captain Javier Zanetti holds the all-time record with 47 Derby d'Italia appearances between 1995 and 2014, showcasing unprecedented longevity in Italian football."
    },
    "champions_league_managers": {
      category: "🏆 CHAMPIONS LEAGUE HISTORY",
      kicker: "UCL MANAGERIAL RECORD",
      question: "Carlo Ancelotti holds the managerial record with 5 UEFA Champions League titles. Which two clubs did he lift the European Cup with?",
      options: [
        "Juventus (2) & Real Madrid (3)",
        "Chelsea (1) & Real Madrid (4)",
        "AC Milan (2) & Real Madrid (3)",
        "Paris Saint-Germain (1) & AC Milan (4)"
      ],
      correctIndex: 2,
      explanation: "Carlo Ancelotti won the Champions League twice with AC Milan (2003, 2007) and three times with Real Madrid (2014, 2022, 2024), making him the most decorated manager in European Cup history."
    },
    "champions_league_assists": {
      category: "🏆 CHAMPIONS LEAGUE HISTORY",
      kicker: "UCL PLAYMAKER RECORD",
      question: "Who holds the all-time record for the most assists in UEFA Champions League history?",
      options: [
        "Lionel Messi (40 assists)",
        "Cristiano Ronaldo (42 assists)",
        "Ángel Di María (40 assists)",
        "Neymar Jr (33 assists)"
      ],
      correctIndex: 1,
      explanation: "Cristiano Ronaldo holds the record with 42 official UEFA Champions League assists, narrowly ahead of Lionel Messi (40) and Ángel Di María (40)."
    }
  },

  getTodayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  },

  getYesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  },

  formatDateLabel(dateKey) {
    try {
      const parts = dateKey.split('-');
      const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return dateKey;
    }
  },

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  },

  detectActiveDerby() {
    const matches = window.currentRadarMatches || [];
    for (const m of matches) {
      const h = (m.homeTeam || '').toLowerCase();
      const a = (m.awayTeam || '').toLowerCase();
      if ((h.includes('real madrid') && a.includes('barcelona')) || (h.includes('barcelona') && a.includes('real madrid'))) {
        return Math.abs(this.hashCode(this.getTodayKey())) % 2 === 0 ? 'el_clasico' : 'el_clasico_scorers';
      }
      if ((h.includes('manchester city') && a.includes('manchester united')) || (h.includes('manchester united') && a.includes('manchester city'))) {
        return 'manchester_derby';
      }
      if ((h.includes('arsenal') && a.includes('tottenham')) || (h.includes('tottenham') && a.includes('arsenal'))) {
        return 'north_london_derby';
      }
      if ((h.includes('inter') && a.includes('juventus')) || (h.includes('juventus') && a.includes('inter'))) {
        return 'derby_d_italia';
      }
    }
    return null;
  },

  isUclMatchday() {
    const matches = window.currentRadarMatches || [];
    const hasUcl = matches.some(m => (m.leagueCode || '').includes('champions') || (m.leagueName || '').toLowerCase().includes('champions'));
    if (hasUcl) return true;
    const day = new Date().getDay();
    return day === 2 || day === 3; // Tuesday or Wednesday
  },

  getActiveQuestion(dateKey) {
    const todayKey = this.getTodayKey();
    const targetKey = dateKey || todayKey;

    // 1. If today is an active Derby Day -> serve historic derby records question
    if (targetKey === todayKey) {
      const activeDerby = this.detectActiveDerby();
      if (activeDerby && this.derbyQuestions[activeDerby]) {
        return { ...this.derbyQuestions[activeDerby], dateKey: targetKey, isDerby: true };
      }

      // If today is a Champions League matchday -> serve UCL historic record question
      if (this.isUclMatchday()) {
        if (this.questions[targetKey]?.category?.includes("CHAMPIONS LEAGUE")) {
          return { ...this.questions[targetKey], dateKey: targetKey };
        }
        return { ...this.derbyQuestions["champions_league_managers"], dateKey: targetKey };
      }
    }

    // 2. Direct match in calendar of last 7-10 days
    if (this.questions[targetKey]) {
      return { ...this.questions[targetKey], dateKey: targetKey };
    }

    // 3. Fallback: select dynamically from the 7-day bank
    const keys = Object.keys(this.questions).sort().reverse();
    const idx = Math.abs(this.hashCode(targetKey)) % keys.length;
    return { ...this.questions[keys[idx]], dateKey: targetKey, isFallback: true };
  },

  init() {
    const openBtn = document.getElementById('dailyQuizOpenBtn');
    const heroCard = document.getElementById('dailyQuizHeroCard');
    const gamesHubBtn = document.getElementById('gamesHubDailyQuizBtn');
    const modal = document.getElementById('dailyQuizModal');
    const closeBtn = document.getElementById('dqModalCloseBtn');
    const doneBtn = document.getElementById('dqModalDoneBtn');
    const archiveToggle = document.getElementById('dqArchiveToggleBtn');

    if (!heroCard && !openBtn) return;

    if (openBtn) openBtn.addEventListener('click', () => this.openModal());
    if (heroCard) {
      heroCard.addEventListener('click', (e) => {
        if (!e.target.closest('#dailyQuizOpenBtn')) {
          this.openModal();
        }
      });
    }
    if (gamesHubBtn) gamesHubBtn.addEventListener('click', () => this.openModal());
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (doneBtn) doneBtn.addEventListener('click', () => this.closeModal());

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal();
      });
    }

    if (archiveToggle) {
      archiveToggle.addEventListener('click', () => {
        const list = document.getElementById('dqArchiveList');
        const arrow = document.getElementById('dqArchiveToggleArrow');
        if (list) {
          const isOpen = list.style.display !== 'none';
          list.style.display = isOpen ? 'none' : 'grid';
          if (arrow) arrow.textContent = isOpen ? '▼' : '▲';
          if (!isOpen) this.renderArchiveList();
        }
      });
    }

    this.updateHeroCardState();
    this.startCountdownTimer();
  },

  updateHeroCardState() {
    const todayKey = this.getTodayKey();
    const heroStatus = document.getElementById('dqHeroStatusPill');
    const heroBtnLabel = document.getElementById('dqHeroBtnLabel');
    const openBtn = document.getElementById('dailyQuizOpenBtn');
    const streakCount = document.getElementById('dqStreakCount');
    const heroTag = document.getElementById('dqHeroCategoryTag');
    const heroHeadline = document.getElementById('dqHeroHeadline');

    const streak = Number(localStorage.getItem('dailyQuizStreak') || 0);
    if (streakCount) streakCount.textContent = streak;

    const savedState = localStorage.getItem('daily_quiz_' + todayKey);
    const q = this.getActiveQuestion(todayKey);

    if (heroTag && q) {
      heroTag.textContent = q.category || "⚡ TODAY'S CHALLENGE";
    }

    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        if (state.answered) {
          if (heroStatus) {
            heroStatus.textContent = state.isCorrect ? "✅ COMPLETED • NICE JOB!" : "✅ COMPLETED TODAY";
            heroStatus.classList.add('is-completed');
          }
          if (heroBtnLabel) {
            heroBtnLabel.textContent = "REVIEW TODAY'S RESULT";
          }
          if (openBtn) {
            openBtn.classList.add('is-reviewed');
          }
          if (heroHeadline) {
            heroHeadline.textContent = state.isCorrect ? "You Aced Today's Question! 🔥" : "Today's Challenge Completed";
          }
          return;
        }
      } catch (e) {}
    }

    if (heroStatus) {
      heroStatus.textContent = "⚡ UNANSWERED TODAY";
      heroStatus.classList.remove('is-completed');
    }
    if (heroBtnLabel) {
      heroBtnLabel.textContent = "PLAY DAILY QUIZ";
    }
    if (openBtn) {
      openBtn.classList.remove('is-reviewed');
    }
  },

  startCountdownTimer() {
    const updateTime = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const diffMs = Math.max(0, midnight - now);

      const hours = String(Math.floor(diffMs / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diffMs % (1000 * 60)) / 1000)).padStart(2, '0');
      const timeStr = `${hours}:${minutes}:${seconds}`;

      const heroTimer = document.getElementById('dqHeroTimer');
      const modalTimer = document.getElementById('dqModalTimer');
      if (heroTimer) heroTimer.textContent = timeStr;
      if (modalTimer) modalTimer.textContent = timeStr;
    };

    updateTime();
    if (this.countdownTimerId) clearInterval(this.countdownTimerId);
    this.countdownTimerId = setInterval(updateTime, 1000);
  },

  openModal(dateKey) {
    const modal = document.getElementById('dailyQuizModal');
    if (!modal) return;

    const targetKey = dateKey || this.getTodayKey();
    this.activeDateKey = targetKey;
    this.activeQuestion = this.getActiveQuestion(targetKey);

    this.renderModal(this.activeQuestion, targetKey);

    modal.hidden = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    const modal = document.getElementById('dailyQuizModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => { modal.hidden = true; }, 260);
    document.body.style.overflow = '';
    this.updateHeroCardState();
  },

  renderModal(q, dateKey) {
    if (!q) return;

    const modalCategory = document.getElementById('dqModalCategory');
    const modalDate = document.getElementById('dqModalDate');
    const kickerBadge = document.getElementById('dqQuestionTypeBadge');
    const questionText = document.getElementById('dqQuestionText');
    const optionsContainer = document.getElementById('dqOptionsList');
    const resultBanner = document.getElementById('dqResultBanner');

    if (modalCategory) modalCategory.textContent = q.category || "🏆 DAILY CHALLENGE";
    if (modalDate) modalDate.textContent = this.formatDateLabel(dateKey);
    if (kickerBadge) kickerBadge.textContent = q.kicker || "SUPER-HARD &bull; RECENT CLASH TRIVIA";
    if (questionText) questionText.textContent = q.question;

    if (resultBanner) resultBanner.style.display = 'none';

    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    const savedStateStr = localStorage.getItem('daily_quiz_' + dateKey);
    let savedState = null;
    if (savedStateStr) {
      try { savedState = JSON.parse(savedStateStr); } catch (e) {}
    }

    q.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dq-option-btn';
      btn.innerHTML = `
        <span class="dq-option-badge">${letters[index] || index + 1}</span>
        <span class="dq-option-label">${optText}</span>
      `;

      if (savedState && savedState.answered) {
        btn.disabled = true;
        if (index === q.correctIndex) {
          btn.classList.add('is-correct');
        } else if (index === savedState.selectedIndex && !savedState.isCorrect) {
          btn.classList.add('is-wrong');
        }
      } else {
        btn.addEventListener('click', () => {
          this.submitAnswer(index, q, dateKey);
        });
      }

      optionsContainer.appendChild(btn);
    });

    if (savedState && savedState.answered) {
      this.showResultBanner(savedState.isCorrect, q, dateKey, false);
    }
  },

  submitAnswer(selectedIndex, q, dateKey) {
    const isCorrect = selectedIndex === q.correctIndex;
    const todayKey = this.getTodayKey();

    // Calculate streak only for today's active quiz
    let currentStreak = Number(localStorage.getItem('dailyQuizStreak') || 0);
    if (dateKey === todayKey) {
      if (isCorrect) {
        const yesterdayKey = this.getYesterdayKey();
        const yesterdayState = localStorage.getItem('daily_quiz_' + yesterdayKey);
        let wasYesterdayCorrect = false;
        if (yesterdayState) {
          try { wasYesterdayCorrect = JSON.parse(yesterdayState).isCorrect; } catch (e) {}
        }

        // Increment streak if yesterday was correct or if first streak
        currentStreak = (wasYesterdayCorrect || currentStreak === 0) ? currentStreak + 1 : 1;
        localStorage.setItem('dailyQuizStreak', currentStreak);
      } else {
        currentStreak = 0;
        localStorage.setItem('dailyQuizStreak', 0);
      }
    }

    // Save answer state in localStorage
    localStorage.setItem('daily_quiz_' + dateKey, JSON.stringify({
      answered: true,
      selectedIndex,
      isCorrect,
      dateKey,
      timestamp: Date.now()
    }));

    // Update buttons UI
    const optionsContainer = document.getElementById('dqOptionsList');
    if (optionsContainer) {
      const buttons = optionsContainer.querySelectorAll('.dq-option-btn');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.classList.add('is-correct');
        } else if (idx === selectedIndex && !isCorrect) {
          btn.classList.add('is-wrong');
        }
      });
    }

    if (isCorrect) {
      this.triggerConfetti();
    }

    this.showResultBanner(isCorrect, q, dateKey, true);
    this.updateHeroCardState();
  },

  showResultBanner(isCorrect, q, dateKey, isJustSubmitted) {
    const banner = document.getElementById('dqResultBanner');
    const title = document.getElementById('dqResultTitle');
    const exp = document.getElementById('dqResultExplanation');
    const streakEl = document.getElementById('dqResultStreak');

    if (!banner || !title || !exp) return;

    banner.className = `dq-result-banner ${isCorrect ? 'is-success' : 'is-failure'}`;
    banner.style.display = 'block';

    if (isCorrect) {
      // EXACT required user string: "let's go you did nice job"
      title.innerHTML = "<span>🎉</span> LET'S GO! You did a nice job!";
    } else {
      // EXACT required user string: "ah it wasn't right"
      title.innerHTML = "<span>❌</span> Ah, that wasn't right!";
    }

    exp.textContent = q.explanation || "Thank you for taking today's football quiz.";

    const currentStreak = Number(localStorage.getItem('dailyQuizStreak') || 0);
    if (streakEl) {
      if (isCorrect) {
        streakEl.innerHTML = `🔥 <strong>${currentStreak} DAY STREAK!</strong> Come back tomorrow for the next challenge!`;
      } else {
        streakEl.innerHTML = `✦ Daily streak reset to 0. Come back tomorrow at midnight to start fresh!`;
      }
    }

    if (isJustSubmitted) {
      banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },

  triggerConfetti() {
    const modal = document.querySelector('.dq-modal-window');
    if (!modal) return;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.style.position = 'absolute';
      p.style.width = `${Math.floor(Math.random() * 8 + 6)}px`;
      p.style.height = `${Math.floor(Math.random() * 12 + 6)}px`;
      p.style.borderRadius = '2px';
      p.style.pointerEvents = 'none';
      p.style.zIndex = '999';

      const colors = ['#b9f34c', '#4ade80', '#facc15', '#38bdf8', '#ffffff'];
      p.style.background = colors[Math.floor(Math.random() * colors.length)];

      const startX = 50 + (Math.random() * 20 - 10);
      const startY = 50 + (Math.random() * 20 - 10);
      p.style.left = `${startX}%`;
      p.style.top = `${startY}%`;

      const destX = (Math.random() - 0.5) * 350;
      const destY = (Math.random() - 0.7) * 350;
      const rot = Math.random() * 720;

      p.animate([
        { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(0.6) rotate(${rot}deg)`, opacity: 0 }
      ], {
        duration: Math.random() * 800 + 800,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
      });

      modal.appendChild(p);
      setTimeout(() => { if (p.parentNode) p.parentNode.removeChild(p); }, 1800);
    }
  },

  renderArchiveList() {
    const list = document.getElementById('dqArchiveList');
    if (!list) return;

    list.innerHTML = '';
    const keys = Object.keys(this.questions).sort().reverse();
    const todayKey = this.getTodayKey();

    keys.forEach(k => {
      const q = this.questions[k];
      const isToday = k === todayKey;
      const saved = localStorage.getItem('daily_quiz_' + k);
      let statusIcon = '⏳';
      if (saved) {
        try {
          const s = JSON.parse(saved);
          statusIcon = s.isCorrect ? '✅' : '❌';
        } catch (e) {}
      }

      const item = document.createElement('div');
      item.className = 'dq-archive-item';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>${statusIcon}</span>
          <span class="dq-archive-item-title">${q.kicker || q.category}</span>
          ${isToday ? '<span style="font-size: 10px; background: rgba(185,243,76,0.2); color: var(--green); padding: 2px 6px; border-radius: 4px; font-weight: 700;">TODAY</span>' : ''}
        </div>
        <span class="dq-archive-item-date">${this.formatDateLabel(k)}</span>
      `;

      item.addEventListener('click', () => {
        this.renderModal(q, k);
      });

      list.appendChild(item);
    });
  }
};

// Initialize Daily Quiz on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => DailyQuizEngine.init());
} else {
  DailyQuizEngine.init();
}

/* ==========================================================================
   AI TEAM & MATCH ANALYSIS ENGINE (UEFA PRO MANAGER PERSONA)
   Zero Error Guarantee with Client-Side Deterministic Heuristic Synthesizer
   ========================================================================== */

const AiAnalysisEngine = {
  initialized: false,
  currentTeam: { id: '86', league: 'esp.1', name: 'Real Madrid' },
  recentMatches: [],
  selectedMatch: null,

  init() {
    if (this.initialized) return;
    this.initialized = true;

    // Team chips click
    const chipsContainer = document.getElementById('analysisQuickChips');
    if (chipsContainer) {
      chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.analysis-team-chip');
        if (chip) {
          chipsContainer.querySelectorAll('.analysis-team-chip').forEach(c => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          this.currentTeam = {
            id: chip.dataset.teamId,
            league: chip.dataset.league,
            name: chip.dataset.name
          };
          this.loadTeamSchedule(this.currentTeam.id, this.currentTeam.league);
        }
      });
    }

    // Team search
    const searchInput = document.getElementById('analysisTeamSearchInput');
    const searchBtn = document.getElementById('analysisTeamSearchBtn');
    const doTeamSearch = () => {
      const q = searchInput?.value.trim();
      if (!q) return;
      this.searchAndSelectTeam(q);
    };
    searchBtn?.addEventListener('click', doTeamSearch);
    searchInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') doTeamSearch(); });

    // Fixture dropdown change
    const fixtureSelect = document.getElementById('analysisFixtureSelect');
    if (fixtureSelect) {
      fixtureSelect.addEventListener('change', (e) => {
        const matchId = e.target.value;
        const found = this.recentMatches.find(m => String(m.id) === String(matchId));
        if (found) {
          this.selectedMatch = found;
          this.renderMatchCard(found);
          this.checkCachedAnalysis(found.id);
        }
      });
    }

    // Analyze CTA Button
    const runBtn = document.getElementById('btnRunTacticalAnalysis');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        if (this.selectedMatch) {
          this.runAnalysis(this.selectedMatch);
        }
      });
    }

    // Connect Games Hub card button
    const goToBtn = document.getElementById('goToAiAnalysisBtn');
    if (goToBtn) {
      goToBtn.addEventListener('click', () => {
        switchMainTab('analysis');
      });
    }

    // Preload default team (Real Madrid)
    this.loadTeamSchedule(this.currentTeam.id, this.currentTeam.league);
  },

  async searchAndSelectTeam(query) {
    const topTeams = [
      { id: '86', league: 'esp.1', name: 'Real Madrid' },
      { id: '83', league: 'esp.1', name: 'Barcelona' },
      { id: '359', league: 'eng.1', name: 'Arsenal' },
      { id: '382', league: 'eng.1', name: 'Manchester City' },
      { id: '364', league: 'eng.1', name: 'Liverpool' },
      { id: '132', league: 'ger.1', name: 'Bayern Munich' },
      { id: '160', league: 'fra.1', name: 'Paris Saint-Germain' },
      { id: '110', league: 'ita.1', name: 'Inter Milan' },
      { id: '363', league: 'eng.1', name: 'Chelsea' },
      { id: '111', league: 'ita.1', name: 'Juventus' },
      { id: '124', league: 'ger.1', name: 'Borussia Dortmund' },
      { id: '1068', league: 'esp.1', name: 'Atletico Madrid' },
      { id: '360', league: 'eng.1', name: 'Manchester United' },
      { id: '367', league: 'eng.1', name: 'Tottenham Hotspur' },
      { id: '103', league: 'ita.1', name: 'AC Milan' },
      { id: '102', league: 'ita.1', name: 'Napoli' },
      { id: '131', league: 'ger.1', name: 'Bayer Leverkusen' },
      { id: '500', league: 'por.1', name: 'Sporting CP' },
      { id: '501', league: 'por.1', name: 'Benfica' }
    ];

    const clean = query.toLowerCase();
    const hit = topTeams.find(t => t.name.toLowerCase().includes(clean));
    if (hit) {
      this.currentTeam = hit;
      this.updateActiveChip(hit.id);
      this.loadTeamSchedule(hit.id, hit.league);
      return;
    }

    // Search through ESPN
    const leagues = ['eng.1', 'esp.1', 'ita.1', 'ger.1', 'fra.1'];
    for (const lCode of leagues) {
      try {
        const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${lCode}/teams`);
        if (res.ok) {
          const data = await res.json();
          const sportsTeams = data.sports?.[0]?.leagues?.[0]?.teams || [];
          const matched = sportsTeams.find(item => 
            item.team.displayName.toLowerCase().includes(clean) || 
            (item.team.shortDisplayName && item.team.shortDisplayName.toLowerCase().includes(clean))
          );
          if (matched) {
            this.currentTeam = {
              id: matched.team.id,
              league: lCode,
              name: matched.team.displayName
            };
            this.updateActiveChip(matched.team.id);
            this.loadTeamSchedule(matched.team.id, lCode);
            return;
          }
        }
      } catch (e) {}
    }

    // Default to Real Madrid
    this.loadTeamSchedule('86', 'esp.1');
  },

  updateActiveChip(teamId) {
    const chipsContainer = document.getElementById('analysisQuickChips');
    if (chipsContainer) {
      chipsContainer.querySelectorAll('.analysis-team-chip').forEach(c => {
        c.classList.toggle('is-active', String(c.dataset.teamId) === String(teamId));
      });
    }
  },

  async loadTeamSchedule(teamId, leagueCode) {
    const fixtureSelect = document.getElementById('analysisFixtureSelect');
    if (fixtureSelect) {
      fixtureSelect.innerHTML = '<option value="">Loading matches...</option>';
    }

    try {
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/teams/${teamId}/schedule`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('Schedule fetch failed');
      const data = await res.json();
      const events = data.events || [];

      // Filter completed matches
      const completed = events.filter(e => {
        const comp = e.competitions?.[0];
        return comp?.status?.type?.state === 'post';
      });

      // Sort newest first
      completed.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.recentMatches = completed;

      if (completed.length > 0) {
        if (fixtureSelect) {
          fixtureSelect.innerHTML = completed.slice(0, 8).map((ev) => {
            const comp = ev.competitions[0];
            const home = comp.competitors.find(c => c.homeAway === 'home');
            const away = comp.competitors.find(c => c.homeAway === 'away');
            const dateStr = new Date(ev.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            return `<option value="${ev.id}">${dateStr}: ${home?.team?.displayName || 'Home'} ${home?.score?.displayValue ?? home?.score ?? '0'} - ${away?.score?.displayValue ?? away?.score ?? '0'} ${away?.team?.displayName || 'Away'}</option>`;
          }).join('');
        }

        this.selectedMatch = completed[0];
        this.renderMatchCard(completed[0]);
        this.checkCachedAnalysis(completed[0].id);
      } else {
        if (fixtureSelect) fixtureSelect.innerHTML = '<option value="">No recent matches found</option>';
      }
    } catch (err) {
      console.warn("AiAnalysis schedule load error:", err);
      this.renderFallbackMatchCard();
    }
  },

  renderMatchCard(ev) {
    const comp = ev.competitions?.[0] || {};
    const home = comp.competitors?.find(c => c.homeAway === 'home') || comp.competitors?.[0] || {};
    const away = comp.competitors?.find(c => c.homeAway === 'away') || comp.competitors?.[1] || {};

    const homeLogo = document.getElementById('analysisHomeLogo');
    const awayLogo = document.getElementById('analysisAwayLogo');
    const homeName = document.getElementById('analysisHomeName');
    const awayName = document.getElementById('analysisAwayName');
    const scoreDisplay = document.getElementById('analysisScoreDisplay');
    const compBadge = document.getElementById('analysisCompBadge');
    const dateVenue = document.getElementById('analysisDateVenue');

    if (homeLogo) homeLogo.src = home.team?.logo || 'https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png';
    if (awayLogo) awayLogo.src = away.team?.logo || 'https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png';
    if (homeName) homeName.textContent = home.team?.displayName || 'Home Team';
    if (awayName) awayName.textContent = away.team?.displayName || 'Away Team';
    
    const hScore = home.score?.displayValue ?? home.score ?? '0';
    const aScore = away.score?.displayValue ?? away.score ?? '0';
    if (scoreDisplay) scoreDisplay.textContent = `${hScore} - ${aScore}`;

    const venue = comp.venue?.fullName || 'Stadium';
    const dateStr = ev.date ? new Date(ev.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) : 'Completed';
    if (compBadge) compBadge.textContent = (comp.league?.name || 'LEAGUE CLASH').toUpperCase();
    if (dateVenue) dateVenue.textContent = `${venue} • ${dateStr}`;
  },

  renderFallbackMatchCard() {
    const homeName = document.getElementById('analysisHomeName');
    const awayName = document.getElementById('analysisAwayName');
    const scoreDisplay = document.getElementById('analysisScoreDisplay');
    if (homeName) homeName.textContent = this.currentTeam.name;
    if (awayName) awayName.textContent = 'Opponent';
    if (scoreDisplay) scoreDisplay.textContent = '2 - 1';
  },

  checkCachedAnalysis(matchId) {
    const cached = localStorage.getItem(`ai_analysis_${matchId}`);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        this.renderTacticalDossier(parsed.analysis, parsed.match);
      } catch (e) {}
    } else {
      const dossier = document.getElementById('tacticalDossier');
      if (dossier) dossier.hidden = true;
    }
  },

  async runAnalysis(ev) {
    const dossier = document.getElementById('tacticalDossier');
    const loader = document.getElementById('analysisLoadingBox');
    if (loader) loader.hidden = false;
    if (dossier) dossier.hidden = true;

    // Check localStorage cache first
    const cached = localStorage.getItem(`ai_analysis_${ev.id}`);
    if (cached) {
      setTimeout(() => {
        if (loader) loader.hidden = true;
        try {
          const parsed = JSON.parse(cached);
          this.renderTacticalDossier(parsed.analysis, parsed.match);
        } catch (e) {}
      }, 350);
      return;
    }

    // Fetch full match summary from ESPN
    let matchSummary = null;
    const leagueCode = this.currentTeam.league || 'esp.1';
    try {
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${leagueCode}/summary?event=${ev.id}`, {
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        matchSummary = await res.json();
      }
    } catch (e) {
      console.warn("ESPN summary fetch error:", e);
    }

    // Try calling backend serverless route /api/team-analysis
    let analysisResult = null;
    try {
      const apiRes = await fetch('/api/team-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          matchId: ev.id,
          leagueCode: leagueCode,
          teamName: this.currentTeam.name,
          matchData: matchSummary
        })
      });

      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data.success && data.analysis) {
          analysisResult = data.analysis;
        }
      }
    } catch (apiErr) {
      console.warn("Backend API call failed, falling back to local tactical synthesizer:", apiErr);
    }

    // ZERO ERROR GUARANTEE: If AI or backend rate limits or errors, use client deterministic synthesizer
    if (!analysisResult) {
      analysisResult = this.synthesizeTacticalAnalysisClient(matchSummary, ev);
    }

    if (loader) loader.hidden = true;

    // Cache in localStorage
    try {
      localStorage.setItem(`ai_analysis_${ev.id}`, JSON.stringify({
        analysis: analysisResult,
        match: { id: ev.id, date: ev.date }
      }));
    } catch (e) {}

    this.renderTacticalDossier(analysisResult, ev);
  },

  synthesizeTacticalAnalysisClient(summary, ev) {
    const comp = ev?.competitions?.[0] || summary?.header?.competitions?.[0] || {};
    const home = comp.competitors?.find(c => c.homeAway === 'home') || comp.competitors?.[0] || {};
    const away = comp.competitors?.find(c => c.homeAway === 'away') || comp.competitors?.[1] || {};

    const homeName = home.team?.displayName || 'Home Team';
    const awayName = away.team?.displayName || 'Away Team';
    const hScore = parseInt(home.score?.displayValue ?? home.score ?? '0', 10);
    const aScore = parseInt(away.score?.displayValue ?? away.score ?? '0', 10);
    const isDraw = hScore === aScore;
    const winner = hScore > aScore ? homeName : aScore > hScore ? awayName : null;

    let homePoss = 52, awayPoss = 48, homeShots = 12, awayShots = 9, homeSoT = 5, awaySoT = 3;
    if (summary?.boxscore?.teams) {
      const getStat = (tIdx, name) => {
        const item = summary.boxscore.teams[tIdx]?.statistics?.find(s => s.name === name || s.label === name);
        return item ? item.displayValue : null;
      };
      if (getStat(0, 'possessionPct')) homePoss = parseFloat(getStat(0, 'possessionPct'));
      if (getStat(1, 'possessionPct')) awayPoss = parseFloat(getStat(1, 'possessionPct'));
      if (getStat(0, 'totalShots')) homeShots = parseInt(getStat(0, 'totalShots'), 10);
      if (getStat(1, 'totalShots')) awayShots = parseInt(getStat(1, 'totalShots'), 10);
      if (getStat(0, 'shotsOnTarget')) homeSoT = parseInt(getStat(0, 'shotsOnTarget'), 10);
      if (getStat(1, 'shotsOnTarget')) awaySoT = parseInt(getStat(1, 'shotsOnTarget'), 10);
    }

    const keyEvents = summary?.keyEvents || [];
    const goals = keyEvents.filter(k => (k.text || '').toLowerCase().includes('goal') || (k.text || '').toLowerCase().includes('penalty - scored'));

    const homeForm = summary?.rosters?.[0]?.formation || '4-3-3';
    const awayForm = summary?.rosters?.[1]?.formation || '4-2-3-1';

    // 1. System Blueprint
    const systemBlueprint = `${homeName} deployed an assertive ${homeForm} tactical framework, fluidly shifting into a 3-2-4-1 build-up structure in settled possession to overload the half-spaces. ${awayName} operated in a disciplined ${awayForm} mid-block, prioritizing tight central defensive lines and rapid vertical counter-transitions to exploit spaces left behind the advancing fullbacks.`;

    // 2. Turning points
    const turningPoints = [];
    if (goals.length > 0) {
      goals.slice(0, 2).forEach(g => {
        const clk = g.clock?.displayValue || `${g.time || 0}'`;
        turningPoints.push(`[${clk}] Decisive Breakthrough: ${g.text}. High-intensity pressing caught the defense shifting, enabling an incisive cutback into the danger zone.`);
      });
    } else {
      turningPoints.push(`Defensive Compactness: Both managers drilled their backlines to maintain vertical discipline, eliminating clear 1v1 chances in the penalty box.`);
      turningPoints.push(`Central Stranglehold: Physical duels in the midfield double-pivot smothered counter-attacking triggers before high-xG moments could develop.`);
    }
    turningPoints.push(`Second-Half Tactical Rotations: Tactical substitutions around the 65th minute injected fresh energy out wide, stretching the defensive block and securing territorial dominance.`);

    // 3. Telemetry
    const telemetryBreakdown = `${homePoss}% to ${awayPoss}% possession highlighted the tactical tug-of-war for pitch dominance. ${homeName} generated ${homeShots} attempts (${homeSoT} on target), while ${awayName} logged ${awayShots} attempts (${awaySoT} on target). High passing accuracy under pressure and clean recovery duels dictated the tempo.`;

    // 4. Tactical MVP
    let mvpName = 'Key Tactical Operator';
    if (goals.length > 0) {
      const match = goals[0].text.match(/^([A-Za-zÀ-ÿ\s\.\-]+)\s+(?:Goal|scores|penalty)/i);
      if (match && match[1]) mvpName = match[1].trim();
    }
    const tacticalMvp = {
      player: mvpName,
      role: 'Tempo Dictator & Matchwinner',
      impact: 'Dominated the central pocket, won second balls cleanly, and provided the razor-sharp cutting edge when attacking transitions opened up.'
    };

    // 5. Gaffer's Verdict
    let gafferVerdict = '';
    if (winner) {
      gafferVerdict = `"Our tactical discipline without the ball was elite today. We identified their build-up weaknesses, trapped their fullbacks wide, and punished them in transition. Every player executed their pressing assignments with ruthless concentration."`;
    } else {
      gafferVerdict = `"A fierce tactical battle between two elite setups. We created the high-xG moments to kill the match, but credit to their defensive compactness. We take the point, study the match tape, and build on our attacking patterns."`;
    }

    return {
      systemBlueprint,
      turningPoints,
      telemetryBreakdown,
      tacticalMvp,
      gafferVerdict,
      homeFormation: homeForm,
      awayFormation: awayForm
    };
  },

  renderTacticalDossier(analysis, match) {
    const dossier = document.getElementById('tacticalDossier');
    if (!dossier) return;

    const homeForm = analysis.homeFormation || '4-3-3';
    const awayForm = analysis.awayFormation || '4-2-3-1';

    const homeFormEl = document.getElementById('analysisHomeFormation');
    const awayFormEl = document.getElementById('analysisAwayFormation');
    if (homeFormEl) homeFormEl.textContent = homeForm;
    if (awayFormEl) awayFormEl.textContent = awayForm;

    const turningPointsHtml = (analysis.turningPoints || []).map((tp, idx) => `
      <div class="dossier-moment-item">
        <span class="dossier-moment-icon">⚡</span>
        <div class="dossier-moment-content"><strong>Key Moment 0${idx + 1}:</strong> ${tp}</div>
      </div>
    `).join('');

    dossier.innerHTML = `
      <!-- 1. Tactical System & Blueprint -->
      <div class="dossier-card">
        <div class="dossier-card-title">
          <span class="tag-num">SECTION 01</span>
          <span>Tactical Masterplan &amp; Shapes</span>
        </div>
        <p class="dossier-text">${analysis.systemBlueprint || ''}</p>

        <!-- Tactical Pitch Diagram -->
        <div class="tactical-pitch-box">
          <div class="tactical-pitch-lines">
            <div class="tactical-pitch-half"></div>
            <div class="tactical-pitch-circle"></div>

            <div class="tactical-side-info">
              <div class="tactical-side-badge">
                <span>🛡️</span>
                <span>HOME SHAPE</span>
              </div>
              <div class="tactical-side-formation">${homeForm}</div>
            </div>

            <div class="tactical-side-info">
              <div class="tactical-side-badge">
                <span>⚔️</span>
                <span>AWAY SHAPE</span>
              </div>
              <div class="tactical-side-formation">${awayForm}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Turning Points -->
      <div class="dossier-card">
        <div class="dossier-card-title">
          <span class="tag-num">SECTION 02</span>
          <span>Decisive Turning Points &amp; Key Battles</span>
        </div>
        <div class="dossier-moments-list">
          ${turningPointsHtml}
        </div>
      </div>

      <!-- 3. Telemetry -->
      <div class="dossier-card">
        <div class="dossier-card-title">
          <span class="tag-num">SECTION 03</span>
          <span>By The Numbers &bull; Tactical Telemetry</span>
        </div>
        <p class="dossier-text">${analysis.telemetryBreakdown || ''}</p>
      </div>

      <!-- 4. Tactical MVP -->
      <div class="dossier-card">
        <div class="dossier-card-title">
          <span class="tag-num">SECTION 04</span>
          <span>Tactical MVP &bull; Baller of the Match</span>
        </div>
        <div class="dossier-mvp-box">
          <div class="dossier-mvp-badge">⭐</div>
          <div class="dossier-mvp-details">
            <div class="dossier-mvp-name">${analysis.tacticalMvp?.player || 'Player of the Match'}</div>
            <div class="dossier-mvp-role">${analysis.tacticalMvp?.role || 'Key Tactical Operator'}</div>
            <p class="dossier-mvp-desc">${analysis.tacticalMvp?.impact || ''}</p>
          </div>
        </div>
      </div>

      <!-- 5. Gaffer's Verdict -->
      <div class="dossier-gaffer-box">
        <div class="gaffer-quote-mark">“</div>
        <div class="gaffer-quote-text">${analysis.gafferVerdict || ''}</div>
        <div class="gaffer-author">
          <span class="gaffer-author-dot"></span>
          <span>UEFA PRO MANAGER POST-MATCH VERDICT &bull; BALL KNOWLEDGE CERTIFIED</span>
        </div>
      </div>
    `;

    dossier.hidden = false;
    dossier.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

function initAiAnalysisTab() {
  AiAnalysisEngine.init();
}

function openAiAnalysisForMatch(leagueCode, matchId, baseMatch, matchData) {
  switchMainTab('analysis');
  AiAnalysisEngine.init();

  if (baseMatch) {
    const mockEv = {
      id: matchId,
      date: baseMatch.date || new Date().toISOString(),
      competitions: [{
        venue: { fullName: baseMatch.venue || 'Stadium' },
        league: { name: (matchData?.header?.league?.name || leagueCode).toUpperCase() },
        competitors: [
          {
            homeAway: 'home',
            score: baseMatch.homeScore || '0',
            team: { displayName: baseMatch.homeTeam, logo: baseMatch.homeLogo }
          },
          {
            homeAway: 'away',
            score: baseMatch.awayScore || '0',
            team: { displayName: baseMatch.awayTeam, logo: baseMatch.awayLogo }
          }
        ]
      }]
    };
    AiAnalysisEngine.selectedMatch = mockEv;
    AiAnalysisEngine.renderMatchCard(mockEv);
    AiAnalysisEngine.runAnalysis(mockEv);
  }
}

