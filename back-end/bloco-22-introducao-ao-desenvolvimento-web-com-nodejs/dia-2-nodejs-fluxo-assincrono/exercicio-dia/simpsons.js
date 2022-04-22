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

  async function getSimpsonById(id) {
    const simpsons = await fs.readFile('simpsons.json', 'utf8')
      .then((data) => {
        return JSON.parse(data);
      });

      const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

      if(!chosenSimpson) {
        throw new Error('Id inexistente');
      }

      console.log(chosenSimpson);
  }

  getSimpsonById('2');