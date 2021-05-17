import React, { useState } from 'react';
import Buttons from '../buttons';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncreaseClick = () => setCounter(counter + 1);

  const handleDecreaseClick = () => setCounter(counter - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <Buttons
        onIncrease={handleIncreaseClick}
        onDecrease={handleDecreaseClick}
      />
    </div>
  );
}
