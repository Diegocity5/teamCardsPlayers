//Selecionando variables y elementos del DOM para interactuar.
const teamName = document.getElementById('team');
const typeOfSport = document.getElementById('sport');
const worldCupYear = document.getElementById('year');
const headCoach = document.getElementById('head-coach');
const playerCards = document.getElementById('player-cards');
const playersDropdownList = document.getElementById('players');

//Estructura de datos para las cartas de my equipo de football.
const myFavoriteFootballTeam = {
    team: 'Argentina',
    sport: 'Football',
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7
    },
    players: []
};
