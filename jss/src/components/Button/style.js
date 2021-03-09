import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  myButton: {
    padding: (props) => props.spacing,
  },

  myLabel: (props) => ({
    display: 'block',
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
  }),

  //   myLabel: {
  //     display: 'block',
  //     color: (props) => props.labelColor,
  //     fontWeight: (props) => props.fontWeight,
  //     fontStyle: (props) => props.fontStyle,
  //   },
});

export default useStyle;
