import rootReducer from './reducer'

class Store {
  state

  listeners = []

  reducer

  constructor(reducer, preloadedState) {
    this.reducer = reducer
    this.state = preloadedState || {}
    this.dispatch({ type: '@@redux/INIT' })
  }

  getState() {
    return this.state
  }

  subscribe(listener) {
    this.listeners.push(listener)

    return function unsubscribe() {
      const index = this.listeners.indexOf(listener)
      this.listeners.splice(index, 1)
    }
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action)
    this.listeners.forEach((listener) => listener())
  }
}

const store = new Store(rootReducer)
export default store
