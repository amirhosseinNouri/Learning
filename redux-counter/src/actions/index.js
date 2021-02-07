import axios from "../api/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const uniqeId = new Set(getState().posts.map((item) => item.userId));
  uniqeId.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await axios.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await axios.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
