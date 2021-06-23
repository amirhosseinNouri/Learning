import { useState } from 'react';
import './App.css';
import { animated, useSpring, config } from 'react-spring';

function App() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    reset: true,
    reverse: flip,
    onRest: () => setFlip((current) => !current),
    delay: 500,
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <animated.div style={props}>Hello</animated.div>
      </header>
    </div>
  );
}

export default App;
