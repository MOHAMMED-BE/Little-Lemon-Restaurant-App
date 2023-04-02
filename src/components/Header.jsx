import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/svg/Logo.svg"

const Header = () => {
    const navItems = [
        {
            name: 'About'
        },
        {
            name: 'Menu'
        },
        {
            name: 'reservations'
        },
        {
            name: 'Online Order'
        }
    ]
    return (
        <div className='header-nav w-100 position-fixed d-flex justify-content-center align-items-center'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item" key='home'>
                                <Link className='nav-link' to="/" >Home</Link>
                            </li>
                            {
                                navItems.map((item) => {
                                    return <li className="nav-item" key={item.name}>
                                        <Link className='nav-link' to={item.name.toLocaleLowerCase().replace(/\s+/g, "-")} >{item.name}</Link>
                                    </li>
                                })
                            }

                            <li className="nav-item ms-5" key='login'>
                                <Link className='btn login-btn' to="/login" >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
