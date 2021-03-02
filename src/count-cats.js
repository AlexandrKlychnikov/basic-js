const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numCat = 0;
  for (let item of matrix) {
    item.forEach(element => {
      if (element == '^^') numCat++;
    });
  }
  return numCat
};
