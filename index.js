import dados from './biblioteca.js';

let contadorCliques = 0;
const fundo = document.querySelector('.fundo');
const caixa = document.querySelector('.caixa');
const cabeca = document.querySelector('.cabeca');

function mudarCorDeFundo() {
    contadorCliques++;
    if (contadorCliques >= 4) {
        let cor = contadorCliques - 5;
        fundo.style.backgroundImage = dados.paletaDeCores[cor][0];
        caixa.style.backgroundColor = dados.paletaDeCores[cor][1];
        cabeca.style.backgroundColor = dados.paletaDeCores[cor][2];
    }
}

document.getElementById('foto').addEventListener('click', mudarCorDeFundo);