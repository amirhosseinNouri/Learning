import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';
import postsReducer from './postsSlice';
import todosReducer from './todosReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    todos: todosReducer,
  },
});

export default store;
