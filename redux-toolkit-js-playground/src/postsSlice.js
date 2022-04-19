import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {
      state.push(action.payload);
    },
    updatePost(state, action) {},
    deletePost(state, action) {
      state.filter((post) => post !== action.payload);
    },
  },
});

const { actions, reducer } = postsSlice;

export const { createPost, deletePost, updatePost } = actions;

export default reducer;
