const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map((e) => this.calculateDepth(e))) : 0;
  }
};
