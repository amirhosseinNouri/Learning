import React from 'react';
import PropTypes from 'prop-types';
import { withInnerWidth } from '../../hoc/with-inner-width';

function MyComponent({ innerWidth }) {
  return <div>{innerWidth}</div>;
}

MyComponent.propTypes = {
  innerWidth: PropTypes.number,
};

MyComponent.defaultProps = { innerWidth: 0 };

export default withInnerWidth(MyComponent);
