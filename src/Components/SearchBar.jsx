import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Used for redirection

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button type="submit" className="bg-orange-600 px-4 py-2 text-white">
        <FaSearch />
      </button>
      </div>
  );
};

export default SearchBar;
