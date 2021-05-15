import './App.css';
import FunctionAsChild from './components/function-as-child';

function App() {
  return (
    <div>
      <FunctionAsChild children={(name) => <div>Hello {name}</div>} />
    </div>
  );
}

export default App;
