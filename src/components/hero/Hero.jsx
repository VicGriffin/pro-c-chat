import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-title">
          <h1>welcome to SFT</h1>
        </div>
        <div className="hero-subtitle">
          <p>
            SFT is a dynamic company that empowers beginner innovators by
            providing essential resources, mentorship, and networking
            opportunities. We connect aspiring creators with sponsors and
            investors, fostering collaboration and funding to transform
            innovative ideas into successful ventures. Our mission is to nurture
            creativity and drive growth in the innovation ecosystem.
          </p>
        </div>
        <div className="hero-buttons">
          <a href="#about" className="hero-button">
            About
          </a>
          <a href="#projects" className="hero-button">
            Get started &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
