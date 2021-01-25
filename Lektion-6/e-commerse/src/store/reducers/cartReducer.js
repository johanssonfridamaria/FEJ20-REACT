import actiontypes from '../actiontypes';

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
      return state

    case actiontypes().cart.remove:
      let _p = state.shoppingCart.find(product => product._id === action.payload)

      console.log(_p)
      return state

    default:
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