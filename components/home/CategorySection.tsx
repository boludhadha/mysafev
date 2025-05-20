// components/home/CategorySection.tsx
import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Category } from '../../types/category';
import CategoryCard from '../ui/CategoryCard';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6 px-4 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold lowercase">What are you looking for?</h2>
        
        {/* Navigation controls grouped together */}
        <div className="flex items-center space-x-2">
          {/* Navigation buttons */}
          <div className="flex">
            <button 
              className="bg-gray-100 hover:bg-gray-200 rounded-l-full p-2 transition"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} color="#262626" />
            </button>
            <button 
              className="bg-gray-100 hover:bg-gray-200 rounded-r-full p-2 transition"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} color="#262626" />
            </button>
          </div>
          
          {/* See more button */}
          <Link 
            href="/categories" 
            className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
          >
            See more
          </Link>
        </div>
      </div>
      
      {/* Category scroll container */}
      <div 
        className="overflow-x-auto scrollbar-hide px-4 max-w-5xl mx-auto"
        style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
        ref={scrollContainerRef}
      >
        <div className="flex space-x-4 py-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;