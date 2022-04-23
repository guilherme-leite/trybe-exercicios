const fs = require('fs').promises;
const readline = require('readline');

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
  const fileName = await question('Arquivo a ser lido: ');

  const originalContent = await fs.readFile(fileName, 'utf8')
  .catch(err => {
    console.log(`Erro ao ler o arquivo ${err}`);
    return false;
  })

  if(!originalContent) return;

const oldWord = await question('Qual palavra deseja substituir? ');
const newWord = await question('E qual palavra deve ficar em seu lugar? ');

const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);

if(newContent ===  originalContent) {
  console.log('Não foi feita nenhuma mudanca!');
  console.log('exiting');
  return;
}

console.log('Resultado da substituicão: ');
console.log(newContent);

const destinationPath = await question('Onde deseja salvar o resultado? ');
await fs.writeFile(destinationPath, newContent);

}

start();