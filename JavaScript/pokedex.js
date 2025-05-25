function pokemon(imagenURL, nombre, numero, tipo, trianguloIMG, desc, height, category, weight, ability, img1, img2, img3) {
    this.imagenURL = imagenURL;
    this.nombre = nombre;
    this.numero = numero;
    this.tipo = tipo;
    this.trianguloIMG = trianguloIMG;
    this.desc = desc;
    this.height = height;
    this.category = category;
    this.weight = weight;
    this.ability = ability;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
}

const pokemones = [
new pokemon("../Elementos/001.png" , "Bulbasaur", 1, "grass", "../Elementos/Planta.png", "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.", "2' 04", "Seed", "15.2 lbs", "Overgrow", "../Elementos/001-frente.png", "../Elementos/001-espalda.png", "../Elementos/001-shiny.png" ),
new pokemon("../Elementos/002.png", "Ivysaur", 2, "grass", "../Elementos/Planta.png","The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.", "3' 03", "Seed", "28.7 lbs", "Overgrow", "../Elementos/002-frente.png", "../Elementos/002-espalda.png", "../Elementos/002-shiny.png"),
new pokemon("../Elementos/003.png", "Venusaur", 3, "grass", "../Elementos/Planta.png", "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime. ", "6' 07", "Seed", "220.5 lbs", "Overgrow", "../Elementos/003-frente.png", "../Elementos/003-espalda.png", "../Elementos/003-shiny.png"),
new pokemon("../Elementos/004.png", "Charmander", 4, "fire", "../Elementos/Fuego.png", "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly. ", "2' 00", "Lizard", "18.7 lbs", "Blaze", "../Elementos/004-frente.png", "../Elementos/004-espalda.png", "../Elementos/004-shiny.png"),
new pokemon("../Elementos/005.png", "Charmeleon", 5, "fire", "../Elementos/Fuego.png", "When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents. ", "3' 07", "Flame", "41.9 lbs", "Blaze", "../Elementos/005-frente.png", "../Elementos/005-espalda.png", "../Elementos/005-shiny.png"),
new pokemon("../Elementos/006.png", "Charizard", 6, "fire", "../Elementos/Fuego.png", "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.", "5' 07", "Flame", "199.5 lbs", "Blaze", "../Elementos/006-frente.png", "../Elementos/006-espalda.png", "../Elementos/006-shiny.png"),
new pokemon("../Elementos/007.png", "Squirtle", 7, "water", "../Elementos/Agua.png", "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth. ", "1' 08", "Tinny Turtle", "19.8 lbs", "Torrent", "../Elementos/007-frente.png", "../Elementos/007-espalda.png", "../Elementos/007-shiny.png"),
new pokemon("../Elementos/008.png", "Wartortle", 8, "water", "../Elementos/Agua.png", "Wartortles long, furry tail is a symbol of longevity, so this Pokémon is quite popular among older people. ", "3' 03", "Turtle", "49.6 lbs", "Torrent", "../Elementos/008-frente.png", "../Elementos/008-espalda.png", "../Elementos/008-shiny.png"),
new pokemon("../Elementos/009.png", "Blastoise", 9, "water", "../Elementos/Agua.png", "It deliberately increases its body weight so it can withstand the recoil of the water jets it fires. ", "5' 03", "Shellfish", "188.5 lbs", "Torrent", "../Elementos/009-frente.png", "../Elementos/009-espalda.png", "../Elementos/009-shiny.png"),
new pokemon("../Elementos/010.png", "Caterpie", 10, "bug", "../Elementos/Bicho.png", "For protection, it releases a horrible stench from the antenna on its head to drive away enemies. ", "1' 00", "Worm", "6.4 lbs", "Shield Dust", "../Elementos/010-frente.png", "../Elementos/010-espalda.png", "../Elementos/010-shiny.png"),
new pokemon("../Elementos/011.png", "Metapod", 11, "bug", "../Elementos/Bicho.png", "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack. ", "2' 04", "Cocoon", "21.8 lbs", "Shed Skin", "../Elementos/011-frente.png", "../Elementos/011-espalda.png", "../Elementos/011-shiny.png"),
new pokemon("../Elementos/012.png", "Butterfree", 12, "bug", "../Elementos/Bicho.png", "It loves the nectar of flowers and can locate flower patches that have even tiny amounts of pollen. ", "3' 07", "Butterfly", "70.5 lbs", "Compound Eyes", "../Elementos/012-frente.png", "../Elementos/012-espalda.png", "../Elementos/012-shiny.png"),
new pokemon("../Elementos/013.png", "Weedle", 13, "bug", "../Elementos/Bicho.png", "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves. ", "1' 00", "Hairy Bug", "7.1 lbs", "Shield Dust", "../Elementos/013-frente.png", "../Elementos/013-espalda.png", "../Elementos/013-shiny.png"),
new pokemon("../Elementos/014.png", "Kakuna", 14, "bug", "../Elementos/Bicho.png", "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy. ", "2' 00", "Cocoon", "22.0 lbs", "Shed Skin", "../Elementos/014-frente.png", "../Elementos/014-espalda.png", "../Elementos/014-shiny.png"),
new pokemon("../Elementos/015.png", "Beedrill", 15, "bug", "../Elementos/Bicho.png", "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.", "3' 03", "Poison Bee", "65.0 lbs", "Swarm", "../Elementos/015-frente.png", "../Elementos/015-espalda.png", "../Elementos/015-shiny.png"),
];

document.addEventListener("input", e => {
  
  if (e.target.matches("#search-input")) {
    document.querySelectorAll(".pokemon-card").forEach(pokemonCard => {
      pokemonCard.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? pokemonCard.classList.remove("filtro")
        : pokemonCard.classList.add("filtro");
    });
  }
});


let search = document.querySelector("#search-input");

function renderCharacter(pokemon) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.innerHTML = `
        <div class="pokemon">
          <div class="pokemon-card type-${pokemon.tipo}">
            <img class="pokemon-image"
              src="${pokemon.imagenURL}" 
              alt="${pokemon.nombre}"
            >
            <h3>${pokemon.nombre}</h3>
          </div>
            </div>
            
</div>
    `;
    card.addEventListener("click", () => {
        window.location.href = `Tarjetas.html?numero=${pokemon.numero}`;
        });
    return card;
}


function DisplayCharacters() {
    const container = document.getElementById('pokemon-card');

    pokemones.forEach(pokemon => {
        const card = renderCharacter(pokemon);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', DisplayCharacters);