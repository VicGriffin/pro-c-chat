// AdminSignin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useAuth } from '../../AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './adminSignin.css';

function AdminSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const notifySuccess = () => {
    toast.success('🦄 Admin login successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = (message) => {
    toast.error(`🦄 ${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      setLoading(false);
      if (response.ok) {
        const adminData = await response.json();
        login(adminData, 'admin');
        notifySuccess();
        navigate('/adminDashboard');
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Admin login failed';
        setError(errorMessage);
        notifyError(errorMessage);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      notifyError(error.message);
    }
  };

  return (
    <div className='admin-signin'>
      <ToastContainer />
      <h1>Admin Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Signing in...' : 'Signin'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default AdminSignin;
