import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

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

  return(
  <div>
    <Hero />
    <div className='container mx-auto bg-gray-50'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            formatPrice={formatPrice}
            trimProductTitle={trimProductTitle}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
