import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  return <h1>Product {router.query.id} details Page</h1>;
};

export default ProductDetails;
