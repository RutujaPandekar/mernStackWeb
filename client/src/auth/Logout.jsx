import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/register');
  };

  return (
    <button onClick={handleLogout} style={{ float: 'right', margin: '10px' }}>
      Logout
    </button>
  );
}