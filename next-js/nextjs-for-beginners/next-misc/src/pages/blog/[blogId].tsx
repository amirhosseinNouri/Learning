import type { GetServerSideProps } from 'next';
import Head from 'next/head';

type BlogDescriptionProps = {
  title: string;
  description: string;
};

type BlogDescriptionParams = {
  blogId: string;
};

const BlogDescription = ({ title, description }: BlogDescriptionProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  BlogDescriptionProps,
  BlogDescriptionParams
> = async (context) => {
  const { params } = context;
  const id = params?.blogId || '';
  return {
    props: {
      title: `Article ${id}`,
      description: 'Article description',
    },
  };
};

export default BlogDescription;
