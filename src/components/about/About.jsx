import React from 'react'
import give_img from '../../assets/about/gidea.png'
import findaspo_img from '../../assets/about/findaspo.png'
import getfunded_img from '../../assets/about/getfunded.png'
import createops_img from '../../assets/about/createops.jpeg'
import './about.css'

function About() {
  return (
    <>
    <section className='about'>
        <div className="about-div1">
        <div className="about-first">
            <h2>give an idea</h2>
            <img src={give_img} alt="give an idea" />
            <p>Give an idea to the world and get funded by the people who love your idea
                </p>
        </div>
        <div className="about-second">
            <h2>find a sponsor</h2>
            <img src={findaspo_img} alt="find a sponsor" />
            <p>Find a sponsor for your idea and get funded by the people who love your idea
                </p>
        </div>
        <div className="about-third">
            <h2>get funded</h2>
            <img src={getfunded_img} alt="get funded" />
            <p>Get funded by the people who love your idea</p>
        </div>
        <div className="about-forth">
            <h2>create opportunities</h2>
            <img src={createops_img} alt="create opportunities" />
            <p>Create opportunities for other people </p>
        </div>
        </div>
        <div className="about-div2">
            <h2>get sponsored by companies and brands</h2>
            <p>Unlock exclusive opportunities and elevate your brand by partnering with us. Get sponsored by top companies and brands, gaining access to unique marketing channels and audiences. Enhance your visibility, drive growth, and achieve your business goals with strategic collaborations that bring mutual success. Join us and experience unparalleled brand synergy.</p>
            <a href="">learn more</a>
        </div>

    </section>
    </>
  )
}

export default About