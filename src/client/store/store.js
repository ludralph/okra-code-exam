import { createStore, compose, applyMiddleware, } from 'redux';

import thunk from 'redux-thunk'
import { transactionReducer, initialState } from '../reducer/transactionReducer'


const store = createStore(transactionReducer, initialState, compose(
  applyMiddleware(thunk),
));

export default store;