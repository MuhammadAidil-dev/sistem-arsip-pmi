const StokCard = ({ typeBlood = '', totalStok = 0 }) => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-sm p-4 gap-2">
      <h3 className="text-2xl font-semibold text-dark text-center">
        {typeBlood}
      </h3>
      <p className="text-lg font-semibold text-primary text-center">
        {totalStok}
      </p>
    </div>
  );
};

export default StokCard;
