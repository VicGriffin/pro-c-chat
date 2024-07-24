import React, { useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './postidea.css';


function Postidea() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    title: Yup.string().required("title is required"),
    description: Yup.string().required("description is required"),
    idealistName: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        alert("idea posted successfully");

      } else {
        setError(data.error || 'Failed to post meeting');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
        title: '',
        description:'',
        idealistName:'',
        email:''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="post-idea">
      <h2>submit you idea here</h2>
      <form onSubmit={formik.handleSubmit}>
        <span className='circle one'></span>
        <span className='circle two'></span>
        title
        <div className="input-container">
          <input
            type="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && <p>{formik.errors.title}</p>}
        </div>
        description in 20words
        <div className="input-container">
          <input
            type="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && <p>{formik.errors.description}</p>}
        </div>
        idealistName
        <div className="input-container">
          <input
            type="idealistName"
            name="idealistName"
            onChange={formik.handleChange}
            value={formik.values.idealistName}
          />
          {formik.touched.idealistName && formik.errors.idealistName && <p>{formik.errors.idealistName}</p>}
        </div>
        email
        <div className="input-container">
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'submiting...' : 'submit'}
        </button>
        {error && <div className="error"><p>{error}</p></div>}
      </form>
    </div>
  );
}

export default Postidea;
