import React from 'react';

export default function FunctionAsChild({ children }) {
  return <div>{children('Amir')}</div>;
}
