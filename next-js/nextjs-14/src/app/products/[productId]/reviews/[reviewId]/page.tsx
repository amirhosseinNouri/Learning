import { notFound } from 'next/navigation';

type ReviewDetailsProps = {
  params: { reviewId: string };
};

const ProductDetailsPage = ({ params }: ReviewDetailsProps) => {
  if (1 > 0) {
    notFound();
    return;
  }

  return <h1>Review details page {params.reviewId}</h1>;
};

export default ProductDetailsPage;
