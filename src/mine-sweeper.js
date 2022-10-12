const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  let res = new Array(matrix.length);
  let i, j;
  for (i = 0; i < res.length; i++) {
    res[i] = new Array(matrix[0].length);
    for (j = 0; j < matrix[0].length; j++) {
      res[i][j] = 0;
    }
  }

  for (i = 0; i < res.length; i++)
    for (j = 0; j < res[0].length; j++) {
      for (let k = Math.max(i-1,0); k < Math.min(i+2,res.length); k++)
        for (let m = Math.max(j-1,0); m < Math.min(j+2,res[0].length); m++) {
          res[i][j] += Number(matrix[k][m]);
        }
      res[i][j] -= Number(matrix[i][j]);
    }
  
  return res;
}

module.exports = {
  minesweeper
};
