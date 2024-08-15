import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

const Home = () => {
  const {products} = useContext(ProductContext);
  //get only mens and womens clothing category and also jewelery
  const filteredProducts = products.filter(
    (product) => product.category ==="men's clothing" || product.category ==="women's clothing" || product.category ==='jewelery'
  );
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='border bg-gray-100 border-gray-200 rounded-lg overflow-hidden'>
            <img src={product.image} alt={product.title} className='w-full h-64 object-cover' />
            <div className='p-4'>
              <h2 className='font-bold text-xl mb-2'>{product.title}</h2>
              <p className='text-gray-700'>Category: {product.category}</p>
              <p className='text-gray-700'>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
