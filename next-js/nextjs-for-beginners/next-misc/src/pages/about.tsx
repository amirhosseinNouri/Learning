import type { ReactElement } from 'react';
import s from '@/styles/about.module.css';
import Footer from '@/components/footer';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="description content" />
      </Head>
      <div className={s.content}>About page</div>
    </>
  );
};

export default About;

About.getLayout = (page: ReactElement) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
