import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Vendor } from '../../types/vendor';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <Link 
      href={`/vendor/${vendor.id}`} 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100"
    >
      <div className="h-36 bg-gray-200 relative">
        <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow-sm">
          {vendor.category || 'Other'}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1">{vendor.name}</h3>
        <div className="flex items-center text-xs text-gray-600">
          <span className="flex items-center">
            <Star size={12} fill="#FFD700" color="#FFD700" className="mr-1" />
            {vendor.rating}
          </span>
          <span className="mx-2">•</span>
          <span>{vendor.reviews} reviews</span>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;