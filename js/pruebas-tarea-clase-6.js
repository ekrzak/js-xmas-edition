function probarValidarIntegrantes() {
    console.assert(
        validarIntegrantes(-3) === false,
        'La función validarIntegrantes() no validó que los números negativos no sean admitidos'
    );

    console.assert(
        validarIntegrantes(1.44) === false,
        'La función validarIntegrantes() no validó que los números decimales no sean admitidos'
    );

    console.assert(
        validarIntegrantes(0) === false,
        'La función validarIntegrantes() no validó que el número 0 no sea admitido'
    );

    console.assert(
        validarIntegrantes(4) === true,
        'La función validarIntegrantes() no validó que números enteros positivos sean admitidos'
    );

}

probarValidarIntegrantes();