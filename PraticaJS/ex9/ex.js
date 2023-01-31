// Escrever um algoritmo que calcule e mostre a média aritmética dos
// números lidos entre 13 e 73.

var soma = 0, contador = 0;
for (var i = 13; i <= 73; i++) {
    soma += i;
    contador++;
}
var media = soma / contador;
console.log("A média aritmética dos números entre 13 e 73 é: " + media);