const { questionInt } = require('readline-sync');


function generateDraw() {
  const randomNumber = Math.floor(Math.random() * 11);
  const guess = questionInt('Escolha um número de 0 a 10. ');
  if(randomNumber === guess) {
    console.log(`Parabéns o número ${guess} é o número sorteado.`);
  } else {
    console.log(`Opa não foi dessa vez, o número sorteado era ${randomNumber}`);
    generateDraw();
  }
}

generateDraw();