import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: '#355C7D',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
