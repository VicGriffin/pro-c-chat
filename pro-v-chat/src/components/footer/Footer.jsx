import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <p>&copy; 2024 SFT All rights are reserved</p>
        <div className="icons">
          <a className="Twitter ">
            <FaTwitter />{" "}
          </a>
          <a className="instagram">
            <FaInstagram />{" "}
          </a>
          <a className="youtube">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-content">
        <label htmlFor>subsciribe to our newsletter</label>
        <input
          type="text"
          id="email"
          className="name"
          placeholder="enter email"
        ></input>
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;