const form = document.querySelector('#register-form');
const errorsection = document.querySelector('.errors');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPass = document.querySelector('#confirmPassword').value;

  if (!email || !password || !confirmPass) {
    errorsection.textContent = "Please fill all Data";
    return;
  }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(email)) {
    errorsection.textContent = 'Please enter a valid email';
    return;
  }

  if (password !== confirmPass) {
    errorsection.textContent = "The Passwords don't match";
    return;
  }

  const lengthVerification = password.length >= 6;
  const uppercaseVerification = /[A-Z]/.test(password);
  const specialCharacterVerification = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!lengthVerification) {
    errorsection.textContent = 'Password must be at least 6 characters';
    return;
  }
  if (!uppercaseVerification || !specialCharacterVerification) {
    errorsection.textContent = 'Password must include at least one uppercase letter and one special character';
    return;
  }

  const registerStep1 = { email, password };
  localStorage.setItem('registration_step1', JSON.stringify(registerStep1));

  window.location.href = 'register1.html';
});