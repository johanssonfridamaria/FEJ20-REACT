// import actiontypes from '../actiontypes';
import axios from 'axios';
import actiontypes from '../actiontypes';

export const getOrders = () => {
  return async (dispatch, getState) => {
    let id = getState().userReducer.userId;
    const res = await axios.get('http://localhost:9998/orders?userId=' + id)
    if(res.status === 200)
      dispatch(setOrders(res.data))
  }
}

export const setOrders = orders => {
  return {
    type: actiontypes().orders.set,
    payload: orders
  }
}