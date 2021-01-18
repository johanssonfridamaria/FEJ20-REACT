import actiontypes from '../actiontypes';

let initState = {
  posts: null,
  post: null,
  loading: true
}

const postsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().posts.loading:
      return {
        ...state,
        loading: action.payload
      }

    case actiontypes().posts.setPosts:
      return {
        ...state, 
        posts: action.payload
      }

    case actiontypes().posts.setPost:
      return {
        ...state,
        post: action.payload
      }

    case actiontypes().posts.clearPost:
      return {
        ...state,
        post: action.payload
      }

    default:
      return state;
  }
}

export default postsReducer;