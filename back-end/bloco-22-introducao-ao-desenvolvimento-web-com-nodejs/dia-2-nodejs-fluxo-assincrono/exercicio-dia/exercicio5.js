const { stringify } = require('querystring');

const fs = require('fs').promises;

async function addSimpsonsToArray() {

  const newSimpson = { id: '5', name: 'Nelson Muntz' };

  const simpsons = await fs.readFile('simpsonsFamily.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });

  const newSimpsonsArr = simpsons.concat(newSimpson);

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(newSimpsonsArr));
  
  const simpsonsFamily = await fs.readFile('simpsonsFamily.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });

  console.log(simpsonsFamily);
}

addSimpsonsToArray();