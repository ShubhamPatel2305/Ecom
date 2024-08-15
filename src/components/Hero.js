import React from 'react';
import img1 from "../img/mainimg1.png";
import img2 from "../img/mainimg2.png";
import img3 from "../img/mainimg3.png";

const Hero = () => {
  return <div className='bg-gray-100'>
    {/* Main Content */}
    <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Row - Promotional Banner */}
          <div className="lg:col-span-2 bg-gray-200 p-10 flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Mega Sale Up To 50% Off For All</h1>
              <p className="text-lg text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan nunc.
              </p>
              <button className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700">Grab The Offer</button>
            </div>
            <div className="hidden xl:block flex-shrink-0">
              <img src={img1} alt="Promotional Image" className="max-w-lg h-auto" />
            </div>
          </div>
          {/* Second Row - Two smaller components side by side in mobile/tablet view */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:col-span-1">
            <div className="bg-gray-200 p-4 text-center flex items-center justify-center">
              <div>
                <img src={img3} alt="Summer Travel Collection" className="w-36 h-36 mx-auto mb-4 object-cover" />
                <h2 className="text-xl font-semibold text-gray-800">Summer Travel Collection</h2>
                <a href="#" className="text-blue-600 hover:underline">Discover Now</a>
              </div>
            </div>
            <div className="bg-gray-200 p-4 text-center flex items-center justify-center">
              <div>
                <img src={img2} alt="Get 30% Off On iPhone" className="w-36 h-36 mx-auto mb-4 object-cover" />
                <h2 className="text-xl font-semibold text-gray-800">Free delivery on orders above 1200</h2>
                <a href="#" className="text-blue-600 hover:underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </main>
  </div>;
};

export default Hero;
