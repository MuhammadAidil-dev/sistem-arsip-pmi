import { useState } from 'react';
import StokCard from '../../fragments/card/StokCard';
import UpdateStokModal from '../../fragments/modal/UpdateStokModal';
import TabelStok from '../../fragments/tabel/TabelStok';
import Button from '../../modules/button/Button';

const DashboardDisplay = ({ dataStok, getDataStock }) => {
  const stok = Object.values(
    dataStok.reduce((acc, item) => {
      const { blood_type, quantity } = item;
      if (!acc[blood_type]) {
        acc[blood_type] = { blood_type, total: 0 };
      }

      acc[blood_type].total += quantity;
      return acc;
    }, {})
  );

  const [isOpen, setIsOpen] = useState(false);

  if (dataStok.length === 0) {
    return (
      <h3 className="text-center text-lg font-semibold">Tidak ada data stok</h3>
    );
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-dark">Total Stok</h2>
        <div className="w-36">
          <Button
            text="Perbarui Data"
            color="bg-primary"
            event={() => setIsOpen(true)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8 gap-4">
        {stok.map((data, index) => (
          <StokCard
            key={index}
            typeBlood={data.blood_type}
            totalStok={data.total}
          />
        ))}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold text-dark text-xl">Detail stok</h3>
        <div className="mt-4">
          <TabelStok data={dataStok} />
        </div>
      </div>

      {/* modal update data */}
      {isOpen && (
        <UpdateStokModal
          closeModal={() => setIsOpen(false)}
          getDataStock={getDataStock}
        />
      )}
    </div>
  );
};

export default DashboardDisplay;
