import React, { useContext } from 'react'
import Post from '../components/Post';
import { PostsContext } from '../contexts/PostsContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Posts = () => {

  const { posts, deletePost } = useContext(PostsContext);
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark

  return (
    <div>
      {
        posts.length? posts.map(post => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))
        : <h2 style={{color: theme.text}}>No Posts to show</h2>
      }
    </div>
  )
}

export default Posts
