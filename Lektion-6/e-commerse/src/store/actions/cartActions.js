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

export const chekoutCart = order => {
  return async (dispatch, getState) => {
    let id = getState().userReducer.userId;
    // console.log(id)
    if(order.shoppingCart.length > 0) {
      let _order = {
        userId: id,
        cart: order.shoppingCart,
        sum: order.totalCartAmount,
        status: 'Not processed'
      }
      const res = await axios.post('http://localhost:9998/orders', _order)
      // console.log(res);
      if(res.status === 201) {
        dispatch(clearCart());
      }
    }
  }
}