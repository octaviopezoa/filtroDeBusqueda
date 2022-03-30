// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = [{
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: ''
}];

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

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})


function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}