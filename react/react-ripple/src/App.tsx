import './App.css';
import Button from './components/button';
// import BoxRipple from './components/box-ripple';
import BoxTransition from './components/box-transition';
import { useState } from 'react';

function App() {
  const [showRipple, setShowRipple] = useState(false);

  const handleClick = () => {
    setShowRipple(true);
  };

  return (
    <div className="App">
      {/* <Button onClick={handleButtonClick}>Click me</Button> */}
      {/* <BoxRipple /> */}
      <BoxTransition showRipple={showRipple} />
      <button onClick={handleClick}>Show Ripple</button>
    </div>
  );
}

export default App;
