import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>;
    </Provider>
  );
}

export default App;
