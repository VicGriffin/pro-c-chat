import './conant.css'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from "../../assets/logo/logo.png";

function Conant() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/users/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully");
      } else {
        setError(data.error || 'Failed to send message');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
    <div className="conant">
      
    <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    <div className="contact-form">
            <span className='circle one'></span>
            <span className='circle two'></span>
            <form onSubmit={formik.handleSubmit}>
              <h3 className="titl">message the inventor</h3>
              <div className="input-container">
                <input type="text" name="name" className='input' onChange={formik.handleChange} value={formik.values.name} />
                <label htmlFor="name">Your Name</label>
                {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
              </div>
              <div className="input-container">
                <input type="email" name="email" className='input' onChange={formik.handleChange} value={formik.values.email} />
                <label htmlFor="email">Your Email</label>
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
              </div>
              <div className="input-container">
                <input type="phone" name="phone" className='input' onChange={formik.handleChange} value={formik.values.phone} />
                <label htmlFor="phone">Your Phone</label>
                {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
              </div>
              <div className="input-container text-area">
                <textarea name="message" className='input' onChange={formik.handleChange} value={formik.values.message}></textarea>
                <label htmlFor="message">Message</label>
                {formik.touched.message && formik.errors.message && <p>{formik.errors.message}</p>}
              </div>
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Loading...' : 'Send'}
              </button>
              {error && (
                <div className="error">
                  <p>{error}</p>
                </div>
              )}
            </form>
          </div>
    </div>
    </>
  )
}

export default Conant