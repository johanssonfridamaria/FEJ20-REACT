import React from 'react'

export default function Person({ name, age }) {

  return (
    <div className="border">
      <h1>Name: { name }</h1>
      <p>age: { age }</p>
    </div>
  )
}
