import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import all pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import CartItem from './components/CartItem'; 

const App = () => {
  return <div className='overflow-hidden'>react
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartItem />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
};

export default App;