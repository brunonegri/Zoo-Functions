const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const nome = employees[7].firstName;
  if (nome === employeeName) {
    const firstName = employees.find((empregado) => empregado.firstName === employeeName);
    return firstName;
  }
  const lastName = employees.find((empregado) => empregado.lastName === employeeName);
  return lastName;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
