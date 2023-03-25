import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import OnlineOrder from './components/OnlineOrder'
import Reservations from './components/Reservations'
import About from './components/About'
import Home from './components/Home'

import Login from './Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Routing = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/menu" element={< Menu />} />
                    <Route path="/reservations" element={< Reservations />} />
                    <Route path="/onlineorder" element={< OnlineOrder />} />
                    <Route path="/login" element={< Login />} />
                </Routes>
            </Router>

        </>
    )
}

export default Routing
