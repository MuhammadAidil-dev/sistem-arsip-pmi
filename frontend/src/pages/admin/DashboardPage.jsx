import DashboardDisplay from '../../components/views/admin/DashboardDisplay';
import AdminLayout from '../../components/layouts/AdminLayout';
import { useEffect } from 'react';
import { getAllData } from '../../api/bloodStockApi';

const DashboardPage = () => {
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <AdminLayout>
      <h3>DashboardPage</h3>

      <DashboardDisplay />
    </AdminLayout>
  );
};

export default DashboardPage;
