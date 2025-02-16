import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Containers/Product";
import { setProducts, setFilteredProducts } from "../Redux/Actions/productAction.js";
import ClipLoader from "react-spinners/ClipLoader.js";

const ProductListings = () => {
  const dispatch = useDispatch();

  // Get products and filtered products from Redux store
  const products = useSelector((state) => state.allProducts.products);
  const filteredProducts = useSelector((state) => state.allProducts.filteredProducts);
  

  const [loading, setLoading] = useState(true);

  // Fetch products from API and store them in Redux
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data)); // Store products in Redux
      dispatch(setFilteredProducts(response.data)); // Initially, filteredProducts = all products
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };
   const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };


  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#4A90E2" size={100} />
      </div>
    );
  }

  return (
    <div>
      <Product products={filteredProducts} /> {/* Show only filtered products */}
    </div>
  );
};

export default ProductListings;
