const API_URL = "https://practicaprogramacionweb.duckdns.org";
const formularioLogin = document.getElementById("login");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", async function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const contraseña = document.getElementById("contraseña").value;

        try {

            const respuesta = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: contraseña
                })
            });

            const datos = await respuesta.json();

            if (!respuesta.ok) {
                alert("Error al iniciar sesión");
                console.log(datos)
                return;
            }

            localStorage.setItem("token", datos.access_token || datos.token);
            localStorage.setItem("email", email);
            alert("¡Inicio de sesión correcto!");
            window.location.href = "coches.html";

        } catch (error) {

            console.error(error);
            alert("No se ha podido conectar con el servidor");

        }
    })
}
