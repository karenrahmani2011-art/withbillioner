const players = {
  "lionel messi": { first: "Lionel", last: "Messi", country: "ARG / FORWARD", current: "Inter Miami", number: "10", clubs: [["Newell's Old Boys", "1995-2000"], ["Barcelona", "2004-2021"], ["Paris Saint-Germain", "2021-2023"], ["Inter Miami", "2023-NOW"]] },
  "cristiano ronaldo": { first: "Cristiano", last: "Ronaldo", country: "POR / FORWARD", current: "Al-Nassr", number: "07", clubs: [["Sporting CP", "2002-2003"], ["Manchester United", "2003-2009"], ["Real Madrid", "2009-2018"], ["Juventus", "2018-2021"], ["Al-Nassr", "2023-NOW"]] },
  "mohamed salah": { first: "Mohamed", last: "Salah", country: "EGY / FORWARD", current: "Liverpool", number: "11", clubs: [["Al Mokawloon", "2010-2012"], ["FC Basel", "2012-2014"], ["Chelsea", "2014-2016"], ["Roma", "2016-2017"], ["Liverpool", "2017-NOW"]] },
  "kylian mbappe": { first: "Kylian", last: "Mbappe", country: "FRA / FORWARD", current: "Real Madrid", number: "09", clubs: [["Monaco", "2015-2017"], ["Paris Saint-Germain", "2017-2024"], ["Real Madrid", "2024-NOW"]] },
  "erling haaland": { first: "Erling", last: "Haaland", country: "NOR / FORWARD", current: "Manchester City", number: "09", clubs: [["Molde", "2017-2019"], ["Red Bull Salzburg", "2019-2020"], ["Borussia Dortmund", "2020-2022"], ["Manchester City", "2022-NOW"]] },
  "neymar": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Santos", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-2025"], ["Santos", "2025-NOW"]] },
  "neymar jr": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Santos", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-2025"], ["Santos", "2025-NOW"]] },
  "kevin de bruyne": { first: "Kevin", last: "De Bruyne", country: "BEL / MIDFIELDER", current: "Napoli", number: "17", clubs: [["Genk", "2008-2012"], ["Chelsea", "2012-2014"], ["Werder Bremen", "2012-2013"], ["Wolfsburg", "2014-2015"], ["Manchester City", "2015-2025"], ["Napoli", "2025-NOW"]] },
  "harry kane": { first: "Harry", last: "Kane", country: "ENG / FORWARD", current: "Bayern Munich", number: "09", clubs: [["Millwall", "2012"], ["Norwich City", "2012"], ["Leicester City", "2013"], ["Tottenham Hotspur", "2013-2023"], ["Bayern Munich", "2023-NOW"]] },
  "jude bellingham": { first: "Jude", last: "Bellingham", country: "ENG / MIDFIELDER", current: "Real Madrid", number: "05", clubs: [["Birmingham City", "2019-2020"], ["Borussia Dortmund", "2020-2023"], ["Real Madrid", "2023-NOW"]] },
  "vinicius junior": { first: "Vinicius", last: "Junior", country: "BRA / FORWARD", current: "Real Madrid", number: "07", clubs: [["Flamengo", "2017-2018"], ["Real Madrid", "2018-NOW"]] },
  "malo gusto": { first: "Malo", last: "Gusto", country: "FRA / DEFENDER", current: "Chelsea", number: "27", clubs: [["Lyon", "2016-2023"], ["Chelsea", "2023-NOW"]] },
  "cole palmer": { first: "Cole", last: "Palmer", country: "ENG / MIDFIELDER", current: "Chelsea", number: "20", clubs: [["Manchester City", "2019-2023"], ["Chelsea", "2023-NOW"]] },
  "zlatan ibrahimovic": { first: "Zlatan", last: "Ibrahimovic", country: "SWE / FORWARD", current: "Retired", number: "11", clubs: [["Malmo", "1999-2001"], ["Ajax", "2001-2004"], ["Juventus", "2004-2006"], ["Inter Milan", "2006-2009"], ["Barcelona", "2009-2010"], ["AC Milan", "2010-2012"], ["Paris Saint-Germain", "2012-2016"], ["Manchester United", "2016-2018"], ["LA Galaxy", "2018-2019"], ["AC Milan", "2020-2023"]] }
};

