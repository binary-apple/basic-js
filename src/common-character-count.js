const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  let cnt = 0;
  s1 = s1.split('').sort().join(''); 
  s2 = s2.split('').sort().join('');
  for (let i = 0, j = 0; i < s1.length && j < s2.length;) {
    if (s1[i] === s2[j]) {
      cnt++;
      i++; j++;
      continue;
    }
    if (s1[i] > s2[j]) {
      while (s1[i] > s2[j]) { j++; }
      continue;
    }
    if (s1[i] < s2[j]) {
      while (s1[i] < s2[j]) { i++; }
      continue;
    }
  }
  return cnt;
}

module.exports = {
  getCommonCharacterCount
};
