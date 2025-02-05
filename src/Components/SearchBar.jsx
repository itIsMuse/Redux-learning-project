import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Used for redirection

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`); // Redirect to search results page
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-1 mx-4 max-w-2xl border border-gray-300 rounded-lg overflow-hidden">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products, brands and categories"
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button type="submit" className="bg-orange-600 px-4 py-2 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
