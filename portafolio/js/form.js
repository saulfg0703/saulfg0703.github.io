
var nombre = document.getElementById("nombre");
var nombre_ = document.getElementById("nombre").value;
var correo = document.getElementById("email");
var contrasenia = document.getElementById("password");
var contrasenia2 = document.getElementById("repeatPassword");
var sexo = document.getElementById("sexo");
var aficiones = document.getElementById("aficiones");
var terminos = document.getElementById("terminos");
var form = document.getElementById("form");
var listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Introduce un nombre por favor.");
    condicion = false;
  }
  if (correo.value.trim() == "") {
    mostrarMensajeError("email", "Introduce un correo por favor.");
    condicion = false;
  }
  if (contrasenia.value.trim() == "") {
    mostrarMensajeError("password", "Introduce una contraseña por favor.");
    condicion = false;
  }
  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("repeatPassword", "Las contraseñas no coinciden.");
    condicion = false;
  }
  if (!terminos.checked) {
    mostrarMensajeError("terminos", "Acepta los terminos y condiciones de uso.");
    condicion = false;
  }
  return condicion;
}


function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";

}

