import { createStore, combineReducers } from 'redux';
import balanceReducer from './reducers/balanceReducer';

const rootReducer = combineReducers({
  balance: balanceReducer
});

const store = createStore(rootReducer);

export default store;
