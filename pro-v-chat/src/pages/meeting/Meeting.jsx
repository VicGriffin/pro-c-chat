import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './meeting.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Meeting() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const query = useQuery();
  const form = useRef();

  const idealistName = query.get('name') || '';
  const projectTitle = query.get('title') || '';
  const idealistEmail = query.get('email') || '';

  const today = new Date().toISOString().split('T')[0];
  const now = new Date().toLocaleTimeString('it-IT').slice(0, 5);

  const validationSchema = Yup.object({
    date: Yup.date().min(today, "Cannot select past dates").required("Date is required"),
    time: Yup.string()
      .matches(/^\d{2}:\d{2}$/, "Invalid time format")
      .test('time', 'Cannot select past times', function(value) {
        return (this.parent.date !== today) || (value >= now);
      })
      .required("Time is required"),
    platform: Yup.string().required("Platform is required"),
    meetingId: Yup.string().required("Meeting ID is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Meeting scheduled successfully");

        await emailjs.sendForm('service_xjiv8cj', 'template_c278qsn', form.current, 'GDx5TJwJersgPgWeI');
        console.log('Email sent successfully!');
      } else {
        setError(data.error || 'Failed to schedule meeting');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      platform: '',
      meetingId: '',
      email: idealistEmail, 
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="meeting-details">
      <h2>Schedule a Virtual Meeting</h2>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <p>Idealist: {idealistName}</p>
        <p>Project Title: {projectTitle}</p>
        <p>Email: {idealistEmail}</p>
        <span className='circle one'></span>
        <span className='circle two'></span>
        <div className="input-container">
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            readOnly 
          />
          {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <div className="input-container">
          <input
            type="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
            min={today}
          />
          {formik.touched.date && formik.errors.date && <p>{formik.errors.date}</p>}
        </div>
        <div className="input-container">
          <input
            type="time"
            name="time"
            onChange={formik.handleChange}
            value={formik.values.time}
            min={formik.values.date === today ? now : ''}
          />
          {formik.touched.time && formik.errors.time && <p>{formik.errors.time}</p>}
        </div>
        <div className="input-container">
          <select name="platform" onChange={formik.handleChange} value={formik.values.platform}>
            <option value="" label="Select platform" />
            <option value="Zoom" label="Zoom" />
            <option value="Google Meet" label="Google Meet" />
            <option value="Microsoft Teams" label="Microsoft Teams" />
            <option value="Skype" label="Skype" />
          </select>
          {formik.touched.platform && formik.errors.platform && <p>{formik.errors.platform}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="meetingId">Meeting link</label>
          <textarea name="meetingId" onChange={formik.handleChange} value={formik.values.meetingId}></textarea>
          {formik.touched.meetingId && formik.errors.meetingId && <p>{formik.errors.meetingId}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Scheduling...' : 'Schedule Meeting'}
        </button>
        {error && <div className="error"><p>{error}</p></div>}
      </form>
      <Link to="/ideas"><button>back</button></Link>
    </div>
  );
}

export default Meeting;
