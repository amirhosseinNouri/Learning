import { useRouter } from 'next/router';

const Review = () => {
  const router = useRouter();
  const { id, reviewId } = router.query;
  return (
    <>
      <h1>Product id: {id}</h1>
      <h1>Review id: {reviewId}</h1>
    </>
  );
};

export default Review;
