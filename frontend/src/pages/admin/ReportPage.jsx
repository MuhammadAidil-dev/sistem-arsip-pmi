import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layouts/AdminLayout';
import StokDisplay from '../../components/views/admin/StokDisplay';
import { getAllData } from '../../api/bloodStockApi';

const ReportPage = () => {
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
      <StokDisplay dataStok={dataStok} />
    </AdminLayout>
  );
};

export default ReportPage;
