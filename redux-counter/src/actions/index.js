import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
