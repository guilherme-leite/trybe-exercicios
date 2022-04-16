const { question } = require('readline-sync');

function chooseScript() {
  console.log('1- imc');
  console.log('2- velocidade');
  console.log('3- sorteio');

  const scrip = question('Qual script deseja rodar? ');

  if(script = 1) {
    calcImc();
  } else if (scrip = 2) {
    calcAverageSpeed();
  } else if (scrip = 3) {
    generateDraw();
  } else {
    console.log('Essa opcão não existe, tente novamente.');
    chooseScript();
  }
}

chooseScript();