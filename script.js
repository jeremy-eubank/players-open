// Data Storage
let tournaments = JSON.parse(localStorage.getItem('tournaments')) || [
  {
    id: 1709769600000,
    name: 'Players Open',
    year: 2026,
    location: 'Myrtle Beach, SC',
    start: '2026-03-12',
    end: '2026-03-14',
    notes: '28th Year'
  }
];

let rounds = JSON.parse(localStorage.getItem('rounds')) || [
  {
    id: 1709856000000,
    tournamentId: 1709769600000,
    tournamentName: 'Players Open',
    date: '03/12/2026',
    location: 'World Tour'
  },
  {
    id: 1709942400000,
    tournamentId: 1709769600000,
    tournamentName: 'Players Open',
    date: '03/13/2026',
    location: 'Arrow Head Country Club'
  },
  {
    id: 1710028800000,
    tournamentId: 1709769600000,
    tournamentName: 'Players Open',
    date: '03/14/2026',
    location: 'Myrtle Wood - Palmetto'
  }
];

let players = JSON.parse(localStorage.getItem('players')) || [
  { id: 1, name: 'Rick Self*', hometown: 'By Gawd, WV', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 1, bracket2026: 'Jack Nicklaus' },
  { id: 2, name: 'Allen Linday*', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 2, bracket2026: 'Jack Nicklaus' },
  { id: 3, name: 'Chris Edwards', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 3, bracket2026: 'Jack Nicklaus' },
  { id: 4, name: 'Tim Downer', hometown: 'New Kent, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 4, bracket2026: 'Jack Nicklaus' },
  { id: 5, name: 'Mason Downer', hometown: 'New Kent, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 5, bracket2026: 'Jack Nicklaus' },
  { id: 6, name: 'Mark Morris', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 6, bracket2026: 'Jack Nicklaus' },
  { id: 7, name: 'Jeff Lodge', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 7, bracket2026: 'Jack Nicklaus' },
  { id: 8, name: 'Howie Armstrong*', hometown: 'By Gawd, WV', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 8, bracket2026: 'Jack Nicklaus' },
  { id: 9, name: 'Cameron Downer', hometown: 'New Kent, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 9, bracket2026: 'Jack Nicklaus' },
  { id: 10, name: 'Ronnie Shupe*', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 10, bracket2026: 'Tiger Woods' },
  { id: 11, name: 'Bernie Watson', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 11, bracket2026: 'Tiger Woods' },
  { id: 12, name: 'Bubba Jenkins', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 12, bracket2026: 'Tiger Woods' },
  { id: 13, name: 'Wayne Samuels', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 13, bracket2026: 'Tiger Woods' },
  { id: 14, name: 'Chris Sickal', hometown: 'Lakeside, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 14, bracket2026: 'Tiger Woods' },
  { id: 15, name: 'Travis Thomas', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 15, bracket2026: 'Tiger Woods' },
  { id: 16, name: 'Robert Vick', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 16, bracket2026: 'Tiger Woods' },
  { id: 17, name: 'C.J. Meade', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 17, bracket2026: 'Tiger Woods' },
  { id: 18, name: 'Mitch Dunkum', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 18, bracket2026: 'Tiger Woods' },
  { id: 19, name: 'BJ Funai', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 19, bracket2026: 'Arnold Palmer' },
  { id: 20, name: 'John Holloway', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 20, bracket2026: 'Arnold Palmer' },
  { id: 21, name: 'Andy Self', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 21, bracket2026: 'Arnold Palmer' },
  { id: 22, name: 'Dillon Small', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 22, bracket2026: 'Arnold Palmer' },
  { id: 23, name: 'Eric Kennedy', hometown: 'Alabama', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 23, bracket2026: 'Arnold Palmer' },
  { id: 24, name: 'Ray Valentino*', hometown: 'New Kent, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 24, bracket2026: 'Arnold Palmer' },
  { id: 25, name: 'BJ Throckmorton', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 25, bracket2026: 'Arnold Palmer' },
  { id: 26, name: 'Brian Smith', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 26, bracket2026: 'Arnold Palmer' },
  { id: 27, name: 'Mark McDonough', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 27, bracket2026: 'Arnold Palmer' },
  { id: 28, name: 'David Small', hometown: 'Anchorage, AK', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 28, bracket2026: 'John Daly' },
  { id: 29, name: 'Brett White*', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 29, bracket2026: 'John Daly' },
  { id: 30, name: 'Rob Whelan', hometown: '', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 30, bracket2026: 'John Daly' },
  { id: 31, name: 'J.C. Stott', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 31, bracket2026: 'John Daly' },
  { id: 32, name: 'John McCauley', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 32, bracket2026: 'John Daly' },
  { id: 33, name: 'DJ Hunsucker', hometown: 'Charles City, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 33, bracket2026: 'John Daly' },
  { id: 34, name: 'Dane Hunsucker*', hometown: 'Charles City, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 34, bracket2026: 'John Daly' },
  { id: 35, name: 'Jeff Marr', hometown: 'Varina, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 35, bracket2026: 'John Daly' },
  { id: 36, name: 'Ryan Matzuk*', hometown: 'Lakeside, VA', startYear: 2026, championships: '', moneyEarned: '', headshot: null, rank2026: 36, bracket2026: 'John Daly' }
];
let scores = JSON.parse(localStorage.getItem('scores')) || [];

// Helper function to generate random score
function randomScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate dummy teams and scores for testing
let teams = JSON.parse(localStorage.getItem('teams')) || [
  { id: 101, name: 'Team Rick Self', tournamentId: 1709769600000 },
  { id: 102, name: 'Team Allen Linday', tournamentId: 1709769600000 },
  { id: 103, name: 'Team Chris Edwards', tournamentId: 1709769600000 },
  { id: 104, name: 'Team Tim Downer', tournamentId: 1709769600000 },
  { id: 105, name: 'Team Mason Downer', tournamentId: 1709769600000 },
  { id: 106, name: 'Team Mark Morris', tournamentId: 1709769600000 },
  { id: 107, name: 'Team Jeff Lodge', tournamentId: 1709769600000 },
  { id: 108, name: 'Team Howie Armstrong', tournamentId: 1709769600000 },
  { id: 109, name: 'Team Cameron Downer', tournamentId: 1709769600000 }
];

let brackets = JSON.parse(localStorage.getItem('brackets')) || [
  // Team Rick Self
  { tournamentId: 1709769600000, teamId: 101, playerId: 1, bracket: 'A' },   // Rick Self (JN)
  { tournamentId: 1709769600000, teamId: 101, playerId: 10, bracket: 'B' },  // Ronnie Shupe (TW)
  { tournamentId: 1709769600000, teamId: 101, playerId: 19, bracket: 'C' },  // BJ Funai (AP)
  { tournamentId: 1709769600000, teamId: 101, playerId: 28, bracket: 'D' },  // David Small (JD)
  
  // Team Allen Linday
  { tournamentId: 1709769600000, teamId: 102, playerId: 2, bracket: 'A' },   // Allen Linday (JN)
  { tournamentId: 1709769600000, teamId: 102, playerId: 11, bracket: 'B' },  // Bernie Watson (TW)
  { tournamentId: 1709769600000, teamId: 102, playerId: 20, bracket: 'C' },  // John Holloway (AP)
  { tournamentId: 1709769600000, teamId: 102, playerId: 29, bracket: 'D' },  // Brett White (JD)
  
  // Team Chris Edwards
  { tournamentId: 1709769600000, teamId: 103, playerId: 3, bracket: 'A' },   // Chris Edwards (JN)
  { tournamentId: 1709769600000, teamId: 103, playerId: 12, bracket: 'B' },  // Bubba Jenkins (TW)
  { tournamentId: 1709769600000, teamId: 103, playerId: 21, bracket: 'C' },  // Andy Self (AP)
  { tournamentId: 1709769600000, teamId: 103, playerId: 30, bracket: 'D' },  // Rob Whelan (JD)
  
  // Team Tim Downer
  { tournamentId: 1709769600000, teamId: 104, playerId: 4, bracket: 'A' },   // Tim Downer (JN)
  { tournamentId: 1709769600000, teamId: 104, playerId: 13, bracket: 'B' },  // Wayne Samuels (TW)
  { tournamentId: 1709769600000, teamId: 104, playerId: 22, bracket: 'C' },  // Dillon Small (AP)
  { tournamentId: 1709769600000, teamId: 104, playerId: 31, bracket: 'D' },  // J.C. Stott (JD)
  
  // Team Mason Downer
  { tournamentId: 1709769600000, teamId: 105, playerId: 5, bracket: 'A' },   // Mason Downer (JN)
  { tournamentId: 1709769600000, teamId: 105, playerId: 14, bracket: 'B' },  // Chris Sickal (TW)
  { tournamentId: 1709769600000, teamId: 105, playerId: 23, bracket: 'C' },  // Eric Kennedy (AP)
  { tournamentId: 1709769600000, teamId: 105, playerId: 32, bracket: 'D' },  // John McCauley (JD)
  
  // Team Mark Morris
  { tournamentId: 1709769600000, teamId: 106, playerId: 6, bracket: 'A' },   // Mark Morris (JN)
  { tournamentId: 1709769600000, teamId: 106, playerId: 15, bracket: 'B' },  // Travis Thomas (TW)
  { tournamentId: 1709769600000, teamId: 106, playerId: 24, bracket: 'C' },  // Ray Valentino (AP)
  { tournamentId: 1709769600000, teamId: 106, playerId: 33, bracket: 'D' },  // DJ Hunsucker (JD)
  
  // Team Jeff Lodge
  { tournamentId: 1709769600000, teamId: 107, playerId: 7, bracket: 'A' },   // Jeff Lodge (JN)
  { tournamentId: 1709769600000, teamId: 107, playerId: 16, bracket: 'B' },  // Robert Vick (TW)
  { tournamentId: 1709769600000, teamId: 107, playerId: 25, bracket: 'C' },  // BJ Throckmorton (AP)
  { tournamentId: 1709769600000, teamId: 107, playerId: 34, bracket: 'D' },  // Dane Hunsucker (JD)
  
  // Team Howie Armstrong
  { tournamentId: 1709769600000, teamId: 108, playerId: 8, bracket: 'A' },   // Howie Armstrong (JN)
  { tournamentId: 1709769600000, teamId: 108, playerId: 17, bracket: 'B' },  // C.J. Meade (TW)
  { tournamentId: 1709769600000, teamId: 108, playerId: 26, bracket: 'C' },  // Brian Smith (AP)
  { tournamentId: 1709769600000, teamId: 108, playerId: 35, bracket: 'D' },  // Jeff Marr (JD)
  
  // Team Cameron Downer
  { tournamentId: 1709769600000, teamId: 109, playerId: 9, bracket: 'A' },   // Cameron Downer (JN)
  { tournamentId: 1709769600000, teamId: 109, playerId: 18, bracket: 'B' },  // Mitch Dunkum (TW)
  { tournamentId: 1709769600000, teamId: 109, playerId: 27, bracket: 'C' },  // Mark McDonough (AP)
  { tournamentId: 1709769600000, teamId: 109, playerId: 36, bracket: 'D' }   // Ryan Matzuk (JD)
];

// Generate dummy scores for all players for all 3 rounds
const dummyScores = [];
const bracketRanges = {
  'Jack Nicklaus': { min: 28, max: 45 },
  'Tiger Woods': { min: 22, max: 35 },
  'Arnold Palmer': { min: 18, max: 35 },
  'John Daly': { min: 10, max: 30 }
};

brackets.forEach((bracket, index) => {
  const player = players.find(p => p.id === bracket.playerId);
  const rounds = [1709856000000, 1709942400000, 1710028800000];
  const roundDates = ['03/12/2026', '03/13/2026', '03/14/2026'];
  
  rounds.forEach((roundId, roundIndex) => {
    const range = bracketRanges[player.bracket2026];
    const points = randomScore(range.min, range.max);
    dummyScores.push({
      id: Date.now() + index * 1000 + roundIndex,
      tournamentId: 1709769600000,
      roundId: roundId,
      playerId: bracket.playerId,
      teamId: bracket.teamId,
      date: roundDates[roundIndex],
      points: points,
      strokes: Math.floor(Math.random() * 10) + 70  // Random strokes 70-79
    });
  });
});

if (!localStorage.getItem('scores') || localStorage.getItem('scores') === '[]') {
  scores = dummyScores;
}

let currentPage = {
tournaments: 1,
players: 1,
rounds: 1,
scores: 1
};

const ITEMS_PER_PAGE = 50;

// DOM Elements
const mainInterface = document.getElementById('mainInterface');
const tournamentDetails = document.getElementById('tournamentDetails');
const playerProfile = document.getElementById('playerProfile');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const closeModal = document.getElementById('closeModal');
const confirmDeleteModal = document.getElementById('confirmDeleteModal');
const confirmDeleteYes = document.getElementById('confirmDeleteYes');
const confirmDeleteNo = document.getElementById('confirmDeleteNo');
const bulkScoreModal = document.getElementById('bulkScoreModal');
const bulkScoreForm = document.getElementById('bulkScoreForm');
const closeBulkModal = document.getElementById('closeBulkModal');
const addScoresBtn = document.getElementById('addScoresBtn');
const bulkPlayerModal = document.getElementById('bulkPlayerModal');
const bulkPlayerForm = document.getElementById('bulkPlayerForm');
const closeBulkPlayerModal = document.getElementById('closeBulkPlayerModal');
const bulkAddPlayersBtn = document.getElementById('bulkAddPlayersBtn');
const bulkTeamModal = document.getElementById('bulkTeamModal');
const bulkTeamForm = document.getElementById('bulkTeamForm');
const closeBulkTeamModal = document.getElementById('closeBulkTeamModal');
const bulkAddTeamsBtn = document.getElementById('bulkAddTeamsBtn');
const bulkAddTournamentsBtn = document.getElementById('bulkAddTournamentsBtn');
const bulkTournamentModal = document.getElementById('bulkTournamentModal');
const bulkTournamentForm = document.getElementById('bulkTournamentForm');
const closeBulkTournamentModal = document.getElementById('closeBulkTournamentModal');
const bulkAddRoundsBtn = document.getElementById('bulkAddRoundsBtn');
const bulkRoundModal = document.getElementById('bulkRoundModal');
const bulkRoundForm = document.getElementById('bulkRoundForm');
const closeBulkRoundModal = document.getElementById('closeBulkRoundModal');
const importScoresBtn = document.getElementById('importScoresBtn');
const importCSVModal = document.getElementById('importCSVModal');
const importCSVForm = document.getElementById('importCSVForm');
const closeImportCSVModal = document.getElementById('closeImportCSVModal');
const loadingIndicator = document.getElementById('loading');

// Table Elements
const tournamentTable = document.querySelector('#tournamentTable tbody');
const roundTable = document.querySelector('#roundTable tbody');
const playerTable = document.querySelector('#playerTable tbody');
const scoreTable = document.querySelector('#scoreTable tbody');
const tournamentScoresTable = document.querySelector('#tournamentScoresTable tbody');
const tournamentScoresHead = document.getElementById('tournamentScoresHead');
const teamsTable = document.querySelector('#teamsTable tbody');
const teamsTableHead = document.getElementById('teamsTableHead');

// Sorting States
let sortStates = {
tournaments: { column: 'name', direction: 'asc' },
rounds: { column: 'tournamentName', direction: 'asc' },
players: { column: 'rank2026', direction: 'asc' },
scores: { column: 'tournamentId', direction: 'asc' },
tournamentScores: { column: 'Team', direction: 'asc' }
};

// Tab Switching Function
function switchTab(tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Highlight selected tab button
    event.target.classList.add('active');
}

// Debugging and Modal Control
document.addEventListener('DOMContentLoaded', () => {
[editModal, confirmDeleteModal, bulkScoreModal, bulkPlayerModal, bulkTeamModal, bulkTournamentModal, bulkRoundModal, importCSVModal].forEach(modal => {
modal.classList.add('hidden');
modal.style.display = 'none';
});
updateAll();
setupFilterListeners();

// Back Buttons
document.getElementById('backFromTournament').onclick = () => {
mainInterface.classList.remove('hidden');
tournamentDetails.classList.add('hidden');
};
document.getElementById('backFromPlayer').onclick = () => {
mainInterface.classList.remove('hidden');
playerProfile.classList.add('hidden');
};
});

// Close Modals
closeModal.addEventListener('click', () => {
editModal.classList.add('hidden');
editModal.style.display = 'none';
});

confirmDeleteNo.addEventListener('click', () => {
confirmDeleteModal.classList.add('hidden');
confirmDeleteModal.style.display = 'none';
});

closeBulkModal.addEventListener('click', () => {
bulkScoreModal.classList.add('hidden');
bulkScoreModal.style.display = 'none';
});

closeBulkPlayerModal.addEventListener('click', () => {
bulkPlayerModal.classList.add('hidden');
bulkPlayerModal.style.display = 'none';
});

closeBulkTeamModal.addEventListener('click', () => {
bulkTeamModal.classList.add('hidden');
bulkTeamModal.style.display = 'none';
});

closeBulkTournamentModal.addEventListener('click', () => {
bulkTournamentModal.classList.add('hidden');
bulkTournamentModal.style.display = 'none';
});

closeBulkRoundModal.addEventListener('click', () => {
bulkRoundModal.classList.add('hidden');
bulkRoundModal.style.display = 'none';
});

closeImportCSVModal.addEventListener('click', () => {
importCSVModal.classList.add('hidden');
importCSVModal.style.display = 'none';
});

// Validation Functions
function isUniqueTournament(name, year, excludeId = null) {
return !tournaments.some(t => t.name === name && t.year === year && t.id !== excludeId);
}

function isUniquePlayer(name, excludeId = null) {
return !players.some(p => p.name === name && p.id !== excludeId);
}

function isUniqueTeam(name, tournamentId, excludeId = null) {
return !teams.some(t => t.name === name && t.tournamentId == tournamentId && t.id !== excludeId);
}

function isBracketUnique(tournamentId, teamId, bracket, excludePlayerId = null) {
return !brackets.some(b => b.tournamentId == tournamentId && b.teamId == teamId && b.bracket === bracket && b.playerId !== excludePlayerId);
}

// Populate Dropdowns
function updateDropdowns(tournamentId = null) {
const roundTournament = document.getElementById('bulkRoundTournament');
const bulkPlayer = document.getElementById('bulkPlayer');
const bulkTeam = document.getElementById('bulkTeam');

if (roundTournament) {
roundTournament.innerHTML = '<option value="">Select Tournament</option>' + tournaments.map(t => `<option value="${t.id}">${t.name} (${t.year})</option>`).join('');
}
if (bulkPlayer) {
bulkPlayer.innerHTML = '<option value="">Select Player</option>' + players.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
}
if (bulkTeam && tournamentId) {
const tournamentTeams = teams.filter(t => t.tournamentId == tournamentId);
bulkTeam.innerHTML = '<option value="">No Team</option>' + tournamentTeams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
}
}

// Form Submissions with Loading Indicator
function showLoading() {
loadingIndicator.classList.remove('hidden');
}

function hideLoading() {
loadingIndicator.classList.add('hidden');
}

// Bulk Add Players (Updated)
bulkAddPlayersBtn.addEventListener('click', () => {
const bulkPlayerEntries = document.getElementById('bulkPlayerEntries');
bulkPlayerEntries.innerHTML = '';
const countSelect = document.getElementById('bulkPlayerCount');
countSelect.value = '1';
const generatePlayerEntries = (count) => {
bulkPlayerEntries.innerHTML = '';
for (let i = 0; i < count; i++) {
const entry = document.createElement('div');
entry.className = 'player-entry';
entry.innerHTML = `
<label>Player ${i + 1} Name:
<input type="text" name="player-name-${i}" placeholder="Name" required>
</label>
<label>Player ${i + 1} Hometown:
<input type="text" name="player-hometown-${i}" placeholder="Hometown" required>
</label>
`;
bulkPlayerEntries.appendChild(entry);
}
};
generatePlayerEntries(1);
// Use addEventListener instead of onchange for better reliability
countSelect.addEventListener('change', (e) => generatePlayerEntries(parseInt(e.target.value)));
bulkPlayerModal.classList.remove('hidden');
bulkPlayerModal.style.display = 'flex';
});

bulkPlayerForm.addEventListener('submit', (e) => {
e.preventDefault();
showLoading();
const count = parseInt(document.getElementById('bulkPlayerCount').value);
for (let i = 0; i < count; i++) {
const name = document.querySelector(`input[name="player-name-${i}"]`).value;
const hometown = document.querySelector(`input[name="player-hometown-${i}"]`).value;
if (!isUniquePlayer(name)) {
alert(`Player name "${name}" must be unique.`);
hideLoading();
return;
}
players.push({
id: Date.now() + i,
name,
hometown,
startYear: new Date().getFullYear(),
championships: '',
moneyEarned: '',
headshot: null // Initialize headshot property
});
}
localStorage.setItem('players', JSON.stringify(players));
bulkPlayerModal.classList.add('hidden');
bulkPlayerModal.style.display = 'none';
updatePlayers();
updateDropdowns();
hideLoading();
});

// Bulk Add Tournaments
bulkAddTournamentsBtn.addEventListener('click', () => {
const bulkTournamentEntries = document.getElementById('bulkTournamentEntries');
bulkTournamentEntries.innerHTML = '';
const countSelect = document.getElementById('bulkTournamentCount');
countSelect.value = '1';
bulkTournamentEntries.innerHTML = `
<label>Tournament 1 Name:
<input type="text" name="tourney-name-0" placeholder="Tournament Name" required>
</label>
<label>Tournament 1 Year:
<input type="number" name="tourney-year-0" placeholder="Year" min="1900" max="2100" required>
</label>
<label>Tournament 1 Location:
<input type="text" name="tourney-location-0" placeholder="City, State" required>
</label>
<label>Tournament 1 Start Date:
<input type="date" name="tourney-start-0" required>
</label>
<label>Tournament 1 End Date:
<input type="date" name="tourney-end-0" required>
</label>
<label>Tournament 1 Notes:
<textarea name="tourney-notes-0" placeholder="Notes"></textarea>
</label>
`;
countSelect.onchange = (e) => {
const count = parseInt(e.target.value);
bulkTournamentEntries.innerHTML = Array.from({ length: count }, (_, i) => `
<label>Tournament ${i + 1} Name:
<input type="text" name="tourney-name-${i}" placeholder="Tournament Name" required>
</label>
<label>Tournament ${i + 1} Year:
<input type="number" name="tourney-year-${i}" placeholder="Year" min="1900" max="2100" required>
</label>
<label>Tournament ${i + 1} Location:
<input type="text" name="tourney-location-${i}" placeholder="City, State" required>
</label>
<label>Tournament ${i + 1} Start Date:
<input type="date" name="tourney-start-${i}" required>
</label>
<label>Tournament ${i + 1} End Date:
<input type="date" name="tourney-end-${i}" required>
</label>
<label>Tournament ${i + 1} Notes:
<textarea name="tourney-notes-${i}" placeholder="Notes"></textarea>
</label>
`).join('');
};
bulkTournamentModal.classList.remove('hidden');
bulkTournamentModal.style.display = 'flex';
});

bulkTournamentForm.addEventListener('submit', (e) => {
e.preventDefault();
showLoading();
const count = parseInt(document.getElementById('bulkTournamentCount').value);
for (let i = 0; i < count; i++) {
const name = document.getElementsByName(`tourney-name-${i}`)[0].value;
const year = document.getElementsByName(`tourney-year-${i}`)[0].value;
if (!isUniqueTournament(name, year)) {
alert(`Tournament "${name}" (${year}) must be unique.`);
hideLoading();
return;
}
const tournament = {
id: Date.now() + i,
name,
year,
location: document.getElementsByName(`tourney-location-${i}`)[0].value,
start: document.getElementsByName(`tourney-start-${i}`)[0].value,
end: document.getElementsByName(`tourney-end-${i}`)[0].value,
notes: document.getElementsByName(`tourney-notes-${i}`)[0].value
};
tournaments.push(tournament);
}
localStorage.setItem('tournaments', JSON.stringify(tournaments));
bulkTournamentModal.classList.add('hidden');
bulkTournamentModal.style.display = 'none';
updateTournaments();
updateDropdowns();
hideLoading();
});

// Bulk Add Rounds
bulkAddRoundsBtn.addEventListener('click', () => {
const bulkRoundEntries = document.getElementById('bulkRoundEntries');
bulkRoundEntries.innerHTML = '';
const countSelect = document.getElementById('bulkRoundCount');
countSelect.value = '1';
bulkRoundEntries.innerHTML = `
<label>Round 1 Date:
<input type="date" name="round-date-0" required>
</label>
<label>Round 1 Location:
<input type="text" name="round-location-0" placeholder="Location" required>
</label>
`;
countSelect.onchange = (e) => {
const count = parseInt(e.target.value);
bulkRoundEntries.innerHTML = Array.from({ length: count }, (_, i) => `
<label>Round ${i + 1} Date:
<input type="date" name="round-date-${i}" required>
</label>
<label>Round ${i + 1} Location:
<input type="text" name="round-location-${i}" placeholder="Location" required>
</label>
`).join('');
};
updateDropdowns();
bulkRoundModal.classList.remove('hidden');
bulkRoundModal.style.display = 'flex';
});

bulkRoundForm.addEventListener('submit', (e) => {
e.preventDefault();
showLoading();
const tournamentId = document.getElementById('bulkRoundTournament').value;
const tournament = tournaments.find(t => t.id == tournamentId);
const count = parseInt(document.getElementById('bulkRoundCount').value);
for (let i = 0; i < count; i++) {
const round = {
id: Date.now() + i,
tournamentId,
tournamentName: tournament.name,
date: document.getElementsByName(`round-date-${i}`)[0].value,
location: document.getElementsByName(`round-location-${i}`)[0].value
};
rounds.push(round);
}
localStorage.setItem('rounds', JSON.stringify(rounds));
bulkRoundModal.classList.add('hidden');
bulkRoundModal.style.display = 'none';
updateRounds();
updateDropdowns();
hideLoading();
});

// Bulk Add Teams
bulkAddTeamsBtn.addEventListener('click', () => {
const tournamentId = tournamentDetails.dataset.tournamentId;
if (!tournamentId) return;
const bulkTeamEntries = document.getElementById('bulkTeamEntries');
bulkTeamEntries.innerHTML = '';
const countSelect = document.getElementById('bulkTeamCount');
countSelect.value = '1';
const generateTeamEntries = (count) => {
bulkTeamEntries.innerHTML = '';
for (let i = 0; i < count; i++) {
const entry = document.createElement('div');
entry.className = 'team-entry';
entry.innerHTML = `
<label>Team ${i + 1} Name:
<input type="text" name="team-name-${i}" placeholder="Team Name" required>
</label>
`;
bulkTeamEntries.appendChild(entry);
}
};
generateTeamEntries(1);
countSelect.onchange = (e) => generateTeamEntries(parseInt(e.target.value));
bulkTeamModal.classList.remove('hidden');
bulkTeamModal.style.display = 'flex';
});

bulkTeamForm.addEventListener('submit', (e) => {
e.preventDefault();
showLoading();
const tournamentId = tournamentDetails.dataset.tournamentId;
const count = parseInt(document.getElementById('bulkTeamCount').value);
for (let i = 0; i < count; i++) {
const name = document.querySelector(`input[name="team-name-${i}"]`).value;
if (!isUniqueTeam(name, tournamentId)) {
alert(`Team name "${name}" must be unique within the tournament.`);
hideLoading();
return;
}
teams.push({
id: Date.now() + i,
name,
tournamentId
});
}
localStorage.setItem('teams', JSON.stringify(teams));
bulkTeamModal.classList.add('hidden');
bulkTeamModal.style.display = 'none';
showTournamentDetails(tournamentId);
hideLoading();
});

// Bulk Add Scores
addScoresBtn.addEventListener('click', () => {
const tournamentId = tournamentDetails.dataset.tournamentId;
if (!tournamentId) return;
const tournamentRounds = rounds.filter(r => r.tournamentId == tournamentId).sort((a, b) => new Date(a.date) - new Date(b.date));
const roundSelect = document.getElementById('bulkScoreRound');
roundSelect.innerHTML = tournamentRounds.map(r => `<option value="${r.id}">${formatDate(r.date)} - ${r.location}</option>`).join('');
const bulkScoreEntries = document.getElementById('bulkScoreEntries');
bulkScoreEntries.innerHTML = '';
const countSelect = document.getElementById('bulkPlayerCount');
countSelect.value = '1';
const generateScoreEntries = (count) => {
bulkScoreEntries.innerHTML = '';
for (let i = 0; i < count; i++) {
const entry = document.createElement('div');
entry.className = 'score-entry';
entry.innerHTML = `
<label>Player ${i + 1}:
<select name="player-id-${i}" required>
${players.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
</select>
</label>
<label>Team:
<select name="team-id-${i}">
<option value="">No Team</option>
${teams.filter(t => t.tournamentId == tournamentId).map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
</select>
</label>
<label>Points:
<input type="number" name="points-${i}" required>
</label>
<label>Strokes:
<input type="number" name="strokes-${i}" required>
</label>
`;
bulkScoreEntries.appendChild(entry);
}
};
generateScoreEntries(1);
countSelect.onchange = (e) => generateScoreEntries(parseInt(e.target.value));
bulkScoreModal.classList.remove('hidden');
bulkScoreModal.style.display = 'flex';
});

bulkScoreForm.addEventListener('submit', (e) => {
e.preventDefault();
showLoading();
const tournamentId = tournamentDetails.dataset.tournamentId;
const roundId = document.getElementById('bulkScoreRound').value;
const count = parseInt(document.getElementById('bulkPlayerCount').value);
for (let i = 0; i < count; i++) {
const playerId = document.querySelector(`select[name="player-id-${i}"]`).value;
const teamId = document.querySelector(`select[name="team-id-${i}"]`).value || null;
const points = document.querySelector(`input[name="points-${i}"]`).value;
const strokes = document.querySelector(`input[name="strokes-${i}"]`).value;
scores.push({
id: Date.now() + i,
tournamentId,
roundId,
playerId,
teamId,
date: rounds.find(r => r.id == roundId).date,
points,
strokes
});
}
localStorage.setItem('scores', JSON.stringify(scores));
bulkScoreModal.classList.add('hidden');
bulkScoreModal.style.display = 'none';
showTournamentDetails(tournamentId);
hideLoading();
});

// Import Scores
importScoresBtn.addEventListener('click', () => {
importCSVModal.classList.remove('hidden');
importCSVModal.style.display = 'flex';
});

importCSVForm.addEventListener('submit', (e) => {
e.preventDefault();
showLoading();
const fileInput = document.getElementById('csvFileInput');
const file = fileInput.files[0];
if (file) {
handleCSVImport(file);
importCSVModal.classList.add('hidden');
importCSVModal.style.display = 'none';
fileInput.value = '';
}
hideLoading();
});

// Sorting Function
function sortData(data, column, direction, type = 'string', customSort = null) {
return data.sort((a, b) => {
let valA = customSort ? customSort(a) : a[column];
let valB = customSort ? customSort(b) : b[column];

if (valA === 'N/A') valA = -Infinity;
if (valB === 'N/A') valB = -Infinity;

if (type === 'number') {
valA = Number(valA);
valB = Number(valB);
} else if (type === 'date') {
valA = new Date(valA);
valB = new Date(valB);
}

if (direction === 'asc') {
return valA > valB ? 1 : valA < valB ? -1 : 0;
} else {
return valA < valB ? 1 : valA > valB ? -1 : 0;
}
});
}

// Filtering Function
function filterData(data, filter, fields, transform = null) {
if (!filter) return data;
return data.filter(item => {
const transformedItem = transform ? transform(item) : item;
return fields.some(field =>
String(transformedItem[field]).toLowerCase().includes(filter.toLowerCase())
);
});
}

// Pagination Function
function renderPagination(tableId, data, page, updateFunc) {
const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
const paginationDiv = document.getElementById(`${tableId}Pagination`);
paginationDiv.innerHTML = '';

if (totalPages <= 1) return;

const prevBtn = document.createElement('button');
prevBtn.textContent = 'Previous';
prevBtn.disabled = page === 1;
prevBtn.onclick = () => {
currentPage[tableId]--;
updateFunc(document.getElementById(`${tableId}Filter`)?.value || '');
};
paginationDiv.appendChild(prevBtn);

const pageSpan = document.createElement('span');
pageSpan.textContent = `Page ${page} of ${totalPages}`;
paginationDiv.appendChild(pageSpan);

const nextBtn = document.createElement('button');
nextBtn.textContent = 'Next';
nextBtn.disabled = page === totalPages;
nextBtn.onclick = () => {
currentPage[tableId]++;
updateFunc(document.getElementById(`${tableId}Filter`)?.value || '');
};
paginationDiv.appendChild(nextBtn);
}

// Filter Listeners
function setupFilterListeners() {
document.getElementById('playersFilter').addEventListener('input', (e) => {
currentPage.players = 1;
updatePlayers(e.target.value);
});
document.getElementById('roundsFilter').addEventListener('input', (e) => {
currentPage.rounds = 1;
updateRounds(e.target.value);
});
document.getElementById('scoresFilter').addEventListener('input', (e) => {
currentPage.scores = 1;
updateScores(e.target.value);
});
document.getElementById('tournamentsFilter').addEventListener('input', (e) => {
currentPage.tournaments = 1;
updateTournaments(e.target.value);
});
}

// Date Formatting
function formatDate(dateStr) {
// If already in MM/DD/YYYY format, return as-is
if (dateStr && /^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
return dateStr;
}
// Otherwise parse and format
const date = new Date(dateStr);
if (isNaN(date)) return 'Invalid Date';
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const year = date.getFullYear();
return `${month}/${day}/${year}`;
}

// Abbreviate location names (for mobile)
function abbreviateLocation(location) {
if (!location) return '';
return location
.split(/[\s\-]+/) // Split by spaces or dashes
.map(word => word.charAt(0).toUpperCase()) // Take first letter of each word
.join('.') + '.'; // Join with periods
}

// Update Tables
function updateTournaments(filter = '') {
const filtered = filterData(tournaments, filter, ['name', 'location', 'start', 'end', 'notes']);
const sorted = sortData(filtered, sortStates.tournaments.column, sortStates.tournaments.direction,
sortStates.tournaments.column === 'start' || sortStates.tournaments.column === 'end' ? 'date' : 'string');
const start = (currentPage.tournaments - 1) * ITEMS_PER_PAGE;
const end = start + ITEMS_PER_PAGE;
const paginated = sorted.slice(start, end);

tournamentTable.innerHTML = paginated.map(t => `
<tr>
<td class="clickable" onclick="showTournamentDetails(${t.id})">${t.name}</td>
<td>${t.location}</td>
<td>${formatDate(t.start)}</td>
<td>${formatDate(t.end)}</td>
<td>
<button onclick="showEditModal('tournament', ${t.id})">Edit</button>
<button onclick="showConfirmDelete('tournament', ${t.id})">Delete</button>
</td>
</tr>
`).join('');
updateSortIndicators('#tournamentTable', sortStates.tournaments);
renderPagination('tournaments', sorted, currentPage.tournaments, updateTournaments);
}

function updateRounds(filter = '') {
const filtered = filterData(rounds, filter, ['location']);
const sorted = sortData(filtered, sortStates.rounds.column, sortStates.rounds.direction,
sortStates.rounds.column === 'date' ? 'date' : 'string');
const start = (currentPage.rounds - 1) * ITEMS_PER_PAGE;
const end = start + ITEMS_PER_PAGE;
const paginated = sorted.slice(start, end);

roundTable.innerHTML = paginated.map(r => `
<tr>
<td>${r.tournamentName}</td>
<td>${formatDate(r.date)}</td>
<td>${r.location}</td>
<td>
<button onclick="showEditModal('round', ${r.id})">Edit</button>
<button onclick="showConfirmDelete('round', ${r.id})">Delete</button>
</td>
</tr>
`).join('');
updateSortIndicators('#roundTable', sortStates.rounds);
renderPagination('rounds', sorted, currentPage.rounds, updateRounds);
}

function updatePlayers(filter = '') {
const filtered = filterData(players, filter, ['name']);
const sorted = sortData(filtered, sortStates.players.column, sortStates.players.direction, 
sortStates.players.column === 'rank2026' ? 'number' : 'string',
sortStates.players.column === 'rank2026' ? p => Number(p.rank2026) : null);
const start = (currentPage.players - 1) * ITEMS_PER_PAGE;
const end = start + ITEMS_PER_PAGE;
const paginated = sorted.slice(start, end);

playerTable.innerHTML = paginated.map(p => {
return `
<tr>
<td>${p.rank2026 || 'N/A'}</td>
<td>
<div class="player-name-cell" onclick="showPlayerProfile(${p.id})" style="cursor: pointer;">
<div style="font-weight: bold; color: #072B55;">${p.name}</div>
<div style="font-size: 12px; color: #666;">${p.hometown || 'No hometown'}</div>
</div>
</td>
</tr>
`;
}).join('');
updateSortIndicators('#playerTable', sortStates.players);
renderPagination('players', sorted, currentPage.players, updatePlayers);
}

function updateScores(filter = '') {
const filtered = filterData(scores, filter, ['playerName'], (item) => ({
...item,
playerName: players.find(p => p.id == item.playerId)?.name || 'Unknown'
}));
const sorted = sortData(filtered, sortStates.scores.column, sortStates.scores.direction,
sortStates.scores.column === 'points' || sortStates.scores.column === 'strokes' ? 'number' :
sortStates.scores.column === 'date' ? 'date' : 'string',
sortStates.scores.column === 'tournamentId' ? s => tournaments.find(t => t.id == s.tournamentId)?.name || 'Unknown' :
sortStates.scores.column === 'playerId' ? s => players.find(p => p.id == s.playerId)?.name || 'Unknown' :
sortStates.scores.column === 'location' ? s => rounds.find(r => r.id == s.roundId)?.location || 'Unknown' : null);
const start = (currentPage.scores - 1) * ITEMS_PER_PAGE;
const end = start + ITEMS_PER_PAGE;
const paginated = sorted.slice(start, end);
const highlightToggle = document.getElementById('highlightScoresToggle').checked;

scoreTable.innerHTML = paginated.map(s => {
const tournament = tournaments.find(t => t.id == s.tournamentId);
const player = players.find(p => p.id == s.playerId);
const round = rounds.find(r => r.id == s.roundId);
const playerScores = scores.filter(sc => sc.playerId == s.playerId);
const avgPoints = playerScores.length ? (playerScores.reduce((sum, sc) => sum + Number(sc.points), 0) / playerScores.length) : 0;
const pointClass = highlightToggle && s.points > avgPoints ? 'above-avg' : highlightToggle && s.points < avgPoints ? 'below-avg' : '';
return `
<tr>
<td>${tournament ? tournament.name : 'Unknown'}</td>
<td>${formatDate(s.date)}</td>
<td>${round?.location || 'Unknown'}</td>
<td>${player ? player.name : 'Unknown'}</td>
<td class="${pointClass}">${s.points}</td>
<td>${s.strokes}</td>
<td>
<button onclick="showEditModal('score', ${s.id})">Edit</button>
<button onclick="showConfirmDelete('score', ${s.id})">Delete</button>
</td>
</tr>
`;
}).join('');
document.getElementById('highlightScoresToggle').onchange = () => updateScores(filter);
updateSortIndicators('#scoreTable', sortStates.scores);
renderPagination('scores', sorted, currentPage.scores, updateScores);
}

// Weighted Average Calculation
function calculateWeightedAverage(playerId) {
const playerScores = scores.filter(s => s.playerId == playerId)
.sort((a, b) => new Date(b.date) - new Date(a.date))
.slice(0, 6);
return playerScores.length ? (playerScores.reduce((sum, s) => sum + Number(s.points), 0) / playerScores.length).toFixed(2) : 0;
}

// Tournament Details
function showTournamentDetails(tournamentId) {
const tournament = tournaments.find(t => t.id == tournamentId);
if (!tournament) return;
document.getElementById('tournamentTitle').textContent = `${tournament.name} (${tournament.year})`;
const notesTextarea = document.getElementById('tournamentNotes');
notesTextarea.value = tournament.notes || '';
notesTextarea.readOnly = true;
const editNotesBtn = document.getElementById('editNotesBtn');
const saveNotesBtn = document.getElementById('saveNotesBtn');
editNotesBtn.classList.remove('hidden');
saveNotesBtn.classList.add('hidden');

editNotesBtn.onclick = () => {
notesTextarea.readOnly = false;
editNotesBtn.classList.add('hidden');
saveNotesBtn.classList.remove('hidden');
};

saveNotesBtn.onclick = () => {
showLoading();
tournament.notes = notesTextarea.value;
localStorage.setItem('tournaments', JSON.stringify(tournaments));
notesTextarea.readOnly = true;
editNotesBtn.classList.remove('hidden');
saveNotesBtn.classList.add('hidden');
hideLoading();
};

tournamentDetails.dataset.tournamentId = tournamentId;

// Teams Table - Mobile Optimized
const tournamentRounds = rounds.filter(r => r.tournamentId == tournamentId).sort((a, b) => new Date(a.date) - new Date(b.date));
const tournamentScores = scores.filter(s => s.tournamentId == tournamentId);
const tournamentTeams = teams.filter(t => t.tournamentId == tournamentId);
const uniqueRoundLocations = tournamentRounds.map(r => ({ date: formatDate(r.date), location: r.location, id: r.id }));

// Sort teams by total score (descending)
const sortedTeams = tournamentTeams.sort((a, b) => {
const totalA = scores.filter(s => s.teamId == a.id && s.tournamentId == tournamentId).reduce((sum, s) => sum + Number(s.points), 0);
const totalB = scores.filter(s => s.teamId == b.id && s.tournamentId == tournamentId).reduce((sum, s) => sum + Number(s.points), 0);
return totalB - totalA; // Descending (highest first)
});

// Build team sections with headers + individual tables
const teamsHtml = sortedTeams.map((t, teamIndex) => {
const teamScores = scores.filter(s => s.teamId == t.id && s.tournamentId == tournamentId);
const teamBrackets = brackets.filter(b => b.tournamentId == tournamentId && b.teamId == t.id);
const totalPoints = teamScores.reduce((sum, s) => sum + Number(s.points), 0);
const isTopTeam = teamIndex === 0;

// Create header row (team name spans all columns)
const numColumns = uniqueRoundLocations.length + 2; // rounds + player name + total
const headerRow = `
<tr class="team-header-row ${isTopTeam ? 'top-team' : ''}">
<td colspan="${numColumns}" class="team-header-cell">${t.name} - Total: ${totalPoints}</td>
</tr>
`;

// Create player rows with bracket letter + name + scores + total
const playerRows = teamBrackets
.sort((a, b) => ['A', 'B', 'C', 'D'].indexOf(a.bracket) - ['A', 'B', 'C', 'D'].indexOf(b.bracket))
.map(b => {
const player = players.find(p => p.id == b.playerId);
const playerScoresForTournament = scores.filter(s => s.playerId == b.playerId && s.tournamentId == tournamentId);
const playerTotal = playerScoresForTournament.reduce((sum, s) => sum + Number(s.points), 0);
const scoreColumns = uniqueRoundLocations.map(rl => {
const playerScore = teamScores.find(s => s.playerId == b.playerId && s.roundId == rl.id);
return `<td class="team-score">${playerScore ? playerScore.points : '-'}</td>`;
}).join('');
return `
<tr class="team-player-row">
<td class="team-player-name">${b.bracket} - ${player ? player.name : 'Unknown'}</td>
${scoreColumns}
<td class="team-player-total">${playerTotal}</td>
</tr>
`;
}).join('');

// Create team total row
const totalRow = `
<tr class="team-total-row">
<td class="team-total-label">Team Total</td>
${uniqueRoundLocations.map(rl => {
const roundTotal = teamScores.filter(s => s.roundId == rl.id).reduce((sum, s) => sum + Number(s.points), 0);
return `<td class="team-total-value">${roundTotal}</td>`;
}).join('')}
<td class="team-grand-total">${totalPoints}</td>
</tr>
`;

return headerRow + playerRows + totalRow;
}).join('');

teamsTableHead.innerHTML = `
<tr class="team-header-row">
<th class="team-player-header">Player</th>
${uniqueRoundLocations.map(rl => {
const abbrev = abbreviateLocation(rl.location);
return `<th class="team-round-header" data-location="${rl.location}" data-abbrev="${abbrev}"><span class="round-full">${rl.location}</span><span class="round-abbrev">${abbrev}</span></th>`;
}).join('')}
<th class="team-total-header">Total</th>
</tr>
`;

teamsTable.innerHTML = teamsHtml;

// Player Scores Table
const uniquePlayers = [...new Set(tournamentScores.map(s => s.playerId))];
const highlightToggle = document.getElementById('highlightTournamentScoresToggle').checked;

tournamentScoresHead.innerHTML = `
<tr>
<th data-key="Team">Team</th>
<th data-key="Player">Player</th>
${uniqueRoundLocations.map(rl => `<th data-key="${rl.id}">${rl.date}<br>${rl.location}</th>`).join('')}
<th data-key="Total">Total</th>
<th data-key="Average">Average</th>
<th>Actions</th>
</tr>
`;

const playerScoresData = uniquePlayers.map(playerId => {
const player = players.find(p => p.id == playerId);
const playerScores = tournamentScores.filter(s => s.playerId == playerId);
const team = teams.find(t => t.id == playerScores[0]?.teamId);
const scoreByLocation = {};
const avgPoints = playerScores.length ? (playerScores.reduce((sum, s) => sum + Number(s.points), 0) / playerScores.length) : 0;
playerScores.forEach(s => {
const round = rounds.find(r => r.id == s.roundId);
const key = round.id;
scoreByLocation[key] = { points: s.points, class: highlightToggle && s.points > avgPoints ? 'above-avg' : highlightToggle && s.points < avgPoints ? 'below-avg' : '' };
});
const totalPoints = playerScores.reduce((sum, s) => sum + Number(s.points), 0);
const avgDisplay = playerScores.length ? avgPoints.toFixed(2) : 0;
return {
playerId,
teamName: team ? team.name : 'No Team',
playerName: player ? player.name : 'Unknown',
scores: scoreByLocation,
totalPoints,
avgDisplay
};
});

const sortType = ['Team', 'Player'].includes(sortStates.tournamentScores.column) ? 'string' : 'number';
const customSortFunc = sortStates.tournamentScores.column === 'Team' ? p => p.teamName :
sortStates.tournamentScores.column === 'Player' ? p => p.playerName :
sortStates.tournamentScores.column === 'Total' ? p => Number(p.totalPoints) :
sortStates.tournamentScores.column === 'Average' ? p => Number(p.avgDisplay) :
uniqueRoundLocations.some(rl => rl.id.toString() === sortStates.tournamentScores.column) ? p => Number(p.scores[sortStates.tournamentScores.column]?.points || 0) : null;

const sortedPlayerScores = sortData(playerScoresData, sortStates.tournamentScores.column, sortStates.tournamentScores.direction, sortType, customSortFunc);

tournamentScoresTable.innerHTML = sortedPlayerScores.map(p => `
<tr>
<td>${p.teamName}</td>
<td>${p.playerName}</td>
${uniqueRoundLocations.map(rl => `<td class="${p.scores[rl.id]?.class || ''}">${p.scores[rl.id]?.points || '-'}</td>`).join('')}
<td>${p.totalPoints}</td>
<td>${p.avgDisplay}</td>
<td>
<button onclick="showEditScoreModal('${p.playerId}', '${tournamentId}')">Edit</button>
</td>
</tr>
`).join('');

// Add sort functionality to headers
const headers = tournamentScoresHead.querySelectorAll('th[data-key]');
headers.forEach(th => {
th.onclick = () => {
const key = th.dataset.key;
if (sortStates.tournamentScores.column === key) {
sortStates.tournamentScores.direction = sortStates.tournamentScores.direction === 'asc' ? 'desc' : 'asc';
} else {
sortStates.tournamentScores.column = key;
sortStates.tournamentScores.direction = 'asc';
}
showTournamentDetails(tournamentId);
};
});

// Update sort indicators
headers.forEach(th => {
th.classList.remove('asc', 'desc');
if (th.dataset.key === sortStates.tournamentScores.column) {
th.classList.add(sortStates.tournamentScores.direction);
}
});

document.getElementById('highlightTournamentScoresToggle').onchange = () => showTournamentDetails(tournamentId);
updateDropdowns(tournamentId);
mainInterface.classList.add('hidden');
tournamentDetails.classList.remove('hidden');
}

// Edit Team Modal
function showEditTeamModal(teamId, tournamentId) {
const team = teams.find(t => t.id == teamId);
if (!team) return;
const editForm = document.getElementById('editForm');
editForm.innerHTML = `
<label>Team Name:
<input type="text" name="name" value="${team.name}" required>
</label>
<h3>Players</h3>
<div id="playerAssignments"></div>
<button type="button" id="addPlayerBtn">Add Player</button>
<button type="submit">Save</button>
`;

const teamBrackets = brackets.filter(b => b.tournamentId == tournamentId && b.teamId == teamId);
let assignments = teamBrackets.map(b => ({ playerId: b.playerId, bracket: b.bracket }));

function renderAssignments() {
const playerAssignmentsDiv = document.getElementById('playerAssignments');
playerAssignmentsDiv.innerHTML = '';
assignments.forEach((a, index) => {
const playerSelect = document.createElement('select');
playerSelect.name = `playerId-${index}`;
playerSelect.innerHTML = `<option value="">Select Player</option>` +
players.map(p => `<option value="${p.id}" ${p.id == a.playerId ? 'selected' : ''}>${p.name}</option>`).join('');
const bracketSelect = document.createElement('select');
bracketSelect.name = `bracket-${index}`;
bracketSelect.innerHTML = `<option value="">Select Bracket</option>` +
['A', 'B', 'C', 'D'].map(br => `<option value="${br}" ${br === a.bracket ? 'selected' : ''}>${br}</option>`).join('');
const removeBtn = document.createElement('button');
removeBtn.type = 'button';
removeBtn.textContent = 'Remove';
removeBtn.onclick = () => {
assignments.splice(index, 1);
renderAssignments();
};
const row = document.createElement('div');
row.id = `playerRow-${index}`;
row.appendChild(document.createTextNode('Player: '));
row.appendChild(playerSelect);
row.appendChild(document.createTextNode(' Bracket: '));
row.appendChild(bracketSelect);
row.appendChild(removeBtn);
playerAssignmentsDiv.appendChild(row);
});
}

renderAssignments();

document.getElementById('addPlayerBtn').onclick = () => {
assignments.push({ playerId: '', bracket: '' });
renderAssignments();
};

editModal.classList.remove('hidden');
editModal.style.display = 'flex';

editForm.onsubmit = (e) => {
e.preventDefault();
showLoading();

const formData = new FormData(editForm);
const teamName = formData.get('name');

let newAssignments = [];
let index = 0;
while (true) {
const playerId = formData.get(`playerId-${index}`);
const bracket = formData.get(`bracket-${index}`);
if (!playerId || !bracket) break;
newAssignments.push({ playerId, bracket });
index++;
}

const bracketsSet = new Set(newAssignments.map(a => a.bracket));
if (bracketsSet.size < newAssignments.length) {
alert('Brackets must be unique within the team.');
hideLoading();
return;
}

if (!isUniqueTeam(teamName, tournamentId, teamId)) {
alert(`Team name "${teamName}" must be unique within the tournament.`);
hideLoading();
return;
}
team.name = teamName;

brackets = brackets.filter(b => !(b.tournamentId == tournamentId && b.teamId == teamId));
newAssignments.forEach(a => {
brackets.push({ tournamentId, teamId, playerId: a.playerId, bracket: a.bracket });
});

localStorage.setItem('teams', JSON.stringify(teams));
localStorage.setItem('brackets', JSON.stringify(brackets));

editModal.classList.add('hidden');
editModal.style.display = 'none';
showTournamentDetails(tournamentId);
hideLoading();
};
}

// Edit Score Modal
function showEditScoreModal(playerId, tournamentId) {
const playerScores = scores.filter(s => s.playerId == playerId && s.tournamentId == tournamentId);
const editForm = document.getElementById('editForm');
editForm.innerHTML = '';
playerScores.forEach(s => {
const round = rounds.find(r => r.id == s.roundId);
editForm.innerHTML += `
<label>Round: ${formatDate(round.date)} - ${round.location}</label>
<label>Points:
<input type="number" name="points-${s.id}" value="${s.points}" required>
</label>
<label>Strokes:
<input type="number" name="strokes-${s.id}" value="${s.strokes}" required>
</label>
`;
});
editForm.innerHTML += `<button type="submit">Save</button>`;
editModal.classList.remove('hidden');
editModal.style.display = 'flex';
editForm.onsubmit = (e) => {
e.preventDefault();
const formData = new FormData(editForm);
playerScores.forEach(s => {
s.points = formData.get(`points-${s.id}`);
s.strokes = formData.get(`strokes-${s.id}`);
});
localStorage.setItem('scores', JSON.stringify(scores));
editModal.classList.add('hidden');
editModal.style.display = 'none';
showTournamentDetails(tournamentId);
};
}

// Player Profile (Updated with Headshot Upload)
function showPlayerProfile(playerId) {
const player = players.find(p => p.id == playerId);
if (!player) return;
const playerScores = scores.filter(s => s.playerId == playerId);
const highScoreData = playerScores.reduce((max, s) => Number(s.points) > Number(max.points) ? s : max, { points: -Infinity });
const highScore = highScoreData.points !== -Infinity ? highScoreData.points : 'N/A';
const highScoreRound = highScoreData.roundId ? rounds.find(r => r.id == highScoreData.roundId) : null;
const highScoreLocation = highScoreRound ? highScoreRound.location : 'Unknown';

document.getElementById('playerTitle').innerHTML = `${player.name} <span id="playerHometown">(${player.hometown})</span>`;
const headshotImg = document.getElementById('playerHeadshot');
headshotImg.src = player.headshot || 'silhouette.png';
headshotImg.style.filter = player.headshot ? 'none' : 'grayscale(100%)';

document.getElementById('playerDetails').innerHTML = `
<p><strong>Championships:</strong> <span id="playerChampionships">${player.championships || 'N/A'}</span></p>
<p><strong>Money Earned:</strong> <span id="playerMoneyEarned">${player.moneyEarned || 'N/A'}</span></p>
<p><strong>Total Rounds Played:</strong> ${playerScores.length}</p>
<p><strong>Average Points:</strong> ${playerScores.length ? (playerScores.reduce((sum, s) => sum + Number(s.points), 0) / playerScores.length).toFixed(2) : 0}</p>
<p><strong>Weighted Average Points:</strong> ${playerScores.length >= 6 ? calculateWeightedAverage(playerId) : 'N/A'}</p>
<p><strong>Average Strokes:</strong> ${playerScores.length ? (playerScores.reduce((sum, s) => sum + Number(s.strokes), 0) / playerScores.length).toFixed(2) : 0}</p>
<p><strong>Highest Score:</strong> ${highScore} ${highScore !== 'N/A' ? `(${formatDate(highScoreData.date)} - ${highScoreLocation})` : ''}</p>

<hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">
<h3 style="color: #072B55; margin-top: 15px;">2026 Info</h3>
<p><strong>2026 Rank:</strong> <span id="player2026Rank">${player.rank2026 || 'N/A'}</span></p>
<p><strong>2026 Bracket:</strong> <span id="player2026Bracket">${player.bracket2026 || 'N/A'}</span></p>
`;

document.querySelector('#playerHistoryTable tbody').innerHTML = playerScores.map(s => {
const tournament = tournaments.find(t => t.id == s.tournamentId);
const round = rounds.find(r => r.id == s.roundId);
return `
<tr>
<td>${tournament ? tournament.name : 'Unknown'}</td>
<td>${round ? round.location : 'Unknown'}</td>
<td>${formatDate(s.date)}</td>
<td>${s.points}</td>
<td>${s.strokes}</td>
</tr>
`;
}).join('');

// Headshot Upload Functionality
const uploadHeadshotBtn = document.getElementById('uploadHeadshotBtn');
const headshotUpload = document.getElementById('headshotUpload');

uploadHeadshotBtn.onclick = () => {
headshotUpload.click();
};

headshotUpload.onchange = (e) => {
const file = e.target.files[0];
if (file) {
const reader = new FileReader();
reader.onload = (event) => {
player.headshot = event.target.result;
localStorage.setItem('players', JSON.stringify(players));
headshotImg.src = player.headshot;
headshotImg.style.filter = 'none';
};
reader.readAsDataURL(file);
}
};

const editProfileBtn = document.getElementById('editProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const deleteProfileBtn = document.getElementById('deleteProfileBtn') || document.createElement('button');

editProfileBtn.classList.remove('hidden');
saveProfileBtn.classList.add('hidden');

// Setup delete button if it doesn't exist
if (!document.getElementById('deleteProfileBtn')) {
deleteProfileBtn.id = 'deleteProfileBtn';
deleteProfileBtn.textContent = 'Delete Player';
deleteProfileBtn.style.backgroundColor = '#c94c4c';
deleteProfileBtn.style.marginLeft = '10px';
editProfileBtn.parentElement.appendChild(deleteProfileBtn);
}

deleteProfileBtn.onclick = () => {
if (confirm('Are you sure you want to delete ' + player.name + '?')) {
deletePlayer(player.id);
mainInterface.classList.remove('hidden');
playerProfile.classList.add('hidden');
updateAll();
}
};

editProfileBtn.onclick = () => {
document.getElementById('playerTitle').innerHTML = `<input type="text" id="editName" value="${player.name}" style="width: auto;"> <span id="playerHometown"><input type="text" id="editHometown" value="${player.hometown}" style="width: auto; margin-left: 5px;"></span>`;
document.getElementById('playerDetails').innerHTML = `
<p><strong>Championships:</strong> <input type="text" id="editChampionships" value="${player.championships || ''}"></p>
<p><strong>Money Earned:</strong> <input type="text" id="editMoneyEarned" value="${player.moneyEarned || ''}"></p>
<p><strong>Total Rounds Played:</strong> ${playerScores.length}</p>
<p><strong>Average Points:</strong> ${playerScores.length ? (playerScores.reduce((sum, s) => sum + Number(s.points), 0) / playerScores.length).toFixed(2) : 0}</p>
<p><strong>Weighted Average Points:</strong> ${playerScores.length >= 6 ? calculateWeightedAverage(playerId) : 'N/A'}</p>
<p><strong>Average Strokes:</strong> ${playerScores.length ? (playerScores.reduce((sum, s) => sum + Number(s.strokes), 0) / playerScores.length).toFixed(2) : 0}</p>
<p><strong>Highest Score:</strong> ${highScore} ${highScore !== 'N/A' ? `(${formatDate(highScoreData.date)} - ${highScoreLocation})` : ''}</p>

<hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">
<h3 style="color: #072B55; margin-top: 15px;">2026 Info</h3>
<p><strong>2026 Rank:</strong> <input type="number" id="edit2026Rank" value="${player.rank2026 || ''}" style="width: 100px;"></p>
<p><strong>2026 Bracket:</strong> <input type="text" id="edit2026Bracket" value="${player.bracket2026 || ''}" style="width: 200px;"></p>
`;
editProfileBtn.classList.add('hidden');
saveProfileBtn.classList.remove('hidden');
};
saveProfileBtn.onclick = () => {
showLoading();
player.name = document.getElementById('editName').value;
player.hometown = document.getElementById('editHometown').value;
player.championships = document.getElementById('editChampionships').value;
player.moneyEarned = document.getElementById('editMoneyEarned').value;
player.rank2026 = document.getElementById('edit2026Rank').value;
player.bracket2026 = document.getElementById('edit2026Bracket').value;
localStorage.setItem('players', JSON.stringify(players));
showPlayerProfile(playerId);
hideLoading();
};
mainInterface.classList.add('hidden');
playerProfile.classList.remove('hidden');
}

// Delete Confirmation
function showConfirmDelete(type, id, tournamentId = null) {
confirmDeleteModal.classList.remove('hidden');
confirmDeleteModal.style.display = 'flex';

confirmDeleteYes.onclick = () => {
switch (type) {
case 'tournament':
deleteTournament(id);
break;
case 'round':
deleteRound(id);
break;
case 'player':
deletePlayer(id);
break;
case 'score':
deleteScore(id);
break;
case 'team':
deleteTeam(id, tournamentId);
break;
}
confirmDeleteModal.classList.add('hidden');
confirmDeleteModal.style.display = 'none';
};
}

// Edit Modal
function showEditModal(type, id) {
const editForm = document.getElementById('editForm');
editForm.innerHTML = '';
let item;
switch (type) {
case 'tournament':
item = tournaments.find(t => t.id == id);
if (!item) return;
editForm.innerHTML = `
<label>Name: <input type="text" name="name" value="${item.name}" required></label>
<label>Year: <input type="number" name="year" value="${item.year}" required></label>
<label>Location: <input type="text" name="location" value="${item.location}" required></label>
<label>Start Date: <input type="date" name="start" value="${item.start}" required></label>
<label>End Date: <input type="date" name="end" value="${item.end}" required></label>
<label>Notes: <textarea name="notes">${item.notes || ''}</textarea></label>
<button type="submit">Save</button>
`;
break;
case 'round':
item = rounds.find(r => r.id == id);
if (!item) return;
editForm.innerHTML = `
<label>Tournament: <select name="tournamentId" required>
${tournaments.map(t => `<option value="${t.id}" ${t.id == item.tournamentId ? 'selected' : ''}>${t.name} (${t.year})</option>`).join('')}
</select></label>
<label>Date: <input type="date" name="date" value="${item.date}" required></label>
<label>Location: <input type="text" name="location" value="${item.location}" required></label>
<button type="submit">Save</button>
`;
break;
case 'player':
item = players.find(p => p.id == id);
if (!item) return;
editForm.innerHTML = `
<label>Name: <input type="text" name="name" value="${item.name}" required></label>
<label>Hometown: <input type="text" name="hometown" value="${item.hometown}" required></label>
<button type="submit">Save</button>
`;
break;
case 'score':
item = scores.find(s => s.id == id);
if (!item) return;
editForm.innerHTML = `
<label>Tournament: <select name="tournamentId" required>
${tournaments.map(t => `<option value="${t.id}" ${t.id == item.tournamentId ? 'selected' : ''}>${t.name} (${t.year})</option>`).join('')}
</select></label>
<label>Round: <select name="roundId" required>
${rounds.filter(r => r.tournamentId == item.tournamentId).map(r => `<option value="${r.id}" ${r.id == item.roundId ? 'selected' : ''}>${formatDate(r.date)} - ${r.location}</option>`).join('')}
</select></label>
<label>Player: <select name="playerId" required>
${players.map(p => `<option value="${p.id}" ${p.id == item.playerId ? 'selected' : ''}>${p.name}</option>`).join('')}
</select></label>
<label>Points: <input type="number" name="points" value="${item.points}" required></label>
<label>Strokes: <input type="number" name="strokes" value="${item.strokes}" required></label>
<button type="submit">Save</button>
`;
break;
default:
return;
}
editModal.classList.remove('hidden');
editModal.style.display = 'flex';
editForm.onsubmit = (e) => {
e.preventDefault();
saveEdit(type, id);
};
}

function saveEdit(type, id) {
const formData = new FormData(editForm);
const data = Object.fromEntries(formData.entries());
switch (type) {
case 'tournament':
const tournament = tournaments.find(t => t.id == id);
if (tournament) {
Object.assign(tournament, data);
localStorage.setItem('tournaments', JSON.stringify(tournaments));
}
break;
case 'round':
const round = rounds.find(r => r.id == id);
if (round) {
Object.assign(round, data);
const selectedTournament = tournaments.find(t => t.id == data.tournamentId);
round.tournamentName = selectedTournament ? selectedTournament.name : 'Unknown';
localStorage.setItem('rounds', JSON.stringify(rounds));
}
break;
case 'player':
const player = players.find(p => p.id == id);
if (player) {
Object.assign(player, data);
localStorage.setItem('players', JSON.stringify(players));
}
break;
case 'score':
const score = scores.find(s => s.id == id);
if (score) {
Object.assign(score, data);
localStorage.setItem('scores', JSON.stringify(scores));
}
break;
}
editModal.classList.add('hidden');
editModal.style.display = 'none';
updateAll();
}

// Utility Functions
function updateSortIndicators(tableSelector, sortState) {
const headers = document.querySelectorAll(`${tableSelector} th[data-key]`);
headers.forEach(th => {
th.classList.remove('asc', 'desc');
if (th.dataset.key === sortState.column) {
th.classList.add(sortState.direction);
}
th.onclick = () => {
const key = th.dataset.key;
if (sortState.column === key) {
sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
} else {
sortState.column = key;
sortState.direction = 'asc';
}
const tableKey = tableSelector.replace('#', '').replace('Table', 's').toLowerCase();
currentPage[tableKey] = 1;
const filterInput = document.getElementById(`${tableKey}Filter`);
const filterValue = filterInput ? filterInput.value : '';
const updateFuncName = 'update' + tableKey.charAt(0).toUpperCase() + tableKey.slice(1);
window[updateFuncName](filterValue);
};
});
}

function deleteTournament(id) {
tournaments = tournaments.filter(t => t.id !== id);
localStorage.setItem('tournaments', JSON.stringify(tournaments));
updateAll();
}

function deleteRound(id) {
rounds = rounds.filter(r => r.id !== id);
localStorage.setItem('rounds', JSON.stringify(rounds));
updateAll();
}

function deletePlayer(id) {
players = players.filter(p => p.id !== id);
localStorage.setItem('players', JSON.stringify(players));
updateAll();
}

function deleteScore(id) {
scores = scores.filter(s => s.id !== id);
localStorage.setItem('scores', JSON.stringify(scores));
updateAll();
}

function deleteTeam(id, tournamentId) {
teams = teams.filter(t => t.id !== id);
localStorage.setItem('teams', JSON.stringify(teams));
showTournamentDetails(tournamentId);
}

function handleCSVImport(file) {
console.log('CSV import not fully implemented:', file);
}

// Update All Tables
function updateAll() {
updateTournaments();
updateRounds();
updatePlayers();
updateScores();
}

// Initial Load
updateAll();