function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.',
        'Validar nombre no validó nombre no sea vacío',
    );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
            'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debes elegir alguna ciudad.',
        'Validar ciudad no validó que la ciudad haya sido seleccionada.',
    );

}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Debes escribir una descripcion del regalo que quieres.',
        'Validar descripcion regalo no valido que el texto no sea vacio,'
    );

}
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
