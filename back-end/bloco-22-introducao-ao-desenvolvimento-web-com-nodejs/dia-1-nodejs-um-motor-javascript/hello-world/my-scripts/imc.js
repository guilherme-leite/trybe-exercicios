const { question, questionInt } = require('readline-sync');

const readline = require('readline-sync');

const peso = question('Qual o seu Peso? ');
const altura = questionInt('Qual a sua altura? ');

function calcImc() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso/ Math.pow(altura/ 100,2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calcImc();