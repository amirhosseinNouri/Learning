const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      }

    case 'todos/todoToggled':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed,
          }
        }),
      }

    case 'filters/statusFilterChanged':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      }
    default:
      return state
  }
}
