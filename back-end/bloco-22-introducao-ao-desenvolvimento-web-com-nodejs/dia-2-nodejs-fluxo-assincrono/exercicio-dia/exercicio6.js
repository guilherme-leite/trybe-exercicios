const fs = require('fs').promises;

async function addSimpsonsToArray() {
  const newSimpson = { id: '8', name: 'Maggie Simpson' };

  const simpsons = await fs.readFile('simpsons.json', 'utf8')
  .then((data) => {
    return simpsonsArr = JSON.parse(data);
  })

  const simpsonsWithoutNelson = simpsonsArr.filter((simpson) => simpson.id !== '8');

  const firstPart = simpsons.slice(0,7);
  const secondPart = simpsons.slice(8);

  const newCompleteArr = firstPart.concat(newSimpson).concat(secondPart);

  console.log(newCompleteArr);
}

addSimpsonsToArray();