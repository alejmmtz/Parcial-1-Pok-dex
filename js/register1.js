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

window.addEventListener('DOMContentLoaded', () => {
  const step1 = JSON.parse(localStorage.getItem('registration_step1'));
  if (!step1) {
    window.location.href = 'register.html';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = usernameform.value.replaceAll(' ', '');
  const name = nameform.value.replaceAll(' ', '');
  const birthdate = document.querySelector('#birthdate').value;


  const userVerification = /^[a-z0-9_]{2,15}$/;
  if (!userVerification.test(username)) {
    errorsection.textContent =
      'Username must be undercase, 2–15 characters, and contain only letters, numbers or underscores';
    return;
  }

  const nameVerification = /^[A-Za-zÀ-ÿ ]{2,15}$/;
  if (!nameVerification.test(name)) {
    errorsection.textContent =
      'Name must be 2–15 letters long and contain only letters';
    return;
  }

  if (!birthdate) {
    errorsection.textContent = 'You forgot your Birthdate';
    return;
  }

  const registerStep1 = JSON.parse(localStorage.getItem('registration_step1'));
  if (!registerStep1) {
    errorsection.textContent = 'Registration step 1 data missing';
    return;
  }

  const fullRegistration = {
    email: registerStep1.email,
    password: registerStep1.password,
    username,
    name,
    birthdate
  };
  localStorage.setItem('registration_data', JSON.stringify(fullRegistration));

  window.location.href = 'register2.html';
});
