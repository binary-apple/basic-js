const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  let res = [];
  let suff = 0;
  let makeName = function(name, suffix) {
    if (suffix == 0) return name;
    else return name + '(' + suffix + ')';
  }

  for (let i = 0; i < names.length; i++) {
    while (res.find(el => el == makeName(names[i], suff)) !== undefined) {
      suff++;
    }
    res.push(makeName(names[i], suff));
    suff = 0;    
  }
  return res;
}

module.exports = {
  renameFiles
};
