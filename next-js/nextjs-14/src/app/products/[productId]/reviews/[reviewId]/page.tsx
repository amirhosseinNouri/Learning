type ReviewDetailsProps = {
  params: { reviewId: string };
};

const ProductDetailsPage = ({ params }: ReviewDetailsProps) => {
  return <h1>Review details page {params.reviewId}</h1>;
};

export default ProductDetailsPage;
