function user(username, email, password, name, birthdate, favoritepokemon) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.birthdate = birthdate;
    this.favoritepokemon = favoritepokemon;
}

const users = [
    new user("alejmmtz", "alejomum@gmail.com", "RomanticoSalvaj3", "Alejandro", "2007-04-16" , [1,2,3]),
    
    new user("carlos01", "carlosgiraldo@gmail.com", "Carlos01", "Carlos","2007-04-16" ,  [4,5,6]),

    new user("100gecs", "100gecs@gmail.com", "123", "Laura","2007-04-16" ,  [7,8,9,1]),

    new user("esteman", "estebodrioman@gmail.com", "54321", "Esteban","2007-04-16" ,  [10,11,12]),

    new user("4mdaa", "elmeselm@gmail.com", "12345", "Marcos","2007-04-16" , [13,14,15,3]),

    new user("saikorito", "saikoroo@gmail.com", "123", "David","2007-04-16" ,  [1,3,8])
];

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

