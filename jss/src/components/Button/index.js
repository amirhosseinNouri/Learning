import React from 'react';
import cx from '../../utils/cx';
import useStyle from './style';

export default function Button() {
  const classes = useStyle();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>Click me</span>
    </button>
  );
}
