const data = require('../data/zoo_data');

const { species, hours } = data;

// const objeto = {};
const filtraDia = Object.keys(hours);
// console.log(filtraDia);

function getSchedule(param) {
  if (!param || !species.some((specie) => specie.availability.includes(param))) {
    const objeto = species.forEach((atual) => ({ [filtraDia[0]]: { officeHour: hours.Tuesday.open, exhibition: atual.availability } }));
    return objeto;
  }
  if (species.some((specie) => specie.name.includes(param))) {
    return species.filter((specie) => specie.name.includes(param))[0].availability;
  }
  if (param === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const filtro1 = species.filter((specie) => specie.availability.includes(param));
  const filtro2 = filtro1.reduce((acc, specie) => {
    acc.exhibition.push(specie.name);
    acc.officeHour = `Open from ${hours[param].open}am until ${hours[param].close}pm`;
    return acc;
  }, { officeHour: '', exhibition: [] });
  return { [param]: filtro2 };
}

console.log(getSchedule());

module.exports = getSchedule;
