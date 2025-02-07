import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { setFilteredProducts } from "../Redux/Actions/productAction.js";

const SearchBar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.filteredProducts);
  console.log(products[0])
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>{
      console.log(product.name.toLowerCase().includes(query))
      product.name.toLowerCase().includes(query)}
    );

    dispatch(setFilteredProducts(filtered)); // Update Redux store
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button className="bg-orange-600 px-4 py-2 text-white">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
