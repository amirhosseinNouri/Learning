import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

const defaultState = {
    count : 0,
    name : "amir"
}
const reducer = (state = defaultState, action) =>{
    return state
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter state={store.getState()}></Counter>;
    </Provider>
  );
}

export default App;
