import React from 'react';
import Link from 'next/link';

type ProductsProps = {
  params: {
    productId: string;
  };
};

const Products = ({ params }: ProductsProps) => {
  return (
    <div>
      <Link href="products/1">
        <h1>Product 1</h1>
      </Link>
      <Link href="products/2">
        <h1>Product 2</h1>
      </Link>
      <Link href="products/3" replace>
        <h1>Product 3</h1>
      </Link>
    </div>
  );
};

export default Products;
