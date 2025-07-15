import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ReportPage from './pages/admin/ReportPage';
import RecordStockPage from './pages/admin/RecordStockPage';
import PublicRoute from './middleware/PublicRoute';

function App() {
  return (
    <Routes>
      {/* Redirect route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/admin"
        element={<Navigate to="/admin/dashboard" replace />}
      />

      {/* admin route */}
      <Route index path="/admin/dashboard" element={<DashboardPage />} />
      <Route index path="/admin/report" element={<ReportPage />} />
      <Route index path="/admin/stock-record" element={<RecordStockPage />} />

      {/* auth route */}
      <Route
        index
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        index
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
