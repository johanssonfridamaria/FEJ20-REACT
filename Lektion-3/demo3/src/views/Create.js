import React from 'react'
import { useHistory } from 'react-router-dom';

const Create = ({addTodo}) => {

  const history = useHistory();
  const [title, setTitle] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit} className="create">
      <input type="text" placeholder="Add text..." value={title} onChange={(e) => setTitle(e.target.value) } />
      <button>ADD</button>
    </form>
  )
}

export default Create
