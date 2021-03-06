function calculateThisNums(a, b ,c) {
  return new Promise((resolve, reject) => {
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ) reject(new Error('Informe apenas números'));
    const result = ((a + b) * c);
    if(result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  })
}

function getRandomNums() {
  return Math.floor(Math.random() * 10 + 1);
}

// Refatorada para utilizar async/await

async function params() {
  const randomNums = Array.from({ length: 3}).map(getRandomNums);
  
  try {
    const result = await calculateThisNums(...randomNums);
  console.log(result);
  } catch (err) {
    console.log(err.message);
  }

}

// Utilizando Promisses 

// function params() {
//   const randomNums = Array.from({ length: 3}).map(getRandomNums);
  
//   calculateThisNums(...randomNums)
//     .then(result => console.log(`sucesso: ${result}`))
//     .catch(err => console.error(`erro: ${err.message}`));
// }

params();
