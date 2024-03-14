import React, { ReactNode } from 'react';

type FeedLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

export default function FeedLayout({ children, modal }: FeedLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
