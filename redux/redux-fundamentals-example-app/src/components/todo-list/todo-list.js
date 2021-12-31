import React from 'react'
import TodoListItem from '../todo-list-item'
import { useSelector } from 'react-redux'

const todosSelector = (state) => state.todos

export default function TodoList() {
  const todos = useSelector(todosSelector)

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
