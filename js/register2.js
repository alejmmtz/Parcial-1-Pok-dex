document.addEventListener('DOMContentLoaded', () => {

    const name = sessionStorage.getItem('newname') || '';
    const username = sessionStorage.getItem('newusername') || '';
  
    if (!name || !username) {
      window.location.href = 'register.html';
      return;
    }

    const header = document.querySelector('#account');
    const h2 = document.querySelector('#name');
    const pusername = document.querySelector('#username');
    const spanWelcome = document.querySelector('#welcome-name');
  
    header.textContent = name;
    h2.textContent = name;
    pusername.textContent = '@' + username;
    spanWelcome.textContent = name;
  });
  