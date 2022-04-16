const { question } = require('readline-sync');

const scrips = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calcular fatorial', script: './fatorial.js'}
];

function chooseScript() {
  let mensagem = scrips.map((script,index) => `${index + 1} ${script.name}`)
  
  mensagem.unshift('Escolha qual dos scripts você quer executar');

  mensagem = mensagem.join('\n');

  console.log(mensagem);

  const scrip = question('Qual script deseja rodar? ');
  let chosen = scrips[scrip-1];
  console.log(chosen);
  require(chosen.script);
}

chooseScript();