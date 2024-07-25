import React from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  function handleLogin(role) {
    navigate(`/${role}`);
  }

  return (
    <>
      <section className='admin'>
        <h2>Login as</h2>
        <button onClick={() => handleLogin('Adminsignin')}>Admin</button>
        <button onClick={() => handleLogin('usersignin')}>User</button>
      </section>
    </>
  );
}

export default Admin;
