import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const defaultState = {
  count: 0,
  name: "amir",
};
const middlewares = [thunk];

const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(...middlewares)
);

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>;
    </Provider>
  );
}

export default App;
