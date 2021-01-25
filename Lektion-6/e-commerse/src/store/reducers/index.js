import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productCatalog: productCatalogReducer,
  cartReducer
})