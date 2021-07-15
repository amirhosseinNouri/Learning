import './App.css';
import Circle from './components/circle';

function App() {
  return (
    <div>
      <Circle x={20} y={20} radius={20} fill="teal" />
      <Circle />
    </div>
  );
}

export default App;
