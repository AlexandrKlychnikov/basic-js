const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; 
  const arrName = members.filter(arr => typeof arr == 'string')
  const firstLetters = arrName.map(name => name.trim()[0].toUpperCase())
  const dreamTeam = firstLetters.sort().join('')
  return dreamTeam
};

