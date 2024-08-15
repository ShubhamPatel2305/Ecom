import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { products, currency } = useContext(ProductContext);

  // Get only men's and women's clothing category and jewelry
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
  

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md relative flex flex-col justify-between'>
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
                <h2 className='font-bold text-lg mb-2'>{product.title}</h2>
                <p className='text-gray-700 mb-2'>{formatPrice(product.price)}
                  {product.originalPrice && (
                    <span className='line-through text-gray-500 ml-2'>{formatPrice(product.originalPrice)}</span>
                  )}
                </p>
              </div>
              <div className='mt-4'>
                <button className='bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition w-full'>
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
