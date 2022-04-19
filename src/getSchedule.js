const data = require('../data/zoo_data');

const { species, hours } = data;

const semana = Object.keys(hours);
const filtraDia = (atual) => species.filter((dia) => dia
  .availability.includes(atual)).map((atual2) => atual2.name);

const objeto = {};

const cronogramaSemParametro = () => {
  semana.forEach((atual) => {
    if (atual !== 'Monday') {
      objeto[atual] = {
        officeHour: `Open from ${data.hours[atual].open}am until ${data.hours[atual].close}pm`,
        exhibition: filtraDia(atual),
      };
    } else {
      objeto[atual] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return objeto;
};

function getSchedule(param) {
  if (species.some((specie) => specie.name.includes(param))) {
    return species.filter((specie) => specie.name.includes(param))[0].availability;
  }
  if (semana.includes(param) && param !== 'Monday') {
    const filtro1 = species.filter((specie) => specie.availability.includes(param));
    const filtro2 = filtro1.reduce((acc, specie) => {
      acc.exhibition.push(specie.name);
      acc.officeHour = `Open from ${hours[param].open}am until ${hours[param].close}pm`;
      return acc;
    }, { officeHour: '', exhibition: [] });
    return { [param]: filtro2 };
  }
  if (param === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return cronogramaSemParametro();
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
