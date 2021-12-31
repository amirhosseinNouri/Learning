import React from 'react'

export default function TodoListItem({ todo }) {
  return (
    <li>
      <h3>{todo.text}</h3>
      <h5>completed: {todo.completed}</h5>
    </li>
  )
}
