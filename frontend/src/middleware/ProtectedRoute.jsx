import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/hook';

const ProtectedRoute = ({ children }) => {
  const { authUser, loading } = useAuth();

  if (!authUser) {
    // Redirect ke login
    return <Navigate to="/login" replace />;
  }

  if (loading) return;

  return children;
};

export default ProtectedRoute;
