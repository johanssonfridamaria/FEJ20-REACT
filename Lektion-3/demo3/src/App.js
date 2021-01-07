import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todos from './views/Todos';
import Create from './views/Create';

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: '12jf',
      title: 'todo item 1'
    },
    {
      id: '12jasfdf',
      title: 'todo item 2'
    },
    {
      id: '12vdfabjf',
      title: 'todo item 3'
    }
  ])

  const addTodo = (title) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Date.now().toString(), title }]
    })
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Todos todos={todos} deleteTodo={deleteTodo} />} />
          <Route exact path="/create" render={() => <Create addTodo={addTodo} />} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
