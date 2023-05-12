export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export type NewsCategory = 'politics' | 'sports';

export type News = {
  id: number;
  title: string;
  description: string;
  category: NewsCategory;
};
