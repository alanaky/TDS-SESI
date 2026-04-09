const estoque = ["Placa de Vídeo", "Processador", "Monitor", "Memória Ram", "Ventuinha"];

estoque.push("SSD");

let clienteNome = "Alana";
let clientIdade = 15;
let possuiCupom = false;
let valorTotal = 600;

function processarVenda(valorTotal, possuiCupom){
    let valorFinal = valorTotal > 500 && possuiCupom == true ? valorTotal = (valorTotal -(valorTotal * 0.15)) : valorTotal;

    if (clientIdade >= 16){
        console.log(`Venda Autorizada para ${clienteNome}`);
    } else {
        console.log(`Venda bloqueada: Idade Insuficiente`);
    }

    for(let num = 1; num <= 5; num++){
        console.log(`Despachando Item ${estoque[num]}... Ok! `);
        estoque.splice();
    }
    return valorFinal;
    }
        console.log (`Relatório da Loja: Cliente ${clienteNome} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}. 
    Itens restantes no estoque ${estoque.length}`);
