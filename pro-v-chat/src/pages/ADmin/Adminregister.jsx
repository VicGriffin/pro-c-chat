import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Adminregister.css';
import { useNavigate } from 'react-router-dom';
import { apiBase } from '../../utils/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../pages/Admin/Sidebar';

const AdminRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${apiBase}/admin/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Admin registered successfully!');
        navigate('/Adminsignin');
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (e) {
      setError(e.message);
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().min(6, 'Password should be minimum 6 characters').required('Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    }),
    onSubmit: handleSubmit
  });

  return (
    <div className="admin-register-container">
      <Sidebar />
      <h1>Admin Register</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps('name')}
            className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
          />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
            className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps('password')}
            className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
          />
          {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...formik.getFieldProps('confirmPassword')}
            className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'input-error' : ''}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
        </div>
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? 'Please wait...' : 'Register'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminRegister;