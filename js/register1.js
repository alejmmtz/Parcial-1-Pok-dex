const form = document.querySelector('#register1-form');
const errorsection = document.querySelector('.errors');
const usernameform = document.querySelector('#username');
const nameform = document.querySelector('#name');

usernameform.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    event.preventDefault();
  }
});

nameform.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    event.preventDefault();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = usernameform.value.replaceAll(' ', '');
  const name = nameform.value.replaceAll(' ', '');
  const birthdate = document.querySelector('#birthdate').value;

  if (username.length <= 2) {
    errorsection.textContent = 'The Username needs at least 2 Characters';
    return;
  }

  if (!name) {
    errorsection.textContent = 'You forgot your name';
    return;
  }

  if (!birthdate) {
    errorsection.textContent = 'You forgot your Birthdate';
    return;
  }

  sessionStorage.setItem('newusername', username);
  sessionStorage.setItem('newname', name);
  sessionStorage.setItem('newbirthdate', birthdate);

  window.location.href = 'register2.html';
});
