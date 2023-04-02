import React from 'react';
import Header from './Header';
import Menu from './Menu';
import OnlineOrder from './OnlineOrder';
import Reservations from './Reservations';
import About from './About';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Routing = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/online-order" element={<OnlineOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
