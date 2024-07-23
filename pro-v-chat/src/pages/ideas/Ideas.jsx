import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import './ideas.css';

function Ideas() {
  const idealistName = 'Victor Griffin';
  const projectTitle = 'Do Away with Old Clothes in Style';

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam vulputate, nunc nunc ultricies nisl, ut lacinia libero nunc eu libero. Sed euismod,
            </div>
            <div className="idealist-name">{idealistName}</div>
            <Link to={`/meeting?name=${encodeURIComponent(idealistName)}&title=${encodeURIComponent(projectTitle)}`}>
              <button>Schedule a Meeting</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ideas;
