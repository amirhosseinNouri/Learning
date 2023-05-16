import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { NextPage } from 'next';
import type { ReactNode, ReactElement } from 'react';
import Head from 'next/head';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>App Title</title>
        <meta name="description" content="this is the _app description" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
