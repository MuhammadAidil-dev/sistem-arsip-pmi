import StokCard from '../../fragments/card/StokCard';

const DashboardDisplay = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold text-dark">Dashboard</h2>
      <div className="grid grid-cols-4 mt-8">
        <StokCard />
      </div>
    </div>
  );
};

export default DashboardDisplay;
