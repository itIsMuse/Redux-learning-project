import React from 'react'
import { useSelector } from 'react-redux'

const ProductListings = () => {

  const products = useSelector(state => state)
  console.log(products)

  return (
    <div className='mt-20'>
     <h1>Product listings</h1>
    </div>
  )
}

export default ProductListings
