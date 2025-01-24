import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/Actions/productAction';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Getting the product ID from the URL
  const dispatch = useDispatch();

  // Use useSelector to get the product details from Redux state
  const product = useSelector((state) => state.allProducts.product);

  // Fetch product details when component mounts or id changes
  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data)); // Dispatch the action to update state
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetail(); // Fetch product details when ID is available
    }
  }, [id, dispatch]); // Runs again if id or dispatch changes

  const { title, image, price, category, description } = product;
  return (
<div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex p-5 mt-16">
  {/* Image Section */}
  <div className="w-1/2">
    <img 
      src={image} 
      alt="Product Image" 
      className="w-full h-full object-contain"
    />
  </div>

  {/* Details Section */}
  <div className="w-1/2 p-4 flex flex-col justify-between">
    {/* Title */}
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      {title}
    </h3>

    {/* Category */}
    <p className="text-sm text-gray-600 mb-4">
      {category}
    </p>

    <p className="text-lg text-align-left text-black-600 mb-4">
      {description}
    </p>

    {/* Price */}
    <span className="text-xl font-semibold text-gray-900 mb-4">
     Price:  ${price}
    </span>

    {/* Buttons */}
    <div className="flex items-center justify-center space-x-4 mt-4">
  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
    Add to Cart
  </button>
  <button className="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500">
    Delete
  </button>
</div>

  </div>
</div>

  );
};

export default ProductDetails;
