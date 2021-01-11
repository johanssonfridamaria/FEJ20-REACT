import React, { createContext, useState, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {postsReducer} from '../reducers/postsReducer';

export const PostsContext = createContext();

const PostsContextProvider = (props) => {

  const [posts, dispatch] = useReducer(postsReducer, [
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
    }
  ])



  // const [posts, setPosts] = useState([
    // {
    //   id: '1234',
    //   title: 'My first post',
    //   body: 'This is my first post evvvah'
    // },
    // {
    //   id: '123sadf4',
    //   title: 'My second post',
    //   body: 'This is my first post'
    // },
    // {
    //   id: '12whrtyjeytj34',
    //   title: 'My third post',
    //   body: 'This is my first post'
    // },
  // ]);

  // const addPost = (title, body) => {
  //   let post = {
  //     id: uuidv4(),
  //     title,
  //     body
  //   }
  //   setPosts(prevPosts => {
  //     return [post, ...prevPosts]
  //   })
  // }

  // const deletePost = (id) => {
  //   setPosts(posts.filter(post => post.id !== id))
  // }


  return (
    // <PostsContext.Provider value={{posts, addPost, deletePost}}>
    <PostsContext.Provider value={{posts, dispatch}}>
      {props.children}
    </PostsContext.Provider>
  )

}

export default PostsContextProvider;