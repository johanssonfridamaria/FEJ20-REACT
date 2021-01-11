import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Post = ({post, deletePost}) => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark

  return (
    <div style={{background: theme.ui, color: theme.text }} onClick={() => deletePost(post.id)} className="post">
      <h2>{ post.title }</h2>
      <p>{ post.body }</p>
    </div>
  )
}

export default Post
