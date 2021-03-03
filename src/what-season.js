const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
      return 'Unable to determine the time of year!'
    } else if (date.toDateString() == "Invalid Date") {
      throw "Error";
    }
    const timeOfYear = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    let monthNumber = date.getMonth()

    return timeOfYear[monthNumber]
   
};
