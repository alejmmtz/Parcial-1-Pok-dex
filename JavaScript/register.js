document.addEventListener('DOMContentLoaded', () => {
    const form         = document.querySelector('#register-form');
    const errorsection = document.querySelector('.errors');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email       = document.querySelector('#email').value;
      const password    = document.querySelector('#password').value;
      const confirmPass = document.querySelector('#confirmPassword').value;

      if (!email || !password || !confirmPass) {
        errorsection.textContent = "Please fill all Data";
        return;
      }
  
      if (password !== confirmPass) {
        errorsection.textContent = "The Passwords don't match";
        return;
      }
  
      sessionStorage.setItem('newEmail', email);
      sessionStorage.setItem('newPass',  password);

      window.location.href = 'register1.html';
    });
  });
  