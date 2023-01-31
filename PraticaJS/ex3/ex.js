// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e imprima seu peso
//     ideal, utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7
    
//     Exemplo de dados:
//     altura = 1.88
//     sexo = 2

    function calcPesoIdeal() {
      var h = prompt("Insira sua altura:");
      let h1 = Number(h.replace(',', '.'));
      var sexo = parseInt(prompt("Insira seu código de gênero (1 para mulher, 2 para homem):"));
      
      var pesoIdeal;

      if (sexo === 1) {
        pesoIdeal = (62.1 * h1) - 44.7;
      } else if (sexo === 2) {
        pesoIdeal = (72.7 * h1) - 58;
      } else {
        document.write("Código de gênero inválido.");
        return;
      }

      document.write("Seu peso ideal é " + pesoIdeal.toFixed(2) + "kg.");
    }

