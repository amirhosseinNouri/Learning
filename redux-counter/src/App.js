import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counter);

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>;
    </Provider>
  );
}

export default App;
