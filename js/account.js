async function obtenerDatosBasicosPokemon(id) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datos = await respuesta.json();
    return {
        nombre: datos.name,
        numero: datos.id,
        tipos: datos.types.map((t) => t.type.name),
        urlImagenPrincipal: datos.sprites.other["official-artwork"].front_default,
    };
};

document.addEventListener('DOMContentLoaded', async () => {
  const userJSON = sessionStorage.getItem('currentUser');
  if (!userJSON) {
    window.location.href = 'login.html';
    return;
  }
  const user = JSON.parse(userJSON);

  const navAccount = document.querySelector('#account');
  const welcomeName = document.querySelector('#welcome-name');
  const userNameElem = document.querySelector('.user-name');
  const userHandle = document.querySelector('.user-handle');
  const userBirth = document.querySelector('.user-birth')

  if (navAccount) navAccount.textContent = '@' + user.username;
  if (welcomeName) welcomeName.textContent = user.name;
  if (userNameElem) userNameElem.textContent = user.name;
  if (userHandle) userHandle.textContent = '@' + user.username;
  if (userBirth) userBirth.textContent = user.birthdate;

  const favContainer = document.querySelector('#favorites-container');
    if (!favContainer) {
        console.error("Contenedor de favoritos no encontrado.");
        return;
    }

     if (Array.isArray(user.favoritepokemon)) {
        const pokemonPromises = user.favoritepokemon.map(async id => {
            try {
                return await obtenerDatosBasicosPokemon(id);
            } catch (error) {
                alert(`Error al obtener datos para el Pokémon con ID ${id}:`, error);
                return ""; 
            }
        });

      if (Array(user.favoritepokemon)) {

        const pokemonPromises = user.favoritepokemon.map(id => obtenerDatosBasicosPokemon(id));

        const PokemonData = await Promise.all(pokemonPromises); 
        //p son los datos de los poke
        const valided = PokemonData.filter(p => p !== null);

        // Aqui crea un array con todos los resultados de los pokes validados
        const cards = valided.map(p =>
        `<div class="pokemon-card type-${p.tipos[0]}" onclick="window.location.href='tarjeta.html?numero=${p.numero}'">
          <img src="${p.urlImagenPrincipal}" alt="${p.nombre}"/>
          <p class="pokemon-name">${p.nombre}</p>
          <p class="pokemon-id">${String(p.numero).padStart(3, '0')}</p>
        </div>`).join('');
        //el join convierte la información de los pokes "cadenas de texto" en una sola más grande, unificandolas//

        favContainer.innerHTML = cards;
    } 
  } 
});
