import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = ({ title }) => {

  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" ><h1>{ title }</h1></NavLink>
        <ul className="nav-links">
          <li><NavLink exact activeClassName="active-link" to="/">Posts</NavLink></li>
          <li><NavLink exact activeClassName="active-link" to="/create">New Post</NavLink></li>
          <button onClick={toggleTheme} className="btn btn-sm btn-dark" style={{color: theme.text, background: theme.ui}} >{isLightTheme ? 'Dark' : 'Light'}</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
