import { useRef } from 'react';
import { formatedDate } from '../../../utils/utils';

const StokDisplay = () => {
  const date = new Date().toISOString();
  const tableRef = useRef(null);

  // Style inline untuk menghindari oklch
  const tableStyles = {
    container: {
      padding: '24px',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
      borderBottom: '1px solid #cbd5e1',
      paddingBottom: '8px',
    },
    dateText: {
      fontSize: '14px',
      marginBottom: '16px',
    },
    table: {
      width: '100%',
      fontSize: '14px',
      border: '1px solid #6b7280',
      borderCollapse: 'collapse',
    },
    thTd: {
      border: '1px solid #6b7280',
      padding: '8px',
      textAlign: 'center',
    },
    headerRow: {
      backgroundColor: '#f3f4f6',
    },
    subtotalRow: {
      backgroundColor: '#f9fafb',
      fontWeight: '600',
    },
    note: {
      fontSize: '12px',
      marginTop: '8px',
      fontStyle: 'italic',
    },
  };

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div ref={tableRef} style={tableStyles.container} data-print-target>
        <h1 style={tableStyles.title}>
          STOK DARAH HARIAN
          <br />
          PMI KABUPATEN INDRAGIRI HILIR (RIAU)
        </h1>

        <p style={tableStyles.dateText}>
          Hari, Tanggal: <strong>{formatedDate(date)}</strong>
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyles.table}>
            <thead>
              <tr style={tableStyles.headerRow}>
                <th rowSpan="2" style={tableStyles.thTd}>
                  No
                </th>
                <th rowSpan="2" style={tableStyles.thTd}>
                  Jenis Komponen Darah
                </th>
                <th colSpan="8" style={tableStyles.thTd}>
                  Golongan Darah
                </th>
                <th rowSpan="2" style={tableStyles.thTd}>
                  Total
                </th>
              </tr>
              <tr style={tableStyles.headerRow}>
                <th style={tableStyles.thTd}>A+</th>
                <th style={tableStyles.thTd}>A-</th>
                <th style={tableStyles.thTd}>B+</th>
                <th style={tableStyles.thTd}>B-</th>
                <th style={tableStyles.thTd}>O+</th>
                <th style={tableStyles.thTd}>O-</th>
                <th style={tableStyles.thTd}>AB+</th>
                <th style={tableStyles.thTd}>AB-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableStyles.thTd}>1</td>
                <td style={tableStyles.thTd}>Whole Blood (WB)</td>
                <td style={tableStyles.thTd}>10</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>13</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>12</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>4</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>39</td>
              </tr>
              <tr>
                <td style={tableStyles.thTd}>2</td>
                <td style={tableStyles.thTd}>Packed Red Cell (PRC)</td>
                <td style={tableStyles.thTd}>30</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>16</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>17</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>17</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>80</td>
              </tr>
              <tr>
                <td style={tableStyles.thTd}>3</td>
                <td style={tableStyles.thTd}>Thrombocyte Concentrates (TC)</td>
                <td style={tableStyles.thTd}>30</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>16</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>17</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>17</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>80</td>
              </tr>
              <tr style={tableStyles.subtotalRow}>
                <td colSpan="2" style={tableStyles.thTd}>
                  Subtotal
                </td>
                <td style={tableStyles.thTd}>70</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>45</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>46</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>38</td>
                <td style={tableStyles.thTd}>0</td>
                <td style={tableStyles.thTd}>199</td>
              </tr>
            </tbody>
          </table>
          <p style={tableStyles.note}>
            * Stok darah dapat berubah sewaktu-waktu
          </p>
        </div>
      </div>

      {/* Tombol Export */}
      <div
        style={{ padding: '0 24px 24px', display: 'flex', gap: '12px' }}
        className="print-hide"
      >
        <button
          onClick={handlePrint}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '16px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
        >
          🖨️ Print
        </button>
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
