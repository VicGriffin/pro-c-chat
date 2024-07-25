import React, { useState } from 'react';
import './adminSignin.css';
import { useNavigate } from 'react-router-dom';

function AdminSignin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/adminDashboard');
  };

  return (
    <div className='admin-signin'>
      <h1>Admin Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Signin</button>
      </form>
    </div>
  );
}

export default AdminSignin;
