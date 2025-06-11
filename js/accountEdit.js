function user(username, email, password, name, birthdate, favoritepokemon) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.name = name;
  this.birthdate = birthdate;
}

const users = [
  new user("alejmmtz", "alejomum@gmail.com", "RomanticoSalvaj3", "Alejandro", "2007-04-16", [1, 2, 3]),

  new user("carlos01", "carlosgiraldo@gmail.com", "Carlos01", "Carlos", "2007-04-16", [4, 5, 6]),

  new user("100gecs", "100gecs@gmail.com", "123", "Laura", "2007-04-16", [7, 8, 9, 1]),

  new user("esteman", "estebodrioman@gmail.com", "54321", "Esteban", "2007-04-16", [10, 11, 12]),

  new user("4mdaa", "elmeselm@gmail.com", "12345", "Marcos", "2007-04-16", [13, 14, 15, 3]),

  new user("saikorito", "saikoroo@gmail.com", "123", "David", "2007-04-16", [1, 3, 8])
];

let usuarioActivo = users[0];


function renderPerfil() {
  document.querySelector(".text-info h2").textContent = usuarioActivo.nombre;
  document.querySelector(".text-info p").textContent = "@" + usuarioActivo.username;
  document.getElementById("user-email").value = usuarioActivo.email;
  document.querySelector(".text-info p:last-of-type").textContent = `Account created in ${usuarioActivo.birthdate}.`;
}

renderPerfil();



// Abrir modal de cambio de correo
document.getElementById("abrirEmail").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("changeemail").style.display = "flex";
});

document.querySelector("#changeemail .close-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("changeemail").style.display = "none";
});

document.getElementById("formEmail").addEventListener("submit", function (e) {
  e.preventDefault();
  const nuevoEmail = document.getElementById("nuevoEmail").value;
  usuarioActivo.email = nuevoEmail;
  renderPerfil();
  alert("Email actualizado correctamente");
  document.getElementById("changeemail").style.display = "none";
});



//Cambiar contraseña
document.querySelector("a[href='#changepassword']").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("changepassword").style.display = "flex";
});

document.querySelector("#changepassword .close-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("changepassword").style.display = "none";
});

document.querySelector(".modal-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const actual = document.getElementById("current-pass").value;
  const nueva = document.getElementById("new-pass").value;
  const confirmar = document.getElementById("confirm-pass").value;

  if (actual !== usuarioActivo.password) {
    alert("La contraseña actual no es correcta.");
    return;
  }

  if (nueva !== confirmar) {
    alert("Las nuevas contraseñas no coinciden.");
    return;
  }

  usuarioActivo.password = nueva;
  alert("Contraseña actualizada con éxito.");

  document.getElementById("changepassword").style.display = "none";
});