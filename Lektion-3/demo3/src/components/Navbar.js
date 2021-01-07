import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>LOGO</h1>
        <ul>
          <li><NavLink exact activeClassName="is-active" to="/">Todos</NavLink></li>
          <li><NavLink exact activeClassName="is-active" to="/create">Add Todo</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
