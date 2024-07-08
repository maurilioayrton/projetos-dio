/*function escrevaSeuNome(nome){
    console.log(`meu nome é ` + nome); 
}

escrevaSeuNome("Maurilio");

/*
Objetivo:
Desenvolver uma função chamada calculaIMC que recebe dois parâmetros:

peso - O peso da pessoa em quilogramas.
altura - A altura da pessoa em metros.
A função deve retornar o valor do IMC, que é obtido dividindo o peso pelo quadrado da altura.

Fórmula do IMC:
IMC=peso/altura2

Exemplo de Entrada e Saída:
Entrada: peso = 70 kg, altura = 1.75 m
Saída: IMC = 22.86 (aproximadamente)
Passos para Resolver o Problema:
Receber os valores de peso e altura.
Calcular o quadrado da altura.
Dividir o peso pelo quadrado da altura para obter o IMC.
Retornar o valor do IMC.*/



//let potencia = Math.pow(altura, 2);

function calcularImc(peso,altura){
    return peso/altura**2;
}


function classificarIMC(imc){
    if (imc < 18.5) {
        return 'MAGREZA';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'NORMAL';
    } else if (imc >= 24.9 && imc < 29.9) {
        return 'SOBREPESO';
    } else if (imc >= 30 && imc < 39.9) {
        return 'OBESIDADE';
    } else if (imc >= 40) {
        return 'OBESIDADE GRAVE';
    }
}


let peso = 80;
let altura = 1.80;
let imc = calcularImc(peso, altura);
let classificacao = classificarIMC(imc);

console.log(`Oi, seu resultado é ${imc.toFixed(4)} e a classificação é ${classificacao}`);
