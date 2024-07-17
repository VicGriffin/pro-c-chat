import React from 'react'
import './header.css'
import logo from '../../assets/logo/logo.png'
function Header() {
  return (
    <>
    <header>
        <div className="header-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="header-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">sponsors</a></li>
                <li><a href="#">opportunities</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
            </ul>

        </div>
        <div className="getstarted">
            <a href="#">Get Started</a>
        </div>
    </header>
    </>
  )
}

export default Header