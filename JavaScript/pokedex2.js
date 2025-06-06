const listaPokemon = document.querySelector("#pokemon-card")

const arregloPoke = []


async function obtenerPokemon() {
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const datos = await respuesta.json();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const userJSON = sessionStorage.getItem('currentUser');
  if (!userJSON) {
    location.href = 'login.html';
    return;
  }
  const user = JSON.parse(userJSON);
  const navAccount = document.querySelector('#account');
  if (navAccount) navAccount.textContent = '@' + user.username;
});


obtenerPokemon()


async function cargarPokemones() {
  const espera = [];
  for (let i = 1; i <= 100; i++) {
    espera.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
  }

  const resultados = await Promise.all(espera);
  resultados.sort((a, b) => a.id - b.id); 

  resultados.forEach(pokemon => {
    mostrarPokemon(pokemon);
    arregloPoke.push(pokemon);
  });
}

cargarPokemones();


if(arregloPoke.length === 100){
    console.log(arregloPoke)
    };


function mostrarPokemon(data){
  let tipos = data.types.map((type)=>`<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');


  const div = document.createElement("div");
div.classList.add("pokemon");

const primerTipo = data.types[0].type.name;

div.innerHTML = `
  <div class="pokemon-card type-${primerTipo}">
    <img class="pokemon-image"
      src="${data.sprites.other["official-artwork"].front_default}" 
      alt="${data.name}"
    >
  </div>
  <h3>${data.name}</h3>
  <p>${data.id}</p>
  <div class="pokemon-tipos">
    ${tipos}
  </div>
`;

div.addEventListener('click', () => {
  window.location.href = `Tarjetas.html?numero=${data.id}`;
});

listaPokemon.append(div);
}