/*Crie um programa que recebe uma palavra e verifica 
se ela é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente).*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehPalindromo(palavra) {
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    const palavraInvertida = palavraLimpa.split('').reverse().join('');

    return palavraLimpa === palavraInvertida;
}

function solicitarPalavra() {
    rl.question('Digite uma palavra: ', (input) => {
        const resultado = ehPalindromo(input);

        if (resultado) {
            console.log(`A palavra "${input}" é um palíndromo.`);
        } else {
            console.log(`A palavra "${input}" não é um palíndromo.`);
        }

        rl.close();
    });
}

solicitarPalavra();