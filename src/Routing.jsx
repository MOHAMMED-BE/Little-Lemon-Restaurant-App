import React from 'react';
import Header from './components/Header';
import Menu from './pages/Menu';
import OnlineOrder from './pages/OnlineOrder';
import Reservations from './components/Reservations';
import About from './pages/About';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Routing = () => {

  return (
    <>
      <Router>
        <Header/>
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
