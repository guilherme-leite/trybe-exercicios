const fs = require('fs').promises;

// Utilizando promisses

// fs.writeFile('./meu-arquivo.txt', 'Provolone é um gato mágico')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Provolone é um gato mágico');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err}`);
  }
};

main();
