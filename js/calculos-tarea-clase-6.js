function obtenerElMenor(numeros) {
    let esElMenor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (esElMenor > numeros[i]) {
            esElMenor = numeros[i];
        }
    }
    return esElMenor;
}

function obtenerElMayor(numeros) {
    let esElMayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (esElMayor < numeros[i]) {
            esElMayor = numeros[i];
        }
    }    
    return esElMayor;
}

function obtenerElPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return (suma / numeros.length);
}

