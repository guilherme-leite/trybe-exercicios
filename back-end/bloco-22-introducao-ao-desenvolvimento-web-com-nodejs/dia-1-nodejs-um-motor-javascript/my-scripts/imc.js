const { questionFloat, questionInt } = require('readline-sync');

const readline = require('readline-sync');

// const peso = question('Qual o seu Peso? ');
const peso = questionFloat('Qual o seu peso? ');
const altura = questionInt('Qual a sua altura? ');

function calcImc() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso/ Math.pow(altura/ 100,2)).toFixed(2);
  console.log(`Seu IMC é: ${imc}`);
  switch(imc) {
    case imc < 18:
      console.log('Abaixo do peso (magreza)');
      break;
    case imc > 18.5 && imc < 24.9:
      console.log('Peso normal');
    case imc > 25 && imc < 29.9:
      console.log('Acima do peso (sobrepeso)');
    case imc > 30 && imc < 34.9:
      console.log('Obesidade graus I');
    case imc > 35 && imc < 39.9:
      console.log('Obesidade graus II');
    default:
      console.log('Obesidade graus III e IV');
  }
}

calcImc();