import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const CategorySection = () => {
  const { products } = useContext(ProductContext);

  // Function to get the product count for each category
  const getCategoryProductCount = (categoryName) => {
    return products.filter(product => product.category === categoryName).length;
  };

  // Function to get the specific product image for each category
  const getCategoryImage = (categoryName) => {
    if (categoryName === "men's clothing") {
      // Get the second occurrence of "men's clothing" category
      const mensClothingProducts = products.filter(product => product.category === "men's clothing");
      if (mensClothingProducts.length > 1) {
        return mensClothingProducts[1].image; // Second occurrence
      } else if (mensClothingProducts.length === 1) {
        return mensClothingProducts[0].image; // First occurrence if only one exists
      } else {
        return 'default-image-path.jpg'; // Fallback image if no product exists
      }
    } else {
      // Get the first product image for other categories
      const product = products.find(product => product.category === categoryName);
      return product ? product.image : 'default-image-path.jpg'; // Fallback image if none found
    }
  };

  const categories = [
    { name: "women's clothing", label: 'Women\'s Clothing' },
    { name: "men's clothing", label: 'Men\'s Clothing' },
    { name: 'jewelery', label: 'Jewelery' },
  ];

  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
      <p className="text-gray-600 mb-8">
        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <div key={category.name} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={getCategoryImage(category.name)} alt={category.label} className="w-full h-48 object-contain p-4" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{category.label}</h3>
              <p className="text-gray-600">{getCategoryProductCount(category.name)} Products Available</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
        Explore All Category
      </button>
    </div>
  );
};

export default CategorySection;
