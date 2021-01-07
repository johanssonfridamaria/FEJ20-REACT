import React from 'react'

const TodoItem = ({todo, deleteTodo}) => {

  return (
    <div onClick={() => deleteTodo(todo.id)} className="todo-item">
      <h2>{todo.title}</h2>
    </div>
  )
}

export default TodoItem
