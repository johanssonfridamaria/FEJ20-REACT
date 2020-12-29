import React, { useState } from 'react'
import ChangeTodo from './ChangeTodo'
import TodoTitle from './TodoTitle'

const TodoItem = ({todo, removeTodoCallback, changeTodoCallback, toggleCompleteCallback}) => {

  const[change, setChange] = useState(false)

  const toggleChange = () => {
    setChange(!change)
  }


  return (
    <div className="todo-item">
      {change
        ? <ChangeTodo todo={todo} changeTodoCallback={changeTodoCallback} setChange={setChange} />
        : <TodoTitle todo={todo} toggleCompleteCallback={toggleCompleteCallback} />
      }
      <div className="buttons">
        <button className="btn change-btn" onClick={toggleChange}>change</button>
        <button className="btn delete-btn" onClick={() => removeTodoCallback(todo.id)} >delete</button>
      </div>
    </div>
  )
}

export default TodoItem
