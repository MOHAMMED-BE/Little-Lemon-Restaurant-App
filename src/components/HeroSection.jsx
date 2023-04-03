import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/images/restauranfood.jpg'

const HeroSection = () => {
  const navigate = useNavigate();
  const reserveTable = () => {
    navigate('/reservations');
  }
  return (
    <div className='hero text-light'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
            Little Lemon Restaurant - Serving fresh and delicious food made with locally-sourced ingredients. Come dine with us today!
            </p>
            <button onClick={reserveTable} className="btn reserve-btn">Reserve a Table</button>
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
