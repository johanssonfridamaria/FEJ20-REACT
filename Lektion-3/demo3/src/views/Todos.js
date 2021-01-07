import React from 'react'
import TodoItem from '../components/TodoItem'


const Todos = ({todos, deleteTodo}) => {

  return (
    <div className="todos">
      {
       todos.length ? todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))
        : <h2 style={{ textAlign: 'center' }}>No todos left</h2>
      }
    </div>
  )
}

export default Todos
