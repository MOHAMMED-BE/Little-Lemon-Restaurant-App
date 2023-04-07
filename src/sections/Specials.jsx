import React, { useContext } from 'react'
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import SpecialsList from '../data/SpecialsList'
import { WindowWidthContext } from '../context/WindowWidthProvider'

const Specials = () => {

    const navigate = useNavigate();
    const ariaLabel = "Online Menu";
    const cardAriaLabel = "Order a delivery";
    const windowWidth = useContext(WindowWidthContext)

    const showMenu = () => {
        navigate('/menu');
    }

    return (
        <div className='specials-container position-absolute '>
            <div className='container '>
                <div className='row justify-content-around mb-5'>
                    <div className='col-md-7'>
                        <h2>This week specials!</h2>
                    </div>
                    <div className='col-md-3'>
                        <Button btnClick={showMenu} className='online-menu-btn' ariaLabel={ariaLabel} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            SpecialsList.map((item) => (
                                <div className={`
                                col-12 ${windowWidth < 1200 && item.title === 'Greek Salad'
                                        ? 'col-md-12'
                                        : 'col-md-4'}

                                        ${windowWidth > 1200
                                        ? 'col-md-4'
                                        : 'col-md-12'}

                                        `}
                                    key={item.title}>

                                    <div className=
                                        {`card specials-card
                                    ${item.title === 'Lemon Desert' ? 'last-card' : ''}
                                    ${windowWidth < 770 && item.title === 'Lemon Desert' ? 'phone-last-card' : ''}`}>
                                        <div className="top-image">
                                            <img src={item.image} className="specials-card-img-top" alt="restaurant" />
                                        </div>
                                        <div className="card-body mt-3">
                                            <div className="container card-container">
                                                <div className="row mb-3">
                                                    <div className="col-8">
                                                        <h5 className='specials-title'>{item.title}</h5>
                                                    </div>
                                                    <div className="col-4">
                                                        <span className='specials-price'>{item.price}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <p className='specials-desc'>{item.desc}</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-10 ">
                                                        <Button className='order-btn' ariaLabel={cardAriaLabel} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials
