const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error('Argument of function should be array. Try again, please.')

  const outputArr = arr.reduce((output, num, i) => {

    if (arr[i - 1] === '--discard-next') return output
    if (arr[i - 1] === '--double-next') output.push(arr[i])
    if (arr[i + 1] === '--double-prev') output.push(arr[i])
    if (arr[i + 1] === '--discard-prev') return output

    if (num === '--discard-next' || num === '--double-prev'
      || num === '--double-next' || num === '--discard-prev') return output
    
    output.push(arr[i])
  return output
  }, [])

  return outputArr
};

