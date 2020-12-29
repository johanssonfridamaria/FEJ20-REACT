import React from 'react'

const TodoTitle = ({todo, toggleCompleteCallback}) => {
  return (
    <h2 onClick={() => toggleCompleteCallback(todo.id)} className={`todo-title ${todo.completed ? "complete" : ""}`}>{todo.title}</h2>
  )
}

export default TodoTitle
