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

export const getOneOrder = (orderId) => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9998/orders/' + orderId)
    if(res.status === 200)
      dispatch(setOrder(res.data))
  }
}

export const setOrders = orders => {
  return {
    type: actiontypes().orders.set,
    payload: orders
  }
}

export const setOrder = order => {
  return {
    type: actiontypes().orders.setOne,
    payload: order
  }
}