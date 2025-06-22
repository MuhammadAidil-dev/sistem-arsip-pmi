import { useRef } from 'react';
import { formatedDate } from '../../../utils/utils';
import ExportToSheet from '../../../lib/gapi-script/ExportToSheet';
import TabelStok from '../../fragments/tabel/TabelStok';
import Button from '../../modules/button/Button';

const StokDisplay = ({ dataStok }) => {
  const date = new Date().toISOString();
  const tableRef = useRef(null);

  const filteredData = dataStok?.map((data) => ({
    id: data.id,
    blood_type: data.blood_type,
    rhesus: data.rhesus,
    blood_component_type: data.blood_component_type,
    quantity: data.quantity,
  }));

  const handlePrint = () => {
    // Tambahkan class khusus untuk print
    document.body.classList.add('printing');

    // Trigger print
    window.print();

    // Hapus class setelah print dialog ditutup
    setTimeout(() => {
      document.body.classList.remove('printing');
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      <div ref={tableRef} className="flex flex-col gap-2" data-print-target>
        <h1 className="text-xl font-semibold text-dark">
          STOK DARAH HARIAN
          <br />
          PMI KABUPATEN INDRAGIRI HILIR (RIAU)
        </h1>
        <p className="text-sm">
          Hari, Tanggal: <strong>{formatedDate(date)}</strong>
        </p>
        <div className="mt-4">
          <TabelStok data={dataStok} />
          <p className="text-xs text-dark mt-4">
            * Stok darah dapat berubah sewaktu-waktu
          </p>
        </div>
      </div>

      {/* Tombol Export */}
      <div className="flex gap-2 mt-4">
        <div className="w-32">
          <Button
            text="Print"
            type="button"
            color="bg-blue-500"
            event={handlePrint}
          />
        </div>
        <ExportToSheet data={filteredData} />
      </div>

      {/* CSS untuk print */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0.5in;
          }

          /* Sembunyikan semua element saat print */
          body.printing * {
            visibility: hidden;
          }

          /* Tampilkan hanya element yang akan dicetak */
          body.printing [data-print-target],
          body.printing [data-print-target] * {
            visibility: visible;
          }

          /* Posisikan element yang dicetak */
          body.printing [data-print-target] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }

          /* Hilangkan tombol saat print */
          .print-hide {
            display: none !important;
          }

          /* Pastikan warna tercetak */
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default StokDisplay;
