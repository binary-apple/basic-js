const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = isReverse;
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (arguments.length != 2 || message === undefined || key === undefined) { throw Error('Incorrect arguments!'); }

    let encryptedMessage = [];
    let i = 0, j = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    while (i < message.length) {
      if (!(new RegExp('[a-zA-Z]')).test(message[i])) {
        encryptedMessage.push(message[i]);
        i++;
        continue;
      }
      encryptedMessage.push(String.fromCharCode(
        (key[j % key.length].charCodeAt()
        - 2 * 'A'.charCodeAt()
        + message[i].charCodeAt()) % 26
        + 'A'.charCodeAt()
        ));
      i++; j++;
    }

    return this.isReverse ? encryptedMessage.join('') : encryptedMessage.reverse().join('');

  }
  decrypt(encryptedMessage, key) {
    //throw new NotImplementedError('Not implemented');
    if (arguments.length != 2 || encryptedMessage === undefined || key === undefined) { throw Error('Incorrect arguments!'); }

    let message = [];
    let i = 0, j = 0;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    while (i < encryptedMessage.length) {
      if (!(new RegExp('[a-zA-Z]')).test(encryptedMessage[i])) {
        message.push(encryptedMessage[i]);
        i++;
        continue;
      }
       message.push(String.fromCharCode(
         (encryptedMessage[i].charCodeAt()
         - key[j % key.length].charCodeAt()
         + 26) % 26
         + 'A'.charCodeAt()
         ));
      i++; j++;
    }

    return this.isReverse ? message.join('') : message.reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
