import React, { forwardRef, useImperativeHandle } from 'react';

function Child({ title }, ref) {
  const someFunctionInChild = () => console.log('Some function in child');
  useImperativeHandle(ref, () => ({ someFunctionInChild }));
  return <div>{title}</div>;
}

export default forwardRef(Child);
