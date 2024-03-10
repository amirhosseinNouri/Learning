import { Metadata } from 'next';

type ProductDetailsProps = {
  params: { productId: string };
};

export const generateMetadata = ({
  params,
}: ProductDetailsProps): Metadata => ({
  title: params.productId,
});

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <h1>Product details page {params.productId}</h1>;
};

export default ProductDetails;
