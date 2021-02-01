import actiontypes from "../actiontypes";
import jwt from 'jsonwebtoken';

const initState = {
  userId: null,
  role: null,
  token: null
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().user.set:
      if(action.payload) {
        state.userId = jwt.decode(action.payload).user.id
        state.role = jwt.decode(action.payload).user.role
        state.token = action.payload
      } else {
        state.userId = null
        state.role = null
        state.token = null
      }
      return state

    default:
      return state
  }
}

export default userReducer;