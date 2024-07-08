/*Objetivo:
Desenvolver uma função chamada calcularValorGasto que recebe os seguintes parâmetros:

kmRodado - O valor do km rodado.
precoGasolina - O Valor do preço da Gasolina
distanciaPecorrida - O valor da distancia a percorrer

O que preciso saber? 
1 - quantos Km o carro faz com um litro? 
2 - qual o preço da gasolina?
3 - qual a distancia percorrida?


*/



function calcularKM(distanciaPecorrida,kmPorLitro){
    return distanciaPecorrida/kmPorLitro
}

function calcularValorGasto(calculoKM,precoGasolina){
    return calculoKM*precoGasolina
}


let precoGasolina = 5.89;
let distanciaPecorrida = 12.5;
let kmPorLitro = 12.5;
let calculoKM = calcularKM(distanciaPecorrida,kmPorLitro);
let valorGasto = calcularValorGasto(calculoKM,precoGasolina);

console.log (`olá para pecorrer ${distanciaPecorrida}km, seu carro fazendo ${kmPorLitro} KM/L e o preço da gasolina a R$${precoGasolina}, você vai gastar R$${valorGasto}`);