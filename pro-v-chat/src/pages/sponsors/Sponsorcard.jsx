import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sponsorCard.css';

function SponsorCard({ imgSrc, name, description }) {
  return (
    <div className="sponsor-card">
      <img src={imgSrc} alt={name} />
      <p>{description}</p>
      <Link to={`/conant?name=${name}&description=${description}&imgSrc=${imgSrc}`}>Get in touch</Link>
    </div>
  );
}

SponsorCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SponsorCard;
