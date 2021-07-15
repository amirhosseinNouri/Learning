import React from 'react';

export default function Events() {
  const handleEvent = (event) => {
    switch (event.type) {
      case 'click':
        console.log('Clicked');
        break;
      case 'dblclick':
        console.log('Double Click');
        break;
      default:
        console.log('Unhandled event', event.type);
    }
  };

  return (
    <div>
      <button onClick={handleEvent} onDoubleClick={handleEvent} onMouseOut={handleEvent}>
        Click Me!
      </button>
    </div>
  );
}
