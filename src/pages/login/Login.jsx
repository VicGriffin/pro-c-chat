import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-form">
        <div className="login-form__header">Login</div>
        <div className="login-form__body">
          <div className="login-form__body__input-group">
            <label className="login-form__body__input-group__label">
              Email
            </label>
            <input
              className="login-form__body__input-group__input"
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <div className="login-form__body__input-group">
            <label className="login-form__body__input-group__label">
              Password
            </label>
            <input
              className="login-form__body__input-group__input"
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div className="login-form__footer">
          click to <Link to="/Signup">signup</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
