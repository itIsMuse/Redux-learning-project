import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ handleAddToCart }) => {
  const products = useSelector((state) => state.allProducts.filteredProducts); // Use filteredProducts for display

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="mt-20 container mx-auto">
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="mb-10">
          {/* Category Heading */}
          <h2 className="text-2xl font-bold text-white mb-4 capitalize">
            {category}
          </h2>

          {/* Products in the Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {groupedProducts[category].map((product) => {
              const { id, title, image, price } = product;
              return (
                <div
                  key={id}
                  className="p-3 block shadow-2xl rounded-xl shadow-xl transition duration-1000 hover:grow transition-shadow duration-300"
                >
                  <Link to={`/product/${id}`}>
                    <img
                      src={image}
                      alt="Product Image"
                      className="w-full h-48 object-contain rounded-t-lg"
                    />
                  </Link>
                  <div className="p-4">
                    <h2 className="text-lg text-white font-semibold">{title}</h2>
                    <p className="text-white">#{price}</p>
                    <button
                      className="bg-blue-900 text-white  px-4 py-2 mt-2 rounded hover:bg-[#00102f]"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;