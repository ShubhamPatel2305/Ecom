import React from 'react';
import img1 from "../img/mainimg1.png";
import img2 from "../img/mainimg2.png";
import img3 from "../img/mainimg3.png";

const Hero = () => {

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
  
    card.style.transform = `rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
  
    // Calculate the position for the light spot
    const posX = ((x + rect.width / 2) / rect.width) * 100;
    const posY = ((y + rect.height / 2) / rect.height) * 100;
  
    // Apply the light spot as a background gradient with a darker gray color and reduced spread
    card.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(169, 169, 169, 0.6) 5%, transparent 60%)`;
  
    // Keep the existing black border settings
    const borderTopColor = `rgba(0, 0, 0, 0.9)`;
    const borderRightColor = `rgba(0, 0, 0, 0.9)`;
    const borderBottomColor = `rgba(0, 0, 0, 0.9)`;
    const borderLeftColor = `rgba(0, 0, 0, 0.9)`;
  
    card.style.borderTop = `4px solid transparent`;
    card.style.borderRight = `4px solid transparent`;
    card.style.borderBottom = `4px solid transparent`;
    card.style.borderLeft = `4px solid transparent`;
  
    card.style.borderImage = `
      linear-gradient(
        to right,
        ${borderTopColor} ${posX - 5}%,
        rgba(0, 0, 0, 0.3) ${posX + 10}%
      ) 1 0,
      linear-gradient(
        to bottom,
        ${borderRightColor} ${posY - 5}%,
        rgba(0, 0, 0, 0.3) ${posY + 10}%
      ) 1 0,
      linear-gradient(
        to left,
        ${borderBottomColor} ${100 - posX - 5}%,
        rgba(0, 0, 0, 0.3) ${100 - posX + 10}%
      ) 1 0,
      linear-gradient(
        to top,
        ${borderLeftColor} ${100 - posY - 5}%,
        rgba(0, 0, 0, 0.3) ${100 - posY + 10}%
      ) 1 0;
    `;
  
    // Apply shadow or glow effect with a darker gray color
    card.style.boxShadow = `0 10px 20px rgba(169, 169, 169, 0.7), 0 6px 6px rgba(169, 169, 169, 0.5)`;
  };
  
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0) rotateY(0)'; // Reset transform
    card.style.background = ''; // Remove the light spot when the mouse leaves
    card.style.borderImage = ''; // Remove the border gradient
    card.style.boxShadow = ''; // Remove shadow or glow effect
  };
  

  return (
    <div className='bg-gray-100 pt-24'>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Row - Promotional Banner (No hover effect) */}
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
            <div
              className="bg-gray-200 p-4 text-center flex items-center justify-center transition-transform duration-300 hover:shadow-lg"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <img src={img3} alt="Summer Travel Collection" className="w-36 h-36 mx-auto mb-4 object-cover" />
                <h2 className="text-xl font-semibold text-gray-800">Summer Travel Collection</h2>
                <a href="#" className="text-blue-600 hover:underline">Discover Now</a>
              </div>
            </div>
            <div
              className="bg-gray-200 p-4 text-center flex items-center justify-center transition-transform duration-300 hover:shadow-lg"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <img src={img2} alt="Get 30% Off On iPhone" className="w-36 h-36 mx-auto mb-4 object-cover" />
                <h2 className="text-xl font-semibold text-gray-800">Free delivery on orders above 1200</h2>
                <a href="#" className="text-blue-600 hover:underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
