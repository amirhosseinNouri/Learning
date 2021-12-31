import { createSelector } from 'reselect'

const initialState = []

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    default:
      return state
  }
}

export const todosLoaded = (todos) => {
  return {
    type: 'todos/todosLoaded',
    payload: todos,
  }
}

export const todoAdded = (todo) => {
  return {
    type: 'todos/todoAdded',
    payload: todo,
  }
}

export const todoIdsSelector = createSelector(
  (state) => state.todos,
  (todos) => todos.map((todo) => todo.id)
)

export const filteredTodosSelector = createSelector(
  (state) => state.todos,
  (state) => state.filters.status,
  (todos, status) => {
    if (status === 'All') {
      return todos
    }

    return todos.filter((todo) => todo.status === 'Completed')
  }
)
