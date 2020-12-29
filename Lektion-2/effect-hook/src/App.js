import Header from './components/Header';
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'take out the trash',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'clean the office',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'dinner with wifey',
      completed: false
    },
  ])

  const setTodosCallback = todoTitle => {
    setTodos(prevTodos => {
      return [{id: uuidv4(), title: todoTitle, completed: false}, ...prevTodos]
    })
    // localStorage.setItem('todos', JSON.stringify(todos))
  }

  const removeTodoCallback = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const changeTodoCallback = (id, newTitle) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if(todo.id === id) {
          todo.title = newTitle
          return todo
        }

        return todo
      })
    })
  }

  const toggleCompleteCallback = id => {
    // setTodos(prevTodos => {
    //   return prevTodos.map(todo => {

    //     if(todo.id === id) {
    //       todo.completed = !todo.completed
    //       return todo
    //     }

    //     return todo
    //   })
    // })

    let newTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })

    setTodos(newTodos);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if(storedTodos)
      setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <Header title="Todos" />
      <AddTodoForm setTodosCallback={setTodosCallback} />
      <TodoList todos={todos} removeTodoCallback={removeTodoCallback} changeTodoCallback={changeTodoCallback} toggleCompleteCallback={toggleCompleteCallback} />
    </div>
  );
}

export default App;
