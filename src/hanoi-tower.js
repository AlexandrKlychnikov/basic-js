const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let returnedObject = {
     turns: 1,
     seconds: 0
  };
  for (let i = 1; i < disksNumber; i++) {
    returnedObject.turns = returnedObject.turns*2+1
  } 
  returnedObject.seconds = Math.floor((returnedObject.turns*3600)/turnsSpeed);
  return returnedObject;
};
