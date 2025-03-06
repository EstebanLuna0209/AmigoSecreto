let amigo = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreCapturado = inputAmigo.value;
    
    if (!nombreCapturado) {
        alert('Por favor ingresa un nombre');
        return;
    } else {
        amigo.push(nombreCapturado);
        mostrarAmigos();
        limpiarInput();
    }
}

let inputAmigo = document.getElementById('amigo');
inputAmigo.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        agregarAmigo();
        limpiarInput();
    }
});

function limpiarInput() {
    inputAmigo.value = '';
    inputAmigo.focus();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert('No hay amigos para sortear');
        return;
    } else {
        let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
        let resultadoSorteado = document.getElementById('resultado');
        resultadoSorteado.innerHTML = `${amigoSorteado} es el amigo sorteado`;
    }

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}