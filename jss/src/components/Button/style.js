import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles(
  {
    myButton: {
      padding: (props) => props.spacing,
    },

    myLabel: (props) => ({
      display: 'block',
      color: props.labelColor,
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle,
    }),
  },
  { name: 'button' },
);

export default useStyle;
