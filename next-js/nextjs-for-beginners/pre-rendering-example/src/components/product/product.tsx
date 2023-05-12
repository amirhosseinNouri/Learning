import type { ProductProps } from './product.types';

const Product = ({ product }: ProductProps) => {
  return <h4>{product.title}</h4>;
};

export default Product;
