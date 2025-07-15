import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/hook';

export default function PublicRoute({ children }) {
  const { authUser, loading } = useAuth();

  if (loading) return null; // atau bisa tampilkan <LoadingSpinner />

  // Jika sudah login, redirect ke dashboard
  if (authUser) return <Navigate to="/admin/dashboard" replace />;

  return children;
}
