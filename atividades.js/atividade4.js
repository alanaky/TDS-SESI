const produto1 = 100;
const produto2 = 10;
const valorTotal = produto1 + produto2;
const precoDesconto = valorTotal - (valorTotal  * 0.10);

let mensagem1 = valorTotal < 100 ? "Preço Total: " : "Preço com desconto: "; //+ (valorTotal - (valorTotal  * 0.10));

if(valorTotal > 100){
(valorTotal - (valorTotal  * 0.10));
console.log(`Preço com Desconto: ${precoDesconto}`);
} else {
    console.log(`Preço Total: ${valorTotal}`);
}