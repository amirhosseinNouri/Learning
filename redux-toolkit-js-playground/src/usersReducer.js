// const initialState = { users: [] };

// function usersReducer(state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

// export default usersReducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchById = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: 'Amirhossein', age: 22, userId }), 2_000);
  });
};

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetchById(userId);
    console.log(response);
    return response;
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], isLoading: false },
  reducers: {
    addUser(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});

const { actions, reducer } = usersSlice;

const { addUser } = actions;

export { addUser, fetchUserById };

export default reducer;
