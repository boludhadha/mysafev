import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mb-15 max-w-2xl mx-auto">
      <input 
        type="text" 
        className="w-full py-4 px-5 pr-12 rounded-full border border-gray-200 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition text-lg"
        placeholder="search for products or instagram vendors..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition">
        <Search size={30} color="white" />
      </button>
    </div>
  );
};

export default SearchBar;