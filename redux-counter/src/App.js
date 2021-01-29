import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './reducers'



const defaultState = {
  count: 0,
  name: "amir",
};

const store = createStore(reducer , defaultState);



function App() {
  return (
    <Provider store={store}>
      <Counter state={store.getState()}></Counter>;
    </Provider>
  );
}

export default App;
