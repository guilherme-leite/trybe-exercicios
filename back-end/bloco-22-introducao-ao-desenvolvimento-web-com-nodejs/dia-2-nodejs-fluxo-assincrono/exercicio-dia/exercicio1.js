const fs = require('fs').promises;

function calculateThisNums(a, b ,c) {
  return new Promise((resolve, reject) => {
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ) reject(new Error('Informe apenas números'));
    const result = ((a + b) * c);
    if(result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  })
}

calculateThisNums(1,2,3)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.error(`erro: ${err.message}`));