/**
 * ============================================================
 * FOOTBALL LIFE: BECOME A PRO (BitLife Football RPG)
 * ============================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'football_life_save_v1';

  // ============================================================
  // FAMOUS FOOTBALL SUPERSTARS & NAME PAIRING FILTER
  // Golden Rule enforced:
  // - A player can have a famous first name with a normal surname.
  // - A player can have a normal first name with a famous surname.
  // - BUT NEVER two famous player names at the same time (e.g. no "Harry Bellingham").
  // - NEVER match an exact superstar's full name.
  // ============================================================

  const FAMOUS_SUPERSTARS = [
    { first: 'Lionel', last: 'Messi' },
    { first: 'Cristiano', last: 'Ronaldo' },
    { first: 'Kylian', last: 'Mbappe' },
    { first: 'Erling', last: 'Haaland' },
    { first: 'Harry', last: 'Kane' },
    { first: 'Jude', last: 'Bellingham' },
    { first: 'Bukayo', last: 'Saka' },
    { first: 'Cole', last: 'Palmer' },
    { first: 'Phil', last: 'Foden' },
    { first: 'Marcus', last: 'Rashford' },
    { first: 'Declan', last: 'Rice' },
    { first: 'Vinicius', last: 'Junior' },
    { first: 'Rodrygo', last: 'Goes' },
    { first: 'Neymar', last: 'Junior' },
    { first: 'Lamine', last: 'Yamal' },
    { first: 'Pedri', last: 'Gonzalez' },
    { first: 'Gavi', last: 'Paez' },
    { first: 'Nico', last: 'Williams' },
    { first: 'Dani', last: 'Olmo' },
    { first: 'Rodri', last: 'Hernandez' },
    { first: 'Antoine', last: 'Griezmann' },
    { first: 'Eduardo', last: 'Camavinga' },
    { first: 'Ousmane', last: 'Dembele' },
    { first: 'Aurelien', last: 'Tchouameni' },
    { first: 'Jamal', last: 'Musiala' },
    { first: 'Florian', last: 'Wirtz' },
    { first: 'Kai', last: 'Havertz' },
    { first: 'Thomas', last: 'Muller' },
    { first: 'Joshua', last: 'Kimmich' },
    { first: 'Leroy', last: 'Sane' },
    { first: 'Kevin', last: 'De Bruyne' },
    { first: 'Mohamed', last: 'Salah' },
    { first: 'Virgil', last: 'van Dijk' },
    { first: 'Trent', last: 'Alexander-Arnold' },
    { first: 'Alisson', last: 'Becker' },
    { first: 'Robert', last: 'Lewandowski' },
    { first: 'Luka', last: 'Modric' },
    { first: 'Karim', last: 'Benzema' },
    { first: 'Son', last: 'Heung-min' },
    { first: 'Victor', last: 'Osimhen' },
    { first: 'Alexander', last: 'Isak' },
    { first: 'Viktor', last: 'Gyokeres' },
    { first: 'Bruno', last: 'Fernandes' },
    { first: 'Bernardo', last: 'Silva' },
    { first: 'Rafael', last: 'Leao' },
    { first: 'Lautaro', last: 'Martinez' },
    { first: 'Julian', last: 'Alvarez' },
    { first: 'Enzo', last: 'Fernandez' },
    { first: 'Federico', last: 'Valverde' },
    { first: 'Zlatan', last: 'Ibrahimovic' },
    { first: 'Wayne', last: 'Rooney' },
    { first: 'David', last: 'Beckham' },
    { first: 'Thierry', last: 'Henry' },
    { first: 'Zinedine', last: 'Zidane' },
    { first: 'Ronaldinho', last: 'Gaucho' },
    { first: 'Ronaldo', last: 'Nazario' },
    { first: 'Aitana', last: 'Bonmati' },
    { first: 'Alexia', last: 'Putellas' },
    { first: 'Sam', last: 'Kerr' },
    { first: 'Lauren', last: 'James' },
    { first: 'Alessia', last: 'Russo' },
    { first: 'Leah', last: 'Williamson' },
    { first: 'Mary', last: 'Earps' },
    { first: 'Chloe', last: 'Kelly' },
    { first: 'Marta', last: 'Silva' },
    { first: 'Sophia', last: 'Smith' },
    { first: 'Trinity', last: 'Rodman' },
    { first: 'Alex', last: 'Morgan' },
    { first: 'Megan', last: 'Rapinoe' },
    { first: 'Asisat', last: 'Oshoala' }
  ];

  const FAMOUS_FIRST_NAMES = new Set([
    'lionel', 'leo', 'cristiano', 'kylian', 'erling', 'harry', 'jude', 'bukayo',
    'cole', 'phil', 'marcus', 'declan', 'vinicius', 'rodrygo', 'neymar', 'lamine',
    'pedri', 'gavi', 'nico', 'dani', 'rodri', 'antoine', 'eduardo', 'ousmane',
    'aurelien', 'jamal', 'florian', 'kai', 'joshua', 'leroy', 'kevin', 'mohamed',
    'virgil', 'trent', 'alisson', 'robert', 'luka', 'karim', 'heung-min', 'victor',
    'alexander', 'viktor', 'bruno', 'bernardo', 'rafael', 'lautaro', 'julian',
    'enzo', 'federico', 'zlatan', 'wayne', 'thierry', 'zinedine', 'ronaldinho',
    'aitana', 'alexia', 'sam', 'alessia', 'leah', 'chloe', 'marta', 'trinity'
  ]);

  const FAMOUS_LAST_NAMES = new Set([
    'messi', 'ronaldo', 'mbappe', 'haaland', 'kane', 'bellingham', 'saka', 'palmer',
    'foden', 'rashford', 'rice', 'junior', 'goes', 'yamal', 'olmo', 'griezmann',
    'camavinga', 'dembele', 'tchouameni', 'musiala', 'wirtz', 'havertz', 'kimmich',
    'sane', 'de bruyne', 'salah', 'van dijk', 'alexander-arnold', 'lewandowski',
    'modric', 'benzema', 'son', 'osimhen', 'isak', 'gyökeres', 'gyokeres', 'leao',
    'valverde', 'ibrahimovic', 'rooney', 'beckham', 'henry', 'zidane', 'gaucho',
    'bonmati', 'putellas', 'kerr', 'russo', 'williamson', 'earps', 'rodman',
    'rapinoe', 'oshoala'
  ]);

  const FAMOUS_SUPERSTAR_FULL_NAMES = new Set(
    FAMOUS_SUPERSTARS.map(p => `${p.first.toLowerCase()} ${p.last.toLowerCase()}`)
  );
  FAMOUS_SUPERSTAR_FULL_NAMES.add('leo messi');
  FAMOUS_SUPERSTAR_FULL_NAMES.add('cristiano ronaldo');
  FAMOUS_SUPERSTAR_FULL_NAMES.add('jude bellingham');
  FAMOUS_SUPERSTAR_FULL_NAMES.add('harry kane');
  FAMOUS_SUPERSTAR_FULL_NAMES.add('kylian mbappe');
  FAMOUS_SUPERSTAR_FULL_NAMES.add('erling haaland');
  FAMOUS_SUPERSTAR_FULL_NAMES.add('lamine yamal');

  function isForbiddenPair(first, last) {
    if (!first || !last) return false;
    const f = first.trim().toLowerCase();
    const l = last.trim().toLowerCase();
    const isFirstFam = FAMOUS_FIRST_NAMES.has(f);
    const isLastFam = FAMOUS_LAST_NAMES.has(l);

    // Rule 1: Cannot have BOTH a famous first name and famous last name
    if (isFirstFam && isLastFam) return true;

    // Rule 2: Cannot be exact full name of a superstar
    if (FAMOUS_SUPERSTAR_FULL_NAMES.has(`${f} ${l}`)) return true;

    return false;
  }

  // ============================================================
  // ALL WORLD COUNTRIES (A TO Z) WITH OFFICIAL FLAG EMOJI
  // ============================================================
  const WORLD_COUNTRIES = [
    { name: 'Afghanistan', flag: '🇦🇫', code: 'afg', region: 'arabic_middle_east' },
    { name: 'Albania', flag: '🇦🇱', code: 'alb', region: 'eastern_euro' },
    { name: 'Algeria', flag: '🇩🇿', code: 'dza', region: 'arabic_middle_east' },
    { name: 'Andorra', flag: '🇦🇩', code: 'and', region: 'hispanic' },
    { name: 'Angola', flag: '🇦🇴', code: 'ago', region: 'brazilian_luso' },
    { name: 'Antigua and Barbuda', flag: '🇦🇬', code: 'atg', region: 'british_anglo' },
    { name: 'Argentina', flag: '🇦🇷', code: 'arg', region: 'hispanic' },
    { name: 'Armenia', flag: '🇦🇲', code: 'arm', region: 'eastern_euro' },
    { name: 'Australia', flag: '🇦🇺', code: 'aus', region: 'british_anglo' },
    { name: 'Austria', flag: '🇦🇹', code: 'aut', region: 'germanic' },
    { name: 'Azerbaijan', flag: '🇦🇿', code: 'aze', region: 'eastern_euro' },
    { name: 'Bahamas', flag: '🇧🇸', code: 'bhs', region: 'british_anglo' },
    { name: 'Bahrain', flag: '🇧🇭', code: 'bhr', region: 'arabic_middle_east' },
    { name: 'Bangladesh', flag: '🇧🇩', code: 'bgd', region: 'south_asian' },
    { name: 'Barbados', flag: '🇧🇧', code: 'brb', region: 'british_anglo' },
    { name: 'Belarus', flag: '🇧🇾', code: 'blr', region: 'eastern_euro' },
    { name: 'Belgium', flag: '🇧🇪', code: 'bel', region: 'french' },
    { name: 'Belize', flag: '🇧🇿', code: 'blz', region: 'british_anglo' },
    { name: 'Benin', flag: '🇧🇯', code: 'ben', region: 'french' },
    { name: 'Bhutan', flag: '🇧🇹', code: 'btn', region: 'south_asian' },
    { name: 'Bolivia', flag: '🇧🇴', code: 'bol', region: 'hispanic' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦', code: 'bih', region: 'eastern_euro' },
    { name: 'Botswana', flag: '🇧🇼', code: 'bwa', region: 'african' },
    { name: 'Brazil', flag: '🇧🇷', code: 'bra', region: 'brazilian_luso' },
    { name: 'Brunei', flag: '🇧🇳', code: 'brn', region: 'southeast_asian' },
    { name: 'Bulgaria', flag: '🇧🇬', code: 'bgr', region: 'eastern_euro' },
    { name: 'Burkina Faso', flag: '🇧🇫', code: 'bfa', region: 'french' },
    { name: 'Burundi', flag: '🇧🇮', code: 'bdi', region: 'french' },
    { name: 'Cabo Verde', flag: '🇨🇻', code: 'cpv', region: 'brazilian_luso' },
    { name: 'Cambodia', flag: '🇰🇭', code: 'khm', region: 'southeast_asian' },
    { name: 'Cameroon', flag: '🇨🇲', code: 'cmr', region: 'french' },
    { name: 'Canada', flag: '🇨🇦', code: 'can', region: 'british_anglo' },
    { name: 'Central African Republic', flag: '🇨🇫', code: 'caf', region: 'french' },
    { name: 'Chad', flag: '🇹🇩', code: 'tcd', region: 'arabic_middle_east' },
    { name: 'Chile', flag: '🇨🇱', code: 'chl', region: 'hispanic' },
    { name: 'China', flag: '🇨🇳', code: 'chn', region: 'east_asian' },
    { name: 'Colombia', flag: '🇨🇴', code: 'col', region: 'hispanic' },
    { name: 'Comoros', flag: '🇰🇲', code: 'com', region: 'arabic_middle_east' },
    { name: 'Congo', flag: '🇨🇬', code: 'cog', region: 'french' },
    { name: 'Costa Rica', flag: '🇨🇷', code: 'cri', region: 'hispanic' },
    { name: 'Croatia', flag: '🇭🇷', code: 'hrv', region: 'eastern_euro' },
    { name: 'Cuba', flag: '🇨🇺', code: 'cub', region: 'hispanic' },
    { name: 'Cyprus', flag: '🇨🇾', code: 'cyp', region: 'eastern_euro' },
    { name: 'Czech Republic', flag: '🇨🇿', code: 'cze', region: 'eastern_euro' },
    { name: 'DR Congo', flag: '🇨🇩', code: 'cod', region: 'french' },
    { name: 'Denmark', flag: '🇩🇰', code: 'dnk', region: 'germanic' },
    { name: 'Djibouti', flag: '🇩🇯', code: 'dji', region: 'arabic_middle_east' },
    { name: 'Dominica', flag: '🇩🇲', code: 'dma', region: 'british_anglo' },
    { name: 'Dominican Republic', flag: '🇩🇴', code: 'dom', region: 'hispanic' },
    { name: 'Ecuador', flag: '🇪🇨', code: 'ecu', region: 'hispanic' },
    { name: 'Egypt', flag: '🇪🇬', code: 'egy', region: 'arabic_middle_east' },
    { name: 'El Salvador', flag: '🇸🇻', code: 'slv', region: 'hispanic' },
    { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: 'eng', region: 'british_anglo' },
    { name: 'Equatorial Guinea', flag: '🇬🇶', code: 'gnq', region: 'hispanic' },
    { name: 'Eritrea', flag: '🇪🇷', code: 'eri', region: 'african' },
    { name: 'Estonia', flag: '🇪🇪', code: 'est', region: 'eastern_euro' },
    { name: 'Eswatini', flag: '🇸🇿', code: 'swz', region: 'african' },
    { name: 'Ethiopia', flag: '🇪🇹', code: 'eth', region: 'african' },
    { name: 'Fiji', flag: '🇫🇯', code: 'fji', region: 'british_anglo' },
    { name: 'Finland', flag: '🇫🇮', code: 'fin', region: 'germanic' },
    { name: 'France', flag: '🇫🇷', code: 'fra', region: 'french' },
    { name: 'Gabon', flag: '🇬🇦', code: 'gab', region: 'french' },
    { name: 'Gambia', flag: '🇬🇲', code: 'gmb', region: 'african' },
    { name: 'Georgia', flag: '🇬🇪', code: 'geo', region: 'eastern_euro' },
    { name: 'Germany', flag: '🇩🇪', code: 'ger', region: 'germanic' },
    { name: 'Ghana', flag: '🇬🇭', code: 'gha', region: 'african' },
    { name: 'Greece', flag: '🇬🇷', code: 'gre', region: 'eastern_euro' },
    { name: 'Grenada', flag: '🇬🇩', code: 'grd', region: 'british_anglo' },
    { name: 'Guatemala', flag: '🇬🇹', code: 'gtm', region: 'hispanic' },
    { name: 'Guinea', flag: '🇬🇳', code: 'gin', region: 'french' },
    { name: 'Guinea-Bissau', flag: '🇬🇼', code: 'gnb', region: 'brazilian_luso' },
    { name: 'Guyana', flag: '🇬🇾', code: 'guy', region: 'british_anglo' },
    { name: 'Haiti', flag: '🇭🇹', code: 'hti', region: 'french' },
    { name: 'Honduras', flag: '🇭🇳', code: 'hnd', region: 'hispanic' },
    { name: 'Hong Kong', flag: '🇭🇰', code: 'hkg', region: 'east_asian' },
    { name: 'Hungary', flag: '🇭🇺', code: 'hun', region: 'eastern_euro' },
    { name: 'Iceland', flag: '🇮🇸', code: 'isl', region: 'germanic' },
    { name: 'India', flag: '🇮🇳', code: 'ind', region: 'south_asian' },
    { name: 'Indonesia', flag: '🇮🇩', code: 'idn', region: 'southeast_asian' },
    { name: 'Iran', flag: '🇮🇷', code: 'irn', region: 'arabic_middle_east' },
    { name: 'Iraq', flag: '🇮🇶', code: 'irq', region: 'arabic_middle_east' },
    { name: 'Ireland', flag: '🇮🇪', code: 'irl', region: 'british_anglo' },
    { name: 'Israel', flag: '🇮🇱', code: 'isr', region: 'eastern_euro' },
    { name: 'Italy', flag: '🇮🇹', code: 'ita', region: 'italian' },
    { name: 'Ivory Coast', flag: '🇨🇮', code: 'civ', region: 'french' },
    { name: 'Jamaica', flag: '🇯🇲', code: 'jam', region: 'british_anglo' },
    { name: 'Japan', flag: '🇯🇵', code: 'jpn', region: 'east_asian' },
    { name: 'Jordan', flag: '🇯🇴', code: 'jor', region: 'arabic_middle_east' },
    { name: 'Kazakhstan', flag: '🇰🇿', code: 'kaz', region: 'eastern_euro' },
    { name: 'Kenya', flag: '🇰🇪', code: 'ken', region: 'african' },
    { name: 'Kosovo', flag: '🇽🇰', code: 'xkx', region: 'eastern_euro' },
    { name: 'Kuwait', flag: '🇰🇼', code: 'kwt', region: 'arabic_middle_east' },
    { name: 'Kyrgyzstan', flag: '🇰🇬', code: 'kgz', region: 'eastern_euro' },
    { name: 'Laos', flag: '🇱🇦', code: 'lao', region: 'southeast_asian' },
    { name: 'Latvia', flag: '🇱🇻', code: 'lva', region: 'eastern_euro' },
    { name: 'Lebanon', flag: '🇱🇧', code: 'lbn', region: 'arabic_middle_east' },
    { name: 'Lesotho', flag: '🇱🇸', code: 'lso', region: 'african' },
    { name: 'Liberia', flag: '🇱🇷', code: 'lbr', region: 'african' },
    { name: 'Libya', flag: '🇱🇾', code: 'lby', region: 'arabic_middle_east' },
    { name: 'Liechtenstein', flag: '🇱🇮', code: 'lie', region: 'germanic' },
    { name: 'Lithuania', flag: '🇱🇹', code: 'ltu', region: 'eastern_euro' },
    { name: 'Luxembourg', flag: '🇱🇺', code: 'lux', region: 'french' },
    { name: 'Madagascar', flag: '🇲🇬', code: 'mdg', region: 'french' },
    { name: 'Malawi', flag: '🇲🇼', code: 'mwi', region: 'african' },
    { name: 'Malaysia', flag: '🇲🇾', code: 'mys', region: 'southeast_asian' },
    { name: 'Maldives', flag: '🇲🇻', code: 'mdv', region: 'south_asian' },
    { name: 'Mali', flag: '🇲🇱', code: 'mli', region: 'french' },
    { name: 'Malta', flag: '🇲🇹', code: 'mlt', region: 'italian' },
    { name: 'Mauritania', flag: '🇲🇷', code: 'mrt', region: 'arabic_middle_east' },
    { name: 'Mauritius', flag: '🇲🇺', code: 'mus', region: 'british_anglo' },
    { name: 'Mexico', flag: '🇲🇽', code: 'mex', region: 'hispanic' },
    { name: 'Moldova', flag: '🇲🇩', code: 'mda', region: 'eastern_euro' },
    { name: 'Monaco', flag: '🇲🇨', code: 'mco', region: 'french' },
    { name: 'Mongolia', flag: '🇲🇳', code: 'mng', region: 'east_asian' },
    { name: 'Montenegro', flag: '🇲🇪', code: 'mne', region: 'eastern_euro' },
    { name: 'Morocco', flag: '🇲🇦', code: 'mar', region: 'arabic_middle_east' },
    { name: 'Mozambique', flag: '🇲🇿', code: 'moz', region: 'brazilian_luso' },
    { name: 'Myanmar', flag: '🇲🇲', code: 'mmr', region: 'southeast_asian' },
    { name: 'Namibia', flag: '🇳🇦', code: 'nam', region: 'african' },
    { name: 'Nepal', flag: '🇳🇵', code: 'npl', region: 'south_asian' },
    { name: 'Netherlands', flag: '🇳🇱', code: 'ned', region: 'germanic' },
    { name: 'New Zealand', flag: '🇳🇿', code: 'nzl', region: 'british_anglo' },
    { name: 'Nicaragua', flag: '🇳🇮', code: 'nic', region: 'hispanic' },
    { name: 'Niger', flag: '🇳🇪', code: 'ner', region: 'french' },
    { name: 'Nigeria', flag: '🇳🇬', code: 'nga', region: 'african' },
    { name: 'North Korea', flag: '🇰🇵', code: 'prk', region: 'east_asian' },
    { name: 'North Macedonia', flag: '🇲🇰', code: 'mkd', region: 'eastern_euro' },
    { name: 'Northern Ireland', flag: '🇬🇧', code: 'nir', region: 'british_anglo' },
    { name: 'Norway', flag: '🇳🇴', code: 'nor', region: 'germanic' },
    { name: 'Oman', flag: '🇴🇲', code: 'omn', region: 'arabic_middle_east' },
    { name: 'Pakistan', flag: '🇵🇰', code: 'pak', region: 'south_asian' },
    { name: 'Palestine', flag: '🇵🇸', code: 'pse', region: 'arabic_middle_east' },
    { name: 'Panama', flag: '🇵🇦', code: 'pan', region: 'hispanic' },
    { name: 'Papua New Guinea', flag: '🇵🇬', code: 'png', region: 'british_anglo' },
    { name: 'Paraguay', flag: '🇵🇾', code: 'pry', region: 'hispanic' },
    { name: 'Peru', flag: '🇵🇪', code: 'per', region: 'hispanic' },
    { name: 'Philippines', flag: '🇵🇭', code: 'phl', region: 'southeast_asian' },
    { name: 'Poland', flag: '🇵🇱', code: 'pol', region: 'eastern_euro' },
    { name: 'Portugal', flag: '🇵🇹', code: 'por', region: 'brazilian_luso' },
    { name: 'Puerto Rico', flag: '🇵🇷', code: 'pri', region: 'hispanic' },
    { name: 'Qatar', flag: '🇶🇦', code: 'qat', region: 'arabic_middle_east' },
    { name: 'Romania', flag: '🇷🇴', code: 'rou', region: 'eastern_euro' },
    { name: 'Russia', flag: '🇷🇺', code: 'rus', region: 'eastern_euro' },
    { name: 'Rwanda', flag: '🇷🇼', code: 'rwa', region: 'african' },
    { name: 'Saint Kitts and Nevis', flag: '🇰🇳', code: 'kna', region: 'british_anglo' },
    { name: 'Saint Lucia', flag: '🇱🇨', code: 'lca', region: 'british_anglo' },
    { name: 'Saint Vincent', flag: '🇻🇨', code: 'vct', region: 'british_anglo' },
    { name: 'Samoa', flag: '🇼🇸', code: 'wsm', region: 'british_anglo' },
    { name: 'San Marino', flag: '🇸🇲', code: 'smr', region: 'italian' },
    { name: 'Saudi Arabia', flag: '🇸🇦', code: 'ksa', region: 'arabic_middle_east' },
    { name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', code: 'sco', region: 'british_anglo' },
    { name: 'Senegal', flag: '🇸🇳', code: 'sen', region: 'french' },
    { name: 'Serbia', flag: '🇷🇸', code: 'srb', region: 'eastern_euro' },
    { name: 'Seychelles', flag: '🇸🇨', code: 'syc', region: 'french' },
    { name: 'Sierra Leone', flag: '🇸🇱', code: 'sle', region: 'african' },
    { name: 'Singapore', flag: '🇸🇬', code: 'sgp', region: 'southeast_asian' },
    { name: 'Slovakia', flag: '🇸🇰', code: 'svk', region: 'eastern_euro' },
    { name: 'Slovenia', flag: '🇸🇮', code: 'svn', region: 'eastern_euro' },
    { name: 'Somalia', flag: '🇸🇴', code: 'som', region: 'arabic_middle_east' },
    { name: 'South Africa', flag: '🇿🇦', code: 'rsa', region: 'african' },
    { name: 'South Korea', flag: '🇰🇷', code: 'kor', region: 'east_asian' },
    { name: 'South Sudan', flag: '🇸🇸', code: 'ssd', region: 'african' },
    { name: 'Spain', flag: '🇪🇸', code: 'esp', region: 'hispanic' },
    { name: 'Sri Lanka', flag: '🇱🇰', code: 'lka', region: 'south_asian' },
    { name: 'Sudan', flag: '🇸🇩', code: 'sdn', region: 'arabic_middle_east' },
    { name: 'Suriname', flag: '🇸🇷', code: 'sur', region: 'germanic' },
    { name: 'Sweden', flag: '🇸🇪', code: 'swe', region: 'germanic' },
    { name: 'Switzerland', flag: '🇨🇭', code: 'sui', region: 'germanic' },
    { name: 'Syria', flag: '🇸🇾', code: 'syr', region: 'arabic_middle_east' },
    { name: 'Taiwan', flag: '🇹🇼', code: 'twn', region: 'east_asian' },
    { name: 'Tajikistan', flag: '🇹🇯', code: 'tjk', region: 'eastern_euro' },
    { name: 'Tanzania', flag: '🇹🇿', code: 'tza', region: 'african' },
    { name: 'Thailand', flag: '🇹🇭', code: 'tha', region: 'southeast_asian' },
    { name: 'Togo', flag: '🇹🇬', code: 'tgo', region: 'french' },
    { name: 'Trinidad and Tobago', flag: '🇹🇹', code: 'tto', region: 'british_anglo' },
    { name: 'Tunisia', flag: '🇹🇳', code: 'tun', region: 'arabic_middle_east' },
    { name: 'Turkey', flag: '🇹🇷', code: 'tur', region: 'eastern_euro' },
    { name: 'Turkmenistan', flag: '🇹🇲', code: 'tkm', region: 'eastern_euro' },
    { name: 'Uganda', flag: '🇺🇬', code: 'uga', region: 'african' },
    { name: 'Ukraine', flag: '🇺🇦', code: 'ukr', region: 'eastern_euro' },
    { name: 'United Arab Emirates', flag: '🇦🇪', code: 'uae', region: 'arabic_middle_east' },
    { name: 'United States', flag: '🇺🇸', code: 'usa', region: 'british_anglo' },
    { name: 'Uruguay', flag: '🇺🇾', code: 'uru', region: 'hispanic' },
    { name: 'Uzbekistan', flag: '🇺🇿', code: 'uzb', region: 'eastern_euro' },
    { name: 'Vanuatu', flag: '🇻🇺', code: 'vut', region: 'british_anglo' },
    { name: 'Venezuela', flag: '🇻🇪', code: 'ven', region: 'hispanic' },
    { name: 'Vietnam', flag: '🇻🇳', code: 'vnm', region: 'southeast_asian' },
    { name: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', code: 'wal', region: 'british_anglo' },
    { name: 'Yemen', flag: '🇾🇪', code: 'yem', region: 'arabic_middle_east' },
    { name: 'Zambia', flag: '🇿🇲', code: 'zmb', region: 'african' },
    { name: 'Zimbabwe', flag: '🇿🇼', code: 'zwe', region: 'african' }
  ];

  // Alias for backward compatibility
  const NATIONS = WORLD_COUNTRIES;

  // Regional Authentic Names Database
  const REGIONAL_NAMES = {
    british_anglo: {
      maleFirst: ['Jack', 'Oliver', 'Harry', 'George', 'Charlie', 'Liam', 'Jude', 'Noah', 'Cole', 'Marcus', 'Declan', 'Thomas', 'James', 'William', 'Alfie', 'Archie', 'Mason', 'Callum', 'Ethan', 'Lucas', 'Harvey'],
      femaleFirst: ['Olivia', 'Amelia', 'Leah', 'Lucy', 'Alessia', 'Ella', 'Lauren', 'Chloe', 'Beth', 'Emily', 'Mia', 'Grace', 'Freya', 'Sophie', 'Ruby', 'Isla', 'Millie', 'Ava', 'Jessica', 'Poppy'],
      last: ['Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Johnson', 'Davies', 'Robinson', 'Wright', 'Thompson', 'Evans', 'Walker', 'White', 'Roberts', 'Green', 'Hall', 'Wood', 'Jackson', 'Clarke', 'Hughes', 'Edwards', 'Turner', 'Campbell', 'Kane', 'Bellingham', 'Palmer', 'Saka', 'Sterling', 'Foden', 'Russo', 'Bronze', 'Mead']
    },
    hispanic: {
      maleFirst: ['Mateo', 'Lucas', 'Julian', 'Angel', 'Enzo', 'Lautaro', 'Paulo', 'Lamine', 'Gavi', 'Pedri', 'Nico', 'Ferran', 'Dani', 'Alejandro', 'Thiago', 'Santiago', 'Carlos', 'Diego', 'Sebastian', 'Javier', 'Gonzalo'],
      femaleFirst: ['Sofia', 'Valentina', 'Aitana', 'Alexia', 'Salma', 'Jenni', 'Ona', 'Mapi', 'Cata', 'Lucia', 'Camila', 'Mariana', 'Isabella', 'Elena', 'Florencia', 'Estefania', 'Martina', 'Valeria'],
      last: ['Fernandez', 'Martinez', 'Alvarez', 'Romero', 'Acuna', 'Dybala', 'Garcia', 'Hernandez', 'Navarro', 'Torres', 'Ramirez', 'Cruz', 'Gomez', 'Morales', 'Reyes', 'Diaz', 'Gutierrez', 'Castillo', 'Vargas', 'Yamal', 'Bonmati', 'Putellas', 'Olmo']
    },
    brazilian_luso: {
      maleFirst: ['Gabriel', 'Lucas', 'Vinicius', 'Rodrygo', 'Casemiro', 'Thiago', 'Cristiano', 'Bruno', 'Bernardo', 'Rafael', 'Joao', 'Ruben', 'Matheus', 'Felipe', 'Arthur', 'Danilo', 'Renato', 'Eduardo', 'Guilherme'],
      femaleFirst: ['Marta', 'Debinha', 'Bia', 'Geyse', 'Ary', 'Tamires', 'Jessica', 'Kika', 'Carole', 'Tatiana', 'Ana', 'Beatriz', 'Carolina', 'Mariana', 'Camila', 'Luana', 'Bruna'],
      last: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Soares', 'Fernandes', 'Dias', 'Leao', 'Ronaldo']
    },
    french: {
      maleFirst: ['Kylian', 'Antoine', 'Eduardo', 'Ousmane', 'Bradley', 'Aurelien', 'Lucas', 'Theo', 'Hugo', 'Jules', 'Louis', 'Arthur', 'Leo', 'Gabriel', 'Maxime', 'Clement', 'Paul', 'Adrien', 'Romain'],
      femaleFirst: ['Wendie', 'Kadidiatou', 'Delphine', 'Grace', 'Eugenie', 'Marie', 'Lea', 'Emma', 'Chloe', 'Camille', 'Ines', 'Manon', 'Jade', 'Louise', 'Sarah', 'Amandine', 'Clara'],
      last: ['Mbappe', 'Griezmann', 'Camavinga', 'Dembele', 'Barcola', 'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux']
    },
    germanic: {
      maleFirst: ['Jamal', 'Florian', 'Kai', 'Thomas', 'Joshua', 'Leroy', 'Leon', 'Lukas', 'Maximilian', 'Felix', 'Jonas', 'Paul', 'Elias', 'Finn', 'Niklas', 'Moritz', 'Jan', 'Timo', 'Lars', 'Sven'],
      femaleFirst: ['Alexandra', 'Jule', 'Lea', 'Giulia', 'Klara', 'Merle', 'Mia', 'Emma', 'Hannah', 'Sofia', 'Emilia', 'Lina', 'Marie', 'Mila', 'Ella', 'Lena', 'Laura', 'Johanna'],
      last: ['Musiala', 'Wirtz', 'Havertz', 'Muller', 'Kimmich', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schroder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun']
    },
    italian: {
      maleFirst: ['Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Andrea', 'Gabriele', 'Matteo', 'Tommaso', 'Riccardo', 'Edoardo', 'Federico', 'Marco', 'Nicolo', 'Gianluigi'],
      femaleFirst: ['Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia', 'Greta', 'Beatrice', 'Anna', 'Chiara', 'Sara', 'Elena', 'Martina', 'Sofia', 'Camilla'],
      last: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti']
    },
    eastern_euro: {
      maleFirst: ['Luka', 'Mateo', 'Ivan', 'Nikola', 'Marko', 'Filip', 'Stefan', 'Dusan', 'Aleksandar', 'Piotr', 'Jan', 'Jakub', 'Kacper', 'Szymon', 'Andriy', 'Mykhailo', 'Taras', 'Dmytro'],
      femaleFirst: ['Ana', 'Marija', 'Petra', 'Iva', 'Milica', 'Jelena', 'Zuzanna', 'Julia', 'Maja', 'Lena', 'Olena', 'Anastasia', 'Daria', 'Kateryna', 'Sofia', 'Ivana'],
      last: ['Modric', 'Kovacic', 'Brozovic', 'Perisic', 'Gvardiol', 'Novak', 'Horvat', 'Kowalski', 'Wisniewski', 'Wojcik', 'Kaminski', 'Lewandowski', 'Jovanovic', 'Petrovic', 'Djordjevic', 'Shevchenko', 'Boyko', 'Kravchenko', 'Popov', 'Ivanov']
    },
    african: {
      maleFirst: ['Victor', 'Ademola', 'Samuel', 'Kelechi', 'Alex', 'Wilfred', 'Emmanuel', 'Chidi', 'Kofi', 'Kwame', 'Sadio', 'Kalidou', 'Amadou', 'Sekou', 'Ibrahim', 'Ousmane', 'Moussa', 'Joseph', 'David', 'John'],
      femaleFirst: ['Asisat', 'Rasheedat', 'Chiamaka', 'Michelle', 'Toni', 'Blessing', 'Chioma', 'Ngozi', 'Fatou', 'Amina', 'Mariam', 'Zainab', 'Grace', 'Faith', 'Mercy', 'Joy'],
      last: ['Osimhen', 'Lookman', 'Chukwueze', 'Ndidi', 'Iwobi', 'Oshoala', 'Mane', 'Koulibaly', 'Diallo', 'Traore', 'Toure', 'Keita', 'Mensah', 'Appiah', 'Boateng', 'Okafor', 'Adeyemi', 'Balogun', 'Eze', 'Okoye', 'Kamara', 'Sesay']
    },
    arabic_middle_east: {
      maleFirst: ['Mohamed', 'Omar', 'Ali', 'Ahmed', 'Youssef', 'Hamza', 'Ziad', 'Tariq', 'Karim', 'Sami', 'Hassan', 'Hussein', 'Mustafa', 'Bilal', 'Khaled', 'Nasser', 'Fahad', 'Salem'],
      femaleFirst: ['Fatima', 'Maryam', 'Aisha', 'Nour', 'Salma', 'Layla', 'Sara', 'Hana', 'Yasmin', 'Rania', 'Dina', 'Lina', 'Maya', 'Zahra', 'Reem', 'Malak'],
      last: ['Salah', 'Hakimi', 'Ziyech', 'Bounou', 'Mahrez', 'Bennacer', 'Al-Dawsari', 'Al-Shehri', 'Kanno', 'Hassan', 'Ibrahim', 'Mansour', 'Kareem', 'Darwish', 'El-Sayed', 'Mostafa', 'Abdelrahman', 'Farouk']
    },
    east_asian: {
      maleFirst: ['Kaoru', 'Takefusa', 'Wataru', 'Daichi', 'Ritsu', 'Takumi', 'Min-jae', 'Heung-min', 'Kang-in', 'Jun-ho', 'Hyun-woo', 'Wei', 'Jun', 'Hao', 'Chen', 'Yuki', 'Ren', 'Haruto'],
      femaleFirst: ['Yui', 'Hinata', 'Fuka', 'Mina', 'Jun', 'Saki', 'Ji-so', 'So-hyun', 'Eun-ji', 'Min-ji', 'Ying', 'Ling', 'Mei', 'Yuna', 'Aoi', 'Hina', 'Rin'],
      last: ['Mitoma', 'Kubo', 'Endo', 'Kamada', 'Doan', 'Minamino', 'Son', 'Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Tanaka', 'Sato', 'Suzuki', 'Takahashi', 'Watanabe']
    },
    southeast_asian: {
      maleFirst: ['Pratama', 'Asnawi', 'Marselino', 'Witan', 'Chanathip', 'Teerasil', 'Supachok', 'Nguyen', 'Quang', 'Van', 'Safawi', 'Arif', 'Luqman', 'Bambang', 'Rizky', 'Bagus'],
      femaleFirst: ['Nur', 'Siti', 'Dewi', 'Ayu', 'Kanya', 'Chutikan', 'Thi', 'Mai', 'Linh', 'Farah', 'Ain', 'Intan', 'Putri', 'Sari', 'Indah'],
      last: ['Arhan', 'Mangkualam', 'Ferdinan', 'Songkrasin', 'Dangda', 'Sarachat', 'Hai', 'Hau', 'Toan', 'Rasid', 'Aiman', 'Hakim', 'Santoso', 'Wijaya', 'Kusuma', 'Pratama', 'Utomo']
    },
    south_asian: {
      maleFirst: ['Sunil', 'Gurpreet', 'Sandesh', 'Anirudh', 'Sahal', 'Lallianzuala', 'Liston', 'Manvir', 'Rahul', 'Arjun', 'Rohan', 'Kabir', 'Aditya', 'Aarav', 'Dev', 'Zayan'],
      femaleFirst: ['Bala', 'Manisha', 'Ashalata', 'Aditi', 'Sanju', 'Anju', 'Priya', 'Ananya', 'Diya', 'Ishita', 'Kavya', 'Riya', 'Sneha', 'Tanvi', 'Tara'],
      last: ['Chhetri', 'Sandhu', 'Jhingan', 'Thapa', 'Samad', 'Chhangte', 'Colaco', 'Singh', 'Sharma', 'Patel', 'Kumar', 'Verma', 'Das', 'Khan', 'Ahmed', 'Ali', 'Chatterjee', 'Mukherjee']
    }
  };

  // 9 Pitch Positions including Left-Back and Right-Back
  const POSITIONS = [
    { id: 'ST', name: 'Striker / Forward', icon: '⚡' },
    { id: 'LW', name: 'Left Winger', icon: '🏃' },
    { id: 'RW', name: 'Right Winger', icon: '💨' },
    { id: 'CAM', name: 'Attacking Midfielder', icon: '🎯' },
    { id: 'CM', name: 'Box-to-Box Midfielder', icon: '⚙️' },
    { id: 'LB', name: 'Left-Back', icon: '🛡️' },
    { id: 'RB', name: 'Right-Back', icon: '🛡️' },
    { id: 'CB', name: 'Centre-Back', icon: '🧱' },
    { id: 'GK', name: 'Goalkeeper', icon: '🧤' }
  ];

  // Clubs database per tier and gender
  const CLUBS = {
    male: {
      0: ['Street Cages FC', 'Local School XI', 'Boyhood Sunday FC'],
      1: ['District Youth FC', 'County Athletic Youth', 'Regional Prospects'],
      2: ['La Masia Youth', 'Hale End Academy', 'Santos Youth', 'Ajax Academy', 'Sporting CP Youth', 'Bayern Junior Team'],
      3: ['Feyenoord', 'Benfica', 'Sporting CP', 'Brighton', 'Monaco', 'Real Sociedad', 'Atalanta', 'Sevilla'],
      4: ['Arsenal', 'Chelsea', 'Liverpool', 'Tottenham Hotspur', 'Atletico Madrid', 'Juventus', 'Inter Milan', 'Borussia Dortmund', 'Paris Saint-Germain', 'Aston Villa'],
      5: ['Real Madrid', 'Manchester City', 'FC Barcelona', 'Bayern Munich'],
      twilight: ['Inter Miami', 'Al-Hilal', 'Al-Nassr', 'LA Galaxy', 'Boyhood Club']
    },
    female: {
      0: ['Girls Grassroots FC', 'School Girls XI', 'Local Community United'],
      1: ['County Girls Academy', 'Regional Talent Hub', 'Junior District XI'],
      2: ['Barça Femení Youth', 'Chelsea Girls Academy', 'Lyon Féminin Youth', 'Wolfsburg Junior', 'North Carolina Youth'],
      3: ['Everton Women', 'Levante Femenino', 'Paris FC', 'Hoffenheim', 'Real Sociedad Femenino', 'Aston Villa Women'],
      4: ['Arsenal Women', 'Chelsea FC Women', 'Bayern Munich Women', 'Wolfsburg', 'Manchester City Women', 'Portland Thorns'],
      5: ['FC Barcelona Femení', 'Olympique Lyonnais Féminin', 'Chelsea FC Women'],
      twilight: ['Angel City FC', 'San Diego Wave', 'Gotham FC', 'Boyhood Club']
    }
  };

  // State
  let player = null;

  // Helpers
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function formatMoney(amount) {
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount}`;
  }

  function saveGame() {
    if (!player) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    } catch (e) {
      console.warn('Could not save Football Life state:', e);
    }
  }

  function loadGame() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load Football Life save:', e);
    }
    return null;
  }

  function clearSave() {
    localStorage.removeItem(STORAGE_KEY);
    player = null;
  }

  // Generate a clean player name that never mixes two famous player names
  function generateCleanPlayerName(country, genderChoice = 'male') {
    const regionKey = (country && country.region && REGIONAL_NAMES[country.region]) 
      ? country.region 
      : 'british_anglo';
    const pool = REGIONAL_NAMES[regionKey] || REGIONAL_NAMES.british_anglo;
    const isMale = genderChoice === 'male';
    const firstList = isMale ? pool.maleFirst : pool.femaleFirst;
    const lastList = pool.last;

    // Retry loop enforcing:
    // 1. Never both famous at the same time (e.g. no Harry Bellingham)
    // 2. Never an exact real superstar name (e.g. no Jude Bellingham)
    for (let attempts = 0; attempts < 60; attempts++) {
      const first = getRandomItem(firstList);
      const last = getRandomItem(lastList);
      if (!isForbiddenPair(first, last)) {
        return { first, last };
      }
    }

    // Fallback: pick strictly non-famous names
    const safeFirsts = firstList.filter(f => !FAMOUS_FIRST_NAMES.has(f.toLowerCase()));
    const safeLasts = lastList.filter(l => !FAMOUS_LAST_NAMES.has(l.toLowerCase()));
    return {
      first: getRandomItem(safeFirsts.length ? safeFirsts : firstList),
      last: getRandomItem(safeLasts.length ? safeLasts : lastList)
    };
  }

  // Generate a random character
  function generateRandomCharacter(genderChoice = 'male', countryOverride = null) {
    const country = countryOverride || WORLD_COUNTRIES.find(c => c.name === 'England') || getRandomItem(WORLD_COUNTRIES);
    const { first, last } = generateCleanPlayerName(country, genderChoice);
    const pos = getRandomItem(POSITIONS);

    return {
      first,
      last,
      gender: genderChoice,
      country,
      position: pos.id,
      preferredFoot: Math.random() > 0.3 ? 'Right' : 'Left'
    };
  }

  // ==========================================
  // INITIALIZE A NEW CAREER
  // ==========================================
  function createNewPlayer(data) {
    const isMale = data.gender === 'male';
    const starterClub = getRandomItem(CLUBS[data.gender][0]);
    const avatar = isMale ? '👦' : '👧';

    player = {
      name: `${data.first} ${data.last}`.trim(),
      gender: data.gender,
      country: data.country,
      position: data.position,
      preferredFoot: data.preferredFoot || 'Right',
      avatar: avatar,
      age: 8,
      ovr: 48 + Math.floor(Math.random() * 6), // 48 - 53
      fitness: 90,
      morale: 85,
      fame: 5,
      wealth: 50,
      weeklyWage: 0,
      club: starterClub,
      clubTier: 0,
      trophies: [],
      careerStats: { appearances: 0, goals: 0, assists: 0, cleanSheets: 0 },
      awards: [],
      history: [
        { age: 8, text: `You were born in <b>${data.country.name}</b> ${data.country.flag}. As an 8-year-old kid, you kicked your first football on the streets and joined <b>${starterClub}</b>!`, type: 'life' }
      ],
      isRetired: false,
      contractYears: 0,
      agentType: 'None'
    };

    saveGame();
    renderGameUI();
  }

  // ==========================================
  // SCENARIO EVENT POOL (45+ Rich Decisions)
  // ==========================================
  const SCENARIOS = [
    // Age 8-12: Grassroots
    {
      id: 'rainy_grassroots',
      minAge: 8,
      maxAge: 11,
      icon: '🌧️',
      category: 'Grassroots Match',
      title: 'The Rain-Soaked Match',
      story: 'It is torrential rain and the grass pitch has turned into mud. The coach asks you to step up in midfield. How do you play?',
      choices: [
        { text: 'Dribble fearlessly through the mud puddles', outcome: 'Your raw street skills shine! The parents on the sideline cheer wildly.', changes: { ovr: 2, fame: 3, fitness: -5 } },
        { text: 'Play safe, one-touch crisp passes', outcome: 'Your football IQ and tactical maturity impress the referee and coaches.', changes: { ovr: 1, morale: 5 } },
        { text: 'Slide tackle every opponent aggressively', outcome: 'You get covered in mud and receive a stern lecture from the referee.', changes: { morale: -5, fitness: 5, ovr: 1 } }
      ]
    },
    {
      id: 'expensive_boots',
      minAge: 9,
      maxAge: 12,
      icon: '👟',
      category: 'Family & Boots',
      title: 'The Dream Cleats',
      story: 'The latest neon football boots worn by your idol just dropped in the shop, but they cost a lot of money. Your family has a tight budget.',
      choices: [
        { text: 'Beg your parents to buy them for your birthday', outcome: 'Your parents sacrifice to buy them. You feel touched and promise to score a hat-trick!', changes: { morale: 8, wealth: -20 } },
        { text: 'Clean and tape up your old faithful boots with pride', outcome: 'Your humble discipline and hunger to succeed earn the deep respect of your coach.', changes: { morale: 5, ovr: 2 } },
        { text: 'Do chores around the neighborhood to earn money', outcome: 'You worked hard and bought them yourself! Your work ethic is unmatched.', changes: { morale: 10, fame: 2, wealth: 30 } }
      ]
    },
    {
      id: 'academy_scout',
      minAge: 11,
      maxAge: 13,
      icon: '🕵️',
      category: 'Scouted!',
      title: 'The Scout in the Stand',
      story: 'After scoring an incredible curling free-kick, a scout from a professional youth academy approaches your family with an official trial invitation!',
      choices: [
        { text: 'Accept the invitation immediately with full focus', outcome: 'You sign with the Youth Academy! You take your first step toward professional football.', changes: { ovr: 3, fame: 8, clubTier: 2 }, action: 'promote_academy' },
        { text: 'Ask for a 2-week trial to prove yourself first', outcome: 'You dominate the trial match and earn a scholarship deal with the academy.', changes: { ovr: 4, morale: 5, clubTier: 2 }, action: 'promote_academy' },
        { text: 'Stay at your local team one more year to play with friends', outcome: 'You remain the local legend, but delay your professional development.', changes: { morale: 10, ovr: 1 } }
      ]
    },

    // Age 13-16: Academy Trials & Teenage Dilemmas
    {
      id: 'academy_rivalry',
      minAge: 13,
      maxAge: 15,
      icon: '⚔️',
      category: 'Academy Drama',
      title: 'The Academy Rival',
      story: 'The star player of the youth academy purposely trips you in training and laughs: "You don\'t belong at this level, kid." How do you react?',
      choices: [
        { text: 'Keep calm and destroy him with nutmegs in the scrimmage', outcome: 'You leave him on the floor with a filthy skill move! The entire academy applauds your composure.', changes: { ovr: 3, fame: 5, morale: 5 } },
        { text: 'Get furious and tackle him hard right back', outcome: 'A scuffle breaks out! The coach benches you for the weekend derby for bad discipline.', changes: { morale: -8, fitness: -2, ovr: 1 } },
        { text: 'Report it calmly to the academy director', outcome: 'The director appreciates your maturity and makes you vice-captain.', changes: { morale: 6, fame: 2 } }
      ]
    },
    {
      id: 'party_vs_rest',
      minAge: 14,
      maxAge: 16,
      icon: '🎉',
      category: 'Lifestyle Temptation',
      title: 'The Secret Party',
      story: 'It is Friday night and the biggest youth cup semi-final is tomorrow at 10 AM. Your friends invite you to a wild house party.',
      choices: [
        { text: 'Decline, drink an electrolyte shake, and sleep 9 hours', outcome: 'You wake up feeling like a beast and drop 2 goals and an assist in the semi-final!', changes: { ovr: 3, fitness: 8, fame: 5 } },
        { text: 'Sneak out for just 1 hour to see your crush', outcome: 'You get home late smelling of smoke. In the match you suffer cramps in the 60th minute.', changes: { fitness: -12, morale: -4, fame: 3 } },
        { text: 'Invite your friends to come watch your game instead', outcome: 'They bring banners and chant your name from the sidelines! Incredible morale boost.', changes: { morale: 10, fame: 6 } }
      ]
    },
    {
      id: 'first_agent',
      minAge: 15,
      maxAge: 17,
      icon: '💼',
      category: 'Career Management',
      title: 'The Agent Meeting',
      story: 'Two sports agencies want to represent you. Agency A promises fast money, brand deals, and hype. Agency B is a respected mentor who focuses purely on technical development and football patience.',
      choices: [
        { text: 'Sign with Agency B (The Respectful Mentor)', outcome: 'Your mentor protects you from media vultures and arranges extra 1-on-1 private finishing sessions.', changes: { ovr: 4, morale: 8, fame: 2 }, setAgent: 'Mentor' },
        { text: 'Sign with Agency A (The Flashy Super-Agent)', outcome: 'Your social media explodes and you land a local sneaker deal! But expectations skyrocket.', changes: { fame: 15, wealth: 1500, ovr: 1, morale: -3 }, setAgent: 'Super-Agent' },
        { text: 'Let your parents manage your affairs for now', outcome: 'Your family keeps you grounded and humble.', changes: { morale: 6, ovr: 2 }, setAgent: 'Family' }
      ]
    },

    // Age 17-20: Pro Debut & Breakthrough
    {
      id: 'the_bench_dilemma',
      minAge: 17,
      maxAge: 21,
      icon: '👔',
      category: 'Coach Confrontation',
      title: 'The Coach & The Bench',
      story: 'The manager calls you into his office: "Look, for tactical reasons against our rivals this weekend, I need you on the bench." How do you handle this?',
      choices: [
        { text: 'Accept calmly and promise to be ready as a super-sub', outcome: 'You come on in the 78th minute and score the stoppage-time winner! The manager hugs you in tears.', changes: { ovr: 3, morale: 10, fame: 10, fitness: -2 } },
        { text: 'Respectfully plead: "Boss, give me 45 mins! I\'ve studied their defense!"', outcome: 'The coach is stunned by your confidence and starts you. You put on a masterclass display!', changes: { ovr: 4, fame: 12, morale: 8 } },
        { text: 'Storm out and post a cryptic sad emoji on Instagram', outcome: 'The media creates a massive circus! The coach fines you two weeks wage and sends you to the reserves.', changes: { morale: -15, fame: 8, ovr: -1 } },
        { text: 'Instruct your agent to demand an immediate loan move', outcome: 'Your agent finds a 6-month loan where you start every match and score 12 goals!', changes: { ovr: 5, fame: 10, morale: 5 } }
      ]
    },
    {
      id: 'pro_debut_penalty',
      minAge: 17,
      maxAge: 20,
      icon: '🎯',
      category: 'High Pressure Match',
      title: 'Senior Team Debut Moment',
      story: 'You are subbed on for your senior team debut! With 5 minutes left, you are through 1-on-1 with the goalkeeper! What is your move?',
      choices: [
        { text: 'Chip the goalkeeper with an audacious dink', outcome: 'GOOOAAAL! The ball floats gracefully into the net! The stadium erupts for the teenage sensation!', changes: { ovr: 4, fame: 18, morale: 12 } },
        { text: 'Blast it with full power into the top roof of the net', outcome: 'A rocket strike! Nearly breaks the net! You slide on your knees towards the ultras!', changes: { ovr: 3, fame: 15, morale: 10 } },
        { text: 'Square the ball to your veteran captain for an open tap-in', outcome: 'The captain scores and points right at you in celebration! The entire dressing room respects your unselfishness.', changes: { ovr: 2, morale: 15, fame: 8 } }
      ]
    },
    {
      id: 'first_pro_salary',
      minAge: 17,
      maxAge: 19,
      icon: '💰',
      category: 'First Paycheck',
      title: 'Your First Big Professional Paycheck',
      story: 'Your first professional contract arrives with a huge bonus check in your bank account. How do you spend your new earnings?',
      choices: [
        { text: 'Buy a comfortable house for your parents', outcome: 'Your parents burst into tears of joy. You stay grounded with unmatched peace of mind.', changes: { morale: 20, fame: 8, wealth: -20000 } },
        { text: 'Hire a private chef and personal physiotherapist', outcome: 'Your physical conditioning improves dramatically, giving you an elite physical edge.', changes: { fitness: 15, ovr: 4, wealth: -15000 } },
        { text: 'Buy an expensive diamond watch and gold chain', outcome: 'You look flashy on social media, but older veterans in the dressing room roll their eyes.', changes: { fame: 12, morale: -4, wealth: -25000 } }
      ]
    },

    // Age 21-29: Prime Stardom & Mega Decisions
    {
      id: 'dual_mega_transfer',
      minAge: 21,
      maxAge: 27,
      icon: '🏛️',
      category: 'Blockbuster Transfer War',
      title: 'The €100 Million Transfer War',
      story: 'Transfer Deadline Day! Real Madrid and Manchester City have both triggered your massive buyout clause. The football world is waiting for your decision.',
      choices: [
        { text: 'Sign for Real Madrid (The Royal White Dream & Ballon d\'Or)', outcome: 'You are unveiled at the Bernabeu in front of 80,000 fans! The pressure is colossal.', changes: { fame: 25, wealth: 80000, ovr: 3, clubTier: 5 }, action: 'sign_madrid' },
        { text: 'Sign for Manchester City (Master Tactician & Trophy Machine)', outcome: 'You join the relentless tactical winning machine and are guaranteed starting football!', changes: { fame: 20, wealth: 95000, ovr: 4, clubTier: 5 }, action: 'sign_city' },
        { text: 'Reject both and stay as an immortal one-club captain', outcome: 'The fans paint a gigantic tifo banner of you! You are a legendary romantic hero.', changes: { morale: 25, fame: 15, ovr: 2 } }
      ]
    },
    {
      id: 'the_big_penalty',
      minAge: 21,
      maxAge: 29,
      icon: '⚽',
      category: 'Champions League Final',
      title: 'The 94th-Minute Cup Final Penalty',
      story: '94th minute of the Champions League Final. 1-1. The referee awards a penalty! 80,000 fans fall silent. The goalkeeper is staring into your soul. Where do you shoot?',
      choices: [
        { text: 'Bottom-Left Corner: Low, hard, and pinpoint accurate', outcome: 'GOAL! The keeper dives the right way but the ball is tucked into the side netting! CHAMPIONS OF EUROPE!', changes: { ovr: 3, fame: 25, morale: 20 }, trophy: 'UEFA Champions League' },
        { text: 'Top-Right Corner: Absolute venom into the top bins', outcome: 'WHAT A HIT! Top corner postage stamp! You rip your shirt off in pure ecstasy!', changes: { ovr: 4, fame: 28, morale: 22 }, trophy: 'UEFA Champions League' },
        { text: 'The Cheeky Panenka: Delicate chip down the middle', outcome: 'ICE COLD! The keeper dives hopelessly early and the ball floats into the center! An immortal moment!', changes: { fame: 35, ovr: 4, morale: 25 }, trophy: 'UEFA Champions League' },
        { text: 'Pass the penalty to your teammate who asked for it', outcome: 'Your teammate strikes it with conviction! You lift the trophy together in unity!', changes: { morale: 18, fame: 15 }, trophy: 'UEFA Champions League' }
      ]
    },
    {
      id: 'ballon_dor_nomination',
      minAge: 23,
      maxAge: 29,
      icon: '🏆',
      category: 'World Best Award',
      title: 'The Ballon d\'Or Ceremony in Paris',
      story: 'You are dressed in an exquisite black tuxedo sitting in the front row in Paris. The envelope is opened for the Ballon d\'Or / World Player of the Year!',
      choices: [
        { text: 'Give a humble, emotional speech thanking your roots', outcome: 'AND THE WINNER IS YOU! You lift the Golden Ball into the sky! An emotional, historic night.', changes: { fame: 35, ovr: 5, morale: 25 }, award: 'Ballon d\'Or' },
        { text: 'Dedicate the trophy to your teammates and family', outcome: 'THE BALLON D\'OR IS YOURS! Your speech wins the hearts of the entire sporting world.', changes: { fame: 32, ovr: 5, morale: 28 }, award: 'Ballon d\'Or' },
        { text: 'Smile, applaud gracefully as runner-up and vow revenge', outcome: 'You finish 2nd on the podium! The hunger inside you burns like a raging fire.', changes: { ovr: 4, morale: 10, fitness: 5 } }
      ]
    },
    {
      id: 'world_cup_final_moment',
      minAge: 22,
      maxAge: 30,
      icon: '🌍',
      category: 'World Cup Glory',
      title: 'The World Cup Final: 119th Minute',
      story: 'Extra time in the World Cup Final for your country. Your legs are burning with exhaustion. You receive a lofted pass over the defensive line.',
      choices: [
        { text: 'Volley it first-time with pure instep technique', outcome: 'GOOOOOAL! IT FLIES INTO THE FAR CORNER! YOUR COUNTRY HAS WON THE WORLD CUP!', changes: { fame: 40, ovr: 5, morale: 30 }, trophy: 'FIFA World Cup' },
        { text: 'Feint past the defender and calmly slot it home', outcome: 'HE GOES DOWN! YOU PASS IT IN! WORLD CUP CHAMPIONS! 50 million people celebrate in the streets!', changes: { fame: 42, ovr: 5, morale: 30 }, trophy: 'FIFA World Cup' },
        { text: 'Hold up play and wait for overlapping fullback', outcome: 'A brilliant cross finds your striker for the golden goal! You are national heroes!', changes: { fame: 30, ovr: 3, morale: 25 }, trophy: 'FIFA World Cup' }
      ]
    },
    {
      id: 'supercar_vs_charity',
      minAge: 24,
      maxAge: 30,
      icon: '🏎️',
      category: 'Lifestyle & Fame',
      title: 'Lifestyle Spending',
      story: 'Your bank account has surpassed several million euros. A luxury dealership invites you to preview a limited edition hypercar, while a children\'s hospital asks for a foundation grant.',
      choices: [
        { text: 'Build a youth academy & hospital wing in your hometown', outcome: 'You change thousands of lives. The city names a stadium after you. Your legacy transcends football.', changes: { morale: 25, fame: 20, wealth: -150000 } },
        { text: 'Buy the matte-black hypercar and flex on Instagram', outcome: 'The car turns heads everywhere in the city, but tabloid press question your discipline.', changes: { fame: 18, morale: -3, wealth: -280000 } },
        { text: 'Invest in tech startups and sports recovery businesses', outcome: 'Your business ventures boom! Your wealth grows massively.', changes: { wealth: 350000, fame: 8 } }
      ]
    },

    // Age 30-35+: Veteran & Twilight Years
    {
      id: 'wonderkid_mentor',
      minAge: 30,
      maxAge: 33,
      icon: '🤝',
      category: 'Leadership',
      title: 'The New 17-Year-Old Wonderkid',
      story: 'The club signs a 17-year-old wonderkid who plays in your exact position. The media calls them "The Next You." How do you welcome them?',
      choices: [
        { text: 'Take them under your wing and teach them your secrets', outcome: 'You forge an unstoppable partnership on the pitch! They credit you as their football hero.', changes: { morale: 15, fame: 10, ovr: 1 } },
        { text: 'Play with ruthless intensity in training to assert dominance', outcome: 'You prove you are still the boss! But the dressing room feels divided.', changes: { ovr: 2, morale: -5, fitness: -5 } },
        { text: 'Adapt your position to play together behind them', outcome: 'You become a magnificent deep-lying playmaker, extending your career at the highest level.', changes: { ovr: 3, morale: 12, fame: 8 } }
      ]
    },
    {
      id: 'twilight_transfer',
      minAge: 32,
      maxAge: 35,
      icon: '🌴',
      category: 'Twilight of Career',
      title: 'The Farewell Chapter',
      story: 'You are now a decorated veteran legend. Enormous multi-million contract offers arrive from sunny Miami/Los Angeles and Saudi Arabia, alongside an emotional call from your boyhood club.',
      choices: [
        { text: 'Sign for Inter Miami in MLS (Lifestyle & Global Brand)', outcome: 'You enjoy the American sunshine, pack stadiums across North America, and hang out with celebrities!', changes: { wealth: 250000, fame: 15, morale: 12 } },
        { text: 'Sign mega-deal in Saudi Pro League (Astronomical Wealth)', outcome: 'You sign an unprecedented contract and become the league\'s marquee superstar!', changes: { wealth: 500000, fame: 10 } },
        { text: 'Return to your boyhood club on modest wages', outcome: 'Tears of joy flood the city as you return home to finish where it all began! Pure football romance.', changes: { morale: 30, fame: 18, ovr: 1 } }
      ]
    },
    {
      id: 'retirement_decision',
      minAge: 35,
      maxAge: 38,
      icon: '👑',
      category: 'Final Curtain',
      title: 'The Standing Ovation',
      story: 'Your knees ache after every match, but the passion still burns. Your contract expires at the end of the season. Is it time to hang up your boots?',
      choices: [
        { text: 'Announce retirement at the top of your game', outcome: 'You retire at the summit! 85,000 fans give you a 15-minute standing ovation in tears.', changes: { fame: 20, morale: 25 }, action: 'retire' },
        { text: 'Play one final season as player-coach', outcome: 'You guide the youngsters for one more unforgettable season before bidding farewell.', changes: { morale: 15, fitness: -10 }, action: 'retire_next_year' }
      ]
    }
  ];

  // ==========================================
  // AGE ADVANCEMENT ENGINE (+ AGE)
  // ==========================================
  function advanceAge() {
    if (!player || player.isRetired) return;

    player.age += 1;
    const isPro = player.age >= 17;
    const isPrime = player.age >= 21 && player.age <= 29;
    const isVeteran = player.age >= 31;

    // Natural progression / decline
    if (player.age <= 21) {
      player.ovr += Math.floor(Math.random() * 4) + 1; // +1 to +4 growth
      player.fitness = clamp(player.fitness + 2, 0, 100);
    } else if (isPrime) {
      player.ovr = clamp(player.ovr + Math.floor(Math.random() * 3), 50, 99);
    } else if (isVeteran) {
      player.ovr = clamp(player.ovr - (Math.random() > 0.4 ? 1 : 0), 45, 99);
      player.fitness = clamp(player.fitness - Math.floor(Math.random() * 4), 10, 100);
    }

    // Auto promote to Pro club if reaching 17
    if (player.age === 17 && player.clubTier < 3) {
      player.clubTier = 3;
      const tierClubs = CLUBS[player.gender][3];
      player.club = getRandomItem(tierClubs);
      player.weeklyWage = 8000 + Math.floor(Math.random() * 5000);
      player.avatar = player.gender === 'male' ? '👱‍♂️' : '👱‍♀️';
      player.history.push({
        age: player.age,
        text: `You signed your first professional senior contract with <b>${player.club}</b> earning <b>${formatMoney(player.weeklyWage)}/week</b>!`,
        type: 'transfer'
      });
    }

    // Simulate season stats if pro
    if (isPro) {
      const matchCount = Math.floor(25 + (player.ovr / 100) * 20);
      let goals = 0;
      let assists = 0;
      let cleanSheets = 0;

      if (['ST', 'LW', 'RW'].includes(player.position)) {
        goals = Math.floor((player.ovr / 100) * 28 * (Math.random() * 0.6 + 0.7));
        assists = Math.floor((player.ovr / 100) * 14 * (Math.random() * 0.6 + 0.7));
      } else if (['CAM', 'CM'].includes(player.position)) {
        goals = Math.floor((player.ovr / 100) * 12 * (Math.random() * 0.5 + 0.7));
        assists = Math.floor((player.ovr / 100) * 22 * (Math.random() * 0.6 + 0.7));
      } else if (['LB', 'RB'].includes(player.position)) {
        goals = Math.floor((player.ovr / 100) * 4 * (Math.random() * 0.5 + 0.5));
        assists = Math.floor((player.ovr / 100) * 16 * (Math.random() * 0.6 + 0.7)); // Overlapping crosses and cutbacks
        cleanSheets = Math.floor((player.ovr / 100) * 18 * (Math.random() * 0.5 + 0.7));
      } else if (player.position === 'CB') {
        goals = Math.floor((player.ovr / 100) * 4 * (Math.random() * 0.5 + 0.5)); // Header goals from set pieces
        assists = Math.floor((player.ovr / 100) * 3 * (Math.random() * 0.5 + 0.5));
        cleanSheets = Math.floor((player.ovr / 100) * 20 * (Math.random() * 0.5 + 0.7));
      } else if (player.position === 'GK') {
        goals = 0;
        assists = Math.floor(Math.random() * 2);
        cleanSheets = Math.floor((player.ovr / 100) * 22 * (Math.random() * 0.5 + 0.7));
      } else {
        goals = Math.floor(Math.random() * 4);
        assists = Math.floor(Math.random() * 6);
      }

      player.careerStats.appearances += matchCount;
      player.careerStats.goals += goals;
      player.careerStats.assists += assists;
      player.careerStats.cleanSheets = (player.careerStats.cleanSheets || 0) + cleanSheets;

      // Salary income
      const annualEarnings = player.weeklyWage * 48;
      player.wealth += annualEarnings;

      const csLog = cleanSheets > 0 ? `, and kept <b>${cleanSheets}</b> clean sheets` : '';
      player.history.push({
        age: player.age,
        text: `Season with <b>${player.club}</b>: Played <b>${matchCount}</b> matches, scored <b>${goals}</b> goals, delivered <b>${assists}</b> assists${csLog}. (OVR: ${player.ovr})`,
        type: 'match'
      });

      // Chance of league trophy in top tiers
      if (player.clubTier >= 4 && player.ovr >= 82 && Math.random() > 0.45) {
        const trophyName = player.clubTier === 5 ? 'League Champions & Super Cup' : 'Domestic Cup Winner';
        if (!player.trophies.includes(trophyName)) player.trophies.push(trophyName);
        player.fame = clamp(player.fame + 8, 0, 100);
        player.morale = clamp(player.morale + 10, 0, 100);
        player.history.push({
          age: player.age,
          text: `🏆 <b>TROPHY GLORY!</b> You won the <b>${trophyName}</b> with ${player.club}!`,
          type: 'trophy'
        });
      }
    } else {
      player.history.push({
        age: player.age,
        text: `Age ${player.age}: Trained hard at <b>${player.club}</b>. Your ball control and football instincts developed! (OVR: ${player.ovr})`,
        type: 'life'
      });
    }

    // Check forced retirement at 38
    if (player.age >= 38) {
      player.isRetired = true;
      saveGame();
      renderGameUI();
      renderHallOfFame();
      return;
    }

    saveGame();
    renderGameUI();

    // Trigger an exciting scenario for this age
    triggerEligibleScenario();
  }

  // ==========================================
  // SCENARIO TRIGGERING & MODAL HANDLING
  // ==========================================
  function triggerEligibleScenario() {
    const candidates = SCENARIOS.filter(s => player.age >= s.minAge && player.age <= s.maxAge);
    if (!candidates.length) return;

    const chosen = getRandomItem(candidates);
    showDecisionModal(chosen);
  }

  function showDecisionModal(scenario) {
    const overlay = document.getElementById('flModalOverlay');
    if (!overlay) return;

    document.getElementById('flModalIcon').textContent = scenario.icon;
    document.getElementById('flModalCategory').textContent = scenario.category;
    document.getElementById('flModalTitle').textContent = scenario.title;
    document.getElementById('flModalStory').textContent = scenario.story;

    const choicesContainer = document.getElementById('flModalChoices');
    choicesContainer.innerHTML = scenario.choices.map((c, idx) => `
      <button type="button" class="fl-choice-btn" data-choice-index="${idx}">
        <span>${c.text}</span>
        <span class="fl-choice-arrow">↗</span>
      </button>
    `).join('');

    overlay.hidden = false;

    // Attach listeners
    choicesContainer.querySelectorAll('.fl-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.choiceIndex);
        resolveScenarioChoice(scenario, scenario.choices[idx]);
      });
    });
  }

  function resolveScenarioChoice(scenario, choice) {
    const overlay = document.getElementById('flModalOverlay');
    if (overlay) overlay.hidden = true;

    // Apply stat changes
    if (choice.changes) {
      if (choice.changes.ovr) player.ovr = clamp(player.ovr + choice.changes.ovr, 40, 99);
      if (choice.changes.fitness) player.fitness = clamp(player.fitness + choice.changes.fitness, 0, 100);
      if (choice.changes.morale) player.morale = clamp(player.morale + choice.changes.morale, 0, 100);
      if (choice.changes.fame) player.fame = clamp(player.fame + choice.changes.fame, 0, 100);
      if (choice.changes.wealth) player.wealth = Math.max(0, player.wealth + choice.changes.wealth);
      if (choice.changes.clubTier) player.clubTier = choice.changes.clubTier;
    }

    if (choice.setAgent) player.agentType = choice.setAgent;
    if (choice.trophy && !player.trophies.includes(choice.trophy)) player.trophies.push(choice.trophy);
    if (choice.award && !player.awards.includes(choice.award)) player.awards.push(choice.award);

    // Custom actions
    if (choice.action === 'sign_madrid') {
      player.club = player.gender === 'male' ? 'Real Madrid' : 'FC Barcelona Femení';
      player.weeklyWage = 220000;
    } else if (choice.action === 'sign_city') {
      player.club = player.gender === 'male' ? 'Manchester City' : 'Chelsea FC Women';
      player.weeklyWage = 240000;
    } else if (choice.action === 'promote_academy') {
      player.clubTier = 2;
      player.club = getRandomItem(CLUBS[player.gender][2]);
    } else if (choice.action === 'retire') {
      player.isRetired = true;
    }

    // Add outcome to history
    player.history.push({
      age: player.age,
      text: `<b>Decision:</b> ${choice.outcome}`,
      type: choice.trophy ? 'trophy' : 'drama'
    });

    saveGame();
    renderGameUI();

    if (player.isRetired) {
      setTimeout(renderHallOfFame, 400);
    }
  }

  // ==========================================
  // QUICK ACTIONS: TRAIN, MANAGER, AGENT, LIFESTYLE
  // ==========================================
  function handleActionTrain() {
    if (!player || player.isRetired) return;
    if (player.fitness < 20) {
      alert('You are exhausted! Rest before training to avoid tearing your hamstring.');
      return;
    }

    player.fitness = clamp(player.fitness - 10, 0, 100);
    player.ovr = clamp(player.ovr + 1, 40, 99);
    player.history.push({
      age: player.age,
      text: 'You stayed late after practice doing 100 extra free-kicks and finishing drills! (+1 OVR, -10% Fitness)',
      type: 'life'
    });
    saveGame();
    renderGameUI();
  }

  function handleActionManager() {
    if (!player || player.isRetired) return;
    const dialogs = [
      { text: 'You spoke with the coach about tactical positioning. He appreciates your tactical curiosity! (+5 Morale)', morale: 5 },
      { text: 'You asked the manager for a starting guarantee. He told you: "Earn it in training, kid!" (-3 Morale)', morale: -3 },
      { text: 'The coach praised your professionalism in the weekly team meeting! (+8 Morale, +2 Fame)', morale: 8, fame: 2 }
    ];
    const picked = getRandomItem(dialogs);
    player.morale = clamp(player.morale + picked.morale, 0, 100);
    if (picked.fame) player.fame = clamp(player.fame + picked.fame, 0, 100);

    player.history.push({ age: player.age, text: picked.text, type: 'drama' });
    saveGame();
    renderGameUI();
  }

  function handleActionAgent() {
    if (!player || player.isRetired) return;
    if (player.age < 17) {
      alert('You are still in youth football. Focus on training until turning professional at age 17!');
      return;
    }

    const availableTiers = CLUBS[player.gender][Math.min(5, player.clubTier + 1)] || CLUBS[player.gender][player.clubTier];
    const targetClub = getRandomItem(availableTiers.filter(c => c !== player.club));

    if (player.ovr >= 75) {
      player.club = targetClub;
      player.clubTier = Math.min(5, player.clubTier + 1);
      player.weeklyWage = Math.floor(player.weeklyWage * 1.5) + 15000;
      player.history.push({
        age: player.age,
        text: `💼 <b>TRANSFER COMPLETED!</b> Your agent negotiated a sensational move to <b>${player.club}</b> on <b>${formatMoney(player.weeklyWage)}/week</b>!`,
        type: 'transfer'
      });
      player.fame = clamp(player.fame + 12, 0, 100);
    } else {
      player.history.push({
        age: player.age,
        text: 'Your agent approached several top clubs, but they want you to prove your consistency first.',
        type: 'drama'
      });
    }
    saveGame();
    renderGameUI();
  }

  function handleActionLifestyle() {
    if (!player || player.isRetired) return;
    if (player.wealth < 10000) {
      alert('You need at least €10,000 in your bank account to indulge in luxury lifestyle investments.');
      return;
    }

    const options = [
      { text: 'Hired an elite Michelin-star personal chef and sleep scientist (-€15K, +15% Fitness)', cost: 15000, fitness: 15, morale: 5 },
      { text: 'Donated to build a new football mini-pitch in a disadvantaged neighborhood (-€25K, +20 Morale, +15 Fame)', cost: 25000, morale: 20, fame: 15 },
      { text: 'Hosted an extravagant VIP yacht party for your teammates (-€40K, +18 Fame, -5% Fitness)', cost: 40000, fame: 18, fitness: -5 }
    ];

    const pick = getRandomItem(options);
    player.wealth = Math.max(0, player.wealth - pick.cost);
    if (pick.fitness) player.fitness = clamp(player.fitness + pick.fitness, 0, 100);
    if (pick.morale) player.morale = clamp(player.morale + pick.morale, 0, 100);
    if (pick.fame) player.fame = clamp(player.fame + pick.fame, 0, 100);

    player.history.push({ age: player.age, text: `🛍️ ${pick.text}`, type: 'life' });
    saveGame();
    renderGameUI();
  }

  // ==========================================
  // RETIREMENT & HALL OF FAME
  // ==========================================
  function renderHallOfFame() {
    const hofCard = document.getElementById('flHofCard');
    const gameContainer = document.getElementById('flGameContainer');
    if (!hofCard) return;

    if (gameContainer) gameContainer.hidden = true;
    hofCard.hidden = false;

    // Calculate GOAT Score
    const totalGoalsAssists = player.careerStats.goals + player.careerStats.assists;
    const trophyCount = player.trophies.length;
    const hasBallonDor = player.awards.includes('Ballon d\'Or');
    const hasWorldCup = player.trophies.includes('FIFA World Cup');

    let legacyTitle = 'Underground Cult Hero 🏆';
    if (hasWorldCup && hasBallonDor && player.ovr >= 92) {
      legacyTitle = 'THE UNDISPUTED G.O.A.T. 🐐';
    } else if (hasBallonDor || player.ovr >= 90 || trophyCount >= 6) {
      legacyTitle = 'ALL-TIME FOOTBALL LEGEND ⭐';
    } else if (totalGoalsAssists >= 150 || player.ovr >= 85) {
      legacyTitle = 'WORLD-CLASS SUPERSTAR 🌟';
    } else if (player.careerStats.appearances >= 350) {
      legacyTitle = 'RESPECTED IRON MAN VETERAN 🛡️';
    }

    document.getElementById('flHofName').textContent = player.name;
    document.getElementById('flHofLegacy').textContent = legacyTitle;
    document.getElementById('flHofApps').textContent = player.careerStats.appearances;
    document.getElementById('flHofGoals').textContent = player.careerStats.goals;
    document.getElementById('flHofAssists').textContent = player.careerStats.assists;
    document.getElementById('flHofEarnings').textContent = formatMoney(player.wealth);
    document.getElementById('flHofOvr').textContent = player.ovr;
    document.getElementById('flHofTrophiesCount').textContent = player.trophies.length;

    const trophiesList = document.getElementById('flHofTrophiesList');
    if (player.trophies.length) {
      trophiesList.innerHTML = player.trophies.map(t => `<span class="fl-trophy-pill">🏆 ${t}</span>`).join('');
    } else {
      trophiesList.innerHTML = '<span style="color:var(--muted);font-size:12px;">No major titles won, but a courageous journey!</span>';
    }
  }

  // ==========================================
  // RENDER UI
  // ==========================================
  function renderGameUI() {
    const setupCard = document.getElementById('flSetupCard');
    const gameContainer = document.getElementById('flGameContainer');
    const hofCard = document.getElementById('flHofCard');

    if (!player) {
      if (setupCard) setupCard.hidden = false;
      if (gameContainer) gameContainer.hidden = true;
      if (hofCard) hofCard.hidden = true;
      return;
    }

    if (player.isRetired) {
      if (setupCard) setupCard.hidden = true;
      if (gameContainer) gameContainer.hidden = true;
      renderHallOfFame();
      return;
    }

    if (setupCard) setupCard.hidden = true;
    if (hofCard) hofCard.hidden = true;
    if (gameContainer) gameContainer.hidden = false;

    // Profile card
    document.getElementById('flPlayerAvatar').textContent = player.avatar;
    document.getElementById('flPlayerName').textContent = player.name;

    const genderBadge = document.getElementById('flPlayerGenderBadge');
    genderBadge.textContent = player.gender === 'male' ? '♂ MALE' : '♀ FEMALE';
    genderBadge.className = `fl-gender-badge fl-${player.gender}`;

    document.getElementById('flPlayerAge').textContent = `${player.age} y/o`;
    document.getElementById('flPlayerNation').textContent = `${player.country.flag} ${player.country.name}`;
    document.getElementById('flPlayerPos').textContent = player.position;
    const clubEl = document.getElementById('flPlayerClub');
    if (clubEl) {
      clubEl.textContent = player.club;
      clubEl.title = `Click to view ${player.club} hub`;
      clubEl.onclick = () => {
        if (typeof openTeamPage === 'function') {
          openTeamPage(player.club, 'esp.1', null, 'football-life');
        }
      };
    }
    document.getElementById('flPlayerOvr').textContent = player.ovr;
    document.getElementById('flPlayerWealth').textContent = formatMoney(player.wealth);
    document.getElementById('flPlayerWage').textContent = player.weeklyWage > 0 ? `${formatMoney(player.weeklyWage)}/wk` : 'Unpaid (Youth)';

    // Stat bars
    const fillOvr = document.getElementById('flBarOvr');
    const fillFitness = document.getElementById('flBarFitness');
    const fillMorale = document.getElementById('flBarMorale');
    const fillFame = document.getElementById('flBarFame');

    if (fillOvr) fillOvr.style.width = `${Math.min(100, Math.max(10, player.ovr))}%`;
    if (fillFitness) fillFitness.style.width = `${player.fitness}%`;
    if (fillMorale) fillMorale.style.width = `${player.morale}%`;
    if (fillFame) fillFame.style.width = `${player.fame}%`;

    document.getElementById('flValOvr').textContent = player.ovr;
    document.getElementById('flValFitness').textContent = `${player.fitness}%`;
    document.getElementById('flValMorale').textContent = `${player.morale}%`;
    document.getElementById('flValFame').textContent = `${player.fame}%`;

    // Logs Feed
    const logSection = document.getElementById('flLogSection');
    if (logSection) {
      logSection.innerHTML = player.history.map(item => `
        <div class="fl-log-item log-${item.type || 'life'}">
          <span class="fl-log-age">Age ${item.age}</span>
          <p class="fl-log-text">${item.text}</p>
        </div>
      `).join('');
    }
  }

  // ==========================================
  // EVENT LISTENERS & SETUP WIRING
  // ==========================================
  function initSetupScreen() {
    let selectedGender = 'male';
    let selectedNation = WORLD_COUNTRIES.find(c => c.name === 'England') || WORLD_COUNTRIES[0];
    let selectedPosition = 'ST';

    // Update country trigger display
    function updateCountryTriggerUI() {
      const flagEl = document.getElementById('flSelectedCountryFlag');
      const nameEl = document.getElementById('flSelectedCountryName');
      if (flagEl) flagEl.textContent = selectedNation.flag;
      if (nameEl) nameEl.textContent = selectedNation.name;
    }
    updateCountryTriggerUI();

    const countryModal = document.getElementById('flCountryModal');
    const countryTriggerBtn = document.getElementById('flCountryPickerTrigger');
    const countryCloseBtn = document.getElementById('flBtnCloseCountryModal');
    const countrySearchInput = document.getElementById('flCountrySearchInput');
    const countrySearchClear = document.getElementById('flCountrySearchClear');
    const azStripContainer = document.getElementById('flCountryAzStrip');
    const listScrollContainer = document.getElementById('flCountryListScroll');

    // Populate A-Z Quick Navigation Strip
    if (azStripContainer) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      azStripContainer.innerHTML = alphabet.map(letter => `
        <button type="button" class="fl-az-btn" data-letter="${letter}">${letter}</button>
      `).join('');

      azStripContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.fl-az-btn');
        if (!btn) return;
        const letter = btn.dataset.letter;
        const targetSection = document.getElementById(`flCountryGroup_${letter}`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Render A-Z Country List
    function renderCountryList(filterText = '') {
      if (!listScrollContainer) return;
      const q = filterText.trim().toLowerCase();
      const filtered = WORLD_COUNTRIES.filter(c => !q || c.name.toLowerCase().includes(q));

      if (!filtered.length) {
        listScrollContainer.innerHTML = `
          <div style="text-align:center;padding:36px 16px;color:var(--muted);font-size:13px;">
            No countries found matching "${filterText}". Try another spelling!
          </div>
        `;
        return;
      }

      // Group by first letter
      const groups = {};
      filtered.forEach(c => {
        const initial = c.name[0].toUpperCase();
        if (!groups[initial]) groups[initial] = [];
        groups[initial].push(c);
      });

      const sortedKeys = Object.keys(groups).sort();
      listScrollContainer.innerHTML = sortedKeys.map(letter => `
        <div class="fl-country-group-section" id="flCountryGroup_${letter}">
          <div class="fl-country-group-title">${letter}</div>
          <div class="fl-country-group-grid">
            ${groups[letter].map(c => `
              <button type="button" class="fl-country-option ${c.name === selectedNation.name ? 'is-selected' : ''}" data-country-name="${c.name}">
                <span class="fl-option-flag">${c.flag}</span>
                <span class="fl-option-name" title="${c.name}">${c.name}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    renderCountryList();

    // Country Modal Open/Close Controls
    if (countryTriggerBtn && countryModal) {
      countryTriggerBtn.addEventListener('click', () => {
        countryModal.hidden = false;
        renderCountryList(countrySearchInput?.value || '');
        setTimeout(() => countrySearchInput?.focus(), 120);
      });
    }

    if (countryCloseBtn && countryModal) {
      countryCloseBtn.addEventListener('click', () => {
        countryModal.hidden = true;
      });
    }

    if (countryModal) {
      countryModal.addEventListener('click', (e) => {
        if (e.target === countryModal) {
          countryModal.hidden = true;
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && countryModal && !countryModal.hidden) {
        countryModal.hidden = true;
      }
    });

    // Search filter
    if (countrySearchInput) {
      countrySearchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (countrySearchClear) countrySearchClear.hidden = !val;
        renderCountryList(val);
      });
    }

    if (countrySearchClear && countrySearchInput) {
      countrySearchClear.addEventListener('click', () => {
        countrySearchInput.value = '';
        countrySearchClear.hidden = true;
        renderCountryList('');
        countrySearchInput.focus();
      });
    }

    // Select country from list
    if (listScrollContainer) {
      listScrollContainer.addEventListener('click', (e) => {
        const opt = e.target.closest('.fl-country-option');
        if (!opt) return;
        const cName = opt.dataset.countryName;
        const found = WORLD_COUNTRIES.find(c => c.name === cName);
        if (found) {
          selectedNation = found;
          updateCountryTriggerUI();
          // Automatically re-randomize clean name matching the newly selected nation
          const gen = generateCleanPlayerName(selectedNation, selectedGender);
          document.getElementById('flInputFirstName').value = gen.first;
          document.getElementById('flInputLastName').value = gen.last;
        }
        if (countryModal) countryModal.hidden = true;
      });
    }

    // Gender selection
    const genderBtns = document.querySelectorAll('.fl-gender-btn');
    genderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        genderBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        selectedGender = btn.dataset.gender;

        // Auto randomize a clean name fitting gender and current nation
        const gen = generateCleanPlayerName(selectedNation, selectedGender);
        document.getElementById('flInputFirstName').value = gen.first;
        document.getElementById('flInputLastName').value = gen.last;
      });
    });

    // Populate positions (ST, LW, RW, CAM, CM, LB, RB, CB, GK)
    const posContainer = document.getElementById('flPositionList');
    if (posContainer) {
      posContainer.innerHTML = POSITIONS.map((p, idx) => `
        <button type="button" class="fl-select-pill ${idx === 0 ? 'is-selected' : ''}" data-pos-id="${p.id}">
          <span>${p.icon}</span>
          <span>${p.id} - ${p.name.split('/')[0].trim()}</span>
        </button>
      `).join('');

      posContainer.querySelectorAll('.fl-select-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          posContainer.querySelectorAll('.fl-select-pill').forEach(p => p.classList.remove('is-selected'));
          pill.classList.add('is-selected');
          selectedPosition = pill.dataset.posId;
        });
      });
    }

    // Dice / Randomize Name button (Guarantees no two famous names)
    const diceBtn = document.getElementById('flBtnDice');
    if (diceBtn) {
      diceBtn.addEventListener('click', () => {
        const rand = generateCleanPlayerName(selectedNation, selectedGender);
        document.getElementById('flInputFirstName').value = rand.first;
        document.getElementById('flInputLastName').value = rand.last;
      });
    }

    // Start Career Button
    const startBtn = document.getElementById('flBtnStartCareer');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        const first = document.getElementById('flInputFirstName').value.trim() || 'Alex';
        const last = document.getElementById('flInputLastName').value.trim() || 'Silva';

        createNewPlayer({
          first,
          last,
          gender: selectedGender,
          country: selectedNation,
          position: selectedPosition,
          preferredFoot: 'Right'
        });
      });
    }

    // Populate initial random clean name
    const initialChar = generateRandomCharacter('male', selectedNation);
    const firstInput = document.getElementById('flInputFirstName');
    const lastInput = document.getElementById('flInputLastName');
    if (firstInput && lastInput) {
      firstInput.value = initialChar.first;
      lastInput.value = initialChar.last;
    }
  }

  function initFootballLife() {
    // Check if save exists
    player = loadGame();

    initSetupScreen();
    renderGameUI();

    // Wire main controls
    const ageBtn = document.getElementById('flBtnAge');
    if (ageBtn) {
      ageBtn.addEventListener('click', advanceAge);
    }

    const trainBtn = document.getElementById('flActTrain');
    if (trainBtn) trainBtn.addEventListener('click', handleActionTrain);

    const mgrBtn = document.getElementById('flActManager');
    if (mgrBtn) mgrBtn.addEventListener('click', handleActionManager);

    const agentBtn = document.getElementById('flActAgent');
    if (agentBtn) agentBtn.addEventListener('click', handleActionAgent);

    const lifestyleBtn = document.getElementById('flActLifestyle');
    if (lifestyleBtn) lifestyleBtn.addEventListener('click', handleActionLifestyle);

    // New Life buttons
    const newLifeBtns = document.querySelectorAll('.fl-trigger-newlife');
    newLifeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Are you sure you want to surrender your current football life and start a fresh career?')) {
          clearSave();
          renderGameUI();
        }
      });
    });

    // Panel opening from Games Hub
    const openGameCardBtn = document.getElementById('btnStartFootballLife');
    const footballLifePanel = document.getElementById('footballLifePanel');

    if (openGameCardBtn && footballLifePanel) {
      openGameCardBtn.addEventListener('click', () => {
        // Hide other panels
        document.querySelectorAll('.game-panel').forEach(p => { p.hidden = true; });
        footballLifePanel.hidden = false;
        footballLifePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFootballLife);
  } else {
    initFootballLife();
  }
})();
