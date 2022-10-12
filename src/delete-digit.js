const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  n = Array.from(String(n));
  for (let i = 0; i < n.length-1; i++) {
    if (n[i] < n[i+1]) {
      n.splice(i, 1);
      return Number(n.join(''));
    }
  }
  n.splice(n.length-1, 1);
  return Number(n.join(''));
}

module.exports = {
  deleteDigit
};
