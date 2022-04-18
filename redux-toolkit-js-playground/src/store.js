import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});

export default store;
