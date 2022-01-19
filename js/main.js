/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter.';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[A-z]+$/i.test(nombre)) {
        return 'Este campo sólo debe contener letras';
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
    if (descripcion.length >= 100) {
        return 'La descripción del regalo debe ser menor a 100 caracteres.'
    }
    if (!/^[a-z 0-9]+$/i.test(descripcion)) {
        return 'La descripción del regalo sólo debe tener letras y números.'
    }

    return '';
}

function validarForm(event) {
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        'descripcion-regalo': validarDescripcionRegalo(descripcionRegalo)
    }; 
    
    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.classList.add('oculto');
        document.querySelector('#exito').classList.remove('oculto');
        window.setTimeout(function() {
            window.location.href = `C:/Users/Esteban/Desktop/WebDev/r-argentinaprograma/js-xmas-edition/wishlist.html`;
        }, 2000);
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    let cantidadErrores = 0;

    Object.keys(errores).forEach(function(key) {
        $form[key].classList.remove('error');
        document.querySelector(`#error-${key}`).classList.add('oculto');

        if (errores[key].length) {
            cantidadErrores++;
            $form[key].classList.add('error');
            $form[key].value = '';
            document.querySelector(`#error-${key}`).innerText = errores[key];
            document.querySelector(`#error-${key}`).classList.remove('oculto');
        }

    });

    return cantidadErrores;
    
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarForm;
