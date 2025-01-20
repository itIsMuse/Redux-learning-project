import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams();

  return (
    <div className='mt-20'>
      <h1>Product Details{id}</h1>
    </div>
  )
}

export default ProductDetails
