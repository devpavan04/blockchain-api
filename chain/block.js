const SHA256 = require('crypto-js/sha256')

function Block(data, previousHash = '') {
  this.blockNumber = 1
  this.previousHash = previousHash;
  this.timestamp = Date();
  this.data = data;
  this.hash = this.calculateHash();
}

Block.prototype.calculateHash = function () {
  return SHA256(this.blockNumber + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
}

module.exports = Block;