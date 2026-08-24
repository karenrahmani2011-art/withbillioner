const players = {
  "lionel messi": { first: "Lionel", last: "Messi", country: "ARG / FORWARD", current: "Inter Miami", number: "10", clubs: [["Newell's Old Boys", "1995-2000"], ["Barcelona", "2004-2021"], ["Paris Saint-Germain", "2021-2023"], ["Inter Miami", "2023-NOW"]] },
  "cristiano ronaldo": { first: "Cristiano", last: "Ronaldo", country: "POR / FORWARD", current: "Al-Nassr", number: "07", clubs: [["Sporting CP", "2002-2003"], ["Manchester United", "2003-2009"], ["Real Madrid", "2009-2018"], ["Juventus", "2018-2021"], ["Al-Nassr", "2023-NOW"]] },
  "mohamed salah": { first: "Mohamed", last: "Salah", country: "EGY / FORWARD", current: "Liverpool", number: "11", clubs: [["Al Mokawloon", "2010-2012"], ["FC Basel", "2012-2014"], ["Chelsea", "2014-2016"], ["Roma", "2016-2017"], ["Liverpool", "2017-NOW"]] },
  "kylian mbappe": { first: "Kylian", last: "Mbappe", country: "FRA / FORWARD", current: "Real Madrid", number: "09", clubs: [["Monaco", "2015-2017"], ["Paris Saint-Germain", "2017-2024"], ["Real Madrid", "2024-NOW"]] },
  "erling haaland": { first: "Erling", last: "Haaland", country: "NOR / FORWARD", current: "Manchester City", number: "09", clubs: [["Molde", "2017-2019"], ["Red Bull Salzburg", "2019-2020"], ["Borussia Dortmund", "2020-2022"], ["Manchester City", "2022-NOW"]] },
  "neymar": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Santos", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-2025"], ["Santos", "2025-NOW"]] },
  "neymar jr": { first: "Neymar", last: "Jr", country: "BRA / FORWARD", current: "Santos", number: "10", clubs: [["Santos", "2009-2013"], ["Barcelona", "2013-2017"], ["Paris Saint-Germain", "2017-2023"], ["Al-Hilal", "2023-2025"], ["Santos", "2025-NOW"]] },
  "kevin de bruyne": { first: "Kevin", last: "De Bruyne", country: "BEL / MIDFIELDER", current: "Napoli", number: "17", clubs: [["Genk", "2008-2012"], ["Chelsea", "2012-2014"], ["Werder Bremen", "2012-2013"], ["Wolfsburg", "2014-2015"], ["Manchester City", "2015-2025"], ["Napoli", "2025-NOW"]] },
  "harry kane": { first: "Harry", last: "Kane", country: "ENG / FORWARD", current: "Bayern Munich", number: "09", clubs: [["Tottenham Hotspur", "2011-2023"], ["Millwall", "2012"], ["Norwich City", "2012"], ["Leicester City", "2013"], ["Bayern Munich", "2023-NOW"]] },
  "jude bellingham": { first: "Jude", last: "Bellingham", country: "ENG / MIDFIELDER", current: "Real Madrid", number: "05", clubs: [["Birmingham City", "2019-2020"], ["Borussia Dortmund", "2020-2023"], ["Real Madrid", "2023-NOW"]] },
  "vinicius junior": { first: "Vinicius", last: "Junior", country: "BRA / FORWARD", current: "Real Madrid", number: "07", clubs: [["Flamengo", "2017-2018"], ["Real Madrid", "2018-NOW"]] },
  "malo gusto": { first: "Malo", last: "Gusto", country: "FRA / DEFENDER", current: "Chelsea", number: "27", clubs: [["Lyon", "2016-2023"], ["Chelsea", "2023-NOW"]] },
  "cole palmer": { first: "Cole", last: "Palmer", country: "ENG / MIDFIELDER", current: "Chelsea", number: "20", clubs: [["Manchester City", "2019-2023"], ["Chelsea", "2023-NOW"]] },
  "zlatan ibrahimovic": { first: "Zlatan", last: "Ibrahimovic", country: "SWE / FORWARD", current: "Retired", number: "11", clubs: [["Malmo", "1999-2001"], ["Ajax", "2001-2004"], ["Juventus", "2004-2006"], ["Inter Milan", "2006-2009"], ["Barcelona", "2009-2010"], ["AC Milan", "2010-2012"], ["Paris Saint-Germain", "2012-2016"], ["Manchester United", "2016-2018"], ["LA Galaxy", "2018-2019"], ["AC Milan", "2020-2023"]] }
};

