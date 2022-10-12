const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) return false;
  //members = members.filter(member => typeof member === 'string' && member);
  //members = members.map(member => member.trim()[0].toUpperCase());
  //members.sort(function cmp(a, b) { return a<b ? -1 : 1; });
  //let res = members.join('');
  //return res ? res : false;
  return members.filter(member => typeof member === 'string' && member).map(member => member.trim()[0].toUpperCase()).sort(function cmp(a, b) { return a<b? -1:1; }).join('') ;
}

module.exports = {
  createDreamTeam
};
