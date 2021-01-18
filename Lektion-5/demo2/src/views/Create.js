import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/postsActions';

const Create = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const title = useRef();
  const body = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost(title.current.value, body.current.value));
    title.current.value = '';
    body.current.value = '';
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create</h1>
      <div>
        <label htmlFor="title">Title: </label> <br/>
        <input type="text" id="title" ref={title} />
      </div>
      <div>
        <label htmlFor="body">Body: </label> <br/>
        <textarea id="body" cols="30" rows="10" ref={body}></textarea>
      </div>
      <button>ADD POST</button>
    </form>
  )
}

export default Create