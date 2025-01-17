import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'
import Product from '../Containers/Product'
import {setProducts} from '../Redux/Actions/productAction.js'

const ProductListings = () => {

  const products = useSelector(state => state)
  const dispatch = useDispatch()
  

  const fetchProducts = async () => {
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
    <div className='mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
     <Product />
    </div>
  )
}

export default ProductListings
