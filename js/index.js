const imagenes = [
    "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Pokemon%20imagen%201.jpg?raw=true",
    "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Pokemon%20imagen%202.jpeg?raw=true",
    "https://github.com/alejmmtz/Parcial-1-Pok-dex/blob/main/Elementos/Pokemon%20imagen%203.jpg?raw=true"
];

let indiceActual = 1;


function actualizarCarrusel(slideLeft, slideCenter, slideRight) {
    let izquierda = (indiceActual - 1 + imagenes.length) % imagenes.length;
    let derecha = (indiceActual + 1) % imagenes.length;


    if (slideLeft && slideCenter && slideRight) {
        slideLeft.src = imagenes[izquierda];
        slideCenter.src = imagenes[indiceActual];
        slideRight.src = imagenes[derecha];
    } else {

        console.error("Error: Elementos del carrusel no encontrados. Verifica tu HTML.");
    }
}


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


const contactFormHTML = `
    <h4>Contact us</h4>
    <div class="boton up">
        <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Text us
        </button>
        <form class="dropdown-menu p-4" id="contactForm">
            <div class="mb-3">
                <h3>Let us know your suggestions</h3>
                <label for="FormEmail" class="form-label">
                    <h4>Email Address</h4>
                </label>
                <input type="email" class="form-control" id="FormEmail" placeholder="email@example.com" required>
            </div>
            <div class="mb-3">
                <label for="FormComment" class="form-label">
                    <h4>Pokecomment</h4>
                </label>
                <input type="text" class="form-control" id="FormComment" placeholder="comment" required>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
`;



document.addEventListener("DOMContentLoaded", function () {


    const slideLeft = document.querySelector(".slide-left img");
    const slideCenter = document.querySelector(".slide-center img");
    const slideRight = document.querySelector(".slide-right img");
    const flechas = document.querySelectorAll(".arrow img");

    if (slideLeft && slideCenter && slideRight && flechas.length === 2) {

        actualizarCarrusel(slideLeft, slideCenter, slideRight);


        flechas[0].addEventListener("click", () => {
            indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
            actualizarCarrusel(slideLeft, slideCenter, slideRight);
        });

        flechas[1].addEventListener("click", () => {
            indiceActual = (indiceActual + 1) % imagenes.length;
            actualizarCarrusel(slideLeft, slideCenter, slideRight);
        });
    } else {
        console.log("Elementos del carrusel no encontrados en esta página. Si esta es una página del carrusel, verifica tu HTML.");
    }



    const perfilDivs = document.querySelectorAll('.about-us .perfil');
    if (perfilDivs.length > 0) {
        perfilDivs.forEach((div, i) => {
            const p = perfiles[i];
            if (p) {
                div.querySelector('.perfil-imagen').src = p.imagen;
                div.querySelector('h3').textContent = p.nombre;
                div.querySelector('.job').textContent = p.job;
                div.querySelector('.link').href = p.link;
                div.querySelector('.descripcion').textContent = p.descripcion;
                div.querySelector('.pokemon').textContent = `Favourite Pokémon: ${p.pokemon}`;
            }
        });
    } else {
        console.log("Elementos de perfil no encontrados en esta página.");
    }



    const container = document.getElementById("contact-us-container");
    if (container) {
        container.innerHTML = contactFormHTML;


        const form = document.getElementById("contactForm");

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const email = document.getElementById("FormEmail").value;
                const comment = document.getElementById("FormComment").value;
                const timestamp = new Date().toISOString();

                const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
                messages.push({ email, comment, timestamp });
                localStorage.setItem("contactMessages", JSON.stringify(messages));

                alert("Message saved!");
                form.reset();
            });
        }
    } else {
        console.log("Contenedor 'contact-us-container' no encontrado en esta página.");
    }
});