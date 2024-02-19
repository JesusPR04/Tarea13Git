document.addEventListener('DOMContentLoaded', function() {

    var colorSeleccionado = "#B5B2B2";
    let btnAnadir = document.querySelector('#botonAnadir');
    let contenedor = document.querySelector('#contenedorPaises');
    let btnCambiarFondo = document.querySelector('#botonCambiarColor');
    let inputColor = document.querySelector('#colorSeleccionado');
    let todasBanderas = document.querySelectorAll('.bandera');

    btnAnadir.addEventListener('click', function(e) {
        e.preventDefault();

        let imagenBandera = obtenerImagenAlAzar();

        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'bandera';
        nuevoElemento.innerHTML = "<img class='imagen' src='" + imagenBandera + "' alt='Bandera'>";
        nuevoElemento.innerHTML += "<br><button class='cambiarImagen'>Cambiar</button>";
        nuevoElemento.innerHTML += "<br><button class='borrarElemento'>Borrar</button>";
        nuevoElemento.style.backgroundColor = colorSeleccionado;
        contenedor.appendChild(nuevoElemento);

        todasBanderas = document.querySelectorAll('.bandera');

        nuevoElemento.querySelector(".cambiarImagen").addEventListener("click", function () {
            // Cambiar la imagen al azar
            this.parentElement.querySelector("img").src = obtenerImagenAlAzar();
        });

        nuevoElemento.querySelector(".borrarElemento").addEventListener("click", function () {
            // Eliminar el elemento del DOM
            this.parentElement.remove();
            todasBanderas = document.querySelectorAll('.bandera');
        });
    });

    btnCambiarFondo.addEventListener("click", function (e) {
        e.preventDefault();
        colorSeleccionado = inputColor.value;
        todasBanderas.forEach(function (divBandera) {
            divBandera.style.backgroundColor = colorSeleccionado;
        });
    });

    // Función para obtener una imagen al azar 
    function obtenerImagenAlAzar() {
        let imagenes = [
            "Canada.png",
            "Espana.png",
            "Finlandia.png",
            "Francia.png",
            "Mexico.png",
            "Suecia.png",
            "USA.png",
            "Belgica.png",
            "Italia.png",
            "PaisesBajos.png",
            "Rusia.png"
        ];

        return "Imagenes/" + imagenes[Math.floor(Math.random() * imagenes.length)];
    }
});