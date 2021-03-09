import React from 'react';
import cx from '../../utils/cx';
import useStyle from './style';
import { useTheme } from 'react-jss';

export default function Button(props) {
  const theme = useTheme();
  const classes = useStyle({ ...props, theme });
  return (
    <button className={classes.button}>
      <span className={classes.label}>Click me</span>
    </button>
  );
}

Button.defaultProps = {
  spacing: 20,
  fontWeight: 'bold',
  labelColor: 'red',
};
