import React from 'react'

export default function Navbar({title}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mx-auto">{title}</span>      
    </nav>
  )
}
