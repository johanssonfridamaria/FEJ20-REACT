import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LOGO</h1>
      <ul className="nav-links">
        <li><NavLink exact activeClassName="is-active" className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="is-active" className="nav-link" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="is-active" className="nav-link" to="/shop">Shop</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
