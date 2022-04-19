const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaborador = employees.find((employee) => employee.id === id);
  const animais = species.find((specie) => specie.id.includes(colaborador.responsibleFor[0]))
    .residents.sort((a, b) => b.age - a.age)[0];
  return [animais.name, animais.sex, animais.age];
}

module.exports = getOldestFromFirstSpecies;
