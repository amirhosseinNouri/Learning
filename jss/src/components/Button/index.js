import React from 'react';
import cx from '../../utils/cx';
import useStyle from './style';

export default function Button(props) {
  const classes = useStyle(props);
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>Click me</span>
    </button>
  );
}

Button.defaultProps = {
  spacing: 20,
  fontWeight: 'bold',
  labelColor: 'red',
};
