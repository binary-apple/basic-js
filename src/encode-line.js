const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let tmp = 1;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) { tmp++; }
    else { 
      if (tmp > 1) res.push(tmp+str[i]); 
      else res.push(str[i]);
        tmp = 1; 
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
