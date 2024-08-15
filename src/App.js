import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Planet</a>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
          <div className="space-x-6 flex items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">Need Help? +001 123 456 789</a>
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
