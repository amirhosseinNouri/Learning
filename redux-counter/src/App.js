import './App.css';
import Counter from './components/Counter'
import {createStore} from 'redux'

const reducer = () =>{
  console.log("reducer");
}
const store = createStore(reducer)

function App() {
  return (
    <Counter></Counter>
  );
}

export default App;
