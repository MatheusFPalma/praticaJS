// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500.

var num = parseInt(prompt("Digite um número:"));
var result = num * 3;
var sum = 0;

document.write("<h3>Sequência:</h3>");

while (sum < 500) {
  sum += result;
  document.write(result + "<br>");
  result *= 3;
}