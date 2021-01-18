import actiontypes from '../actiontypes';

export const increment = () => {
  return {
    type: actiontypes().counter.increment
  }
}

export const decrement = () => {
  return {
    type: actiontypes().counter.decrement
  }
}