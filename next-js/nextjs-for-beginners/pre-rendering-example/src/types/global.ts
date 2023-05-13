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

export type DashboardData = {
  posts: number;
  likes: number;
  followers: number;
  following: number;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
};
