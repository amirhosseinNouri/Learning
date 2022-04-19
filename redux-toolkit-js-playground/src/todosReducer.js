import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('ADD_TODO', (state, action) => {
      state.push(action.payload);
    })
    .addCase('TOGGLE_TODO', (state, action) => {
      const todo = state[action.payload.index];
      todo.completed = !todo.completed;
    })
    .addCase('REMOTE_TODO', (state, action) => {
      return state.filter((todo, i) => i !== action.payload.index);
    });
});

export default todosReducer;
