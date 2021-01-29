import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {logged && <h3>Valuable information I should't see</h3>}
    </div>
  );
}

export default App;
