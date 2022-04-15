const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const firstName = employees.find((empregado) => empregado.firstName === employeeName);
  const lastName = employees.find((empregado) => empregado.lastName === employeeName);
  const verify = employees.some((empregado) => empregado.firstName.includes(employeeName));
  if (verify === true) {
    return firstName;
  }
  return lastName;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
