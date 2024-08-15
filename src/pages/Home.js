import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { products, currency } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (product) => product.category === "men's clothing" || product.category === "women's clothing" || product.category === 'jewelery'
  );

  const formatPrice = (price) => {
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);
    }
  };

  const trimProductTitle = (title) => {
    return title.split(' ').slice(0, 5).join(' ') + (title.split(' ').length > 5 ? '...' : '');
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
  
    card.style.transform = `rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
  
    // Calculate the position for the light spot
    const posX = ((x + rect.width / 2) / rect.width) * 100;
    const posY = ((y + rect.height / 2) / rect.height) * 100;
  
    // Apply the light spot as a background gradient with a light black shade and reduced spread
    card.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(0, 0, 0, 0.3) 5%, transparent 60%)`;
  
    // Set a thicker border and reduce the gradient fade effect
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
  
    // Apply shadow or glow effect
    card.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.1)`;
  };
  
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0) rotateY(0)';
    card.style.background = ''; // Remove the light spot when the mouse leaves
    card.style.borderImage = '';
    card.style.boxShadow = ''; // Remove shadow or glow effect
  };
  
  

  return (
    <div className='container mx-auto bg-gray-100'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className='border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md relative flex flex-col justify-between transition-transform duration-300 hover:shadow-lg'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Badges */}
            {product.isNew && (
              <span className='absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded'>
                New
              </span>
            )}
            {product.isHot && (
              <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded'>
                Hot
              </span>
            )}
            {product.discount && (
              <span className='absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded'>
                -{product.discount}%
              </span>
            )}
            {/* Product Image */}
            <img src={product.image} alt={product.title} className='w-full h-64 object-contain p-4' />
            {/* Product Details */}
            <div className='p-4 flex-grow flex flex-col justify-between'>
              <div>
                <h2 className='font-bold text-lg mb-2 text-center'>{trimProductTitle(product.title)}</h2>
                <p className='text-gray-700 mb-2 text-center'>{formatPrice(product.price)}
                  {product.originalPrice && (
                    <span className='line-through text-gray-500 ml-2'>{formatPrice(product.originalPrice)}</span>
                  )}
                </p>
              </div>
              <div className='mt-4'>
                <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full'>
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
