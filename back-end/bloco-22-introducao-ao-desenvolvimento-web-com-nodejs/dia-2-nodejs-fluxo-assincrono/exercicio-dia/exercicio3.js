const { stringify } = require('querystring');

const fs = require('fs').promises;

async function simpsonsFamily(...args) {
  const remove = JSON.stringify(args);

  const simpsons = await fs.readFile('simpsons.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });

  const newSimpsonsArr = simpsons.filter(simpson => !remove.includes(simpson.id));

  console.log(newSimpsonsArr);
}

simpsonsFamily(6, 10);