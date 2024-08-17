import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import all pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        {/* //route for card */}
        <Route path='/cart' element={< Cart />} />
      </Routes>
      <Footer />
    </Router>
  </div>;

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
};

export default App;