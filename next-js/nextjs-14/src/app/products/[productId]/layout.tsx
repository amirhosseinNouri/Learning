import React, { ReactNode } from 'react';

type ProductDetailsLayoutProps = {
  children: ReactNode;
};

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

export default function ProductDetailsLayout({
  children,
}: ProductDetailsLayoutProps) {
  if (getRandomInt(2) === 1) {
    throw new Error('Error in loading product');
  }

  return (
    <div>
      <h2>ProductDetailsLayout</h2>
      {children}
    </div>
  );
}
