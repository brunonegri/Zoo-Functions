const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const countClients = entrants.reduce((acc, pessoa) => {
    if (pessoa.age < 18) {
      return { child: acc.child + 1, adult: acc.adult, senior: acc.senior };
    }
    if (pessoa.age < 50) {
      return { child: acc.child, adult: acc.adult + 1, senior: acc.senior };
    }
    return { child: acc.child, adult: acc.adult, senior: acc.senior + 1 };
  }, { child: 0, adult: 0, senior: 0 });
  return countClients;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const nC = countEntrants(entrants); // nC é numero de Clientes
  const sum = (nC.child * prices.child) + (nC.adult * prices.adult) + (nC.senior * prices.senior);
  return sum;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
