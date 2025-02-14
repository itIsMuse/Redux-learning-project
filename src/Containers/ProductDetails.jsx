import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/Actions/productAction';
import { addToCart } from '../Redux/cartSlice';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.allProducts.product);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetail();
    }
  }, [id, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const { title, image, price, category, description } = product;

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-5 mt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={image} 
            alt="Product Image" 
            className="w-full max-w-[300px] h-auto object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{category}</p>
          <p className="text-lg text-gray-700 mb-4">{description}</p>
          <span className="text-xl font-semibold text-gray-900 mb-4">Price: #{price}</span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
            <button 
              onClick={handleAddToCart}
              className="px-4 py-2 w-full sm:w-auto border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Add to Cart
            </button>
            <button className="px-4 py-2 w-full sm:w-auto border border-red-300 text-red-700 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
