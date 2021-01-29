import "./App.css";
import { useSelector , useDispatch } from "react-redux";
import {increment} from './actions'

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      {logged && <h3>Valuable information I should't see</h3>}
    </div>
  );
}

export default App;
