import React from 'react';
import Link from 'next/link';
import { vendors } from '@/data/vendors';
import Navbar from '../../components/layout/NavBar';
import VendorCard from '@/components/ui/VendorCard';

export default function VendorsPage() {
  return (
    <div className="font-mono text-gray-800 bg-gray-100 min-h-screen">
      <Navbar />
      
      <div className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition mb-4">
              <svg width="16" height="16" className="mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              back to home
            </Link>
            
            <h1 className="text-2xl font-bold lowercase">all vendors</h1>
            <p className="text-gray-600">Browse all trusted Instagram vendors</p>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {vendors.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}