const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const filtradas = species.filter((specie) => ids.find((id) => id === specie.id));
  return filtradas;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
