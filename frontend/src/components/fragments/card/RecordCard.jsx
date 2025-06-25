import { formatedDate } from '../../../utils/utils';

const RecordCard = ({ data }) => {
  const sheetURL = `https://docs.google.com/spreadsheets/d/${
    data?.id_record || ''
  }`;

  return (
    <div className="flex flex-col gap-2 bg-white shadow-sm rounded-sm p-4 justify-center items-center">
      <h3 className="font-semibold text-sm text-primary">Arsip data stok</h3>
      <p className="text-dark text-xs">{formatedDate(data?.createdAt)}</p>
      <a
        href={sheetURL}
        className="bg-green-500 text-white text-xs font-semibold py-2 px-4 cursor-pointer"
        target="_blank"
      >
        Lihat data
      </a>
    </div>
  );
};

export default RecordCard;
