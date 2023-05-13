import { useState, useEffect } from 'react';
import type { DashboardData } from '@/types';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData>();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = (await response.json()) as DashboardData;
      setDashboardData(data);
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Posts {dashboardData?.posts}</h4>
      <h4>Likes {dashboardData?.likes}</h4>
      <h4>Followers {dashboardData?.followers}</h4>
      <h4>Following {dashboardData?.following}</h4>
    </div>
  );
};

export default Dashboard;
