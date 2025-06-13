document.addEventListener('DOMContentLoaded', () => {

  const USERS_KEY   = 'databaseUsers';
  const SESSION_KEY = 'currentUser';

  const displayNameEl     = document.querySelector('#display-name');
  const displayUsernameEl = document.querySelector('#display-username');
  const emailInput        = document.querySelector('#user-email');
  const emailBtn          = document.querySelector('#change-email-btn');
  const passInput         = document.querySelector('#user-password');
  const passBtn           = document.querySelector('#change-password-btn');

  const currentUser = JSON.parse(localStorage.getItem(SESSION_KEY));
  if (!currentUser) {
    window.location.href = 'account.html';
    return;
  }

  displayNameEl.textContent     = currentUser.name;
  displayUsernameEl.textContent = '@' + currentUser.username;
  emailInput.value              = currentUser.email;

  function updateField(field, newValue) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const idx = users.findIndex(u => u.email === currentUser.email);
    if (idx !== -1) {
      users[idx][field] = newValue;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
    currentUser[field] = newValue;
    localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  }

  emailBtn.addEventListener('click', () => {
    if (emailInput.hasAttribute('readonly')) {
      emailInput.removeAttribute('readonly');
      emailInput.focus();
      emailBtn.textContent = 'Save';
    } else {
      const newEmail = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newEmail)) {
        alert('Formato de email inválido');
        emailInput.focus();
        return;
      }
      updateField('email', newEmail);
      emailInput.setAttribute('readonly', '');
      emailBtn.textContent = 'Change';
      alert('Email actualizado correctamente');
    }
  });

  passBtn.addEventListener('click', () => {
    if (passInput.hasAttribute('readonly')) {
      passInput.removeAttribute('readonly');
      passInput.value = '';
      passInput.placeholder = '';
      passInput.focus();
      passBtn.textContent = 'Save';
    } else {
      const newPass = passInput.value;
      if (newPass.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        passInput.focus();
        return;
      }
      updateField('password', newPass);
      passInput.setAttribute('readonly', '');
      passInput.value = '';
      passInput.placeholder = '********';
      passBtn.textContent = 'Change';
      alert('Contraseña actualizada correctamente');
    }
  });
});
