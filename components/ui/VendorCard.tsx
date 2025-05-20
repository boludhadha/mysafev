// components/ui/VendorCard.tsx - Left-aligned vertical layout
import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Vendor } from '../../types/vendor';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  // Generate star ratings based on the rating value
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={16} className="text-green-500" fill="#22c55e" />
      );
    }
    
    // Half star
    if (halfStar) {
      stars.push(
        <span key="half" className="relative inline-block">
          <Star size={16} className="text-gray-300" fill="#d1d5db" />
          <span className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={16} className="text-green-500" fill="#22c55e" />
          </span>
        </span>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-300" fill="#d1d5db" />
      );
    }
    
    return stars;
  };

  return (
    <Link href={`/vendor/${vendor.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition h-full flex flex-col">
        {/* Logo at the top - left aligned */}
        <div className="mb-4">
          <div className="w-20 h-20 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
            {vendor.logo ? (
              <img 
                src={vendor.logo} 
                alt={`${vendor.name} logo`} 
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-700">
                {vendor.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>
        
        {/* Name - left aligned */}
        <h3 className="font-bold text-lg text-gray-900 mb-1">
          {vendor.name}
        </h3>
        
        {/* Website - left aligned */}
        <p className="text-xs text-gray-500 mb-3">
          {vendor.website}
        </p>
        
        {/* Rating - at the bottom, left aligned */}
        <div className="mt-auto">
          <div className="flex items-center">
            <div className="flex mr-1">
              {renderRating(vendor.rating)}
            </div>
            <span className="text-gray-700 text-sm font-medium">
              {vendor.rating.toFixed(1)}
            </span>
            <span className="text-gray-500 text-xs ml-1">
              ({vendor.reviews.toLocaleString()})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;