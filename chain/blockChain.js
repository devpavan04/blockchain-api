var Block = require("../chain/block");

function Blockchain() {
  this.chain = [this.createGenesisBlock()]
}

Blockchain.prototype.createGenesisBlock = function () {
  return new Block("Genesis Block", "0")
}

Blockchain.prototype.getLatestBlock = function () {
  return this.chain[this.chain.length - 1]
}

Blockchain.prototype.addBlock = function (newBlock) {
  newBlock.blockNumber = this.getLatestBlock().blockNumber + 1
  newBlock.previousHash = this.getLatestBlock().hash;
  newBlock.hash = newBlock.calculateHash();
  this.chain.push(newBlock);
}

Blockchain.prototype.isChainValid = function () {
  for (let i = 1; i < this.chain.length; i++) {
    const currentBlock = this.chain[i]
    const previousBlock = this.chain[i - 1]
    if (currentBlock.hash !== currentBlock.calculateHash()) {
      return false
    }
    if (currentBlock.previousHash !== previousBlock.hash) {
      return false
    }
  }
  return `The Blockchain is valid and the length of the Blockchain is ${this.chain.length}`
}

module.exports = Blockchain;