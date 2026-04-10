const estoque = ["Placa de Vídeo", "Processador", "Monitor", "Memória Ram", "Ventuinha"];

estoque.push("SSD");

let clienteNome = "Alana";
let clientIdade = 16;
let possuiCupom = false;
let valorTotal = 600;
let vendaPossivel;

function processarVenda(valorTotal, possuiCupom){
    let valorFinal = valorTotal > 500 && possuiCupom == true ? valorTotal = (valorTotal -(valorTotal * 0.15)) : valorTotal;

    if (clientIdade >= 16){
        console.log(`Venda Autorizada para ${clienteNome}`);
        vendaPossivel = true;
    } else {
        console.log(`Venda bloqueada: Idade Insuficiente`);
        vendaPossivel = false;
    }

     if (vendaPossivel == true){
        for(let num = 1; num <= 5; num++){
            estoque.splice();
            console.log(`Despachando Item ${estoque[num]}... Ok! `);
        }
    }

    return valorFinal;
    
    }
        console.log (`Relatório da Loja: Cliente ${clienteNome} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}. 
    Itens restantes no estoque ${estoque.length}`);
