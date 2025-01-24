import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
  const products = useSelector((state) => state.allProducts.products)
  const updatedProduct = products
  const renderList = updatedProduct[0].map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key = {id} className= 'p-4'>
        <Link to={`/product/${id}`}
          className="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={image}
            alt="Card Image"
            className="w-full h-48 object-contain rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">#{price}</p>
            <p className="text-gray-600">{category}</p>
          </div>
        </Link>
      </div>
    );
  })
  
  return (
    <div className = 'mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {renderList}
    </div>
  )
}

export default Product
