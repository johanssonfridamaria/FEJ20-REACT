import React, { useContext } from 'react'
import Post from '../components/Post';
import { PostsContext } from '../contexts/PostsContext';

const Posts = () => {

  const { posts, deletePost } = useContext(PostsContext)

  return (
    <div>
      {
        posts.length? posts.map(post => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))
        : <h2>No Posts to show</h2>
      }
    </div>
  )
}

export default Posts
