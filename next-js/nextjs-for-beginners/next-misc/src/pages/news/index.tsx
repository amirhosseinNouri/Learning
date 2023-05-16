import type { GetStaticProps } from 'next';

type NewsProps = {
  data: string;
};

const News = ({ data }: NewsProps) => {
  return <h1>{data}</h1>;
};

export const getStaticProps: GetStaticProps<NewsProps> = async (context) => {
  if (context.preview) {
    return {
      props: {
        data: 'List of draft articles',
      },
    };
  }

  return {
    props: {
      data: 'List of published articles',
    },
  };
};

export default News;
