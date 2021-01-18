import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import quantityReducer from './quantityReducer';

export default combineReducers({
  counter: counterReducer,
  quantity: quantityReducer
})