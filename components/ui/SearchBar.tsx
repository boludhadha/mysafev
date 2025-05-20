import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchQuery, 
  setSearchQuery,
  className = "max-w-5xl" 
}) => {
  return (
    <div className={`relative mb-8 mx-auto ${className}`}>
      <div className="flex w-full overflow-hidden rounded-lg border border-gray-300">
        <input 
          type="text" 
          className="w-full py-4 px-5 text-gray-700 bg-white focus:outline-none"
          placeholder="search for products or instagram vendors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-black text-white p-4 flex items-center justify-center hover:bg-gray-800 transition">
          <Search size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;