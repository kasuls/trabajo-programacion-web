async function cargarCoches() {

    try {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Inicia sesion");
            window.location.href = "login.html";
            return;
        }

        const respuesta = await fetch("https://practicaprogramacionweb.duckdns.org/cars", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        if (!respuesta.ok) {
            alert("Error al obtener los coches");
            console.log(respuesta)
            return;
        }

        const datos = await respuesta.json();

        const lista = document.getElementById("listaCoches");
        lista.innerHTML = "";

        datos.forEach(function(coche) {

            const fila = document.createElement("tr");

            const campos = [
                coche.name,
                coche.price + " €",
                coche.km + " km",
                coche.description,
                coche.category,
                coche.idUser
            ];

            campos.forEach(function(valor) {

                const celda = document.createElement("td");
                celda.textContent = valor;
                fila.appendChild(celda);

            });

            const celdaImagen = document.createElement("td");

            if (coche.image) {

                const imagen = document.createElement("img");
                imagen.src = coche.image;
                imagen.alt = "Imagen de " + coche.name;
                imagen.className = "imagen-coche";

                celdaImagen.appendChild(imagen);

            } else {
                celdaImagen.textContent = "Sin imagen";
            }

            fila.appendChild(celdaImagen);

            const celdaEstado = document.createElement("td");
            celdaEstado.textContent = coche.state;
            fila.appendChild(celdaEstado);

            lista.appendChild(fila);

        });

    } catch (error) {
        console.log("Error:", error);
    }

}
