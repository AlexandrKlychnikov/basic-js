const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
   repeatTimes = 1, 
   separator = '+', 
   addition,
   additionRepeatTimes = 1, 
   additionSeparator = '|'} = options;

   if (str === null) str = 'null';
   if (typeof(str) == 'object' && !"Symbol.toPrimitive" in str) {
    str = str[Symbol.toPrimitive]('string');
   }   
   if (typeof(str) !== 'string') str=String(str);

   if (addition === null) addition = 'null';
   if (typeof(addition) == 'object' && !"Symbol.toPrimitive" in addition) {
    addition = addition[Symbol.toPrimitive]('string');
   } 
   if (typeof(addition) !== 'string') addition=String(addition);

   let addStrGross = (addition+additionSeparator).repeat(additionRepeatTimes);
   let extraSeparator = additionSeparator.length
   if (repeatTimes == "undefined") {
     addStrGross = addition;
     extraSeparator = 0;
   }
   let addStrNet = addStrGross.slice(0, addStrGross.length - extraSeparator);
   if (addStrNet == "undefined") addStrNet = '';
   let newStr = (str.concat(addStrNet)).concat(separator).repeat(repeatTimes);
   let ultimateStr = newStr.slice(0, newStr.length - separator.length);

   return ultimateStr;

};