import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo/logo.png";
import { useAuth } from "../../AuthContext.jsx";
import "./login.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const notifySuccess = () => {
    console.log("Login successful!");
  };

  const notifyError = (message) => {
    console.error(message);
  };

  const handleSubmit = async (values) => {
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      setLoading(false);
      if (response.ok) {
        const userData = await response.json();
        if (login) login(userData);
        notifySuccess();
        navigate('/');
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Login failed';
        setError(errorMessage);
        notifyError(errorMessage);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      notifyError(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form">
        <div className="login-form__header">Login</div>
        <form onSubmit={formik.handleSubmit} className="login-form__body">
          <div className="login-form__body__input-group">
            <label className="login-form__body__input-group__label">
            </label>
            <input
              className="login-form__body__input-group__input"
              type="text"
              placeholder="Enter Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="login-form__body__input-group">
            <label className="login-form__body__input-group__label">
              
            </label>
            <input
              className="login-form__body__input-group__input"
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        <div className="login-form__footer">
          click to <Link to="/signup">signup</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
