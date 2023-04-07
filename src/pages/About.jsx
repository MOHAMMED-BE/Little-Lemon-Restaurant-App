import React, { useContext } from 'react'
import imgOne from '../assets/images/about-page-1.png'
import imgTwo from '../assets/images/about-page-2.png'
import { WindowWidthContext } from '../context/WindowWidthProvider'
const About = () => {

  const windowWidth = useContext(WindowWidthContext)

  return (
    <div className='menu-container'>
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={windowWidth > 970 ? imgOne : imgTwo} className={`img-fluid w-100 rounded-4 ${windowWidth > 970 ? 'menu-img' : 'menu-img-2'}`} alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
