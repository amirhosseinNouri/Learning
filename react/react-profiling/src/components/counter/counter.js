import { useState } from 'react';
import CounterMinus from '../counter-minus';
import CounterPlus from '../counter-plus';
import CounterText from '../counter-text';

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleMinusClick = () => setValue((current) => current - 1);

  const handlePlusClick = () => setValue((current) => current + 1);

  return (
    <div
      style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}
    >
      <CounterMinus onMinusClick={handleMinusClick} />
      <CounterText value={value} />
      <CounterPlus onPlusClick={handlePlusClick} />
    </div>
  );
};

export default Counter;
