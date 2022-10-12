const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let sum = 0;
  let i, j;
  let cols = new Array(matrix[0].length);
  for (i = 0; i < matrix[0].length; i++) {
    cols[i] = i;
  }

  for (i = 0; i < matrix.length; i++)
    for (j = 0; j < matrix[0].length; j++) {
      if (!(cols[j] == undefined)) { sum += matrix[i][cols[j]]; }
      if (matrix[i][cols[j]] === 0) { delete(cols[j]); }
    }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
