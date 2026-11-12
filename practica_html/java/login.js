async function iniciarSesion(event) {

    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;

    try {

        const respuesta = await fetch("https://practicaprogramacionweb.duckdns.org/auth/login", {
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
            console.log(datos);
            return;
        }

        localStorage.setItem("token", datos.access_token || datos.token);
        localStorage.setItem("email", email);

        alert("¡Inicio de sesión correcto!");
        window.location.href = "coches.html";

    } catch (error) {
        alert("Error al conectar con el servidor");
        console.log(error);
    }
}

document.getElementById("login").addEventListener("submit", iniciarSesion);