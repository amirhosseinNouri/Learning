import type { ProductProps } from './product.types';

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <h4>
        {product.title}: ${product.price}
      </h4>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
