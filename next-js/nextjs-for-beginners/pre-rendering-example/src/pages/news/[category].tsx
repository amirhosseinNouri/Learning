import type { GetServerSideProps } from 'next';
import type { NewsCategory, News } from '@/types';

type ArticleListByCategoryParams = {
  category: NewsCategory;
};

type ArticleListByCategoryProps = {
  articles: News[];
  category?: NewsCategory;
};

const ArticleListByCategory = ({
  articles,
  category,
}: ArticleListByCategoryProps) => {
  return (
    <>
      <h1>News for category {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ArticleListByCategoryProps,
  ArticleListByCategoryParams
> = async (context) => {
  const { params } = context;
  const category = params?.category;
  const response = await fetch(
    `http://localhost:4000/news?category=${params?.category}`,
  );

  const data = (await response.json()) as News[];

  return {
    props: {
      articles: data,
      category: category,
    },
  };
};

export default ArticleListByCategory;
