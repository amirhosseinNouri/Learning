import React from 'react';
import PropTypes from 'prop-types';

export default function MyComponent({ className }) {
  return <div className={className}></div>;
}

MyComponent.propTypes = {
  className: PropTypes.string,
};



MyComponent.defaultProps = { className: '' };
