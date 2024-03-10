import React, { ReactNode } from 'react';

type WithAuthLayoutProps = {
  children: ReactNode;
};

export default function WithAuthLayout({ children }: WithAuthLayoutProps) {
  return (
    <div>
      <h2>WithAuthLayout</h2>
      {children}
    </div>
  );
}
