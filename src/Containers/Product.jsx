import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../Redux/cartSlice'

const Product = ({handleAddToCart}) => {

  const dispatch = useDispatch();
  // const handleAddToCart = (product) => {
  //   dispatch(addToCart({ ...product, quantity: 1 }));
  // };
  const products = useSelector((state) => state.allProducts.filteredProducts); // Use filteredProducts for display
  const product = useSelector((state) => state.allProducts.product);

  return (
    <div className="mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.length > 0 ? (
        products.map((product) => {
          const { id, title, image, price, category } = product;
          return (
            <div key={id} className="p-3 block shadow-2xl rounded-xl shadow-xl transition duration-1000 hover:grow transition-shadow duration-300">
              <Link
                to={`/product/${id}`}
              >
                <img
                  src={image}
                  alt="Product Image"
                  className="w-full h-48 object-contain rounded-t-lg"
                />
              </Link>
                <div className="p-4">
                  <h2 className="text-lg text-white font-semibold">{title}</h2>
                  <p className="text-white">#{price}</p>
                  <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
                  <button
                    onClick={() => handleAddToCart(product)} // ✅ FIXED
                    className="z-10 px-4 py-2 w-full sm:w-auto border border-gray-300 text-white ro#04344bunded-md transition duration-1000 hover:bg-[#084f70] focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-1000"
                  >
                    Add to Cart
                  </button>
          </div>
                </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 col-span-full">No products found.</p>
      )}
    </div>
  );
};

export default Product;



// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const Product = () => {
//   const products = useSelector((state) => state.allProducts.products)
//   const updatedProduct = products
//   const renderList = updatedProduct[0].map((product) => {
//     const { id, title, image, price, category } = product;
//     return (
//       <div key = {id} className= 'p-4'>
//         <Link to={`/product/${id}`}
//           className="block bg-white border border-gray-200 rounded-lg shadow-md transition duration-1000 hover:grow transition-shadow duration-300"
//         >
//           <img
//             src={image}
//             alt="Card Image"
//             className="w-full h-48 object-contain rounded-t-lg"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold">{title}</h2>
//             <p className="text-gray-600">#{price}</p>
//             <p className="text-gray-600">{category}</p>
//           </div>
//         </Link>
//       </div>
//     );
//   })
  
//   return (
//     <div className = 'mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//     {renderList}
//     </div>
//   )
// }

// export default Product
