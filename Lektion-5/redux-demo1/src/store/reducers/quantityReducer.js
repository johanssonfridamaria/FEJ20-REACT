import actiontypes from '../actiontypes';

const initState = 0;

const quantityReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().quantity.increment:
      return state + action.amount

    case actiontypes().quantity.decrement:
      return state - action.amount

    default:
      return state;
  }
}

export default quantityReducer;