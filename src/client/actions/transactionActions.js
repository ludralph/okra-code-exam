import axios from 'axios';

export const GET_ALL_TRANSACTIONS = "GET_ALL_TRANSACTIONS";
export const GET_TOTAL_CREDIT = "GET_TOTAL_CREDIT";
export const GET_TOTAL_DEBIT = "GET_TOTAL_DEBIT";
export const GET_TOTAL_BALANCE = "GET_TOTAL_BALANCE";


export const totalDebit = (debit) => {
  return {
    type: GET_TOTAL_DEBIT,
    payload: debit
  }
}


export const totalCredit = (credit) => {
  return {
    type: GET_TOTAL_CREDIT,
    payload: credit
  }
}

export const totalBalance = (balance) => {
  return {
    type: GET_TOTAL_BALANCE,
    payload: balance
  }
}

export const transactions = (transactions) => {
  return {
    type: GET_ALL_TRANSACTIONS,
    payload: transactions
  }
}

export const getTotalCredit = () => {
  return (dispatch) => {
    return axios.get('/api/v1/transactions/credits')
      .then(response => dispatch(totalCredit(Number(response.data.totalCredits))))
      .catch(error => console.error(error))
  }
}

export const getTotalDebit = () => {
  return (dispatch) => {
    return axios.get('/api/v1/transactions/debits')
      .then(response => dispatch(totalDebit(response.data.totalDebits)))
      .catch(error => console.error(error))
  }
}

export const getTotalBalance = () => {
  return (dispatch) => {
    return axios.get('/api/v1/transactions/balance')
      .then(response => dispatch(totalBalance(response.data.totalBalance)))
      .catch(error => console.error(error))
  }
}

export const getAllTransactions = () => {
  return (dispatch) => {
    return axios.get('/api/v1/transactions')
      .then(response => dispatch(transactions(response.data.message)))
      .catch(error => console.error(error))
  }
}