// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

// Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
// 

function agregarAmigo() {
    let capturaNombre = document.getElementById('amigo').value;

// Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."//

    if (capturaNombre === '') {
        alert('Por favor ingresa un nombre');

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().//

    } else {
        amigos.push(capturaNombre);
        limpiarInput()
    }
}

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.//

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.//

function lista() {
    let lista = document.getElementById('listaAmigos').value;
    
}