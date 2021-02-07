import axios from "../api/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const response = await axios.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
