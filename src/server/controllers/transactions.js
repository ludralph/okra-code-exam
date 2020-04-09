const { creditTransactions, debitTransactions } = require('../models/mockData');

const computeTotal = (arr) => {
  return arr.reduce((acc, obj) => { return acc + obj.amount; }, 0);
}

const errorHandler = (res, err) =>{
  res.status(400).json({ status: 'error', message: err.message });
}

/**
 * desc Get all transactions
 * GET /api/v1/transactions
 * Access Public
 */
exports.getAllTransactions = (req, res, next) => {
  try {
    const transactions = [...creditTransactions, ...debitTransactions];
    res.status(200).json({ success: true, count: transactions.length, message: transactions });
  } catch (err) {
    errorHandler(res, err)
  }
};

/**
 * desc compute total credits
 * GET /api/v1/transactions/credits
 * Access Public
 */
exports.computeTotalCredits = (req, res, next) => {
  try {
    const totalCredits = computeTotal(creditTransactions)
    res.status(200).json({ success: true, totalCredits });
  } catch (err) {
    errorHandler(res, err)
  }
}

/**
 * desc  compute total debits
 * GET /api/v1/transactions/debits
 * Access Public
 */
exports.computeTotalDebits = (req, res, next) => {
  try {
    const totalDebits = computeTotal(debitTransactions);
    res.status(200).json({ success: true, totalDebits });
  } catch (err) {
    errorHandler(res, err)
  }
};

/**
 * desc  compute total balance
 * GET /api/v1/transactions/balance
 * Access Public
 */
exports.computeTotalBalance = (req, res, next) => {
  try {
    const totalCredits = computeTotal(creditTransactions);
    const totalDebits = computeTotal(debitTransactions)
    const totalBalance = totalCredits - totalDebits;
    res.status(200).json({ success: true, totalBalance });
  } catch (err) {
    errorHandler(res, err)
  }
};