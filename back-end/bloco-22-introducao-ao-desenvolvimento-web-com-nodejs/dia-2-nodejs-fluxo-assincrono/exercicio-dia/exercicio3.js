const { stringify } = require('querystring');

const fs = require('fs').promises;

async function simpsonsFamily(...args) {
  const remove = JSON.stringify(args);

  const simpsons = await fs.readFile('simpsons.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });

  console.log(simpsons);

  const newSimpsonsArr = simpsons.filter(simpson => !remove.includes(simpson.id));

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(newSimpsonsArr));

  const simpsonsFamily = await fs.readFile('simpsonsFamily.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });

  console.log(simpsonsFamily);
}

simpsonsFamily(6, 10);