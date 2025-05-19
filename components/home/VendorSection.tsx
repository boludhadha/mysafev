// components/home/VendorSection.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Vendor } from '../../types/vendor';
import VendorCard from '../ui/VendorCard';

interface VendorSectionProps {
  vendors: Vendor[];
}

const VendorSection: React.FC<VendorSectionProps> = ({ vendors }) => {
  // Use only the first 4 vendors for the home page
  const displayedVendors = vendors.slice(0, 8);
  
  return (
    <div className="px-4 mb-16">
      <div className="flex justify-between items-center mb-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold lowercase">Best in Wigs</h2>
        <Link href="/profile" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition">
          view all
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto">
        {displayedVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorSection;