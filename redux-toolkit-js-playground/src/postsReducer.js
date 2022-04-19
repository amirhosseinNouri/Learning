import { CREATE_POST, UPDATE_POST, DELETE_POST } from './constants';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { posts: [] };

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(CREATE_POST, (state, action) => {
      state.posts.push(action.payload);
    })
    .addCase(UPDATE_POST, (state, action) => {
      //  TODO:
    })
    .addCase(DELETE_POST, (state, action) => {
      state.posts.filter((post) => post === action.payload);
    })
    .addDefaultCase(() => {
      console.log('Default case in post reducer');
    });
});

export default postsReducer;
