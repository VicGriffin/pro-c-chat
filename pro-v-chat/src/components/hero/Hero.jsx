import React from "react";
import "./hero.css";
import About from "../about/About";
import { Link } from "react-router-dom";

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
            opportunities. We connect aspiring creators with sponsors.
          </p>
        </div>
        <div className="hero-buttons">
          <Link to="./about" className="hero-button">
            About &darr;
          </Link>
          <a href="#projects" className="hero-button">
            more &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
