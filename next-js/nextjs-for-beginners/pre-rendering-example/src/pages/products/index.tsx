import type { GetStaticProps } from 'next';
import type { Product as ProductType } from '@/types';
import Link from 'next/link';

export type ProductsProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductsProps) => {
  return (
    <>
      <h2>Product List</h2>
      {products.map(({ id, title, price }) => (
        <Link key={id} href={`/products/${id}`}>
          <h3>
            {title} - ${price}
          </h3>
        </Link>
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
