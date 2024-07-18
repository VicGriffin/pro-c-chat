import React from 'react';
import SponsorCard from './Sponsorcard';
import ceo1 from '../../assets/sponyo/ceo1.jpeg';
import charlse from '../../assets/sponyo/CHARLES.jpeg';
import elon from '../../assets/sponyo/Elon.jpeg';
import idris from '../../assets/sponyo/idris.jpeg';
import kevin from '../../assets/sponyo/kevin.jpeg';
import silicon from '../../assets/sponyo/Silicon.jpeg';
import jeff from '../../assets/sponyo/Jeff.jpeg';
import dwayne from '../../assets/sponyo/dwayne.jpeg';
import './sponsors.css';

const sponsorsData = [
  { imgSrc: ceo1, name: 'CEO 1', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: charlse, name: 'Charles', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: dwayne, name: 'Dwayne', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: elon, name: 'Elon', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: idris, name: 'Idris', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: jeff, name: 'Jeff', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: kevin, name: 'Kevin', description: 'Lorem ipsum dolor sit amet.' },
  { imgSrc: silicon, name: 'Silicon', description: 'Lorem ipsum dolor sit amet.' },
];

function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors-heading">
        <h1>Sponsors</h1>
      </div>
      <div className="sponsors-container">
        {sponsorsData.map((sponsor, index) => (
          <SponsorCard 
            key={index} 
            imgSrc={sponsor.imgSrc} 
            name={sponsor.name} 
            description={sponsor.description} 
          />
        ))}
      </div>
      <div className="brands">
        <h2>brands we are in partner with</h2>
      </div>
    </section>
  );
}

export default Sponsors;
