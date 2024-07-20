import React from 'react';
import PropTypes from 'prop-types';
import './sponsorCard.css';

function SponsorCard({ imgSrc, name, description }) {
  return (
    <div className="sponsor-card">
      <img src={imgSrc} alt={name} />
      <p>{description}</p>
      <a href="#">Get in touch</a>
    </div>
  );
}

SponsorCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SponsorCard;
