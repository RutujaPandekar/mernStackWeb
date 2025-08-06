import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/register', form);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-4">
      <h2>Register</h2>
      <input
        placeholder="Name"
        name="name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        name="email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
      <br />
      <button onClick={() => navigate('/login')}>Already registered? Login</button>
    </div>
  );
}