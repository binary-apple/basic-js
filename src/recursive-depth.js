const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    let maxDepth = 0;

    if (Array.isArray(arr)) {
      for (let i=0; i < arr.length; i++) {
        let curDepth = this.calculateDepth(arr[i])
        if (maxDepth < curDepth) maxDepth = curDepth;
      }
      return maxDepth+1;
    }
    else return 0;
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
