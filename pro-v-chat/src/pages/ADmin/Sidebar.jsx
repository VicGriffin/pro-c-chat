import React, { useContext } from "react";
import { NavLink ,useNavigate } from 'react-router-dom';
import './sidebar.css';
import { useAuth } from "../../AuthContext";

const Sidebar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  
    navigate('/ChooseUser');  
  };
  return (
    <div className="sidebar">
      <h2>Admins Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/students" className={({ isActive }) => (isActive ? 'active-link' : '')}>Students</NavLink>
          </li>
          <li>
            <NavLink to="/admin/teachers" className={({ isActive }) => (isActive ? 'active-link' : '')}>Teachers</NavLink>
          </li>
          <li>
            <NavLink to="/admin/announcements" className={({ isActive }) => (isActive ? 'active-link' : '')}>Announcements</NavLink>
          </li>
          <li>
            <NavLink to="/admin/assignment" className={({ isActive }) => (isActive ? 'active-link' : '')}>Assignments</NavLink>
          </li>
          <li>
            <NavLink to="/admin/classes" className={({ isActive }) => (isActive ? 'active-link' : '')}>Classes</NavLink>
          </li>
          <li>
            <NavLink to="/AdminRegister" className={({ isActive }) => (isActive ? 'active-link' : '')}>Admin Register</NavLink>
          </li>
          
          <button className="btnn" onClick={handleLogout}>Log Out</button>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;