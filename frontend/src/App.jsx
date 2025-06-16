import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from / to /admin/stok */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* admin route */}
        <Route index path="/admin/stok" element={<DashboardPage />} />

        {/* auth route */}
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
