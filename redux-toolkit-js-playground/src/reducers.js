const initialState = { name: 'amirhossein', age: 22 };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;
