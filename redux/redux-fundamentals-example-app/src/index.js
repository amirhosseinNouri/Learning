import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

import './api/server'

console.log(store)

console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
