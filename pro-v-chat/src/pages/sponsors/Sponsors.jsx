import React from 'react';
import logo from "../../assets/logo/logo.png";
import SponsorCard from './Sponsorcard.jsx';
import ceo1 from '../../assets/sponyo/ceo1.jpeg';
import charlse from '../../assets/sponyo/CHARLES.jpeg';
import elon from '../../assets/sponyo/Elon.jpeg';
import idris from '../../assets/sponyo/idris.jpeg';
import kevin from '../../assets/sponyo/kevin.jpeg';
import silicon from '../../assets/sponyo/Silicon.jpeg';
import jeff from '../../assets/sponyo/Jeff.jpeg';
import dwayne from '../../assets/sponyo/dwayne.jpeg';
import sp1 from '../../assets/sponyo/brands/sp1.png';
import sp2 from '../../assets/sponyo/brands/sp2.png';
import sp3 from '../../assets/sponyo/brands/sp3.png';
import sp4 from '../../assets/sponyo/brands/sp4.png';
import sp5 from '../../assets/sponyo/brands/sp5.png';
import sp6 from '../../assets/sponyo/brands/sp6.png';
import sp7 from '../../assets/sponyo/brands/sp7.png';
import sp8 from '../../assets/sponyo/brands/sp8.png';
import sp9 from '../../assets/sponyo/brands/sp9.png';
import sp10 from '../../assets/sponyo/brands/sp10.png';
import './sponsors.css';

const sponsorsData = [
  { imgSrc: ceo1, name: 'CEO 1', description: 'Crafting Experiences and Building Brands.' },
  { imgSrc: charlse, name: 'Charles', description: 'innovations and crafts around media I will be the man.' },
  { imgSrc: dwayne, name: 'Dwayne', description: 'I am the game-changer for your brand' },
  { imgSrc: elon, name: 'Elon', description: 'surprise me anything is possible.' },
  { imgSrc: idris, name: 'Idris', description: ' Winning Hearts and Loyalty.' },
  { imgSrc: jeff, name: 'Jeff', description: 'Riding the Wave of Digital Influence.' },
  { imgSrc: kevin, name: 'Kevin', description: 'Amplifying Reach Through Collaborative Narratives.' },
  { imgSrc: silicon, name: 'Silicon', description: 'Making a Difference and Building Goodwill, its all about tech.' },
];

const brandImages = [
  sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10
];

function Sponsors() {
  return (
    <section className="sponsors">
      <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="sponsors-heading">
        <h2>available Sponsors</h2>
      </div>
      <span className='circle one'></span>
            <span className='circle two'></span>
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
      <div className="brands-container">
        <div className="lists">
          {brandImages.map((image, index) => (
            <div className="item" id={`item${index + 1}`} key={index}>
              <img src={image} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
