// Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

var num = parseInt(prompt("Informe um número:"));
for (var i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    document.write(i + " ");
  }
}