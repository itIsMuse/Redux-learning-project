import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Containers/Product";
import { setProducts, setFilteredProducts, selectedProduct } from "../Redux/Actions/productAction.js";
import ClipLoader from "react-spinners/ClipLoader.js";
import { addToCart } from '../Redux/cartSlice'
import { useParams } from "react-router-dom";

const ProductListings = () => {
  const dispatch = useDispatch();

  // Get products and filtered products from Redux store
  const products = useSelector((state) => state.allProducts.products);
  const filteredProducts = useSelector((state) => state.allProducts.filteredProducts);
  const product = useSelector((state) => state.allProducts.product);

  // console.log(product);
  

  const [loading, setLoading] = useState(true);

  // Fetch products from API and store them in Redux
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data)); // Store products in Redux
      dispatch(setFilteredProducts(response.data));
      dispatch(selectedProduct(response.data));
       // Initially, filteredProducts = all products
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  
   const handleAddToCart = (id) => {
   const allproducts = product
   const mappedProduct = allproducts.map((product) => {
    console.log(id)
   return  product.id === id ? {...product, quantity: 1} : product
     // if the product id is equal to the id then return the product with the quantity of 1  else return the product     
   }) /// where i stopped 
    // if (singleProduct) {
    //   dispatch(addToCart(singleProduct)); // Dispatch to cart
    // }
    // console.log(singleProduct);
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
      <Product products={filteredProducts} handleAddToCart = {() => handleAddToCart(product.id)}/> {/* Show only filtered products */}
    </div>
  );
};

export default ProductListings;
