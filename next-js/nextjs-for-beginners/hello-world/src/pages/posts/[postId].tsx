import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Post } from '.';

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
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

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // API call to get the number of static paths
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = (await response.json()) as Post[];
  const paths = data.map(({ id }) => ({ params: { postId: String(id) } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
