// Matheus Palma
// Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, imprima no console
// "ISENTO DE IR";
// - caso contrário imprima "TRIBUTADO NO IR".

var salary = parseFloat(prompt("Digite seu salário:"));

if (salary < 1903.98) {
  document.write("ISENTO DE IR");
} else {
  document.write("TRIBUTADO NO IR");
}