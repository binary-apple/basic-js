const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  if (typeof str != 'string') str = String(str);
  if (typeof options.addition != 'string') options.addition = String(options.addition);
  if (!Boolean(options.separator)) options.separator = '+';
  if (!Boolean(options.additionSeparator)) options.additionSeparator = '|';
  
  
  let add = new Array(options.additionRepeatTimes);
  add.fill(options.addition);
  let strNew = new Array(options.repeatTimes);
  strNew.fill(str + add.join(options.additionSeparator));
  return strNew.join(add.join(options.separator));
}

module.exports = {
  repeater
};
