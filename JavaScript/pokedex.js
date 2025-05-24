function pokemon(imagenURL, nombre, numero, tipo) {
    this.imagenURL = imagenURL;
    this.nombre = nombre;
    this.numero = numero;
    this.tipo = tipo;
}

const pokemones = [
new pokemon("../Elementos/001.png" , "Bulbasaur", 1, "grass"),
new pokemon("../Elementos/002.png", "Ivysaur", 2, "grass"),
new pokemon("../Elementos/003.png", "Venusaur", 3, "grass"),
new pokemon("../Elementos/004.png", "Charmander", 4, "fire"),
new pokemon("../Elementos/005.png", "Charmeleon", 5, "fire"),
new pokemon("../Elementos/006.png", "Charizard", 6, "fire"),
new pokemon("../Elementos/007.png", "Squirtle", 7, "water"),
new pokemon("../Elementos/008.png", "Wartortle", 8, "water"),
new pokemon("../Elementos/009.png", "Blastoise", 9, "water"),
new pokemon("../Elementos/010.png", "Caterpie", 10, "bug"),
new pokemon("../Elementos/011.png", "Metapod", 11, "bug"),
new pokemon("../Elementos/012.png", "Butterfree", 12, "bug"),
new pokemon("../Elementos/013.png", "Weedle", 13, "bug"),
new pokemon("../Elementos/014.png", "Kakuna", 14, "bug"),
new pokemon("../Elementos/015.png", "Beedrill", 15, "bug"),
];



function renderPokemon() {
    const tbody = document.getElementById('pokemon-card');
    tbody.innerHTML = '';
    
    pokemones.forEach(pokemon => {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="pokemon">
          <div class="pokemon-card type-${pokemon.tipo}">
            <img class="pokemon-image"
              src="${pokemon.imagenURL}" 
              alt="${pokemon.nombre}"
            />
          </div>
          <h3>${pokemon.nombre}</h3>
            <p>${String(pokemon.numero).padStart(3,'0')}</p>
            </div>
            <div class="pokemon-tipos">
            <div class="tipo"></div>
        </div>
</div>
    `;
        tbody.appendChild(card);
    });
}
renderPokemon();

/*(function() {
  renderPokemon();
})();

function renderPokemon() {
  const grid = document.getElementById('pokemon-card');
  grid.innerHTML = '';

  pokemones.forEach(p => {
    const card = document.createElement('div');
    card.className =`pokemon-card type-${p.tipo}`;


    const img = document.createElement('img');
    img.className = 'pokemon-image';
    img.src = p.imagenURL;
    img.alt = p.nombre;
    card.appendChild(img);

    const info = document.createElement('div');
    info.className = '.pokemon-info';

    const h3 = document.createElement('h3');
    h3.className = 'pokemon-name';
    h3.textContent = p.nombre;
    info.appendChild(h3);

    const num = document.createElement('p');
    num.textContent = String(p.numero).padStart(3, '0');
    info.appendChild(num);

    card.appendChild(info);
    grid.appendChild(card);
  });
}*/