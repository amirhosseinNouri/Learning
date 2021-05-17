import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ counter }) {
  return <h1>{counter}</h1>;
}
Display.propTypes = { counter: PropTypes.number };
