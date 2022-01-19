function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.',
        'Validar nombre no validó nombre no sea vacío',
    );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
            'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre('321321dsad') === 'Este campo sólo debe contener letras',
        'La función validarNombre no validó que el nombre contenga sólo letras.',
    );

    console.assert(
        validarNombre('Juan') === '',
        'La función validarNombre debería retornar un string vacío cuando se le ingresa un nombre correcto.'
    );
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debes elegir alguna ciudad.',
        'Validar ciudad no validó que la ciudad haya sido seleccionada.',
    );

    console.assert(
        validarCiudad('Rosario') === '',
        'validarCiudad debería retornar un string vacío cuando se selecciona una ciudad correcta'
    );

}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Debes escribir una descripcion del regalo que quieres.',
        'Validar descripcion regalo no valido que el texto no sea vacio,'
    );

    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagit') === 
        'La descripción del regalo debe ser menor a 100 caracteres.',
        'Validar descripción regalo no validó que el texto tenga menos de 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('eeeeeeee!dsad# ') === 'La descripción del regalo sólo debe tener letras y números.',
        'Validar descripcionRegalo no validó que el texto no contenga caracteres especiales',
    );

    console.assert(
        validarDescripcionRegalo('Regalo rojo especial') === '',
        'La función validarDescripcionRegalo debería retornar un string vacío cuando se ingresa una descripción correcta.'
    );

}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
