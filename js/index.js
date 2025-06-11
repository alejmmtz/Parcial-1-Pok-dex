const imagenes = [
    "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Pokemon%20imagen%201.jpg?raw=true",
    "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Pokemon%20imagen%202.jpeg?raw=true",
    "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Pokemon%20imagen%203.jpg?raw=true"
];

let indiceActual = 1;

const slideLeft = document.querySelector(".slide-left img");
const slideCenter = document.querySelector(".slide-center img");
const slideRight = document.querySelector(".slide-right img");
const flechas = document.querySelectorAll(".arrow img");

function actualizarCarrusel() {
    let izquierda = (indiceActual - 1 + imagenes.length) % imagenes.length;
    let derecha = (indiceActual + 1) % imagenes.length;

    slideLeft.src = imagenes[izquierda];
    slideCenter.src = imagenes[indiceActual];
    slideRight.src = imagenes[derecha];
}

flechas[0].addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
});

flechas[1].addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarCarrusel();
});

actualizarCarrusel();

const perfiles = [
    {
        nombre: "Jhon Jairo Aguilar",
        descripcion: "Curious, creative, and passionate about visual storytelling. I grew up in Wakanda and have a deep love for cats. I'm always looking for new ways to express ideas through design.",
        imagen: "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Jhon.jpeg?raw=true",
        job: "Interactive Designer",
        link: "https://www.behance.net/jhonaguilar6",
        pokemon: "Mimikyu"
    },
    {
        nombre: "Luis Alejandro Muñoz",
        descripcion: "Born at the end of the volcano, Alejandro always found a passion for design that inspired him to turn this passion into his career.",
        imagen: "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Alejandro.png?raw=true",
        job: "Interactive Designer & Lawyer",
        link: "https://www.behance.net/alejandromuozm",
        pokemon: "Mimikyu"
    },
    {
        nombre: "Carlos Stiven Giraldo",
        descripcion: "Enthusiast, multifaceted, and versatile are synonyms that I find fitting for myself. Someone who, despite not fully knowing the direction, continues to trust that it's the right path.",
        imagen: "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Carlos.jpg?raw=true",
        job: "Interactive Designer",
        link: "https://www.behance.net/carlosgiraldo29",
        pokemon: "Lucario"
    }
];

document.querySelectorAll('.about-us .perfil').forEach((div, i) => {
    const p = perfiles[i];
    div.querySelector('.perfil-imagen').src = p.imagen;
    div.querySelector('h3').textContent = p.nombre;
    div.querySelector('.job').textContent = p.job;
    div.querySelector('.link').href = p.link;
    div.querySelector('.descripcion').textContent = p.descripcion;
    div.querySelector('.pokemon').textContent = `Favourite Pokémon: ${p.pokemon}`;
});