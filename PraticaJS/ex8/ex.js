// Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever
// a tabuada de 1 a 10 do valor lido.

var num = parseInt(prompt("Digite um número inteiro entre 1 e 10:"));

if (num >= 1 && num <= 10) {
  for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "<br>");
  }
} else {
  document.write("Valor inválido.");
}
