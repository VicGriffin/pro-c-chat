import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import './meeting.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Meeting() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const query = useQuery();

  const idealistName = query.get('name') || '';
  const projectTitle = query.get('title') || '';

  const today = new Date().toISOString().split('T')[0];

  const now = new Date().toLocaleTimeString('it-IT').slice(0, 5);

  const validationSchema = Yup.object({
    date: Yup.date().min(today, "Cannot select past dates").required("Date is required"),
    time: Yup.string().min(now, "cannot select past times" ).required("Time is required"),
    platform: Yup.string().required("Platform is required"),
    meetingId: Yup.string().required("meeting id required")
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
      meetingId: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="meeting-details">
      <h2>Schedule a Virtual Meeting</h2>
      
      <form onSubmit={formik.handleSubmit}>
      <p>Idealist: {idealistName}</p>
      <p>Project Title: {projectTitle}</p>
      <p>idealist email: {idealistEmail}</p>
      <span className='circle one'></span>
      <span className='circle two'></span>
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
          <label htmlFor="meetingId">meeting id</label>
          <textarea name="meetingId" onChange={formik.handleChange} value={formik.values.meetingId}></textarea>
          {formik.touched.meetingId && formik.errors.meetingId && <p>{formik.errors.meetingId}</p>}
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
