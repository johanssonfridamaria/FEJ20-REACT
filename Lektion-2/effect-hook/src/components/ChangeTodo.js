import React, { useRef, useEffect } from 'react'

const ChangeTodo = ({todo, changeTodoCallback, setChange}) => {

  const text = useRef();

  useEffect(() => {
    text.current.value = todo.title
  }, [todo.title])

  const change = (e) => {
    e.preventDefault();
    changeTodoCallback(todo.id ,text.current.value);
    setChange(false);
  }

  return (
    <form className="change-todo" onSubmit={change}>
      <input type="text" ref={text} /> <button>OK</button>
    </form>
  )
}

export default ChangeTodo
