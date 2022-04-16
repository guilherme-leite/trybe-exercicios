const { questionFloat, questionInt } = require('readline-sync');

const readline = require('readline-sync');

// const peso = question('Qual o seu Peso? ');
const peso = questionFloat('Qual o seu peso? ');
const altura = questionInt('Qual a sua altura? ');

function calcImc() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso/ Math.pow(altura/ 100,2)).toFixed(2);
  console.log(`Seu IMC é: ${imc}`);
  
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

calcImc();