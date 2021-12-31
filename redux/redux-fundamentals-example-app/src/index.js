import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'

import './api/server'

console.log(store)

console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
