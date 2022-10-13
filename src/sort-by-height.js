const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  let tmpArr = arr.filter(el => el >= 0).sort((a,b) => a-b);
  let i = 0, j = 0;
  while (i < tmpArr.length && j < arr.length) {
      if (arr[j] >= 0) { 
        arr[j] = tmpArr[i];
        i++; j++;
      }
      else { j++; }
    }
  return arr;
}

module.exports = {
  sortByHeight
};
