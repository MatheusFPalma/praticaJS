// Faça um programa que verifique (usando IF Ternário). Conforme a
// letra escrever: F – Feminino, caso contrário, imprimir Masculino.

let letra = prompt("Qual seus sexo? (M/F)").toUpperCase;
let resultado = letra === 'F' ? 'Feminino' : 'Masculino';
document.write(resultado);
