let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = "#AND você vai ao Shopping? ";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR você vai ao Shopping? ";
resultadoOR += temDinheiro || carroEstaNaGaragem;
console.log(resultadoOR);