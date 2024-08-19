let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo =10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)  {
    let elementoHTML = document.querySelector(elemento);
    // docu conecta los elementos del ht al js.
    elementoHTML.innerHTML = texto;
    // los parámetros modifican de acuerdo a lo que reciban. el, tex. 
    return;
}

function verificarIntento() {
// acciones que queremos que haga.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // query toma la etiqueta del ht.

    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        // contador
        limpiarCaja();

    }

    return;  
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
    // query selector generico.
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
//    random nos da un número aleatorio. floor redondea el número al entero. 
    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);

    if(listasNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else{

        if (listasNumerosSorteados.includes(numeroGenerado)) {
            // includ chequea si ese valor ya está incluído en la lista, nos devuelve un buleano. 
            return generarNumeroSecreto();
        } else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    
        }
    }        
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // indicar mesaje de intervalor de números
    // generar número aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    // deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();