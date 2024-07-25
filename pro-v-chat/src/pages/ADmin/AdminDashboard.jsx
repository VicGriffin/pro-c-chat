import React, { useEffect, useState } from 'react';
import './adminDashboard.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [data, setData] = useState({
    usersCount: 0,
    ideasCount: 0,
    getintouchCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, ideasRes, getintouchRes] = await Promise.all([
          fetch(`http://localhost:3001/users`),
          fetch(`http://localhost:3001/ideas`),
          fetch(`http://localhost:3001/contact/getintouch`),
        ]);

        const usersData = await usersRes.json();
        const ideasData = await ideasRes.json();
        const getintouchData = await getintouchRes.json();

        setData({
          usersCount: usersData.count,
          ideasCount: ideasData.count,
          getintouchCount: getintouchData.count,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='admin-dashboard'>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Users</h2>
          <Link to=""><button>users</button></Link>
        </div>
        <div className="dashboard-card">
          <h2>Ideas</h2>
          <Link to="/ideas">
          <button>ideas</button></Link>
        </div>
        <div className="dashboard-card">
          <h2>Reach Out from Users</h2>
          <p>{data.getintouchCount}</p>
          <Link to="">
          <button>getintouch</button></Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
