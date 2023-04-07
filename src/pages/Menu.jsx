import React, { useContext } from 'react'
import menuOne from '../assets/images/menu.png'
import menuTwo from '../assets/images/menu-2.png'
import { WindowWidthContext } from '../context/WindowWidthProvider'
const Menu = () => {

  const windowWidth = useContext(WindowWidthContext)

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