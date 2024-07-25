import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext.jsx';
import './header.css';
import logo from '../../assets/logo/logo.png';

function Header() {
  const { user, logout, loginType } = useAuth();

  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/post">submit project</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="getstarted">
        {user ? (
          <div>
            <span>Welcome {loginType ==='admin'? 'Admin' : 'to SFT'}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/admin">Get Started</Link>
        )}
      </div>
    </header>
  );
}

export default Header;