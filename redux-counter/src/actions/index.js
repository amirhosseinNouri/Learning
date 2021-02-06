import jsonPlaceHolder from "../api/jsonPlaceHolder";
export const fetchPosts =  () => {
    return async dispatch => {

        const response = await jsonPlaceHolder.get("/posts");
        return { type: "FETCH_POSTS", payload: response.data };
    }

};
