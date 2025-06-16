import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from / to /admin/stok */}
        <Route path="/" element={<Navigate to="/admin/stok" replace />} />

        {/* admin route */}
        <Route index path="/admin/stok" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
