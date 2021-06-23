import { useState } from 'react';
import './App.css';
import { animated, useSpring, config } from 'react-spring';

function App() {
  const [flip, setFlip] = useState(false);
  const { number } = useSpring({
    number: 1,
    from: { number: 0 },
    config: config.molasses,
    reset: true,
    reverse: flip,
    onRest: () => setFlip(!flip),
    delay: 200,
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>
      </header>
    </div>
  );
}

export default App;
