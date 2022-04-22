const { stringify } = require('querystring');

const fs = require('fs').promises;

async function simpsonsFamily(...args) {
  const add = JSON.stringify(args);

  const simpsons = await fs.readFile('simpsons.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });

  const newSimpsonsArr = simpsons.filter(simpson => add.includes(simpson.id));

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(newSimpsonsArr));
  
  const simpsonsFamily = await fs.readFile('simpsonsFamily.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  });
  
  console.log(simpsonsFamily);
}

simpsonsFamily(1,2,3,4);