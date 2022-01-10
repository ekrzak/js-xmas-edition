/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $ciudad = document.querySelector('#carta-a-santa').ciudad.value;
const $descripcionRegalo = document.querySelector('#carta-a-santa')['descripcion-regalo'];

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'Debes elegir alguna ciudad.';
    }
}

function validarDescripcionRegalo(descripcion) {
    if (descripcion.textContent === '') {
        return 'Debes escribir una descripcion del regalo que quieres.';
    }
}

document.querySelector('#enviar-carta').onclick = function(event) {
    validarCiudad($ciudad);
    validarDescripcionRegalo($descripcionRegalo);
    
    probarValidarCiudad($ciudad);
    probarValidarDescripcionRegalo($descripcionRegalo);
    event.preventDefault();
};
