import React from 'react'
import TodoListItem from '../todo-list-item'
import { useSelector } from 'react-redux'
import { todoIdsSelector } from '../../features/todos/todosSlice'

export default function TodoList() {
  const todos = useSelector(todoIdsSelector)

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
