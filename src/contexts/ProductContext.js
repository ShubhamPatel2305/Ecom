import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState('USD');

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      // Initialize the currency to USD for all products
      const initializedProducts = data.map(product => ({
        ...product,
        currency: 'USD',
      }));

      setProducts(initializedProducts);
    };

    fetchProducts();
  }, []);

  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    INR: 74,
  };

  const convertCurrency = (newCurrency) => {
    setProducts(products.map(product => ({
      ...product,
      price: parseFloat((product.price / conversionRates[product.currency] * conversionRates[newCurrency]).toFixed(2)),
      currency: newCurrency,
    })));
    setCurrency(newCurrency);
  };

  return (
    <ProductContext.Provider value={{ products, currency, convertCurrency }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
