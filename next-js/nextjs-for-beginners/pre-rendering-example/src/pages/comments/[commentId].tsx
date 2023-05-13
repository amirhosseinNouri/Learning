import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Comment } from '@/types';
import { comments } from '@/data/comments';

type CommentDetailsProps = {
  comment: Comment;
};

type CommentDetailsParams = {
  commentId: string;
};

const CommentDetails = ({ comment }: CommentDetailsProps) => {
  return (
    <>
      <h4>
        {comment.id} - {comment.text}
      </h4>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  CommentDetailsProps,
  CommentDetailsParams
> = (context) => {
  const { commentId } = context.params || {};

  const comment = comments.find((comment) => comment.id === Number(commentId));

  if (!comment) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      comment,
    },
  };
};

export const getStaticPaths: GetStaticPaths<CommentDetailsParams> = () => ({
  paths: [
    { params: { commentId: '1' } },
    { params: { commentId: '2' } },
    { params: { commentId: '3' } },
  ],
  fallback: false,
});

export default CommentDetails;
