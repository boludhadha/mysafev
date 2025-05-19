import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Category } from '../../types/category';
import CategoryCard from '../ui/CategoryCard';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      // Scrolling logic would go here
    }
  };

  return (
    <div className="px-4 mb-16">
      <div className="flex justify-between items-center mb-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold lowercase">What are you looking for?</h2>
        <Link href="/categories" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition">
          <button>See more</button>
        </Link>
      </div>
      
      <div className="relative max-w-2xl mx-auto">
        <div 
          className="overflow-x-auto scrollbar-hide" 
          style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className="flex space-x-5 pb-6 pl-2 pr-12">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
        
        {/* Right scroll button */}
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md p-3 hover:shadow-lg transition border border-gray-100"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={16} color="#262626" />
        </button>
      </div>
    </div>
  );
};

export default CategorySection;