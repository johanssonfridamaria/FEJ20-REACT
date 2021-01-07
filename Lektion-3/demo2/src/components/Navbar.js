import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({title}) => {
  return (
    <nav className="navbar">
      <NavLink to="/"><h1>{title}</h1></NavLink>
      <ul>
        <li><NavLink to="/admin">Admin</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
