import { useState } from 'react';
import './App.css';
import { animated, useSpring, config, useTransition } from 'react-spring';

function App() {
  const [items, setItems] = useState([]);

  const transition = useTransition(items, {
    from: { opacity: 0, x: -100, y: 800, width: 10, height: 10 },
    enter: (item) => async (next) => {
      await next({ opacity: 1, y: item.y, delay: item.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: { opacity: 0, x: 100, y: 800 },
  });

  const buttonText = () => (items.length ? 'Un Mount' : 'Mount');

  const handleButtonClick = () => {
    setItems((v) =>
      v.length
        ? []
        : [
            { y: -50, delay: 200 },
            { y: 0, delay: 400 },
            { y: 50, delay: 600 },
          ],
    );
  };

  return (
    <div className='app'>
      <button onClick={handleButtonClick}>{buttonText()}</button>
      <div className='container'>
        {transition((style, item) => {
          return item ? (
            <animated.div style={style} className='item'></animated.div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default App;
