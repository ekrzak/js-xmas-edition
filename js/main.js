/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const $descripcionRegalo = document.querySelector('[name=descripcion-regalo]');

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter.';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    return '';
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'Debes elegir alguna ciudad.';
    }

    return '';
}

function validarDescripcionRegalo(descripcion) {
    if (descripcion.length === 0) {
        return 'Debes escribir una descripcion del regalo que quieres.';
    }

    return '';
}

document.querySelector('#enviar-carta').onclick = function(event) {
    validarNombre(nombre)
    validarCiudad(ciudad);
    validarDescripcionRegalo($descripcionRegalo);
    
    event.preventDefault();
};
