import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState(() => {
    // Load the currency from localStorage if available, otherwise default to 'USD'
    return localStorage.getItem('currency') || 'USD';
  });

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
    localStorage.setItem('currency', newCurrency); // Save selected currency to localStorage
  };

  // Fetch products and initialize with the selected currency
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      // Convert prices to the initially selected currency
      const initializedProducts = data.map(product => ({
        ...product,
        price: parseFloat((product.price * conversionRates[currency]).toFixed(2)),
        currency,
      }));

      const productsWithFeatures = assignFeatures(initializedProducts);
      setProducts(productsWithFeatures);
    };

    fetchProducts();
  }, [currency]);

  const assignFeatures = (products) => {
    return products.map((product, index) => {
      const randomNum = index % 6;
      switch (randomNum) {
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

  return (
    <ProductContext.Provider value={{ products, currency, convertCurrency }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
