import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchDashboardData } from '../features/dashboard/slices/dashboardSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Enterprise Dashboard</h1>
      <p>Users: {data?.users}</p>
      <p>Revenue: ₹{data?.revenue}</p>
    </div>
  );
}
