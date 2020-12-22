import React, { useState } from 'react'
import './App.css';
import { Post } from './components/Post/Post';

function App() {

  // let counter = 0
  const[counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [posts] = useState([
    {
      id: '1',
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eum?'
    },
    {
      id: '2',
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eum?'
    },
    {
      id: '3',
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eum?'
    },
  ]);

  const increment = () => {
    // counter ++;
    // setCounter(counter + 1);
    setCounter(prev => prev + 1);
    console.log(counter);
  }

  const login = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>

      {/* <h1 className="text-center">Posts</h1> */}
      {isLoggedIn ? <h1 className="text-center mb-2">Posts</h1> : <h1 className="text-center mb-2">Please Login!!</h1>}

      <h2>Counter: { counter }</h2>
      <button className="mb-2" onClick={increment}>increment</button>

      <div className="container">
        {/* <Post title='Post1' body="det här är en poist" />
        <Post title='Post2' body="det här är en poist" />
        <Post title='Post3' body="det här är en poist" /> */}

        {/* {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))} */}

        {/* {posts.map(post => {
          if(isLoggedIn) {
            return <Post key={post.id} title={post.title} body={post.body} />
          } else {
            return ''
          }
        })} */}

        {posts.map(post => (
          isLoggedIn ? <Post key={post.id} title={post.title} body={post.body} login={login} /> : ''
        ))}

      </div>

      <br/>
      <button onClick={login} >Login</button>

    </div>
  );
}

export default App;
