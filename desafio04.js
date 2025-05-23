/*4. Crie um programa que recebe três notas de um aluno e calcula sua média.
Depois, exiba se foi aprovado com base na média.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarAprovacao() {
    rl.question("Digite a primeira nota: ", (nota1) => {
        rl.question("Digite a segunda nota: ", (nota2) => {
            rl.question("Digite a terceira nota: ", (nota3) => {
                
                const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
                if (media >= 6.0) {
                    console.log(`Média: ${media.toFixed(2)} - Aprovado!`);
                } else {
                    console.log(`Média: ${media.toFixed(2)} - Reprovado!`);
                }

                rl.close();
            });
        });
    });
}

verificarAprovacao();