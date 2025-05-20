import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Vendor } from '../../types/vendor';
import VendorCard from '../ui/VendorCard';

interface VendorSectionProps {
  vendors: Vendor[];
}

const VendorSection: React.FC<VendorSectionProps> = ({ vendors }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(
        scrollContainerRef.current.offsetWidth * 0.8, // 80% of the visible width
        500 // Maximum scroll amount
      );
      
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(
        scrollContainerRef.current.offsetWidth * 0.8, // 80% of the visible width
        500 // Maximum scroll amount
      );
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="px-4 mb-16">
      <div className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold lowercase">trusted vendors</h2>
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
          
          <Link 
            href="/vendors" 
            className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
          >
            See all
          </Link>
        </div>
      </div>
      
      {/* Horizontal scrolling container */}
      <div 
        className="overflow-x-auto scrollbar-hide max-w-5xl mx-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        ref={scrollContainerRef}
      >
        <div className="flex space-x-4 pb-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="min-w-[280px] w-[280px]">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorSection;