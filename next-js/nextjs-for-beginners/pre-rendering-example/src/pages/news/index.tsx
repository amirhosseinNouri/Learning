import type { GetServerSideProps } from 'next';
import type { News } from '@/types';

type NewsListProps = {
  articles: News[];
};

const NewsList = ({ articles }: NewsListProps) => {
  return (
    <div>
      <h1>News List</h1>
      {articles.map((article) => (
        <div
          key={article.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '8px',
            textAlign: 'center',
            padding: '8px 2px',
          }}
        >
          <h2>
            {article.title} {article.category}
          </h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  NewsListProps
> = async () => {
  const response = await fetch('http://localhost:4000/news');
  const data = (await response.json()) as News[];

  return {
    props: {
      articles: data,
    },
  };
};

export default NewsList;
