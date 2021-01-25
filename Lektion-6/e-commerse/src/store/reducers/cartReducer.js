import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';
const secretKey = 'ZvwiH0dzBnnTI9r19Plpi2jLCYe82rI8'

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {
  let itemIndex;

  switch(action.type) {

    case actiontypes().cart.add:
      itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id);

      let _product = {
        ...action.payload,
        quantity: 1
      }

      itemIndex < 0
      ? state.shoppingCart = [...state.shoppingCart, _product]
      : state.shoppingCart[itemIndex].quantity += 1

      state.totalCartQuantity = getTotalQuantity(state.shoppingCart);
      state.totalCartAmount = getTotalAmount(state.shoppingCart);

      localStorage.setItem('Z_vwiH0dzBnnTI9r19Plpi2jLCYe82rI8', jwt.sign(state, secretKey));

      return state

    case actiontypes().cart.remove:

      action.payload.quantity === 1
      ? state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload._id)
      : action.payload.quantity -= 1

      state.totalCartQuantity = getTotalQuantity(state.shoppingCart);
      state.totalCartAmount = getTotalAmount(state.shoppingCart);

      localStorage.setItem('Z_vwiH0dzBnnTI9r19Plpi2jLCYe82rI8', jwt.sign(state, secretKey));

      return state

    case actiontypes().cart.delete:
      state.shoppingCart = state.shoppingCart.filter(item => item._id !== action.payload);

      state.totalCartQuantity = getTotalQuantity(state.shoppingCart);
      state.totalCartAmount = getTotalAmount(state.shoppingCart);

      localStorage.setItem('Z_vwiH0dzBnnTI9r19Plpi2jLCYe82rI8', jwt.sign(state, secretKey));

      return state

    case actiontypes().cart.clear:
      state.shoppingCart = []
      state.totalCartAmount = 0
      state.totalCartQuantity = 0

      localStorage.removeItem('Z_vwiH0dzBnnTI9r19Plpi2jLCYe82rI8');

    default:
      let cart = jwt.decode(localStorage.getItem('Z_vwiH0dzBnnTI9r19Plpi2jLCYe82rI8'))

      if(cart)
        state = cart

      return state
  }
}

const getTotalQuantity = cart => {
  let totalQuantity = 0;

  cart.forEach(product => {
    totalQuantity += product.quantity
  })

  return totalQuantity;
}

const getTotalAmount = cart => {
  let totalAmount = 0;

  cart.forEach(product => {
    totalAmount += Number(product.price) * product.quantity
  })

  return totalAmount;
}


export default cartReducer;