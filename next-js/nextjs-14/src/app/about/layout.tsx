import { Metadata } from 'next';
import React, { ReactNode } from 'react';

type AboutLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: 'Default about title from layout',
    template: 'About | %s',
  },
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <div>{children}</div>;
}
