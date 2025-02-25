// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let nombreDeAmigos = document.getElementById('amigo');
    if (nombreDeAmigos === '') {
        alert('Introduce un nombre valido');
    } else {
        amigos.push(nombreDeAmigos.value);
    }

    console.log(amigos);
    nombreDeAmigos.value = ''
}
