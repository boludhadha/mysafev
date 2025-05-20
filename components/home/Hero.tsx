// components/home/Hero.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SearchBar from '../ui/SearchBar';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative px-4 pt-16 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200 rounded-full opacity-40 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 rounded-full opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-400 rounded-full opacity-20 transform translate-x-1/4 translate-y-1/4"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 lowercase">
          find instagram vendors you can trust
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-10 lowercase">
          real reviews by real people, shop with confidence
        </p>
        
        {/* Updated Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} className="max-w-3xl" />
        
        {/* Quick Action Button */}
        <div className="text-center mb-12">
          <Link 
            href="/review" 
            className="inline-flex items-center bg-white text-gray-800 border border-gray-300 rounded-full px-6 py-3 text-sm shadow-md hover:bg-gray-50 hover:border-gray-400 transition"
          >
            bought something recently? write a review
            <ArrowRight size={16} className="ml-2 text-gray-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;