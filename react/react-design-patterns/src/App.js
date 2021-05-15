import './App.css';
import WindowWidth from './components/window-width';

function App() {
  return (
    <div>
      <WindowWidth>{(width) => <div>width is {width}</div>}</WindowWidth>
    </div>
  );
}

export default App;
