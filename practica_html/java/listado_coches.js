async function cargarCoches() {

    try {

        const token = localStorage.getItem("token");

        const respuesta = await fetch("https://practicaprogramacionweb.duckdns.org/cars", {
            headers: { Authorization: "Bearer " + token }
        });

        if (!respuesta.ok) {
            alert("Error al obtener los coches");
            return;
        }

        const coches = await respuesta.json();
        const lista = document.getElementById("listaCoches");
        lista.innerHTML = "";

        coches.forEach(coche => {
            const fila = lista.insertRow();

            const posiciones =[coche.name, coche.price, coche.km, coche.description, coche.category, coche.idUser]

            posiciones.forEach(valor => {
                fila.insertCell().textContent = valor;
            });

            const celdaImagen = fila.insertCell();

            if (coche.image) {
                const img = document.createElement("img");
                img.src = coche.image;
                img.alt = "Imagen de " + coche.name;
                img.className = "imagen-coche";
                celdaImagen.appendChild(img);
            }

            fila.insertCell().textContent = coche.state;
        });

    } catch (error) {
        console.error("Error:", error);
    }
}