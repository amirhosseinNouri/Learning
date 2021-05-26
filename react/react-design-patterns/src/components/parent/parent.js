import React, { useRef, useEffect } from 'react';
import Child from '../child';

export default function Parent() {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.someFunctionInChild();
      console.log('Runnig in parent');
    }
  }, []);

  return (
    <div>
      <h2> parent</h2>
      <Child
        title='Working with forwardRef and useImperativeHandle'
        ref={parentRef}
      />
    </div>
  );
}
