// Desafio

let n1 = 8.5;
let n2 = 8.0;
let n3 = 8.0;
let media = (n1 + n2 + n3) / 3;
console.log("Sua média: " + media)

if (media >= 7.5) {
    console.log ("Aprovado!");

} else if (media <=7.4 && media >= 5.0 ) {
    console.log("Em recuperação!");

} else {
    console.log("Reprovado!");
}