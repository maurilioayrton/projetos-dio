/*OBJETIVO 

faça uma função que pegue o valor de uma etiqueta e de acordo com pagamento seja aplicada uma porcentagem.

1 Debido = -5%
2 CréditoParcelado = 12%
3 Pix = -10%
4 dinheiro = -3%
*/

const pagamento = 1
const etiqueta = 100

function verificarFormadePagamento(paguei){
    if( paguei == 1){
        result1 = etiqueta - (100*0.05);
    }else if (paguei == 2){
        result1 = etiqueta + (100*0.12);
    }
    else if (paguei == 3){
        result1 = etiqueta - (100*0.10);
    }
    else if (paguei == 4){
        result1 = etiqueta - (100*0.03);
    }
    return

}

function formaPGTO(forma){
    if(pagamento == 1){
        opcao = 'Debito';
    } else if(pagamento == 2){
        opcao = 'Credito';
    }else if(pagamento == 3){
        opcao ='Pix';
    }else if(pagamento == 4){
        opcao = 'Dinheiro';
    }
    return
}

let paguei = verificarFormadePagamento(pagamento,etiqueta);
const forma = formaPGTO(pagamento);


console.log(`O Valor era R$${etiqueta} mas você pagou com a opção ${pagamento} ${opcao}, portanto o valor a ser pago é: R$${result1}`);