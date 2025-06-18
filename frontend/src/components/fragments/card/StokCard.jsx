import Button from '../../modules/button/Button';

const StokCard = () => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-sm p-4 gap-2">
      <h3 className="text-xl font-semibold text-dark text-center">A+</h3>
      <p className="text-lg font-semibold text-dark text-center">
        Whole Blood (WB)
      </p>
      <p className="text-lg font-semibold text-primary text-center">10</p>
      <Button text="Perbarui" type="button" color="bg-blue-500" />
    </div>
  );
};

export default StokCard;
