import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/Actions/productAction.js';

const ProductDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  // const product = useSelector((state) => state.allproducts.product);

  // console.log('Product:', product);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
      console.log('Err: ', err);
    });
    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if (id && id !== '') fetchProductDetail();
  }, [id]);


  return (
    <div className='mt-20'>
      <h1>Product Details{id}</h1>
    </div>
  )
}

export default ProductDetails
