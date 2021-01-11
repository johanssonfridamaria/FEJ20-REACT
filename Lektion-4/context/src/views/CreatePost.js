import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PostsContext } from '../contexts/PostsContext';
import { ThemeContext } from '../contexts/ThemeContext';

const CreatePost = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const {addPost} = useContext(PostsContext);

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSub = e => {
    e.preventDefault();
    addPost(title, body);
    setTitle('');
    setBody('');
    history.push('/');
  }

  return (
    <form className="create-post" style={{color: theme.text}} onSubmit={onSub}>
      <div className="input-group">
        <label htmlFor="title" className="input-label">Title:</label>
        <input className="form-control" style={{background: theme.bg, color: theme.text}} value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title"/>
      </div>
      <div className="input-group">
        <label htmlFor="body" className="input-label">Body:</label>
        <input className="form-control" style={{background: theme.bg, color: theme.text}} value={body} onChange={e => setBody(e.target.value)} type="text" id="body"/>
      </div>
      <button className="btn btn-form">Create Post</button>
      
    </form>
  )
}

export default CreatePost
