import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
    <nav
      className="bg-white border-gray-200 fixed top-0 w-full z-10"
      style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-bold text-blue-600">Shopify</span>
        </a>
        <button
          onClick={toggleMainMenu}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-auto mr-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMainMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMainMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:text-sm md:border-0 md:bg-white md:space-x-8">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-600 md:bg-transparent">Shop</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-600 md:bg-transparent">Products</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-600 md:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>

        {/* Currency Dropdown */}
        <div className="relative flex items-center space-x-4">
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
          </Link>
          <button
            onClick={toggleDropdown}
            className="text-gray-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            {currency} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          {isOpen && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 mt-2">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownNavbarLink">
                <li>
                  <button
                    onClick={() => {
                      convertCurrency('USD');
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    USD
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      convertCurrency('EUR');
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    EUR
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      convertCurrency('INR');
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    INR
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
