const listaPokemon = document.querySelector("#pokemon-card")

const arregloPoke = []

//Buscador
document.addEventListener('keyup', e => {
  if (e.target.matches("#search-input")) {
    const valor = e.target.value.toLowerCase();
    document.querySelectorAll(".pokemon").forEach(pokes => {
      const nombre = pokes.querySelector("h3")?.textContent.toLowerCase() || "";
      if (nombre.includes(valor)) {
        pokes.classList.remove("filtro");
      } else {
        pokes.classList.add("filtro");
      }
    });
  }
});

//Filtrador
document.querySelector('#type-select').addEventListener('change', (e) => {
  const tipoSeleccionado = e.target.value.toLowerCase();

  document.querySelectorAll('.pokemon').forEach(pokes => {
    const tipos = Array.from(pokes.querySelectorAll('.tipo')).map(t => t.textContent.toLowerCase());

    if (tipoSeleccionado === "" || tipos.includes(tipoSeleccionado)) {
      pokes.classList.remove('filtro'); 
    } else {
      pokes.classList.add('filtro');
    }
  });
});


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


//Random
document.addEventListener('DOMContentLoaded', () => {
  const randomBtn = document.querySelector('#random-btn');

  randomBtn.addEventListener('click', () => {
    if (arregloPoke.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * arregloPoke.length);
    const random = arregloPoke[randomIndex];
    window.location.href = `Tarjetas.html?numero=${random.id}`;
  });
});


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