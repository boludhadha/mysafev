// app/vendors/page.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { vendors } from '../../data/vendors';
import Navbar from '../../components/layout/NavBar';
import VendorCard from '../../components/ui/VendorCard';

export default function VendorsPage() {
  return (
    <div className="font-mono text-gray-800 bg-gray-100 min-h-screen">
      <Navbar />
      
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition mb-4">
              <ChevronLeft size={16} className="mr-1" />
              back to home
            </Link>
            
            <h1 className="text-2xl font-bold lowercase mb-2">all vendors</h1>
            <p className="text-gray-600 mb-6">Browse trusted Instagram vendors with verified reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendors.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}