// app/vendor/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Star, ExternalLink, Share2, Flag, MessageCircle } from 'lucide-react';
import { vendors } from '../../../data/vendors';
import Navbar from '../../../components/layout/NavBar';

// Generate static paths for all vendors
export function generateStaticParams() {
  return vendors.map((vendor) => ({
    id: vendor.id.toString(),
  }));
}

export default function VendorPage({ params }: { params: { id: string } }) {
  const vendorId = parseInt(params.id);
  const vendor = vendors.find(v => v.id === vendorId);

  // If vendor not found
  if (!vendor) {
    return (
      <div className="font-mono text-gray-800 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="px-4 py-8 max-w-4xl mx-auto">
          <Link href="/" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition mb-4">
            <ChevronLeft size={16} className="mr-1" />
            back to home
          </Link>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Vendor Not Found</h1>
            <p className="text-gray-600 mb-4">We couldn't find the vendor you're looking for.</p>
            <Link href="/vendors" className="text-blue-600 hover:underline">
              browse all vendors
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Generate star ratings
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={20} className="text-green-500" fill="#22c55e" />
      );
    }
    
    // Half star
    if (halfStar) {
      stars.push(
        <span key="half" className="relative inline-block">
          <Star size={20} className="text-gray-300" fill="#d1d5db" />
          <span className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={20} className="text-green-500" fill="#22c55e" />
          </span>
        </span>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={20} className="text-gray-300" fill="#d1d5db" />
      );
    }
    
    return stars;
  };

  // Mock reviews for this vendor
  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      date: "March 15, 2025",
      rating: 5,
      content: "Excellent service and quality products. I've ordered multiple times and have always been satisfied with my purchase. Shipping was fast and the packaging was secure."
    },
    {
      id: 2,
      user: "Michael Chen",
      date: "February 28, 2025",
      rating: 4,
      content: "Good experience overall. The products were as described and arrived on time. Customer service was responsive when I had questions."
    },
    {
      id: 3,
      user: "Aisha Patel",
      date: "January 10, 2025",
      rating: 5,
      content: "This vendor is amazing! Their communication was excellent throughout the order process, and they even followed up after delivery to make sure everything was satisfactory."
    }
  ];

  return (
    <div className="font-mono text-gray-800 bg-gray-100 min-h-screen">
      <Navbar />
      
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/vendors" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition mb-4">
            <ChevronLeft size={16} className="mr-1" />
            back to vendors
          </Link>
          
          {/* Vendor Profile Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start">
                {/* Logo */}
                <div className="w-24 h-24 mb-4 md:mb-0 md:mr-6 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center">
                  {vendor.logo ? (
                    <img 
                      src={vendor.logo} 
                      alt={`${vendor.name} logo`} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-gray-700">
                      {vendor.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                
                <div className="flex-1">
                  {/* Name and Category */}
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-1">{vendor.name}</h1>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                          {vendor.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Action buttons for desktop */}
                    <div className="hidden md:flex space-x-2">
                      <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                        <Share2 size={18} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                        <Flag size={18} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Website */}
                  <a 
                    href={`https://${vendor.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-600 hover:underline mb-3"
                  >
                    {vendor.website}
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderRating(vendor.rating)}
                    </div>
                    <span className="text-gray-700 text-lg font-medium">
                      {vendor.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({vendor.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  
                  {/* Action buttons for mobile */}
                  <div className="flex md:hidden space-x-2 mb-4">
                    <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                      <Share2 size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                      <Flag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="border-t border-gray-100 px-6 py-4">
              <h2 className="font-semibold text-gray-900 mb-2">About this vendor</h2>
              <p className="text-gray-700 text-sm">{vendor.description}</p>
            </div>
            
            {/* Call to Action */}
            <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-3 sm:mb-0">
                  <p className="text-sm text-gray-700">Have you purchased from this vendor?</p>
                </div>
                <Link 
                  href={`/review?vendor=${vendor.id}`}
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Write a review
                </Link>
              </div>
            </div>
          </div>
          
          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              
              {reviews.map(review => (
                <div key={review.id} className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{review.user}</h3>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} className="text-green-500" fill="#22c55e" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">{review.content}</p>
                </div>
              ))}
              
              <Link 
                href={`/reviews?vendor=${vendor.id}`}
                className="inline-flex items-center text-blue-600 hover:underline mt-4 text-sm"
              >
                View all {vendor.reviews} reviews
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Similar Vendors Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Similar Vendors</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vendors
                  .filter(v => v.category === vendor.category && v.id !== vendor.id)
                  .slice(0, 2)
                  .map(similarVendor => (
                    <Link key={similarVendor.id} href={`/vendor/${similarVendor.id}`}>
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex items-start">
                        <div className="w-12 h-12 overflow-hidden rounded-md bg-gray-100 flex-shrink-0 flex items-center justify-center mr-3">
                          {similarVendor.logo ? (
                            <img 
                              src={similarVendor.logo} 
                              alt={`${similarVendor.name} logo`} 
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-lg font-bold text-gray-700">
                              {similarVendor.name.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm mb-1">{similarVendor.name}</h3>
                          <div className="flex items-center">
                            <Star size={12} className="text-green-500" fill="#22c55e" />
                            <span className="text-xs text-gray-600 ml-1">
                              {similarVendor.rating.toFixed(1)} ({similarVendor.reviews.toLocaleString()})
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}