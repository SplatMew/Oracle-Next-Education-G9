let numeroSecreto = generarNumeroSecreto();
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Introduce un número';

function asignarTextoElemento(elemento, texto){
    let titulo =  document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = document.getElementById('inputBox1').value;
    console.log(numeroDeUsuario);
    return;
}

asignarTextoElemento();

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) +1; 
    
}

