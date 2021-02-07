import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
  
  const response = await jsonPlaceHolder.get("/posts");
  console.log('log in actions : ' , response);
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
