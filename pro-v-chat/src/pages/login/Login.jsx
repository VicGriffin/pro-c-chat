import logo from "../../assets/logo/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <>
    <section className="login">
    <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="login-form">
        <div className="login-form__header">Login</div>
        <form onSubmit={formik.handleSubmit} className="login-form__body">
          <div className="login-form__body__input-group">
            <label className="login-form__body__input-group__label">
              Email
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
              Password
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="login-form__footer">
          click to <Link to="/Signup">signup</Link>
        </div>
      </div>
      
    </section>
    </>
  );
}

export default Login;
