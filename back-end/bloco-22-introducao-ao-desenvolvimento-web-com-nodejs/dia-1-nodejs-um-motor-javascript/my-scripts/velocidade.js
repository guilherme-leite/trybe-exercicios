const { questionInt } = require('readline-sync');

// const peso = question('Qual o seu Peso? ');
const distance = questionInt('Qual a distância percorrida em metros? ');
const time = questionInt('Qual o tempo gasto em segundos? ');

function calcAverageSpeed() {
  const averageSpeed = distance / time;
  console.log(`A sua velocidade média foi de ${averageSpeed}m/s.`);
}

calcAverageSpeed();