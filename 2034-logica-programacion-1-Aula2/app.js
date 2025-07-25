
let numeroSecreto = 0;
let intentos = 1;
let maxIntentos = 5;
let numeroUsuario = 0;

let min = parseInt(prompt("Ingresa el número mínimo para el juego."));
let max = parseInt(prompt("Ingresa el número máximo para el juego."));

numeroSecreto = Math.floor(Math.random()*(max- min) + min);

while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${min} y ${max} por favor:`));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto ) {

        alert(`Acertaste, el número es: ${numeroUsuario}. Hiciste ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);

        break;
    } else {

        if(intentos > maxIntentos ){
            alert(`No descubriste el numero secreto en tus poderosísimos ${maxIntentos} intentos`);
            break;
        } else {

            numeroUsuario > numeroSecreto ? alert(`El número secreto es menor a ${numeroUsuario}`) : alert(`El número secreto es mayor a ${numeroUsuario}`);
        }

    }

    intentos++;
}