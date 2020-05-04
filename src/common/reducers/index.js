import {combineReducers} from 'redux';
import ticketReducer from '../../ticketPage/reducers/ticketReducer';
import checkoutReducer from '../../checkoutPage/reducers';

const rootReducer = combineReducers({
  ticket: ticketReducer,
  checkout: checkoutReducer
});

export default rootReducer;