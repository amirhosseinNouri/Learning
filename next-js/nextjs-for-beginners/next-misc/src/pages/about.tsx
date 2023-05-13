import type { ReactElement } from 'react';
import s from '@/styles/about.module.css';
import Footer from '@/components/footer';

const About = () => {
  return <div className={s.content}>About page</div>;
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
