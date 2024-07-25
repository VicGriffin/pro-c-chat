import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './userResponses.css';  

function UserResponses() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await fetch('http://localhost:3001/conant');  
        if (response.ok) {
          const data = await response.json();
          setResponses(data);
        } else {
          throw new Error('Failed to fetch responses');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className='responses'>
      <div className="responses-title">projects</div>
      <div className="responses-container">
        {responses.map((response) => (
          <div key={response.id} className="responses-content">
            <div className="responses-content-title">Message from {response.yourname}</div>
            <div className="responses-content-text">Email: {response.email}</div>
            <div className="responses-content-text">Phone: {response.phone}</div>
            <div className="responses-content-text">Project Link: {response.link}</div>
            <div className="responses-content-text">Message: {response.coverletter}</div>
            <Link to={`/meeting?name=${encodeURIComponent(response.yourname)}&email=${encodeURIComponent(response.email)}`}>
              <button>Schedule a Meeting</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/adminDashboard"><button>back</button></Link>
    </section>
  );
}

export default UserResponses;
