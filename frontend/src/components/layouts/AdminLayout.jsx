import { ToastContainer } from 'react-toastify';
import Header from '../fragments/navigation';
import ProtectedRoute from '../../middleware/ProtectedRoute';

const AdminLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Header />
        <main className="md:ml-[300px] p-8 w-full">{children}</main>
        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
