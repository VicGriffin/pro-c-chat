import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './meeting.css';

function Meeting() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    platform: Yup.string().required("Platform is required"),
    info: Yup.string(),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Meeting scheduled successfully");
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
      info: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="meeting-details">
      <h2>Schedule a Virtual Meeting</h2>
      
      <span className='circle one'></span>
            <span className='circle two'></span>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label htmlFor="date"></label>
          <input type="date" name="date" onChange={formik.handleChange} value={formik.values.date} />
          {formik.touched.date && formik.errors.date && <p>{formik.errors.date}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="time"></label>
          <input type="time" name="time" onChange={formik.handleChange} value={formik.values.time} />
          {formik.touched.time && formik.errors.time && <p>{formik.errors.time}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="platform"></label>
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
          <label htmlFor="info">Additional info</label>
          <textarea name="info" onChange={formik.handleChange} value={formik.values.info}></textarea>
          {formik.touched.info && formik.errors.info && <p>{formik.errors.info}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Scheduling...' : 'Schedule Meeting'}
        </button>
        {error && <div className="error"><p>{error}</p></div>}
      </form>
    </div>
  );
}

export default Meeting;
