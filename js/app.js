// variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //muestra los autos al cargar

    // llena los selects
    llenarSelect();

})


// funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${auto.marca} ${auto.modelo} - ${auto.year} ${auto.precio} ${auto.puertas} ${auto.color} ${auto.transmision}
        `;

        // insertar el html
        resultado.appendChild(autoHTML);

    })
}

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}