import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFire } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, formatPrice, trimProductTitle }) => {
  return (
    <div
      key={product.id}
      className='border bg-gray-200 border-gray-200 rounded-lg overflow-hidden shadow-md relative flex flex-col justify-between transform transition-transform duration-500 hover:scale-105 hover:bg-gray-300'
    >
      {/* Badges */}
      {product.isNew && (
        <span className='absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded'>
          New
        </span>
      )}
      {product.isHot && (
        <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center'>
          <FontAwesomeIcon icon={faFire} className="mr-1" /> Hot
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
          <a>
            <h2 className='font-bold text-xl mb-2 text-center hover:text-blue-700'>{trimProductTitle(product.title)}</h2>
          </a>
          <p className='text-lg my-4 text-gray-900 font-semibold mb-2 text-center'>{formatPrice(product.price)}
            {product.originalPrice && (
              <span className='line-through text-gray-500 ml-2'>{formatPrice(product.originalPrice)}</span>
            )}
          </p>
        </div>
        <div className='mt-4'>
          <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full cart-button'>
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
