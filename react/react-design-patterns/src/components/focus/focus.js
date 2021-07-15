import React from 'react';

import { useRef } from 'react';
export default function Focus() {
  const inputRef = useRef(null);
  const handleButtonClick = (e) => {
      e.preventDefault();
    inputRef.current.focus();
  };
  return (
    <form>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick} type="submit">
        Click Me to focus the button
      </button>
    </form>
  );
}
