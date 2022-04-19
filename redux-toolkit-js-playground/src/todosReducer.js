import { createReducer } from '@reduxjs/toolkit';
import { addTodo, remoteTodo, toggleTodo } from './actions';

const initialState = {
  todos: [],
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      console.log('here');
      state.todos.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.todos[action.payload.index];
      todo.completed = !todo.completed;
    })
    .addCase(remoteTodo, (state, action) => {
      return state.todos.filter((todo, i) => i !== action.payload.index);
    })
    .addDefaultCase(() => {
      console.log('default');
    });
});

export default todosReducer;
