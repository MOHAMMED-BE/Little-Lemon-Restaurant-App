import React, { useState, useEffect } from 'react';
import logo from '../assets/images/footer-logo.png';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const middleOfPage = pageHeight / 1.7 - windowHeight / 5;

            setShowFooter(scrollPosition > middleOfPage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer
            className="text-light z-n1 text-center text-lg-start fixed-bottom"
            style={{ display: showFooter ? 'block' : 'none' }}
        >
            <div className="container p-2">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-4 mb-2 mb-md-0">
                        <img src={logo} alt="logo" className="img-fluid footer-logo" />
                    </div>
                    <div className="col-lg-4 col-md-4 mb-1 mb-md-0">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <p>123 Main St. | Anytown, USA 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: littlelemon.info@promail.com</p>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-md-0">
                        <div className="text-center p-3 bg-dark text-white rounded-2">
                            &copy; Little Lemon Restaurant 2023
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
