const navOptions = document.getElementById('options');
const container = document.getElementById('container-cards');
const selected = document.getElementById('user-selected');

//Info equipo
const info = {
    team: 'Argentina',
    sport: 'Soccer',
    year: 1986,
    'head coach': 'Carlos Bilardo'
}
//Lista original Jugadores
const players = [
    {
        name: 'Sergio Almiron',
        position: 'forward',
        number: 1,
        nickname: 'N/A'
    },
    {
        name: 'Sergio Batista',
        position: 'midfielder',
        number: 2,
        nickname: 'N/A'
    },
    {
        name: 'Ricardo Bochini',
        position: 'goalkeeper',
        number: 3,
        nickname: 'El Bocha'
    },
    {
        name: 'Bichis',
        position: 'defender',
        number: 4,
        nickname: 'Bichi'
    }
];
//Copia que mutaremos
let cPlayers = [...players];

//Manejador de evento para detectar cuando cambie el valor del selector
selected.addEventListener('change', function(){
    //Dependiendo el valor de opcion elegido filtre objetos y actualice renderizando.
    switch(selected.value){
        case 'goalkeeper':
            renderPlayers(filterPlayers("goalkeeper"));
            break;
        case 'defender':
            renderPlayers(filterPlayers("defender"));
            break;
        case 'midfielder':
            renderPlayers(filterPlayers("midfielder"));
            break;
        case 'forward':
            renderPlayers(filterPlayers("forward"));
            break;
        default:
            renderPlayers(cPlayers);
            break;
    }
});

//Funcion que renderiza la informacion del equipo.
function renderTeamStats(obj){
    const nodes = [];
    for(let key in obj){
        const li = document.createElement('li');
        li.textContent = `${key}: `;
        const span = document.createElement('span');
        span.textContent = `${obj[key]}`

        li.appendChild(span);
        nodes.push(li);
    }

    navOptions.append(...nodes);
}
renderTeamStats(info);

//Funcion que renderizara las cartas de jugadores.
function renderPlayers(players){
    const cards = [];
    container.innerHTML = '';
    players.forEach((player)=>{
        const article = document.createElement('article');
        article.classList.add('card');

        article.innerHTML = `
        <h3 class="card-title">${player.name}</h3>
        <ul>
            <li>Position: <span>${player.position}</span></li>
            <li>Number: <span>${player.number}</span></li>
            <li>nickname: <span>${player.nickname}</span></li>
        </ul>`;

        cards.push(article);
    });
    container.append(...cards);
}
renderPlayers(cPlayers);

//Function que filtrara los jugadores segun su propiedad position.
function filterPlayers(value){
    return cPlayers.filter((item)=> item.position.toLowerCase() === value);
}