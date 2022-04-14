const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const guardaAnimal = species.find((specie) => specie.name === animal);
  const vefiricaIdade = guardaAnimal.residents.every((res) => res.age > age);
  return vefiricaIdade;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
