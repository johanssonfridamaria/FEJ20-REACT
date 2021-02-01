import actiontypes from '../actiontypes';

let initState = {
  orders: [],
  order: null
}

const ordersReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().orders.set:
      state.orders = action.payload
      return state

    case actiontypes().orders.setOne:
      state.order = action.payload
      return state

    default:
      return state
  }
}

export default ordersReducer;