import React, { useState } from 'react';

const App = () => {
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const toggleTopMenu = () => {
    setIsTopMenuOpen(!isTopMenuOpen);
  };

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Top Navbar */}
      <div className="bg-gray-200 text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex space-x-4">
            {/* Top Navbar Dropdown for Tablet/Large Devices */}
            <div className="lg:hidden">
              <button onClick={toggleTopMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            {/* Top Navbar Links */}
            <div className={`space-x-4 hidden lg:flex`}>
              <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Order Tracking</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="relative">
              <select className="bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none">
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div className="relative">
              <select className="bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </div>
        </div>
        {/* Dropdown Menu for Top Navbar in Tablet/Large Devices View */}
        <div className={`lg:hidden ${isTopMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="px-4 py-4 space-y-1 bg-gray-100">
            <a href="#" className="block text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Order Tracking</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">FAQs</a>
          </nav>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Planet</a>
          </div>
          {/* Hamburger Menu Icon for Main Navbar */}
          <div className="lg:hidden">
            <button onClick={toggleMainMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Main Navigation Links */}
          <nav className={`space-x-6 ${isMainMenuOpen ? 'block' : 'hidden'} lg:flex`}>
            <a href="#" className="text-gray-700 hover:text-blue-600 block lg:inline-block">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 block lg:inline-block">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 block lg:inline-block">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 block lg:inline-block">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 block lg:inline-block">Contact</a>
          </nav>
          <div className="space-x-6 flex items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 hidden lg:inline-block">Need Help? +001 123 456 789</a>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <i className="far fa-heart"></i>
              </a>
              <a href="#" className="relative">
                <i className="far fa-shopping-cart text-gray-700 hover:text-blue-600"></i>
                <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">1</span>
              </a>
            </div>
          </div>
        </div>
        {/* Dropdown Menu for Main Navbar in Tablet/Large Devices View */}
        <div className={`lg:hidden ${isMainMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="px-4 py-4 space-y-1 bg-gray-100">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Accessories</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2 bg-gray-200 p-8 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Mega Sale Up To 50% Off For All</h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan nunc.
              </p>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">Grab The Offer</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-100 p-4 text-center flex items-center justify-center">
              <div>
                <img src="https://via.placeholder.com/150" alt="Summer Travel Collection" className="mx-auto mb-4"/>
                <h2 className="text-xl font-semibold text-gray-800">Summer Travel Collection</h2>
                <a href="#" className="text-blue-600 hover:underline">Discover Now</a>
              </div>
            </div>
            <div className="bg-gray-100 p-4 text-center flex items-center justify-center">
              <div>
                <img src="https://via.placeholder.com/150" alt="Get 30% Off On iPhone" className="mx-auto mb-4"/>
                <h2 className="text-xl font-semibold text-gray-800">Get 30% Off On iPhone</h2>
                <a href="#" className="text-blue-600 hover:underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
