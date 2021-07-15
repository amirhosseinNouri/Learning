import React, { useRef } from 'react';
import Input from '../input';

export default function Reset() {
  const inputRef = useRef(null);
  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.reset();
    }
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleButtonClick}>Reset the input</button>
    </div>
  );
}
