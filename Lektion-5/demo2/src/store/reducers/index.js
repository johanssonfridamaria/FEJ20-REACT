import { combineReducers } from 'redux';

import auth from './authReducer';
import postsReducer from './postsReducer'

export default combineReducers({
  auth,
  postsReducer
})