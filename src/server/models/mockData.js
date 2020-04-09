
const { getFormattedTime } = require('../utils/formattedDateTime');
const { v4 } = require('uuid');

const uuidv4 = v4;


const formattedTime = getFormattedTime();

exports.creditTransactions = [
  {
    id: uuidv4(),
    description: 'Bank Transfer',
    amount: 5000.00,
    type: 'Credit',
    createdAt: formattedTime
  },
  {
    id: uuidv4(),
    description: 'Bank Transfer',
    amount: 8000.34,
    type: 'Credit',
    createdAt: formattedTime
  }
];

exports.debitTransactions = [
  {
    id: uuidv4(),
    description: 'Ikeja Electric',
    amount: 8000,
    type: 'Debit',
    createdAt: formattedTime
  },
  {
    id: uuidv4(),
    description: 'Airtime Subscription',
    amount: 3000,
    type: 'Debit',
    createdAt: formattedTime
  }
];