const form = document.querySelector('#searchForm');
const input = document.querySelector('#playerSearch');
const result = document.querySelector('#result');
const normalize = (name) => name.trim().toLowerCase().replace(/\s+/g, ' ');
const aliases = { ibrahimovic: 'zlatan ibrahimovic', ibrahimopvich: 'zlatan ibrahimovic', 'zlatan ibrahimopvich': 'zlatan ibrahimovic', palmer: 'cole palmer' };
const localDetails = {
  'lionel messi': { nationality: 'Argentina', position: 'Forward', age: 39, shirtNumber: 10 },
  'cristiano ronaldo': { nationality: 'Portugal', position: 'Forward', age: 41, shirtNumber: 7 },
  'mohamed salah': { nationality: 'Egypt', position: 'Forward', age: 34, shirtNumber: 11 },
  'kylian mbappe': { nationality: 'France', position: 'Forward', age: 27, shirtNumber: 9 },
  'erling haaland': { nationality: 'Norway', position: 'Forward', age: 26, shirtNumber: 9 },
  neymar: { nationality: 'Brazil', position: 'Forward', age: 34, shirtNumber: 10 },
  'neymar jr': { nationality: 'Brazil', position: 'Forward', age: 34, shirtNumber: 10 },
  'kevin de bruyne': { nationality: 'Belgium', position: 'Midfielder', age: 35, shirtNumber: 17 },
  'harry kane': { nationality: 'England', position: 'Forward', age: 33, shirtNumber: 9 },
  'jude bellingham': { nationality: 'England', position: 'Midfielder', age: 23, shirtNumber: 5 },
  'vinicius junior': { nationality: 'Brazil', position: 'Forward', age: 26, shirtNumber: 7 },
  'malo gusto': { nationality: 'France', position: 'Defender', age: 23, shirtNumber: 27 },
  'cole palmer': { nationality: 'England', position: 'Midfielder', age: 24, shirtNumber: 20 },
  'zlatan ibrahimovic': { nationality: 'Sweden', position: 'Forward', age: 44, shirtNumber: 11 }
};
const landing = document.querySelector('#landing');
const careerPage = document.querySelector('#careerPage');
const careerButton = document.querySelector('#careerButton');

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

careerButton?.addEventListener('click', showCareerPage);
document.querySelector('#careerPage .logo')?.addEventListener('click', showLandingPage);

function renderPlayer(player) {
  const clubs = player.clubs.map(([club, years]) => `<div class="club"><span>${years}</span><b>${club}</b></div>`).join('');
  const nationality = player.nationality || player.country?.split('/')[0]?.trim() || 'International';
  const position = player.position || player.country?.split('/')[1]?.trim() || 'Player';
  const shirtNumber = player.shirtNumber || player.number || '-';
  result.innerHTML = `<article class="player-card"><aside class="player-aside"><div class="player-number">${shirtNumber}</div><small>CAREER TRACE / 001</small></aside><div class="player-info"><div class="player-meta"><p>${nationality.toUpperCase()} / ${position.toUpperCase()}</p><p>ACTIVE PROFILE <span class="live-dot"></span></p></div><h2>${player.first} <span>${player.last}</span></h2><div class="current-club"><span class="current-badge">◆</span><span>Currently playing for <strong>${player.current}</strong></span></div><div class="player-details"><div><span>NATIONALITY</span><b>${nationality}</b></div><div><span>POSITION</span><b>${position}</b></div><div><span>AGE</span><b>${player.age ? `${player.age} years` : '—'}</b></div><div><span>SHIRT</span><b>#${shirtNumber}</b></div></div><div class="journey-label">CLUB JOURNEY / ${player.clubs.length} STOPS</div><div class="journey">${clubs}</div></div></article>`;
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
  if (local) return setTimeout(() => renderPlayer({ ...local, ...localDetails[localKey] }), 260);
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
  } catch {
    result.innerHTML = '<div class="error-state"><strong>LIVE DATA UNAVAILABLE</strong>The secure football API connection is not deployed yet. The built-in players still work.</div>';
  }
}

form.addEventListener('submit', (event) => { event.preventDefault(); searchPlayer(input.value); });
document.querySelectorAll('[data-player]').forEach((button) => button.addEventListener('click', () => { input.value = button.dataset.player; searchPlayer(button.dataset.player); }));
