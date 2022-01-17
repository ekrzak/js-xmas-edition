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

function validarIntegrantes(cantidadIntegrantes) {
    if (cantidadIntegrantes <= 0 || !Number.isInteger(cantidadIntegrantes)) {        
        return false;
    }
    return true;
}

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
        $edadesYSuedos.appendChild(nuevaEtiqueta);
        $edadesYSuedos.appendChild(nuevoInput);
        $edadesYSuedos.appendChild(saltoDeLinea);
    }

    
}

function mostrarBotones() {
   document.querySelector('#boton-calcular').classList.remove('oculto');
   document.querySelector('#boton-limpiar').classList.remove('oculto');
   document.querySelector('#boton-agregar-sueldos').classList.remove('oculto');
   document.querySelector('#boton-quitar-sueldos').classList.remove('oculto'); 
}

function ocultarBotones() {
    document.querySelector('#boton-calcular').classList.add('oculto');
    document.querySelector('#boton-limpiar').classList.add('oculto');
    document.querySelector('#boton-agregar-sueldos').classList.add('oculto');
    document.querySelector('#boton-quitar-sueldos').classList.add('oculto'); 
 }

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

const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
const $listaIntegrantes = document.querySelector('#lista-integrantes');
const $edadesYSuedos = document.querySelector('#edades-y-sueldos');

document.querySelector('#ingresar').onclick = () => {
    const cantidadDeIntegrantes = Number($cantidadIntegrantes.value);

    if (validarIntegrantes(cantidadDeIntegrantes)) {

        crearInputsPorIntegrante(cantidadDeIntegrantes);
        document.querySelector('#ingresar').disabled = true;

        mostrarBotones();

        // Ejecuta las acciones sobre el boton de agregar sueldos
        document.querySelector('#boton-agregar-sueldos').onclick = function() {
            crearInputsDeSueldos(cantidadDeIntegrantes);
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

            listaDeEdadesListaDeNodos.forEach(function(el) {
                if (Number(el.value) >= 0) {
                    listaDeEdades.push(Number(el.value));
                } else {
                    el.disabled = true;
                    el.style.backgroundColor = 'pink';
                }

            });
            
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

            listaDeSueldosListaDeNodos.forEach(function(el) {
                if (el.value === '' || Number(el.value) < 0) {
                    el.disabled = true;
                    el.style.backgroundColor = 'pink';
                } else {
                    listaDeSueldos.push(Number(el.value));
                }     
            });
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
            while ($edadesYSuedos.firstChild) { // Elimina todo lo del nodo padre div #edades-y-sueldos
                $edadesYSuedos.removeChild($edadesYSuedos.firstChild);
            }
            // Resetea los resultados de los textos
            document.querySelector('#mayor-edad').textContent = "";
            document.querySelector('#menor-edad').textContent = "";
            document.querySelector('#promedio-edad').textContent = "";
            document.querySelector('#mayor-salario-anual').textContent = "";
            document.querySelector('#menor-salario-anual').textContent = "";
            document.querySelector('#promedio-salario-anual').textContent = "";
            document.querySelector('#promedio-salario-mensual').textContent = "";

            ocultarBotones();

            // Vuelve a activar el boton#ingresar
            document.querySelector('#ingresar').disabled = false;
            // Vuelve el input al estado original
            $cantidadIntegrantes.value = null;

            return false;
        }

    } else {
        alert('Debes ingresar un número natural (sin decimales y mayor e igual a 1)');
    }

    return false;
}