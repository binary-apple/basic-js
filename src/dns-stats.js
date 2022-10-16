const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let tmpStr = '';
  let dotPos = 0;
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    domains[i] = '.' + domains[i].split('.').reverse().join('.');
  }
  for (let i = 0; i < domains.length; i++) {
    while(1) {
      tmpStr = domains[i].slice(0, (domains[i].indexOf('.', dotPos+1) == -1) ? domains[i].length : domains[i].indexOf('.', dotPos+1));
      dotPos = tmpStr.length;
      if (tmpStr in obj) { obj[tmpStr]++; }
      else { obj[tmpStr] = 1; }
      if (tmpStr == domains[i]) {
        dotPos = 0;
        break;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
