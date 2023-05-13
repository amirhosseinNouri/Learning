import useSWR from 'swr';
import type { DashboardData } from '@/types';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = (await response.json()) as DashboardData;
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) {
    return 'An error has occurred';
  }

  if (!data) {
    return 'Loading';
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Posts {data?.posts}</h4>
      <h4>Likes {data?.likes}</h4>
      <h4>Followers {data?.followers}</h4>
      <h4>Following {data?.following}</h4>
    </div>
  );
};

export default DashboardSWR;
