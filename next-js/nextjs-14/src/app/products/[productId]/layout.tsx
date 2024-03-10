import React, { ReactNode } from 'react';

type ProductDetailsLayoutProps = {
  children: ReactNode;
};

export default function ProductDetailsLayout({
  children,
}: ProductDetailsLayoutProps) {
  return (
    <div>
      <h2>ProductDetailsLayout</h2>
      {children}
    </div>
  );
}
