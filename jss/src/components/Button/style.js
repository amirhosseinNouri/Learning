import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: '5',
      right: '0',
      bottom: '0',
      left: '1rem',
    },
    padding: {
      top: '1rem',
      right: '2rem',
      bottom: '1rem',
      left: '2rem',
    },

    '& span': {
      fontWeight: 'bold',
    },
  },

  myLabel: {
    fontStyle: 'italic',
  },
});

export default useStyle;
