import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import './ideas.css';

function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const idealistName = 'Victor Griffin';
  const projectTitle = 'Do Away with Old Clothes in Style';
  const email = 'vickamworkpro@gmail.com';

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('http://localhost:3001/idea');
        if (response.ok) {
          const data = await response.json();
          setIdeas(data);
        } else {
          console.error('Failed to fetch ideas');
        }
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <>
      <section className='ideas'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ideas-title">Ideas</div>
        <div className="ideas-container">
          <div className="ideas-content">
            <div className="ideas-content-title">{projectTitle}</div>
            <div className="ideas-content-text">
              Transform outdated clothes into stylish pieces through creative upcycling, promoting sustainability and uniqueness in your wardrobe. Embrace eco-friendly fashion.
            </div>
            <div className="idealist-name">{idealistName}</div>
            <div className="idealist-email">{email}</div>
            <Link to={`/meeting?name=${encodeURIComponent(idealistName)}&title=${encodeURIComponent(projectTitle)}&email=${encodeURIComponent(email)}`}>
              <button>Schedule a Meeting</button>
            </Link>
          </div>
          {ideas.map((idea) => (
            <div key={idea.id} className="ideas-content">
              <div className="ideas-content-title">{idea.title}</div>
              <div className="ideas-content-text">{idea.description}</div>
              <div className="idealist-name">{idea.idealistName}</div>
              <div className="idealist-email">{idea.email}</div>
              <Link to={`/meeting?name=${encodeURIComponent(idea.idealistName)}&title=${encodeURIComponent(idea.title)}&email=${encodeURIComponent(idea.email)}`}>
                <button>Schedule a Meeting</button>
              </Link>
            </div>
          ))}
        </div>
        
      <Link to="/adminDashboard"><button>back</button></Link>
      </section>
    </>
  );
}

export default Ideas;
