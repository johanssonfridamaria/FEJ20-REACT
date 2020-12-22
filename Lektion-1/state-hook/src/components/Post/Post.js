import React, {useState} from 'react'
import './post.css'

export const Post = ({title, body, login}) => {

  const [isDark, setIsDark] = useState(false)

  const setTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="mb-2">
      <div className={`card ${isDark ? "dark" : ""}`}>
        <h2>{ title }</h2>
        <p className="mb-2">{ body }</p>

        <button onClick={setTheme}>{isDark ? 'Change to light' : 'Change to dark'}</button>
        <button onClick={login}>login</button>
      </div>
    </div>
  )
}
