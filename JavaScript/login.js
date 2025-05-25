function user(username, email, password, name, picture, favoritepokemon) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.picture = picture;
    this.favoritepokemon = favoritepokemon;
}

const users = [
    new user("alejmmtz", "alejomum@gmail.com", "RomanticoSalvaj3", "Alejandro", 
        "https://cdn-images.dzcdn.net/images/cover/aedac72659474e460f6356bcc70afcdd/0x1900-000000-80-0-0.jpg", [1,2,3]),
    
    new user("carlos01", "carlosgiraldo@gmail.com", "Carlos01", "Carlos", 
        "https://cdn-images.dzcdn.net/images/cover/aedac72659474e460f6356bcc70afcdd/0x1900-000000-80-0-0.jpg", [4,5,6])
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form');
    const errorlogin = document.querySelector('.error');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const userinput = document.querySelector('#text').value.trim();
        const passwordinput = document.querySelector('#password').value;

        const usuario = users.find(u =>
            (u.username === userinput || u.email === userinput)
            && u.password === passwordinput
        );

        if (usuario) {
            sessionStorage.setItem('currentUser', JSON.stringify(usuario));
            window.location.href = 'landing2.html';
        } else {
            errorlogin.textContent = 'Check the Username or Password';
        }
    });
});
