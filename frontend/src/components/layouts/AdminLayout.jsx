import { ToastContainer } from 'react-toastify';
import Header from '../fragments/navigation';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <main className="md:ml-[300px] p-8 w-full">{children}</main>
      <ToastContainer />
    </div>
  );
};

export default AdminLayout;
