import actiontypes from '../actiontypes';

const initState = 0

const counterReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().counter.increment:
      return state + 1

    case actiontypes().counter.decrement:
      return state - 1

    default:
      return state
  }
}

export default counterReducer;