import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Post } from '.';
import { useRouter } from 'next/router';

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`,
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${params?.postId}`);

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    fallback: 'blocking',
  };
};

export default Post;
