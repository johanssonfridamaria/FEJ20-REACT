import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">LOGO</NavLink>
        <ul className="nav-links">
          <li><NavLink exact to="/" className="nav-link" activeClassName="active-link">News</NavLink></li>

          <li><NavLink exact to="/create" className="nav-link" activeClassName="active-link">Create</NavLink></li>
          <li><NavLink exact to="/login" className="nav-link" activeClassName="active-link">Login</NavLink></li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
