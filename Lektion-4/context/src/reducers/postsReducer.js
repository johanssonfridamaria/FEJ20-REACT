import actiontypes from './actiontypes';
import { v4 as uuidv4 } from 'uuid';


export const postsReducer = (state, action) => {
  switch(action.type) {

    case actiontypes().posts.addPost:
      return [{
        id: uuidv4(),
        title: action.post.title,
        body: action.post.body
      },...state]

    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id)

    default:
      return state
  }
}