const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const verify = employees.some((employee) => employee.managers.includes(id));
  return verify;
}

console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

// EMPREGADO '4b40a139-d4dc-4f09-822d-ec25e819a5ad'
// GERENTES '9e7d4524-363c-416a-8759-8aa7e50c0992' 'fdb2543b-5662-46a7-badc-93d960fdc0a8' '0e7b460e-acf4-4e17-bcb3-ee472265db83'

function getRelatedEmployees(managerId) {
  // seu código aqui

}

module.exports = { isManager, getRelatedEmployees };
