import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../Redux/Actions/productAction.js";


const SearchBar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    if (query === "") {
      // If search is empty, reset filteredProducts to show all products
      const newProducts = products[0];
      dispatch(setFilteredProducts(newProducts));
      return;
    }
  
    // Ensure product.title exists before filtering
    const filtered = products[0].filter(
      (product) => product.title && product.title.toLowerCase().includes(query)
    );
  
    dispatch(setFilteredProducts(filtered));
    
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden ">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />

    </div>
  );
};

export default SearchBar;
