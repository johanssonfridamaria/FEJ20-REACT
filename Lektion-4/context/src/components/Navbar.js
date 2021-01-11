import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" ><h1>{ title }</h1></NavLink>
        <ul className="nav-links">
          <li><NavLink exact activeClassName="active-link" to="/">Posts</NavLink></li>
          <li><NavLink exact activeClassName="active-link" to="/create">New Post</NavLink></li>
          <button className="btn btn-sm btn-dark">Dark</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
