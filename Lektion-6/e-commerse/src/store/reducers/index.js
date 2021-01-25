import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  productCatalog: productCatalogReducer,
  cartReducer,
  userReducer,
  ordersReducer
})