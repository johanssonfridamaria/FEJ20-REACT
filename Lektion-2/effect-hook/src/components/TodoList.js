import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodoCallback, changeTodoCallback, toggleCompleteCallback}) => {
  return (
    <div className="todo-list">
      <div className="container">
        {
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} removeTodoCallback={removeTodoCallback} changeTodoCallback={changeTodoCallback} toggleCompleteCallback={toggleCompleteCallback} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
