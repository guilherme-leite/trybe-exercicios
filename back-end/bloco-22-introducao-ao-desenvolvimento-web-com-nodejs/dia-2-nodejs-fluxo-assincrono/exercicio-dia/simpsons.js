const fs = require('fs').promises;

fs.readFile('simpsons.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  })
  .then((char) => {
    return char.map(({id, name}) => `${id} - ${name}`);
  })
  .then((strs) => {
    strs.forEach((str) => console.log(str));
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => {
//     console.log(`Conteúdo do arquivo: ${data}`);
//   })
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });