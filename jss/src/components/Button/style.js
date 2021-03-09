import { createUseStyles, useTheme } from 'react-jss';

const useStyle = createUseStyles((theme) => ({
  button: {
    background: theme.colorPrimary,
  },
  label: {
    fontWeight: 'bold',
  },
}));

export default useStyle;
