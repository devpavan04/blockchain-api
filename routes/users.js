var express = require('express');
var router = express.Router();
var Block = require("../chain/block");
var Blockchain = require("../chain/blockChain");
var blockchain = new Blockchain();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// GET full Blockchain
router.get('/history', function (req, res, next) {
  res.send(blockchain);
});

// POST new transaction to the Blockchain
router.post('/transaction', function (req, res, next) {
  var transactionDetails = req.body
  blockchain.addBlock(new Block(transactionDetails));
  res.send(`added a new block of transaction ${JSON.stringify(transactionDetails)}`);
})

// GET latestBlock
router.get('/latestBlock', function (req, res, next) {
  res.send(blockchain.getLatestBlock());
})

// GET isChainValid
router.get('/isChainValid', function (req, res, next) {
  res.send(blockchain.isChainValid());
})

module.exports = router;