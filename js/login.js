document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#login-form');
  const errorlogin = document.querySelector('.error');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const userinput = document.querySelector('#text').value;
    const passwordinput = document.querySelector('#password').value;

    const storedUsers = JSON.parse(localStorage.getItem('databaseUsers')) || [];

    const usuario = storedUsers.find(u =>
      (u.username === userinput || u.email === userinput) &&
      u.password === passwordinput
    );

    if (usuario) {
      sessionStorage.setItem('currentUser', JSON.stringify(usuario));
      window.location.href = 'index2.html';
    } else {
      errorlogin.textContent = 'Check the Username or Password';
    }
  });
});