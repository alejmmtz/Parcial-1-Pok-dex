document.addEventListener('DOMContentLoaded', () => {
  const reg = JSON.parse(localStorage.getItem('registration_data'));
  if (!reg) {
    window.location.href = 'register.html';
    return;
  }

  const headerAccount = document.querySelector('#account');
  const h2Name        = document.querySelector('#name');
  const pUsername     = document.querySelector('#username');
  const spanWelcome   = document.querySelector('#welcome-name');

  headerAccount.textContent = reg.name;
  h2Name.textContent        = reg.name;
  pUsername.textContent     = '@' + reg.username;
  spanWelcome.textContent   = reg.name;

  const USERS_KEY   = 'databaseUsers';
  const SESSION_KEY = 'currentUser';

  const existingUsers = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const newUser = {
    email:     reg.email,
    password:  reg.password,
    username:  reg.username,
    name:      reg.name,
    birthdate: reg.birthdate,
    favorites: []
  };
  
  const alreadyExists = existingUsers.some(u => u.email === newUser.email);
  if (!alreadyExists) {
    existingUsers.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(existingUsers));
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));

  localStorage.removeItem('registration_step1');
  localStorage.removeItem('registration_data');
});