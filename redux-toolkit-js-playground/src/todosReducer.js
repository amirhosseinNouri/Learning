import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('ADD_TODO', (state, action) => {
      console.log('here');
      state.todos.push(action.payload);
    })
    .addCase('TOGGLE_TODO', (state, action) => {
      const todo = state.todos[action.payload.index];
      todo.completed = !todo.completed;
    })
    .addCase('REMOTE_TODO', (state, action) => {
      return state.todos.filter((todo, i) => i !== action.payload.index);
    })
    .addDefaultCase(() => {
      console.log('default');
    });
});

export default todosReducer;
