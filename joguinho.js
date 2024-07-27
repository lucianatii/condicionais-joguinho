const prompt = require("readline-sync");

const numeroSorteado = parseInt(Math.random() * 10);

let numero = Number(prompt.question("Digite um numero de 0 a 10:"));

let numTentativas = 1;

while (numero !== numeroSorteado) {
  numTentativas++;
  numero = Number(prompt.question("Voce errou! Tente outra vez: "));
}
console.log(
  "Parabéns, você acertou!! O número era ",
  numeroSorteado,
  "e você acertou em ",
  numTentativas,
  "tentativas"
);

//LAÇOS CONDICIONAIS - JAVASCRIPT - ADATECH
