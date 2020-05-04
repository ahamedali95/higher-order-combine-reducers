import { combineReducers } from 'redux';
import accountInfoReducer from './accountInfoReducer';
import paymentReducer from './paymentReducer';

const checkoutReducer = combineReducers({
  accountInfo: accountInfoReducer,
  payment: paymentReducer
});

export default checkoutReducer;