class Funcionario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    calcularSalario() {
        return 0; // Método a ser sobrescrito
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome, idade, horasTrabalhadas, valorHora) {
        super(nome, idade);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    calcularSalario() {
        return this.horasTrabalhadas * this.valorHora;
    }
}

class FuncionarioPF extends Funcionario {
    constructor(nome, idade, salarioFixo) {
        super(nome, idade);
        this.salarioFixo = salarioFixo;
    }

    calcularSalario() {
        return this.salarioFixo;
    }
}


const funcionarioPJ = new FuncionarioPJ("Carlos Silva", 30, Math.floor(Math.random() * 200) + 80, 50);
const funcionarioPF = new FuncionarioPF("Ana Souza", 28, 5000);


console.log(Salário do Funcionário PJ (${funcionarioPJ.nome}): R$ ${funcionarioPJ.calcularSalario().toFixed(2)});
console.log(Salário do Funcionário PF (${funcionarioPF.nome}): R$ ${funcionarioPF.calcularSalario().toFixed(2)});