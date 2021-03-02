const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let numberSampleActivity = parseFloat(sampleActivity);
  const LN_2 = 0.693;
  if (typeof sampleActivity == 'string' && numberSampleActivity > 0 && numberSampleActivity < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / numberSampleActivity) * (HALF_LIFE_PERIOD / LN_2));
  }
  return false
};
