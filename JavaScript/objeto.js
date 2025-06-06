const trianguloPorTipo = {
normal: "../Elementos/Normal.png",
fire: "../Elementos/Fuego.png",
water: "../Elementos/Agua.png",
grass: "../Elementos/Planta.png",
electric: "../Elementos/Electrico.png",
ice: "../Elementos/Hielo.png",
fighting: "../Elementos/Lucha.png",
poison: "../Elementos/Veneno.png",
ground: "../Elementos/Tierra.png",
flying: "../Elementos/Volador.png",
psychic: "../Elementos/Psiquico.png",
bug: "../Elementos/Bicho.png",
rock: "../Elementos/Roca.png",
ghost: "../Elementos/Fantasma.png",
dark: "../Elementos/Siniestro.png",
dragon: "../Elementos/Dragon.png",
steel: "../Elementos/Metal.png",
fairy: "../Elementos/Hada.png",

};
document.addEventListener('DOMContentLoaded', () => {
const userJSON = sessionStorage.getItem('currentUser');
if (!userJSON) {
location.href = 'login.html';
return;
};
const user = JSON.parse(userJSON);
const navAccount = document.querySelector('#account');
if (navAccount) navAccount.textContent = '@' + user.username;
});

async function obtenerDatosBasicosPokemon(id) {

const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);


const datos = await respuesta.json();

return {
nombre: datos.name,
numero: datos.id,
tipos: datos.types.map((t) => t.type.name), 
altura: datos.height + " m",
peso: datos.weight + " kg",
habilidad: datos.abilities[0]?.ability.name,
urlImagenPrincipal:datos.sprites.other["official-artwork"].front_default,
imagenFrontal: datos.sprites.front_default,
imagenTrasera: datos.sprites.back_default,
imagenShiny: datos.sprites.front_shiny,
};
};

async function obtenerDatosEspeciePokemon(id) {
const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

const datos = await respuesta.json();

const descripcionEnIngles = datos.flavor_text_entries.find(
(f) => f.language.name === "en"
);
let descripcion; 

if (descripcionEnIngles) {

descripcion = descripcionEnIngles.flavor_text;
} else {

descripcion = "";
};

const categoriaIngles = datos.genera.find((g) => g.language.name === "en");

let categoria; 

if (categoriaIngles) {
categoria = categoriaIngles.genus;

} else {
categoria = "";

};
return { descripcion, categoria };
};

/*Empieza todo despues de que ya cargue la informacion*/

document.addEventListener("DOMContentLoaded", async () => {

const contenedorInfo = document.querySelector(".pokemon-info");

const contenedorImagenPrincipal = document.querySelector(".pokemon-image img");

const contenedorTrianguloTipo = document.querySelector(".Triangulo img");

const parametrosURL = new URLSearchParams(window.location.search);
const idPokemon = parseInt(parametrosURL.get("numero"));


try {

const datosBasicos = await obtenerDatosBasicosPokemon(idPokemon);
const datosEspecie = await obtenerDatosEspeciePokemon(idPokemon);

const nombre =
datosBasicos.nombre;

const primerTipo = datosBasicos.tipos[0];
const rutaTriangulo =
trianguloPorTipo[primerTipo];

const H1 = contenedorInfo.querySelector("h1");
if (H1) {
H1.innerHTML = `${nombre} <button class="favorite-btn" title="Add to Favorites">❤️</h1>`;
};

const H3 = contenedorInfo.querySelector("h3");
if (H3) {
H3.textContent = `#${String(datosBasicos.numero).padStart(3,"0")}`;
};

const primerParrafo = contenedorInfo.querySelector("p");
if (primerParrafo) {
primerParrafo.textContent = datosEspecie.descripcion;
};

const parrafosStats = contenedorInfo.querySelectorAll(".stats p");
if (parrafosStats.length >= 4) {
parrafosStats[0].innerHTML = `<strong style="font-weight: bolder;">Height:</strong> ${datosBasicos.altura}`;
parrafosStats[1].innerHTML = `<strong style="font-weight: bolder;">Category:</strong> ${datosEspecie.categoria}`;
parrafosStats[2].innerHTML = `<strong style="font-weight: bolder;">Weight:</strong> ${datosBasicos.peso}`;
parrafosStats[3].innerHTML = `<strong style="font-weight: bolder;">Ability:</strong> ${datosBasicos.habilidad}`;
};

const divTipos = contenedorInfo.querySelector(".types");
if (divTipos) {

divTipos.innerHTML = `
<p><strong style="font-weight: 900;">Type:</strong></p>
${datosBasicos.tipos.map((tipo) =>`<button class="${tipo}">${tipo}</button>`).join('')}
`;
};

const imgFrontalElemento = contenedorInfo.querySelector(".evolution-images .front img");

const imgTraseraElemento = contenedorInfo.querySelector(".evolution-images .back img");

const imgShinyElemento = contenedorInfo.querySelector(".evolution-images .shiny img");

if (imgFrontalElemento)
    imgFrontalElemento.src = datosBasicos.imagenFrontal;

if (imgTraseraElemento)
    imgTraseraElemento.src = datosBasicos.imagenTrasera;

if (imgShinyElemento)
    imgShinyElemento.src = datosBasicos.imagenShiny;


if (contenedorImagenPrincipal) {
    contenedorImagenPrincipal.src = datosBasicos.urlImagenPrincipal;
    contenedorImagenPrincipal.alt = nombre;
};

if (contenedorTrianguloTipo) {
    contenedorTrianguloTipo.src = rutaTriangulo;
    contenedorTrianguloTipo.alt = `${primerTipo}`;
};

} catch (error) {

console.error("Error al cargar los datos del Pokémon:", error);

contenedorInfo.innerHTML = "<p>Lo sentimos, ocurrió un error al cargar los datos del Pokémon.</p>";
}
});