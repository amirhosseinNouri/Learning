const increase = { type: "INCREASE" };
const decrease = { type: "DECREASE" };
const reset = { type: "RESET" };
const setLoading = { type: "SET_LOADING" };

const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
};

export { increase, reset, decrease };
