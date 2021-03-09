import './App.css';
import Button from './components/Button';
import { ThemeProvider } from 'react-jss';

const theme = {
  colorPrimary: 'green',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button></Button>;
    </ThemeProvider>
  );
}

export default App;
