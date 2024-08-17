import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState(() => localStorage.getItem('currency') || 'USD');

  // Conversion rates should be accessible through the context
  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    INR: 74,
  };

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

      const productsWithFeatures = assignFeatures(initializedProducts);
      setProducts(productsWithFeatures);
    };

    fetchProducts();
  }, []);

  const assignFeatures = (products) => {
    return products.map((product, index) => {
      const randomNum = index % 6;
      switch(randomNum) {
        case 0:
          return { ...product, isNew: true };
        case 1:
          return { ...product, isHot: true };
        case 2:
          return { ...product, discount: Math.floor(Math.random() * 21) + 10 }; // Assign a random discount between 10% and 30%
        default:
          return product; // No feature (null)
      }
    });
  };

  const convertCurrency = (newCurrency) => {
    setProducts(products.map(product => ({
      ...product,
      price: parseFloat((product.price / conversionRates[product.currency] * conversionRates[newCurrency]).toFixed(2)),
      currency: newCurrency,
    })));
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency); // Persist the selected currency to localStorage
  };

  return (
    <ProductContext.Provider value={{ products, currency, convertCurrency, conversionRates }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
