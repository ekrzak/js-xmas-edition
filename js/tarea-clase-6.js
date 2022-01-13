/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
const $listaIntegrantes = document.querySelector('#lista-integrantes');

function crearInputsPorIntegrante(cantidadIntegrantes) {
    
    for (let i = 0; i < cantidadIntegrantes; i++) {
        const nuevaEtiqueta = document.createElement('label');
        const textoEtiqueta = document.createTextNode(`Persona ${i+1}`);
        const saltoDeLinea = document.createElement('br');
        nuevaEtiqueta.appendChild(textoEtiqueta);
        nuevaEtiqueta.htmlFor = `edad-persona-${i+1}`;
        const nuevoInput = document.createElement('input');
        nuevoInput.id = `edad-persona-${i+1}`;
        nuevoInput.type = 'number';
        nuevoInput.className = 'edades-personas';
        nuevoInput.placeholder = 'Edad en años';
        $listaIntegrantes.appendChild(nuevaEtiqueta);
        $listaIntegrantes.appendChild(nuevoInput);
        $listaIntegrantes.appendChild(saltoDeLinea);
    }

    
}

function crearBotonDeCalculo() {
    const nuevoBoton = document.createElement('button'),
        botonLimpiar = document.createElement('button');
    nuevoBoton.type = 'submit';
    nuevoBoton.textContent = 'Calcular!';
    nuevoBoton.id = 'boton-calcular';
    botonLimpiar.type = 'submit';
    botonLimpiar.textContent = 'Limpiar';
    botonLimpiar.id = 'boton-limpiar';
    $listaIntegrantes.appendChild(nuevoBoton);
    $listaIntegrantes.appendChild(botonLimpiar);
}

const crearBotonesAgregarQuitarSueldos = function() { // Será una función que se ejecute una sola vez
    let ejecutado = false; // variable a cambiar una vez que se ejecute
    return function() {
        if (!ejecutado) {
            ejecutado = true; // acá la cambio
            // Acá la función en sí: crea los botones de agregar y quitar y les pone id's.
            const botonAgregar = document.createElement('button'),
            botonQuitar = document.createElement('button');
            botonAgregar.type = 'submit';
            botonAgregar.textContent = 'Agregar sueldos';
            botonAgregar.id = 'boton-agregar-sueldos';
            botonQuitar.type = 'submit';
            botonQuitar.textContent = 'Quitar sueldos';
            botonQuitar.id = 'boton-quitar-sueldos';
            $listaIntegrantes.appendChild(botonAgregar);
            $listaIntegrantes.appendChild(botonQuitar);
        }
    }
}();   

function crearInputsDeSueldos(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        
        //agrega input
        const nuevoInput = `<input type="number" id="sueldo-persona-${i+1}" class="sueldos-personas" placeholder="Sueldo anual en pesos"></input>`;
        document.querySelectorAll('.edades-personas')[i].insertAdjacentHTML('afterend', nuevoInput);
        // Agrega etiqueta
        const nuevaEtiqueta = `<label for="sueldo-persona-${i+1}" class="etiquetas-sueldos">Sueldo $</label>`;
        document.querySelector(`#sueldo-persona-${i+1}`).insertAdjacentHTML('beforebegin', nuevaEtiqueta);        
    }
}

function obtenerElMenor(arreglo) {
    let esElMenor = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (esElMenor > arreglo[i]) {
            esElMenor = arreglo[i];
        }
    }
    return esElMenor;
}

function obtenerElMayor(arreglo) {
    let esElMayor = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (esElMayor < arreglo[i]) {
            esElMayor = arreglo[i];
        }
    }    
    return esElMayor;
}

function obtenerElPromedio(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return (suma / arreglo.length);
}

