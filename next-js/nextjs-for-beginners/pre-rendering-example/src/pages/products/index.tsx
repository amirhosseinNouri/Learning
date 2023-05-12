import type { GetStaticProps } from 'next';
import type { Product as ProductType } from '@/types';
import type { ProductsProps } from './products.types';
import Product from '@/components/product';

const ProductList = ({ products }: ProductsProps) => {
  return (
    <>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const response = await fetch('http://localhost:4000/products');
  const data = (await response.json()) as ProductType[];

  return {
    props: {
      products: data,
    },
  };
};

export default ProductList;
