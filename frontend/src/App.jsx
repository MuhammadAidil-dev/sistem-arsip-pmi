import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ReportPage from './pages/admin/ReportPage';

function App() {
  return (
    <BrowserRouter>
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

        {/* auth route */}
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
