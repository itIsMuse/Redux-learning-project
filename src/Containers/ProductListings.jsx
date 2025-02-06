import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'
import Product from '../Containers/Product'
import {removeSelectedProduct, setProducts} from '../Redux/Actions/productAction.js'
import  ClipLoader  from 'react-spinners/ClipLoader.js'

const ProductListings = () => {


  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true); // Add a loading state
  const [filteredProducts, setFilteredProducts] = useState([])
  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  
    setFilteredProducts(filtered);
  };
  

  const fetchProducts =  async() => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(removeSelectedProduct())
      dispatch(setProducts(response.data));
      setFilteredProducts(response.data)
      setLoading(false); // Set loading to false after the data is fetched
    } catch (error) {
      console.log('Error:', error);
      setLoading(false); // Set loading to false if there is an error
    }
  };

  useEffect(() => {

    fetchProducts();

  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#4A90E2" size={100} /> {/* Spinner */}
      </div>
    );
  }

  return (
    <div>
     <Product />
    </div>
  )
}

export default ProductListings
