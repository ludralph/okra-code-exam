import {
    GET_ALL_TRANSACTIONS,
    GET_TOTAL_CREDIT,
    GET_TOTAL_DEBIT,
    GET_TOTAL_BALANCE
  } from '../actions/transactionActions.js'
  
  export const initialState = {
    transactions: [],
    totalCredit: 0,
    totalDebit: 0,
    totalBalance: 0
  };
  
  
  export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_TRANSACTIONS:
        const allTransactions = [...state.transactions, ...action.payload];
        return { ...state, transactions: allTransactions }
      case GET_TOTAL_CREDIT:
        return { ...state, totalCredit: state.totalCredit + action.payload }
      case GET_TOTAL_DEBIT:
        return { ...state, totalDebit: state.totalDebit + action.payload };
      case GET_TOTAL_BALANCE:
        return { ...state, totalBalance: state.totalBalance + action.payload }
      default:
        return state;
    }
  
  }