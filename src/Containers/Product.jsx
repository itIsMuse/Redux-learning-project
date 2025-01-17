import React from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product[0];
    <div className='col-4 bg-gray-200 p-4' key={id}>
    <a href="#" className ="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt="Card Image" className ="w-full h-48 object-cover rounded-t-lg"/>
<div className ="p-4">
    <h2 className ="text-lg font-semibold">{title}</h2>
    <p className ="text-gray-600">#{price}</p>
    <p className ="text-gray-600">{category}</p>
</div>
</a>
</div>
  })
  return (
   renderList
  )
}

export default Product
