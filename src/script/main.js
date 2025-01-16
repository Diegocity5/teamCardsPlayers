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
    players: [
        {
            name: "Sergio Almiron",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null
        },
        {
            name: "Ricardo Bochini",
            position: "midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha"
        },
        {
            name: "Claudio Borghi",
            position: "midfielder",
            number: 4,
            nickname: "Bichi"
        },
        {
            name: "José Luis Brown",
            position: "defender",
            number: 5,
            nickname: "tata"
        },
        {
            name: "Daniel Passarella",
            position: "defender",
            number: 6,
            nickname: "El Gran Capitán"
        },
        {
            name: "Jorge Burruchaga",
            position: "forward",
            number: 7,
            nickname: "Burru"
        },
        {
            name: "Néstor Clausen",
            position: "defender",
            number: 8,
            nickname: null
        },
        {
            name: "José Luis Cuciuffo",
            position: "defender",
            number: 9,
            nickname: "El Chuchu"
        },
        {
            name: "Diego Maradona",
            position: "midfielder",
            number: 10,
            nickname: "El Pibe de Oro"
        },
        {
            name: "Jorge Valdano",
            position: "forward",
            number: 11,
            nickname: "The Philosopher of Football"
        },
        {
            name: "Héctor Enrique",
            position: "midfielder",
            number: 12,
            nickname: null

        },
        {
            name: "Oscar Garré",
            position: "defender",
            number: 13,
            nickname: null
        },
        {
            name: "Ricardo Giusti",
            position: "midfielder",
            number: 14,
            nickname: null
        },
        {
            name: "Luis Islas",
            position: "goalkeeper",
            number: 15,
            nickname: "El loco"
        },
        {
            name: "Julio Olarticoechea",
            position: "defender",
            number: 16,
            nickname: null
        },
        {
            name: "Pedro Pasculli",
            position: "forward",
            number: 17,
            nickname: null
        },
        {
            name: "Nery Pumpido",
            position: "goalkeeper",
            number: 18,
            nickname: null
        },
        {
            name: "Oscar Ruggeri",
            position: "defender",
            number: 19,
            nickname: "El cabezón"
        },
        {
            name: "Carlos Tapia",
            position: "midfielder",
            number: 20,
            nickname: null
        },
        {
            name: "Marcelo Trobbiani",
            position: "midfielder",
            number: 21,
            nickname: "Calesita"
        },
        {
            name: "Hector Zelada",
            position: "goalkeeper",
            number: 22,
            nickname: null
        }
    ]
};

//Congelando el objeto para prevenir mutaciones.
Object.freeze(myFavoriteFootballTeam);
const {sport, team, year, players} = myFavoriteFootballTeam;
const {coachName} = myFavoriteFootballTeam.headCoach;

//Monstrando la información del equipo en pantalla
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

//Funcion que se encargara de mostrar las cartas dependiendo la opcion elegida del menu despeglable.
const setPlayerCards = ( arr=players )=>{};