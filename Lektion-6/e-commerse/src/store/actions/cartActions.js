import actiontypes from '../actiontypes';
import axios from 'axios';

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}

export const removeFromCart = product => {
  return {
    type: actiontypes().cart.remove,
    payload: product
  }
}

export const deleteProduct = id => {
  return {
    type: actiontypes().cart.delete,
    payload: id
  }
}

export const clearCart = () => {
  return {
    type: actiontypes().cart.clear
  }
}

export const chekoutCart = cart => {
  return async (dispatch, getState) => {
    let id = getState().userReducer.userId;
    // console.log(id)
    if(cart.length > 0) {
      let order = {
        userId: id,
        cart
      }
      const res = await axios.post('http://localhost:9998/orders', order)
      // console.log(res);
      if(res.status === 201) {
        dispatch(clearCart());
      }
    }
  }
}