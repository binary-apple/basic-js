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
  let tmpStrRep = '';
  if (typeof str != 'string') str = String(str);

  if (!('additionRepeatTimes' in options) && 'addition' in options) { tmpStrRep = options.addition; }
  if ('addition' in options && 'additionRepeatTimes' in options) {
    if (typeof options.addition != 'string') options.addition = String(options.addition);
    if (!('additionSeparator' in options)) { 
      options.additionSeparator = '|';
    } else { options.additionSeparator = String(options.additionSeparator); }

    tmpStrRep = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  }
  if ('repeatTimes' in options) {
    if (!('separator' in options)) { 
      options.separator = '+';
    } else { options.separator = String(options.separator); }

    tmpStrRep = new Array(options.repeatTimes).fill(str+tmpStrRep).join(options.separator);
  } else return str+options.addition;
  return tmpStrRep;
}

module.exports = {
  repeater
};
