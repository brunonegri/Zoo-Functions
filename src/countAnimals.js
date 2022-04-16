const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui BORA
  if (!animal) {
    const objeto = {};
    species.forEach((atual) => { objeto[atual.name] = atual.residents.length; });
    return objeto;
  }
  const { specie, sex } = animal;

  if (!sex) {
    const filtro1 = species.find((atual) => atual.name === specie);
    return filtro1.residents.length;
  }
  if (sex) {
    const filtra1 = species.find((atual) => atual.name === specie);
    const filtro2 = filtra1.residents.filter((atual) => atual.sex === sex).length;
    return filtro2;
  }
}

console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
