import React from 'react';
import PropTypes from 'prop-types';

export default function Circle({ x, y, radius, fill }) {
  return (
    <svg>
      <circle cx={x} cy={y} r={radius} fill={fill} />/
    </svg>
  );
}
Circle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  radius: PropTypes.number,
  fill: PropTypes.string,
};

Circle.defaultProps = {
  x: 10,
  y: 10,
  radius: 10,
  fill: 'red',
};
