import React, { useState } from 'react';
import Buttons from '../buttons';
import Display from '../display';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncreaseClick = () => setCounter(counter + 1);

  const handleDecreaseClick = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Buttons
        onIncrease={handleIncreaseClick}
        onDecrease={handleDecreaseClick}
      />
    </div>
  );
}
