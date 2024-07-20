import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo/logo.png";
function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sponsors">sponsors</Link>
            </li>
            <li>
              <Link to="#">opportunities</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="#">contact</Link>
            </li>
          </ul>
        </div>
        <div className="getstarted">
          <Link to="Login">Get Started</Link>
        </div>
      </header>
    </>
  );
}

export default Header;
