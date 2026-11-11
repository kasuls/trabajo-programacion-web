// Seleccionamos el formulario
const formulario = document.getElementById("login");

// Detectamos cuando pulsamos el botón enviar
formulario.addEventListener("submit", function(event) {

    // Evitamos que se recargue la página
    event.preventDefault();

    // Recogemos los datos
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    console.log(email);
    console.log(contraseña);

});