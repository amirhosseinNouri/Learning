import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
