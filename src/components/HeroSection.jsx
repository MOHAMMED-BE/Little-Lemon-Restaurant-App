import React from 'react'
import heroImage from '../assets/images/restauranfood.jpg'

const HeroSection = () => {
  return (
    <div className='hero text-light'>
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis provident aliquam pariatur dolore placeat ducimus hic! Illum, unde cumque?
              </p>
              <button className="btn reserve-btn">Reserve a Table</button>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6">
              <img src={heroImage} className='hero-image' alt="restaurant food" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
