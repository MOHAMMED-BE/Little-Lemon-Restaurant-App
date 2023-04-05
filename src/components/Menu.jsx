import React, { useState, useEffect } from 'react'
import menuOne from '../assets/images/menu.png'
import menuTwo from '../assets/images/menu-2.png'

const Menu = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='menu-container'>
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={windowWidth > 970 ? menuOne : menuTwo} className={`img-fluid w-100 rounded-4 ${windowWidth > 970 ? 'menu-img' : 'menu-img-2'}`} alt="menu" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Menu
