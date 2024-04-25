var iniciodesecion = 0;
// Array de usuarios y contraseñas
let usuarios = [
  { usuario: 'jona', contrasena: '123'},
  { usuario: 'pedro', contrasena: '456'},
  { usuario: 'maria', contrasena: '789'},
  { usuario: 'raul', contrasena: 'abc'}
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener los valores del usuario y contraseña ingresados
  var usuario = document.getElementById("usuario").value.toLowerCase(); // Convertir a minúsculas
  var contrasena = document.getElementById("contrasena").value;

  // Buscar el usuario en el array de usuarios
  var usuarioEncontrado = usuarios.find(function(user) {
    return user.usuario === usuario;
  });

  // Validar el usuario y contraseña
  if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasena) {
    alert("Inicio de sesión exitoso. ¡Bienvenido/a, " + usuario + "!");
    // Redirigir al usuario al índice
    ocultarFormulario();
    mostrarcarrusel();
    mostrarNombreUsuario(usuario);
    iniciodesecion = 1;

  } else {
    alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
  }
});

function mostrarcarrusel(){
  document.getElementById('botoncuenta').hidden = true;
  document.getElementById('username').hidden = false;
  document.getElementById('registroaocultar').hidden = true;
  iniciodesecion = 1;
}

// Función para mostrar el nombre de usuario en el navbar
function mostrarNombreUsuario(nombreUsuario) {
  var nombreCapitalizado = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1);
  var elementoUsuario = document.getElementById("username");
  elementoUsuario.textContent = nombreCapitalizado;
  elementoUsuario.parentNode.style.display = "inline";
  iniciodesecion = 1;
}

// Función para mostrar la ventana emergente
function mostrarFormulario() {
  document.getElementById('ventanaEmergente').style.display = 'block';
}

// Función para ocultar la ventana emergente
function ocultarFormulario() {
  document.getElementById('ventanaEmergente').style.display = 'none';
}

function cambiarTitulo(titulo) {
  document.getElementById('video').hidden = false;
  document.getElementById('registroaocultar').hidden = true;
  var tituloPelicula = document.querySelector('.nombrepelicula');
  tituloPelicula.textContent = titulo + "       ";
}
function volver(){
  document.getElementById('video').hidden = true;
  if (iniciodesecion == 0)
    document.getElementById('registroaocultar').hidden = false;

}

function error(){
  alert("Pagina en mantenimiento")

}
function ocultarpeliculas(){
  document.getElementById('movies').hidden = false;
  document.getElementById('bd').hidden = true;


}