import React from 'react';
import PropTypes from 'prop-types';

export default function Buttons({ onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
}

Buttons.propTypes = {
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};
