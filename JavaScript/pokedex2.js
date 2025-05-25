const listaPokemon = document.querySelector("#pokemon-card")

const arregloPoke = []

async function obtenerPokemon() {
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const datos = await respuesta.json();
    //console.log(datos);
  } catch (error) {
    console.error(error);
  }
}

obtenerPokemon()
console.log(datos)

/*for(let i = 1; i<=15; i++){
  fetch("https://pokeapi.co/api/v2/pokemon/"+i)
  .then(response => response.json())
  .then(data => {
    mostrarPokemon(data);            
    arregloPoke.push(data);
    })
  //.then(error => console.log(error))
}
if(arregloPoke.length === 15){
      console.log(arregloPoke)
    }*/


function mostrarPokemon(data){
   let tipos = data.types.map((type)=>`<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join();


    const div = document.createElement("div");
    div.classList.add("pokemon");
    const primerTipo = data.types[0].type.name;
    div.innerHTML = `
    <div class="pokemon">
          <div class="pokemon-card type-${primerTipo}">
            <img class="pokemon-image"
              src="${data.sprites.other["official-artwork"].front_default}" 
              alt="${data.name}"
            >
          </div>
          <h3>${data.name}</h3>
            <p>${data.id}</p>
            </div>
            <div class="pokemon-tipos">
            ${tipos}
        </div>
    `;
    listaPokemon.append(div);
}


















/*const listaPokemon = document.querySelector("#pokemon-card")
let URL = "https://pokeapi.co/api/v2/pokemon/";

const promesas = [];

for (let i = 1; i <= 15; i++) {
    promesas.push(fetch(URL + i).then(response => response.json()));
}

Promise.all(promesas).then(pokemones => {
    pokemones.sort((a, b) => a.id - b.id);
    pokemones.forEach(poke => mostrarPokemon(poke));
});

function mostrarPokemon(poke) {


    //map genera un array de lo que uno le diga//
    let tipos = poke.types.map((type)=>`<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');


    const div = document.createElement("div");
    div.classList.add("pokemon");
    const primerTipo = poke.types[0].type.name;
    div.innerHTML = `
    <div class="pokemon">
          <div class="pokemon-card type-${primerTipo}">
            <img class="pokemon-image"
              src="${poke.sprites.other["official-artwork"].front_default}" 
              alt="${poke.name}"
            >
          </div>
          <h3>${poke.name}</h3>
            <p>${poke.id}</p>
            </div>
            <div class="pokemon-tipos">
            ${tipos}
        </div>
    `;
    listaPokemon.append(div);
}*/

const buscar = document.querySelector("#btn-buscar")
buscar.addEventListener("click", buscarPokemon)

function buscarPokemon(){
  let buscado = document.querySelector("#search-input").value
  //const found = pokemones
  console.log(pokemones)

    alert("buscar"+buscado)
  

}



















/*document.addEventListener("keyup", e => {
  if(e.target.matches("#search-input")){
    document.querySelectorAll(".pokemon").forEach(pokemon => {
      (pokemon.querySelector("h3").textContent + pokemon.querySelector("p").textContent)
      .toLowerCase()
      .includes(e.target.value.toLowerCase())
      ? pokemon.classList.remove("hidden")
      : pokemon.classList.add("hidden");
    })
  }
})*/



/*<div class="pokemon">
          <div class="pokemon-card green">
            <img 
              src="https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/001.png?raw=true" 
              alt="Bulbasaur"
            >
          </div>
          <h3>Bulbasaur</h3>
          <p>001</p>
        </div>*/