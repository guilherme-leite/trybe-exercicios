const { question } = require('readline-sync');
const fs = require('fs').promises;


async function readFile() {

  const chosenFile = question('Qual script deseja rodar? ');
  
  const actualFile = await fs.readFile(chosenFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    console.log(data);
  });
  console.log(actualFile);
}

readFile();