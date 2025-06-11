document.addEventListener('DOMContentLoaded', () => {
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

  if (Array.isArray(user.favoritepokemon)) {
    user.favoritepokemon.forEach(id => {
      const p = pokemones.find(x => x.numero === id);
      if (!p) return;

      const card = document.createElement('div');
      card.className = `pokemon-card type-${p.tipo}`;
      card.innerHTML = `
          <img
            src="${p.imagenURL}"
          />
          <p class="pokemon-name">${p.nombre}</p>
          <p class="pokemon-id">${String(p.numero).padStart(3, '0')}</p>
        `;
      card.addEventListener('click', () => {
        window.location.href = `Tarjetas.html?numero=${p.numero}`;
      });
      favContainer.appendChild(card);
    });
  }
});
