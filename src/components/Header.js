import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Header = () => {
  const { currency, convertCurrency } = useContext(ProductContext);
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };

  const handleCurrencyChange = (e) => {
    convertCurrency(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = 200; // Maximum scroll distance for full fade-out
      const isScrollingUp = prevScrollPos > currentScrollPos;

      const newOpacity = isScrollingUp || currentScrollPos <= maxScroll
        ? 1
        : 1 - Math.min(currentScrollPos / maxScroll, 1);

      setOpacity(newOpacity);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div style={{ opacity, transition: 'opacity 0.3s ease-in-out' }} className='bg-gray-100 fixed top-0 w-full z-10'>

      {/* Main Navbar */}
      <header className="bg-white shadow-md py-1">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-4xl font-bold text-blue-600 py-2">
            <a href="#">Shopify</a>
          </div>
          {/* Hamburger Menu Icon for Main Navbar */}
          <div className="lg:hidden flex items-center ml-auto">
            <button onClick={toggleMainMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
          </div>
          {/* Main Navigation Links (Hidden on Mobile/Tablet) */}
          <nav className="hidden lg:flex space-x-6 ml-auto pt-2 text-lg">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href='#' className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
          <nav>
          <div className="relative px-4 py-4">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none hover:bg-gray-100"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </nav>
        </div>
        {/* Dropdown Menu for Main Navbar on Mobile/Tablet */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMainMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 space-y-1 bg-gray-100 transition-opacity duration-500 delay-200 ease-in-out">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Accessories</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