document.querySelector('#ingresar').onclick = () => {
    const cantidadDeIntegrantes = $cantidadIntegrantes.value;
    // Crea los inputs para ingresar las edades
    crearInputsPorIntegrante(cantidadDeIntegrantes);
    document.querySelector('#ingresar').disabled = true;
    // Genera el boton de calcular y de limpiar
    crearBotonDeCalculo();
    // Genera los botones de agregar y quitar sueldos ------------------------------ se ejecuta una sola vez
    crearBotonesAgregarQuitarSueldos();

    // Ejecuta las acciones sobre el boton de agregar sueldos
    document.querySelector('#boton-agregar-sueldos').onclick = function() {
        crearInputsDeSueldos(Number(cantidadDeIntegrantes));
        document.querySelector('#boton-agregar-sueldos').disabled = true; // Desactiva el botón para evitar múltiples columna

        return false;
    }

    // Ejecuta acciones sobre el botón de quitar sueldos
    document.querySelector('#boton-quitar-sueldos').onclick = function() {
        
        if (document.querySelector('#boton-agregar-sueldos').disabled === true) {

            document.querySelectorAll('.sueldos-personas').forEach(e => e.remove()); // elimina los inputs de sueldos
            document.querySelectorAll('.etiquetas-sueldos').forEach(e => e.remove()); // elimina los labels de sueldos
            document.querySelector('#boton-agregar-sueldos').disabled = false; // resetea el botón de sueldos a nuevo
           
        }
        return false;
    }

    // Ejecuta las acciones sobre el boton de calcular
    document.querySelector('#boton-calcular').onclick = () => {
        // Pasa a array los values de la NodeList de los inputs
        const listaDeEdadesListaDeNodos = document.querySelectorAll('.edades-personas');
        const listaDeEdades = [];
        for (i = 0; i < listaDeEdadesListaDeNodos.length; i++) {
            if (Number(listaDeEdadesListaDeNodos[i].value) >= 0) {
                listaDeEdades.push(Number(listaDeEdadesListaDeNodos[i].value));
            } else {
                listaDeEdadesListaDeNodos[i].disabled = true;
                listaDeEdadesListaDeNodos[i].style.backgroundColor = 'pink';
            }        
        }
        if (listaDeEdades.length !== listaDeEdadesListaDeNodos.length) { // Manda mensaje de alerta
            alert('Ingresaste números negativos; no serán tenido en cuenta para los cálculos');
        }         
        // Expresa los resultados
        document.querySelector('#mayor-edad').textContent = `La persona de mayor edad tiene ${obtenerElMayor(listaDeEdades)} años.`;
        document.querySelector('#menor-edad').textContent = `La persona de menor edad tiene ${obtenerElMenor(listaDeEdades)} años.`;
        document.querySelector('#promedio-edad').textContent = `El promedio de edad de las personas listadas es de ${obtenerElPromedio(listaDeEdades)} años.`;

        // Pasa a array los valores de la NodeList de sueldos
        const listaDeSueldosListaDeNodos = document.querySelectorAll('.sueldos-personas');
        const listaDeSueldos = [];
        for (i = 0; i < listaDeSueldosListaDeNodos.length; i++) {
            console.log(listaDeSueldosListaDeNodos[i].value)
            if (listaDeSueldosListaDeNodos[i].value === '' || Number(listaDeSueldosListaDeNodos[i].value) < 0) {
                listaDeSueldosListaDeNodos[i].disabled = true;
                listaDeSueldosListaDeNodos[i].style.backgroundColor = 'pink';
            } else {
                listaDeSueldos.push(Number(listaDeSueldosListaDeNodos[i].value));
            }     
        }
        if (listaDeSueldos.length !== listaDeSueldosListaDeNodos.length) { // Manda mensaje de alerta
            alert('Te faltó ingresar algún sueldo o ingresaste números negativos; no serán tenidos en cuenta para los cálculos');
        }         
        // Expresa los resultados
        if (listaDeSueldos.length !== 0) {
            document.querySelector('#mayor-salario-anual').textContent = `El salario anual más alto es de ${obtenerElMayor(listaDeSueldos)} pesos.`;
            document.querySelector('#menor-salario-anual').textContent = `El salario anual más bajo es de ${obtenerElMenor(listaDeSueldos)} pesos.`;
            document.querySelector('#promedio-salario-anual').textContent = `El salario anual promedio es de ${obtenerElPromedio(listaDeSueldos)} pesos.`;
            document.querySelector('#promedio-salario-mensual').textContent = `El salario mensual promedio es de ${obtenerElPromedio(listaDeSueldos)/12} pesos.`;
        }        

        return false;
    }
    // Ejecuta las acciones sobre el boton de limpiar: elimina los inputs y los resultados calculados. Vuelve a activar el boton#ingresar
    document.querySelector('#boton-limpiar').onclick = () => {
        while ($listaIntegrantes.firstChild) { // Elimina todo lo del nodo padre form $listaIntegrantes
            $listaIntegrantes.removeChild($listaIntegrantes.firstChild);
          }
        // Resetea los resultados de los textos
        document.querySelector('#mayor-edad').textContent = "";
        document.querySelector('#menor-edad').textContent = "";
        document.querySelector('#promedio-edad').textContent = "";
        document.querySelector('#mayor-salario-anual').textContent = "";
        document.querySelector('#menor-salario-anual').textContent = "";
        document.querySelector('#promedio-salario-anual').textContent = "";
        document.querySelector('#promedio-salario-mensual').textContent = "";

        // Vuelve a activar el boton#ingresar
        document.querySelector('#ingresar').disabled = false;
        // Vuelve el input al estado original
        $cantidadIntegrantes.value = null;

        return false;
    }


    return false;
}