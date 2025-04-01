/* Escreva um programa que recebe um número inteiro N e determina se ele é um número primo.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true;
}

function solicitarNumero() {
    rl.question('Digite um número inteiro: ', (input) => {
        const numero = parseInt(input);

        if (isNaN(numero)) {
            console.log('Por favor, digite um número inteiro.');
            solicitarNumero();
        } else {
            const resultado = ehPrimo(numero);
            if (resultado) {
                console.log(`O número ${numero} é primo.`);
            } else {
                console.log(`O número ${numero} não é primo.`);
            }
            rl.close();
        }
    });
}

solicitarNumero();