import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layouts/AdminLayout';
import RecordDisplay from '../../components/views/admin/RecordDisplay';
import { getAllRecord } from '../../api/stockRecordApi';

const RecordStockPage = () => {
  const [dataRecord, setDataRecord] = useState([]);

  const fetchRecord = async () => {
    try {
      const { message, data } = await getAllRecord();
      if (!data) {
        throw new Error(message);
      }

      setDataRecord(data);
    } catch (error) {
      console.log('failed fetch stok : ', error.message);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  console.log(dataRecord);
  return (
    <AdminLayout>
      <RecordDisplay dataRecord={dataRecord} />
    </AdminLayout>
  );
};

export default RecordStockPage;
