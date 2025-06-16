import Header from '../fragments/navigation';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <main className="md:ml-[300px] p-8 w-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
