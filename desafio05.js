/* 5. O programa escolhe um número aleatório entre 1 e 100.
O usuário deve tentar adivinhar esse número, e o programa deve dar dicas:
"Muito baixo" → Se o palpite for menor.
"Muito alto" → Se o palpite for maior.
"Parabéns, você acertou!" → Se acertar.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function solicitarPalpite() {
    rl.question('Adivinhe o número entre 1 e 100: ', (input) => {
        const palpite = parseInt(input);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log('Por favor, digite um número entre 1 e 100.');
            solicitarPalpite();
        } else {
            if (palpite < numeroAleatorio) {
                console.log('Muito baixo! Tente novamente.');
                solicitarPalpite(); 
            } else if (palpite > numeroAleatorio) {
                console.log('Muito alto! Tente novamente.');
                solicitarPalpite(); 
            } else {
                console.log('Parabéns, você acertou!');
                rl.close();
            }
        }
    });
}

solicitarPalpite();