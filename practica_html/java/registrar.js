async function registrarUsuario(event) {

    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const latitud = document.getElementById("lat").value;
    const longitud = document.getElementById("alt").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmar = document.getElementById("confirmar").value;

    if (contraseña !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    try {

        const respuesta = await fetch("https://practicaprogramacionweb.duckdns.org/users/register", {
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

        alert("Error al conectar con el servidor");
        console.log(error);

    }

}
document.getElementById("registro").addEventListener("submit", registrarUsuario);