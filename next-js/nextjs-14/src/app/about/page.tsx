import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Absolute about page',
    default: 'Default for children',
    template: '%s | Template',
  },
};

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;
