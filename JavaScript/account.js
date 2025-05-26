// account.js

document.addEventListener('DOMContentLoaded', () => {
    // 1) Recuperar usuario “logeado”
    const currentUserJSON = sessionStorage.getItem('currentUser');
    if (!currentUserJSON) {
      // si no hay usuario, volvemos al login
      window.location.href = 'login.html';
      return;
    }
    const user = JSON.parse(currentUserJSON);
  
    // 2) Inyectar nombre y handle
    document.querySelector('.greeting .highlight')
            .textContent = user.name;
    document.querySelector('.user-name')
            .textContent = user.name;
    document.querySelector('.user-handle')
            .textContent = '@' + user.username;
  
    // 3) Fecha de creación: si guardaste newbirthdate como fecha de cumpleaños,
    //    podrías usarla, pero aquí ponemos la fecha actual:
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelector('.account-date')
            .textContent = `Account created on ${fecha.toLocaleDateString('en-US', opciones)}`;
  
    // 4) Renderizar favoritos
    const favContainer = document.querySelector('.pokemon-cards');
    favContainer.innerHTML = ''; // limpiar el HTML hardcodeado
  
    // user.favoritepokemon debe ser un array de números (ids)
    user.favoritepokemon.forEach(id => {
      // buscar en pokemones (definido en pokedex.js)
      const pok = pokemones.find(p => p.numero === id);
      if (!pok) return;
  
      // crear la card
      const card = document.createElement('div');
      card.className = `pokemon-card ${pok.tipo}`; 
      card.innerHTML = `
        <img src="${pok.imagenURL}" alt="${pok.nombre}">
        <p class="pokemon-name">${pok.nombre}</p>
        <p class="pokemon-id">${String(pok.numero).padStart(4, '0')}</p>
      `;
      // clic lleva al detalle
      card.addEventListener('click', () => {
        window.location.href = `Tarjetas.html?numero=${pok.numero}`;
      });
      favContainer.appendChild(card);
    });
  });
  