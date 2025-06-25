import RecordCard from '../../fragments/card/RecordCard';

const RecordDisplay = ({ dataRecord }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold text-dark">Riwayat data stok</h2>
      {dataRecord.length === 0 ? (
        <p>Tidak ada riwayat stok</p>
      ) : (
        <div className="grid grid-cols-3 mt-8">
          {dataRecord.map((data) => (
            <RecordCard key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordDisplay;
