import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/Actions/productAction';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Getting the product ID from the URL
  const dispatch = useDispatch();

  // Use useSelector to get the product details from Redux state
  const product = useSelector((state) => state.product);

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

  // Render the product details once data is fetched
  return (
    <div className="mt-20">
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetails;
