import React, { useContext } from 'react';
import { PostsContext } from '../contexts/PostsContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Post = ({post}) => {

  const {dispatch} = useContext(PostsContext);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark

  return (
    <div style={{background: theme.ui, color: theme.text }} onClick={() => dispatch({type: 'DELETE_POST', id: post.id})} className="post">
      <h2>{ post.title }</h2>
      <p>{ post.body }</p>
    </div>
  )
}

export default Post
