import DashboardDisplay from '../../components/views/admin/DashboardDisplay';
import AdminLayout from '../../components/layouts/AdminLayout';
import { useEffect, useState } from 'react';
import { getAllData } from '../../api/bloodStockApi';

const DashboardPage = () => {
  const [dataStok, setDataStok] = useState([]);

  const fetchStok = async () => {
    try {
      const { message, data } = await getAllData();
      if (!data) {
        throw new Error(message);
      }

      setDataStok(data);
    } catch (error) {
      console.log('failed fetch stok : ', error.message);
    }
  };

  useEffect(() => {
    fetchStok();
  }, []);

  return (
    <AdminLayout>
      <DashboardDisplay dataStok={dataStok} getDataStock={fetchStok} />
    </AdminLayout>
  );
};

export default DashboardPage;
