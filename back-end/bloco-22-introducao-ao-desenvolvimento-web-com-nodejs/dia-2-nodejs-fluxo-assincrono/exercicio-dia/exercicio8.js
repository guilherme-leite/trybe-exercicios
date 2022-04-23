const readline = require('readline');
const fs = require('fs').promises;


function question(message) {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const fileContent = await readFile(fileName, 'utf8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente!');
  }
}

start();