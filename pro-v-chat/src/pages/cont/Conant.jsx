import './conant.css';
import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Conant() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const query = useQuery();
  const form = useRef();

  const sponsorName = query.get('name');
  const sponsorDescription = query.get('description');
  const sponsorImgSrc = query.get('imgSrc');

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    link: Yup.string().url("Invalid URL format").required("Link to your project is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('', {
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
      link: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      sendEmail();
      resetForm();
    },
  });

  const sendEmail = () => {
    emailjs
      .sendForm('service_xjiv8cj', 'template_c278qsn', form.current, 'GDx5TJwJersgPgWeI')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="conant">
      <div className="logo">
        <img src={sponsorImgSrc} alt={sponsorName} />
      </div>
      <div className="contact-form">
        <span className='circle one'></span>
        <span className='circle two'></span>

        <form ref={form} onSubmit={formik.handleSubmit}>
          <h3 className="titl">Message {sponsorName}</h3>
          <p>{sponsorDescription}</p>
          <div className="input-container">
            <input type="text" name="name" className='input' onChange={formik.handleChange} value={formik.values.name} />
            <label htmlFor="name">Your name</label>
            {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
          </div>
          <div className="input-container">
            <input type="email" name="email" className='input' onChange={formik.handleChange} value={formik.values.email} />
            <label htmlFor="email">Email</label>
            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
          </div>
          <div className="input-container">
            <input type="text" name="phone" className='input' onChange={formik.handleChange} value={formik.values.phone} />
            <label htmlFor="phone">Phone</label>
            {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
          </div>
          <div className="input-container">
            <input type="url" name="link" className='input' onChange={formik.handleChange} value={formik.values.link} />
            <label htmlFor="link">Link to your project</label>
            {formik.touched.link && formik.errors.link && <p>{formik.errors.link}</p>}
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
  );
}

export default Conant;
