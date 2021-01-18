const actiontypes = () => {
  return {
    auth: {
      login: 'LOGIN',
      logout: 'LOGOUT'
    },
    posts: {
      getPosts: 'GET_POSTS',
      loading: 'LOADING',
      setPosts: 'SET_POSTS',
      setPost: 'SET_POST',
      clearPost: 'CLEAR_POST'
    }
  }
}

export default actiontypes;