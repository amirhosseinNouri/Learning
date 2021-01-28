import "./App.css";
import Counter from "./components/Counter";
import { createStore } from "redux";

const defaultState = {
  count: 0,
  name: "amir",
};
const reducer = (state, action) => {

  return state
};
const store = createStore(reducer, defaultState);
console.log(store.getState());
function App() {
  return <Counter state={store.getState()}></Counter>;
}

export default App;