const form = document.querySelector('#searchForm');
const input = document.querySelector('#playerSearch');
const result = document.querySelector('#result');
const normalize = (name) => name.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');
const aliases = { ibrahimovic: 'zlatan ibrahimovic', ibrahimopvich: 'zlatan ibrahimovic', 'zlatan ibrahimopvich': 'zlatan ibrahimovic', palmer: 'cole palmer' };
const localDetails = {
  'lionel messi': { nationality: 'Argentina', position: 'Forward', age: 39, shirtNumber: 10, photo: 'https://media.api-sports.io/football/players/154.png' },
  'cristiano ronaldo': { nationality: 'Portugal', position: 'Forward', age: 41, shirtNumber: 7, photo: 'https://media.api-sports.io/football/players/874.png' },
  'mohamed salah': { nationality: 'Egypt', position: 'Forward', age: 34, shirtNumber: 11, photo: 'https://media.api-sports.io/football/players/306.png' },
  'kylian mbappe': { nationality: 'France', position: 'Forward', age: 27, shirtNumber: 9, photo: 'https://media.api-sports.io/football/players/278.png' },
  'erling haaland': { nationality: 'Norway', position: 'Forward', age: 26, shirtNumber: 9 },
  neymar: { nationality: 'Brazil', position: 'Forward', age: 34, shirtNumber: 10, photo: 'https://media.api-sports.io/football/players/276.png' },
  'neymar jr': { nationality: 'Brazil', position: 'Forward', age: 34, shirtNumber: 10, photo: 'https://media.api-sports.io/football/players/276.png' },
  'kevin de bruyne': { nationality: 'Belgium', position: 'Midfielder', age: 35, shirtNumber: 17 },
  'harry kane': { nationality: 'England', position: 'Forward', age: 33, shirtNumber: 9 },
  'jude bellingham': { nationality: 'England', position: 'Midfielder', age: 23, shirtNumber: 5 },
  'vinicius junior': { nationality: 'Brazil', position: 'Forward', age: 26, shirtNumber: 7 },
  'malo gusto': { nationality: 'France', position: 'Defender', age: 23, shirtNumber: 27 },
  'cole palmer': { nationality: 'England', position: 'Midfielder', age: 24, shirtNumber: 20 },
  'zlatan ibrahimovic': { nationality: 'Sweden', position: 'Forward', age: 44, shirtNumber: 11 }
};
const localApiIds = { 'lionel messi': 154, 'cristiano ronaldo': 874, 'mohamed salah': 306, 'kylian mbappe': 278, neymar: 276, 'neymar jr': 276 };
const localCareerStartYears = { 'lionel messi': 2004, 'cristiano ronaldo': 2002, 'mohamed salah': 2010, 'kylian mbappe': 2015, neymar: 2009, 'neymar jr': 2009 };
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
  'Sporting CP': 'https://media.api-sports.io/football/teams/228.png',
  'Manchester United': 'https://media.api-sports.io/football/teams/33.png',
  'Real Madrid': 'https://media.api-sports.io/football/teams/541.png',
  'Juventus': 'https://media.api-sports.io/football/teams/496.png',
  'Al-Nassr': 'https://media.api-sports.io/football/teams/2939.png',
  'Barcelona': 'https://media.api-sports.io/football/teams/529.png',
  "Newell's Old Boys": 'https://tmssl.akamaized.net/images/wappen/head/1286.png',
  'Monaco': 'https://media.api-sports.io/football/teams/91.png',
  'Lyon': 'https://media.api-sports.io/football/teams/80.png',
  'Paris Saint-Germain': 'https://media.api-sports.io/football/teams/85.png',
  'Inter Miami': 'https://media.api-sports.io/football/teams/9564.png',
  'Liverpool': 'https://media.api-sports.io/football/teams/40.png',
  'Chelsea': 'https://media.api-sports.io/football/teams/49.png',
  'Manchester City': 'https://media.api-sports.io/football/teams/50.png',
  'Bayern Munich': 'https://media.api-sports.io/football/teams/157.png',
  'Bayern München': 'https://media.api-sports.io/football/teams/157.png',
  'Santos': 'https://media.api-sports.io/football/teams/128.png',
  'Al-Hilal': 'https://media.api-sports.io/football/teams/2932.png',
  'Al-Hilal Saudi FC': 'https://media.api-sports.io/football/teams/2932.png',
  'Paris Saint Germain': 'https://media.api-sports.io/football/teams/85.png',
  'Roma': 'https://media.api-sports.io/football/teams/497.png',
  'FC Basel': 'https://media.api-sports.io/football/teams/553.png',
  'Millwall': 'https://media.api-sports.io/football/teams/45.png',
  'Norwich City': 'https://media.api-sports.io/football/teams/71.png',
  'Leicester City': 'https://media.api-sports.io/football/teams/46.png',
  'Tottenham Hotspur': 'https://media.api-sports.io/football/teams/47.png',
  'Al Mokawloon': 'https://media.api-sports.io/football/teams/1022.png',
  'Molde': 'https://media.api-sports.io/football/teams/327.png',
  'Red Bull Salzburg': 'https://media.api-sports.io/football/teams/571.png',
  'Borussia Dortmund': 'https://media.api-sports.io/football/teams/165.png',
  'Flamengo': 'https://media.api-sports.io/football/teams/127.png',
  'Genk': 'https://media.api-sports.io/football/teams/554.png',
  'Werder Bremen': 'https://media.api-sports.io/football/teams/162.png',
  'Wolfsburg': 'https://media.api-sports.io/football/teams/161.png',
  'Tottenham': 'https://media.api-sports.io/football/teams/47.png',
  'AC Milan': 'https://media.api-sports.io/football/teams/489.png',
  'Inter Milan': 'https://media.api-sports.io/football/teams/505.png',
  'Birmingham City': 'https://tmssl.akamaized.net/images/wappen/head/337.png',
  'LA Galaxy': 'https://media.api-sports.io/football/teams/1605.png',
  'Napoli': 'https://media.api-sports.io/football/teams/492.png',
  'Ajax': 'https://media.api-sports.io/football/teams/194.png',
  'Malmo': 'https://media.api-sports.io/football/teams/375.png',
  'Malmö': 'https://media.api-sports.io/football/teams/375.png',
  'Malmö FF': 'https://media.api-sports.io/football/teams/375.png'
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
const favoritesStorageKey = 'lineup-favorite-players';
let favorites = loadFavorites();
let gameTarget = null;

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
  updateFavoritesPanel();
  if (!favoritesPanel.hidden) favoritesPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showCareerPage() {
  landing.hidden = true;
  careerPage.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLandingPage(event) {
  event.preventDefault();
  careerPage.hidden = true;
  landing.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function gameClubBadge(club, logo) {
  return logo ? `<img src="${logo}" alt="" loading="lazy" />` : `<span class="game-club-initials">${club.split(/\s+/).map((word) => word[0]).join('').slice(0, 3)}</span>`;
}

function renderGameTimeline(player) {
  gameTimeline.innerHTML = player.clubs.map(([club, years, logo]) => `<div class="game-club"><div class="game-club-top">${gameClubBadge(club, getClubLogo(club, logo))}<span>${years}</span></div><b>${club}</b></div>`).join('<span class="game-arrow">→</span>');
}

function chooseGamePlayer() {
  const choices = Object.entries(players).filter(([key]) => key !== 'neymar jr').map(([, player]) => player);
  gameTarget = choices[Math.floor(Math.random() * choices.length)];
  renderGameTimeline(gameTarget);
  gameGuessInput.value = '';
  gameMessage.textContent = '';
  gameMessage.className = 'game-message';
  gameRevealButton.hidden = false;
}

function startGuessGame() {
  gamePanel.hidden = false;
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
  gameMessage.textContent = `THE PLAYER IS ${gameTarget.first} ${gameTarget.last}.`;
  gameMessage.className = 'game-message is-reveal';
  gameRevealButton.hidden = true;
}

careerButton?.addEventListener('click', showCareerPage);
gameButton?.addEventListener('click', startGuessGame);
gameGuessForm?.addEventListener('submit', checkGuess);
gameRevealButton?.addEventListener('click', revealGamePlayer);
gameNextButton?.addEventListener('click', chooseGamePlayer);
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
document.querySelector('#careerPage .logo')?.addEventListener('click', showLandingPage);

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
  const clubs = player.clubs.map(([club, years, logo]) => { const badge = getClubLogo(club, logo); return `<div class="club"><span>${years}</span><div class="club-name">${badge ? `<img src="${badge}" alt="${club} logo" loading="lazy" />` : '<span class="club-placeholder">◆</span>'}<b>${club}</b></div></div>`; }).join('');
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
  } catch {
    result.innerHTML = '<div class="error-state"><strong>LIVE DATA UNAVAILABLE</strong>The secure football API connection is not deployed yet. The built-in players still work.</div>';
  }
}

form.addEventListener('submit', (event) => { event.preventDefault(); searchPlayer(input.value); });
document.querySelectorAll('[data-player]').forEach((button) => button.addEventListener('click', () => { input.value = button.dataset.player; searchPlayer(button.dataset.player); }));
