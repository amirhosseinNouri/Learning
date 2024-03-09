type ProductDetailsProps = {
  params: { productId: string };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <h1>Product details page {params.productId}</h1>;
};

export default ProductDetails;
