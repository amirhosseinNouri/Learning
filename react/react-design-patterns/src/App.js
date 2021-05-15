import './App.css';
import Foo from './components/foo';
import Hello from './components/hello';

function App() {
  return (
    <div>
      <Foo render={Hello} />
    </div>
  );
}

export default App;
