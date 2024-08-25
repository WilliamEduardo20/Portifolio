import dados from './biblioteca.js';

// Seleção dos elementos que serão alterados
const elementos = [
    document.getElementById("contato"),
    document.getElementById("sobre"),
    document.getElementById("habilidades"),
    document.getElementById("experiencias"),
    document.getElementById("Apresentacao"),
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3"),
    document.getElementById("p4"),
    document.getElementById("p5")
];

let contadorCliques = 0;

function mudarIdioma() {
    contadorCliques++;

    // Calcula o índice do idioma com base no número de cliques
    const indiceIdioma = contadorCliques % dados.linguas.length;

    if (contadorCliques === 2) {
        // Atualiza o texto dos elementos com base no idioma selecionado
        elementos.forEach((elemento, index) => {
            elemento.textContent = dados.linguas[indiceIdioma][index];
        });

        // Mostra o popup após 5 segundos (5000 milissegundos) no idioma atual
        setTimeout(function() {
            popup.style.display = 'block';
        }, 5000);
    }
}

// Seleção do elemento popup
const popup = document.getElementById('popup');

// Fechando popup
const closePopupBtn = document.querySelector('.close');
closePopupBtn.onclick = function() {
    popup.style.display = 'none';
}

// Fechando popup clicando fora da modal
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

// Adiciona o evento de clique na imagem (#foto)
document.getElementById('foto').addEventListener('click', mudarIdioma);