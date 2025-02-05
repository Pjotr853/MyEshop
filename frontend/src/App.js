import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Layout from './pages/Layout';
import Cart from './pages/cart/Cart';
import Adding from './pages/adding/Adding';

function App() {
  return (
    <Router>
      <Layout /> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adding" element={<Adding />} />
      </Routes>
    </Router>
  );
}

export default App;
