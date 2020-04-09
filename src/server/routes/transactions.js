const express = require('express');
const {
  getAllTransactions,
  computeTotalCredits,
  computeTotalDebits,
  computeTotalBalance,
} = require('../controllers/transactions');

const router = express.Router();

router.route('/').get(getAllTransactions);

router.route('/credits').get(computeTotalCredits)

router.route('/debits').get(computeTotalDebits)

router.route('/balance').get(computeTotalBalance)


module.exports = router;