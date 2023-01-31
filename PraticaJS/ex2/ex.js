// Informe um valor a uma variável e imprima no console se o número
// é primo.

let alturaero = parseInt(prompt("Digite um número:"));
let ehPrimo = true;

for (let i = 2; i < alturaero; i++) {
  if (alturaero % i === 0) {
    ehPrimo = false;
    break;
  }
}

if (ehPrimo) {
  document.write(alturaero + " é um número primo.");
} else {
  document.write(alturaero + " não é um número primo.");
}