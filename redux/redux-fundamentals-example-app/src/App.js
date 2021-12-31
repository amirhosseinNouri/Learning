import React from 'react'
import Header from './components/header'
import TodoList from './components/todo-list'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>

          <div className="rodoapp">
            <Header />
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
