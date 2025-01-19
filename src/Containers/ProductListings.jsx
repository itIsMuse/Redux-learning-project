import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'
import Product from '../Containers/Product'
import {setProducts} from '../Redux/Actions/productAction.js'

const ProductListings = () => {


  const dispatch = useDispatch()
  

  const fetchProducts =  async() => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchProducts();

  }, []);

  return (
    <div>
     <Product />
    </div>
  )
}

export default ProductListings
