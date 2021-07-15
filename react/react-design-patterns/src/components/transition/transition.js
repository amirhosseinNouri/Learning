import React from 'react';
import { Motion, spring } from 'react-motion';

export default function Transition() {
  return (
    <Motion
      defaultStyle={{ opacity: 0.1, letterSpacing: 0 }}
      style={{ opacity: spring(1), letterSpacing: spring(5) }}
    >
      {(interpolatingStyle) => (
        <h1 style={interpolatingStyle}>Hello Transition</h1>
      )}
    </Motion>
  );
}
