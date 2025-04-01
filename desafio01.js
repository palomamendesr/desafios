/*01. Crie uma função que recebe um número inteiro positivo N e retorna a soma 
de seus dígitos. O programa deve funcionar recursivamente.*/
function somaDigitos(N) {
    if (N === 0) {
        return 0;
    }

    return (N % 10) + somaDigitos(Math.floor(N / 10));
}
const numero = 1986543
const resultado = somaDigitos(numero);
console.log(`A soma dos dígitos de ${numero} é ${resultado}.`);

