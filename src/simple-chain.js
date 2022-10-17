const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (String(value) != '') { this.chain.push('( ' + value + ' )'); }
    else { this.chain.push('( )'); }
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || position <= 0 || typeof position != 'number' || !Number.isInteger(position)) 
    { this.chain = [];
      throw Error('You can\'t remove incorrect link!'); }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    resChain = this.chain.join('~~');
    this.chain = [];
    return resChain;
  },
  chain : []
};

module.exports = {
  chainMaker
};
