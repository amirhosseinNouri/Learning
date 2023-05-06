import Link from 'next/link';

export type Post = {
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>
              {post.id} - {post.title}
            </h2>
          </Link>

          <hr />
        </div>
      ))}
      {posts.map}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}

export default PostList;
