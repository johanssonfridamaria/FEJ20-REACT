import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const PostsContext = createContext();

const PostsContextProvider = (props) => {

  const [posts, setPosts] = useState([
    {
      id: '1234',
      title: 'My first post',
      body: 'This is my first post evvvah'
    },
    {
      id: '123sadf4',
      title: 'My second post',
      body: 'This is my first post'
    },
    {
      id: '12whrtyjeytj34',
      title: 'My third post',
      body: 'This is my first post'
    },
  ]);

  const addPost = (title, body) => {
    let post = {
      id: uuidv4(),
      title,
      body
    }
    setPosts(prevPosts => {
      return [post, ...prevPosts]
    })
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }


  return (
    <PostsContext.Provider value={{posts, addPost, deletePost}}>
      {props.children}
    </PostsContext.Provider>
  )

}

export default PostsContextProvider;