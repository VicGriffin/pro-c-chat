import React from 'react';
import './admin.css';
import { useNavigate, Link } from 'react-router-dom';

function Admin() {
  // const navigate = useNavigate();

  // function handleLogin(role) {
  //   navigate(`/${role}`);
  // }

  return (
    <>
      <section className='admin'>
        <h2>Login as</h2>
        <Link to="/adminSignin"><button>Admin</button></Link>
        <Link to="/login"><button>User</button></Link>
      </section>
    </>
  );
}

export default Admin;
