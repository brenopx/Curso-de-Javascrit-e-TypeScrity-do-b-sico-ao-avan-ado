/*
Escreva uma função chamada ePaisagem que recebe dois argumentos 
(largura e altura) de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

function ePaisagem(largura, altura) {
    // return largura > altura ? true : false;
    return largura > altura;
}

const ePaisagem1 = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080))