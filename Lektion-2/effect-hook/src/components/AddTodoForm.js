import React, { useRef } from 'react'

const AddTodoForm = ({ setTodosCallback }) => {

  const todoTitle = useRef()

  const onSub = (e) => {
    e.preventDefault();

    if(todoTitle.current.value === '')
      return

    setTodosCallback(todoTitle.current.value);

    todoTitle.current.value = '';
  }

  return (
    <div className="add-todo">
      <form className="container" onSubmit={onSub} >
        <input type="text" ref={todoTitle} />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default AddTodoForm
