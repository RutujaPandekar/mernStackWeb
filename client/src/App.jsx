import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import MultiStepForm from './pages/MultiStepForm';
import ProtectedRoute from './protected/ProtectedRoute';
import Logout from './auth/Logout';

function App() {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token && location.pathname !== '/login' && location.pathname !== '/register') {
    return <Navigate to="/register" />;
  }

  return (
    <>
      {token && <Logout />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MultiStepForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;