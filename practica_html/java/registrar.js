const API_URL = "https://practicaprogramacionweb.duckdns.org";
const formularioRegistro = document.getElementById("registro");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", async function(event) {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("email").value;
        const latitud = document.getElementById("lat").value;
        const longitud = document.getElementById("alt").value;
        const contraseña = document.getElementById("contraseña").value;
        const confirmar_contraseña = document.getElementById("confirmar").value;

        if (contraseña !== confirmar_contraseña) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {

            const respuesta = await fetch(`${API_URL}/users/register`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username: usuario,
                    email: email,
                    latitude: Number(latitud),
                    longitude: Number(longitud),
                    password: contraseña
                })

            });

            const datos = await respuesta.json();

            if (!respuesta.ok) {
                alert("Error al registrar usuario");
                console.log(datos);
                return;
            }

            alert("¡Usuario registrado correctamente!");

            window.location.href = "Login.html";

        } catch (error) {

            console.error("Error de conexión:", error);

            alert("No se ha podido conectar con el servidor");

        }

    })
}