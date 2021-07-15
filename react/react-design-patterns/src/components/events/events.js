import React from 'react';

export default function Events() {
  const handleClick = (syntheticEvent) => {
    console.log(syntheticEvent instanceof MouseEvent);
    console.log(syntheticEvent.nativeEvent instanceof MouseEvent);
  };

  const handleDoubleClick = () => {
      
  }

  return (
    <div>
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>Click Me!</button>
    </div>
  );
}
