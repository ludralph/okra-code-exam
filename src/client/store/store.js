import { createStore, compose, applyMiddleware, } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import { transactionReducer, initialState } from '../reducer/transactionReducer'

const logger = createLogger();
const store = createStore(transactionReducer, initialState, compose(
  applyMiddleware(logger, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;