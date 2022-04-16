const { question } = require('readline-sync');

const scrips = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

function chooseScript() {
  let mensagem = scrips.map((script,index) => `${index + 1} ${script.name}`)
  
  mensagem.unshift('Escolha qual dos scripts você quer executar');

  mensagem = mensagem.join('\n');

  console.log(mensagem);

  const scrip = question('Qual script deseja rodar? ');

  if(script = 1) {
    require('./imc.js');
  } else if (scrip = 2) {
    require('./velocidade.js');
  } else if (scrip = 3) {
    require('./sorteio.js');
  } else {
    console.log('Essa opcão não existe, tente novamente.');
    chooseScript();
  }
}

chooseScript();