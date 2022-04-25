const fs = require('fs/promises');

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf8')
    .then(fileCotent => JSON.parse(fileCotent));
}

function setSimpsons(newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
}

module.exports = { getSimpsons, setSimpsons };