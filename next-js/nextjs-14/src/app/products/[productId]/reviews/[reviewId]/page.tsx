import { notFound } from 'next/navigation';

type ReviewDetailsProps = {
  params: { reviewId: string };
};

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

const ProductDetailsPage = ({ params }: ReviewDetailsProps) => {
  if (getRandomInt(2) === 1) {
    throw new Error('Random error');
  }

  return <h1>Review details page {params.reviewId}</h1>;
};

export default ProductDetailsPage;
